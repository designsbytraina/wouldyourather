import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { userAnswer, addUserQuestion } from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function questionAnswer ({ authedUser, id, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    id,
    authedUser,
    answer
  }
}

export function handleQuestionAnswer (info) {
  return (dispatch) => {
    dispatch(questionAnswer(info));
    dispatch(userAnswer(info));

    return saveQuestionAnswer(info)
      .catch( (e) => {
        console.warn('Error in handleQuestionAnswer: ', e)
        // dispatch(questionAnswer(info))
        alert('The was an error voting in this poll. :( \nTry again.');
      } )
  }
}

function addQuestion (question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}

export function handleAddQuestion ({ optionOneText, optionTwoText }) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading());

    return saveQuestion({ optionOneText, optionTwoText, author: authedUser })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addUserQuestion({question, authedUser}));
      }).then(() => dispatch(hideLoading()))
  }

}