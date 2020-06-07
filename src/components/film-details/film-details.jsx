import React from "react";
import FilmDetailsCloseButtonComponent from "../film-details-close-button/film-details-close-button.jsx";
import FilmDetailsInfoComponent from "../film-details-info/film-details-info.jsx";
import FilmDetailsControlsComponent from "../film-details-controls/film-details-controls.jsx";
import CommentsComponent from "../comments/comments.jsx";

class FilmDetails extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section
        className={`film-details ${this.props.card ? `` : `visually-hidden`}`}
      >
        <form className="film-details__inner" action="" method="get">
          <div className="form-details__top-container">
            <FilmDetailsCloseButtonComponent />
            <FilmDetailsInfoComponent card={this.props.card} />
            <FilmDetailsControlsComponent card={this.props.card} />
          </div>

          <div className="form-details__bottom-container">
            <CommentsComponent />
          </div>
        </form>
      </section>
    );
  }
}

export default FilmDetails;
