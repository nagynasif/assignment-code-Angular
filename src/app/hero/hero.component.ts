import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  imgUrl:string ='../../assets/avatrs.svg';
  constructor() { }

  ngOnInit(): void {
  }

}
