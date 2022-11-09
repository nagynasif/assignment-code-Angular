import { Component, OnInit } from '@angular/core';
import { Portfolio } from './../interface/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
imagePath1:string ="../../assets/images/cabin.png";
imagePath2:string="../../assets/images/cake.png";
imagePath3:string="../../assets/images/circus.png";
imagePath4:string ="../../assets/images/game.png";
imagePath5:string ="../../assets/images/safe.png";
imagePath6:string="../../assets/images/submarine.png";

  constructor() { }

  ngOnInit(): void {
  }

}
