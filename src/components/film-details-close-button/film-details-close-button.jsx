import React from "react";
import { connect } from "react-redux";
import { ActionCreator } from "../../reducer";

const FilmDetailsCloseButton = ({ removeOpenedFilm }) => {
  return (
    <div className="film-details__close">
      <button
        onClick={removeOpenedFilm}
        className="film-details__close-btn"
        type="button"
      >
        close
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeOpenedFilm() {
    dispatch(ActionCreator.removeOpenedFilmId());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(React.memo(FilmDetailsCloseButton));
