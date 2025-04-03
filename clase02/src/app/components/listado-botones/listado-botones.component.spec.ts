import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoBotonesComponent } from './listado-botones.component';

describe('ListadoBotonesComponent', () => {
  let component: ListadoBotonesComponent;
  let fixture: ComponentFixture<ListadoBotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoBotonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
