const CODES = {
  A: 65,
  Z: 90,
}


function toCell() {
  return `
        <div class="cell"></div>
    `
}
function toColumn(col) {
  return `
        <div class="column">
            ${col}
        </div>
    `
}

function createRow(content, index = '') {
  return `
        <div class="row">
          <div class="row-info">${index}</div>
          <div class="row-data">${content}</div>
        </div>
    `
}

function toChar(_, i) {
  return String.fromCharCode(CODES.A + i)
}

export function createTable(rowsCount = 100) {
  const colsCount = CODES.Z - CODES.A + 1
  const cols = (fn) => new Array(colsCount)
      .fill('')
      .map(fn)
      .map(toColumn)
      .join('')


  const rows = [createRow(cols(toChar)), ...new Array(rowsCount)
      .fill('')
      .map((_, i) => createRow(cols(toCell), `${i+1}`))]

  return rows.join('')
}
