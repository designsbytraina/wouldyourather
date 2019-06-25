export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';
export const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION';

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function userAnswer (info) {
  console.log(info);
  return {
    type: SAVE_USER_ANSWER,
    info
  }
}

export function addUserQuestion ({question, authedUser}) {
  return {
    type: SAVE_USER_QUESTION,
    question,
    authedUser
  }
}

// export function handleAddUserQuestion (question) {
//   return (dispatch, getState) => {
//     const { authedUser } = getState();
//     dispatch(addUserQuestion({question, authedUser}));
//   }
// }