import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOrPutClientComponent } from './post-or-put-client.component';

describe('PostOrPutClientComponent', () => {
  let component: PostOrPutClientComponent;
  let fixture: ComponentFixture<PostOrPutClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOrPutClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOrPutClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
