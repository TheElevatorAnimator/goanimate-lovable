
import React, { useEffect, useState } from 'react';
import { speakText, stopSpeaking, generateBadVoice, getAvailableVoices, SpeechOptions, GOANIMATE_THEMES, getThemeLabel, GoAnimateTheme } from '@/utils/speechUtils';
import CustomButton from './ui/CustomButton';

interface VoiceGeneratorProps {
  text: string;
  onVoiceSelected: (options: SpeechOptions) => void;
  isPremium?: boolean;
}

const VoiceGenerator: React.FC<VoiceGeneratorProps> = ({ text, onVoiceSelected, isPremium = false }) => {
  const [options, setOptions] = useState<SpeechOptions>({ text });
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<GoAnimateTheme>(null);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = getAvailableVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
      }
    };

    loadVoices();

    if (window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    setOptions(prev => ({ ...prev, text }));

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
    
    const wordsCount = text.split(/\s+/).length;
    const approximateDuration = (wordsCount / 2) * 1000;
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
    setSelectedTheme(null);
  };

  const handleSave = () => {
    onVoiceSelected({
      ...options,
      theme: selectedTheme
    });
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

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const themeValue = e.target.value;
    // Fix: properly handle null by checking if the value is "null" string
    const theme = themeValue === "null" ? null : themeValue as GoAnimateTheme;
    setSelectedTheme(theme);
    setOptions(prev => ({ ...prev, theme }));
  };

  const filteredVoices = isPremium 
    ? voices 
    : voices.filter((voice, index) => index < 3);

  const trialDaysRemaining = 21;

  return (
    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg pixel-border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-dream-purple retro-text">Voice Generator</h2>
        {isPremium ? (
          <span className="bg-yellow-300 text-xs font-bold px-2 py-1 rounded">
            PlotPlus Active - Trial ends in {trialDaysRemaining} days
          </span>
        ) : (
          <span className="bg-gray-200 text-xs font-bold px-2 py-1 rounded">
            Free Version
          </span>
        )}
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">Preview Text</label>
        <div className="p-3 bg-gray-100 rounded min-h-[60px] border border-gray-300">
          {text || "No text provided. Add speech text to a character first!"}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-bold mb-1">Voice</label>
          <select 
            className="w-full p-2 border rounded"
            value={options.voiceIndex || 0}
            onChange={handleVoiceChange}
          >
            {filteredVoices.map((voice, index) => (
              <option key={`${voice.name}-${index}`} value={index}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </select>
          {!isPremium && (
            <p className="text-xs text-dream-purple mt-1">
              Subscribe to PlotPlus for {voices.length - 3} more human-sounding voices!
            </p>
          )}
        </div>
        
        {isPremium && (
          <div>
            <label className="block text-sm font-bold mb-1">Theme</label>
            <select
              className="w-full p-2 border rounded"
              // Fix: properly stringify the null value for comparison
              value={selectedTheme === null ? "null" : selectedTheme}
              onChange={handleThemeChange}
            >
              <option value="null">No Theme</option>
              {GOANIMATE_THEMES.map((theme) => (
                <option key={theme} value={theme}>
                  {getThemeLabel(theme)}
                </option>
              ))}
            </select>
            <p className="text-xs text-yellow-600 mt-1">
              {selectedTheme === '2016VideoMaker' && "Requires Flash - Use Puffin Browser"}
            </p>
          </div>
        )}
        
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
      
      {isPremium && (
        <div className="mb-4 p-3 bg-yellow-100 rounded-lg text-sm">
          <p className="font-bold">PlotPlus 3-Week Free Trial</p>
          <p>Enjoy better voices and premium themes for 21 days. Your subscription will automatically begin after your trial ends.</p>
        </div>
      )}
      
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
