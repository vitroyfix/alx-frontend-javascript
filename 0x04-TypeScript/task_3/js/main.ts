import { insertRow, deleteRow, updateRow } from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = insertRow(row);

// Removed the trailing comma from the object
const updatedRow: RowElement = { ...row, age: 23 };

updateRow(newRowID, updatedRow);
deleteRow(newRowID);
