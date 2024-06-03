import { Component, Input} from '@angular/core';
import { Product } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  constructor(
    private router: Router
  ) { }
  @Input() product!: Product;

  viewProduct(): void {
    console.log(['/product', this.product.id]);
    this.router.navigate(['/product', this.product.id]);
  }
}