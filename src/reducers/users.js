import { RECEIVE_USERS, SAVE_USER_ANSWER, SAVE_USER_QUESTION } from '../actions/users';

export default function users (state={}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case SAVE_USER_ANSWER :
      return {
        ...state,
        [action.info.authedUser]: {
          ...state[action.info.authedUser],
          answers: {
            ...state[action.info.authedUser].answers,
            [action.info.id]: action.info.answer
          }
        }
      }
    case SAVE_USER_QUESTION :
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat([action.id])
        }
      }
    default :
      return state
  }
}