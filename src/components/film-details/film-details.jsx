import React from "react";
import FilmDetailsCloseButtonComponent from "../film-details-close-button/film-details-close-button.jsx";
import FilmDetailsInfoComponent from "../film-details-info/film-details-info.jsx";
import FilmDetailsControlsComponent from "../film-details-controls/film-details-controls.jsx";
import CommentsComponent from "../comments/comments.jsx";
import { connect } from "react-redux";
import { operation } from "../../reducer.js";

class FilmDetails extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadComments(this.props.card);
  }

  render() {
    return (
      <section className="film-details">
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

const mapDispatchToProps = (dispatch) => ({
  loadComments(card) {
    dispatch(operation.loadComment(card.id));
  },
});

export default connect(null, mapDispatchToProps)(FilmDetails);
