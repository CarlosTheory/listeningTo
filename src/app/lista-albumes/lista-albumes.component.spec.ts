import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlbumesComponent } from './lista-albumes.component';

describe('ListaAlbumesComponent', () => {
  let component: ListaAlbumesComponent;
  let fixture: ComponentFixture<ListaAlbumesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAlbumesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAlbumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
