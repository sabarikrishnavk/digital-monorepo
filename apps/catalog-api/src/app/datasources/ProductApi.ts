import { Injectable } from '@nestjs/common';
const products = require('./product_data.json');

@Injectable()
export class ProductAPI {
  getProduct(id) {
    return products.find(r => r.id === id);
  } 
}
 
