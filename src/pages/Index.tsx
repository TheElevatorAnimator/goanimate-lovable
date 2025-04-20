
import React, { useState, useEffect } from 'react';
import CharacterSelector from '@/components/CharacterSelector';
import SceneEditor from '@/components/SceneEditor';
import VoiceGenerator from '@/components/VoiceGenerator';
import AnimationPreview from '@/components/AnimationPreview';
import CustomButton from '@/components/ui/CustomButton';
import Watermark from '@/components/Watermark';
import SubscriptionManager from '@/components/SubscriptionManager';
import { AnimationProject, createNewProject, AnimationSequence } from '@/utils/animationUtils';
import { SpeechOptions } from '@/utils/speechUtils';

const Index = () => {
  const [project, setProject] = useState<AnimationProject>(() => createNewProject('My Animation'));
  const [activeTab, setActiveTab] = useState<'characters' | 'editor' | 'voice' | 'preview'>('characters');
  const [savedVoices, setSavedVoices] = useState<Record<string, SpeechOptions>>({});
  const [selectedSequence, setSelectedSequence] = useState<AnimationSequence | null>(null);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [trialActive, setTrialActive] = useState<boolean>(false);
  const [trialDaysRemaining, setTrialDaysRemaining] = useState<number>(21);
  const [pricingInfo] = useState({ usd: '0.99', gbp: '0.05' });
  const [isManageSubscriptionOpen, setIsManageSubscriptionOpen] = useState<boolean>(false);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
    }
  }, []);

  const handleSelectCharacter = (characterId: string) => {
    if (!project.characters.includes(characterId)) {
      setProject({
        ...project,
        characters: [...project.characters, characterId],
      });
    }
  };

  const handleRemoveCharacter = (characterId: string) => {
    setProject({
      ...project,
      characters: project.characters.filter(id => id !== characterId),
      sequences: project.sequences.filter(seq => seq.characterId !== characterId),
    });
  };

  const handleUpdateProject = (updatedProject: AnimationProject) => {
    setProject(updatedProject);
    
    const newSequence = updatedProject.sequences.find(
      seq => seq.speech && !project.sequences.some(s => s.id === seq.id)
    );
    
    if (newSequence) {
      setSelectedSequence(newSequence);
      setActiveTab('voice');
    }
  };

  const handleVoiceSelected = (options: SpeechOptions) => {
    if (selectedSequence) {
      setSavedVoices({
        ...savedVoices,
        [selectedSequence.id]: options,
      });
      setActiveTab('editor');
    }
  };

  const handleSubscribe = () => {
    setTrialActive(true);
    setIsSubscribed(true);
  };

  const handleVideoMakerChange = (videoMaker: string) => {
    setProject({
      ...project,
      videoMaker: videoMaker as AnimationProject['videoMaker'],
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-dream-purple/20 to-dream-blue/20">
      <Watermark isSubscribed={isSubscribed} pricingInfo={pricingInfo} />
      
      <header className="p-4 bg-dream-purple text-white shadow-md">
        <div className="container mx-auto">
          <h1 className="text-4xl text-center retro-text relative">
            <span className="glitch-effect" data-text="PlotagonMimic">
              PlotagonMimic
            </span>
          </h1>
          <p className="text-center text-dream-yellow animate-wobble">
            Create hilariously bad 3D animations!
          </p>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto p-4">
        {!isSubscribed ? (
          <div className="mb-6 bg-white/80 backdrop-blur-sm p-4 rounded-lg pixel-border">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-dream-purple mb-2">Upgrade to PlotPlus</h2>
                <p className="text-sm text-gray-600">
                  Get access to more human-sounding voices and premium features! Start with a 3-week free trial. 
                  Only {pricingInfo.usd} USD / {pricingInfo.gbp} GBP after trial ends.
                </p>
              </div>
              <CustomButton 
                variant="accent" 
                className="mt-3 sm:mt-0"
                onClick={handleSubscribe}
              >
                Start Free Trial
              </CustomButton>
            </div>
          </div>
        ) : trialActive ? (
          <div className="mb-6 bg-yellow-100 p-4 rounded-lg pixel-border">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-dream-purple mb-2">PlotPlus Trial Active</h2>
                <p className="text-sm text-gray-600">Your free trial ends in {trialDaysRemaining} days. You'll be automatically billed {pricingInfo.usd} USD / {pricingInfo.gbp} GBP after the trial period.</p>
              </div>
              <CustomButton 
                variant="secondary" 
                className="mt-3 sm:mt-0"
                onClick={() => setIsManageSubscriptionOpen(true)}
              >
                Manage Subscription
              </CustomButton>
            </div>
          </div>
        ) : null}
        
        <div className="mb-6 flex flex-wrap gap-2">
          <CustomButton
            variant={activeTab === 'characters' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('characters')}
          >
            Characters
          </CustomButton>
          <CustomButton
            variant={activeTab === 'editor' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('editor')}
          >
            Scene Editor
          </CustomButton>
          <CustomButton
            variant={activeTab === 'voice' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('voice')}
            disabled={!selectedSequence}
          >
            Voice Generator
          </CustomButton>
          <CustomButton
            variant={activeTab === 'preview' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('preview')}
          >
            Preview
          </CustomButton>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {activeTab === 'characters' && (
            <CharacterSelector 
              selectedCharacters={project.characters}
              onSelectCharacter={handleSelectCharacter}
              onRemoveCharacter={handleRemoveCharacter}
            />
          )}
          
          {activeTab === 'editor' && (
            <SceneEditor 
              project={project}
              onUpdateProject={handleUpdateProject}
            />
          )}
          
          {activeTab === 'voice' && selectedSequence?.speech && (
            <VoiceGenerator 
              text={selectedSequence.speech}
              onVoiceSelected={handleVoiceSelected}
              isPremium={isSubscribed}
            />
          )}
          
          {activeTab === 'preview' && (
            <AnimationPreview 
              project={project}
              savedVoices={savedVoices}
            />
          )}
        </div>
      </main>
      
      <footer className="p-4 bg-gray-800 text-white text-center">
        <p className="animate-pulse">
          PlotagonMimic - Making Bad Animations Since 2025
        </p>
        {trialActive ? (
          <p className="text-xs text-yellow-300 mt-1">PlotPlus Trial - {trialDaysRemaining} days remaining</p>
        ) : isSubscribed ? (
          <p className="text-xs text-yellow-300 mt-1">PlotPlus Subscriber</p>
        ) : null}
      </footer>

      <SubscriptionManager 
        isSubscribed={isSubscribed}
        isOpen={isManageSubscriptionOpen}
        onClose={() => setIsManageSubscriptionOpen(false)}
        onVideoMakerChange={handleVideoMakerChange}
        currentVideoMaker={project.videoMaker}
        trialDaysRemaining={trialActive ? trialDaysRemaining : undefined}
      />
    </div>
  );
};

export default Index;
