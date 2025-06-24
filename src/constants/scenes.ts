
import { Scene } from '../types/animation';

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
  {
    id: 'goanimate5',
    name: 'Comedy World Bedroom',
    background: 'bedroom',
    isPremium: true,
    style: 'goanimate'
  },
  {
    id: 'goanimate6',
    name: 'Comedy World Kitchen',
    background: 'kitchen',
    isPremium: true,
    style: 'goanimate'
  },
  {
    id: 'goanimate7',
    name: 'Comedy World Living Room',
    background: 'living-room',
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
  // Inanimate Insanity Scenes
  {
    id: 'ii1',
    name: 'Hotel OJ Lobby',
    background: 'hotel-lobby',
    style: 'default'
  },
  {
    id: 'ii2',
    name: 'Competition Ground',
    background: 'competition-area',
    style: 'default'
  },
  {
    id: 'ii3',
    name: 'Elimination Area',
    background: 'elimination-stage',
    style: 'default'
  },
  {
    id: 'ii4',
    name: 'Challenge Arena',
    background: 'challenge-field',
    style: 'default'
  },
];
