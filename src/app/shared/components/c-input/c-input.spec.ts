import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CInput } from './c-input';

describe('CInput', () => {
  let component: CInput;
  let fixture: ComponentFixture<CInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
