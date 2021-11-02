import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingtaslcardComponent } from './writingtaslcard.component';

describe('WritingtaslcardComponent', () => {
  let component: WritingtaslcardComponent;
  let fixture: ComponentFixture<WritingtaslcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritingtaslcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingtaslcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
