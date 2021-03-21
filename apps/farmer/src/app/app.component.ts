import { Component } from '@angular/core';
import { Farmer } from '@farmer/api-interfaces';
import { FarmerSearchAbstractProvider, SearchParams } from '@farmer/ui';
import { AppService } from './app.service';

@Component({
  selector: 'farmer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myFarmerSearchProvider = new MyFarmerSearchProvider(this.appService);

  constructor(private appService: AppService) { }

  farmerSearch(query: string) {
    return this.appService.farmerSearch(query);
  }

  mySelectedFarmer(selected: Farmer) {
    console.log(selected);
  }
}

class MyFarmerSearchProvider extends FarmerSearchAbstractProvider {
  constructor(private appService: AppService) {
    super();
  }

  async searchFarmers(params: SearchParams): Promise<Farmer[]> {
    if (!params?.idOrName?.trim()) return [];
    return await this.appService.farmerSearch(params.idOrName).toPromise();
  }
}