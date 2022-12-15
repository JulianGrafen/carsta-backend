import { UpdateCustomerParams } from './../utils/types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewCustomerDto } from '../dto/newCustomerDto';
import { CustomerEntity } from '../entities/CustomerEntity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>,
  ) {}

  getCustomers(): Promise<CustomerEntity[]> {
    return this.customerRepository.find();
  }
  findOne(name: string): Promise<CustomerEntity> {
    return this.customerRepository.findOneBy({ name });
  }
  createCustomer(newCustomerDto: NewCustomerDto) {
    const newCustomer = this.customerRepository.create(newCustomerDto);
    console.log('Customer Created');
    return this.customerRepository.save(newCustomer);
  }
  updateCustomerByKennzeichen(
    kennzeichen: string,
    updateCarStatus: UpdateCustomerParams,
  ) {
    this.customerRepository.update({ kennzeichen }, { ...updateCarStatus });
  }
  deleteCustomerByKennzeichen(id: number) {
    //this.customerRepository.findOneBy({ id }, { kennzeichen });
    const customerId = id;
    console.log(`Customer with ID ${customerId} deleted`);
    return this.customerRepository.delete(id);
  }
}