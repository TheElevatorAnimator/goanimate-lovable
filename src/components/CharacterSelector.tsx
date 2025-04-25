
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
    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg pixel-border">
      <h2 className="text-xl font-comic mb-4 text-dream-purple retro-text">Character Selection</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {AVAILABLE_CHARACTERS.map((character) => {
          const isSelected = selectedCharacters.includes(character.id);
          
          return (
            <div 
              key={character.id}
              className={`p-3 rounded transition-all ${
                isSelected 
                  ? 'bg-dream-purple/20 border-2 border-dream-purple' 
                  : 'bg-gray-100 hover:bg-dream-blue/10'
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-300 rounded-md mb-2 flex items-center justify-center">
                  {/* Placeholder for character image */}
                  <span className="text-4xl">{character.model.charAt(0).toUpperCase()}</span>
                </div>
                <h3 className="font-comic text-lg mb-1">{character.name}</h3>
                <p className="text-xs text-gray-600 mb-2">
                  Animations: {character.animations.length}
                </p>
                
                {isSelected ? (
                  <CustomButton 
                    variant="outline" 
                    size="sm"
                    onClick={() => onRemoveCharacter(character.id)}
                  >
                    Remove
                  </CustomButton>
                ) : (
                  <CustomButton
                    variant="primary"
                    size="sm"
                    onClick={() => onSelectCharacter(character.id)}
                  >
                    Add to Scene
                  </CustomButton>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterSelector;
