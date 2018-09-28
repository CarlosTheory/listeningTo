import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstasEscuchandoComponent } from './estas-escuchando.component';

describe('EstasEscuchandoComponent', () => {
  let component: EstasEscuchandoComponent;
  let fixture: ComponentFixture<EstasEscuchandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstasEscuchandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstasEscuchandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
