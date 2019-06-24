import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import Popup from 'reactjs-popup';

import spreadIcon from '@/assets/icons/spread.svg';
import WidgetByType from '@/components/blocks/WidgetByType';

import {
  WidgetBlock,
  WidgetWrapper,
  WidgetBlockHeader,
  WidgetBlockActions,
  WidgetActionsContainer,
  WidgetAction,
  WidgetDeleteModal,
  WidgetDeleteControls,
  Title,
} from './styledComponents';

class DragableWidgetBlock extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpenPopup: false,
    };
  }

  openDeletePopup = () => {
    this.setState({
      isOpenPopup: true,
    });
  }

  closeDeletePopup = () => {
    this.setState({
      isOpenPopup: false,
    });
  }

  render() {
    const {
      type,
      title,
      removeWidget,
    } = this.props;
    const { isOpenPopup } = this.state;

    return (
      <WidgetBlock>
        <WidgetBlockHeader>
          <Title>{title}</Title>
          <WidgetBlockActions>
            <img alt="Actions" src={spreadIcon} />
            <WidgetActionsContainer>
              {removeWidget && (
                <WidgetAction onClick={this.openDeletePopup}>
                  Delete
                </WidgetAction>
              )}
            </WidgetActionsContainer>
          </WidgetBlockActions>
        </WidgetBlockHeader>
        <WidgetWrapper>
          <WidgetByType type={type} />
        </WidgetWrapper>
        {removeWidget && (
          <Popup
            open={isOpenPopup}
            closeOnDocumentClick
            onClose={this.closeDeletePopup}
          >
            <WidgetDeleteModal>
              Delete this widget?
            </WidgetDeleteModal>

            <WidgetDeleteControls>
              <button type="button" onClick={removeWidget}>Yes</button>
              <button type="button" onClick={this.closeDeletePopup}>No</button>
            </WidgetDeleteControls>
          </Popup>
        )}
      </WidgetBlock>
    );
  }
}

DragableWidgetBlock.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  removeWidget: PropTypes.func,
};

DragableWidgetBlock.defaultProps = {
  type: '',
  title: '',
  removeWidget: noop,
};

export default DragableWidgetBlock;
