import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushNotificationsNAlertsComponent } from './push-notifications-n-alerts.component';

describe('PushNotificationsNAlertsComponent', () => {
  let component: PushNotificationsNAlertsComponent;
  let fixture: ComponentFixture<PushNotificationsNAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushNotificationsNAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PushNotificationsNAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
