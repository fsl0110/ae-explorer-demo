import {useMemo} from "react";
import produce from "immer";
import {Data} from "../../types";

export const addOrRemoveDataAttrs = (unselectedColumns: string[], data: Data[]) => {
  if (!unselectedColumns.length) {
    return data;
  }

  return produce(data, (draft: Data[]) => {
    draft.forEach((props: Data) => {
      unselectedColumns.forEach((attribute: string) => {
        // tslint:disable-next-line: no-dynamic-delete
        delete props[attribute];
      });
    });
    return draft;
  });
};

export const useColumnSelection = (unselectedColumns: string[], data: Data[]) =>
  useMemo(() => addOrRemoveDataAttrs(unselectedColumns, data), [unselectedColumns, data]);
