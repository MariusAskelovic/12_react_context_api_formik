import { Link, NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import Wrap from '../../styled/Wrap.styled';

const HeaderContainer = styled(Wrap)`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
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
  return (
    <HeaderContainer as={'header'}>
      <Logo to={'/'}>OurLogo</Logo>
      <Nav>
        <OneLink to={'/'}>Home</OneLink>
        <OneLink to={'/about'}>About Us</OneLink>
      </Nav>
    </HeaderContainer>
  );
}
