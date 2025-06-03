import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order, OrderSchema } from './schemas/order.schema';
import { Product, ProductSchema } from '../products/schemas/product.schema'; // ruta relativa correcta

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),  // << IMPORTANTE!
  ],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
