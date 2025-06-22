
// Speech synthesis utility for our intentionally bad TTS voices
import { GOANIMATE_VOICES, GoAnimateVoice, getGoAnimateVoice, getRandomGoAnimateVoice, getIpadOptimizedVoices } from './goAnimateVoices';

const SPEECH_RATES = [0.5, 0.7, 1.2, 1.5];
const PITCH_VALUES = [0.5, 0.7, 1.3, 1.5, 2.0];

export interface SpeechOptions {
  text: string;
  rate?: number;
  pitch?: number;
  voiceIndex?: number;
  theme?: GoAnimateTheme;
  accent?: 'US' | 'UK';
  goAnimateVoiceId?: string;
}

export type GoAnimateTheme = 
  | 'comedyWorld' 
  | 'anime' 
  | 'ninjaAnime'
  | 'space'
  | 'lil'
  | 'domo'
  | '2016VideoMaker'
  | 'inanimateInsanity'
  | null;

export const GOANIMATE_THEMES: GoAnimateTheme[] = [
  'comedyWorld',
  'anime',
  'ninjaAnime',
  'space',
  'lil',
  'domo',
  '2016VideoMaker',
  'inanimateInsanity'
];

export const getThemeLabel = (theme: GoAnimateTheme): string => {
  switch(theme) {
    case 'comedyWorld': return 'Comedy World';
    case 'anime': return 'Anime';
    case 'ninjaAnime': return 'Ninja Anime';
    case 'space': return 'Space Citizens';
    case 'lil': return 'Lil\' Peepz';
    case 'domo': return 'Domo';
    case '2016VideoMaker': return '2016 Video Maker (Flash)';
    case 'inanimateInsanity': return 'Inanimate Insanity';
    default: return 'Default';
  }
};

export const getAvailableVoices = (accent?: 'US' | 'UK'): SpeechSynthesisVoice[] => {
  const voices = window.speechSynthesis.getVoices();
  
  // On iPad, filter for better compatibility
  const isIpad = /iPad|iPhone|iPod/.test(navigator.userAgent);
  if (isIpad) {
    return voices.filter(voice => 
      voice.lang.includes('en-US') || voice.lang.includes('en-GB')
    ).slice(0, 8); // Limit to prevent performance issues on iPad
  }
  
  return voices.filter(voice => voice.lang.includes('en-US'));
};

export const speakText = (options: SpeechOptions): void => {
  const { text, rate = 1, pitch = 1, voiceIndex = 0, accent, goAnimateVoiceId } = options;
  
  const utterance = new SpeechSynthesisUtterance(text);
  
  // Use GoAnimate voice if specified
  if (goAnimateVoiceId) {
    const goAnimateVoice = getGoAnimateVoice(goAnimateVoiceId);
    if (goAnimateVoice) {
      utterance.rate = goAnimateVoice.rate;
      utterance.pitch = goAnimateVoice.pitch;
      
      const voices = getAvailableVoices(goAnimateVoice.accent);
      if (voices.length > 0) {
        utterance.voice = voices[0];
      }
      
      window.speechSynthesis.speak(utterance);
      return;
    }
  }
  
  // Fallback to regular voice selection
  const voices = getAvailableVoices(accent);
  
  if (voices.length > 0) {
    utterance.voice = voices[voiceIndex % voices.length];
  }
  
  utterance.rate = rate;
  utterance.pitch = pitch;
  
  window.speechSynthesis.speak(utterance);
};

export const generateBadVoice = (text: string, accent: 'US' | 'UK' = 'US'): SpeechOptions => {
  const randomRate = SPEECH_RATES[Math.floor(Math.random() * SPEECH_RATES.length)];
  const randomPitch = PITCH_VALUES[Math.floor(Math.random() * PITCH_VALUES.length)];
  const voices = getAvailableVoices(accent);
  const randomVoiceIndex = Math.floor(Math.random() * Math.max(1, voices.length));
  
  return {
    text,
    rate: randomRate,
    pitch: randomPitch,
    voiceIndex: randomVoiceIndex,
    accent,
  };
};

// Generate GoAnimate-style voice
export const generateGoAnimateVoice = (text: string, theme?: GoAnimateTheme): SpeechOptions => {
  const randomVoice = getRandomGoAnimateVoice();
  
  return {
    text,
    rate: randomVoice.rate,
    pitch: randomVoice.pitch,
    accent: randomVoice.accent,
    theme: theme || null,
    goAnimateVoiceId: randomVoice.id
  };
};

// For premium voices (PlotPlus subscribers)
export const generateBetterVoice = (text: string, theme: GoAnimateTheme = null, accent: 'US' | 'UK' = 'US'): SpeechOptions => {
  return {
    text,
    rate: 1.0,
    pitch: 1.0,
    voiceIndex: 0,
    theme,
    accent,
  };
};

export const stopSpeaking = (): void => {
  window.speechSynthesis.cancel();
};

// Export GoAnimate voices for use in components
export { GOANIMATE_VOICES, getGoAnimateVoice, getIpadOptimizedVoices };
