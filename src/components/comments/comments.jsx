import React from "react";
import CommentComponent from "../comment/comment.jsx";
import NewCommentComponent from "../new-comment/new-comment.jsx";

const Comments = () => {
  return (
    <section className="film-details__comments-wrap">
      <h3 className="film-details__comments-title">Comments <span
        className="film-details__comments-count">4</span></h3>

      <ul className="film-details__comments-list">
        <CommentComponent/>
        <CommentComponent/>
        <CommentComponent/>
        <CommentComponent/>
      </ul>

      <NewCommentComponent/>
    </section>
  );
};

export default Comments;
