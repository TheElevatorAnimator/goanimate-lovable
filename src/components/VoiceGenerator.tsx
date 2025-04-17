
import React, { useEffect, useState } from 'react';
import { speakText, stopSpeaking, generateBadVoice, getAvailableVoices, SpeechOptions } from '@/utils/speechUtils';
import CustomButton from './ui/CustomButton';

interface VoiceGeneratorProps {
  text: string;
  onVoiceSelected: (options: SpeechOptions) => void;
}

const VoiceGenerator: React.FC<VoiceGeneratorProps> = ({ text, onVoiceSelected }) => {
  const [options, setOptions] = useState<SpeechOptions>({ text });
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Load available voices
    const loadVoices = () => {
      const availableVoices = getAvailableVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
      }
    };

    // Load voices immediately
    loadVoices();

    // Some browsers load voices asynchronously
    if (window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    // Set initial text value
    setOptions(prev => ({ ...prev, text }));

    // Clean up
    return () => {
      stopSpeaking();
      if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, [text]);

  const handlePlay = () => {
    stopSpeaking();
    speakText(options);
    setIsPlaying(true);
    
    // Approximating when speech is done
    const wordsCount = text.split(/\s+/).length;
    const approximateDuration = (wordsCount / 2) * 1000; // Very rough estimate: 2 words per second
    
    setTimeout(() => {
      setIsPlaying(false);
    }, approximateDuration);
  };

  const handleStop = () => {
    stopSpeaking();
    setIsPlaying(false);
  };

  const handleRandomize = () => {
    const badVoice = generateBadVoice(text);
    setOptions(badVoice);
  };

  const handleSave = () => {
    onVoiceSelected(options);
  };

  const handleVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const voiceIndex = parseInt(e.target.value, 10);
    setOptions(prev => ({ ...prev, voiceIndex }));
  };

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rate = parseFloat(e.target.value);
    setOptions(prev => ({ ...prev, rate }));
  };

  const handlePitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pitch = parseFloat(e.target.value);
    setOptions(prev => ({ ...prev, pitch }));
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg pixel-border">
      <h2 className="text-xl font-comic mb-4 text-dream-purple retro-text">Voice Generator</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">Preview Text</label>
        <div className="p-3 bg-gray-100 rounded min-h-[60px] border border-gray-300">
          {text || "No text provided. Add speech text to a character first!"}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-bold mb-1">Voice</label>
          <select 
            className="w-full p-2 border rounded"
            value={options.voiceIndex || 0}
            onChange={handleVoiceChange}
          >
            {voices.map((voice, index) => (
              <option key={`${voice.name}-${index}`} value={index}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-bold mb-1">Randomize Voice</label>
          <CustomButton 
            variant="accent" 
            className="w-full"
            onClick={handleRandomize}
          >
            Make it Weird!
          </CustomButton>
        </div>
        
        <div>
          <label className="block text-sm font-bold mb-1">Rate: {options.rate?.toFixed(1)}</label>
          <input 
            type="range" 
            className="w-full"
            min="0.5" 
            max="2" 
            step="0.1"
            value={options.rate || 1}
            onChange={handleRateChange}
          />
        </div>
        
        <div>
          <label className="block text-sm font-bold mb-1">Pitch: {options.pitch?.toFixed(1)}</label>
          <input 
            type="range" 
            className="w-full" 
            min="0.5" 
            max="2" 
            step="0.1"
            value={options.pitch || 1}
            onChange={handlePitchChange}
          />
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
            disabled={!text}
          >
            Preview Voice
          </CustomButton>
        )}
        
        <CustomButton 
          variant="secondary" 
          className="flex-1"
          onClick={handleSave}
          disabled={!text}
        >
          Save Voice
        </CustomButton>
      </div>
    </div>
  );
};

export default VoiceGenerator;
