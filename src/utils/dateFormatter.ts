export const dateFormatter = (date:Date) => {
  return new Intl.DateTimeFormat("fa-IR").format(date);
};
