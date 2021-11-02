import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreaboutusComponent } from './moreaboutus.component';

describe('MoreaboutusComponent', () => {
  let component: MoreaboutusComponent;
  let fixture: ComponentFixture<MoreaboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreaboutusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreaboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
