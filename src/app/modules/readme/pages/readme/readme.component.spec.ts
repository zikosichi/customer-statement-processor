import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmeComponent } from './readme.component';
import { MarkdownModule } from 'angular2-markdown';
import { HttpClientModule } from '@angular/common/http';

describe('ReadmeComponent', () => {
  let component: ReadmeComponent;
  let fixture: ComponentFixture<ReadmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReadmeComponent],
      imports: [MarkdownModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
