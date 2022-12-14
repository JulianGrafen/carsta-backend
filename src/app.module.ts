import { CustomersModule } from './customers.module';
import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerEntity } from './entites/customer.enitity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Julian1803',
      database: 'carsta',
      entities: [CustomerEntity],
      synchronize: false, //CHANGE BEFORE PRODUCTION TESTING
    }),
    CustomersModule,
  ],
})
export class AppModule {}
