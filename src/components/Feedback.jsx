import { styled } from 'styled-components';
const Success = styled.h3`
  font-size: 24px;
  color: green;
`;
const Failed = styled.h3`
  font-size: 32px;
  color: red;
`;
export default function Feedback(props) {
  return (
    <div>
      {props.status === 'success' && <Success>Sveikiname prisijungus</Success>}
      {props.status === 'failed' && <Failed>Bandykite dar karta</Failed>}
    </div>
  );
}
