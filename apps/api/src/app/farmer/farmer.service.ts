import { Farmer } from '@farmer/api-interfaces';
import { Injectable } from '@nestjs/common';
import { FARMERS } from './farmer.mock';

@Injectable()
export class FarmerService {
  async searchByIdOrName(queryParam: string) {
    const filterFunc = (x: Farmer, query: string) => {
      const { name, document: doc } = x;
      return (doc?.documentNumber && doc?.documentNumber.indexOf(query) >= 0) ||
        (name && name.toLowerCase().indexOf(query?.toLowerCase()) >= 0);
    };
    return FARMERS.filter(x => filterFunc(x, queryParam));
  }
}
