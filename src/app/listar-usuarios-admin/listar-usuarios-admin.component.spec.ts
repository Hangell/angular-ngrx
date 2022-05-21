import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUsuariosAdminComponent } from './listar-usuarios-admin.component';

describe('ListarUsuariosAdminComponent', () => {
  let component: ListarUsuariosAdminComponent;
  let fixture: ComponentFixture<ListarUsuariosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarUsuariosAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUsuariosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
