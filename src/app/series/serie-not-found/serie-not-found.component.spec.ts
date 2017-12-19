import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieNotFoundComponent } from './serie-not-found.component';

describe('SerieNotFoundComponent', () => {
  let component: SerieNotFoundComponent;
  let fixture: ComponentFixture<SerieNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
