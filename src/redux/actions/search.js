import { SEARCH_MOVIE_START } from '../../consts/actionTypes';

export const serachMovie = payload => ({
  type: SEARCH_MOVIE_START,
  payload
});