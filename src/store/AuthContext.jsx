import { createContext } from 'react';

const AuthContext = createContext({
  email: '',
  isUserLoggedIn: false,
  // eslint-disable-next-line no-unused-vars
  login(email) {},
  logout() {},
});
AuthContext.displayName = 'MusuAutentifikacija';
export default AuthContext;
