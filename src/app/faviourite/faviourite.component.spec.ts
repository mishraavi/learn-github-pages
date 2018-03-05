import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaviouriteComponent } from './faviourite.component';

describe('FaviouriteComponent', () => {
  let component: FaviouriteComponent;
  let fixture: ComponentFixture<FaviouriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaviouriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaviouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
