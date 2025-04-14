import { Controller, Param, Get } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }
}
