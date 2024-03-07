import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsearchComponent } from './topsearch.component';

describe('TopsearchComponent', () => {
  let component: TopsearchComponent;
  let fixture: ComponentFixture<TopsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopsearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
