export const dateStringToDate = (dateString: string): Date => {
  // input string : dd/mm/yyyy
  // output [dd, mm, yyyy]
  const dateParts = dateString.split('/').map((value: string): number => {
    return parseInt(value);
  });

  // Date(yyyy, mm - 1, dd)
  // mm is 0 indexed, January is 0
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
