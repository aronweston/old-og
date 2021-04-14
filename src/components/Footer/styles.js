import Facebook from '../../assets/svg/facebook.svg';
import Instagram from '../../assets/svg/instagram.svg';
import styled from 'styled-components';

export const Copyright = styled.div`
  color: white;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const FooterWrapper = styled.footer`
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  width: 100%;
  background: var(--primary);
  flex-shrink: 0;
  padding: 1rem 0;
`;

export const NavList = styled.ul`
  display: inline-flex;
  gap: 10px;
  > li {
    list-style: none;
  }
`;

export { Facebook, Instagram };
