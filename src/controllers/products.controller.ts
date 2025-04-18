import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';

import { Response } from '@nestjs/common';
import { ProductsService } from './../services/products.service';

@Controller('products')
export class ProductsController {
  //inyectar
  constructor(private productService: ProductsService) {}
  //no didamicas primero y dinamicas despues
  @Get('filter')
  getProductFilter() {
    return { message: 'yo soy un filter' };
  }
  //recibir parametros ;
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Res() response: Response, @Param('productId') productId: string) {
    return this.productService.findOne();
    // return { message: `product ${productId}` };
  }
  //chocan id

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    //return {
    //message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    //};
    return this.productService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    return {
      mesage: 'accion de crear',
      payload,
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return id;
  }
}
