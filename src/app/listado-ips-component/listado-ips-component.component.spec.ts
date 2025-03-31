import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoIps } from './listado-ips-component.component';

describe('ListadoIps', () => {
  let component: ListadoIps;
  let fixture: ComponentFixture<ListadoIps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoIps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoIps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
