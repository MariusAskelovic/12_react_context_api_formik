import { styled } from 'styled-components';
import Wrap from '../styled/Wrap.styled';

const Title = styled.h1`
  font-size: 45px;
  font-weight: 500;
`;
export default function VipPage() {
  return (
    <Wrap>
      <Title>VipPage</Title>
      <p>
        Welcome to our exclusive VIP page, where luxury and exceptional
        experiences await you at every click. As a valued member of our inner
        circle, you&apos;re about to embark on a journey beyond the ordinary.
        Here, indulgence knows no bounds, and your desires take center stage.
        From curated content crafted specifically for our VIPs to unparalleled
        access to premium services, this is your gateway to a world where
        sophistication meets innovation. Join us as we redefine exclusivity and
        grant you a key to unlock a realm of privileges designed to cater to
        your every whim. Your VIP status is not just a label; it&apos;s an
        invitation to explore a realm of opulence reserved solely for those who
        seek the finest things in life.
      </p>
    </Wrap>
  );
}
