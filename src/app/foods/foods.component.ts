import { Component, OnInit } from '@angular/core';
import { FoodsApiService } from '../service/foods-api.service';
import { PizzaFood } from '../interface/pizza-food';
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  constructor(private _foodApiService :FoodsApiService) { }

  pizzaArry:PizzaFood[]=[]
  ngOnInit(): void {
    this._foodApiService.getApi().subscribe({
      next:(data)=>{
        this.pizzaArry =data.recipes
      }
    })
  }

}
