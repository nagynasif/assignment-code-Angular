import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((value)=>{
      console.log(value);
      this.goTo(value)
    });
  }
goTo(section:any){
  document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
}
}
