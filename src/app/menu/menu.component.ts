import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish'
import { DishService } from '../services/dish.service'

import { Leader } from '../shared/leader';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {

  dishes: Dish[];

  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishService.getDishes().then((resolve) => {
      this.dishes = resolve;
    });

  }






}
