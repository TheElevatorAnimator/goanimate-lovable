// Speech synthesis utility for our intentionally bad TTS voices

const SPEECH_RATES = [0.5, 0.7, 1.2, 1.5];
const PITCH_VALUES = [0.5, 0.7, 1.3, 1.5, 2.0];

export interface SpeechOptions {
  text: string;
  rate?: number;
  pitch?: number;
  voiceIndex?: number;
  theme?: GoAnimateTheme;
  accent?: 'US' | 'UK';
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

export const getAvailableVoices = (accent?: 'US' | 'UK'): SpeechSynthesisVoice[] => {
  const voices = window.speechSynthesis.getVoices();
  if (!accent) return voices;
  
  return voices.filter(voice => 
    accent === 'US' ? voice.lang.includes('en-US') : voice.lang.includes('en-GB')
  );
};

export const speakText = (options: SpeechOptions): void => {
  const { text, rate = 1, pitch = 1, voiceIndex = 0, accent } = options;
  
  const utterance = new SpeechSynthesisUtterance(text);
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
