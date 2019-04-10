import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kbb-home',
  templateUrl: './kbb-home.component.html',
  styleUrls: ['./kbb-home.component.css']
})
export class KbbHomeComponent implements OnInit {
  itemImageUrl = 'assets/car_image.jpg';
  constructor() { }

  ngOnInit() {
  }

}
