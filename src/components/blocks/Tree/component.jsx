import React from 'react';
import PropTypes from 'prop-types';

import {
  Tree,
  TreeNode,
  TreeNodeTitle,
  TreeNodeChilderen,
} from './styledComponents';

class TreeComponent extends React.PureComponent {
  renderNodeWithChilds = (node, isFirst = false) => {
    return (
      <TreeNode>
        <TreeNodeTitle first={isFirst} parently={node.childeren}>
          {node.title}
        </TreeNodeTitle>
        {node.childeren && (
          <TreeNodeChilderen>
            {node.childeren.map(child => this.renderNodeWithChilds(child))}
          </TreeNodeChilderen>
        )}
      </TreeNode>
    );
  }

  render() {
    const { data } = this.props;
    return (
      <Tree>
        {data.map((node, index) => this.renderNodeWithChilds(node, index === 0))}
      </Tree>
    );
  }
}

TreeComponent.defaultProps = {
  data: [{
    title: 'Parent',
    childeren: [
      {
        title: '1',
        childeren: [
          {
            title: '1',
          },
          {
            title: '2',
          },
          {
            title: '3',
          },
        ],
      },
      {
        title: '2',
        childeren: [
          {
            title: '1',
          },
          {
            title: '2',
          },
          {
            title: '3',
          },
        ],
      },
      {
        title: '3',
        childeren: [
          {
            title: '1',
          },
          {
            title: '2',
          },
          {
            title: '3',
          },
        ],
      },
    ],
  }],
};

TreeComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default TreeComponent;
