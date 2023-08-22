import { createContext } from 'react';

const AuthContext = createContext({
  email: '',
  isUserLoggedIn: false,
  login(email) {},
  logout() {},
});
AuthContext.displayName = 'MusuAutentifikacija';
export default AuthContext;
