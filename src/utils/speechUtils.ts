
// Speech synthesis utility using lazypy.ro/tts (StreamElements API)
import { GOANIMATE_VOICES, GoAnimateVoice, getGoAnimateVoice, getRandomGoAnimateVoice, getIpadOptimizedVoices } from './goAnimateVoices';
import { playLazypyTTS, playCharacterTTS, CHARACTER_VOICE_MAP, LAZYPY_VOICES, stopTTS } from './lazypyTTS';

const SPEECH_RATES = [0.5, 0.7, 1.2, 1.5];
const PITCH_VALUES = [0.5, 0.7, 1.3, 1.5, 2.0];

// Current audio element for stopping
let currentAudio: HTMLAudioElement | null = null;

export interface SpeechOptions {
  text: string;
  rate?: number;
  pitch?: number;
  voiceIndex?: number;
  theme?: GoAnimateTheme;
  accent?: 'US' | 'UK';
  goAnimateVoiceId?: string;
  useLazypyTTS?: boolean;
  lazypyVoiceId?: string;
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

// Main speak function - now uses lazypy.ro TTS by default
export const speakText = async (options: SpeechOptions): Promise<void> => {
  const { text, rate = 1, pitch = 1, voiceIndex = 0, accent, goAnimateVoiceId, useLazypyTTS = true, lazypyVoiceId } = options;
  
  // Stop any currently playing audio
  stopSpeaking();
  
  // Use lazypy.ro TTS (StreamElements API) by default
  if (useLazypyTTS) {
    try {
      // If a specific lazypy voice is specified, use it
      if (lazypyVoiceId) {
        currentAudio = await playLazypyTTS(text, lazypyVoiceId);
        return;
      }
      
      // If a GoAnimate voice ID is specified, map to lazypy voice
      if (goAnimateVoiceId && CHARACTER_VOICE_MAP[goAnimateVoiceId]) {
        currentAudio = await playCharacterTTS(text, goAnimateVoiceId);
        return;
      }
      
      // Default to Brian voice (the famous StreamElements TTS voice)
      currentAudio = await playLazypyTTS(text, 'Brian');
      return;
    } catch (error) {
      console.warn('lazypy.ro TTS failed, falling back to browser TTS:', error);
      // Fall through to browser TTS
    }
  }
  
  // Fallback: Use browser's SpeechSynthesis API
  const utterance = new SpeechSynthesisUtterance(text);
  
  // Use GoAnimate voice settings if specified
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

// Generate GoAnimate-style voice using lazypy TTS
export const generateGoAnimateVoice = (text: string, theme?: GoAnimateTheme): SpeechOptions => {
  const randomVoice = getRandomGoAnimateVoice();
  
  // Pick a random lazypy voice for variety
  const randomLazypyVoice = LAZYPY_VOICES[Math.floor(Math.random() * LAZYPY_VOICES.length)];
  
  return {
    text,
    rate: randomVoice.rate,
    pitch: randomVoice.pitch,
    accent: randomVoice.accent,
    theme: theme || null,
    goAnimateVoiceId: randomVoice.id,
    useLazypyTTS: true,
    lazypyVoiceId: randomLazypyVoice.id
  };
};

// For premium voices (PlotPlus subscribers) - uses high-quality Wavenet voices
export const generateBetterVoice = (text: string, theme: GoAnimateTheme = null, accent: 'US' | 'UK' = 'US'): SpeechOptions => {
  // Use Wavenet voices for premium
  const wavenetVoice = accent === 'UK' ? 'en-GB-Wavenet-A' : 'en-US-Wavenet-A';
  
  return {
    text,
    rate: 1.0,
    pitch: 1.0,
    voiceIndex: 0,
    theme,
    accent,
    useLazypyTTS: true,
    lazypyVoiceId: wavenetVoice
  };
};

export const stopSpeaking = (): void => {
  // Stop lazypy audio
  if (currentAudio) {
    stopTTS(currentAudio);
    currentAudio = null;
  }
  // Also stop browser TTS
  window.speechSynthesis.cancel();
};

// Export GoAnimate voices for use in components
export { GOANIMATE_VOICES, getGoAnimateVoice, getIpadOptimizedVoices };
// Export lazypy voices
export { LAZYPY_VOICES, playLazypyTTS, playCharacterTTS } from './lazypyTTS';
