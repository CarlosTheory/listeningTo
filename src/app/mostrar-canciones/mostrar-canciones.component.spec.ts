import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCancionesComponent } from './mostrar-canciones.component';

describe('MostrarCancionesComponent', () => {
  let component: MostrarCancionesComponent;
  let fixture: ComponentFixture<MostrarCancionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarCancionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
