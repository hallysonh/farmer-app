import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentNumberPipe } from '../pipes/document-number.pipes';
import { FarmerSearchComponent } from './farmer-search.component';

describe('FarmerSearchComponent', () => {
  let component: FarmerSearchComponent;
  let fixture: ComponentFixture<FarmerSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        FarmerSearchComponent,
        DocumentNumberPipe,
      ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
      ]
    });

    fixture = TestBed.createComponent(FarmerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show 4 form inputs', () => {
    const inputs = fixture.debugElement.queryAll(By.css('.mat-form-field'));
    expect(inputs).not.toBeNull();
    expect(inputs.length).toBe(4);
    expect(fieldPlaceHolder(inputs[0])).toEqual('Nome or Doc#');
    expect(fieldPlaceHolder(inputs[1])).toEqual('Destinatário');
    expect(fieldPlaceHolder(inputs[2])).toEqual('Doc #');
    expect(fieldPlaceHolder(inputs[3])).toEqual('Endereço');
  });
});

function fieldInput(field: DebugElement) {
  return field.query(By.css('.mat-input-element'));
}

function fieldPlaceHolder(field: DebugElement) {
  const input = fieldInput(field);
  return input?.nativeElement.getAttribute('data-placeholder');
}