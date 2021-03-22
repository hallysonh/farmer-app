import { Test, TestingModule } from '@nestjs/testing';

import { FarmerController } from './farmer.controller';
import { FarmerService } from './farmer.service';

describe('FarmerController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [FarmerController],
      providers: [FarmerService],
    }).compile();
  });

  describe('serch', () => {
    it('should return Farmer with id equals to "1"', async () => {
      const appController = app.get<FarmerController>(FarmerController);
      const query = 'JOAO';
      const list = await appController.serch(query);
      expect(list).not.toBeNull();
      expect(list.length).toBe(1);
      expect(list[0].id).toEqual('0');
      expect(list[0].name).toEqual('JOAO SILVA');
    });
  });
});
