import React, {FC} from "react";
import {TableFooterStyles} from "./tableFooterPagination.styles";
import {Pagination} from "antd";

export interface Props {
  total: number;
  currentPage: number;
  resultsPerPage: number;
  handlePaginationChange: (page: number) => void;
  handleResultsPerPageChange: (page: number, size: number) => void;
}

export const TableFooterPagination: FC<Props> = ({
  total,
  currentPage,
  resultsPerPage,
  handlePaginationChange,
  handleResultsPerPageChange,
}) => {
  const showTotal = (totalCount: number, range: [number, number]) =>
    `${range[0]}-${range[1]} of ${totalCount} items`;

  return (
    <TableFooterStyles>
      <tr>
        <th colSpan={25}>
          <Pagination
            size="small"
            hideOnSinglePage={false}
            total={total}
            current={currentPage}
            showSizeChanger={true}
            pageSize={resultsPerPage}
            showQuickJumper={true}
            showTotal={showTotal}
            onChange={handlePaginationChange}
            onShowSizeChange={handleResultsPerPageChange}
          />
        </th>
      </tr>
    </TableFooterStyles>
  );
};

/** @component */
export default TableFooterPagination;
