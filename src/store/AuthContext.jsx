import { createContext } from 'react';

const AuthContext = createContext({
  email: '',
  login(email) {},
  logout() {},
});
AuthContext.displayName = 'MusuAutentifikacija';
export default AuthContext;
