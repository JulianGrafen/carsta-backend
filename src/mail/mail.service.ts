import { NewCustomerDto } from './../dto/newCustomerDto';
import { MailerService } from '@nestjs-modules/mailer/';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendCustomerConfirmation(newCustomer: NewCustomerDto) {
    const customerKennzeichen = newCustomer.kennzeichen;
    const customerName = newCustomer.name;
    const customerStatus = newCustomer.status;
    console.log(
      `E-Mail gesendet an "${customerName}" mit dem Kennzeichen "${customerKennzeichen}" und den Status "${customerStatus}"`,
    );

    await this.mailerService.sendMail({
      to: newCustomer.email,

      subject: 'Neuer Auftragsstatus - OBI',
      template: './confirmation',
      context: {
        name: newCustomer.name,
        kennzeichen: newCustomer.kennzeichen,
        status: newCustomer.status,
      },
    });
  }
}
