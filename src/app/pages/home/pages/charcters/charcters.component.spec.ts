import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharctersComponent } from './charcters.component';

describe('CharctersComponent', () => {
  let component: CharctersComponent;
  let fixture: ComponentFixture<CharctersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharctersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharctersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
