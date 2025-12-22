// TTS utility using StreamElements API (same as lazypy.ro/tts)

export interface LazyPyVoice {
  id: string;
  name: string;
  displayName: string;
  api: 'StreamElements' | 'TikTok' | 'GoogleTranslate';
  language: string;
  gender: 'M' | 'F' | 'O';
}

// Popular voices from StreamElements (Amazon Polly)
export const LAZYPY_VOICES: LazyPyVoice[] = [
  // English (British)
  { id: 'Brian', name: 'Brian', displayName: 'Brian (English, British)', api: 'StreamElements', language: 'English', gender: 'M' },
  { id: 'Amy', name: 'Amy', displayName: 'Amy (English, British)', api: 'StreamElements', language: 'English', gender: 'F' },
  { id: 'Emma', name: 'Emma', displayName: 'Emma (English, British)', api: 'StreamElements', language: 'English', gender: 'F' },
  
  // English (American)
  { id: 'Joey', name: 'Joey', displayName: 'Joey (English, American)', api: 'StreamElements', language: 'English', gender: 'M' },
  { id: 'Justin', name: 'Justin', displayName: 'Justin (English, American)', api: 'StreamElements', language: 'English', gender: 'M' },
  { id: 'Matthew', name: 'Matthew', displayName: 'Matthew (English, American)', api: 'StreamElements', language: 'English', gender: 'M' },
  { id: 'Ivy', name: 'Ivy', displayName: 'Ivy (English, American)', api: 'StreamElements', language: 'English', gender: 'F' },
  { id: 'Joanna', name: 'Joanna', displayName: 'Joanna (English, American)', api: 'StreamElements', language: 'English', gender: 'F' },
  { id: 'Kendra', name: 'Kendra', displayName: 'Kendra (English, American)', api: 'StreamElements', language: 'English', gender: 'F' },
  { id: 'Kimberly', name: 'Kimberly', displayName: 'Kimberly (English, American)', api: 'StreamElements', language: 'English', gender: 'F' },
  { id: 'Salli', name: 'Salli', displayName: 'Salli (English, American)', api: 'StreamElements', language: 'English', gender: 'F' },
  
  // English (Australian)
  { id: 'Russell', name: 'Russell', displayName: 'Russell (English, Australian)', api: 'StreamElements', language: 'English', gender: 'M' },
  { id: 'Nicole', name: 'Nicole', displayName: 'Nicole (English, Australian)', api: 'StreamElements', language: 'English', gender: 'F' },
  
  // English (Indian)
  { id: 'Raveena', name: 'Raveena', displayName: 'Raveena (English, Indian)', api: 'StreamElements', language: 'English', gender: 'F' },
  
  // Google Cloud Wavenet voices
  { id: 'en-US-Wavenet-A', name: 'Wavenet-A', displayName: 'Linda (English, American)', api: 'StreamElements', language: 'English', gender: 'F' },
  { id: 'en-US-Wavenet-B', name: 'Wavenet-B', displayName: 'James (English, American)', api: 'StreamElements', language: 'English', gender: 'M' },
  { id: 'en-US-Wavenet-C', name: 'Wavenet-C', displayName: 'Sarah (English, American)', api: 'StreamElements', language: 'English', gender: 'F' },
  { id: 'en-US-Wavenet-D', name: 'Wavenet-D', displayName: 'Michael (English, American)', api: 'StreamElements', language: 'English', gender: 'M' },
  { id: 'en-US-Wavenet-E', name: 'Wavenet-E', displayName: 'Emily (English, American)', api: 'StreamElements', language: 'English', gender: 'F' },
  { id: 'en-US-Wavenet-F', name: 'Wavenet-F', displayName: 'Anna (English, American)', api: 'StreamElements', language: 'English', gender: 'F' },
  
  { id: 'en-GB-Wavenet-A', name: 'Wavenet-A', displayName: 'Bella (English, British)', api: 'StreamElements', language: 'English', gender: 'F' },
  { id: 'en-GB-Wavenet-B', name: 'Wavenet-B', displayName: 'John (English, British)', api: 'StreamElements', language: 'English', gender: 'M' },
  { id: 'en-GB-Wavenet-C', name: 'Wavenet-C', displayName: 'Victoria (English, British)', api: 'StreamElements', language: 'English', gender: 'F' },
  { id: 'en-GB-Wavenet-D', name: 'Wavenet-D', displayName: 'Ron (English, British)', api: 'StreamElements', language: 'English', gender: 'M' },
];

// Character to voice mapping for GoAnimate-style
export const CHARACTER_VOICE_MAP: Record<string, string> = {
  // Comedy World
  'comedy-eric': 'Brian',
  'comedy-jennifer': 'Emma',
  'comedy-joey': 'Justin',
  
  // Anime
  'anime-sakura': 'Ivy',
  'anime-kenji': 'Matthew',
  
  // Space Citizens
  'space-captain': 'en-US-Wavenet-D',
  'space-robot': 'en-US-Wavenet-B',
  
  // Lil' Peepz
  'lil-tommy': 'Justin',
  'lil-sarah': 'Ivy',
  
  // Inanimate Insanity
  'ii-bot': 'en-US-Wavenet-B',
  'ii-cabby': 'Emma',
  'ii-test-tube': 'en-GB-Wavenet-A',
  
  // BFDI
  'bfdi-leafy': 'Ivy',
  'bfdi-firey': 'Joey',
  'bfdi-bubble': 'Kimberly',
  'bfdi-pen': 'Matthew',
  'bfdi-coiny': 'Justin',
};

/**
 * Get the StreamElements TTS audio URL for a given text and voice
 */
export const getStreamElementsTTSUrl = (text: string, voice: string = 'Brian'): string => {
  const encodedText = encodeURIComponent(text);
  return `https://api.streamelements.com/kappa/v2/speech?voice=${voice}&text=${encodedText}`;
};

/**
 * Play TTS audio using StreamElements API
 */
export const playLazypyTTS = async (text: string, voiceId: string = 'Brian'): Promise<HTMLAudioElement> => {
  const url = getStreamElementsTTSUrl(text, voiceId);
  const audio = new Audio(url);
  
  return new Promise((resolve, reject) => {
    audio.oncanplaythrough = () => {
      audio.play()
        .then(() => resolve(audio))
        .catch(reject);
    };
    audio.onerror = () => reject(new Error('Failed to load TTS audio'));
    audio.load();
  });
};

/**
 * Play TTS for a character using their mapped voice
 */
export const playCharacterTTS = async (text: string, characterId: string): Promise<HTMLAudioElement> => {
  const voiceId = CHARACTER_VOICE_MAP[characterId] || 'Brian';
  return playLazypyTTS(text, voiceId);
};

/**
 * Get voice info by ID
 */
export const getLazypyVoice = (voiceId: string): LazyPyVoice | undefined => {
  return LAZYPY_VOICES.find(v => v.id === voiceId);
};

/**
 * Get voices by gender
 */
export const getVoicesByGender = (gender: 'M' | 'F' | 'O'): LazyPyVoice[] => {
  return LAZYPY_VOICES.filter(v => v.gender === gender);
};

/**
 * Stop currently playing TTS audio
 */
export const stopTTS = (audio: HTMLAudioElement | null): void => {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
};
