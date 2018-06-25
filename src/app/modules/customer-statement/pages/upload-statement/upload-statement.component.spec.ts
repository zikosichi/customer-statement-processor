import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadStatementComponent } from './upload-statement.component';
import { ReportComponent } from '../../components/report/report.component';
import { FileSelectComponent } from '../../components/file-select/file-select.component';

describe('UploadStatementComponent', () => {
  let component: UploadStatementComponent;
  let fixture: ComponentFixture<UploadStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadStatementComponent, ReportComponent, FileSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
