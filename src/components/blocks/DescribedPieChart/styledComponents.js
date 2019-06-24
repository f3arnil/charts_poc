import styled from 'styled-components';

import PieChart from '@/components/blocks/PieChart';

export const DescribedPieChartStyled = styled.div`
  width: 100%;

  &:first-child {
    margin-right: 15px;
  }
`;

export const Title = styled.h2`
  font-weight: ${props => props.theme.fontWeights.thin};
  text-align: center;
  margin: 10px 0;
`;

export const PieChartStyled = styled(PieChart)`
  width: 115px;
  height: 115px;
  margin: 0 auto;
`;

export const ChartDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-family: ${props => props.theme.fonts.secondary};
  font-style: normal;
  font-size: 15px;
  line-height: 18px;
`;

export const ValueDescription = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.colors[props.color]};

  &::before {
    content: '';
    position: absolute;
    background: ${props => props.theme.colors.outerSpace};
    top: 5px;
    left: -5px;
    width: 1px;
    height: 24px;
  }
  ${props => props.first && `
    &::before {
      display: none;
    }
  `}
`;

export const Value = styled.span`
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const Name = styled.span`
  font-size: 12px;
  line-height: 14px;
`;
