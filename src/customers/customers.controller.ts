import { CustomersService } from './customers.service';
import { Body, Controller, Header, Post } from '@nestjs/common';
import { NewCustomerDto } from '../dto/newCustomerDto';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Post()
  @Header('Content-Type', 'application/json')
  createCustomer(@Body() newCustomerDto: NewCustomerDto) {
    console.log(newCustomerDto);
    return this.customersService.createCustomer(newCustomerDto);
  }
}
