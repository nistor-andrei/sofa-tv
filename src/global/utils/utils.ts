export const getYearFromDate = (date: string) => {
  return date ? date.split("-")[0] : "-";
};
