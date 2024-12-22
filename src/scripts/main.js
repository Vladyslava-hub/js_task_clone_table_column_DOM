'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('.dashboard');
  // eslint-disable-next-line no-unused-vars
  const row = table.querySelectorAll('tbody tr');

  // eslint-disable-next-line no-undef, no-shadow
  rows.forEach((row) => {
    const secondColumn = row.cells[1];
    const clonedColumn = secondColumn.cloneNode(true);

    row.inserBefore(clonedColumn, row.cells[row.cells.length - 1]);
  });
});
