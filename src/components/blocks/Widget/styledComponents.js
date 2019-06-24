import styled, { keyframes } from 'styled-components';

export const WidgetBlock = styled.div`
  background: ${props => props.theme.colors.bunker};
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.grey};
  margin-right: 25px;
  margin-top: 20px;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`;

export const WidgetDeleteModal = styled.div`
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.bunker};
  border: none;
  margin-bottom: 5px;
`;

export const WidgetDeleteControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const WidgetWrapper = styled.div`
  padding: 5px;
`;

export const WidgetBlockHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0 24px;
`;

export const WidgetBlockActions = styled.span`
  position: relative;
  cursor: pointer;
  padding: 0 10px;
  outline: none;
`;

const bar = keyframes`
  from {
    top: 0%;
  }

  to {
    top: 100%;
  }
`;

export const WidgetActionsContainer = styled.div`
  display: none;
  background: ${props => props.theme.colors.white};
  position: absolute;
  right: 10px;
  color: ${props => props.theme.colors.bunker};
  animation: ${bar} 0.1s ease;

  ${WidgetBlockActions}:hover & {
    display: block;
  }
`;
export const WidgetAction = styled.div`
  padding: 5px 10px;
`;

export const Title = styled.h4`
  margin: 0;
`;
