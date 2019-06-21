import { RECEIVE_USERS, SAVE_USER_ANSWER } from '../actions/users';

export default function users (state={}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case SAVE_USER_ANSWER :
      console.log(state);
      console.log(action.info.authedUser);
      return {
        ...state,
        ...state[action.info.authedUser].questions.push(action.info.id)
      }
    default :
      return state
  }
}