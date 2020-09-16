import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaluationComponent } from './avaluation.component';

describe('AvaluationComponent', () => {
  let component: AvaluationComponent;
  let fixture: ComponentFixture<AvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
