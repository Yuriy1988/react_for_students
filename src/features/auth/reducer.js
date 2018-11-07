import { LOGIN_FORM_CHANGE, LOGIN_SUBMIT } from './types';

const initialState = {
  isLoggedIn: false,
  formState: {
    name: '',
    pass: '',
  },
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_FORM_CHANGE:
      return {
        ...state,
        formState: {
          ...state.formState,
          ...action.payload,
        },
      };

    case LOGIN_SUBMIT:
      return {
        ...state,
        isLoggedIn: true,
        formState: {
          name: '',
          pass: '',
        },
      };

    default:
      return state;
  }
}
