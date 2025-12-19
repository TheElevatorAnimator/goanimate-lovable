
export interface VideoTemplate {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  category: string;
  duration: string;
  isPremium: boolean;
  theme: string;
}

export const VIDEO_TEMPLATES: VideoTemplate[] = [
  // Business Templates
  {
    id: 'business-intro',
    name: 'Company Introduction',
    description: 'Introduce your company professionally',
    thumbnail: '🏢',
    category: 'Business',
    duration: '30s',
    isPremium: false,
    theme: 'business-friendly'
  },
  {
    id: 'product-demo',
    name: 'Product Demo',
    description: 'Showcase your product features',
    thumbnail: '📦',
    category: 'Business',
    duration: '45s',
    isPremium: false,
    theme: 'business-friendly'
  },
  {
    id: 'training-video',
    name: 'Training Video',
    description: 'Create employee training content',
    thumbnail: '📚',
    category: 'Business',
    duration: '60s',
    isPremium: true,
    theme: 'business-friendly'
  },
  
  // Education Templates
  {
    id: 'classroom-lesson',
    name: 'Classroom Lesson',
    description: 'Educational content for students',
    thumbnail: '🏫',
    category: 'Education',
    duration: '45s',
    isPremium: false,
    theme: 'comedy-world'
  },
  {
    id: 'science-explainer',
    name: 'Science Explainer',
    description: 'Explain scientific concepts',
    thumbnail: '🔬',
    category: 'Education',
    duration: '30s',
    isPremium: false,
    theme: 'comedy-world'
  },
  {
    id: 'history-story',
    name: 'History Story',
    description: 'Tell historical stories',
    thumbnail: '📜',
    category: 'Education',
    duration: '60s',
    isPremium: true,
    theme: 'comedy-world'
  },
  
  // Entertainment Templates
  {
    id: 'comedy-skit',
    name: 'Comedy Skit',
    description: 'Create funny skits and jokes',
    thumbnail: '😂',
    category: 'Entertainment',
    duration: '30s',
    isPremium: false,
    theme: 'comedy-world'
  },
  {
    id: 'music-video',
    name: 'Music Video',
    description: 'Create animated music videos',
    thumbnail: '🎵',
    category: 'Entertainment',
    duration: '60s',
    isPremium: true,
    theme: 'cartoon-classics'
  },
  {
    id: 'story-time',
    name: 'Story Time',
    description: 'Tell engaging stories',
    thumbnail: '📖',
    category: 'Entertainment',
    duration: '45s',
    isPremium: false,
    theme: 'lil-peepz-world'
  },
  
  // Gaming Templates
  {
    id: 'pokemon-adventure',
    name: 'Pokémon Adventure',
    description: 'Create Pokémon battles and stories',
    thumbnail: '⚡',
    category: 'Gaming',
    duration: '45s',
    isPremium: false,
    theme: 'pokemon-alola'
  },
  {
    id: 'object-show',
    name: 'Object Show',
    description: 'BFDI/II style competition',
    thumbnail: '🏆',
    category: 'Gaming',
    duration: '60s',
    isPremium: true,
    theme: 'bfdi'
  },
  {
    id: 'space-mission',
    name: 'Space Mission',
    description: 'Intergalactic adventures',
    thumbnail: '🚀',
    category: 'Gaming',
    duration: '45s',
    isPremium: false,
    theme: 'star-trek-quogs'
  },
  
  // Special Templates
  {
    id: 'birthday-greeting',
    name: 'Birthday Greeting',
    description: 'Celebrate birthdays',
    thumbnail: '🎂',
    category: 'Special',
    duration: '15s',
    isPremium: false,
    theme: 'lil-peepz-world'
  },
  {
    id: 'holiday-message',
    name: 'Holiday Message',
    description: 'Seasonal greetings',
    thumbnail: '🎄',
    category: 'Special',
    duration: '20s',
    isPremium: false,
    theme: 'cartoon-classics'
  },
  {
    id: 'announcement',
    name: 'Announcement',
    description: 'Make important announcements',
    thumbnail: '📢',
    category: 'Special',
    duration: '30s',
    isPremium: false,
    theme: 'business-friendly'
  }
];

export const TEMPLATE_CATEGORIES = [
  'All',
  'Business',
  'Education',
  'Entertainment',
  'Gaming',
  'Special'
];
