import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Product } from '../model/Product';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getThumbnailProducts();
  }

  getThumbnailProducts() {
    this.apiService.getAllProducts(3).subscribe((data: Product[]) => {
      this.products = data;
    })
  }

}
