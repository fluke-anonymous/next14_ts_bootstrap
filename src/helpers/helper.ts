import { v4 as uuidv4 } from "uuid";

export function getEmptyRowFromColumn(columns:any, idName:any) {
  let row:any = { isNew: true };
  row[idName] = uuidv4();
  row.selected = false;
  for (const column of columns) {
    if (column.type === "select") row[column.id] = { id: "", label: "" };
    else row[column.id] = "";
  }
  return row;
}

export function getRowDataById(rows:any, id:any, idName:any) {
  for (const row of rows) {
    if (row[idName] === id) {
      return row;
    }
  }
  return null;
}

export function formatRESTPayload(rows:any) {
  let newRows = [];
  for (let row of rows) {
    let newRow:any = {};
    newRows.push(newRow);
    for (let item in row) {
      if (
        typeof row[item] === "object" &&
        row[item] !== null &&
        item !== "selected"
      ) {
        newRow[item] = row[item].id;
      }
    }
  }
  return newRows;
}

export function getSaveRESTPayload(rows:any) {
  let payload = [];
  for (let row of rows) {
    if (row.isNew || row.isEdit) {
      payload.push(row);
    }
  }
  return payload;
}

export function checkIsNewCount(rows:any, columns:any) {
  return rows.filter((row:any) => row.isNew === true).length;
}
