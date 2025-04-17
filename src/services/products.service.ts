import { Injectable } from '@nestjs/common';
import {} from './../entities/product.entity';

@Injectable()
export class ProductsService {
  private products = [
    {
      id: 1,
      name: 'product 1',
      description: 'bla bla',
      price: 122,
      stock: 12,
      image: '',
    },
  ];
}
