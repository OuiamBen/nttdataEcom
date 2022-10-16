import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotfoundbodyComponent } from './pagenotfoundbody.component';

describe('PagenotfoundbodyComponent', () => {
  let component: PagenotfoundbodyComponent;
  let fixture: ComponentFixture<PagenotfoundbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenotfoundbodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagenotfoundbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
