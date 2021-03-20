import { Injectable } from '@nestjs/common';
import { FARMERS } from './farmer.mock';

@Injectable()
export class FarmerService {
  async searchByIdOrName(queryParam: string) {
    return FARMERS.find(x => x.id == queryParam || x.name == queryParam);
  }
}
