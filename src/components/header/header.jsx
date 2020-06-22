import React from "react";
import { connect } from "react-redux";
import { getRatingSelector } from "../../selector";

const Header = ({ rating }) => {
  return (
    <header className="header">
      <h1 className="header__logo logo">Cinemaddict</h1>

      <section className="header__profile profile">
        <p className="profile__rating">{rating}</p>
        <img
          className="profile__avatar"
          src="images/bitmap@2x.png"
          alt="Avatar"
          width="35"
          height="35"
        />
      </section>
    </header>
  );
};

const mapStateToProps = (state) => ({
  rating: getRatingSelector(state),
});

export default connect(mapStateToProps)(React.memo(Header));
