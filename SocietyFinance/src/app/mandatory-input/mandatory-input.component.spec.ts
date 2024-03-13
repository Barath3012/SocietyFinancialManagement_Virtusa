import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandatoryInputComponent } from './mandatory-input.component';

describe('MandatoryInputComponent', () => {
  let component: MandatoryInputComponent;
  let fixture: ComponentFixture<MandatoryInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MandatoryInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MandatoryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
