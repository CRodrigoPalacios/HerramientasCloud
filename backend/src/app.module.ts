import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './modules/products/products.module';
import { UploadsModule } from './modules/uploads/uploads.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

// ... otros imports

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI', { infer: true }),
      }),
    }),
    ProductsModule,
    UploadsModule,
  ],
})
export class AppModule {}
