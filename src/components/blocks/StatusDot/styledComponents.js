import styled from 'styled-components';

const StatusDotStyled = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${props => props.theme.colors[props.color]};
`;

export default StatusDotStyled;
