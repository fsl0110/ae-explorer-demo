import React, {FC, useState} from "react";
import _ from "lodash";
import {Data, Attribute} from "../../../lib/types";
import {TableManager, DetailsTable, addOrRemoveDataAttrs, reorderDataAttrs} from "../../../lib";
import data from "./data.json";

export const FranksManagedTable: FC = () => {
  const columns: string[] = _.map(data[0], (key, value) => value);
  const [selectedColumns, setSelectedColumns] = useState<string[]>(columns);
  const [unselectedColumns, setUnselectedColumns] = useState<string[]>([]);
  const [newData, setNewData] = useState<Data[]>(data);

  const handleUncheckedColumns = (payload: string[]) => {
    setUnselectedColumns(payload);
    setNewData(addOrRemoveDataAttrs(payload, data));
  };

  const handleCheckedColumns = (payload: string[]) => {
    setSelectedColumns(payload);
  };

  const handleOrderedColumns = (payload: string[]) => {
    const newItems = payload.filter((item: string) => !unselectedColumns.includes(item));
    setSelectedColumns(newItems);
    setNewData(reorderDataAttrs(newItems, newData));
  };

  return (
    <>
      <TableManager
        allColumns={columns}
        selectedColumns={selectedColumns}
        getUncheckedColumns={handleUncheckedColumns}
        getCheckedColumns={handleCheckedColumns}
        getAllColumnsReordered={handleOrderedColumns}
      />
      <div>
        <DetailsTable data={newData} />
      </div>
    </>
  );
};
