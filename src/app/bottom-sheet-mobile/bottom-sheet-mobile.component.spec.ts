import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetMobileComponent } from './bottom-sheet-mobile.component';

describe('BottomSheetMobileComponent', () => {
  let component: BottomSheetMobileComponent;
  let fixture: ComponentFixture<BottomSheetMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
