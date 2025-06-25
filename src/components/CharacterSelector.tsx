
import React from 'react';
import { Character } from '@/types/animation';
import { AVAILABLE_CHARACTERS } from '@/constants/characters';
import CustomButton from './ui/CustomButton';

interface CharacterSelectorProps {
  selectedCharacters: string[];
  onSelectCharacter: (characterId: string) => void;
  onRemoveCharacter: (characterId: string) => void;
}

const CharacterSelector: React.FC<CharacterSelectorProps> = ({
  selectedCharacters,
  onSelectCharacter,
  onRemoveCharacter,
}) => {
  const getCharacterImage = (character: Character) => {
    // Map characters to actual GoAnimate, BFDI, and Inanimate Insanity character images
    const imageMap: Record<string, string> = {
      // GoAnimate Comedy World Characters
      'comedy-eric': 'https://goanimate.fandom.com/wiki/Eric?file=Eric.png',
      'comedy-jennifer': 'https://goanimate.fandom.com/wiki/Jennifer?file=Jennifer.png',
      'comedy-joey': 'https://goanimate.fandom.com/wiki/Joey?file=Joey.png',
      
      // Anime Characters (GoAnimate style)
      'anime-sakura': 'https://static.wikia.nocookie.net/goanimate/images/a/a5/Sakura.png',
      'anime-kenji': 'https://static.wikia.nocookie.net/goanimate/images/b/b2/Kenji.png',
      
      // Space Citizens
      'space-captain': 'https://static.wikia.nocookie.net/goanimate/images/c/c4/Captain_Nova.png',
      'space-robot': 'https://static.wikia.nocookie.net/goanimate/images/d/d8/Robot_X7.png',
      
      // Lil Peepz
      'lil-tommy': 'https://static.wikia.nocookie.net/goanimate/images/e/e2/Tommy.png',
      'lil-sarah': 'https://static.wikia.nocookie.net/goanimate/images/f/f4/Sarah.png',
      
      // Scratch Characters
      'scratch-cat': 'https://cdn2.scratch.mit.edu/get_image/user/default.png',
      'scratch-dog': 'https://cdn2.scratch.mit.edu/get_image/gallery/415289_200x130.png',
      
      // Inanimate Insanity Characters
      'ii-bot': 'https://static.wikia.nocookie.net/inanimateinsanity/images/a/a6/Bot_Pose.png',
      'ii-cabby': 'https://static.wikia.nocookie.net/inanimateinsanity/images/b/b5/Cabby_Pose.png',
      'ii-test-tube': 'https://static.wikia.nocookie.net/inanimateinsanity/images/c/c8/Test_Tube_Pose.png',
      
      // BFDI Characters
      'bfdi-leafy': 'https://static.wikia.nocookie.net/battlefordreamisland/images/f/f0/Leafy_BFDI.png',
      'bfdi-firey': 'https://static.wikia.nocookie.net/battlefordreamisland/images/3/35/Firey_BFDI.png',
      'bfdi-bubble': 'https://static.wikia.nocookie.net/battlefordreamisland/images/9/9f/Bubble_BFDI.png',
      'bfdi-pen': 'https://static.wikia.nocookie.net/battlefordreamisland/images/4/4f/Pen_BFDI.png'
    };
    
    return imageMap[character.id] || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face';
  };

  const handleGetGoPlus = () => {
    alert('🎬 Start your 3-week FREE trial of GoPlus!\n\n✨ Get access to:\n• Premium BFDI & II characters\n• HD video exports\n• No watermarks\n• Advanced themes\n• Priority support\n\nSign up now for just $0.99 USD / £0.05 GBP after trial!');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border-2 border-blue-300">
      {/* 2013 GoAnimate Style Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white drop-shadow-md flex items-center">
              👥 Choose Your Characters
            </h2>
            <p className="text-blue-100 text-sm mt-1">
              Select characters for your video. GoPlus subscribers get BFDI characters!
            </p>
          </div>
          <CustomButton
            variant="accent"
            onClick={handleGetGoPlus}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold px-4 py-2 rounded-full shadow-lg border-2 border-yellow-600 animate-pulse"
          >
            🚀 Get GoPlus Trial
          </CustomButton>
        </div>
      </div>
      
      <div className="p-6">
        {/* Character Categories */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
              Comedy World
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              Anime
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Space Citizens
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              ScratchVerse
            </span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
              Inanimate Insanity
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              BFDI (GoPlus)
            </span>
          </div>
        </div>
        
        {/* Character Grid with 2013 Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {AVAILABLE_CHARACTERS.map((character) => {
            const isSelected = selectedCharacters.includes(character.id);
            
            return (
              <div 
                key={character.id}
                className={`relative p-3 rounded-lg transition-all duration-200 cursor-pointer ${
                  isSelected 
                    ? 'bg-gradient-to-b from-green-200 to-green-300 border-2 border-green-500 shadow-lg transform scale-105' 
                    : 'bg-gradient-to-b from-gray-100 to-gray-200 border-2 border-gray-300 hover:from-blue-100 hover:to-blue-200 hover:border-blue-400 hover:shadow-md'
                }`}
              >
                {character.isPremium && (
                  <div className="absolute -top-2 -left-2 bg-yellow-400 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    ⭐
                  </div>
                )}
                
                {isSelected && (
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                )}
                
                <div className="flex flex-col items-center text-center">
                  {/* Character Image */}
                  <div className={`w-16 h-16 rounded-lg mb-2 overflow-hidden shadow-md border-2 bg-white ${
                    isSelected 
                      ? 'border-green-500' 
                      : 'border-blue-400'
                  }`}>
                    <img 
                      src={getCharacterImage(character)}
                      alt={character.name}
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        // Fallback to a colored placeholder if the image fails to load
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs">${character.name[0]}</div>`;
                        }
                      }}
                    />
                  </div>
                  
                  <h3 className="font-bold text-sm mb-1 text-gray-800">
                    {character.name}
                  </h3>
                  
                  <div className="flex items-center text-xs text-gray-600 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {character.animations.length} moves
                    </span>
                  </div>
                  
                  {isSelected ? (
                    <CustomButton 
                      variant="outline" 
                      size="sm"
                      onClick={() => onRemoveCharacter(character.id)}
                      className="bg-red-500 hover:bg-red-600 text-white border-red-600 font-bold text-xs px-3 py-1"
                    >
                      Remove
                    </CustomButton>
                  ) : (
                    <CustomButton
                      variant="primary"
                      size="sm"
                      onClick={() => onSelectCharacter(character.id)}
                      className="bg-green-500 hover:bg-green-600 text-white font-bold text-xs px-3 py-1 shadow-md"
                      disabled={character.isPremium && !true} // TODO: Replace with actual subscription status
                    >
                      {character.isPremium ? 'GoPlus Only' : 'Add Character'}
                    </CustomButton>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Selected Characters Summary */}
        {selectedCharacters.length > 0 && (
          <div className="mt-6 bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-lg border-2 border-green-300">
            <h3 className="font-bold text-green-800 mb-2">
              🎬 Selected Characters ({selectedCharacters.length})
            </h3>
            <p className="text-green-700 text-sm">
              Ready to create your animation! Switch to the Scene Editor to start building your video.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterSelector;
