
export type Character = {
  id: string;
  name: string;
  model: string;
  animations: string[];
};

export type Scene = {
  id: string;
  name: string;
  background: string;
  isPremium?: boolean;
  style?: 'goanimate' | 'plotagon' | 'default' | 'scratchverse';
};

export type AnimationSequence = {
  id: string;
  characterId: string;
  animationName: string;
  startTime: number;
  duration: number;
  speech?: string;
};

export type AnimationProject = {
  id: string;
  name: string;
  characters: string[]; // Character IDs
  scene: string; // Scene ID
  sequences: AnimationSequence[];
  isPremium?: boolean;
  videoMaker?: 'goanimate-comedy' | 'goanimate-anime' | 'goanimate-business' | 'plotagon' | 'scratchverse' | 'inanimate-insanity' | 'default' | '2016-video-maker';
};
