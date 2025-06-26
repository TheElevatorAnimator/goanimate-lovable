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
    <div className="goanimate-2011-card">
      {/* Header */}
      <div className="goanimate-2011-gradient-blue p-4 rounded-t-lg">
        <h2 className="text-xl font-bold goanimate-2011-text-white">
          🎭 Full Video Maker
        </h2>
        <p className="text-blue-200 text-sm mt-1">
          Choose your theme to get started
        </p>
      </div>
      
      <div className="p-5">
        {/* Theme Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
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
                  goanimate-2011-card p-3 text-center bg-sky-100
                  ${isSelected 
                    ? 'border-yellow-400 shadow-lg transform scale-105' 
                    : 'hover:shadow-md'
                  }
                  ${!canUse ? 'cursor-not-allowed' : 'cursor-pointer'}
                `}>
                  {/* Premium Badge */}
                  {theme.isPremium && (
                    <div className="absolute -top-1 -right-1 bg-yellow-400 text-yellow-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      ⭐
                    </div>
                  )}
                  
                  {/* Selected Badge */}
                  {isSelected && (
                    <div className="absolute -top-1 -left-1 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                  )}
                  
                  {/* Theme Character/Icon */}
                  <div className="w-12 h-12 mx-auto mb-2 bg-white rounded border border-gray-400 flex items-center justify-center text-2xl shadow-sm">
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
                  <h3 className="font-bold text-gray-800 text-xs mb-1 goanimate-2011-text">
                    {theme.name}
                  </h3>
                  
                  {/* New Badge for some themes */}
                  {(theme.id === 'chibi-ninjas' || theme.id === 'space-peepz') && (
                    <div className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
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
                  <div className="text-center mt-1">
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
        <div className="mt-5 text-right">
          <button
            className="goanimate-2011-button text-sm px-3 py-2"
            onClick={() => window.location.hash = '#quick'}
          >
            Quick Video Maker ▶
          </button>
        </div>
        
        {/* Selected Theme Info */}
        {selectedTheme && (
          <div className="mt-5 bg-green-100 border border-green-400 p-3 rounded">
            <h3 className="font-bold text-green-800 mb-2 goanimate-2011-text">
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
