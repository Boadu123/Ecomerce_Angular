import { Component, inject, input } from '@angular/core';
import { Product } from '../../../componenets/models/product.models';
import { PrimaryButtonComponent } from "../../../componenets/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  cartService = inject(CartService)

  product = input.required<Product>();
}
