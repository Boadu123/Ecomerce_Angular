import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { OrderSumaryComponent } from "./order-sumary/order-sumary.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSumaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartService = inject(CartService)

}
