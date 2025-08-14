export interface Shoe {
  id: number;
  name: string;
  slogan: string;
  description: string;
  imageUrl: string;
  category: 'Lifestyle' | 'Running' | 'Outdoor';
  price: string;
}

export interface Article {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

export interface Review {
  id: number;
  shoeId: number;
  author: string;
  date: string;
  rating: number; // 1-5
  text: string;
}

export interface CartItem extends Shoe {
  size: number;
  quantity: number;
}