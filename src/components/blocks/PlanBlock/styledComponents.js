import styled from 'styled-components';

export const PlanBlockStyled = styled.div`
  display: flex;
`;

export const Icon = styled.img`
  margin-right: 10px;
`;

export const PlanDescription = styled.div`
  font-family: ${props => props.theme.fonts.secondary};
  font-style: normal;
  font-weight: normal;
  color: ${props => props.theme.colors.white};
  margin: 12px 0;
`;

export const Title = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.theme.colors.white};
`;

export const Description = styled.div`
  font-size: 14px;
  line-height: 17px;
  opacity: 0.5;
`;
