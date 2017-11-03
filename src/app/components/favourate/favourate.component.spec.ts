import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavourateComponent } from './favourate.component';

describe('FavourateComponent', () => {
  let component: FavourateComponent;
  let fixture: ComponentFixture<FavourateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavourateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavourateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
