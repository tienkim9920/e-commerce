import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVoucherComponent } from './list-voucher.component';

describe('ListVoucherComponent', () => {
  let component: ListVoucherComponent;
  let fixture: ComponentFixture<ListVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
