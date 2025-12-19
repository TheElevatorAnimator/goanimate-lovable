
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ThemeSelector from '@/components/ThemeSelector';
import GoAnimate2011VideoMaker from '@/components/GoAnimate2011VideoMaker';
import { AnimationProject } from '@/types/animation';
import { GOANIMATE_THEMES } from '@/constants/videoMakers';

const FullVideoMaker = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const template = location.state?.template;
  
  const [selectedTheme, setSelectedTheme] = useState(template?.theme || '');
  const [showVideoMaker, setShowVideoMaker] = useState(false);
  const [isSubscribed] = useState(false);
  
  const [currentProject, setCurrentProject] = useState<AnimationProject>({
    id: 'demo-project',
    name: template?.name || 'New Video',
    scene: 'comedy-world-bedroom',
    characters: ['comedy-eric', 'comedy-jennifer'],
    sequences: [],
    isPremium: false
  });

  const handleThemeSelect = (themeId: string) => {
    setSelectedTheme(themeId);
  };

  const handleOpenVideoMaker = () => {
    setShowVideoMaker(true);
  };

  if (showVideoMaker) {
    return (
      <GoAnimate2011VideoMaker 
        project={currentProject}
        onUpdateProject={setCurrentProject}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-600 border-b-4 border-blue-700">
        <div className="container mx-auto p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => navigate('/video-maker')}
                className="text-white hover:text-blue-200"
              >
                ← Back
              </button>
              <div className="w-10 h-10 bg-white rounded border-2 border-gray-300 flex items-center justify-center shadow-md">
                <span className="text-xl font-bold text-blue-600">G</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white drop-shadow-md">
                  Full Video Maker
                </h1>
                <p className="text-blue-200 text-xs">Choose your theme to get started!</p>
              </div>
            </div>
            {template && (
              <div className="bg-white/20 text-white px-4 py-2 rounded-lg">
                <span className="text-sm">Using template: </span>
                <span className="font-bold">{template.name}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        {/* Template Info (if coming from Quick Video Maker) */}
        {template && (
          <div className="mb-6 bg-green-100 border-2 border-green-300 rounded-xl p-4">
            <div className="flex items-center space-x-4">
              <span className="text-4xl">{template.thumbnail}</span>
              <div>
                <h3 className="font-bold text-green-800">Template Selected: {template.name}</h3>
                <p className="text-green-700 text-sm">{template.description}</p>
                <p className="text-green-600 text-xs mt-1">
                  Now choose a theme to customize your video!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Theme Selection */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4">
            <h2 className="text-xl font-bold text-white">
              🎭 Select Your Theme
            </h2>
            <p className="text-purple-200 text-sm mt-1">
              Choose a character style for your video
            </p>
          </div>
          
          <div className="p-5">
            {/* Theme Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {GOANIMATE_THEMES.map((theme) => {
                const isSelected = selectedTheme === theme.id;
                const canUse = !theme.isPremium || isSubscribed;
                
                return (
                  <div 
                    key={theme.id}
                    className={`relative cursor-pointer transition-all duration-200 ${
                      !canUse ? 'opacity-60' : ''
                    }`}
                    onClick={() => canUse && handleThemeSelect(theme.id)}
                  >
                    <div className={`
                      bg-white rounded-xl border-2 p-4 text-center transition-all
                      ${isSelected 
                        ? 'border-purple-500 shadow-lg ring-2 ring-purple-200' 
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }
                      ${!canUse ? 'cursor-not-allowed' : 'cursor-pointer'}
                    `}>
                      {/* Premium Badge */}
                      {theme.isPremium && (
                        <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shadow-md">
                          ⭐
                        </div>
                      )}
                      
                      {/* Selected Badge */}
                      {isSelected && (
                        <div className="absolute -top-2 -left-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shadow-md">
                          ✓
                        </div>
                      )}
                      
                      {/* Theme Icon */}
                      <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-3xl border-2 border-gray-300">
                        {theme.style === 'business' && '👔'}
                        {theme.style === 'political' && '🗳️'}
                        {theme.style === 'comedy' && '😄'}
                        {theme.style === 'lil-peepz' && '👶'}
                        {theme.style === 'stick' && '🕴️'}
                        {theme.style === 'sci-fi' && '🚀'}
                        {theme.style === 'cartoon' && '🎭'}
                        {theme.style === 'military' && '🪖'}
                        {theme.style === 'ninja' && '🥷'}
                        {theme.style === 'space' && '👽'}
                        {theme.style === 'chibi' && '😊'}
                        {theme.style === 'lil-peepz-premium' && '👧'}
                        {theme.style === 'bfdi' && '🍃'}
                        {theme.style === 'inanimate-insanity' && '🔧'}
                        {theme.style === 'pokemon-alola' && '⚡'}
                      </div>
                      
                      {/* Theme Name */}
                      <h3 className="font-bold text-gray-800 text-sm mb-1">
                        {theme.name}
                      </h3>
                      
                      <p className="text-xs text-gray-500">
                        {theme.description}
                      </p>
                      
                      {/* Premium Warning */}
                      {theme.isPremium && !isSubscribed && (
                        <div className="mt-2">
                          <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-medium">
                            GoPlus Required
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Action Button */}
            <div className="mt-8 text-center">
              <button
                onClick={handleOpenVideoMaker}
                disabled={!selectedTheme}
                className={`px-8 py-3 rounded-xl font-bold text-lg shadow-lg transition-all ${
                  selectedTheme
                    ? 'bg-gradient-to-b from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {selectedTheme ? 'Start Creating →' : 'Select a Theme First'}
              </button>
              
              {selectedTheme && (
                <p className="text-green-600 mt-2 text-sm font-medium">
                  ✓ Theme selected: {GOANIMATE_THEMES.find(t => t.id === selectedTheme)?.name}
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FullVideoMaker;
