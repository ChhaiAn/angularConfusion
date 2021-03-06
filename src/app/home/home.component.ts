import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish'
import { DISHES } from '../shared/dishes'
import { Leader } from '../shared/leader'
import { PromotionService } from '../services/promotion.service'
import { LeaderService } from '../services/leader.service';
import { DishService } from '../services/dish.service'
import { Promotion } from '../shared/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  leader: Leader;
  promotion: Promotion;

  constructor(private dishService: DishService, private promoService: PromotionService, private leaderService: LeaderService) { }

  ngOnInit() {
    this.dishService.getFeaturedDish().then(dish => this.dish = dish);
    this.promoService.getFeaturePromotion().then(pro => this.promotion = pro);
    this.leaderService.getFeatured().then(leader => this.leader = leader);
  }

}
