import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15',
      description: 'Apple smartphone with A17 chip.',
      price: 550000,
      rating: 4.8,
      image: 'https://via.placeholder.com/200',
      images: [
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200'
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Flagship Android smartphone.',
      price: 480000,
      rating: 4.6,
      image: 'https://via.placeholder.com/200',
      images: [
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200'
      ],
      link: 'https://kaspi.kz'
    },
    {
    id: 3,
    name: 'Xiaomi 14',
    description: 'High-performance smartphone with Leica camera.',
    price: 420000,
    rating: 4.5,
    image: 'https://via.placeholder.com/200',
    images: [
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200'
    ],
    link: 'https://kaspi.kz'
  },
  {
    id: 4,
    name: 'Google Pixel 8',
    description: 'Pure Android experience with AI features.',
    price: 450000,
    rating: 4.7,
    image: 'https://via.placeholder.com/200',
    images: [
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200'
    ],
    link: 'https://kaspi.kz'
  },
  {
    id: 5,
    name: 'Huawei P60 Pro',
    description: 'Premium camera-focused smartphone.',
    price: 500000,
    rating: 4.6,
    image: 'https://via.placeholder.com/200',
    images: [
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200'
    ],
    link: 'https://kaspi.kz'
  },
  {
    id: 6,
    name: 'OnePlus 12',
    description: 'Fast and smooth flagship performance.',
    price: 430000,
    rating: 4.5,
    image: 'https://via.placeholder.com/200',
    images: [
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200'
    ],
    link: 'https://kaspi.kz'
  },
  {
    id: 7,
    name: 'iPhone 14',
    description: 'Reliable Apple smartphone with great camera.',
    price: 480000,
    rating: 4.7,
    image: 'https://via.placeholder.com/200',
    images: [
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200'
    ],
    link: 'https://kaspi.kz'
  },
  {
    id: 8,
    name: 'Samsung Galaxy A55',
    description: 'Mid-range smartphone with AMOLED display.',
    price: 260000,
    rating: 4.4,
    image: 'https://via.placeholder.com/200',
    images: [
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200'
    ],
    link: 'https://kaspi.kz'
  },
   {
    id: 9,
    name: 'Xiaomi Redmi Note 13 Pro',
    description: 'Affordable smartphone with powerful camera.',
    price: 220000,
    rating: 4.3,
    image: 'https://via.placeholder.com/200',
    images: [
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200'
    ],
    link: 'https://kaspi.kz'
  },
  {
    id: 10,
    name: 'Realme GT 5',
    description: 'Performance-oriented smartphone at a good price.',
    price: 300000,
    rating: 4.4,
    image: 'https://via.placeholder.com/200',
    images: [
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200'
    ],
    link: 'https://kaspi.kz'
  }
  ];
  shareWhatsApp(product: Product) {
  const text = encodeURIComponent(
    `Check out this product: ${product.name} ${product.link}`
  );
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

shareTelegram(product: Product) {
  const text = encodeURIComponent(product.name);
  const url = encodeURIComponent(product.link);
  window.open(
    `https://t.me/share/url?url=${url}&text=${text}`,
    '_blank'
  );
}
}
