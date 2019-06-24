import styled from 'styled-components';

export const Tree = styled.div`
  zoom: 75%;
  transform: perspective(200px) rotate3d(45, 0, 0, 20deg);
  width: 75%;
  margin: auto;
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
  text-align: center;
  min-height: 40px;
  font-size: 8px;
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: ${props => props.theme.fontWeights.bold};

  ${props => !props.first && `
    &::before {
      content: '';
      position: absolute;
      height: 10px;
      width: 2px;
      top: 0;
      background: white;
    }
  `}
  ${props => props.parently && `
    &::after {
      content: '';
      position: absolute;
      height: 10px;
      width: 2px;
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
    height: 2px;
    width: 67%;
    background: white;
    z-index: 1;
    top: 0;
  }
`;
