
import React, { useState, useEffect } from 'react';
import { AnimationProject } from '@/types/animation';
import { createNewProject } from '@/utils/animationUtils';
import CharacterSelector from '@/components/CharacterSelector';
import SceneEditor from '@/components/SceneEditor';
import VoiceGenerator from '@/components/VoiceGenerator';
import AnimationPreview from '@/components/AnimationPreview';
import CustomButton from '@/components/ui/CustomButton';
import Watermark from '@/components/Watermark';
import SubscriptionManager from '@/components/SubscriptionManager';
import { SpeechOptions } from '@/utils/speechUtils';

const Index = () => {
  const [project, setProject] = useState<AnimationProject>(() => createNewProject('My Animation'));
  const [activeTab, setActiveTab] = useState<'characters' | 'editor' | 'voice' | 'preview'>('characters');
  const [savedVoices, setSavedVoices] = useState<Record<string, SpeechOptions>>({});
  const [selectedSequence, setSelectedSequence] = useState<AnimationProject['sequences'][number] | null>(null);
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600">
      <Watermark isSubscribed={isSubscribed} pricingInfo={pricingInfo} />
      
      {/* Classic 2013 GoAnimate Header */}
      <header className="bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg border-b-4 border-orange-600">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-2xl font-bold text-orange-500">G</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white drop-shadow-lg">
                  GoAnimate Video Maker
                </h1>
                <p className="text-orange-100 text-sm">Make a Video Online for Free!</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 px-3 py-1 rounded-full">
                <span className="text-white text-sm font-medium">2013 Edition</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto p-4">
        {!isSubscribed ? (
          <div className="mb-6 bg-gradient-to-r from-yellow-300 to-yellow-400 p-4 rounded-lg shadow-lg border-2 border-yellow-500">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-yellow-800 mb-2">🎬 Upgrade to GoPlus!</h2>
                <p className="text-sm text-yellow-700">
                  Get unlimited characters, longer videos, and premium themes! Start with a 3-week free trial. 
                  Only {pricingInfo.usd} USD / {pricingInfo.gbp} GBP after trial ends.
                </p>
              </div>
              <CustomButton 
                variant="primary" 
                className="mt-3 sm:mt-0 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg"
                onClick={handleSubscribe}
              >
                🚀 Start Free Trial
              </CustomButton>
            </div>
          </div>
        ) : trialActive ? (
          <div className="mb-6 bg-gradient-to-r from-green-300 to-green-400 p-4 rounded-lg shadow-lg border-2 border-green-500">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-green-800 mb-2">✨ GoPlus Trial Active</h2>
                <p className="text-sm text-green-700">Your free trial ends in {trialDaysRemaining} days. You'll be automatically billed {pricingInfo.usd} USD / {pricingInfo.gbp} GBP after the trial period.</p>
              </div>
              <CustomButton 
                variant="secondary" 
                className="mt-3 sm:mt-0 bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-full"
                onClick={() => setIsManageSubscriptionOpen(true)}
              >
                Manage Subscription
              </CustomButton>
            </div>
          </div>
        ) : null}
        
        {/* Classic 2013 Tab Navigation */}
        <div className="mb-6 bg-white rounded-lg shadow-lg p-2 border-2 border-gray-300">
          <div className="flex flex-wrap gap-1">
            <CustomButton
              variant={activeTab === 'characters' ? 'primary' : 'outline'}
              onClick={() => setActiveTab('characters')}
              className={`${
                activeTab === 'characters' 
                  ? 'bg-blue-500 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } px-4 py-2 rounded-md font-bold text-sm transition-all`}
            >
              👥 Characters
            </CustomButton>
            <CustomButton
              variant={activeTab === 'editor' ? 'primary' : 'outline'}
              onClick={() => setActiveTab('editor')}
              className={`${
                activeTab === 'editor' 
                  ? 'bg-blue-500 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } px-4 py-2 rounded-md font-bold text-sm transition-all`}
            >
              🎬 Scene Editor
            </CustomButton>
            <CustomButton
              variant={activeTab === 'voice' ? 'primary' : 'outline'}
              onClick={() => setActiveTab('voice')}
              disabled={!selectedSequence}
              className={`${
                activeTab === 'voice' 
                  ? 'bg-blue-500 text-white shadow-md' 
                  : selectedSequence 
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              } px-4 py-2 rounded-md font-bold text-sm transition-all`}
            >
              🎤 Voice Generator
            </CustomButton>
            <CustomButton
              variant={activeTab === 'preview' ? 'primary' : 'outline'}
              onClick={() => setActiveTab('preview')}
              className={`${
                activeTab === 'preview' 
                  ? 'bg-blue-500 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } px-4 py-2 rounded-md font-bold text-sm transition-all`}
            >
              ▶️ Preview
            </CustomButton>
          </div>
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
      
      {/* Classic 2013 Footer */}
      <footer className="bg-gradient-to-r from-gray-600 to-gray-700 text-white text-center py-4 border-t-4 border-gray-500">
        <div className="container mx-auto">
          <p className="font-bold text-lg">
            🎭 GoAnimate - Make Videos Like Never Before!
          </p>
          <p className="text-gray-300 text-sm mt-1">
            {trialActive ? `GoPlus Trial - ${trialDaysRemaining} days remaining` : 
             isSubscribed ? 'GoPlus Subscriber' : 
             'Free Version - Upgrade for More Features!'}
          </p>
          <div className="mt-2 flex justify-center space-x-4 text-xs text-gray-400">
            <span>© 2013 GoAnimate Inc.</span>
            <span>•</span>
            <span>Flash Player Required</span>
            <span>•</span>
            <span>Compatible with Puffin Browser</span>
          </div>
        </div>
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
