import { Component, Injectable, OnInit } from '@angular/core';
import { ApiService } from '../service/apiservice';
import { Category } from '../model/Category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categories!: Category[];

  constructor(private apiService: ApiService) { 
  
  }

  ngOnInit(): void {
    let categs: Category[] = [];
    this.apiService.getAllProductCategories().subscribe((data) => {
      categs = data;
      this.categories = data;
      //console.log(this.categories);
    });
    for(var name of this.categories) {
        console.log(name);
    }
  }

}
