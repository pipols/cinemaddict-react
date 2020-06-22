import React from "react";
import { reformatDate, TimeToken } from "../../utils/date";
import { connect } from "react-redux";
import { operation } from "../../reducer";

const Comment = ({ usersComments, deleteComment }) => {
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
          <button
            onClick={(evt) => {
              evt.preventDefault();
              deleteComment(usersComments);
            }}
            className="film-details__comment-delete"
          >
            Delete
          </button>
        </p>
      </div>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteComment(comment) {
    dispatch(operation.deleteComment(comment));
  },
});

export default connect(null, mapDispatchToProps)(React.memo(Comment));
