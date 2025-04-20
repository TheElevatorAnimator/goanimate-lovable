// Animation utility functions

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
  videoMaker?: 'goanimate-comedy' | 'goanimate-anime' | 'goanimate-business' | 'plotagon' | 'scratchverse' | 'default';
};

// Mock data for our characters (GoAnimate style)
export const AVAILABLE_CHARACTERS: Character[] = [
  // Comedy World Characters
  {
    id: 'comedy1',
    name: 'Eric (Comedy World)',
    model: 'comedy-male',
    animations: ['walk', 'talk', 'wave', 'jump', 'dance', 'angry', 'confused', 'think'],
  },
  {
    id: 'comedy2',
    name: 'Julie (Comedy World)',
    model: 'comedy-female',
    animations: ['walk', 'talk', 'dance', 'sit', 'cheer', 'cry', 'laugh', 'point'],
  },
  {
    id: 'comedy3',
    name: 'David (Comedy World)',
    model: 'comedy-male-2',
    animations: ['walk', 'talk', 'wave', 'dance', 'jump', 'think', 'celebrate', 'laugh'],
  },
  {
    id: 'comedy4',
    name: 'Sarah (Comedy World)',
    model: 'comedy-female-2',
    animations: ['walk', 'talk', 'dance', 'wave', 'jump', 'cheer', 'sing', 'point'],
  },
  // Anime Characters
  {
    id: 'anime1',
    name: 'Kenji (Anime)',
    model: 'anime-male',
    animations: ['run', 'talk', 'fight', 'pose', 'special-attack', 'transform'],
  },
  {
    id: 'anime2',
    name: 'Sakura (Anime)',
    model: 'anime-female',
    animations: ['run', 'talk', 'magic', 'heal', 'special-move', 'victory'],
  },
  {
    id: 'anime3',
    name: 'Yuki (Anime)',
    model: 'anime-male-2',
    animations: ['run', 'talk', 'fight', 'jump', 'dash', 'power-up', 'victory'],
  },
  {
    id: 'anime4',
    name: 'Mei (Anime)',
    model: 'anime-female-2',
    animations: ['run', 'talk', 'dance', 'magic', 'heal', 'transform', 'spell'],
  },
  // Business Friendly Characters
  {
    id: 'business1',
    name: 'James (Business)',
    model: 'business-male',
    animations: ['walk', 'talk', 'present', 'type', 'handshake', 'call', 'meeting'],
  },
  {
    id: 'business2',
    name: 'Linda (Business)',
    model: 'business-female',
    animations: ['walk', 'talk', 'present', 'type', 'organize', 'plan', 'discuss'],
  },
  // Space Citizens
  {
    id: 'space1',
    name: 'Commander Zax',
    model: 'space-male',
    animations: ['float', 'talk', 'laser', 'jetpack', 'zero-gravity', 'salute'],
  },
  // Lil' Peepz
  {
    id: 'lil1',
    name: 'Lil\' Jimmy',
    model: 'lil-kid',
    animations: ['skip', 'talk', 'play', 'tantrum', 'giggle', 'hide'],
  },
  // Domo Characters
  {
    id: 'domo1',
    name: 'Domo-kun',
    model: 'domo',
    animations: ['bounce', 'talk', 'eat', 'rage', 'dance', 'sleep'],
  },
  // ScratchVerse Characters
  {
    id: 'scratch1',
    name: 'Scratch Cat',
    model: 'scratch-cat',
    animations: ['walk', 'talk', 'meow', 'dance', 'spin', 'grow', 'shrink'],
  },
  {
    id: 'scratch2',
    name: 'Gobo',
    model: 'scratch-gobo',
    animations: ['walk', 'talk', 'jump', 'dance', 'flip', 'wave', 'think'],
  },
  {
    id: 'scratch3',
    name: 'Giga',
    model: 'scratch-giga',
    animations: ['walk', 'talk', 'roar', 'stomp', 'sleep', 'stretch', 'play'],
  },
  {
    id: 'scratch4',
    name: 'Pico',
    model: 'scratch-pico',
    animations: ['walk', 'talk', 'sing', 'dance', 'drum', 'jump', 'laugh'],
  },
  // Additional ScratchVerse characters from the project
  {
    id: 'scratch5',
    name: 'Nano',
    model: 'scratch-nano',
    animations: ['walk', 'talk', 'jump', 'flip', 'dance', 'spin', 'wave'],
  },
  {
    id: 'scratch6',
    name: 'Tera',
    model: 'scratch-tera',
    animations: ['walk', 'talk', 'fly', 'magic', 'twirl', 'pose', 'float'],
  },
  {
    id: 'scratch7',
    name: 'Wizard',
    model: 'scratch-wizard',
    animations: ['walk', 'talk', 'cast', 'spell', 'teleport', 'meditate', 'wand'],
  },
  {
    id: 'scratch8',
    name: 'Penguin',
    model: 'scratch-penguin',
    animations: ['waddle', 'talk', 'slide', 'dive', 'fish', 'dance', 'flap'],
  },
  {
    id: 'scratch9',
    name: 'MS54',
    model: 'scratch-ms54',
    animations: ['walk', 'talk', 'code', 'debug', 'celebrate', 'think', 'type'],
  },
  {
    id: 'scratch10',
    name: 'Dreamer',
    model: 'scratch-dreamer',
    animations: ['walk', 'talk', 'dream', 'float', 'sparkle', 'imagine', 'create'],
  },
  {
    id: 'scratch11',
    name: 'Big M',
    model: 'scratch-bigm',
    animations: ['walk', 'talk', 'dance', 'jump', 'spin', 'flex', 'pose'],
  },
];

// Mock data for scene backgrounds
export const AVAILABLE_SCENES: Scene[] = [
  // Free scenes
  {
    id: 'scene1',
    name: 'Blocky Office',
    background: 'office',
    style: 'plotagon'
  },
  {
    id: 'scene2',
    name: 'Pixelated Park',
    background: 'park',
    style: 'plotagon'
  },
  {
    id: 'scene3',
    name: 'Lowpoly Beach',
    background: 'beach',
    style: 'plotagon'
  },
  {
    id: 'scene4',
    name: 'Voxel City',
    background: 'city',
    style: 'plotagon'
  },
  // Premium GoAnimate scenes
  {
    id: 'goanimate1',
    name: 'Comedy World School',
    background: 'school',
    isPremium: true,
    style: 'goanimate'
  },
  {
    id: 'goanimate2',
    name: 'Anime Dojo',
    background: 'dojo',
    isPremium: true,
    style: 'goanimate'
  },
  {
    id: 'goanimate3',
    name: 'Space Citizens Station',
    background: 'space-station',
    isPremium: true,
    style: 'goanimate'
  },
  {
    id: 'goanimate4',
    name: 'Lil\' Peepz Street',
    background: 'street',
    isPremium: true,
    style: 'goanimate'
  },
  // ScratchVerse scenes
  {
    id: 'scratch1',
    name: 'Scratch Stage',
    background: 'scratch-stage',
    style: 'scratchverse'
  },
  {
    id: 'scratch2',
    name: 'Scratch Park',
    background: 'scratch-park',
    style: 'scratchverse'
  },
  {
    id: 'scratch3',
    name: 'Scratch City',
    background: 'scratch-city',
    style: 'scratchverse'
  },
];

// Available video maker types (for subscription management)
export const VIDEO_MAKER_TYPES = [
  { id: 'goanimate-comedy', name: 'GoAnimate Comedy World', isPremium: true },
  { id: 'goanimate-anime', name: 'GoAnimate Anime', isPremium: true },
  { id: 'goanimate-business', name: 'GoAnimate Business Friendly', isPremium: true },
  { id: 'plotagon', name: 'Plotagon', isPremium: false },
  { id: 'scratchverse', name: 'ScratchVerse', isPremium: false },
];

// Create a new empty animation project
export const createNewProject = (name: string): AnimationProject => {
  return {
    id: `project-${Date.now()}`,
    name,
    characters: [],
    scene: AVAILABLE_SCENES[0].id,
    sequences: [],
    videoMaker: 'plotagon',
  };
};

// Add a sequence to the project
export const addSequence = (
  project: AnimationProject,
  characterId: string,
  animationName: string,
  startTime: number,
  duration: number,
  speech?: string
): AnimationProject => {
  const newSequence: AnimationSequence = {
    id: `seq-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    characterId,
    animationName,
    startTime,
    duration,
    speech,
  };

  return {
    ...project,
    sequences: [...project.sequences, newSequence],
  };
};

// Export project as a JSON string
export const exportProject = (project: AnimationProject): string => {
  return JSON.stringify(project, null, 2);
};

// Import project from a JSON string
export const importProject = (jsonString: string): AnimationProject => {
  try {
    return JSON.parse(jsonString) as AnimationProject;
  } catch (error) {
    console.error('Failed to import project:', error);
    throw new Error('Invalid project file');
  }
};
