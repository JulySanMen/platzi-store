import { Injectable } from '@nestjs/common';
import {} from './../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products = [
    {
      id: 1,
      name: 'product 1',
      description: 'bla bla',
      price: 122,
      stock: 12,
      image: ' ',
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }
  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = payload;
      return this.products[index];
    }
    return null;
  }
}
