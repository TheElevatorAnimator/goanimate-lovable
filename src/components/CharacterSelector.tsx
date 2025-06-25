
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
    // Map characters to Google Images or placeholder images
    const imageMap: Record<string, string> = {
      'comedy-eric': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      'comedy-jennifer': 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      'comedy-joey': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      'anime-sakura': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      'anime-kenji': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
      'space-captain': 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=150&h=150&fit=crop&crop=face',
      'space-robot': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=150&h=150&fit=crop',
      'lil-tommy': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=150&h=150&fit=crop&crop=face',
      'lil-sarah': 'https://images.unsplash.com/photo-1519457431-44c20addeb47?w=150&h=150&fit=crop&crop=face',
      'scratch-cat': 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=150&h=150&fit=crop',
      'scratch-dog': 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=150&h=150&fit=crop',
      'ii-bot': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=150&h=150&fit=crop',
      'ii-cabby': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=150&h=150&fit=crop',
      'ii-test-tube': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=150&h=150&fit=crop',
      'bfdi-leafy': 'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?w=150&h=150&fit=crop',
      'bfdi-firey': 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=150&h=150&fit=crop',
      'bfdi-bubble': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=150&h=150&fit=crop',
      'bfdi-pen': 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=150&h=150&fit=crop'
    };
    
    return imageMap[character.id] || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border-2 border-blue-300">
      {/* 2013 GoAnimate Style Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-t-lg">
        <h2 className="text-2xl font-bold text-white drop-shadow-md flex items-center">
          👥 Choose Your Characters
        </h2>
        <p className="text-blue-100 text-sm mt-1">
          Select characters for your video. GoPlus subscribers get BFDI characters!
        </p>
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
                  <div className={`w-16 h-16 rounded-full mb-2 overflow-hidden shadow-md border-2 ${
                    isSelected 
                      ? 'border-green-500' 
                      : 'border-blue-400'
                  }`}>
                    <img 
                      src={getCharacterImage(character)}
                      alt={character.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to a default image if the image fails to load
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face';
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
