import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

class Table extends React.PureComponent {
  renderTableHeader = () => {
    const { header, lightHeader } = this.props;

    return (
      <thead>
        <tr>
          {header.map((cell) => {
            const thCN = cn(cell.className, { light: lightHeader });
            return (
              <th
                key={cell.field}
                className={thCN}
                width={cell.width}
              >
                {cell.title}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }

  renderTableBody = () => {
    const { data, header } = this.props;

    return (
      <tbody>
        {data.map((row, indexRow) => {
          const headerFields = header.map(cell => cell.field);
          const rowKey = `table-row--${indexRow}--${headerFields.join('-')}`;
          return (
            <tr key={rowKey}>
              {headerFields.map((field, indexCell) => {
                const headerCell = header.find(cell => cell.field === field);
                const headerClassName = headerCell.className;
                const cellKey = `table-cell--${indexCell}--${field}`;
                const value = row[field];

                return (
                  <td key={cellKey} className={headerClassName}>
                    {value}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    );
  }

  render() {
    const { showHeader } = this.props;
    return (
      <table className="table">
        {showHeader && this.renderTableHeader()}
        {this.renderTableBody()}
      </table>
    );
  }
}

Table.propTypes = {
  header: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  showHeader: PropTypes.bool,
  lightHeader: PropTypes.bool,
};

Table.defaultProps = {
  showHeader: true,
  lightHeader: false,
};

export default Table;
