import { RowID, RowElement } from './interface';

// This declares the types for the file './crud.js'
declare module './crud.js' {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
