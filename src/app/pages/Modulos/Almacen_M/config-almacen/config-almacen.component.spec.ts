import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAlmacenComponent } from './config-almacen.component';

describe('ConfigAlmacenComponent', () => {
  let component: ConfigAlmacenComponent;
  let fixture: ComponentFixture<ConfigAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigAlmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
