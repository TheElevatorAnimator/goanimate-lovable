
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimationProject } from '@/types/animation';
import { createNewProject } from '@/utils/animationUtils';
import ThemeSelector from '@/components/ThemeSelector';
import CharacterSelector from '@/components/CharacterSelector';
import SceneEditor from '@/components/SceneEditor';
import VoiceGenerator from '@/components/VoiceGenerator';
import EnhancedVideoPreview from '@/components/EnhancedVideoPreview';
import VideoPreviewer2010 from '@/components/VideoPreviewer2010';
import CustomButton from '@/components/ui/CustomButton';
import Watermark from '@/components/Watermark';
import SubscriptionManager from '@/components/SubscriptionManager';
import { SpeechOptions } from '@/utils/speechUtils';

const VideoMaker = () => {
  const [project, setProject] = useState<AnimationProject>(() => createNewProject('My Animation'));
  const [activeTab, setActiveTab] = useState<'characters' | 'editor' | 'voice' | 'music' | 'sounds' | 'preview' | 'preview2010'>('characters');
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
      
      {/* Video Maker Header */}
      <header className="bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg border-b-4 border-orange-600">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-2xl font-bold text-orange-500">G</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white drop-shadow-lg">
                  GoAnimate Video Maker
                </h1>
                <p className="text-orange-100 text-sm">Make a Video Online for Free!</p>
              </div>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 px-3 py-1 rounded-full">
                <span className="text-white text-sm font-medium">Comedy World</span>
              </div>
              <div className="flex items-center space-x-2">
                <CustomButton variant="outline" className="bg-white/20 text-white hover:bg-white/30 text-xs px-2 py-1">
                  Import
                </CustomButton>
                <CustomButton variant="outline" className="bg-white/20 text-white hover:bg-white/30 text-xs px-2 py-1">
                  Copy
                </CustomButton>
                <CustomButton variant="outline" className="bg-white/20 text-white hover:bg-white/30 text-xs px-2 py-1">
                  Paste
                </CustomButton>
                <CustomButton 
                  variant="primary" 
                  className="bg-green-500 hover:bg-green-600 text-xs px-2 py-1"
                  onClick={() => setActiveTab('preview')}
                >
                  Preview
                </CustomButton>
                <CustomButton variant="primary" className="bg-blue-500 hover:bg-blue-600 text-xs px-2 py-1">
                  Save
                </CustomButton>
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
        
        {/* Tab Navigation */}
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
              🎤 Voice
            </CustomButton>
            <CustomButton
              variant={activeTab === 'music' ? 'primary' : 'outline'}
              onClick={() => setActiveTab('music')}
              className={`${
                activeTab === 'music' 
                  ? 'bg-green-500 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } px-4 py-2 rounded-md font-bold text-sm transition-all`}
            >
              🎵 Music
            </CustomButton>
            <CustomButton
              variant={activeTab === 'sounds' ? 'primary' : 'outline'}
              onClick={() => setActiveTab('sounds')}
              className={`${
                activeTab === 'sounds' 
                  ? 'bg-yellow-500 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } px-4 py-2 rounded-md font-bold text-sm transition-all`}
            >
              🔊 Sounds
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
              ▶️ Preview (2013)
            </CustomButton>
            <CustomButton
              variant={activeTab === 'preview2010' ? 'primary' : 'outline'}
              onClick={() => setActiveTab('preview2010')}
              className={`${
                activeTab === 'preview2010' 
                  ? 'bg-purple-500 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } px-4 py-2 rounded-md font-bold text-sm transition-all`}
            >
              📺 Preview (2010)
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
          
          {activeTab === 'music' && (
            <div className="bg-white rounded-lg shadow-lg border-2 border-green-300">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-t-lg">
                <h2 className="text-2xl font-bold text-white drop-shadow-md flex items-center">
                  🎵 Music Library
                </h2>
                <p className="text-green-100 text-sm mt-1">
                  Add background music to your video
                </p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">🎼 Free Music</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between bg-white p-2 rounded">
                        <span>Happy Tune</span>
                        <CustomButton size="sm" variant="outline">▶️</CustomButton>
                      </div>
                      <div className="flex items-center justify-between bg-white p-2 rounded">
                        <span>Upbeat Pop</span>
                        <CustomButton size="sm" variant="outline">▶️</CustomButton>
                      </div>
                      <div className="flex items-center justify-between bg-white p-2 rounded">
                        <span>Calm Ambient</span>
                        <CustomButton size="sm" variant="outline">▶️</CustomButton>
                      </div>
                    </div>
                  </div>
                  {isSubscribed && (
                    <div className="bg-yellow-100 p-4 rounded-lg">
                      <h3 className="font-bold mb-2">✨ GoPlus Music</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between bg-white p-2 rounded">
                          <span>BFDI Theme</span>
                          <CustomButton size="sm" variant="outline">▶️</CustomButton>
                        </div>
                        <div className="flex items-center justify-between bg-white p-2 rounded">
                          <span>Epic Battle</span>
                          <CustomButton size="sm" variant="outline">▶️</CustomButton>
                        </div>
                        <div className="flex items-center justify-between bg-white p-2 rounded">
                          <span>Dramatic Strings</span>
                          <CustomButton size="sm" variant="outline">▶️</CustomButton>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'sounds' && (
            <div className="bg-white rounded-lg shadow-lg border-2 border-yellow-300">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 rounded-t-lg">
                <h2 className="text-2xl font-bold text-white drop-shadow-md flex items-center">
                  🔊 Sound Effects & Voice Import
                </h2>
                <p className="text-yellow-100 text-sm mt-1">
                  Add sound effects or import voice clips
                </p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-bold mb-3">🎯 Sound Effects</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between bg-white p-2 rounded">
                        <span>Applause</span>
                        <CustomButton size="sm" variant="outline">▶️</CustomButton>
                      </div>
                      <div className="flex items-center justify-between bg-white p-2 rounded">
                        <span>Explosion</span>
                        <CustomButton size="sm" variant="outline">▶️</CustomButton>
                      </div>
                      <div className="flex items-center justify-between bg-white p-2 rounded">
                        <span>Door Slam</span>
                        <CustomButton size="sm" variant="outline">▶️</CustomButton>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <h3 className="font-bold mb-3">🎤 Import Voice Clips</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Import TTS voice clips from external tools
                    </p>
                    <div className="space-y-3">
                      <CustomButton 
                        variant="outline" 
                        className="w-full bg-white border-orange-400 text-orange-600 hover:bg-orange-50"
                      >
                        📂 Upload Audio File
                      </CustomButton>
                      <div className="text-center text-xs text-gray-500">
                        Supported: MP3, WAV, OGG
                      </div>
                      <div className="border-t pt-3">
                        <p className="text-sm font-medium mb-2">External TTS Tools:</p>
                        <div className="flex space-x-2">
                          <CustomButton size="sm" variant="outline" className="text-xs">
                            lazypy.ro
                          </CustomButton>
                          <CustomButton size="sm" variant="outline" className="text-xs">
                            ttstool.com
                          </CustomButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'preview' && (
            <EnhancedVideoPreview 
              project={project}
              savedVoices={savedVoices}
            />
          )}
          
          {activeTab === 'preview2010' && (
            <VideoPreviewer2010 
              project={project}
              savedVoices={savedVoices}
            />
          )}
        </div>
      </main>
      
      {/* Footer */}
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
            <span>Built with TypeScript & CSS</span>
            <span>•</span>
            <span>iPad Compatible</span>
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

export default VideoMaker;
