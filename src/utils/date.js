const TimeToken = { year: `numeric`, month: `long`, day: `numeric` };

export const reformatDate = (date) =>
  new Intl.DateTimeFormat(`en-EN`, TimeToken).format(new Date(date));
