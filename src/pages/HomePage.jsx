import { styled } from 'styled-components';
import Wrap from '../styled/Wrap.styled';
import Aside from '../components/Aside';

const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 30%;
  gap: 15px;
`;
export default function HomePage() {
  return (
    <Wrap>
      <Grid>
        <Title>HomePage</Title>
        <Aside />
      </Grid>
    </Wrap>
  );
}
