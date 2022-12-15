import { CustomersService } from './customers.service';
import { UpdateCustomerDto } from '../dto/updateCustomer.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NewCustomerDto } from '../dto/newCustomerDto';

@Controller('createCustomer')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  async getCustomers() {
    return this.customersService.getCustomers();
  }

  @Post()
  @Header('Content-Type', 'application/json')
  createCustomer(@Body() newCustomerDto: NewCustomerDto) {
    console.log(newCustomerDto);
    return this.customersService.createCustomer(newCustomerDto);
  }

  @Put(':kennzeichen')
  async updateCustomerByKennzeichen(
    @Param('kennzeichen') kennzeichen: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    await this.customersService.updateCustomerByKennzeichen(
      kennzeichen,
      updateCustomerDto,
    );
  }
  @Delete(':id')
  async deleteUserByKennzeichen(
    @Param('id') id: number,
    //newCustomerDto: NewCustomerDto,
  ) {
    await this.customersService.deleteCustomerByKennzeichen(id);
  }
}
