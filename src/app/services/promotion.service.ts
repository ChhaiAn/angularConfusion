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

  getPromotions(): Promise<Promotion[]> {
    return Promise.resolve(Promotions)
  }

  getPromotion(id: string): Promise<Promotion> {
    return Promise.resolve(Promotions.filter((promo) => promo.id === id)[0]);
  }
  getFeaturePromotion(): Promise<Promotion> {
    return Promise.resolve(Promotions.filter((promo) => promo.featured)[0]);
  }
}
