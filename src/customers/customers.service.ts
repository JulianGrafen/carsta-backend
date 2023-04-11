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
    const customerId = id;
    /*TODO: Implement function to show name of deleted customer -> Can be done with sending
    DELETE request to endpoint. Body filled from frontend.*/
    console.log(`Customer with ID ${customerId} deleted`);
    return this.customerRepository.delete(id);
  }
}
