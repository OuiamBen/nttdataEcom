import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnfheaderComponent } from './pnfheader.component';

describe('PnfheaderComponent', () => {
  let component: PnfheaderComponent;
  let fixture: ComponentFixture<PnfheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnfheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PnfheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
