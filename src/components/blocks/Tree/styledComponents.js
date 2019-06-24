import styled from 'styled-components';

export const Tree = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TreeNodeTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40px;

  ${props => !props.first && `
    &::before {
      content: '';
      position: absolute;
      height: 10px;
      width: 1px;
      top: 0;
      background: white;
    }
  `}
  ${props => props.parently && `
    &::after {
      content: '';
      position: absolute;
      height: 10px;
      width: 1px;
      bottom: 0;
      background: white;
    }
  `}
`;

export const TreeNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TreeNodeChilderen = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    height: 1px;
    width: 67%;
    background: white;
    z-index: 1;
    top: 0;
  }
`;
