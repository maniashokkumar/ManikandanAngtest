import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViedocontainerComponent } from './viedocontainer.component';

describe('ViedocontainerComponent', () => {
  let component: ViedocontainerComponent;
  let fixture: ComponentFixture<ViedocontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViedocontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViedocontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
