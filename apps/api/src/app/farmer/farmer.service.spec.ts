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
      const list = await service.searchByIdOrName('JOAO')

      expect(list).not.toBeNull();
      expect(list.length).toBe(1);
      expect(list[0].id).toEqual('0');
      expect(list[0].name).toEqual('JOAO SILVA');
    });
  });
});
