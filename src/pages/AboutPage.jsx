import { styled } from 'styled-components';
import Wrap from '../styled/Wrap.styled';
import Posts from '../components/Posts';
import { useContext } from 'react';
import AuthContext from '../store/AuthContext';

const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
`;
export default function AboutPage() {
  const ctx = useContext(AuthContext);
  return (
    <Wrap>
      <Title>AboutPage</Title>
      <p>Welcome to our page</p>
      {ctx.isUserLoggedIn && <Posts />}
    </Wrap>
  );
}
