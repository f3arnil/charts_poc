import React from 'react';
import PropTypes from 'prop-types';

import {
  TableStyled,
  TableHeaderTr,
  TableHeaderTh,
  TableBodyTr,
  TableBodyTd,
} from './styledComponents';

const TableBody = ({ data, header }) => (
  <tbody>
    {data.map((row, indexRow) => {
      const headerFields = header.map(cell => cell.field);
      const rowKey = `table-row--${indexRow}--${headerFields.join('-')}`;
      return (
        <TableBodyTr key={rowKey} smallText={row.smallText}>
          {headerFields.map((field, indexCell) => {
            const headerCell = header.find(cell => cell.field === field);
            const cellKey = `table-cell--${indexCell}--${field}`;
            let value = row[field];

            if (value && value.component) {
              const { component: Component } = value;
              value = <Component {...value.props} />;
            }

            return (
              <TableBodyTd
                key={cellKey}
                className={field}
                rightText={headerCell.text === 'right'}
              >
                {value}
              </TableBodyTd>
            );
          })}
        </TableBodyTr>
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
    <TableHeaderTr>
      {header.map(cell => (
        <TableHeaderTh
          key={cell.field}
          light={light}
          rightText={cell.text === 'right'}
          className={cell.field}
          width={cell.width}
        >
          {cell.title}
        </TableHeaderTh>
      ))}
    </TableHeaderTr>
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
    <TableStyled>
      {children}
    </TableStyled>
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
