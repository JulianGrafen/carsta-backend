import { CustomersController } from './customers.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersService } from './customers.service';
import { CustomerEntity } from '../entities/CustomerEntity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity])],
  providers: [CustomersService],
  controllers: [CustomersController],
})
export class CustomersModule {}
