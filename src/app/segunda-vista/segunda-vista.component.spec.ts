import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaVistaComponent } from './segunda-vista.component';

describe('SegundaVistaComponent', () => {
  let component: SegundaVistaComponent;
  let fixture: ComponentFixture<SegundaVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundaVistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegundaVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
