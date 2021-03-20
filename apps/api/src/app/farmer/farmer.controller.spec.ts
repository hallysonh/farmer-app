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
      const id = '1';
      const farmer = await appController.serch(id);
      expect(farmer).not.toBeNull();
      expect(farmer.id).toEqual(id);
    });
  });
});
