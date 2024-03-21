import reactSelect from 'react-select';
import styled from 'styled-components';

export const StyledLabelEl = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: auto;
  color: rgb(138, 138, 137);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0%;
  text-align: left;
`;

export const StyledFormEl = styled.form`
  display: flex;
  gap: 18px;
  margin-bottom: 50px;
`;

export const StyledSelectEl = styled(reactSelect)`
  &.brand {
    width: 224px;
  }
  &.price {
    width: 127px;
  }
`;

export const StyledFromInput = styled.input`
  padding: 14px 0;
  padding-left: 24px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  background: rgb(247, 247, 251);
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  color: rgb(18, 20, 23);
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;

  &::placeholder {
    color: rgb(18, 20, 23);
  }

  &:focus,
  :hover {
    border-color: #3470ff;
  }
`;
export const StyledToInput = styled.input`
  padding: 14px 0;
  padding-left: 24px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  background: rgb(247, 247, 251);
  border: none;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;

  &::placeholder {
    color: rgb(18, 20, 23);
  }

  &:focus,
  :hover {
    border-color: #3470ff;
  }
`;

export const StyledFormBtn = styled.button`
  height: 48px;
  margin-top: auto;
  padding: 14px 44px;
  border-radius: 12px;
  background: rgb(52, 112, 255);
  color: rgb(255, 255, 255);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0%;
  text-align: left;
  border: none;
`;
