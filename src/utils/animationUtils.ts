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
];

// Mock data for scene backgrounds
export const AVAILABLE_SCENES: Scene[] = [
  {
    id: 'scene1',
    name: 'Blocky Office',
    background: 'office',
  },
  {
    id: 'scene2',
    name: 'Pixelated Park',
    background: 'park',
  },
  {
    id: 'scene3',
    name: 'Lowpoly Beach',
    background: 'beach',
  },
  {
    id: 'scene4',
    name: 'Voxel City',
    background: 'city',
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
