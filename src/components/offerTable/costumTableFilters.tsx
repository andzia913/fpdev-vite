export const surfaceFilterFn = (rows, id, filterValue) => rows.filter((row) => Number(row.original.surface) >= Number(filterValue[0]) && Number(row.original.surface) <= Number(filterValue[1]));

export const priceFilterFn = (rows, id, filterValue) => {
  const stringToNumber = (str) => Number(str.replace('.', ''));
  return rows.filter((row) => (stringToNumber(row.original.priceOfFlat) >= Number(filterValue[0]) && (stringToNumber(row.original.priceOfFlat) <= Number(filterValue[1]))));
};
