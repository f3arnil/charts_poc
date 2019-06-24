import styled from 'styled-components';

export const ChartsTitleStyled = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors[props.color]};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.theme.colors[props.color]};

  img {
    width: 20px;
    height: 20px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export const TitleText = styled.h4`
  font-size: 40px;
  font-weight: ${props => props.theme.fontWeights.thin};
  margin: 0;
  margin-left: 10px;
`;

export const Charts = styled.div`
  display: flex;
  align-items: center;
`;

export const Chart = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: ${props => props.theme.colors[props.color]};

  div {
    height: 30px;
    width: 30px;
  }
`;

export const Label = styled.span`
  font-family: ${props => props.theme.fonts.secondary};
  margin-left: 5px;
`;
