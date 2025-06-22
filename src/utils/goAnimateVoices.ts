
// Enhanced GoAnimate-style TTS voices optimized for iPad
export interface GoAnimateVoice {
  id: string;
  name: string;
  character: string;
  theme: string;
  rate: number;
  pitch: number;
  accent: 'US' | 'UK';
  ipadOptimized: boolean;
}

export const GOANIMATE_VOICES: GoAnimateVoice[] = [
  // Comedy World Voices
  {
    id: 'comedy-eric',
    name: 'Eric (Comedy World)',
    character: 'Eric',
    theme: 'comedyWorld',
    rate: 0.9,
    pitch: 1.1,
    accent: 'US',
    ipadOptimized: true
  },
  {
    id: 'comedy-jennifer',
    name: 'Jennifer (Comedy World)',
    character: 'Jennifer',
    theme: 'comedyWorld',
    rate: 1.1,
    pitch: 1.3,
    accent: 'US',
    ipadOptimized: true
  },
  {
    id: 'comedy-joey',
    name: 'Joey (Comedy World)',
    character: 'Joey',
    theme: 'comedyWorld',
    rate: 1.3,
    pitch: 0.8,
    accent: 'US',
    ipadOptimized: true
  },
  
  // Anime Voices
  {
    id: 'anime-sakura',
    name: 'Sakura (Anime)',
    character: 'Sakura',
    theme: 'anime',
    rate: 1.2,
    pitch: 1.4,
    accent: 'US',
    ipadOptimized: true
  },
  {
    id: 'anime-kenji',
    name: 'Kenji (Anime)',
    character: 'Kenji',
    theme: 'anime',
    rate: 0.8,
    pitch: 0.9,
    accent: 'US',
    ipadOptimized: true
  },
  
  // Space Citizens
  {
    id: 'space-captain',
    name: 'Captain Nova (Space)',
    character: 'Captain Nova',
    theme: 'space',
    rate: 0.7,
    pitch: 0.8,
    accent: 'US',
    ipadOptimized: true
  },
  {
    id: 'space-robot',
    name: 'Robot X-7 (Space)',
    character: 'Robot X-7',
    theme: 'space',
    rate: 0.6,
    pitch: 0.6,
    accent: 'US',
    ipadOptimized: true
  },
  
  // Lil' Peepz
  {
    id: 'lil-tommy',
    name: 'Tommy (Lil Peepz)',
    character: 'Tommy',
    theme: 'lil',
    rate: 1.4,
    pitch: 1.6,
    accent: 'US',
    ipadOptimized: true
  },
  {
    id: 'lil-sarah',
    name: 'Sarah (Lil Peepz)',
    character: 'Sarah',
    theme: 'lil',
    rate: 1.3,
    pitch: 1.5,
    accent: 'US',
    ipadOptimized: true
  },
  
  // Inanimate Insanity Voices
  {
    id: 'ii-bot',
    name: 'Bot (Inanimate Insanity)',
    character: 'Bot',
    theme: 'inanimateInsanity',
    rate: 0.8,
    pitch: 0.7,
    accent: 'US',
    ipadOptimized: true
  },
  {
    id: 'ii-cabby',
    name: 'Cabby (Inanimate Insanity)',
    character: 'Cabby',
    theme: 'inanimateInsanity',
    rate: 1.1,
    pitch: 1.2,
    accent: 'UK',
    ipadOptimized: true
  },
  {
    id: 'ii-test-tube',
    name: 'Test Tube (Inanimate Insanity)',
    character: 'Test Tube',
    theme: 'inanimateInsanity',
    rate: 0.9,
    pitch: 1.0,
    accent: 'US',
    ipadOptimized: true
  },
  
  // Classic GoAnimate Bad Voices (for authenticity)
  {
    id: 'bad-paul',
    name: 'Paul (Robotic)',
    character: 'Paul',
    theme: 'classic',
    rate: 0.5,
    pitch: 0.5,
    accent: 'US',
    ipadOptimized: true
  },
  {
    id: 'bad-julie',
    name: 'Julie (Screechy)',
    character: 'Julie',
    theme: 'classic',
    rate: 1.8,
    pitch: 2.0,
    accent: 'US',
    ipadOptimized: true
  }
];

export const getGoAnimateVoice = (voiceId: string): GoAnimateVoice | null => {
  return GOANIMATE_VOICES.find(voice => voice.id === voiceId) || null;
};

export const getVoicesByTheme = (theme: string): GoAnimateVoice[] => {
  return GOANIMATE_VOICES.filter(voice => voice.theme === theme);
};

export const getRandomGoAnimateVoice = (): GoAnimateVoice => {
  const randomIndex = Math.floor(Math.random() * GOANIMATE_VOICES.length);
  return GOANIMATE_VOICES[randomIndex];
};

// iPad-optimized voice selection
export const getIpadOptimizedVoices = (): GoAnimateVoice[] => {
  return GOANIMATE_VOICES.filter(voice => voice.ipadOptimized);
};
