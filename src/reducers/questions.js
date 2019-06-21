import { RECEIVE_QUESTIONS, SAVE_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions';

export default function tweets (state={}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case SAVE_QUESTION :
      return {
        ...state,
        [action.question.id]: action.question,
      }
    case SAVE_QUESTION_ANSWER :
      return {
        ...state,
        ...state[action.id][action.answer].votes.push(action.authedUser)
      }
    default :
      return state
  }
}