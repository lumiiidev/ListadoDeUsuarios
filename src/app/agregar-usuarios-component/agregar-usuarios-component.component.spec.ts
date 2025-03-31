import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarUsuariosComponentComponent } from './agregar-usuarios-component.component';

describe('AgregarUsuariosComponentComponent', () => {
  let component: AgregarUsuariosComponentComponent;
  let fixture: ComponentFixture<AgregarUsuariosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarUsuariosComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarUsuariosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
