
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
  return (
    <div className="bg-white rounded-lg shadow-lg border-2 border-blue-300">
      {/* 2013 GoAnimate Style Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-t-lg">
        <h2 className="text-2xl font-bold text-white drop-shadow-md flex items-center">
          👥 Choose Your Characters
        </h2>
        <p className="text-blue-100 text-sm mt-1">
          Select characters for your video. Free users get access to all character themes!
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
                {isSelected && (
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                )}
                
                <div className="flex flex-col items-center text-center">
                  {/* Character Avatar with 2013 Flash-style */}
                  <div className={`w-16 h-16 rounded-full mb-2 flex items-center justify-center text-2xl font-bold shadow-md ${
                    isSelected 
                      ? 'bg-gradient-to-b from-green-400 to-green-500 text-white' 
                      : 'bg-gradient-to-b from-blue-400 to-blue-500 text-white'
                  }`}>
                    {character.model.includes('comedy') && '🤓'}
                    {character.model.includes('anime') && '⚡'}
                    {character.model.includes('space') && '🚀'}
                    {character.model.includes('scratch') && '🐱'}
                    {character.model.includes('ii-') && '🔧'}
                    {character.model.includes('lil') && '👶'}
                    {character.model.includes('chibi') && '🥷'}
                    {character.model.includes('domo') && '👹'}
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
                    >
                      Add Character
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
