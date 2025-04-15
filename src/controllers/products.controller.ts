import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  //no didamicas primero y dinamicas despues
  @Get('filter')
  getProductFilter() {
    return `soy un filter`;
  }
  //recibir parametros ;
  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
  //chocan id

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      mesage: 'accion de crear',
      payload,
    };
  }
}
