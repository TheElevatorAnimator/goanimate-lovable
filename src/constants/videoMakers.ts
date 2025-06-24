
// Video length limits (in seconds)
export const VIDEO_LENGTH_LIMITS = {
  free: 30,
  premium: 120 // 2 minutes
};

export const VIDEO_MAKER_TYPES = [
  { 
    id: 'goanimate-comedy', 
    name: 'GoAnimate Comedy World', 
    isPremium: true,
    maxCharacters: 'Unlimited with GoPlus',
    assetCount: '100,000+ community characters',
    technology: 'TypeScript & CSS'
  },
  { 
    id: '2016-video-maker', 
    name: 'GoAnimate 2016 Video Maker', 
    isPremium: true,
    description: 'Modern TypeScript-based editor with millions of character combinations',
    requirements: 'Works on all modern browsers including iPad',
    technology: 'TypeScript & CSS',
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
    maxVideoLength: 30,
    technology: 'TypeScript & CSS'
  },
  { 
    id: 'scratchverse', 
    name: 'ScratchVerse', 
    isPremium: false,
    maxVideoLength: 30,
    technology: 'TypeScript & CSS'
  },
  { 
    id: 'inanimate-insanity', 
    name: 'Inanimate Insanity Invitational', 
    isPremium: false,
    maxVideoLength: 30,
    description: 'Create animations with II Season 3 characters',
    features: ['Object Show Style', '8 Unique Characters', 'Competition Scenes'],
    technology: 'TypeScript & CSS'
  },
];

export const GOANIMATE_THEMES = [
  {
    id: 'business-friendly',
    name: 'Business Friendly',
    description: 'Professional business characters',
    isPremium: false,
    style: 'business'
  },
  {
    id: 'election-2012',
    name: 'Election 2012',
    description: 'Political themed characters',
    isPremium: false,
    style: 'political'
  },
  {
    id: 'comedy-world',
    name: 'Comedy World',
    description: 'Classic comedy characters',
    isPremium: false,
    style: 'comedy'
  },
  {
    id: 'lil-peepz-world',
    name: 'Lil\' Peepz World',
    description: 'Kid-friendly characters',
    isPremium: false,
    style: 'lil-peepz'
  },
  {
    id: 'stick-figure',
    name: 'Stick Figure',
    description: 'Simple stick figure animations',
    isPremium: false,
    style: 'stick'
  },
  {
    id: 'star-trek-quogs',
    name: 'Star Trek Quogs',
    description: 'Sci-fi themed characters',
    isPremium: false,
    style: 'sci-fi'
  },
  {
    id: 'cartoon-classics',
    name: 'Cartoon Classics',
    description: 'Classic cartoon style',
    isPremium: false,
    style: 'cartoon'
  },
  {
    id: 'jungle-warfare',
    name: 'Jungle Warfare',
    description: 'Military action theme',
    isPremium: false,
    style: 'military'
  },
  {
    id: 'chibi-ninjas',
    name: 'Chibi Ninjas',
    description: 'Cute ninja characters',
    isPremium: true,
    style: 'ninja'
  },
  {
    id: 'space-peepz',
    name: 'Space Peepz',
    description: 'Space adventure theme',
    isPremium: true,
    style: 'space'
  },
  {
    id: 'chibi-peepz',
    name: 'Chibi Peepz',
    description: 'Adorable chibi style',
    isPremium: true,
    style: 'chibi'
  },
  {
    id: 'lil-peepz',
    name: 'Lil\' Peepz',
    description: 'Original Lil\' Peepz theme',
    isPremium: true,
    style: 'lil-peepz-premium'
  },
  {
    id: 'bfdi',
    name: 'BFDI',
    description: 'Battle for Dream Island characters',
    isPremium: true,
    style: 'bfdi'
  },
  {
    id: 'inanimate-insanity',
    name: 'Inanimate Insanity',
    description: 'Object show competition theme',
    isPremium: false,
    style: 'inanimate-insanity'
  }
];
