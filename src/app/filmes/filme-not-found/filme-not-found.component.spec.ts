import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeNotFoundComponent } from './filme-not-found.component';

describe('FilmeNotFoundComponent', () => {
  let component: FilmeNotFoundComponent;
  let fixture: ComponentFixture<FilmeNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
