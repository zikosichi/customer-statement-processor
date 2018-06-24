import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

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

  @HostListener('drop', ['$event']) public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const file = evt.dataTransfer.files[0];
    console.log(file);
  }

  @HostListener('dragover', ['$event']) public onDragOver(evt) {
    this.isFileOver = true;
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    this.isFileOver = false;
  }

  constructor() { }

  /**
   * On file select
   */
  onFileChange(e: any): void {
    const file: File = e.target.files[0];

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
