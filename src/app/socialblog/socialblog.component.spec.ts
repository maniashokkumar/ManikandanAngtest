import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialblogComponent } from './socialblog.component';

describe('SocialblogComponent', () => {
  let component: SocialblogComponent;
  let fixture: ComponentFixture<SocialblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialblogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
