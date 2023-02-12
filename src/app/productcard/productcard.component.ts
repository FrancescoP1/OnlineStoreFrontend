import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {

  @Input()
  product: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
