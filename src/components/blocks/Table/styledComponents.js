import styled from 'styled-components';

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeaderTr = styled.tr`
  border-bottom: 1px solid ${props => props.theme.colors.grey};
`;

export const TableHeaderTh = styled.th`
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: ${props => props.theme.fontWeights.extraLight};
  font-size: 14px;
  line-height: 17px;
  color: ${props => props.theme.colors.white};
  text-align: left;
  padding-bottom: 20px;

  ${props => props.light && `
    opacity: 0.5;
  `}

  ${props => props.rightText && `
    text-align: right;
    padding-right: 10px;
  `}
`;

export const TableBodyTr = styled.tr`
  font-family: ${props => props.theme.fonts.secondary};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.extraLight};
  font-size: 15px;
  line-height: 30px;
  color: ${props => props.theme.colors.white};
  max-height: 45px;
  padding-top: 5px;
  border-bottom: 1px solid ${props => props.theme.colors.lightWhite};

  &:first-child {
    padding-top: 10px;
  }
  
  &:last-child {
    border-bottom: none;
  }

  ${props => props.smallText && `
    font-size: 11px;
  `}
`;

export const TableBodyTd = styled.td`
  padding-left: 10px;

  ${props => props.rightText && `
    text-align: right;
  `}
`;
