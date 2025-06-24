
import { Character } from '../types/animation';

export const AVAILABLE_CHARACTERS: Character[] = [
  // Comedy World Characters
  {
    id: 'comedy-eric',
    name: 'Eric',
    model: 'comedy-world-eric',
    animations: ['wave', 'talk', 'walk', 'point', 'laugh', 'think']
  },
  {
    id: 'comedy-jennifer',
    name: 'Jennifer',
    model: 'comedy-world-jennifer',
    animations: ['wave', 'talk', 'walk', 'point', 'laugh', 'think']
  },
  {
    id: 'comedy-joey',    
    name: 'Joey',
    model: 'comedy-world-joey',
    animations: ['wave', 'talk', 'walk', 'point', 'laugh', 'think']
  },
  
  // Anime Characters
  {
    id: 'anime-sakura',
    name: 'Sakura',
    model: 'anime-sakura',
    animations: ['bow', 'talk', 'run', 'fight', 'magic', 'smile']
  },
  {
    id: 'anime-kenji',
    name: 'Kenji',
    model: 'anime-kenji',
    animations: ['bow', 'talk', 'run', 'fight', 'magic', 'serious']
  },
  
  // Space Citizens
  {
    id: 'space-captain',
    name: 'Captain Nova',
    model: 'space-captain-nova',
    animations: ['salute', 'talk', 'float', 'command', 'explore', 'alert']
  },
  {
    id: 'space-robot',
    name: 'Robot X-7',
    model: 'space-robot-x7',
    animations: ['beep', 'talk', 'hover', 'scan', 'compute', 'malfunction']
  },
  
  // Lil' Peepz
  {
    id: 'lil-tommy',
    name: 'Tommy',
    model: 'lil-tommy',
    animations: ['giggle', 'talk', 'run', 'play', 'cry', 'excited']
  },
  {
    id: 'lil-sarah',
    name: 'Sarah',
    model: 'lil-sarah',
    animations: ['giggle', 'talk', 'skip', 'play', 'pout', 'happy']
  },
  
  // ScratchVerse Characters
  {
    id: 'scratch-cat',
    name: 'Scratch Cat',
    model: 'scratch-cat',
    animations: ['meow', 'talk', 'jump', 'dance', 'spin', 'bounce']
  },
  {
    id: 'scratch-dog',
    name: 'Scratch Dog',
    model: 'scratch-dog',
    animations: ['bark', 'talk', 'jump', 'wag', 'fetch', 'roll']
  },
  
  // Inanimate Insanity Characters
  {
    id: 'ii-bot',
    name: 'Bot',
    model: 'ii-bot',
    animations: ['compute', 'talk', 'walk', 'analyze', 'error', 'happy']
  },
  {
    id: 'ii-cabby',
    name: 'Cabby',
    model: 'ii-cabby',
    animations: ['organize', 'talk', 'walk', 'file', 'search', 'excited']
  },
  {
    id: 'ii-test-tube',
    name: 'Test Tube',
    model: 'ii-test-tube',
    animations: ['experiment', 'talk', 'walk', 'think', 'discover', 'proud']
  },
  
  // BFDI Characters (GoPlus Exclusive)
  {
    id: 'bfdi-leafy',
    name: 'Leafy',
    model: 'bfdi-leafy',
    animations: ['nice', 'talk', 'bounce', 'help', 'smile', 'excited'],
    isPremium: true
  },
  {
    id: 'bfdi-firey',
    name: 'Firey',
    model: 'bfdi-firey',
    animations: ['burn', 'talk', 'jump', 'angry', 'hot', 'competitive'],
    isPremium: true
  },
  {
    id: 'bfdi-bubble',
    name: 'Bubble',
    model: 'bfdi-bubble',
    animations: ['float', 'talk', 'pop', 'giggle', 'happy', 'scared'],
    isPremium: true
  },
  {
    id: 'bfdi-pen',
    name: 'Pen',
    model: 'bfdi-pen',
    animations: ['write', 'talk', 'walk', 'point', 'cool', 'confident'],
    isPremium: true
  }
];
