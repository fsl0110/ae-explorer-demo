import React, {FC, useState, useEffect} from "react";
import {TableHeaderStyles} from "./tableHeader.styles";
import {TableHeaderCell, TableRow} from "..";
import {Column, Filter, Sort} from "../../../../types";

export interface Props {
  columns: Column[];
  sort: Sort[];
  filters: Filter[];
  handleFiltersChange: (payload: Filter[]) => void;
  handleSortChange: (payload: Sort[]) => void;
}

export const TableHeader: FC<Props> = ({
  columns: columnsProp,
  sort,
  filters,
  handleFiltersChange,
  handleSortChange,
}) => {
  const [columns, setColumns] = useState<Column[]>(columnsProp);

  useEffect(() => {
    setColumns(columnsProp);
  }, [columnsProp]);

  return (
    <TableHeaderStyles>
      <TableRow>
        {columns.map((column: Column) => (
          <TableHeaderCell
            key={column.attribute}
            column={column}
            sort={sort}
            filters={filters}
            handleFiltersChange={handleFiltersChange}
            handleSortChange={handleSortChange}
          >
            {column.name || column.attribute}
          </TableHeaderCell>
        ))}
      </TableRow>
    </TableHeaderStyles>
  );
};

/** @component */
export default TableHeader;
