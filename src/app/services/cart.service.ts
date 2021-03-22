import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { CartItems } from '../models/cart-items';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  addToCart(product:Product)
  {
    let item =CartItems.find(c => c.product.productId==product.productId)
    if (item) {
      item.quantity+=1;   
    }
    else{
      let cartItem =new CartItem()
      cartItem.product=product;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }
  listForCart():CartItem[]
  {
    return CartItems;
  }
  removeFromCart(product:Product)
  {
    let item:CartItem = CartItems.find(c=>c.product.productId==product.productId);
    CartItems.splice(CartItems.indexOf(item),1);
  }
}
