import { generateComment } from './addProduct';

const userReviews = document.getElementById('userReviews');
const numbeOfReviews = document.getElementById('numbeOfReviews');

export const addComment = (obj) => {
  numbeOfReviews.firstChild.innerHTML = obj.reviews.length;

  let listComments = '';

  for (const item of obj.reviews) {
    listComments += generateComment(item);
  }

  if (userReviews !== null) {
    userReviews.innerHTML = null;
    userReviews.insertAdjacentHTML('afterbegin', listComments);
  }
};