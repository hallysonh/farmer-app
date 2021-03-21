import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Farmer } from '@farmer/api-interfaces';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FarmerSearchAbstractProvider } from './farmer-search-provider';

@UntilDestroy()
@Component({
  selector: 'farmer-search-card',
  templateUrl: './farmer-search.component.html',
  styleUrls: ['./farmer-search.component.scss'],
})
export class FarmerSearchComponent {

  queryControl = new FormControl('');

  selectedFarmer: Farmer = null;

  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onPartnerSelectedEvent = new EventEmitter();

  constructor(private readonly fb: FormBuilder) {
    this.queryControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      untilDestroyed(this),
    ).subscribe(async value => {
      if (!this.farmerSearchAbstractProvider) return;
      const currentFarmer = this.selectedFarmer;
      try {
        const result = await this.farmerSearchAbstractProvider.searchFarmers({ idOrName: value })
        this.selectedFarmer = result && result.length > 0 ? result[0] : null;
      } catch (_) {
        this.selectedFarmer = null;
      }
      if (this.selectedFarmer != currentFarmer) {
        this.onPartnerSelectedEvent.emit(this.selectedFarmer);
      }
    });
  }
}
