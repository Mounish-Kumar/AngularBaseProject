import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadraturaAcquirerComponent } from './quadratura-acquirer.component';

describe('QuadraturaAcquirerComponent', () => {
  let component: QuadraturaAcquirerComponent;
  let fixture: ComponentFixture<QuadraturaAcquirerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadraturaAcquirerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadraturaAcquirerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
