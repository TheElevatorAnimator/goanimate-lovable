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
    maxCharacters: 'Unlimited with PlotPlus',
    assetCount: '100,000+ community characters'
  },
  { 
    id: '2016-video-maker', 
    name: 'GoAnimate 2016 Video Maker', 
    isPremium: true,
    description: 'Flash-based editor with millions of character combinations',
    requirements: 'Requires Puffin Browser',
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
    maxVideoLength: 30
  },
  { 
    id: 'scratchverse', 
    name: 'ScratchVerse', 
    isPremium: false,
    maxVideoLength: 30
  },
];
