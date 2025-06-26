
import React, { useState } from 'react';
import ThemeSelector from '@/components/ThemeSelector';
import CharacterCreator from '@/components/CharacterCreator';
import QuickVideoMakerWrapper from '@/components/QuickVideoMakerWrapper';
import GoAnimate2011VideoMaker from '@/components/GoAnimate2011VideoMaker';
import { AnimationProject } from '@/types/animation';

const VideoMaker = () => {
  const [selectedTheme, setSelectedTheme] = useState('');
  const [activeTab, setActiveTab] = useState<'quick' | 'full'>('quick');
  const [isSubscribed] = useState(false);
  const [createdCharacter, setCreatedCharacter] = useState<any>(null);
  const [showVideoMaker, setShowVideoMaker] = useState(false);
  
  // Default project for video maker
  const [currentProject, setCurrentProject] = useState<AnimationProject>({
    id: 'demo-project',
    name: 'Demo Video',
    scene: 'comedy-world-bedroom',
    characters: ['comedy-eric', 'comedy-jennifer'],
    sequences: [],
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
    <div className="min-h-screen goanimate-2011-gradient-blue">
      {/* Header */}
      <header className="goanimate-2011-header">
        <div className="container mx-auto p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded border border-gray-400 flex items-center justify-center shadow-sm">
                <span className="text-xl font-bold text-orange-600">G</span>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl font-bold goanimate-2011-text-white">
                    GoAnimate Video Maker
                  </h1>
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">
                    BETA
                  </span>
                </div>
                <p className="text-orange-200 text-xs">Create Amazing Videos Online!</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="goanimate-2011-card overflow-hidden">
            <div className="flex">
              <button
                onClick={() => setActiveTab('quick')}
                className={`flex-1 p-3 font-bold transition-colors ${
                  activeTab === 'quick'
                    ? 'goanimate-2011-button-green text-white'
                    : 'goanimate-2011-button'
                }`}
              >
                ⚡ Quick Video Maker
              </button>
              <button
                onClick={() => setActiveTab('full')}
                className={`flex-1 p-3 font-bold transition-colors ${
                  activeTab === 'full'
                    ? 'goanimate-2011-button-orange text-white'
                    : 'goanimate-2011-button'
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
          <div className="space-y-6">
            {showVideoMaker ? (
              <GoAnimate2011VideoMaker 
                project={currentProject}
                onUpdateProject={setCurrentProject}
              />
            ) : (
              <ThemeSelector
                selectedTheme={selectedTheme}
                onThemeSelect={handleThemeSelect}
                onOpenVideoMaker={handleOpenVideoMaker}
                isSubscribed={isSubscribed}
              />
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default VideoMaker;
