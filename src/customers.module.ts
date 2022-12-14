import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CustomerEntity } from './entites/customer.enitity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity])],
  providers: [AppService],
  controllers: [AppController],
})
export class CustomersModule {}
