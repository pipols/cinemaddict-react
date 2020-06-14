import React from "react";
import { reformatDate, TimeToken } from "../../utils/date";

const Comment = ({ usersComments }) => {
  const { author, comment, date, emotion } = usersComments;

  return (
    <li className="film-details__comment">
      <span className="film-details__comment-emoji">
        <img
          src={`./images/emoji/${emotion}.png`}
          width="55"
          height="55"
          alt={`emoji-smile ${emotion}`}
        />
      </span>
      <div>
        <p className="film-details__comment-text">{comment}</p>
        <p className="film-details__comment-info">
          <span className="film-details__comment-author">{author}</span>
          <span className="film-details__comment-day">
            {reformatDate(date, TimeToken.comment)}
          </span>
          <button className="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>
  );
};

export default Comment;
