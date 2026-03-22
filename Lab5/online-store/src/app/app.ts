import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services/product.services';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

import { ProductListComponent } from './components/product-list/product-list.components';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  categories: Category[] = [];
  allProducts: Product[] = [];
  selectedCategory: Category | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getProducts();

    
    this.selectedCategory = this.categories.length ? this.categories[0] : null;
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }

  get displayedProducts(): Product[] {
    if (!this.selectedCategory) return [];
    return this.allProducts.filter(p => p.categoryId === this.selectedCategory!.id);
  }


  get favoriteProducts(): Product[] {
    return this.allProducts.filter(p => p.isFavorite);
  }

  toggleFavorite(productId: number): void {
    const product = this.allProducts.find(p => p.id === productId);
    if (!product) return;
    product.isFavorite = !product.isFavorite;
  }

  handleProductDelete(productId: number): void {
    this.allProducts = this.allProducts.filter  (p => p.id !== productId);
    if (this.selectedCategory) {
      const stillExists = this.allProducts.some(p => p.categoryId === this.selectedCategory!.id);
      if (!stillExists) {
        this.selectedCategory = this.categories.length ? this.categories[0] : null;
      }
    }
  }
}