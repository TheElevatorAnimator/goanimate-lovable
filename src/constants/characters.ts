
import { Character } from '../types/animation';

// Character limits for free users
export const FREE_CHARACTER_LIMITS = {
  'comedyWorld': 5,
  'lil': 6,
  'chibiPeepz': 5,
  'space': 6,
  'spacePeepz': 5,
  'chibiNinjas': 5,
  'inanimateInsanity': 8
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
  {
    id: 'scratch12',
    name: 'LF97',
    model: 'scratch-lf97',
    animations: ['walk', 'talk', 'dance', 'jump', 'wave', 'spin', 'pose'],
  },
  {
    id: 'scratch13',
    name: 'LF98',
    model: 'scratch-lf98',
    animations: ['walk', 'talk', 'run', 'jump', 'dance', 'wave', 'point'],
  },
  // NEW: Inanimate Insanity Invitational Characters (Season 3)
  {
    id: 'ii1',
    name: 'Bot',
    model: 'ii-bot',
    animations: ['walk', 'talk', 'compute', 'beep', 'analyze', 'malfunction', 'reboot', 'scan'],
  },
  {
    id: 'ii2',
    name: 'Cabby',
    model: 'ii-cabby',
    animations: ['walk', 'talk', 'organize', 'file', 'research', 'present', 'explain', 'sort'],
  },
  {
    id: 'ii3',
    name: 'Test Tube',
    model: 'ii-testtube',
    animations: ['walk', 'talk', 'experiment', 'bubble', 'react', 'explode', 'mix', 'pour'],
  },
  {
    id: 'ii4',
    name: 'Fan',
    model: 'ii-fan',
    animations: ['walk', 'talk', 'spin', 'blow', 'cool', 'overheat', 'whir', 'flutter'],
  },
  {
    id: 'ii5',
    name: 'Lightbulb',
    model: 'ii-lightbulb',
    animations: ['walk', 'talk', 'glow', 'flicker', 'brighten', 'dim', 'spark', 'illuminate'],
  },
  {
    id: 'ii6',
    name: 'Paintbrush',
    model: 'ii-paintbrush',
    animations: ['walk', 'talk', 'paint', 'create', 'splash', 'drip', 'stroke', 'color'],
  },
  {
    id: 'ii7',
    name: 'Silver Spoon',
    model: 'ii-silverspoon',
    animations: ['walk', 'talk', 'stir', 'scoop', 'serve', 'polish', 'shine', 'elegant'],
  },
  {
    id: 'ii8',
    name: 'Candle',
    model: 'ii-candle',
    animations: ['walk', 'talk', 'melt', 'flicker', 'burn', 'drip', 'glow', 'extinguish'],
  },
];
