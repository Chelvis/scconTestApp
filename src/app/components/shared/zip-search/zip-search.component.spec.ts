import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipSearchComponent } from './zip-search.component';

describe('ZipSearchComponent', () => {
  let component: ZipSearchComponent;
  let fixture: ComponentFixture<ZipSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
