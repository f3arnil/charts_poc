import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import spreadIcon from '@/assets/icons/spread.svg';
import WidgetByType from '@/components/blocks/WidgetByType';
import Button from '@/components/styled/Button';

import {
  WidgetBlock,
  WidgetWrapper,
  WidgetBlockHeader,
  WidgetBlockActions,
  WidgetActionsContainer,
  WidgetAction,
  WidgetDeleteModal,
  WidgetDeleteModalContent,
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
          <WidgetDeleteModal
            open={isOpenPopup}
            closeOnDocumentClick
            onClose={this.closeDeletePopup}
          >
            <WidgetDeleteModalContent>
              <p>Delete this widget?</p>

              <WidgetDeleteControls>
                <Button
                  type="button"
                  onClick={removeWidget}
                >
                  Yes
                </Button>
                <Button
                  primary
                  type="button"
                  onClick={this.closeDeletePopup}
                >
                  No
                </Button>
              </WidgetDeleteControls>
            </WidgetDeleteModalContent>
          </WidgetDeleteModal>
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
