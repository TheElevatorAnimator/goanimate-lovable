import React, { useEffect, useState } from 'react';
import { speakText, stopSpeaking, generateBadVoice, generateGoAnimateVoice, getAvailableVoices, SpeechOptions, GOANIMATE_THEMES, getThemeLabel, GoAnimateTheme, GOANIMATE_VOICES, getIpadOptimizedVoices } from '@/utils/speechUtils';
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
  const [selectedGoAnimateVoice, setSelectedGoAnimateVoice] = useState<string>('');
  const [isIpad, setIsIpad] = useState(false);
  
  useEffect(() => {
    // Detect iPad
    const detectIpad = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIpad(detectIpad);
    
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
    setSelectedGoAnimateVoice('');
  };

  const handleGoAnimateRandomize = () => {
    const goAnimateVoice = generateGoAnimateVoice(text, selectedTheme);
    setOptions(goAnimateVoice);
    setSelectedGoAnimateVoice(goAnimateVoice.goAnimateVoiceId || '');
  };

  const handleSave = () => {
    onVoiceSelected({
      ...options,
      theme: selectedTheme,
      goAnimateVoiceId: selectedGoAnimateVoice
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
    const theme = themeValue === "null" ? null : themeValue as GoAnimateTheme;
    setSelectedTheme(theme);
    setOptions(prev => ({ ...prev, theme }));
  };

  const handleGoAnimateVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const voiceId = e.target.value;
    setSelectedGoAnimateVoice(voiceId);
    
    if (voiceId) {
      const goAnimateVoice = GOANIMATE_VOICES.find(v => v.id === voiceId);
      if (goAnimateVoice) {
        setOptions(prev => ({
          ...prev,
          rate: goAnimateVoice.rate,
          pitch: goAnimateVoice.pitch,
          accent: goAnimateVoice.accent,
          goAnimateVoiceId: voiceId
        }));
      }
    }
  };

  const filteredVoices = isPremium 
    ? voices 
    : voices.filter((voice, index) => index < 3);

  const availableGoAnimateVoices = isIpad ? getIpadOptimizedVoices() : GOANIMATE_VOICES;
  const trialDaysRemaining = 21;

  return (
    <div className="bg-gradient-to-b from-orange-100 to-orange-200 p-4 rounded-lg border-4 border-orange-400 shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-orange-800 drop-shadow-md">🎤 GoAnimate Voice Studio</h2>
        {isIpad && (
          <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            📱 iPad Optimized
          </span>
        )}
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
      
      <div className="mb-4 bg-white/80 p-3 rounded-lg border-2 border-orange-300">
        <label className="block text-sm font-bold mb-1 text-orange-800">Preview Text</label>
        <div className="p-3 bg-gray-100 rounded min-h-[60px] border border-gray-300">
          {text || "No text provided. Add speech text to a character first!"}
        </div>
      </div>
      
      {/* GoAnimate Voice Selection */}
      <div className="mb-4 bg-gradient-to-r from-blue-200 to-purple-200 p-3 rounded-lg border-2 border-blue-400">
        <h3 className="font-bold text-blue-800 mb-2">🎭 GoAnimate Character Voices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-bold mb-1">Character Voice</label>
            <select 
              className="w-full p-2 border rounded bg-white"
              value={selectedGoAnimateVoice}
              onChange={handleGoAnimateVoiceChange}
            >
              <option value="">Select a GoAnimate Voice</option>
              {availableGoAnimateVoices.map((voice) => (
                <option key={voice.id} value={voice.id}>
                  {voice.name} ({voice.theme})
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-bold mb-1">Random GoAnimate Voice</label>
            <CustomButton 
              variant="accent" 
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold"
              onClick={handleGoAnimateRandomize}
            >
              🎲 Random Character Voice
            </CustomButton>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-bold mb-1">System Voice</label>
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
            <p className="text-xs text-orange-600 mt-1">
              Subscribe to PlotPlus for {voices.length - 3} more voices!
            </p>
          )}
        </div>
        
        {isPremium && (
          <div>
            <label className="block text-sm font-bold mb-1">Theme</label>
            <select
              className="w-full p-2 border rounded"
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
          </div>
        )}
        
        <div>
          <label className="block text-sm font-bold mb-1">Make it Weird!</label>
          <CustomButton 
            variant="accent" 
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold"
            onClick={handleRandomize}
          >
            🤪 Random Bad Voice
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
        <div className="mb-4 p-3 bg-yellow-100 rounded-lg text-sm border-2 border-yellow-400">
          <p className="font-bold">PlotPlus 3-Week Free Trial</p>
          <p>Enjoy better voices and premium themes for 21 days. Your subscription will automatically begin after your trial ends.</p>
        </div>
      )}
      
      <div className="flex space-x-2">
        {isPlaying ? (
          <CustomButton 
            variant="outline" 
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold border-4 border-red-700"
            onClick={handleStop}
          >
            ⏹️ Stop
          </CustomButton>
        ) : (
          <CustomButton 
            variant="primary" 
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold border-4 border-green-700"
            onClick={handlePlay}
            disabled={!text}
          >
            ▶️ Preview Voice
          </CustomButton>
        )}
        
        <CustomButton 
          variant="secondary" 
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold border-4 border-blue-700"
          onClick={handleSave}
          disabled={!text}
        >
          💾 Save Voice
        </CustomButton>
      </div>
    </div>
  );
};

export default VoiceGenerator;
