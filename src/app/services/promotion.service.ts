import { Injectable } from '@angular/core';
import { Promotions } from '../shared/promotions'
import { Promotion } from '../shared/promotion'
import { Dish } from '../shared/dish'
import { DISHES } from '../shared/dishes'
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[] {
    return Promotions
  }

  getPromotion(id: string): Promotion {
    return Promotions.filter((promo) => promo.id === id)[0];
  }
  getFeaturePromotion(): Promotion {
    return Promotions.filter((promo) => promo.featured)[0];
  }
}
