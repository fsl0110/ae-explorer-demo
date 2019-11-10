import React, {FC, useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {DetailsTable} from "rui.component-lib";
import {AppState, Data, Sort} from "../../types";
import {Filter} from "rui.component-lib/lib/types";
import {
  setFilters,
  setSort,
  setPage,
  setResultsPerPage,
} from "../../store/actions/detailsTable/detailsTable.actions";

export interface Props {
  detailsData: Data[];
}

export const DetailsTableConnection: FC<Props> = ({detailsData}) => {
  const [data, setData] = useState(detailsData);
  const dispatch = useDispatch();
  const columns = useSelector((state: AppState) => state.present.detailsTable.columnsConfig);
  const sort = useSelector((state: AppState) => state.present.detailsTable.sort);
  const filters = useSelector((state: AppState) => state.present.detailsTable.filters);
  const page = useSelector((state: AppState) => state.present.detailsTable.page);
  const resultsPerPage = useSelector(
    (state: AppState) => state.present.detailsTable.resultsPerPage,
  );

  const unselectedColumns = useSelector(
    (state: AppState) => state.present.detailsTable.unselectedColumns,
  );
  const reorderedColumns = useSelector(
    (state: AppState) => state.present.detailsTable.reorderedColumns,
  );

  useEffect(() => {
    setData(detailsData);
  }, [detailsData, reorderedColumns, unselectedColumns]);

  const getFilters = (payload: Filter[]) => {
    dispatch(setFilters(payload));
  };

  const getSort = (payload: Sort[]) => {
    dispatch(setSort(payload));
  };

  const getPage = (payload: number) => {
    dispatch(setPage(payload));
  };

  const getResultsPerPage = (payload: number) => {
    dispatch(setResultsPerPage(payload));
  };

  return (
    <DetailsTable
      data={data}
      columns={columns}
      striped={true}
      pagination={true}
      filterButtons={true}
      sortButtons={true}
      sort={sort}
      filters={filters}
      page={page}
      resultsPerPage={resultsPerPage}
      getFilters={getFilters}
      getSort={getSort}
      getPage={getPage}
      getResultsPerPage={getResultsPerPage}
    />
  );
};
