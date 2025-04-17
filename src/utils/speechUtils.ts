
// Speech synthesis utility for our intentionally bad TTS voices

const SPEECH_RATES = [0.5, 0.7, 1.2, 1.5];
const PITCH_VALUES = [0.5, 0.7, 1.3, 1.5, 2.0];

export interface SpeechOptions {
  text: string;
  rate?: number;
  pitch?: number;
  voiceIndex?: number;
}

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

export const stopSpeaking = (): void => {
  window.speechSynthesis.cancel();
};
