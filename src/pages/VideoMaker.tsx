
import React, { useState } from 'react';
import ThemeSelector from '@/components/ThemeSelector';
import CharacterCreator from '@/components/CharacterCreator';
import QuickVideoMakerWrapper from '@/components/QuickVideoMakerWrapper';
import EnhancedVideoPreview from '@/components/EnhancedVideoPreview';
import { AnimationProject } from '@/types/animation';

const VideoMaker = () => {
  const [selectedTheme, setSelectedTheme] = useState('');
  const [activeTab, setActiveTab] = useState<'quick' | 'full'>('quick');
  const [isSubscribed] = useState(false); // Mock subscription status
  const [createdCharacter, setCreatedCharacter] = useState<any>(null);
  const [showVideoMaker, setShowVideoMaker] = useState(false);
  
  // Default project for video preview
  const [currentProject] = useState<AnimationProject>({
    id: 'demo-project',
    name: 'Demo Video',
    scene: 'comedy-world-school',
    characters: ['comedy-eric', 'comedy-jennifer'],
    sequences: [
      {
        id: 'seq1',
        characterId: 'comedy-eric',
        animationName: 'talk',
        startTime: 0,
        duration: 3,
        speech: 'Welcome to GoAnimate!'
      },
      {
        id: 'seq2', 
        characterId: 'comedy-jennifer',
        animationName: 'wave',
        startTime: 2,
        duration: 2,
        speech: 'Let\'s make awesome videos!'
      }
    ],
    isPremium: false
  });

  const handleThemeSelect = (themeId: string) => {
    setSelectedTheme(themeId);
  };

  const handleCharacterCreated = (character: any) => {
    setCreatedCharacter(character);
    console.log('Character created:', character);
  };

  const handleOpenVideoMaker = () => {
    setShowVideoMaker(true);
    setActiveTab('full');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg border-b-4 border-orange-600">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-2xl font-bold text-orange-500">G</span>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-3xl font-bold text-white drop-shadow-lg">
                    GoAnimate Video Maker
                  </h1>
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                    BETA
                  </span>
                </div>
                <p className="text-orange-100 text-sm">Create Amazing Videos Online!</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-lg border-2 border-blue-300 overflow-hidden">
            <div className="flex">
              <button
                onClick={() => setActiveTab('quick')}
                className={`flex-1 p-4 font-bold text-lg transition-colors ${
                  activeTab === 'quick'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                ⚡ Quick Video Maker
              </button>
              <button
                onClick={() => setActiveTab('full')}
                className={`flex-1 p-4 font-bold text-lg transition-colors ${
                  activeTab === 'full'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                🎭 Full Video Maker
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'quick' ? (
          <QuickVideoMakerWrapper onOpenVideoMaker={handleOpenVideoMaker} />
        ) : (
          <div className="space-y-8">
            {showVideoMaker ? (
              <EnhancedVideoPreview 
                project={currentProject}
                savedVoices={{}}
              />
            ) : (
              <>
                <ThemeSelector
                  selectedTheme={selectedTheme}
                  onThemeSelect={handleThemeSelect}
                  isSubscribed={isSubscribed}
                />
                
                {selectedTheme && (
                  <CharacterCreator
                    selectedTheme={selectedTheme}
                    isSubscribed={isSubscribed}
                    onCharacterCreated={handleCharacterCreated}
                  />
                )}
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default VideoMaker;
