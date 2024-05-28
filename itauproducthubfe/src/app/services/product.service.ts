import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products'; // URL da API

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  summary: string;
  description: string;
  family: string;
  target: string;
  state: string;
  activeUsers: number;
  documantation: string;
}