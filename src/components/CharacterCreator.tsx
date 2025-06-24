
import React from 'react';
import { useToast } from "@/hooks/use-toast";
import CustomButton from './ui/CustomButton';
import { isPuffinBrowser } from '@/utils/animationUtils';

interface CharacterCreatorProps {
  onCharacterCreated: (character: {
    name: string;
    model: string;
    animations: string[];
  }) => void;
}

const CharacterCreator: React.FC<CharacterCreatorProps> = ({ onCharacterCreated }) => {
  const { toast } = useToast();

  const handleOpenCreator = () => {
    if (!isPuffinBrowser()) {
      toast({
        title: "Browser Compatibility Warning",
        description: "The GoAnimate Character Creator requires Puffin Browser to work properly. Please switch to Puffin Browser to use this feature.",
        variant: "destructive",
      });
      return;
    }

    // This would normally open the character creator iframe/window
    // For now, we'll just create a basic character
    onCharacterCreated({
      name: "Custom Character",
      model: "comedy-custom",
      animations: ['walk', 'talk', 'dance', 'jump', 'wave', 'think', 'laugh', 'point'],
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border-2 border-purple-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-t-lg">
        <h2 className="text-2xl font-bold text-white drop-shadow-md flex items-center">
          🎨 Comedy World Character Creator
        </h2>
        <p className="text-purple-100 text-sm mt-1">
          Create your own custom Comedy World character (2013 Edition)
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
        
        {/* Browser Requirements */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 mb-4">
          <h4 className="font-bold text-yellow-800 text-sm">⚠️ Browser Requirements</h4>
          <p className="text-yellow-700 text-xs mt-1">
            The GoAnimate Character Creator requires Puffin Browser for Adobe Flash compatibility.
          </p>
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
