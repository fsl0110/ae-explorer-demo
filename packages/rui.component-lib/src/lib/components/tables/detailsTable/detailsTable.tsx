import React, {FC, useState, useEffect} from "react";
import v4 from "uuid/v4";
import {useScrollTop, FilterButtons} from "../../../";
import {Column, Data, Filter, Sort} from "../../../types";
import {useData, useFilters, useSort, useCheckSelectedColumns} from "../hooks";
import {getActiveSearchColumns} from "../helpers";
import {isFilterActive} from "../../..";
import {
  TableFooterPagination,
  TableCellHighlight,
  TableHeader,
  TableRow,
  TableCell,
  SortButtons,
  TableRowNoData,
} from "../components";
import {ButtonsContainerStyles, DetailsTableStyles} from "./detailsTable.styles";

interface Props {
  /**
   * The table data to display.
   */
  data: Data[];
  /**
   * Config to enable filter and sort for certain columns and to define readable names for columns
   */
  columns?: Column[];
  /**
   * Wether to display striped rows.
   */
  striped?: boolean;
  /**
   * Wether to show sort buttons above the table when sorts are active.
   */
  sortButtons?: boolean;
  /**
   * Wether to show filter buttons above the table when filters are active.
   */
  filterButtons?: boolean;
  /**
   * Wether to show the pagination.
   */
  pagination?: boolean;
  /**
   * Wether to set default sorting from outside, e.g. from redux store.
   */
  sort?: Sort[];
  /**
   * Wether to set default filters from outside, e.g. from redux store.
   */
  filters?: Filter[];
  /**
   * Wether to set default page from outside, e.g. from redux store.
   */
  page?: number;
  /**
   * Wether to set default resultsPerPage from outside, e.g. from redux store.
   */
  resultsPerPage?: number;
  /**
   * Wether to compute filter, sort and pagination external.
   */
  external?: boolean;

  /**
   * Receive filter, sort, and pagination settings from outside for handling fetches or storing in redux.
   */
  handleExternal?: (payload: {
    currentPage: number;
    resultsPerPage: number;
    filters: Filter[];
    sort: Sort[];
  }) => void;

  getSort?: (payload: Sort[]) => void;
  getFilters?: (payload: Filter[]) => void;
  getResultsPerPage?: (payload: number) => void;
  getPage?: (payload: number) => void;
}

export const DetailsTable: FC<Props> = ({
  data,
  columns: columnsProp,
  striped,
  pagination,
  filterButtons,
  sortButtons,
  sort: sortProp,
  page: pageProp,
  resultsPerPage: resultsPerPageProp,
  filters: filtersProp,
  external,
  handleExternal,
  getSort,
  getFilters,
  getResultsPerPage,
  getPage,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(pageProp || 1);
  const [resultsPerPage, setResultsPerPage] = useState<number>(resultsPerPageProp || 10);
  const [filters, setFilters] = useState<Filter[]>(filtersProp || []);
  const [sort, setSort] = useState<Sort[]>(sortProp || []);
  const columns: Column[] = useData(data, columnsProp);
  const [nextFilters, nextSort] = useCheckSelectedColumns(data, filters, sort);
  const filteredData: Data[] = useFilters(data, nextFilters, external);
  const sortedData: Data[] = useSort(filteredData, nextSort, external);
  const [currentData, setCurrentData] = useState<Data[]>(
    external ? data : sortedData.slice(0, resultsPerPage),
  );

  useScrollTop(currentPage);

  // only for highlighting
  const activeSortColumns: {[key: string]: string} =
    nextFilters.length > 0 ? getActiveSearchColumns(nextFilters) : {};

  // only for external
  useEffect(() => {
    const settings = {
      currentPage,
      resultsPerPage,
      filters,
      sort,
    };
    handleExternal && handleExternal(settings);
  }, [currentPage, resultsPerPage, filters, sort, handleExternal]);

  useEffect(() => {
    setCurrentPage(1);
    setCurrentData(sortedData.slice(0, resultsPerPage));
  }, [filteredData, sortedData, resultsPerPage]);

  useEffect(() => {
    setSort(sortProp || []);
  }, [sortProp]);

  useEffect(() => {
    setFilters(filtersProp || []);
  }, [filtersProp]);

  useEffect(() => {
    pageProp && setCurrentPage(pageProp);
  }, [pageProp]);

  useEffect(() => {
    resultsPerPageProp && setResultsPerPage(resultsPerPageProp);
  }, [resultsPerPageProp]);

  const handleFiltersChange = (payload: Filter[]) => {
    setFilters(payload);
    getFilters && getFilters(payload);
  };

  const handleSortChange = (payload: Sort[]) => {
    setSort(payload);
    getSort && getSort(payload);
  };

  const handleResultsPerPageChange = (page: number, size: number) => {
    setResultsPerPage(size);
    getResultsPerPage && getResultsPerPage(size);
    if (!external) {
      setCurrentPage(page);
      setCurrentData(sortedData.slice((page - 1) * resultsPerPage).slice(0, size));
    }
  };

  const handlePaginationChange = (page: number) => {
    setCurrentPage(page);
    getPage && getPage(page);
    if (!external) {
      setCurrentData(sortedData.slice((page - 1) * resultsPerPage).slice(0, resultsPerPage));
    }
  };

  let filterActive = false;

  nextFilters.forEach((filter: Filter) => {
    if (!filterActive) {
      filterActive = isFilterActive(filter.selectedValues, filter.filterValues, filter.type);
    }
  });

  return (
    <DetailsTableStyles>
      {(nextSort.length || filterActive) && (
        <ButtonsContainerStyles>
          {filterButtons && (
            <FilterButtons
              label="Table Filters:"
              filters={nextFilters}
              handleChange={handleFiltersChange}
            />
          )}
          {sortButtons && nextSort.length > 0 && (
            <SortButtons label="Table Sort:" sort={nextSort} handleChange={handleSortChange} />
          )}
        </ButtonsContainerStyles>
      )}
      <table>
        <TableHeader
          columns={columns}
          sort={sort}
          filters={nextFilters}
          handleFiltersChange={handleFiltersChange}
          handleSortChange={handleSortChange}
        />
        <tbody>
          {currentData.length ? (
            currentData.map((row: Data) => (
              <TableRow key={v4()} striped={striped}>
                {Object.entries(row).map((item) =>
                  Object.entries(activeSortColumns).length > 0 && activeSortColumns[item[0]] ? (
                    <TableCellHighlight key={v4()} searchTerm={activeSortColumns[item[0]]}>
                      {item[1] as string}
                    </TableCellHighlight>
                  ) : (
                    <TableCell key={v4()}>{item[1]}</TableCell>
                  ),
                )}
              </TableRow>
            ))
          ) : (
            <TableRowNoData />
          )}
        </tbody>
        {pagination && (
          <TableFooterPagination
            total={filteredData.length}
            currentPage={currentPage}
            resultsPerPage={resultsPerPage}
            handlePaginationChange={handlePaginationChange}
            handleResultsPerPageChange={handleResultsPerPageChange}
          />
        )}
      </table>
    </DetailsTableStyles>
  );
};
