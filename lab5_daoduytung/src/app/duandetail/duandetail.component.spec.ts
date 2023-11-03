import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuandetailComponent } from './duandetail.component';

describe('DuandetailComponent', () => {
  let component: DuandetailComponent;
  let fixture: ComponentFixture<DuandetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuandetailComponent]
    });
    fixture = TestBed.createComponent(DuandetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
