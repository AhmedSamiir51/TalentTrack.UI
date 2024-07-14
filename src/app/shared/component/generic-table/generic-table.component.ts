import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableColumn, TableAction } from '../../models/table-configuration';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
})
export class GenericTableComponent {
  @Input() dataSource: any[] = [];
  @Input() columns: TableColumn[] = [];
  @Input() actions: TableAction[] = [];
  @Input() totalItems: number = 0;
  @Input() pageSize: number = 10;

  @Output() pageChange = new EventEmitter<any>();

  get displayedColumns(): string[] {
    return [...this.columns.map((col) => col.key), 'actions'];
  }
  constructor() {}

  onPageChange(event: any) {
    this.pageChange.emit(event);
  }
}
