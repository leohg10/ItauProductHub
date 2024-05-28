import { Component } from '@angular/core';
import { ProductService, Product } from "../../services/product.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  refreshProducts(): void {
    this.loadProducts();
  }

  addNewProduct(): void {
    this.router.navigate(['/new-product']);
  }
}