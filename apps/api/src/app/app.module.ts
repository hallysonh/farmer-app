import { Module } from '@nestjs/common';
import { FarmerModule } from './farmer/farmer.module';

@Module({
  imports: [FarmerModule],
})
export class AppModule { }
