import { LOGIN_FORM_CHANGE, LOGIN_SUBMIT } from './types';

export const onLoginFormChange = (payload) => ({
  type: LOGIN_FORM_CHANGE,
  payload,
});

export const onLoginSubmit = (payload) => ({
  type: LOGIN_SUBMIT,
  payload,
});
