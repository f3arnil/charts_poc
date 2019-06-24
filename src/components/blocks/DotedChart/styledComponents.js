import styled from 'styled-components';

export const DotedChartStyled = styled.div`
  width: 100%;

  ${props => props.titled && `
    display: flex;
    flex-direction: column;

    &:first-child {
      margin-bottom: 20px;
    }
  `}
`;

export const Dots = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Dot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.theme.fonts.secondary};
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 13px;
  color: ${props => props.theme.colors.white};
  margin-top: 2px;

  ${props => props.titled && `
    line-height: 16px;
  `}
`;

export const CircleWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.div`
  display: block;
  background: ${props => props.theme.colors.aquamarineBlue};
  border-radius: 50%;
  width: ${props => props.sizes.width};
  height: ${props => props.sizes.height};

  ${props => props.dark && `
    background: 
      linear-gradient(180deg, ${props.theme.colors.eden} 0%, ${props.theme.colors.elm} 100%);
  `}
`;

export const Value = styled.span`
  opacity: 0.8;
`;

export const Title = styled.h3`
  font-family: ${props => props.theme.fonts.primary};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.extraLight};
  font-size: 14px;
  line-height: 14px;
  color: ${props => props.theme.colors.white};
  opacity: 0.8;
  margin: 0 0 8px 0;
`;

export const NamesRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-top: 1px solid rgba(99, 102, 107, 0.5);
  margin-top: 1px;
`;

export const Name = styled.span`
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.theme.fonts.secondary};
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: ${props => props.theme.colors.white};
  opacity: 0.5;
`;
