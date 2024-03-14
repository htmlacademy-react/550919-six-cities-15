import React, { useState } from 'react';
import { Comments } from '../types/comments';

type CommentCardProps = {
  comments: Comments;
};

const CommentCard: React.FC<CommentCardProps> = ({ comments }) => {
  const [newComment, setNewComment] = useState('');
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value);
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRating(Number(event.target.value));
  };

  return (
    <div>
      <ul className="reviews__list">
        {comments.map((comment) => (
          <li className="reviews__item" key={comment.id}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
              </div>
              <span className="reviews__user-name">{comment.user.userName}</span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: `${comment.rating * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">{comment.comment}</p>
              <time className="reviews__time" dateTime={comment.date}>{comment.date}</time>
            </div>
          </li>
        ))}
      </ul>
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {Array.from({ length: 5 }, (_, index) => (
            <React.Fragment key={index}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={5 - index}
                id={`${5 - index}-stars`}
                type="radio"
                checked={selectedRating === 5 - index}
                onChange={() => handleRatingChange(5 - index)}
              />
              <label htmlFor={`${5 - index}-stars`} className="reviews__rating-label form__rating-label">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          ))}
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={newComment} onChange={handleCommentChange}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CommentCard;
