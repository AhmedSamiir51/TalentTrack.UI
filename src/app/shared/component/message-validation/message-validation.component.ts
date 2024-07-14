import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-message-validation',
  templateUrl: './message-validation.component.html',
  styleUrls: ['./message-validation.component.scss']
})
export class MessageValidationComponent {

  @Input() control: AbstractControl | null = null;

  constructor() {}

  getErrorKeys(): string[] {
    return this.control ? Object.keys(this.control.errors || {}) : [];
  }

  getErrorMessage(errorKey: string): string {    
    const errorMessages: { [key: string]: string } = {
      required: 'This field is required',
      maxlength: 'Maximum length exceeded '+this.control?.getError('maxlength')?.requiredLength,
      minlength: 'Minimum length not met '+this.control?.getError('minlength')?.requiredLength,
      email: 'Invalid email format',
      pattern: 'Invalid input pattern',
      invalidPhoneNumber: 'Invalid phone number',
      invalidWebsite: 'Invalid website format',
      timeRangeInvalid: 'Invalid time range',
      dateRangeInvalid: 'Invalid date range',
      max: 'Value exceeds maximum '+this.control?.getError('max')?.max,
};

    return errorMessages[errorKey] || 'Invalid Format';
  }
}
