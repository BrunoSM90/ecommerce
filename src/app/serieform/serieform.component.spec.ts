import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieformComponent } from './serieform.component';

describe('SerieformComponent', () => {
  let component: SerieformComponent;
  let fixture: ComponentFixture<SerieformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
