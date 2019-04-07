import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KbbHomeComponent } from './kbb-home.component';

describe('KbbHomeComponent', () => {
  let component: KbbHomeComponent;
  let fixture: ComponentFixture<KbbHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KbbHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KbbHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
