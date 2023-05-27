import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotlListComponent } from './hotl-list.component';

describe('HotlListComponent', () => {
  let component: HotlListComponent;
  let fixture: ComponentFixture<HotlListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotlListComponent]
    });
    fixture = TestBed.createComponent(HotlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
