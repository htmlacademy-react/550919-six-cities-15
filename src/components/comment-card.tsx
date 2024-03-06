import React, { useState } from 'react';
import { Comments } from '../types/comments';

type CommentCardProps = {
  comments: Comments;
};

const CommentCard: React.FC<CommentCardProps> = ({ comments }) => {
  const [newComment, setNewComment] = useState('');
  const [commentList, setCommentList] = useState(comments);

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value);
  };
  // Новый комментарий
  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newCommentObject = {
        id: commentList.length + 1,
        user: { avatarUrl: 'https://i.pravatar.cc/121', userName: 'User', isPro: true },
        rating: 5,
        comment: newComment,
        date: new Date().toDateString(),
      };
      setCommentList((prevComments) => [...prevComments, newCommentObject]);
      setNewComment('');
    }
  };

  return (
    <ul className="reviews__list">
      {commentList.map((comment) => (
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
      <div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={newComment}
          onChange={handleCommentChange}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
            stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="button" onClick={handleAddComment}>
            Submit
          </button>
        </div>
      </div>
    </ul>
  );
};

export default CommentCard;
