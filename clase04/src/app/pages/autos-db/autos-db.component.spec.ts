import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosDBComponent } from './autos-db.component';

describe('AutosDBComponent', () => {
  let component: AutosDBComponent;
  let fixture: ComponentFixture<AutosDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutosDBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutosDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
