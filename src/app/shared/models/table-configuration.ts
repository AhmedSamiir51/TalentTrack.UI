export interface TableColumn {
  key: string;
  header: string;
}

export interface TableAction {
  icon?: string;
  label?: string;
  handler: (item: any) => void;
}
