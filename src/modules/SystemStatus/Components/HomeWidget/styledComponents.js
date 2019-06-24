import styled from 'styled-components';

import Widget from '@/components/styled/Widget';

export const StyledStatusWidgetStyled = styled(Widget)`
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.thin};
`;

export const Event = styled.div`
  padding: 20px 0;
  border-top: 1px solid ${props => props.theme.colors.grey};

  &:last-child {
    padding-bottom: 11px;
  }

  ${props => props.first && `
    border: none;
    padding-top: 0;
  `}
`;

export const Text = styled.p`
  margin: 0;
`;

export const Description = styled(Text)`
  opacity: 0.8;
`;

export const Date = styled(Text)`
  ${props => props.large && `
    font-size: 48px;
  `}
`;
