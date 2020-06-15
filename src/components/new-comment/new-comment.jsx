import React from "react";
import { KeyCode } from "../../const";
import { connect } from "react-redux";
import { operation } from "../../reducer";

class NewComment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      comment: ``,
      emoji: null,
    };
    this.handleEmojiChange = this.handleEmojiChange.bind(this);
    this.handlerNewCommentKeydown = this.handlerNewCommentKeydown.bind(this);
  }

  handleEmojiChange(evt) {
    evt.preventDefault();
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  handlerNewCommentKeydown(evt) {
    if ((evt.ctrlKey || evt.metaKey) && evt.key === KeyCode.ENTER) {
      const comment = {
        comment: this.state.comment,
        date: new Date().toISOString(),
        emotion: this.state.emoji,
      };
      this.props.postComment(comment);
    }
  }

  render() {
    return (
      <div
        onKeyDown={this.handlerNewCommentKeydown}
        className="film-details__new-comment"
      >
        <div htmlFor="add-emoji" className="film-details__add-emoji-label">
          {this.state.emoji && (
            <img
              src={`./images/emoji/${this.state.emoji}.png`}
              width="50"
              height="50"
            ></img>
          )}
        </div>

        <label className="film-details__comment-label">
          <textarea
            onChange={this.handleEmojiChange}
            className="film-details__comment-input"
            placeholder="Select reaction below and write comment here"
            name="comment"
          />
        </label>

        <div className="film-details__emoji-list">
          <input
            onChange={this.handleEmojiChange}
            className="film-details__emoji-item visually-hidden"
            name="emoji"
            type="radio"
            id="emoji-smile"
            value="smile"
          />
          <label className="film-details__emoji-label" htmlFor="emoji-smile">
            <img
              src="./images/emoji/smile.png"
              width="30"
              height="30"
              alt="emoji"
            />
          </label>

          <input
            onChange={this.handleEmojiChange}
            className="film-details__emoji-item visually-hidden"
            name="emoji"
            type="radio"
            id="emoji-sleeping"
            value="sleeping"
          />
          <label className="film-details__emoji-label" htmlFor="emoji-sleeping">
            <img
              src="./images/emoji/sleeping.png"
              width="30"
              height="30"
              alt="emoji"
            />
          </label>

          <input
            onChange={this.handleEmojiChange}
            className="film-details__emoji-item visually-hidden"
            name="emoji"
            type="radio"
            id="emoji-puke"
            value="puke"
          />
          <label className="film-details__emoji-label" htmlFor="emoji-puke">
            <img
              src="./images/emoji/puke.png"
              width="30"
              height="30"
              alt="emoji"
            />
          </label>

          <input
            onChange={this.handleEmojiChange}
            className="film-details__emoji-item visually-hidden"
            name="emoji"
            type="radio"
            id="emoji-angry"
            value="angry"
          />
          <label className="film-details__emoji-label" htmlFor="emoji-angry">
            <img
              src="./images/emoji/angry.png"
              width="30"
              height="30"
              alt="emoji"
            />
          </label>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  postComment(comment) {
    dispatch(operation.postComment(comment));
  },
});

export default connect(null, mapDispatchToProps)(NewComment);
