import { Component, input } from '@angular/core';
import { Product } from '../../../componenets/models/product.models';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  item = input.required<Product>();
}
