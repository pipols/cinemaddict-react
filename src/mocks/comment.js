import {getRandomIntegerNumber} from "../utils/common";

export const createComment = () => {
  return {
    id: getRandomIntegerNumber(1, 100000000),
    emotion: `smile`,
    comment: `Almost two hours? Seriously?`,
    author: `John Doe`,
    date: new Date(getRandomIntegerNumber(0, Date.now()))
  };
};
