import { Module } from '@nestjs/common';
import { CustomerEntity } from './entities/CustomerEntity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';

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
      synchronize: true, //CHANGE BEFORE PRODUCTION TESTING
    }),
    CustomersModule,
  ],
})
export class AppModule {}
