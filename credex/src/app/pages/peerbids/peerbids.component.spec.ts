import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerbidsComponent } from './peerbids.component';

describe('PeerbidsComponent', () => {
  let component: PeerbidsComponent;
  let fixture: ComponentFixture<PeerbidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeerbidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeerbidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
