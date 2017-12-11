import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesDetailComponent } from './filmes-detail.component';

describe('FilmesDetailComponent', () => {
  let component: FilmesDetailComponent;
  let fixture: ComponentFixture<FilmesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
