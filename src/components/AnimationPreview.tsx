
import React, { useState } from 'react';
import { 
  AnimationProject, 
  AVAILABLE_SCENES,
  AVAILABLE_CHARACTERS,
  AnimationSequence
} from '@/utils/animationUtils';
import { speakText, stopSpeaking, SpeechOptions } from '@/utils/speechUtils';
import CustomButton from './ui/CustomButton';

interface AnimationPreviewProps {
  project: AnimationProject;
  savedVoices: Record<string, SpeechOptions>;
}

const AnimationPreview: React.FC<AnimationPreviewProps> = ({ project, savedVoices }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeSequences, setActiveSequences] = useState<AnimationSequence[]>([]);
  
  const currentScene = AVAILABLE_SCENES.find(scene => scene.id === project.scene);
  
  const handlePlay = () => {
    if (project.sequences.length === 0) {
      alert('No animation sequences to play. Add some first!');
      return;
    }
    
    setIsPlaying(true);
    setCurrentTime(0);
    
    // Start the animation loop
    const maxDuration = Math.max(
      ...project.sequences.map(seq => seq.startTime + seq.duration)
    );
    
    let timer: NodeJS.Timeout;
    let currentTimeValue = 0;
    
    const updateAnimation = () => {
      // Find sequences that should be active at current time
      const active = project.sequences.filter(
        seq => currentTimeValue >= seq.startTime && 
               currentTimeValue < seq.startTime + seq.duration
      );
      
      // Handle newly active sequences
      const newlyActive = active.filter(
        seq => !activeSequences.some(as => as.id === seq.id)
      );
      
      newlyActive.forEach(seq => {
        if (seq.speech) {
          const speechOptions = savedVoices[seq.id] || { text: seq.speech };
          speakText(speechOptions);
        }
      });
      
      setActiveSequences(active);
      setCurrentTime(currentTimeValue);
      
      currentTimeValue += 0.1;
      
      if (currentTimeValue <= maxDuration) {
        timer = setTimeout(updateAnimation, 100);
      } else {
        handleStop();
      }
    };
    
    updateAnimation();
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  };
  
  const handleStop = () => {
    setIsPlaying(false);
    setActiveSequences([]);
    stopSpeaking();
  };
  
  const getCharacterName = (characterId: string) => {
    const character = AVAILABLE_CHARACTERS.find(char => char.id === characterId);
    return character ? character.name : 'Unknown Character';
  };
  
  return (
    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg pixel-border">
      <h2 className="text-xl font-comic mb-4 text-dream-purple retro-text">Animation Preview</h2>
      
      <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative mb-4">
        {/* Scene background */}
        <div 
          className="absolute inset-0 bg-dream-blue/30 flex items-center justify-center"
          style={{ backgroundImage: currentScene ? `url(/placeholder.svg)` : 'none' }}
        >
          <div className="text-white text-center">
            <p className="text-2xl font-comic mb-2">{currentScene?.name || 'No Scene Selected'}</p>
            
            {isPlaying ? (
              <div className="animate-pulse">
                <p className="mb-2">Now Playing: {currentTime.toFixed(1)}s</p>
                
                {activeSequences.length > 0 ? (
                  <div className="space-y-1">
                    {activeSequences.map(seq => (
                      <div key={seq.id} className="bg-black/30 p-2 rounded">
                        <p>{getCharacterName(seq.characterId)}: {seq.animationName}</p>
                        {seq.speech && (
                          <p className="text-sm italic">"{seq.speech}"</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Waiting for action...</p>
                )}
              </div>
            ) : (
              <p>Preview your animation here...</p>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex space-x-2">
        {isPlaying ? (
          <CustomButton 
            variant="outline" 
            className="flex-1"
            onClick={handleStop}
          >
            Stop
          </CustomButton>
        ) : (
          <CustomButton 
            variant="primary" 
            className="flex-1"
            onClick={handlePlay}
          >
            Play Animation
          </CustomButton>
        )}
        
        <CustomButton 
          variant="secondary" 
          className="flex-1"
          onClick={() => alert('This feature would export the animation in a real app!')}
        >
          Export Animation
        </CustomButton>
      </div>
    </div>
  );
};

export default AnimationPreview;
