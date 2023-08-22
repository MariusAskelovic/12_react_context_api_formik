import { Link, NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import Wrap from '../../styled/Wrap.styled';
import { useContext } from 'react';
import AuthContext from '../../store/AuthContext';

const HeaderContainer = styled(Wrap)`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 1px solid #b3b3b3;
`;

const Logo = styled(Link)`
  font-size: 24px;
  padding: 0.2em 0;
`;

const Nav = styled.nav``;

const OneLink = styled(NavLink)`
  font-size: 18px;
  padding: 0.3em 0.8em;
  border: 1px solid transparent;
  &:hover {
    background-color: gray;
  }
  &.active {
    border: 1px solid #b3b3b3;
  }
`;

export default function Header() {
  const ctx = useContext(AuthContext);
  console.log('ctx ===', ctx);
  return (
    <HeaderContainer as={'header'}>
      <Logo to={'/'}>OurLogo</Logo>
      <Nav>
        <OneLink to={'/'}>Home</OneLink>
        <OneLink to={'/about'}>About Us</OneLink>
        {ctx.isUserLoggedIn && <OneLink to={'/vip'}>VIP</OneLink>}
        {!ctx.isUserLoggedIn && <OneLink to={'/login'}>Login</OneLink>}
        {ctx.isUserLoggedIn && (
          <OneLink onClick={ctx.logout} to={'/login'}>
            Logout
          </OneLink>
        )}
        {!ctx.isUserLoggedIn && <OneLink to={'/register'}>Register</OneLink>}
      </Nav>
    </HeaderContainer>
  );
}
