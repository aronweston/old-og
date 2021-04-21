import styled, { css } from 'styled-components';

export const QuantityWrapper = styled.div`
  margin-top: 20px;
  > strong {
    display: block;
    margin-bottom: 10px;
  }

  > form {
    display: flex;
  }
`;

const fullWidthStyles = ({ fullWidth }) => {
  if (fullWidth) {
    return css`
      display: block;
      width: 100%;
    `;
  }
};

export const Button = styled.button`
  outline: none;
  padding: 0 10px;
  height: 44px;
  line-height: 44px;
  box-shadow: 16px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  background: white;
  color: black;
  border: 1px solid black;
  white-space: nowrap;

  &:disabled {
    border-color: #999;
    cursor: not-allowed;
    color: #999;
  }

  &:hover:not(disabled) {
    color: white;
    background: black;
    border: 1px solid rgba(0, 0, 0, 0);
  }

  ${fullWidthStyles}
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  display: block;
  font-size: 16px;
  border-radius: 0;
  padding: 5px 10px;
  height: 44px;
  box-sizing: border-box;
  min-width: 0;
  &:focus {
    border-color: black;
  }
`;

export const Message = styled.div`
  width: 100%;
  display: none;
  padding: 1rem;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  color: white;

  ${props =>
    props.styleState === 'success'
      ? success
      : props.styleState === 'fail'
      ? fail
      : ''}
`;

const success = `
background-color: rgba(110, 231, 183, 1);
display: block;
`;

const fail = `
background-color: rgba(248, 113, 113, 1);
display: block;
`;
