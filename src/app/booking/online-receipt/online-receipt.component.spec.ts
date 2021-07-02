import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineReceiptComponent } from './online-receipt.component';

describe('OnlineReceiptComponent', () => {
  let component: OnlineReceiptComponent;
  let fixture: ComponentFixture<OnlineReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineReceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
