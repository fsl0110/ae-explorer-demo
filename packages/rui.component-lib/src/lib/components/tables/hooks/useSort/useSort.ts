import {useMemo} from "react";
import _ from "lodash";
import {Sort, Data, SortDirections} from "../../../../types";

const sortData = (data: Data[], sort: Sort[], external: boolean = false) => {
  let sortedData = [];
  const unsortedData = data;
  if (external) {
    return data;
  }

  if (!_.isEmpty(sort)) {
    sortedData = _.orderBy(
      unsortedData,
      _.map(sort, "attribute"),
      _.map(sort, "direction" as SortDirections),
    );
    return sortedData;
  }
  return data;
};

export const useSort = (data: Data[], sort: Sort[], external: boolean = false) =>
  useMemo(() => sortData(data, sort, external), [data, sort, external]);
