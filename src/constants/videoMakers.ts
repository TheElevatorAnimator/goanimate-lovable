
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
