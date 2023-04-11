import { MailService } from './../mail/mail.service';
import { Body, Controller, Header, Post } from '@nestjs/common';
import { NewCustomerDto } from '../dto/newCustomerDto';

@Controller('customermail')
export class MailController {
  constructor(private mailService: MailService) {}

  @Post()
  @Header('Content-Type', 'application/json')
  createCustomer(@Body() newCustomerDto: NewCustomerDto) {
    this.mailService.sendCustomerConfirmation(newCustomerDto);
    console.log('E-Mail an Kunden gesendet');
  }
}
