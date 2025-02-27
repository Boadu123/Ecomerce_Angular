import { Component, inject, input } from '@angular/core';
import { Product } from '../../../componenets/models/product.models';
import { ButtonComponent } from "../../../componenets/button/button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  cartService = inject(CartService);
  item = input.required<Product>();
}
