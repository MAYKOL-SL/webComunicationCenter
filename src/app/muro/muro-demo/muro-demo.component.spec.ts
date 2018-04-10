import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuroDemoComponent } from './muro-demo.component';

describe('MuroDemoComponent', () => {
  let component: MuroDemoComponent;
  let fixture: ComponentFixture<MuroDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuroDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuroDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
