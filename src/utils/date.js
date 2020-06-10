// const TimeToken = { year: `numeric`, month: `long`, day: `numeric` };

export const TimeToken = {
  year: { year: `numeric` },
};

export const reformatDate = (date, options) =>
  new Intl.DateTimeFormat(`en-EN`, options).format(new Date(date));
