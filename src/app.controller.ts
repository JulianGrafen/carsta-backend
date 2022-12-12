import { Controller, Post, Body, Header } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MyDto } from './dto/my.dto';

@Controller('createCustomer')
export class AppController {
  private readonly logger = new Logger();
  constructor(private readonly appService: AppService) {}

  @Post()
  @Header('Content-Type', 'application/json')
  async createCustomer(@Body() body: MyDto) {
    console.log(body);
  }
}
