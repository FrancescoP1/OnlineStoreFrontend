import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.apiService.getAllProducts().subscribe((data: Product[]) => {
        this.products = data;
    });
  }

}
