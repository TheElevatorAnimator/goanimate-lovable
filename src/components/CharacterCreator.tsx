
import React from 'react';
import CustomButton from './ui/CustomButton';

interface CharacterCreatorProps {
  selectedTheme: string;
  isSubscribed: boolean;
  onCharacterCreated?: (character: {
    name: string;
    model: string;
    animations: string[];
  }) => void;
}

const CharacterCreator: React.FC<CharacterCreatorProps> = ({ 
  selectedTheme, 
  isSubscribed, 
  onCharacterCreated 
}) => {
  const handleOpenCreator = () => {
    // This would normally open the character creator iframe/window
    // For now, we'll just create a basic character
    const character = {
      name: "Custom Character",
      model: `${selectedTheme}-custom`,
      animations: ['walk', 'talk', 'dance', 'jump', 'wave', 'think', 'laugh', 'point'],
    };

    if (onCharacterCreated) {
      onCharacterCreated(character);
    }

    // Simple alert instead of toast for now
    alert("Character Created! Your custom character has been created successfully.");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border-2 border-purple-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-t-lg">
        <h2 className="text-2xl font-bold text-white drop-shadow-md flex items-center">
          🎨 {selectedTheme === 'comedy' ? 'Comedy World' : 'Character'} Creator
        </h2>
        <p className="text-purple-100 text-sm mt-1">
          Create your own custom {selectedTheme} character (2013 Edition)
        </p>
      </div>
      
      <div className="p-6">
        {/* Character Creator Preview */}
        <div className="bg-gradient-to-b from-sky-400 to-sky-500 rounded-lg p-8 mb-6 text-center">
          <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-4xl shadow-lg">
            🤓
          </div>
          <h3 className="text-white font-bold text-lg drop-shadow-md">
            Custom Character Preview
          </h3>
          <p className="text-sky-100 text-sm mt-2">
            Use the classic 2013 GoAnimate character creator tools
          </p>
        </div>
        
        {/* Feature List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-100 p-3 rounded-lg">
            <h4 className="font-bold text-sm mb-2">✨ Features</h4>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Custom hair styles</li>
              <li>• Face customization</li>
              <li>• Clothing options</li>
              <li>• Accessories</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <h4 className="font-bold text-sm mb-2">🎭 Animations</h4>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Walk & Run</li>
              <li>• Talk & Gesture</li>
              <li>• Dance moves</li>
              <li>• Expressions</li>
            </ul>
          </div>
        </div>
        
        {/* Action Button */}
        <CustomButton
          variant="primary"
          onClick={handleOpenCreator}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 shadow-lg"
        >
          🚀 Open Character Creator
        </CustomButton>
        
        <p className="text-center text-xs text-gray-500 mt-3">
          Characters created will be saved to your account
        </p>
      </div>
    </div>
  );
};

export default CharacterCreator;
