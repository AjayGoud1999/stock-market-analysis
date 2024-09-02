import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStocksComponent } from './top-stocks.component';

describe('TopStocksComponent', () => {
  let component: TopStocksComponent;
  let fixture: ComponentFixture<TopStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopStocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
