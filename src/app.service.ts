import { NewCustomerDto } from './dto/newCustomerDto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from './entites/customer.enitity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerRepository: Repository<CustomerEntity>,
  ) {}

  findAll(): Promise<CustomerEntity[]> {
    return this.customerRepository.find();
  }
  findOne(name: string): Promise<CustomerEntity> {
    return this.customerRepository.findOneBy({ name });
  }
  createCustomer(newCustomerDto: NewCustomerDto) {
    const newCustomer = this.customerRepository.create(newCustomerDto);
    return this.customerRepository.save(newCustomer);
  }
}
