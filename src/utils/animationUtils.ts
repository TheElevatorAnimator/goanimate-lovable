
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

// Mock data for our low-poly characters
export const AVAILABLE_CHARACTERS: Character[] = [
  {
    id: 'char1',
    name: 'Blocky Bob',
    model: 'blocky-male',
    animations: ['walk', 'talk', 'wave', 'jump'],
  },
  {
    id: 'char2',
    name: 'Pixie Polygon',
    model: 'blocky-female',
    animations: ['walk', 'talk', 'dance', 'sit'],
  },
  {
    id: 'char3',
    name: 'Cube Carl',
    model: 'cube-person',
    animations: ['spin', 'talk', 'float', 'fall'],
  },
  {
    id: 'char4',
    name: 'Triangula',
    model: 'triangle-being',
    animations: ['rotate', 'talk', 'bounce', 'shrink'],
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
