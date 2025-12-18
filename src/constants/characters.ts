
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
    imageUrl: 'https://static.wikia.nocookie.net/inanimateinsanity/images/a/a8/Cammy.png'
  },
  {
    id: 'ii-cabby',
    name: 'Cabby',
    model: 'ii-cabby',
    animations: ['organize', 'talk', 'walk', 'file', 'search', 'excited'],
    imageUrl: '/assets/ii/cabby.png'
  },
  {
    id: 'ii-test-tube',
    name: 'Test Tube',
    model: 'ii-test-tube',
    animations: ['experiment', 'talk', 'walk', 'think', 'discover', 'proud'],
    imageUrl: '/assets/ii/test-tube.png'
  },
  
  // BFDI Characters (GoPlus Exclusive)
  {
    id: 'bfdi-leafy',
    name: 'Leafy',
    model: 'bfdi-leafy',
    animations: ['nice', 'talk', 'bounce', 'help', 'smile', 'excited'],
    isPremium: true,
    imageUrl: '/assets/bfdi/leafy.png'
  },
  {
    id: 'bfdi-firey',
    name: 'Firey',
    model: 'bfdi-firey',
    animations: ['burn', 'talk', 'jump', 'angry', 'hot', 'competitive'],
    isPremium: true,
    imageUrl: '/assets/bfdi/firey.png'
  },
  {
    id: 'bfdi-bubble',
    name: 'Bubble',
    model: 'bfdi-bubble',
    animations: ['float', 'talk', 'pop', 'giggle', 'happy', 'scared'],
    isPremium: true,
    imageUrl: '/assets/bfdi/bubble.png'
  },
  {
    id: 'bfdi-pen',
    name: 'Pen',
    model: 'bfdi-pen',
    animations: ['write', 'talk', 'walk', 'point', 'cool', 'confident'],
    isPremium: true,
    imageUrl: 'https://static.wikia.nocookie.net/battlefordreamisland/images/4/4f/Pen_BFDI.png'
  },

  // Pokémon Gen 1 Characters
  {
    id: 'pokemon-bulbasaur',
    name: 'Bulbasaur',
    model: 'pokemon-bulbasaur',
    animations: ['vine-whip', 'tackle', 'sleep', 'growl', 'happy', 'sunny'],
    imageUrl: '/assets/pokemon/bulbasaur.png'
  },
  {
    id: 'pokemon-ivysaur',
    name: 'Ivysaur',
    model: 'pokemon-ivysaur',
    animations: ['razor-leaf', 'tackle', 'bloom', 'growl', 'happy', 'sunny'],
    imageUrl: '/assets/pokemon/ivysaur.png'
  },
  {
    id: 'pokemon-venusaur',
    name: 'Venusaur',
    model: 'pokemon-venusaur',
    animations: ['solar-beam', 'earthquake', 'bloom', 'roar', 'happy', 'sunny'],
    imageUrl: '/assets/pokemon/venusaur.png'
  },
  {
    id: 'pokemon-charmander',
    name: 'Charmander',
    model: 'pokemon-charmander',
    animations: ['ember', 'scratch', 'tail-wag', 'growl', 'happy', 'flame'],
    imageUrl: '/assets/pokemon/charmander.png'
  },
  {
    id: 'pokemon-charmeleon',
    name: 'Charmeleon',
    model: 'pokemon-charmeleon',
    animations: ['flamethrower', 'slash', 'rage', 'growl', 'fierce', 'flame'],
    imageUrl: '/assets/pokemon/charmeleon.png'
  },
  {
    id: 'pokemon-charizard',
    name: 'Charizard',
    model: 'pokemon-charizard',
    animations: ['fire-blast', 'fly', 'roar', 'dragon-rage', 'fierce', 'majestic'],
    isPremium: true,
    imageUrl: '/assets/pokemon/charizard.png'
  },
  {
    id: 'pokemon-squirtle',
    name: 'Squirtle',
    model: 'pokemon-squirtle',
    animations: ['water-gun', 'tackle', 'withdraw', 'bubble', 'happy', 'splash'],
    imageUrl: '/assets/pokemon/squirtle.png'
  },
  {
    id: 'pokemon-wartortle',
    name: 'Wartortle',
    model: 'pokemon-wartortle',
    animations: ['water-pulse', 'bite', 'withdraw', 'bubble', 'wise', 'splash'],
    imageUrl: '/assets/pokemon/wartortle.png'
  },
  {
    id: 'pokemon-blastoise',
    name: 'Blastoise',
    model: 'pokemon-blastoise',
    animations: ['hydro-pump', 'skull-bash', 'withdraw', 'cannon', 'powerful', 'splash'],
    isPremium: true,
    imageUrl: '/assets/pokemon/blastoise.png'
  },
  {
    id: 'pokemon-pikachu',
    name: 'Pikachu',
    model: 'pokemon-pikachu',
    animations: ['thunderbolt', 'quick-attack', 'thunder-wave', 'nuzzle', 'happy', 'spark'],
    imageUrl: '/assets/pokemon/pikachu.png'
  },
  {
    id: 'pokemon-raichu',
    name: 'Raichu',
    model: 'pokemon-raichu',
    animations: ['thunder', 'volt-tackle', 'thunder-wave', 'spark', 'happy', 'electric'],
    imageUrl: '/assets/pokemon/raichu.png'
  },
  {
    id: 'pokemon-jigglypuff',
    name: 'Jigglypuff',
    model: 'pokemon-jigglypuff',
    animations: ['sing', 'pound', 'sleep', 'puff', 'angry', 'cute'],
    imageUrl: '/assets/pokemon/jigglypuff.png'
  },
  {
    id: 'pokemon-gengar',
    name: 'Gengar',
    model: 'pokemon-gengar',
    animations: ['shadow-ball', 'lick', 'hypnosis', 'nightmare', 'spooky', 'laugh'],
    isPremium: true,
    imageUrl: '/assets/pokemon/gengar.png'
  },
  {
    id: 'pokemon-eevee',
    name: 'Eevee',
    model: 'pokemon-eevee',
    animations: ['tackle', 'swift', 'baby-doll-eyes', 'wag', 'happy', 'curious'],
    imageUrl: '/assets/pokemon/eevee.png'
  },
  {
    id: 'pokemon-snorlax',
    name: 'Snorlax',
    model: 'pokemon-snorlax',
    animations: ['rest', 'body-slam', 'yawn', 'snore', 'sleepy', 'eat'],
    imageUrl: '/assets/pokemon/snorlax.png'
  },
  {
    id: 'pokemon-mewtwo',
    name: 'Mewtwo',
    model: 'pokemon-mewtwo',
    animations: ['psychic', 'shadow-ball', 'teleport', 'barrier', 'powerful', 'meditate'],
    isPremium: true,
    imageUrl: '/assets/pokemon/mewtwo.png'
  },
  {
    id: 'pokemon-mew',
    name: 'Mew',
    model: 'pokemon-mew',
    animations: ['psychic', 'transform', 'teleport', 'play', 'happy', 'float'],
    isPremium: true,
    imageUrl: '/assets/pokemon/mew.png'
  },

  // Pokémon Gen 6 Characters
  {
    id: 'pokemon-chespin',
    name: 'Chespin',
    model: 'pokemon-chespin',
    animations: ['vine-whip', 'tackle', 'rollout', 'pin-missile', 'happy', 'play'],
    imageUrl: '/assets/pokemon/chespin.png'
  },
  {
    id: 'pokemon-quilladin',
    name: 'Quilladin',
    model: 'pokemon-quilladin',
    animations: ['needle-arm', 'tackle', 'rollout', 'spiky-shield', 'happy', 'guard'],
    imageUrl: '/assets/pokemon/quilladin.png'
  },
  {
    id: 'pokemon-chesnaught',
    name: 'Chesnaught',
    model: 'pokemon-chesnaught',
    animations: ['hammer-arm', 'spiky-shield', 'rollout', 'wood-hammer', 'brave', 'guard'],
    isPremium: true,
    imageUrl: '/assets/pokemon/chesnaught.png'
  },
  {
    id: 'pokemon-fennekin',
    name: 'Fennekin',
    model: 'pokemon-fennekin',
    animations: ['ember', 'scratch', 'psybeam', 'howl', 'happy', 'cute'],
    imageUrl: '/assets/pokemon/fennekin.png'
  },
  {
    id: 'pokemon-braixen',
    name: 'Braixen',
    model: 'pokemon-braixen',
    animations: ['fire-spin', 'psybeam', 'wand', 'howl', 'graceful', 'magic'],
    imageUrl: '/assets/pokemon/braixen.png'
  },
  {
    id: 'pokemon-delphox',
    name: 'Delphox',
    model: 'pokemon-delphox',
    animations: ['mystical-fire', 'psychic', 'wand', 'future-sight', 'mystic', 'magic'],
    isPremium: true,
    imageUrl: '/assets/pokemon/delphox.png'
  },
  {
    id: 'pokemon-froakie',
    name: 'Froakie',
    model: 'pokemon-froakie',
    animations: ['water-pulse', 'quick-attack', 'bubble', 'lick', 'happy', 'ninja'],
    imageUrl: '/assets/pokemon/froakie.png'
  },
  {
    id: 'pokemon-frogadier',
    name: 'Frogadier',
    model: 'pokemon-frogadier',
    animations: ['water-shuriken', 'quick-attack', 'bubble', 'acrobatics', 'cool', 'ninja'],
    imageUrl: '/assets/pokemon/frogadier.png'
  },
  {
    id: 'pokemon-greninja',
    name: 'Greninja',
    model: 'pokemon-greninja',
    animations: ['water-shuriken', 'shadow-sneak', 'hydro-pump', 'mat-block', 'ninja', 'stealthy'],
    isPremium: true,
    imageUrl: '/assets/pokemon/greninja.png'
  },
  {
    id: 'pokemon-sylveon',
    name: 'Sylveon',
    model: 'pokemon-sylveon',
    animations: ['moonblast', 'swift', 'draining-kiss', 'baby-doll-eyes', 'cute', 'ribbon'],
    imageUrl: '/assets/pokemon/sylveon.png'
  },
  {
    id: 'pokemon-xerneas',
    name: 'Xerneas',
    model: 'pokemon-xerneas',
    animations: ['geomancy', 'moonblast', 'aurora-beam', 'horn-leech', 'majestic', 'life'],
    isPremium: true,
    imageUrl: '/assets/pokemon/xerneas.png'
  },
  {
    id: 'pokemon-yveltal',
    name: 'Yveltal',
    model: 'pokemon-yveltal',
    animations: ['oblivion-wing', 'dark-pulse', 'fly', 'sucker-punch', 'dark', 'destruction'],
    isPremium: true,
    imageUrl: '/assets/pokemon/yveltal.png'
  },
  {
    id: 'pokemon-zygarde',
    name: 'Zygarde',
    model: 'pokemon-zygarde',
    animations: ['land-wrath', 'dragon-pulse', 'thousand-arrows', 'core-enforcer', 'order', 'transform'],
    isPremium: true,
    imageUrl: '/assets/pokemon/zygarde.png'
  },

  // Pokémon Gen 7 Characters
  {
    id: 'pokemon-rowlet',
    name: 'Rowlet',
    model: 'pokemon-rowlet',
    animations: ['fly', 'peck', 'sleep', 'leafage', 'happy', 'curious'],
    imageUrl: '/assets/pokemon/rowlet.png'
  },
  {
    id: 'pokemon-dartrix',
    name: 'Dartrix',
    model: 'pokemon-dartrix',
    animations: ['razor-leaf', 'peck', 'pluck', 'leafage', 'vain', 'fly'],
    imageUrl: '/assets/pokemon/dartrix.png'
  },
  {
    id: 'pokemon-decidueye',
    name: 'Decidueye',
    model: 'pokemon-decidueye',
    animations: ['arrow', 'fly', 'stealth', 'spirit-shackle', 'focus', 'aim'],
    imageUrl: '/assets/pokemon/decidueye.png'
  },
  {
    id: 'pokemon-litten',
    name: 'Litten',
    model: 'pokemon-litten',
    animations: ['scratch', 'ember', 'lick', 'growl', 'play', 'angry'],
    imageUrl: '/assets/pokemon/litten.png'
  },
  {
    id: 'pokemon-torracat',
    name: 'Torracat',
    model: 'pokemon-torracat',
    animations: ['fire-fang', 'scratch', 'flame-charge', 'growl', 'fierce', 'bell'],
    imageUrl: '/assets/pokemon/torracat.png'
  },
  {
    id: 'pokemon-incineroar',
    name: 'Incineroar',
    model: 'pokemon-incineroar',
    animations: ['flex', 'darkest-lariat', 'taunt', 'roar', 'pose', 'fight'],
    imageUrl: '/assets/pokemon/incineroar.png'
  },
  {
    id: 'pokemon-popplio',
    name: 'Popplio',
    model: 'pokemon-popplio',
    animations: ['bubble', 'sing', 'splash', 'balance', 'happy', 'perform'],
    imageUrl: '/assets/pokemon/popplio.png'
  },
  {
    id: 'pokemon-brionne',
    name: 'Brionne',
    model: 'pokemon-brionne',
    animations: ['bubble-beam', 'sing', 'dance', 'balance', 'graceful', 'perform'],
    imageUrl: '/assets/pokemon/brionne.png'
  },
  {
    id: 'pokemon-primarina',
    name: 'Primarina',
    model: 'pokemon-primarina',
    animations: ['sing', 'sparkling-aria', 'dance', 'wave', 'elegant', 'perform'],
    imageUrl: '/assets/pokemon/primarina.png'
  },
  {
    id: 'pokemon-mimikyu',
    name: 'Mimikyu',
    model: 'pokemon-mimikyu',
    animations: ['disguise', 'shadow-sneak', 'play-rough', 'peek', 'sad', 'spooky'],
    imageUrl: '/assets/pokemon/mimikyu-official.png'
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
    id: 'pokemon-tapu-lele',
    name: 'Tapu Lele',
    model: 'pokemon-tapu-lele',
    animations: ['psychic-surge', 'fly', 'shell', 'psychic', 'guard', 'playful'],
    isPremium: true,
    imageUrl: '/assets/pokemon/tapu-lele.png'
  },
  {
    id: 'pokemon-tapu-bulu',
    name: 'Tapu Bulu',
    model: 'pokemon-tapu-bulu',
    animations: ['grassy-surge', 'stomp', 'shell', 'wood-hammer', 'guard', 'peaceful'],
    isPremium: true,
    imageUrl: '/assets/pokemon/tapu-bulu.png'
  },
  {
    id: 'pokemon-tapu-fini',
    name: 'Tapu Fini',
    model: 'pokemon-tapu-fini',
    animations: ['misty-surge', 'surf', 'shell', 'moonblast', 'guard', 'serene'],
    isPremium: true,
    imageUrl: '/assets/pokemon/tapu-fini.png'
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
    id: 'pokemon-necrozma',
    name: 'Necrozma',
    model: 'pokemon-necrozma',
    animations: ['prismatic-laser', 'photon-geyser', 'light', 'absorb', 'dark', 'transform'],
    isPremium: true,
    imageUrl: '/assets/pokemon/necrozma.png'
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
