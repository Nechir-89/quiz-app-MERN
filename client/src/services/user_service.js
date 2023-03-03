import { user_context } from "../contexts/user_context";
import jwtDecode from 'jwt-decode';

export function sign_in(user) {
  try {
    console.table(user);
    // make request to backend
    // update user context
    
    // user_context(user);

    return user;

  } catch (error) {
    console.error('Signin failed on app server: ' + error);
    return null;
  }
}

export function sign_in_with_google(userToken) {
  try {
    console.log(userToken);
    const signedUser = jwtDecode(userToken);
    console.log(signedUser);
    // make request to backend
    // update user context

    // user_context(signedUser)
    return signedUser;
  } catch (error) {
    console.error('Signin with google failed on app server: ' + error);
    return null;
  }
}
