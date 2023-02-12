import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/Product';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  constructor(private apiService: ApiService, private router: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      //console.log('params?');
      //console.log(params['id']);
      this.getProductById(params['id'])
    });
  }

  getProductById(id: number) {
    this.apiService.getProductById(id).subscribe((data: Product) => {
        this.product = data;
    });
  }

}
