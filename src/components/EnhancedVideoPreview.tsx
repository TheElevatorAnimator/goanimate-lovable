import React, { useState, useEffect } from 'react';
import { AnimationProject, AnimationSequence } from '@/types/animation';
import { AVAILABLE_SCENES } from '@/constants/scenes';
import { AVAILABLE_CHARACTERS } from '@/constants/characters';
import { speakText, stopSpeaking, SpeechOptions } from '@/utils/speechUtils';
import CustomButton from './ui/CustomButton';

interface EnhancedVideoPreviewProps {
  project: AnimationProject;
  savedVoices: Record<string, SpeechOptions>;
}

const EnhancedVideoPreview: React.FC<EnhancedVideoPreviewProps> = ({ project, savedVoices }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeSequences, setActiveSequences] = useState<AnimationSequence[]>([]);
  const [progress, setProgress] = useState(0);
  
  const currentScene = AVAILABLE_SCENES.find(scene => scene.id === project.scene);
  const totalDuration = Math.max(...project.sequences.map(seq => seq.startTime + seq.duration), 10);

  const getCharacterImage = (characterId: string) => {
    const imageMap: Record<string, string> = {
      'comedy-eric': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      'comedy-jennifer': 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      'comedy-joey': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      'anime-sakura': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      'anime-kenji': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
      'space-captain': 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=100&h=100&fit=crop&crop=face',
      'space-robot': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&h=100&fit=crop',
      'lil-tommy': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=100&h=100&fit=crop&crop=face',
      'lil-sarah': 'https://images.unsplash.com/photo-1519457431-44c20addeb47?w=100&h=100&fit=crop&crop=face',
      'scratch-cat': 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=100&h=100&fit=crop',
      'scratch-dog': 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=100&h=100&fit=crop',
      'ii-bot': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&h=100&fit=crop',
      'ii-cabby': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=100&h=100&fit=crop',
      'ii-test-tube': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=100&h=100&fit=crop'
    };
    
    return imageMap[characterId] || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face';
  };

  const handlePlay = () => {
    if (project.sequences.length === 0) {
      alert('Create some animation sequences first!');
      return;
    }
    
    setIsPlaying(true);
    setCurrentTime(0);
    
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
      setProgress((currentTimeValue / totalDuration) * 100);
      
      currentTimeValue += 0.1;
      
      if (currentTimeValue <= totalDuration) {
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
    setProgress(0);
    stopSpeaking();
  };
  
  const getCharacterName = (characterId: string) => {
    const character = AVAILABLE_CHARACTERS.find(char => char.id === characterId);
    return character ? character.name : 'Unknown Character';
  };

  const getSceneBackground = () => {
    if (!currentScene) return 'bg-gradient-to-br from-gray-800 to-gray-900';
    
    switch (currentScene.background) {
      case 'office':
        return 'bg-gradient-to-br from-blue-100 to-blue-200';
      case 'park':
        return 'bg-gradient-to-br from-green-200 to-green-300';
      case 'beach':
        return 'bg-gradient-to-br from-yellow-100 to-blue-200';
      case 'city':
        return 'bg-gradient-to-br from-gray-300 to-gray-500';
      case 'school':
        return 'bg-gradient-to-br from-orange-200 to-yellow-300';
      case 'dojo':
        return 'bg-gradient-to-br from-red-200 to-orange-300';
      case 'space-station':
        return 'bg-gradient-to-br from-purple-900 to-black';
      case 'street':
        return 'bg-gradient-to-br from-gray-400 to-gray-600';
      case 'scratch-stage':
        return 'bg-gradient-to-br from-blue-400 to-blue-600';
      case 'scratch-park':
        return 'bg-gradient-to-br from-green-400 to-yellow-300';
      case 'scratch-city':
        return 'bg-gradient-to-br from-orange-400 to-red-500';
      case 'hotel-lobby':
        return 'bg-gradient-to-br from-purple-200 to-pink-300';
      default:
        return 'bg-gradient-to-br from-purple-200 to-indigo-300';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border-4 border-gray-300 overflow-hidden">
      {/* Video Preview Area */}
      <div className="aspect-video relative overflow-hidden">
        <div className={`absolute inset-0 ${getSceneBackground()} transition-all duration-500`}>
          {/* Scene Elements */}
          {currentScene?.background === 'office' && (
            <div className="absolute inset-0 flex items-end justify-around opacity-30">
              <div className="w-16 h-32 bg-brown-600 rounded-t"></div>
              <div className="w-20 h-24 bg-gray-400 rounded"></div>
              <div className="w-12 h-20 bg-brown-500 rounded-t"></div>
            </div>
          )}
          
          {currentScene?.background === 'park' && (
            <div className="absolute inset-0 flex items-end justify-around opacity-40">
              <div className="w-16 h-32 bg-green-600 rounded-t-full"></div>
              <div className="w-12 h-24 bg-green-700 rounded-t-full"></div>
              <div className="w-20 h-36 bg-green-500 rounded-t-full"></div>
            </div>
          )}
          
          {/* Character Display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex space-x-8">
              {activeSequences.map(seq => (
                <div key={seq.id} className="text-center animate-bounce">
                  <div className="w-16 h-16 mb-2 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={getCharacterImage(seq.characterId)}
                      alt={getCharacterName(seq.characterId)}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face';
                      }}
                    />
                  </div>
                  <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {getCharacterName(seq.characterId)}
                  </div>
                  <div className="bg-blue-500/80 text-white px-2 py-1 rounded mt-1 text-xs">
                    {seq.animationName}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Speech Bubbles */}
          {activeSequences.filter(seq => seq.speech).map(seq => (
            <div key={`speech-${seq.id}`} className="absolute top-4 left-4 right-4">
              <div className="bg-white border-4 border-black rounded-lg p-3 shadow-lg relative">
                <p className="text-black font-bold">{seq.speech}</p>
                <div className="absolute bottom-[-10px] left-6 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white"></div>
              </div>
            </div>
          ))}
          
          {/* Scene Label */}
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {currentScene?.name || 'No Scene'}
          </div>
          
          {/* Progress Bar */}
          {isPlaying && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2">
              <div className="bg-gray-700 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-green-400 h-full transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-300 mt-1">
                <span>{currentTime.toFixed(1)}s</span>
                <span>{totalDuration.toFixed(1)}s</span>
              </div>
            </div>
          )}
        </div>
        
        {/* Play/Stop Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-8xl mb-4">▶️</div>
              <p className="text-xl font-bold">Click Play to Preview</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Controls */}
      <div className="bg-gradient-to-r from-gray-200 to-gray-300 p-4 border-t-4 border-gray-400">
        <div className="flex justify-center space-x-4">
          {isPlaying ? (
            <CustomButton 
              variant="outline" 
              className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-full border-4 border-red-700 shadow-lg"
              onClick={handleStop}
            >
              ⏹️ Stop
            </CustomButton>
          ) : (
            <CustomButton 
              variant="primary" 
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full border-4 border-green-700 shadow-lg"
              onClick={handlePlay}
            >
              ▶️ Play Video
            </CustomButton>
          )}
          
          <CustomButton 
            variant="secondary" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-full border-4 border-blue-700 shadow-lg"
            onClick={() => alert('Export feature - this would save your GoAnimate video!')}
          >
            💾 Save Video
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default EnhancedVideoPreview;
