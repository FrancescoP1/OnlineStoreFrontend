import { Component, Injectable, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Category } from '../model/Category';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categories!: Category[];
  constructor(private apiService: ApiService, public afAuth: AngularFireAuth) { 
  
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

  logout(): void {
    this.afAuth.signOut();
  }

}
