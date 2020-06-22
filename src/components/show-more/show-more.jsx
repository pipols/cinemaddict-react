import React from "react";
import { isShowMoreSelector } from "../../selector";
import { connect } from "react-redux";
import { ActionCreator } from "../../reducer";

const ShowMore = ({ addFilmStack }) => {
  return (
    <button onClick={() => addFilmStack()} className="films-list__show-more">
      Show more
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addFilmStack() {
    dispatch(ActionCreator.addFilmStack());
  },
});

export default connect(null, mapDispatchToProps)(React.memo(ShowMore));
