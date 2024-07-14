import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: [ './dynamic-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DynamicInputComponent {
  @Input() formGroup: any;
  @Input() controlName: any;
  @Input() copyControlNameForm: any;
  @Input() label: any;
  @Input() placeholder: any;
  @Input() required: boolean=false;
  @Input() transferPhoneNumber: boolean=false;
  @Input() copyToClipboard: boolean=false;
  @Input() displayed: boolean=false;
  @Input() controlType: string ='text';
  @Input() options: any[] = [];
  @Input() valueProperty: string ='text';
  @Input() nameProperty: string ='text';
  @Input() isMultiple: boolean = false;
  @Input() maxFilesLength: number = 0; 
  fileError?: string | null;
  fileName: string | null = null;

  @Output() change = new EventEmitter<any>();
  @ViewChild('fileInput') fileInput?: ElementRef;
  
  constructor() {}

  formatTimeForInput(time: string): string {
    const date = new Date(`1970-01-01T${time}Z`);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  }

  formatTimeForOutput(event: any): void {    
    const [hours, minutes] = event.target.value.split(':');
    const date = new Date();
    date.setHours(+hours);
    date.setMinutes(+minutes);
    date.setSeconds(0);
    const formattedTime = date.toTimeString().split(' ')[0];
    this.formGroup.get(this.controlName)?.setValue(formattedTime, { emitEvent: false });
  }


  get control() {
    return this.formGroup.get(this.controlName);
  }

  getOptionValue(id: any): string {
    const selectedItem = this.options.find(option => option[this.valueProperty] == id);
    return selectedItem ? selectedItem[this.nameProperty] : '';
  }
 
}
