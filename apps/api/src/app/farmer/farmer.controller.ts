import { Farmer } from '@farmer/api-interfaces';
import { Controller, Get, Query } from '@nestjs/common';
import { FarmerService } from './farmer.service';

@Controller('farmers')
export class FarmerController {
  constructor(private readonly farmerService: FarmerService) { }

  @Get('search')
  async serch(@Query('query') query: string): Promise<Farmer[]> {
    return this.farmerService.searchByIdOrName(query);
  }
}
