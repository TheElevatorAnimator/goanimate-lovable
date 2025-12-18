
import { Character } from '../types/animation';

export const AVAILABLE_CHARACTERS: Character[] = [
  // Comedy World Characters
  {
    id: 'comedy-eric',
    name: 'Eric',
    model: 'comedy-world-eric',
    animations: ['wave', 'talk', 'walk', 'point', 'laugh', 'think'],
    imageUrl: 'https://i.imgur.com/qK7KrZy.png'
  },
  {
    id: 'comedy-jennifer',
    name: 'Jennifer',
    model: 'comedy-world-jennifer',
    animations: ['wave', 'talk', 'walk', 'point', 'laugh', 'think'],
    imageUrl: 'https://i.imgur.com/8VdKQmP.png'
  },
  {
    id: 'comedy-joey',    
    name: 'Joey',
    model: 'comedy-world-joey',
    animations: ['wave', 'talk', 'walk', 'point', 'laugh', 'think'],
    imageUrl: 'https://i.imgur.com/RJwNxHT.png'
  },
  
  // Anime Characters
  {
    id: 'anime-sakura',
    name: 'Sakura',
    model: 'anime-sakura',
    animations: ['bow', 'talk', 'run', 'fight', 'magic', 'smile'],
    imageUrl: 'https://i.imgur.com/7VCKmLB.png'
  },
  {
    id: 'anime-kenji',
    name: 'Kenji',
    model: 'anime-kenji',
    animations: ['bow', 'talk', 'run', 'fight', 'magic', 'serious'],
    imageUrl: 'https://i.imgur.com/YNQwvT8.png'
  },
  
  // Space Citizens
  {
    id: 'space-captain',
    name: 'Captain Nova',
    model: 'space-captain-nova',
    animations: ['salute', 'talk', 'float', 'command', 'explore', 'alert'],
    imageUrl: 'https://i.imgur.com/G3fQzKL.png'
  },
  {
    id: 'space-robot',
    name: 'Robot X-7',
    model: 'space-robot-x7',
    animations: ['beep', 'talk', 'hover', 'scan', 'compute', 'malfunction'],
    imageUrl: 'https://i.imgur.com/KHQr9Td.png'
  },
  
  // Lil' Peepz
  {
    id: 'lil-tommy',
    name: 'Tommy',
    model: 'lil-tommy',
    animations: ['giggle', 'talk', 'run', 'play', 'cry', 'excited'],
    imageUrl: 'https://i.imgur.com/9QpVvNL.png'
  },
  {
    id: 'lil-sarah',
    name: 'Sarah',
    model: 'lil-sarah',
    animations: ['giggle', 'talk', 'skip', 'play', 'pout', 'happy'],
    imageUrl: 'https://i.imgur.com/Wx8HkgP.png'
  },
  
  // ScratchVerse Characters
  {
    id: 'scratch-cat',
    name: 'Scratch Cat',
    model: 'scratch-cat',
    animations: ['meow', 'talk', 'jump', 'dance', 'spin', 'bounce'],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Scratchcat.svg'
  },
  {
    id: 'scratch-dog',
    name: 'Scratch Dog',
    model: 'scratch-dog',
    animations: ['bark', 'talk', 'jump', 'wag', 'fetch', 'roll'],
    imageUrl: 'https://i.imgur.com/TpK8NvM.png'
  },
  
  // Inanimate Insanity Characters
  {
    id: 'ii-bot',
    name: 'Bot',
    model: 'ii-bot',
    animations: ['compute', 'talk', 'walk', 'analyze', 'error', 'happy'],
    imageUrl: 'https://i.imgur.com/q7VLyJP.png'
  },
  {
    id: 'ii-cabby',
    name: 'Cabby',
    model: 'ii-cabby',
    animations: ['organize', 'talk', 'walk', 'file', 'search', 'excited'],
    imageUrl: 'https://i.imgur.com/6KpVNhR.png'
  },
  {
    id: 'ii-test-tube',
    name: 'Test Tube',
    model: 'ii-test-tube',
    animations: ['experiment', 'talk', 'walk', 'think', 'discover', 'proud'],
    imageUrl: 'https://i.imgur.com/3NfLwKH.png'
  },
  
  // BFDI Characters (GoPlus Exclusive)
  {
    id: 'bfdi-leafy',
    name: 'Leafy',
    model: 'bfdi-leafy',
    animations: ['nice', 'talk', 'bounce', 'help', 'smile', 'excited'],
    isPremium: true,
    imageUrl: 'https://i.imgur.com/MpQwvHT.png'
  },
  {
    id: 'bfdi-firey',
    name: 'Firey',
    model: 'bfdi-firey',
    animations: ['burn', 'talk', 'jump', 'angry', 'hot', 'competitive'],
    isPremium: true,
    imageUrl: 'https://i.imgur.com/LNfvKpR.png'
  },
  {
    id: 'bfdi-bubble',
    name: 'Bubble',
    model: 'bfdi-bubble',
    animations: ['float', 'talk', 'pop', 'giggle', 'happy', 'scared'],
    isPremium: true,
    imageUrl: 'https://i.imgur.com/WQpNxKL.png'
  },
  {
    id: 'bfdi-pen',
    name: 'Pen',
    model: 'bfdi-pen',
    animations: ['write', 'talk', 'walk', 'point', 'cool', 'confident'],
    isPremium: true,
    imageUrl: 'https://i.imgur.com/KQwPvHM.png'
  },

  // Pokémon Alola (Gen 7) Characters
  {
    id: 'pokemon-rowlet',
    name: 'Rowlet',
    model: 'pokemon-rowlet',
    animations: ['fly', 'peck', 'sleep', 'leafage', 'happy', 'curious'],
    imageUrl: '/assets/pokemon/rowlet.png'
  },
  {
    id: 'pokemon-litten',
    name: 'Litten',
    model: 'pokemon-litten',
    animations: ['scratch', 'ember', 'lick', 'growl', 'play', 'angry'],
    imageUrl: '/assets/pokemon/litten.png'
  },
  {
    id: 'pokemon-popplio',
    name: 'Popplio',
    model: 'pokemon-popplio',
    animations: ['bubble', 'sing', 'splash', 'balance', 'happy', 'perform'],
    imageUrl: '/assets/pokemon/popplio.png'
  },
  {
    id: 'pokemon-decidueye',
    name: 'Decidueye',
    model: 'pokemon-decidueye',
    animations: ['arrow', 'fly', 'stealth', 'spirit-shackle', 'focus', 'aim'],
    imageUrl: '/assets/pokemon/decidueye.png'
  },
  {
    id: 'pokemon-incineroar',
    name: 'Incineroar',
    model: 'pokemon-incineroar',
    animations: ['flex', 'darkest-lariat', 'taunt', 'roar', 'pose', 'fight'],
    imageUrl: '/assets/pokemon/incineroar.png'
  },
  {
    id: 'pokemon-primarina',
    name: 'Primarina',
    model: 'pokemon-primarina',
    animations: ['sing', 'sparkling-aria', 'dance', 'wave', 'elegant', 'perform'],
    imageUrl: '/assets/pokemon/primarina.png'
  },
  {
    id: 'pokemon-tapu-koko',
    name: 'Tapu Koko',
    model: 'pokemon-tapu-koko',
    animations: ['electric-surge', 'fly', 'shell', 'spark', 'guard', 'attack'],
    isPremium: true,
    imageUrl: '/assets/pokemon/tapu-koko.png'
  },
  {
    id: 'pokemon-solgaleo',
    name: 'Solgaleo',
    model: 'pokemon-solgaleo',
    animations: ['sunsteel-strike', 'roar', 'radiant', 'charge', 'shine', 'majesty'],
    isPremium: true,
    imageUrl: '/assets/pokemon/solgaleo.png'
  },
  {
    id: 'pokemon-lunala',
    name: 'Lunala',
    model: 'pokemon-lunala',
    animations: ['moongeist-beam', 'fly', 'phantom', 'glow', 'eclipse', 'graceful'],
    isPremium: true,
    imageUrl: '/assets/pokemon/lunala.png'
  },
  {
    id: 'pokemon-mimikyu',
    name: 'Mimikyu',
    model: 'pokemon-mimikyu',
    animations: ['disguise', 'shadow-sneak', 'play-rough', 'peek', 'sad', 'spooky'],
    imageUrl: '/assets/pokemon/mimikyu.png'
  },
  {
    id: 'pokemon-marshadow',
    name: 'Marshadow',
    model: 'pokemon-marshadow',
    animations: ['spectral-thief', 'shadow', 'punch', 'hide', 'emerge', 'fight'],
    isPremium: true,
    imageUrl: '/assets/pokemon/marshadow.png'
  }
];
