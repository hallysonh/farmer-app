import { Farmer } from '@farmer/api-interfaces';

export interface SearchParams {
  idOrName: string;
}

export abstract class FarmerSearchAbstractProvider {
  abstract searchFarmers(params: SearchParams): Promise<Farmer[]>;
}