import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobTitleService } from 'src/app/services/job-title.service';

@Component({
  selector: 'app-add-or-edit-applicants',
  templateUrl: './add-or-edit-applicants.component.html',
  styleUrls: ['./add-or-edit-applicants.component.scss'],
})
export class AddOrEditApplicantsComponent implements OnInit {
  form: FormGroup;
  jobTitles: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddOrEditApplicantsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private jobTitleService: JobTitleService
  ) {
    this.form = this.fb.group({
      id: [data.id || null],
      name: [data.name || '', [Validators.required, Validators.maxLength(100)]],
      email: [data.email || '', [Validators.required, Validators.email]],
      mobileNumber: [
        data.mobileNumber || '',
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      jobTitleId: [data.jobTitleId || null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.jobTitleService.getAll().subscribe((e) => {
      this.jobTitles = e?.data;
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
