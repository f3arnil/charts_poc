import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const TableBody = ({ data, header }) => (
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

TableBody.propTypes = {
  header: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
};

TableBody.defaultProps = {
  header: [],
  data: [],
};

const TableHeader = ({ lightHeader: light, header }) => (
  <thead>
    <tr>
      {header.map((cell) => {
        const thCN = cn(cell.className, { light });
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

TableHeader.propTypes = {
  header: PropTypes.arrayOf(PropTypes.object),
  lightHeader: PropTypes.bool,
};

TableHeader.defaultProps = {
  header: [],
  lightHeader: false,
};

const Table = (props) => {
  const { children } = props;
  return (
    <table className="table">
      {children}
    </table>
  );
};

Table.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Table.defaultProps = {
  children: '',
};

Table.Header = React.memo(TableHeader);
Table.Body = React.memo(TableBody);

export default Table;
