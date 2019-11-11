import { FC } from "react";
export interface Props {
    total: number;
    currentPage: number;
    resultsPerPage: number;
    handlePaginationChange: (page: number) => void;
    handleResultsPerPageChange: (page: number, size: number) => void;
}
export declare const TableFooterPagination: FC<Props>;
/** @component */
export default TableFooterPagination;
