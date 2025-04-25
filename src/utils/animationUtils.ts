
import { AnimationProject, AnimationSequence } from '../types/animation';
import { AVAILABLE_SCENES } from '../constants/scenes';

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
