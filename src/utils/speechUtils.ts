
// Speech synthesis utility for our intentionally bad TTS voices

const SPEECH_RATES = [0.5, 0.7, 1.2, 1.5];
const PITCH_VALUES = [0.5, 0.7, 1.3, 1.5, 2.0];

export interface SpeechOptions {
  text: string;
  rate?: number;
  pitch?: number;
  voiceIndex?: number;
  theme?: GoAnimateTheme;
}

export type GoAnimateTheme = 
  | 'comedyWorld' 
  | 'anime' 
  | 'ninjaAnime'
  | 'space'
  | 'lil'
  | 'domo'
  | '2016VideoMaker'
  | null;

export const GOANIMATE_THEMES: GoAnimateTheme[] = [
  'comedyWorld',
  'anime',
  'ninjaAnime',
  'space',
  'lil',
  'domo',
  '2016VideoMaker'
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
    default: return 'Default';
  }
};

export const getAvailableVoices = (): SpeechSynthesisVoice[] => {
  return window.speechSynthesis.getVoices();
};

export const speakText = (options: SpeechOptions): void => {
  const { text, rate = 1, pitch = 1, voiceIndex = 0 } = options;
  
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = getAvailableVoices();
  
  // If we have voices available, use the selected one
  if (voices.length > 0) {
    utterance.voice = voices[voiceIndex % voices.length];
  }
  
  utterance.rate = rate;
  utterance.pitch = pitch;
  
  window.speechSynthesis.speak(utterance);
};

export const generateBadVoice = (text: string): SpeechOptions => {
  // Randomly select speech parameters to make it sound intentionally bad
  const randomRate = SPEECH_RATES[Math.floor(Math.random() * SPEECH_RATES.length)];
  const randomPitch = PITCH_VALUES[Math.floor(Math.random() * PITCH_VALUES.length)];
  const voices = getAvailableVoices();
  const randomVoiceIndex = Math.floor(Math.random() * Math.max(1, voices.length));
  
  return {
    text,
    rate: randomRate,
    pitch: randomPitch,
    voiceIndex: randomVoiceIndex,
  };
};

// For premium voices (PlotPlus subscribers)
export const generateBetterVoice = (text: string, theme: GoAnimateTheme = null): SpeechOptions => {
  // Use more moderate parameters for better sounding voices
  return {
    text,
    rate: 1.0,
    pitch: 1.0,
    voiceIndex: 0, // Default to first voice, but user can select
    theme: theme,
  };
};

export const stopSpeaking = (): void => {
  window.speechSynthesis.cancel();
};
