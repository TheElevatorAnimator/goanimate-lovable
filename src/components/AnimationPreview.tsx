import React, { useState, useEffect } from 'react';
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
  const [isBackgroundAnimating, setIsBackgroundAnimating] = useState(false);
  
  const currentScene = AVAILABLE_SCENES.find(scene => scene.id === project.scene);
  
  const handlePlay = () => {
    if (project.sequences.length === 0) {
      alert('No animation sequences to play. Add some first!');
      return;
    }
    
    setIsPlaying(true);
    setCurrentTime(0);
    
    const maxDuration = Math.max(
      ...project.sequences.map(seq => seq.startTime + seq.duration)
    );
    
    let timer: NodeJS.Timeout;
    let currentTimeValue = 0;
    
    const updateAnimation = () => {
      const active = project.sequences.filter(
        seq => currentTimeValue >= seq.startTime && 
               currentTimeValue < seq.startTime + seq.duration
      );
      
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

  const getSceneBackground = () => {
    if (!currentScene) return 'bg-gradient-to-br from-gray-800 to-gray-900';
    
    const animationClass = isBackgroundAnimating ? 'animate-pulse' : '';
    
    if (currentScene.style === 'goanimate' && currentScene.isPremium) {
      switch (currentScene.background) {
        case 'school':
          return `${animationClass} bg-gradient-to-br from-goanimate-comedyWorld to-goanimate-comedyWorld/70`;
        case 'dojo':
          return `${animationClass} bg-gradient-to-br from-goanimate-ninjaAnime to-goanimate-anime/70`;
        case 'space-station':
          return `${animationClass} bg-gradient-to-br from-goanimate-space to-black`;
        case 'street':
          return `${animationClass} bg-gradient-to-br from-goanimate-lil to-goanimate-lil/70`;
        default:
          return `${animationClass} bg-gradient-to-br from-purple-200 to-indigo-300`;
      }
    }
    
    if (currentScene.style === 'scratchverse') {
      switch (currentScene.background) {
        case 'scratch-stage':
          return `${animationClass} bg-gradient-to-br from-blue-400 to-blue-600`;
        case 'scratch-park':
          return `${animationClass} bg-gradient-to-br from-green-400 to-yellow-300`;
        case 'scratch-city':
          return `${animationClass} bg-gradient-to-br from-orange-400 to-red-500`;
        default:
          return `${animationClass} bg-gradient-to-br from-purple-200 to-indigo-300`;
      }
    }
    
    switch (currentScene.background) {
      case 'office':
        return `${animationClass} bg-gradient-to-br from-blue-100 to-blue-200`;
      case 'park':
        return `${animationClass} bg-gradient-to-br from-green-200 to-green-300`;
      case 'beach':
        return `${animationClass} bg-gradient-to-br from-yellow-100 to-blue-200`;
      case 'city':
        return `${animationClass} bg-gradient-to-br from-gray-300 to-gray-500`;
      default:
        return `${animationClass} bg-gradient-to-br from-purple-200 to-indigo-300`;
    }
  };

  useEffect(() => {
    setIsBackgroundAnimating(
      activeSequences.some(seq => seq.speech && savedVoices[seq.id]?.theme)
    );
  }, [activeSequences, savedVoices]);
  
  return (
    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg pixel-border">
      <h2 className="text-xl font-comic mb-4 text-dream-purple retro-text">Animation Preview</h2>
      
      <div className="aspect-video rounded-lg overflow-hidden relative mb-4">
        <div 
          className={`absolute inset-0 ${getSceneBackground()} flex items-center justify-center transition-all duration-500`}
        >
          {currentScene?.style === 'goanimate' && !project.isPremium && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <h3 className="text-xl mb-2">Premium Background</h3>
                <p>Subscribe to PlotPlus to unlock GoAnimate backgrounds!</p>
              </div>
            </div>
          )}
          
          {currentScene && currentScene.background === 'scratch-stage' && (
            <div className={`absolute inset-0 flex flex-wrap justify-around opacity-20 ${isBackgroundAnimating ? 'animate-bounce' : ''}`}>
              <div className="w-12 h-12 bg-white rounded-full m-2"></div>
              <div className="w-16 h-16 bg-yellow-400 rounded-full m-2"></div>
              <div className="w-10 h-10 bg-blue-400 rounded-full m-2"></div>
            </div>
          )}
          
          {currentScene && currentScene.background === 'scratch-park' && (
            <div className={`absolute inset-0 flex items-end justify-around ${isBackgroundAnimating ? 'animate-[wave_2s_ease-in-out_infinite]' : ''}`}>
              <div className="w-16 h-32 bg-green-600 rounded-t-full"></div>
              <div className="w-12 h-24 bg-green-700 rounded-t-full"></div>
              <div className="w-20 h-36 bg-green-500 rounded-t-full"></div>
            </div>
          )}
          
          {currentScene && currentScene.background === 'scratch-city' && (
            <div className={`absolute inset-0 flex items-end justify-around ${isBackgroundAnimating ? 'animate-[sway_4s_ease-in-out_infinite]' : ''}`}>
              <div className="w-12 h-40 bg-orange-600"></div>
              <div className="w-16 h-48 bg-red-500"></div>
              <div className="w-14 h-36 bg-orange-500"></div>
            </div>
          )}
          
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
