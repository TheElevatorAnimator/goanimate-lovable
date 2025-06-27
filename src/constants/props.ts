
export interface Prop {
  id: string;
  name: string;
  category: 'furniture' | 'objects' | 'food' | 'electronics' | 'vehicles' | 'nature' | 'show-specific';
  imageUrl?: string;
  emoji: string;
  theme?: string;
}

export const AVAILABLE_PROPS: Prop[] = [
  // GoAnimate Comedy World Props
  {
    id: 'desk',
    name: 'Office Desk',
    category: 'furniture',
    emoji: '🏢',
    theme: 'comedy-world'
  },
  {
    id: 'phone',
    name: 'Telephone',
    category: 'electronics',
    emoji: '☎️',
    theme: 'comedy-world'
  },
  {
    id: 'coffee-cup',
    name: 'Coffee Cup',
    category: 'food',
    emoji: '☕',
    theme: 'comedy-world'
  },
  {
    id: 'chair',
    name: 'Office Chair',
    category: 'furniture',
    emoji: '🪑',
    theme: 'comedy-world'
  },
  {
    id: 'computer',
    name: 'Computer',
    category: 'electronics',
    emoji: '💻',
    theme: 'comedy-world'
  },
  {
    id: 'briefcase',
    name: 'Briefcase',
    category: 'objects',
    emoji: '💼',
    theme: 'comedy-world'
  },

  // Anime Props
  {
    id: 'katana',
    name: 'Katana',
    category: 'objects',
    emoji: '⚔️',
    theme: 'anime'
  },
  {
    id: 'cherry-blossom',
    name: 'Cherry Blossom',
    category: 'nature',
    emoji: '🌸',
    theme: 'anime'
  },
  {
    id: 'ramen',
    name: 'Ramen Bowl',
    category: 'food',
    emoji: '🍜',
    theme: 'anime'
  },

  // Space Citizens Props
  {
    id: 'laser-gun',
    name: 'Laser Gun',
    category: 'objects',
    emoji: '🔫',
    theme: 'space'
  },
  {
    id: 'spaceship',
    name: 'Spaceship',
    category: 'vehicles',
    emoji: '🚀',
    theme: 'space'
  },
  {
    id: 'alien-crystal',
    name: 'Alien Crystal',
    category: 'objects',
    emoji: '💎',
    theme: 'space'
  },

  // Scratch Props
  {
    id: 'scratch-block',
    name: 'Code Block',
    category: 'objects',
    emoji: '🧩',
    theme: 'scratch'
  },
  {
    id: 'sprite',
    name: 'Sprite',
    category: 'objects',
    emoji: '👾',
    theme: 'scratch'
  },

  // BFDI Props
  {
    id: 'cake',
    name: 'Cake',
    category: 'food',
    emoji: '🎂',
    theme: 'bfdi'
  },
  {
    id: 'dream-island',
    name: 'Dream Island',
    category: 'nature',
    emoji: '🏝️',
    theme: 'bfdi'
  },
  {
    id: 'elimination-token',
    name: 'Elimination Token',
    category: 'objects',
    emoji: '🎯',
    theme: 'bfdi'
  },

  // Inanimate Insanity Props
  {
    id: 'marshmallow',
    name: 'Marshmallow',
    category: 'food',
    emoji: '🍡',
    theme: 'ii'
  },
  {
    id: 'invitational-trophy',
    name: 'Invitational Trophy',
    category: 'objects',
    emoji: '🏆',
    theme: 'ii'
  }
];
