import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JobTitleService } from 'src/app/services/job-title.service';
import { ConfirmDialogComponent } from 'src/app/shared/component/confirm-dialog/confirm-dialog.component';
import {
  TableColumn,
  TableAction,
} from 'src/app/shared/models/table-configuration';
import { AddOrEditJobTitleComponent } from '../add-or-edit-job-title/add-or-edit-job-title.component';

@Component({
  selector: 'app-job-title-landing-page',
  templateUrl: './job-title-landing-page.component.html',
  styleUrls: ['./job-title-landing-page.component.scss'],
})
export class JobTitleLandingPageComponent {
  title: string = 'JobTitle';
  items: any[] = [];
  searchForm: FormGroup;
  page: number = 1;
  pageSize: number = 3;
  totalItems: number = 0;

  columns: TableColumn[] = [
    { key: 'name', header: 'Name' },
    { key: 'description', header: 'Description' },
    { key: 'responsibilities', header: 'Responsibilities' },
    { key: 'skills', header: 'Skills' },
    { key: 'jobCategory', header: 'JobCategory' },
    { key: 'validFrom', header: 'ValidFrom' },
    { key: 'validTo', header: 'ValidTo' },
    { key: 'maxApplications', header: 'Max Applications' },
  ];

  actions: TableAction[] = [
    {
      icon: 'edit',
      label: 'Edit',
      handler: (item: any) => this.openDialog(item),
    },
    {
      icon: 'delete',
      label: 'Delete',
      handler: (item: any) => this.confirmDelete(item.id),
    },
  ];

  constructor(
    private jobTitleService: JobTitleService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.searchForm = this.fb.group({
      name: [''],
    });
  }
  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    const searchCriteria = {
      name: this.searchForm.value.name || '',
    };
    this.jobTitleService
      .getAllWithSearch(searchCriteria, this.page, this.pageSize)
      .subscribe((data) => {
        this.items = data.data?.results;
        this.totalItems = data.data?.totalCount;
      });
  }

  onSearch(): void {
    this.page = 1;
    this.loadItems();
  }

  onPageChange(event: any): void {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadItems();
  }

  openDialog(item?: any): void {
    const dialogRef = this.dialog.open(AddOrEditJobTitleComponent, {
      width: '400px',
      height: '100vh',
      position: { right: '0' },
      data: item ? { ...item } : {},
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.jobTitleService.create(result).subscribe((res: any) => {
          if (res.success) {
            this.loadItems();
            this.snackBar.open(
              `Item ${item ? 'updated' : 'created'} successfully`,
              'Close',
              { duration: 3000 }
            );
          } else {
            this.snackBar.open(res.message, 'Close', { duration: 3000 });
          }
        });
      }
    });
  }

  confirmDelete(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Are you sure you want to delete this item?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.jobTitleService.delete(id).subscribe((res: any) => {
          if (res.success) {
            this.loadItems();
            this.snackBar.open('Item deleted successfully', 'Close', {
              duration: 3000,
            });
          } else {
            this.snackBar.open(res.message, 'Close', { duration: 3000 });
          }
        });
      }
    });
  }
}
