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
  getProduct(@Param() params: any) {
    return `product ${params.productId}`;
  }
}
