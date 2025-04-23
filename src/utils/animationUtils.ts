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
  videoMaker?: 'goanimate-comedy' | 'goanimate-anime' | 'goanimate-business' | 'plotagon' | 'scratchverse' | 'default' | '2016-video-maker';
};

// Character limits for free users
export const FREE_CHARACTER_LIMITS = {
  'comedyWorld': 5,
  'lil': 6,
  'chibiPeepz': 5,
  'space': 6,
  'spacePeepz': 5,
  'chibiNinjas': 5
};

// Video length limits (in seconds)
export const VIDEO_LENGTH_LIMITS = {
  free: 30,
  premium: 120 // 2 minutes
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
  {
    id: 'comedy5',
    name: 'Boris (Caillou\'s Dad)',
    model: 'comedy-dad',
    animations: ['walk', 'talk', 'angry', 'ground', 'celebrate', 'think', 'point', 'laugh'],
  },
  {
    id: 'comedy6',
    name: 'Doris (Caillou\'s Mom)',
    model: 'comedy-mom',
    animations: ['walk', 'talk', 'comfort', 'hug', 'cook', 'read', 'smile', 'wave'],
  },
  {
    id: 'comedy7',
    name: 'Rosie (Caillou\'s Sister)',
    model: 'comedy-sister',
    animations: ['walk', 'talk', 'dance', 'play', 'jump', 'laugh', 'cry', 'hug'],
  },
  {
    id: 'comedy8',
    name: 'Custom Character (Requires Puffin Browser)',
    model: 'comedy-custom',
    animations: ['walk', 'talk', 'dance', 'jump', 'wave', 'think', 'laugh', 'point'],
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
  // Space Citizens
  {
    id: 'space1',
    name: 'Commander Zax',
    model: 'space-male',
    animations: ['float', 'talk', 'laser', 'jetpack', 'zero-gravity', 'salute'],
  },
  {
    id: 'space2',
    name: 'Captain Nova',
    model: 'space-female',
    animations: ['float', 'talk', 'scan', 'repair', 'combat', 'pilot'],
  },
  // Chibi Peepz
  {
    id: 'chibi1',
    name: 'Chibi Hero',
    model: 'chibi-hero',
    animations: ['run', 'jump', 'attack', 'pose', 'victory', 'defeat'],
  },
  {
    id: 'chibi2',
    name: 'Chibi Mage',
    model: 'chibi-mage',
    animations: ['cast', 'float', 'magic', 'meditate', 'teleport', 'celebrate'],
  },
  // Space Peepz
  {
    id: 'spacePeepz1',
    name: 'Star Explorer',
    model: 'space-peepz-explorer',
    animations: ['explore', 'scan', 'collect', 'communicate', 'research', 'analyze'],
  },
  {
    id: 'spacePeepz2',
    name: 'Alien Friend',
    model: 'space-peepz-alien',
    animations: ['float', 'greet', 'dance', 'teleport', 'transform', 'wave'],
  },
  // Chibi Ninjas
  {
    id: 'chibiNinja1',
    name: 'Shadow Warrior',
    model: 'chibi-ninja-warrior',
    animations: ['stealth', 'attack', 'throw', 'climb', 'meditate', 'disappear'],
  },
  {
    id: 'chibiNinja2',
    name: 'Swift Kunoichi',
    model: 'chibi-ninja-kunoichi',
    animations: ['dash', 'slice', 'jump', 'hide', 'reveal', 'victory'],
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

// Updated VIDEO_MAKER_TYPES with more detailed information
export const VIDEO_MAKER_TYPES = [
  { 
    id: 'goanimate-comedy', 
    name: 'GoAnimate Comedy World', 
    isPremium: true,
    maxCharacters: 'Unlimited with PlotPlus',
    assetCount: '100,000+ community characters'
  },
  { 
    id: '2016-video-maker', 
    name: 'GoAnimate 2016 Video Maker', 
    isPremium: true,
    description: 'Flash-based editor with millions of character combinations',
    requirements: 'Requires Puffin Browser',
    assets: {
      backgrounds: '100+',
      props: '1,000+',
      characters: '100,000+',
      music: 'Included'
    }
  },
  { 
    id: 'plotagon', 
    name: 'Plotagon', 
    isPremium: false,
    maxVideoLength: 30
  },
  { 
    id: 'scratchverse', 
    name: 'ScratchVerse', 
    isPremium: false,
    maxVideoLength: 30
  },
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

// Add a helper function to check if browser is Puffin
export const isPuffinBrowser = () => {
  return /Puffin/i.test(navigator.userAgent);
};
