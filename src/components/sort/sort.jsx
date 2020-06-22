import React from "react";
import { connect } from "react-redux";
import { getActiveSort } from "../../selector";
import { SortType } from "../../const";
import { ActionCreator } from "../../reducer";

const ACTIVE_CLASS_NAME = `sort__button--active`;

const Sort = ({ activeSort, setActiveSort }) => {
  return (
    <ul className="sort">
      <li>
        <a
          onClick={() => setActiveSort(SortType.DEFAULT)}
          href="#"
          className={`sort__button ${
            activeSort === SortType.DEFAULT ? ACTIVE_CLASS_NAME : ``
          }`}
        >
          Sort by default
        </a>
      </li>
      <li>
        <a
          onClick={() => setActiveSort(SortType.DATE)}
          href="#"
          className={`sort__button ${
            activeSort === SortType.DATE ? ACTIVE_CLASS_NAME : ``
          }`}
        >
          Sort by date
        </a>
      </li>
      <li>
        <a
          onClick={() => setActiveSort(SortType.RATING)}
          href="#"
          className={`sort__button ${
            activeSort === SortType.RATING ? ACTIVE_CLASS_NAME : ``
          }`}
        >
          Sort by rating
        </a>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => ({
  activeSort: getActiveSort(state),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveSort(sortType) {
    dispatch(ActionCreator.setSortType(sortType));
    dispatch(ActionCreator.resetFilmStack());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Sort));
