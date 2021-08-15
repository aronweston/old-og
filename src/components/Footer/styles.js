import FacebookSVG from '../../assets/svg/facebook.svg';
import InstagramSVG from '../../assets/svg/instagram.svg';
import PhoneSVG from '../../assets/svg/phone.svg';
import EmailSVG from '../../assets/svg/email.svg';
import styled from 'styled-components';
import LogoBase from '../../assets/svg/empty-leaf.svg';
import { Container } from '../Global';

const svgStyles = `
width: 25px;
`;

export const Facebook = styled(FacebookSVG)`
  ${svgStyles}
`;

export const Instagram = styled(InstagramSVG)`
  ${svgStyles}
`;

export const Phone = styled(PhoneSVG)`
  ${svgStyles}
  stroke: #fff;
`;

export const Email = styled(EmailSVG)`
  ${svgStyles}
`;

export const Icons = styled.div`
  padding: 1.5rem 0;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: column;
  }

  > a {
    transition: 0.3s ease;
    &:hover {
      transform: translate(0%, -7%);
    }
  }
`;

export const Logo = styled(LogoBase)`
  width: 100px;
  height: 100%;
  vertical-align: center;
  justify-content: center;

  > circle {
    fill: var(--bkg);
  }

  > path {
    fill: var(--primary);
  }
`;

export const Copyright = styled.div`
  color: white;
  font-size: 12px;
  padding: 1rem;
  text-align: center;
`;

export const FooterGrid = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem 0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 4fr 1fr;
    padding: 3rem 0;
  }

  > div {
    &:first-child {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem 0;
    }

    &:nth-child(2) {
      display: flex;
      gap: 20px;
      flex-direction: column;
      margin: 0 auto;
      @media (min-width: 768px) {
        flex-direction: row;
        gap: 60px;
      }
    }
  }
`;

export const FooterWrapper = styled.footer`
  text-align: center;
  width: 100%;
  background: var(--primary);
  color: white;
`;
