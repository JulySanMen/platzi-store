import { Controller, Param, Get, Put } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }
  @Put('id')
  updateCategory(@Param('id') id: string) {
    return { message: `update ${id}` };
  }
}
