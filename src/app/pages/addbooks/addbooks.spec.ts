import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addbooks } from './addbooks';

describe('Addbooks', () => {
  let component: Addbooks;
  let fixture: ComponentFixture<Addbooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addbooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addbooks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
