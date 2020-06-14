// const TimeToken = { year: `numeric`, month: `long`, day: `numeric` };

export const TimeToken = {
  year: { year: `numeric` },
  release: { day: `numeric`, month: `long`, year: `numeric` },
  comment: {
    day: `numeric`,
    month: `numeric`,
    year: `numeric`,
    hour: `numeric`,
    minute: `numeric`,
    hour12: false,
  },
};

export const reformatDate = (date, options) =>
  new Intl.DateTimeFormat(`en-EN`, options).format(new Date(date));
