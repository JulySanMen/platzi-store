import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hooooooola muuundo ';
  }
  @Get('new')
  newEndpoint() {
    return 'Yo soy Nuevo';
  }
  @Get('/new2/')
  hello() {
    return 'con /sas/';
  }

  //no didamicas primero y dinamicas despues
  @Get('/products/filter')
  getProductFilter() {
    return `soy un filter`;
  }
  //recibir parametros ;
  @Get('/products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
  //chocan id

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }
}
