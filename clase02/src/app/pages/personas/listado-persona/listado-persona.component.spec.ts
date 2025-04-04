import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPersonaComponent } from './listado-persona.component';

describe('ListadoPersonaComponent', () => {
  let component: ListadoPersonaComponent;
  let fixture: ComponentFixture<ListadoPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoPersonaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
