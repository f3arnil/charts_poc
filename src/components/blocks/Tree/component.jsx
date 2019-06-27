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
        <TreeNodeTitle key={node.title} first={isFirst} parently={node.childeren}>
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
        title: 'Some words 1',
        childeren: [
          {
            title: 'Some words 11',
          },
          {
            title: 'Some words 12',
          },
          {
            title: 'Some words 13',
          },
        ],
      },
      {
        title: 'Some words 2',
        childeren: [
          {
            title: 'Some words 21',
          },
          {
            title: 'Some words 22',
          },
          {
            title: 'Some words 23',
          },
        ],
      },
      {
        title: 'Some words 3',
        childeren: [
          {
            title: 'Some words 31',
          },
          {
            title: 'Some words 32',
          },
          {
            title: 'Some words 33',
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
