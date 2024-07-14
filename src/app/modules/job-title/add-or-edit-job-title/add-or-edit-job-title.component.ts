import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-or-edit-job-title',
  templateUrl: './add-or-edit-job-title.component.html',
  styleUrls: ['./add-or-edit-job-title.component.scss'],
})
export class AddOrEditJobTitleComponent {
  form: FormGroup;
  venueTypes: any[] = [];
  serviceUnits: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddOrEditJobTitleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      id: [data.id || null],
      name: [data.name || '', [Validators.required, Validators.maxLength(100)]],
      description: [data.description || '', [Validators.maxLength(1000)]],
      responsibilities: [
        data.responsibilities || '',
        [Validators.maxLength(1000)],
      ],
      skills: [data.skills || '', [Validators.maxLength(500)]],
      jobCategory: [
        data.jobCategory || '',
        [Validators.required, Validators.maxLength(100)],
      ],
      validFrom: [data.validFrom || '', Validators.required],
      validTo: [data.validTo || '', Validators.required],
      maxApplications: [
        data.maxApplications || null,
        [Validators.required, Validators.min(1), Validators.maxLength(7)],
      ],
    });
  }

  onSave(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
