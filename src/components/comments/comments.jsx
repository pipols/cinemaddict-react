import React from "react";
import CommentComponent from "../comment/comment.jsx";
import NewCommentComponent from "../new-comment/new-comment.jsx";
import { connect } from "react-redux";
import { getComments } from "../../selector.js";

const Comments = ({ comments }) => {
  return (
    <section className="film-details__comments-wrap">
      <h3 className="film-details__comments-title">
        Comments{" "}
        <span className="film-details__comments-count">{comments.length}</span>
      </h3>

      <ul className="film-details__comments-list">
        {comments.map((comment, i) => (
          <CommentComponent usersComments={comment} key={i} />
        ))}
      </ul>

      <NewCommentComponent />
    </section>
  );
};

const mapStateToProps = (state) => ({
  comments: getComments(state),
});

export default connect(mapStateToProps)(React.memo(Comments));
