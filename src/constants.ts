import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // --- BAKERY ---
  {
    id: 'bt1',
    name: 'Chocolate Truffle Cake',
    description: 'Rich dark chocolate ganache with moist sponge',
    price: 350,
    category: 'Bakery',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bt2',
    name: 'Black Forest Cake',
    description: 'Classic cream and cherries layered chocolate cake',
    price: 400,
    category: 'Bakery',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bt3',
    name: 'Butterscotch Cake',
    description: 'Crunchy caramel bits and smooth butterscotch cream',
    price: 350,
    category: 'Bakery',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bt4',
    name: 'Pineapple Fusion Cake',
    description: 'Zesty pineapple layers with light whipped cream',
    price: 320,
    category: 'Bakery',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1464347744102-11db6282f854?auto=format&fit=crop&w=800&q=80'
  },

  // --- FAST FOOD ---
  {
    id: 'ff1',
    name: 'Classic Veg Burger',
    description: 'Crispy vegetable patty with secret house sauce',
    price: 50,
    category: 'Fast Food',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ff2',
    name: 'Paneer Grilled Sandwich',
    description: 'Spiced paneer, fresh veggies, and mint chutney',
    price: 90,
    category: 'Fast Food',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ff3',
    name: 'Cheese Lava Burger',
    description: 'Double patty loaded with oozing molten cheese',
    price: 85,
    category: 'Fast Food',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ff4',
    name: 'Peri Peri French Fries',
    description: 'Crispy golden fries tossed in spicy peri peri seasoning',
    price: 70,
    category: 'Fast Food',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80'
  },

  // --- PIZZA ---
  {
    id: 'pz1',
    name: 'Margherita Pizza',
    description: 'Double cheese, fresh basil, and tomato sauce',
    price: 120,
    category: 'Pizza',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pz2',
    name: 'Galley Special Pizza',
    description: 'Loaded with paneer, olives, corn, and bell peppers',
    price: 220,
    category: 'Pizza',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pz3',
    name: 'Paneer Tikka Pizza',
    description: 'Tandoori marinated paneer with capsicum and red paprika',
    price: 240,
    category: 'Pizza',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80'
  },

  // --- CHINESE ---
  {
    id: 'ch1',
    name: 'Veg Manchurian Gravy',
    description: 'Vegetable dumplings in high-flame ginger soy sauce',
    price: 130,
    category: 'Chinese',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1512058560366-cd2429598632?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ch2',
    name: 'Chilli Paneer Dry',
    description: 'Wok-tossed paneer cubes with peppers and green chillies',
    price: 160,
    category: 'Chinese',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ch3',
    name: 'Hakka Noodles',
    description: 'Thin noodles stir-fried with crisp seasonal vegetables',
    price: 100,
    category: 'Chinese',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ch4',
    name: 'Veg Fried Rice',
    description: 'Aromatic basmati rice tossed with finely chopped veggies',
    price: 110,
    category: 'Chinese',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80'
  },

  // --- BEVERAGES ---
  {
    id: 'bv1',
    name: 'Cold Coffee',
    description: 'Brewed coffee served chilled with vanilla ice cream',
    price: 80,
    category: 'Beverages',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bv2',
    name: 'Oreo Thick Shake',
    description: 'Creamy blend of Oreo cookies and rich vanilla milk',
    price: 110,
    category: 'Beverages',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bv3',
    name: 'Virgin Mojito',
    description: 'Refreshing mint and lime sparkler over crushed ice',
    price: 85,
    category: 'Beverages',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
  }
];
