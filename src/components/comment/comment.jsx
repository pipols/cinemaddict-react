import React from "react";

const Comment = () => {
  return (
    <li className="film-details__comment">
      <span className="film-details__comment-emoji">
        <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji-smile"/>
      </span>
      <div>
        <p className="film-details__comment-text">Interesting setting and a good cast</p>
        <p className="film-details__comment-info">
          <span className="film-details__comment-author">Tim Macoveev</span>
          <span className="film-details__comment-day">2019/12/31 23:59</span>
          <button className="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>
  );
};

export default Comment;
