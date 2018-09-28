import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAlbumComponent } from './mostrar-album.component';

describe('MostrarAlbumComponent', () => {
  let component: MostrarAlbumComponent;
  let fixture: ComponentFixture<MostrarAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
