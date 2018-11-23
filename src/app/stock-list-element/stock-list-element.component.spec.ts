import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockListElementComponent } from './stock-list-element.component';

describe('StockListElementComponent', () => {
  let component: StockListElementComponent;
  let fixture: ComponentFixture<StockListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
