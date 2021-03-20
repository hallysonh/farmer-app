import { Module } from '@nestjs/common';

import { FarmerController } from './farmer.controller';
import { FarmerService } from './farmer.service';

@Module({
  imports: [],
  controllers: [FarmerController],
  providers: [FarmerService],
})
export class FarmerModule {}
