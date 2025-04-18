
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

  // Get scene background based on the current scene
  const getSceneBackground = () => {
    if (!currentScene) return 'bg-gradient-to-br from-gray-800 to-gray-900';
    
    // Return background based on scene name/type
    switch (currentScene.background) {
      case 'office':
        return 'bg-gradient-to-br from-blue-100 to-blue-200';
      case 'park':
        return 'bg-gradient-to-br from-green-200 to-green-300';
      case 'beach':
        return 'bg-gradient-to-br from-yellow-100 to-blue-200';
      case 'city':
        return 'bg-gradient-to-br from-gray-300 to-gray-500';
      default:
        return 'bg-gradient-to-br from-purple-200 to-indigo-300';
    }
  };
  
  return (
    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg pixel-border">
      <h2 className="text-xl font-comic mb-4 text-dream-purple retro-text">Animation Preview</h2>
      
      <div className="aspect-video rounded-lg overflow-hidden relative mb-4">
        {/* Scene background with visual elements */}
        <div 
          className={`absolute inset-0 ${getSceneBackground()} flex items-center justify-center`}
        >
          {/* Scene-specific decorative elements */}
          {currentScene && currentScene.background === 'office' && (
            <div className="absolute inset-0 flex flex-wrap justify-around opacity-20">
              <div className="w-16 h-20 bg-gray-600 m-2 rounded-sm"></div>
              <div className="w-24 h-16 bg-gray-800 m-2 rounded-sm"></div>
              <div className="w-20 h-14 bg-gray-700 m-2 rounded-sm"></div>
            </div>
          )}
          
          {currentScene && currentScene.background === 'park' && (
            <div className="absolute inset-0 flex items-end justify-around">
              <div className="w-20 h-32 bg-green-800 rounded-t-full"></div>
              <div className="w-16 h-24 bg-green-900 rounded-t-full"></div>
              <div className="w-24 h-40 bg-green-800 rounded-t-full"></div>
            </div>
          )}
          
          {currentScene && currentScene.background === 'beach' && (
            <div className="absolute inset-0">
              <div className="absolute bottom-0 w-full h-1/3 bg-yellow-200"></div>
              <div className="absolute top-4 right-8 w-16 h-16 bg-yellow-300 rounded-full opacity-80"></div>
            </div>
          )}
          
          {currentScene && currentScene.background === 'city' && (
            <div className="absolute inset-0 flex items-end justify-around">
              <div className="w-16 h-48 bg-gray-800 m-1"></div>
              <div className="w-12 h-64 bg-gray-900 m-1"></div>
              <div className="w-14 h-40 bg-gray-700 m-1"></div>
              <div className="w-10 h-56 bg-gray-800 m-1"></div>
              <div className="w-16 h-32 bg-gray-900 m-1"></div>
            </div>
          )}
          
          {/* Content overlay */}
          <div className="relative z-10 text-white text-center bg-black/40 p-4 rounded-lg max-w-md">
            <p className="text-2xl font-comic mb-2">{currentScene?.name || 'No Scene Selected'}</p>
            
            {isPlaying ? (
              <div className="animate-pulse">
                <p className="mb-2">Now Playing: {currentTime.toFixed(1)}s</p>
                
                {activeSequences.length > 0 ? (
                  <div className="space-y-1">
                    {activeSequences.map(seq => (
                      <div key={seq.id} className="bg-black/60 p-2 rounded">
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
