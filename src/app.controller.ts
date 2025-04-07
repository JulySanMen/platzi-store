import { Controller, Get, Param } from '@nestjs/common';
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
  @Get('/products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
  @Get('categories/:id/products/:productId')
  getCategory(
    @Param('productId') productId: string, // Este corresponde a ':productId'
    @Param('id') id: string, // Este corresponde a ':id'
  ): string {
    return `Category ${id}, Product ${productId}`;
  }
}
