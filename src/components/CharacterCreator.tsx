
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
    <div className="p-4 border rounded-lg bg-white/50 backdrop-blur">
      <h3 className="text-lg font-bold mb-2">Comedy World Character Creator (2013)</h3>
      <p className="text-sm text-gray-600 mb-4">
        Create your own Comedy World character using the classic 2013 GoAnimate creator.
        Requires Puffin Browser for compatibility.
      </p>
      <CustomButton
        variant="primary"
        onClick={handleOpenCreator}
        className="w-full"
      >
        Open Character Creator
      </CustomButton>
    </div>
  );
};

export default CharacterCreator;
