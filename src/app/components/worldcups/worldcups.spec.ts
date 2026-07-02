import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Worldcups } from './worldcups';

describe('Worldcups', () => {
  let component: Worldcups;
  let fixture: ComponentFixture<Worldcups>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Worldcups],
    }).compileComponents();

    fixture = TestBed.createComponent(Worldcups);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
