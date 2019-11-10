import {useMemo} from "react";
import {Data} from "../../types";

export const reorderColumns = (reorderedColumns: string[], data: Data[]) => {
  if (!reorderedColumns.length) {
    return data;
  }

  let newData: Data[] = [];
  data.forEach((obj: Data) => {
    let newObj = {};
    reorderedColumns.forEach((attribute: string) => {
      newObj = {
        ...newObj,
        [attribute]: obj[attribute],
      };
    });

    newData = [...newData, newObj];
  });
  return newData;
};

export const useColumnReorder = (reorderedColumns: string[], data: Data[]) =>
  useMemo(() => reorderColumns(reorderedColumns, data), [reorderedColumns, data]);
