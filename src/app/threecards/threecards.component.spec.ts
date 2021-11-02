import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreecardsComponent } from './threecards.component';

describe('ThreecardsComponent', () => {
  let component: ThreecardsComponent;
  let fixture: ComponentFixture<ThreecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreecardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
