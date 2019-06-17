import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.PureComponent {
  constructor(props) {
    super(props);

    this.renderTableHeader = this.renderTableHeader.bind(this);
    this.renderTableBody = this.renderTableBody.bind(this);
  }

  renderTableHeader() {
    const { header } = this.props;

    return (
      <thead>
        <tr>
          {header.map((cell) => {
            return (
              <th key={cell.field}>{cell.title}</th>
            );
          })}
        </tr>
      </thead>
    );
  }

  renderTableBody() {
    const { data, header } = this.props;

    return (
      <tbody>
        {data.map((row, indexRow) => {
          const headerFields = header.map(cell => cell.field);
          const rowKey = `table-row--${indexRow}--${headerFields.join('-')}`;
          return (
            <tr key={rowKey}>
              {headerFields.map((field, indexCell) => {
                const cellKey = `table-cell--${indexCell}--${field}`;
                const value = row[field];

                return (
                  <td key={cellKey}>
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
};

Table.defaultProps = {
  showHeader: true,
};

export default Table;
