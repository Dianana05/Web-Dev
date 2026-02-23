export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  categoryId: number;
  isFavorite: boolean;
  likes: number; 
  link: string;
}