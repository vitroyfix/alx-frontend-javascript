import { RowID, RowElement } from './interface';

declare module './crud.js' {
  // Use 'export' because it's a module
  // Use 'number' as the return type for insertRow
  export function insertRow(row: RowElement): number;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
