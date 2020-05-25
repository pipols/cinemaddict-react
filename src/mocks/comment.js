import {getRandomIntegerNumber} from "../utils/common";

export const createComment = () => {
  return {
    emotion: `smile`,
    commentText: `Almost two hours? Seriously?`,
    author: `John Doe`,
    date: new Date(getRandomIntegerNumber(0, Date.now()))
  };
};
