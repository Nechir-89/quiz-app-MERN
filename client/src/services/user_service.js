// import { user_context } from "../contexts/user_context";

export function sign_in(user) {
  try {
    console.table(user);
    // make request to backend
    // update user context
  } catch (error) {
    console.error('Signin failed on app server: ' + error);
  }
}

export function sign_in_with_google(userToken) {
  try {
    // make request to backend
    // update user context
  } catch (error) {
    console.error('Signin with google failed on app server: ' + error);
  }
}
