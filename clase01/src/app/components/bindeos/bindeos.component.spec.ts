import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindeosComponent } from './bindeos.component';

describe('BindeosComponent', () => {
  let component: BindeosComponent;
  let fixture: ComponentFixture<BindeosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindeosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindeosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
