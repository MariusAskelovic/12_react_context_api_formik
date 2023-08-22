import { styled } from 'styled-components';
import Wrap from '../styled/Wrap.styled';

const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 0.3em 0.8em;
  border-radius: 4px;
  border: 1px solid #777;
  display: block;
  max-width: 300px;
  margin-bottom: 10px;
`;
const SubmitBtn = styled.button.attrs({
  type: 'submit',
})`
  background-color: #333;
  color: white;
`;

export default function LoginPage() {
  return (
    <Wrap>
      <Title>LoginPage</Title>
      <form>
        <Input type='text' placeholder='Email' id='email' />
        <Input type='password' placeholder='Password' id='password' />
        <SubmitBtn>Login</SubmitBtn>
      </form>
    </Wrap>
  );
}
