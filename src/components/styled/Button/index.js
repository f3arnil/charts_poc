import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  margin: 0 10px;
  background: none;
  border: 2px solid ${props => props.theme.colors.athensGrey};
  border-radius: 30px;
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${props => props.theme.colors.white};
  padding: 10px 10px;
  cursor: pointer;

  ${props => props.primary && `
    background: ${props.theme.colors.aquamarineBlue};
    border-color: ${props.theme.colors.aquamarineBlue};
  `}
`;

export default Button;
