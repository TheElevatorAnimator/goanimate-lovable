
import React from 'react';
import { GOANIMATE_THEMES } from '@/constants/videoMakers';
import CustomButton from './ui/CustomButton';

interface ThemeSelectorProps {
  selectedTheme: string;
  onThemeSelect: (themeId: string) => void;
  onOpenVideoMaker: () => void;
  isSubscribed: boolean;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  selectedTheme,
  onThemeSelect,
  onOpenVideoMaker,
  isSubscribed
}) => {
  const handleThemeSelect = (themeId: string) => {
    onThemeSelect(themeId);
    onOpenVideoMaker();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border-2 border-blue-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-t-lg">
        <h2 className="text-2xl font-bold text-white drop-shadow-md flex items-center">
          🎭 Full Video Maker
        </h2>
        <p className="text-blue-100 text-sm mt-1">
          Choose your theme to get started
        </p>
      </div>
      
      <div className="p-6">
        {/* Theme Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
                {/* Theme Card */}
                <div className={`
                  bg-gradient-to-b from-sky-400 to-sky-500 rounded-lg p-4 text-center
                  border-2 transition-all duration-200
                  ${isSelected 
                    ? 'border-yellow-400 shadow-lg transform scale-105' 
                    : 'border-sky-600 hover:border-sky-400 hover:shadow-md'
                  }
                  ${!canUse ? 'cursor-not-allowed' : 'cursor-pointer'}
                `}>
                  {/* Premium Badge */}
                  {theme.isPremium && (
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      ⭐
                    </div>
                  )}
                  
                  {/* Selected Badge */}
                  {isSelected && (
                    <div className="absolute -top-2 -left-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                  )}
                  
                  {/* Theme Character/Icon */}
                  <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-lg flex items-center justify-center text-3xl shadow-md">
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
                  </div>
                  
                  {/* Theme Name */}
                  <h3 className="font-bold text-white text-sm mb-1 drop-shadow-md">
                    {theme.name}
                  </h3>
                  
                  {/* New Badge for some themes */}
                  {(theme.id === 'chibi-ninjas' || theme.id === 'space-peepz') && (
                    <div className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      New
                    </div>
                  )}
                </div>
                
                {/* Theme Description */}
                <p className="text-xs text-gray-600 mt-2 text-center">
                  {theme.description}
                </p>
                
                {/* Premium Warning */}
                {theme.isPremium && !isSubscribed && (
                  <div className="text-center mt-2">
                    <span className="text-xs text-orange-600 font-medium">
                      GoPlus Required
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Quick Video Maker Link */}
        <div className="mt-6 text-right">
          <CustomButton
            variant="outline"
            className="text-blue-600 border-blue-600 hover:bg-blue-50"
            onClick={() => window.location.hash = '#quick'}
          >
            Quick Video Maker ▶
          </CustomButton>
        </div>
        
        {/* Selected Theme Info */}
        {selectedTheme && (
          <div className="mt-6 bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-lg border-2 border-green-300">
            <h3 className="font-bold text-green-800 mb-2">
              🎬 Theme Selected: {GOANIMATE_THEMES.find(t => t.id === selectedTheme)?.name}
            </h3>
            <p className="text-green-700 text-sm">
              Opening video maker...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSelector;
