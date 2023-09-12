const CODES = {
  A: 65,
  Z: 90,
}

function toCell(_, i) {
  return `
        <div class="cell" data-col="${i}"></div>
    `
}
function toColumn(col, i) {
  return `
        <div class="column" data-type="resizable" data-col="${i}">
            ${col}
            <div class="col-resize" data-resize="col"></div>
        </div>
    `
}

function createRow(content, index = '') {
  const resize = index ? '<div class="row-resize" data-resize="row"></div>' : ''
  return `
        <div class="row" data-type="resizable">
          <div class="row-info">
                ${index}
                ${resize}
            </div>
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
      .map((_, i) => createRow(new Array(colsCount)
          .fill('')
          .map(toCell)
          .join(''), `${i+1}`))]

  return rows.join('')
}
