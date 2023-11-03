import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvdetailComponent } from './nvdetail.component';

describe('NvdetailComponent', () => {
  let component: NvdetailComponent;
  let fixture: ComponentFixture<NvdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NvdetailComponent]
    });
    fixture = TestBed.createComponent(NvdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
