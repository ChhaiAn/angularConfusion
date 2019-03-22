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
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Promotions)
      }, 2000);
    })
  }

  getPromotion(id: string): Promise<Promotion> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Promotions.filter((promo) => promo.id === id)[0]);
      }, 2000);
    })

  }
  getFeaturePromotion(): Promise<Promotion> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Promotions.filter((promo) => promo.featured)[0])
      }, 2000);
    })
  }
}
