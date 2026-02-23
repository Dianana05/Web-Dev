import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() showDelete: boolean = true;

  @Output() delete = new EventEmitter<number>();
  @Output() favorite = new EventEmitter<number>();

  onDelete(id: number): void {
    this.delete.emit(id);
  }

  onFavorite(id: number): void {
    this.favorite.emit(id);
  }
}