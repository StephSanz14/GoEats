import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainbComponent } from './mainb.component';

describe('MainbComponent', () => {
  let component: MainbComponent;
  let fixture: ComponentFixture<MainbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
