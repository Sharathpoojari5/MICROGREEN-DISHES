// Grevara Microgreens Interactive Global Culinary Book App
// 100 Famous Global Dishes (20 per variety across 5 varieties)

// --- DATA: VARIETIES ---
const VARIETIES = [
  {
    id: 'broccoli',
    name: 'Broccoli Microgreens',
    tagline: 'The Superfood Champion',
    color: '#2E7D32',
    accentColor: '#81C784',
    bgGradient: 'from-emerald-900 to-green-950',
    description: 'Fresh, mild, and crunchy with a delicate broccoli essence. Packed with up to 40x more Sulforaphane than mature heads for supreme cellular health and detoxification.',
    helpsWith: ['Cancer Prevention', 'Detoxification', 'Heart Health', 'Brain Function'],
    keyNutrient: 'Sulforaphane & Vitamin C',
    icon: '🥦',
    coverImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sango-radish',
    name: 'Sango Radish Microgreens',
    tagline: 'The Spicy Kick',
    color: '#7B1FA2',
    accentColor: '#BA68C8',
    bgGradient: 'from-purple-950 to-purple-900',
    description: 'Crisp texture with a distinct peppery heat and deep purple/magenta foliage. Excellent source of Anthocyanins and Vitamin B6 to boost digestion and clear congestion.',
    helpsWith: ['Digestion Issues', 'Respiratory Health', 'Inflammation', 'Blood Circulation'],
    keyNutrient: 'Anthocyanins & Vitamin B6',
    icon: '🌱',
    coverImage: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb23659?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sunflower',
    name: 'Sunflower Microgreens',
    tagline: 'The Protein Powerhouse',
    color: '#F57F17',
    accentColor: '#FFB74D',
    bgGradient: 'from-amber-950 to-yellow-950',
    description: 'Deliciously nutty and succulent. Offers complete plant protein and essential amino acids alongside rich Vitamin D, E, and B-complex for muscle repair and glowing skin.',
    helpsWith: ['Heart Health', 'Bone Strength', 'Energy Boost', 'Skin Health'],
    keyNutrient: 'Complete Plant Protein & Vitamin E',
    icon: '🌻',
    coverImage: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sweet-pea',
    name: 'Sweet Pea Shoots',
    tagline: 'Tender & Sweet',
    color: '#1B5E20',
    accentColor: '#66BB6A',
    bgGradient: 'from-teal-950 to-green-900',
    description: 'Sweet, tender, and reminiscent of fresh spring peas. Crunchy tendrils elevate any warm or cold culinary creation with Vitamin A, C, and Folate.',
    helpsWith: ['Immune Support', 'Eye Health', 'Cell Growth', 'Weight Management'],
    keyNutrient: 'Folate & Vitamin A/C',
    icon: '🫛',
    coverImage: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'red-amaranth',
    name: 'Red Amaranth Microgreens',
    tagline: 'Stunning Color & Earthy Elegance',
    color: '#C2185B',
    accentColor: '#F06292',
    bgGradient: 'from-rose-950 to-pink-950',
    description: 'Vibrant ruby red foliage with a mild, earthy, spinach-like flavor. Provides high concentrations of Iron, Calcium, and Vitamin K/C for healthy blood and bone density.',
    helpsWith: ['Anemia Prevention', 'Bone Density', 'Heart Health', 'Vision Care'],
    keyNutrient: 'Iron, Calcium & Vitamin K',
    icon: '🌺',
    coverImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
  }
];

// --- DATA: RECIPES (Load recipes array) ---
// We will reference window.RECIPES or RECIPES_DATA
