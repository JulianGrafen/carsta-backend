import { Controller, Post, Body, Header } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { NewCustomerDto } from './dto/newCustomerDto';

@Controller('createCustomer')
export class AppController {
  private readonly logger = new Logger();
  constructor(private readonly appService: AppService) {}

  @Post()
  @Header('Content-Type', 'application/json')
  createCustomer(@Body() newCustomerDto: NewCustomerDto) {
    return this.appService.createCustomer(newCustomerDto);
    console.log(newCustomerDto);
  }
}
