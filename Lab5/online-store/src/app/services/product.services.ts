import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getCategories(): Category[] {
    return [
      { id: 1, name: 'Смартфоны' },
      { id: 2, name: 'Наушники' },
      { id: 3, name: 'Игровые приставки' },
      { id: 4, name: 'Остальное' }
    ];
  }

  getProducts(): Product[] {
    return [

      { id: 1, categoryId: 1, name: 'Apple iPhone 15 128Gb', description: 'Новый iPhone 15...', price: 365000, rating: 4.9, likes: 0, image: 'assets/iphone15.jpg', isFavorite: false, images: ['assets/iphone15.jpg'], link: 'https://kaspi.kz/...' },
      { id: 2, categoryId: 1, name: 'Samsung Galaxy S24 Ultra', description: 'Флагман с поддержкой Galaxy AI...', price: 520000, rating: 4.8, likes: 0, image: 'assets/samsung.jpg', isFavorite: false, images: ['assets/samsung.jpg'], link: 'https://kaspi.kz/...' },
      { id: 3, categoryId: 1, name: 'Apple iPhone 17 Ultra', description: 'Новый iPhone 17...', price: 520000, rating: 4.8, likes: 0, image: 'assets/iphone17.jpg', isFavorite: false, images: ['assets/iphone17.jpg'], link: 'https://kaspi.kz/...' },
      { id: 4, categoryId: 1, name: 'Apple iPhone 16', description: 'Смартфон с поддержкой AI...', price: 520000, rating: 4.8, likes: 0, image: 'assets/iphone16.jpg', isFavorite: false, images: ['assets/iphone16.jpg'], link: 'https://kaspi.kz/...' },
      { id: 5, categoryId: 1, name: 'Redmi A3x3', description: 'Флагман...', price: 520000, rating: 4.8, likes: 0, image: 'assets/redmi.jpg', isFavorite: false, images: ['assets/redmi.jpg'], link: 'https://kaspi.kz/...' },

      { id: 6, categoryId: 2, name: 'Apple AirPods Pro 2', description: 'Активное шумоподавление...', price: 115000, rating: 5.0, likes: 0, image: 'assets/airPods.jpg', isFavorite: false, images: ['assets/airPods.jpg'], link: 'https://kaspi.kz/...' },
      { id: 7, categoryId: 2, name: 'Marshall', description: 'Премиальные беспроводные наушники...', price: 150000, rating: 4.9, likes: 0, image: 'assets/marshall.jpg', isFavorite: false, images: ['assets/marshall.jpg'], link: 'https://kaspi.kz/...' },
      { id: 8, categoryId: 2, name: 'Marshall II', description: 'Премиальные беспроводные наушники...', price: 150000, rating: 4.9, likes: 0, image: 'assets/marshall.jpg', isFavorite: false, images: ['assets/marshall.jpg'], link: 'https://kaspi.kz/...' },
      { id: 9, categoryId: 2, name: 'Marshall III', description: 'Премиальные беспроводные наушники...', price: 150000, rating: 4.9, likes: 0, image: 'assets/marshall.jpg', isFavorite: false, images: ['assets/marshall.jpg'], link: 'https://kaspi.kz/...' },
      { id: 10, categoryId: 2, name: 'Marshall IV', description: 'Премиальные беспроводные наушники...', price: 150000, rating: 4.9, likes: 0, image: 'assets/marshall.jpg', isFavorite: false, images: ['assets/marshall.jpg'], link: 'https://kaspi.kz/...' },

      { id: 11, categoryId: 3, name: 'Sony PlayStation 5 Slim', description: 'Компактная версия PS5...', price: 245000, rating: 4.9, likes: 0, image: 'assets/playStation.jpg', isFavorite: false, images: ['assets/playStation.jpg'], link: 'https://kaspi.kz/...' },
      { id: 12, categoryId: 3, name: 'Nintendo Switch OLED', description: 'Версия с OLED экраном...', price: 185000, rating: 4.8, likes: 0, image: 'assets/nintendo.jpg', isFavorite: false, images: ['assets/nintendo.jpg'], link: 'https://kaspi.kz/...' },
      { id: 13, categoryId: 3, name: 'Xbox Series X', description: 'Высокая производительность...', price: 275000, rating: 4.7, likes: 0, image: 'assets/xbox.jpg', isFavorite: false, images: ['assets/xbox.jpg'], link: 'https://kaspi.kz/...' },
      { id: 14, categoryId: 3, name: 'Xbox Series S', description: 'Компактная версия Xbox...', price: 230000, rating: 4.7, likes: 0, image: 'assets/xbox.jpg', isFavorite: false, images: ['assets/xbox.jpg'], link: 'https://kaspi.kz/...' },
      { id: 15, categoryId: 3, name: 'PlayStation 4', description: 'Классическая версия...', price: 190000, rating: 4.6, likes: 0, image: 'assets/playStation.jpg', isFavorite: false, images: ['assets/playStation.jpg'], link: 'https://kaspi.kz/...' },

      { id: 16, categoryId: 4, name: 'Dyson Airwrap', description: 'Прибор для укладки волос...', price: 285000, rating: 4.7, likes: 0, image: 'assets/dyson.jpg', isFavorite: false, images: ['assets/dyson.jpg'], link: 'https://kaspi.kz/...' },
      { id: 17, categoryId: 4, name: 'Coffee Machine', description: 'Мощная кофемашина.', price: 350000, rating: 4.8, likes: 0, image: 'assets/coffeeMachine.jpg', isFavorite: false, images: ['assets/coffeeMachine.jpg'], link: 'https://kaspi.kz/...' },
      { id: 18, categoryId: 4, name: 'Scooter', description: 'Мощный скутер.', price: 150000, rating: 4.6, likes: 0, image: 'assets/scooter.jpg', isFavorite: false, images: ['assets/scooter.jpg'], link: 'https://kaspi.kz/...' },
      { id: 19, categoryId: 4, name: 'Smart Watch', description: 'Умные часы.', price: 90000, rating: 4.5, likes: 0, image: 'assets/smartWatch.jpg', isFavorite: false, images: ['assets/smartWatch.jpg'], link: 'https://kaspi.kz/...' },
      { id: 20, categoryId: 4, name: 'Робот пылесос', description: 'Автоматическая уборка.', price: 120000, rating: 4.7, likes: 0, image: 'assets/vacuum.jpg', isFavorite: false, images: ['assets/vacuum.jpg'], link: 'https://kaspi.kz/...' }

    ];
  }
}