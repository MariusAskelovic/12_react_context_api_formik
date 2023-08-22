import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Header from './components/layout/Header';
import VipPage from './pages/VipPage';
import LoginPage from './pages/LoginPage';
import AuthContext from './store/AuthContext';
import { useState } from 'react';

export default function App() {
  const [userEmail, setUserEmail] = useState(null);
  // infered value (apskaiciuojama reiksme)
  let isUserLoggedIn = userEmail ? true : false;
  // !! du kart apvercia ir padaro boolean (bang bang)
  isUserLoggedIn = !!userEmail;

  console.log('isUserLoggedIn ===', isUserLoggedIn);
  function login(emailVal) {
    // console.log('emailVal ===', emailVal);
    setUserEmail(emailVal);
  }

  const ctx = {
    email: userEmail,
    isUserLoggedIn: isUserLoggedIn,
    login: login,
  };

  return (
    <AuthContext.Provider value={ctx}>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        {ctx.isUserLoggedIn && <Route path='/vip' element={<VipPage />} />}
        {!ctx.isUserLoggedIn && <Route path='/login' element={<LoginPage />} />}
      </Routes>
    </AuthContext.Provider>
  );
}
