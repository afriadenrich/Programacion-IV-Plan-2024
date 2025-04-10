import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAutoComponent } from './listado-auto.component';

describe('ListadoAutoComponent', () => {
  let component: ListadoAutoComponent;
  let fixture: ComponentFixture<ListadoAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoAutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
