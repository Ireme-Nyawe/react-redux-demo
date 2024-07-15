import { FETCH_USERS_FAILURE } from "./UserTypes"
import { FETCH_USERS_REQUEST } from "./UserTypes"
import { FETCH_USERS_SUCCESS } from "./UserTypes"

export const fetchUsersRequest = () => {
    return {
      type: FETCH_USERS_REQUEST
    }
  }
  
  export const fetchUsersSuccess = users => {
    return {
      type: FETCH_USERS_SUCCESS,
      payload: users
    }
  }
  
  export const fetchUsersFailure = error => {
    return {
      type: FETCH_USERS_FAILURE,
      payload: error
    }
  }