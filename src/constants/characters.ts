
import { Character } from '../types/animation';

export const AVAILABLE_CHARACTERS: Character[] = [
  // Comedy World Characters
  {
    id: 'comedy-eric',
    name: 'Eric',
    model: 'comedy-world-eric',
    animations: ['wave', 'talk', 'walk', 'point', 'laugh', 'think'],
    imageUrl: 'https://static.wikia.nocookie.net/goanimate/images/9/9c/Eric.png'
  },
  {
    id: 'comedy-jennifer',
    name: 'Jennifer',
    model: 'comedy-world-jennifer',
    animations: ['wave', 'talk', 'walk', 'point', 'laugh', 'think'],
    imageUrl: 'https://static.wikia.nocookie.net/goanimate/images/4/4b/Jennifer.png'
  },
  {
    id: 'comedy-joey',    
    name: 'Joey',
    model: 'comedy-world-joey',
    animations: ['wave', 'talk', 'walk', 'point', 'laugh', 'think'],
    imageUrl: 'https://static.wikia.nocookie.net/goanimate/images/8/8f/Joey.png'
  },
  
  // Anime Characters
  {
    id: 'anime-sakura',
    name: 'Sakura',
    model: 'anime-sakura',
    animations: ['bow', 'talk', 'run', 'fight', 'magic', 'smile'],
    imageUrl: 'https://static.wikia.nocookie.net/goanimate/images/a/a5/Sakura.png'
  },
  {
    id: 'anime-kenji',
    name: 'Kenji',
    model: 'anime-kenji',
    animations: ['bow', 'talk', 'run', 'fight', 'magic', 'serious'],
    imageUrl: 'https://static.wikia.nocookie.net/goanimate/images/b/b2/Kenji.png'
  },
  
  // Space Citizens
  {
    id: 'space-captain',
    name: 'Captain Nova',
    model: 'space-captain-nova',
    animations: ['salute', 'talk', 'float', 'command', 'explore', 'alert'],
    imageUrl: 'https://static.wikia.nocookie.net/goanimate/images/c/c4/Captain_Nova.png'
  },
  {
    id: 'space-robot',
    name: 'Robot X-7',
    model: 'space-robot-x7',
    animations: ['beep', 'talk', 'hover', 'scan', 'compute', 'malfunction'],
    imageUrl: 'https://static.wikia.nocookie.net/goanimate/images/d/d8/Robot_X7.png'
  },
  
  // Lil' Peepz
  {
    id: 'lil-tommy',
    name: 'Tommy',
    model: 'lil-tommy',
    animations: ['giggle', 'talk', 'run', 'play', 'cry', 'excited'],
    imageUrl: 'https://static.wikia.nocookie.net/goanimate/images/e/e2/Tommy.png'
  },
  {
    id: 'lil-sarah',
    name: 'Sarah',
    model: 'lil-sarah',
    animations: ['giggle', 'talk', 'skip', 'play', 'pout', 'happy'],
    imageUrl: 'https://static.wikia.nocookie.net/goanimate/images/f/f4/Sarah.png'
  },
  
  // ScratchVerse Characters
  {
    id: 'scratch-cat',
    name: 'Scratch Cat',
    model: 'scratch-cat',
    animations: ['meow', 'talk', 'jump', 'dance', 'spin', 'bounce'],
    imageUrl: 'https://cdn2.scratch.mit.edu/get_image/user/default.png'
  },
  {
    id: 'scratch-dog',
    name: 'Scratch Dog',
    model: 'scratch-dog',
    animations: ['bark', 'talk', 'jump', 'wag', 'fetch', 'roll'],
    imageUrl: 'https://cdn.scratch.mit.edu/static/site/projects/thumbnails/415/289.png'
  },
  
  // Inanimate Insanity Characters
  {
    id: 'ii-bot',
    name: 'Bot',
    model: 'ii-bot',
    animations: ['compute', 'talk', 'walk', 'analyze', 'error', 'happy'],
    imageUrl: 'https://static.wikia.nocookie.net/inanimateinsanity/images/a/a6/Bot_Pose.png'
  },
  {
    id: 'ii-cabby',
    name: 'Cabby',
    model: 'ii-cabby',
    animations: ['organize', 'talk', 'walk', 'file', 'search', 'excited'],
    imageUrl: 'https://static.wikia.nocookie.net/inanimateinsanity/images/b/b5/Cabby_Pose.png'
  },
  {
    id: 'ii-test-tube',
    name: 'Test Tube',
    model: 'ii-test-tube',
    animations: ['experiment', 'talk', 'walk', 'think', 'discover', 'proud'],
    imageUrl: 'https://static.wikia.nocookie.net/inanimateinsanity/images/c/c8/Test_Tube_Pose.png'
  },
  
  // BFDI Characters (GoPlus Exclusive)
  {
    id: 'bfdi-leafy',
    name: 'Leafy',
    model: 'bfdi-leafy',
    animations: ['nice', 'talk', 'bounce', 'help', 'smile', 'excited'],
    isPremium: true,
    imageUrl: 'https://static.wikia.nocookie.net/battlefordreamisland/images/f/f0/Leafy_BFDI.png'
  },
  {
    id: 'bfdi-firey',
    name: 'Firey',
    model: 'bfdi-firey',
    animations: ['burn', 'talk', 'jump', 'angry', 'hot', 'competitive'],
    isPremium: true,
    imageUrl: 'https://static.wikia.nocookie.net/battlefordreamisland/images/3/35/Firey_BFDI.png'
  },
  {
    id: 'bfdi-bubble',
    name: 'Bubble',
    model: 'bfdi-bubble',
    animations: ['float', 'talk', 'pop', 'giggle', 'happy', 'scared'],
    isPremium: true,
    imageUrl: 'https://static.wikia.nocookie.net/battlefordreamisland/images/9/9f/Bubble_BFDI.png'
  },
  {
    id: 'bfdi-pen',
    name: 'Pen',
    model: 'bfdi-pen',
    animations: ['write', 'talk', 'walk', 'point', 'cool', 'confident'],
    isPremium: true,
    imageUrl: 'https://static.wikia.nocookie.net/battlefordreamisland/images/4/4f/Pen_BFDI.png'
  }
];
