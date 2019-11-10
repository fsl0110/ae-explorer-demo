import _ from "lodash";
import produce from "immer";
import {Column, Sort} from "../../../../types";

export const handleSort = (column: Column, sort: Sort[]) => {
  const index = sort.findIndex((f: Sort) => f.attribute === column.attribute);
  return produce(sort, (draft: Sort[]) => {
    if (index === -1) {
      draft.push({
        attribute: column.attribute,
        name: column.name || column.attribute,
        direction: "asc",
      });
    } else {
      if (draft[index].direction === "desc") {
        _.remove(draft, {
          attribute: column.attribute,
        });
      } else {
        draft[index].direction = "desc";
      }
    }
  });
};
