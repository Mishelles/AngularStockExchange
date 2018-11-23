import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerlistelementComponent } from './brokerlistelement.component';

describe('BrokerlistelementComponent', () => {
  let component: BrokerlistelementComponent;
  let fixture: ComponentFixture<BrokerlistelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerlistelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerlistelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
