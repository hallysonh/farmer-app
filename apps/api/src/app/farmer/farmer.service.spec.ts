import { Test } from '@nestjs/testing';

import { FarmerService } from './farmer.service';

describe('FarmerService', () => {
  let service: FarmerService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [FarmerService],
    }).compile();

    service = app.get<FarmerService>(FarmerService);
  });

  describe('searchByIdOrName', () => {
    it('should return Farmer with id equal to "1"', async () => {
      const farmer = await service.searchByIdOrName('1')
      expect(farmer).not.toBeNull();
      expect(farmer.id).toEqual('1');
    });
  });
});
