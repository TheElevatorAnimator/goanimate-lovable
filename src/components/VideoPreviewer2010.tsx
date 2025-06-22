
import React, { useState, useEffect } from 'react';
import { AnimationProject, AnimationSequence } from '@/types/animation';
import { AVAILABLE_SCENES } from '@/constants/scenes';
import { AVAILABLE_CHARACTERS } from '@/constants/characters';
import { speakText, stopSpeaking, SpeechOptions } from '@/utils/speechUtils';
import CustomButton from './ui/CustomButton';

interface VideoPreviewer2010Props {
  project: AnimationProject;
  savedVoices: Record<string, SpeechOptions>;
}

const VideoPreviewer2010: React.FC<VideoPreviewer2010Props> = ({ project, savedVoices }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeSequences, setActiveSequences] = useState<AnimationSequence[]>([]);
  const [progress, setProgress] = useState(0);
  
  const currentScene = AVAILABLE_SCENES.find(scene => scene.id === project.scene);
  const totalDuration = Math.max(...project.sequences.map(seq => seq.startTime + seq.duration), 10);

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

  const getScenePreview = () => {
    if (!currentScene) return 'No Scene';
    
    // 2010 style scene representations
    const sceneEmojis: Record<string, string> = {
      'office': '🏢',
      'park': '🌳',
      'beach': '🏖️',
      'city': '🏙️',
      'school': '🏫',
      'dojo': '🥋',
      'space-station': '🚀',
      'street': '🛣️',
      'scratch-stage': '🎭',
      'scratch-park': '🌲',
      'scratch-city': '🌆',
      'ii-hotel': '🏨'
    };
    
    return sceneEmojis[currentScene.background] || '🎬';
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-200 rounded-lg border-4 border-blue-400 shadow-xl">
      {/* 2010 GoAnimate Header */}
      <div className="bg-gradient-to-r from-orange-400 to-red-500 p-3 rounded-t-lg border-b-4 border-orange-600">
        <h2 className="text-xl font-bold text-white drop-shadow-lg flex items-center">
          📺 Video Preview Studio
        </h2>
        <p className="text-orange-100 text-sm">GoAnimate 2010 Edition</p>
      </div>
      
      {/* Video Screen */}
      <div className="p-4">
        <div className="bg-black rounded-lg border-4 border-gray-600 shadow-inner aspect-video relative overflow-hidden">
          {/* CRT Screen Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-transparent pointer-events-none"></div>
          
          {/* Scene Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
            <div className="text-6xl opacity-20">
              {getScenePreview()}
            </div>
          </div>
          
          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-4">
            {isPlaying ? (
              <div className="text-center animate-pulse">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-2xl font-bold mb-2">{currentScene?.name || 'Scene'}</h3>
                <p className="text-lg mb-4">Playing: {currentTime.toFixed(1)}s</p>
                
                {activeSequences.length > 0 ? (
                  <div className="space-y-2 max-w-md">
                    {activeSequences.map(seq => (
                      <div key={seq.id} className="bg-black/60 p-3 rounded-lg border border-green-400">
                        <p className="font-bold text-green-300">
                          {getCharacterName(seq.characterId)}
                        </p>
                        <p className="text-sm text-gray-300">{seq.animationName}</p>
                        {seq.speech && (
                          <p className="text-sm italic text-yellow-300 mt-1">
                            "{seq.speech}"
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-300">Waiting for action...</p>
                )}
              </div>
            ) : (
              <div className="text-center">
                <div className="text-6xl mb-4">🎭</div>
                <h3 className="text-2xl font-bold mb-2">Ready to Preview</h3>
                <p className="text-gray-300 mb-4">Click Play to start your GoAnimate video</p>
                <div className="bg-green-600/80 p-2 rounded">
                  <p className="text-sm">Scene: {currentScene?.name || 'None Selected'}</p>
                  <p className="text-sm">Characters: {project.characters.length}</p>
                  <p className="text-sm">Sequences: {project.sequences.length}</p>
                </div>
              </div>
            )}
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
        
        {/* 2010 Style Controls */}
        <div className="mt-4 bg-gradient-to-b from-gray-200 to-gray-400 p-4 rounded-lg border-2 border-gray-500">
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
              onClick={() => alert('Export feature coming soon! This would save your GoAnimate video.')}
            >
              💾 Save Video
            </CustomButton>
          </div>
          
          <div className="mt-3 text-center">
            <p className="text-sm font-bold text-gray-700">
              GoAnimate Video Maker 2010 - Make It. Share It. Love It!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPreviewer2010;
