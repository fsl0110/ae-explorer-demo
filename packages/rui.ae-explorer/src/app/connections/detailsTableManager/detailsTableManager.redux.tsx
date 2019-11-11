import React, {FC} from "react";
import {useSelector, useDispatch} from "react-redux";
import {TableManager} from "@dedrr/rui.component-lib";
import {AppState} from "../../types";
import {
  setUnselectedColumns,
  setSelectedColumns,
  setReorderedColumns,
} from "../../store/actions/detailsTable/detailsTable.actions";

export const DetailsTableManagerConnection: FC = () => {
  const dispatch = useDispatch();
  const allColumns = useSelector((state: AppState) => state.present.detailsTable.allColumns);
  const unselectedColumns = useSelector(
    (state: AppState) => state.present.detailsTable.unselectedColumns,
  );
  const selectedColumns = useSelector(
    (state: AppState) => state.present.detailsTable.selectedColumns,
  );

  const handleUncheckedColumns = (payload: string[]) => {
    dispatch(setUnselectedColumns(payload));
  };

  const handleCheckedColumns = (payload: string[]) => {
    dispatch(setSelectedColumns(payload));
  };

  const handleOrderedColumns = (payload: string[]) => {
    const newItems = payload.filter((item: string) => !unselectedColumns.includes(item));
    dispatch(setReorderedColumns(newItems));
  };

  return (
    <TableManager
      allColumns={allColumns}
      selectedColumns={selectedColumns}
      getUncheckedColumns={handleUncheckedColumns}
      getCheckedColumns={handleCheckedColumns}
      getAllColumnsReordered={handleOrderedColumns}
    />
  );
};
