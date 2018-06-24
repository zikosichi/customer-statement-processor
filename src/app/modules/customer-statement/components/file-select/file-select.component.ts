import { Component, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';

// Animations
import { slideUpAnimation } from '../../../../shared/animations/animations';

@Component({
  selector: 'app-file-select',
  templateUrl: './file-select.component.html',
  styleUrls: ['./file-select.component.scss'],
  animations: [slideUpAnimation]
})
export class FileSelectComponent {

  @Input()
  acceptedFormats: string[] = [];

  @Output()
  statementSelect: EventEmitter<File> = new EventEmitter();

  isFileOver: boolean = false;
  errorMessage: string = '';

  @HostListener('drop', ['$event']) onDrop(e: any) {
    e.preventDefault();
    this.isFileOver = false;
    this.emitFileEvent(e.dataTransfer.files[0]);
  }

  @HostListener('dragover', ['$event'])
  onDragOver(e: Event) {
    e.preventDefault();
    this.isFileOver = true;
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave() {
    this.isFileOver = false;
  }

  constructor() { }

  /**
   * On file select
   */
  onFileChange(e: any): void {
    this.emitFileEvent(e.target.files[0]);
  }

  /**
   * Emit file event
   */
  emitFileEvent(file: File) {
    if (this.acceptedFormats.includes(file.type)) {
      this.statementSelect.emit(file);
    } else {
      this.displayFormatError('The file format is not supported');
    }
  }

  /**
   * Display error if file format is wrong
   */
  displayFormatError(msg: string) {
    this.errorMessage = msg;

    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }
}
