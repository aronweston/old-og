import React from 'react';
import styled from 'styled-components';
import { Button, ExLink } from '../components/Global';
import { SEO } from 'components';
import MapBkg from '../images/mapbkg.jpg';

const styles = `
  border-radius: 3px 3px 3px 3px;
  overflow: hidden;
  width: 100%;
  padding: 10px;
  border-width: 2px;
  border-color: #203631;
  font-weight: 700;
  font-style: italic;
  font-size: 14px;
  text-align: left;
  color: var(--primary);
  font-family: 'Abril Display';
  &:focus {
    outline: var(--secondary);
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  gap: 20px;
  padding: 2rem;

  > h1 {
    margin: 0;
  }

  > div {
    display: inline-flex;
    width: 100%;
    gap: 20px;
    justify-content: space-between;
    > label {
      width: 100%;
    }
    > label > input {
      ${styles}
    }
  }

  > button {
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  > div:last-child {
    padding: 0;
  }

  > label > input,
  textarea {
    ${styles}
  }
`;

export const MapGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1400px) {
    grid-template-columns: 1fr 3fr;
  }

  @media (min-width: 2500px) {
    grid-template-columns: 1fr 4fr;
  }
`;

export const Info = styled.div`
  background-color: var(--primary);
  padding: 2rem;
  color: white;

  > div {
    margin: 20px 0px;
    > p {
      line-height: 25px;
      &:first-child {
        margin-top: 5px;
      }
    }
    > strong:first-child {
      font-size: 20px;
      text-decoration: 3px underline var(--secondary);
    }
  }
`;

export const Map = styled.div`
  display: flex;
  width: 100%;
  background: url(${MapBkg});

  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    height: 350px;
    width: 100vw;
  }
  @media (max-width: 425px) {
    justify-content: left;
  }

  padding: 2rem;
  justify-content: center;
  > div {
    display: inline-flex;
    justify-content: center;
    align-items: baseline;
    gap: 10px;
    align-self: flex-end;
    @media (max-width: 425px) {
      flex-direction: column;
    }
  }
  > ${ExLink} {
    margin: 10px;
  }
`;

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact us"
        keywords={['deli', 'food']}
      />

      <ContactForm
        method="POST"
        data-netlify="true"
        name="contactForm"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contactForm" />
        <h1>Contact Us</h1>
        <label htmlFor="name">
          <input type="text" name="name" placeholder="Name" />
        </label>
        <div>
          <label htmlFor="phone">
            <input type="number" name="phone" placeholder="Phone " />
          </label>
          <label htmlFor="email">
            <input type="email" name="email" placeholder="Email" />
          </label>
        </div>
        <label htmlFor="message">
          <textarea
            name="message"
            placeholder="How can we help?"
            rows="10"
          ></textarea>
        </label>
        <Button secondary>Send</Button>
        <div data-netlify-recaptcha="true"></div>
      </ContactForm>

      <MapGrid>
        <Info>
          <h2> Don't be shy, come and visit the deli!</h2>
          <div>
            <strong>Contact Us</strong>
            <p>
              <strong>Address: </strong>Shop 3/832 Anzac Parade,
              <br />
              Maroubra, Sydney, NSW.
            </p>
            <p>
              <strong>Email: </strong>contact@oliveandgrain.com.au
            </p>
            <p>
              <strong>Phone: </strong>0400 000 000
            </p>
          </div>
          <div>
            <strong>Opening Hours</strong>
            <p>
              Monday to Wednesday: <strong>9am - 6pm</strong>
            </p>
            <p>
              Wednesday: <strong>Closed</strong>
            </p>
            <p>
              Thursday to Sunday: <strong>9am - 6pm</strong>
            </p>
            <p>
              Sunday: <strong>9am - 5pm</strong>
            </p>
          </div>
        </Info>
        <Map>
          <div>
            <ExLink
              target="_blank"
              rel="noreferer"
              href="tel: 0404068850"
              primary
            >
              Call Us
            </ExLink>
            <ExLink
              primary
              href="mailto: contact@oliveandgrain.com.au"
              target="_blank"
              rel="noreferer"
            >
              Email Us
            </ExLink>
            <ExLink
              href="https://g.page/theoliveandgrain?share"
              secondary
              target="_blank"
              rel="noreferer"
            >
              Get Directions
            </ExLink>
          </div>
        </Map>
      </MapGrid>
    </>
  );
};

export default ContactPage;
