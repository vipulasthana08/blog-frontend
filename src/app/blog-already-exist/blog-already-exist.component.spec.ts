import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAlreadyExistComponent } from './blog-already-exist.component';

describe('BlogAlreadyExistComponent', () => {
  let component: BlogAlreadyExistComponent;
  let fixture: ComponentFixture<BlogAlreadyExistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogAlreadyExistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogAlreadyExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
