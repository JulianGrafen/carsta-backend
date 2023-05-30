import { UpdateCustomerParams } from './../utils/types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Like, Repository } from 'typeorm';
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

  async getCustomerJobsByName(
    name: string,
  ): Promise<CustomerEntity | undefined> {
    return this.customerRepository.findOneBy({ name });
  }

  findOne(name: string): Promise<CustomerEntity[]> {
    const processedName = name.replace(/^(.[^%]+)%20(.[^%]+)$/, '$1 $2');
    return this.customerRepository.find({
      where: { name: ILike(`%${processedName}%`) },
    });
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
  deleteCustomerById(id: number) {
    const customerId = id;
    /*TODO: Implement function to show name of deleted customer -> Can be done with sending
    DELETE request to endpoint. Body filled from frontend.*/
    console.log(`Customer with ID ${customerId} deleted`);
    return this.customerRepository.delete(id);
  }
}
