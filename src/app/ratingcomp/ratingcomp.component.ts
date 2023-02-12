import { Component, Input, OnInit } from '@angular/core';
import { Rating } from '../model/Rating';

@Component({
  selector: 'app-ratingcomp',
  templateUrl: './ratingcomp.component.html',
  styleUrls: ['./ratingcomp.component.css']
})
export class RatingcompComponent implements OnInit {

  //@Input() rating: Rating;
  @Input() rate: number;
  @Input() count: number;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
