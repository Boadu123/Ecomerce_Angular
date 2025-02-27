import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from "../../../componenets/primary-button/primary-button.component";

@Component({
  selector: 'app-order-sumary',
  imports: [PrimaryButtonComponent],
  templateUrl: './order-sumary.component.html',
  styleUrl: './order-sumary.component.css'
})
export class OrderSumaryComponent {
  cartService = inject(CartService)

  total = computed(() => {
    let total = 0;
    for(const item of this.cartService.cart()) {
      total += item.price
    }

    return total
  })
}
