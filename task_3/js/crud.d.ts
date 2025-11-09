// Task 8: Ambient Namespaces (Declaration File)
import { RowID, RowElement } from './interface';

declare module 'crud.js' {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}