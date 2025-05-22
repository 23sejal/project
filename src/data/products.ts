import { Product } from '../types';
import krishnalela from '../Images/krishnalela.jpg';
import beadspread from '../Images/beadspread.jpg';
import silk from '../Images/silk.jpg';
import manjusa from '../Images/manjusa.jpg';
import tikuli from '../Images/tikuli.jpg';
import wall from '../Images/wall.jpg';
import saree from '../Images/saree.jpg';
import sikki from '../Images/sikki.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Traditional Madhubani Painting - Krishna Leela',
    description: 'Handcrafted Madhubani painting depicting the divine Krishna Leela. Created using natural dyes on handmade paper by master artisans from Madhubani.',
    price: 179.99,
    image: krishnalela,
    category: 'art',
    featured: true,
    inStock: true
  },
  {
    id: '2',
    name: 'Bhagalpuri Silk Saree',
    description: 'Exquisite Bhagalpuri silk saree with traditional motifs. Each piece is handwoven by skilled artisans using ancient techniques passed down through generations.',
    price: 299.99,
    image: saree,
    category: 'clothing',
    inStock: true
  },
  {
    id: '3',
    name: 'Tikuli Art Wall Decor',
    description: 'Beautiful Tikuli art piece, a traditional art form from Patna. Hand-painted with intricate details on a circular base.',
    price: 89.99,
    image: tikuli,
    category: 'home',
    inStock: true
  },
  {
    id: '4',
    name: 'Sujani Embroidered Wall Hanging',
    description: 'Traditional Sujani embroidery wall hanging depicting rural life scenes. Made by artisans from Bhusara, Bihar.',
    price: 149.99,
    image: wall,
    category: 'home',
    inStock: true
  },
  {
    id: '5',
    name: 'Manjusha Art Box Set',
    description: 'Handcrafted decorative boxes featuring Manjusha art from Angika region. Perfect for storing jewelry or as decorative pieces.',
    price: 79.99,
    image: manjusa,
    category: 'home',
    inStock: true
  },
  {
    id: '6',
    name: 'Madhubani Hand-painted Bedspread',
    description: 'Pure cotton bedspread with traditional Madhubani art depicting scenes from Ramayana. Hand-painted using natural dyes.',
    price: 199.99,
    image: beadspread,
    category: 'home',
    featured: true,
    inStock: true
  },
  {
    id: '7',
    name: 'Sikki Grass Decorative Set',
    description: 'Traditional Sikki grass handicraft set including basket and decorative items. Made by artisans from North Bihar.',
    price: 69.99,
    image: sikki,
    category: 'home',
    inStock: true
  },
  {
    id: '8',
    name: 'Madhubani Painted Silk Dupatta',
    description: 'Pure silk dupatta with hand-painted Madhubani art. Each piece tells a story from Indian mythology.',
    price: 129.99,
    image: silk,
    category: 'clothing',
    featured: true,
    inStock: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};