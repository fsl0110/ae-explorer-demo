import {useMemo} from "react";
import {filterData} from "./filterData";
import _ from "lodash";
import {Filter} from "@dedrr/rui.component-lib/lib/types";
import {Data} from "../../types";

export const computeData = (
  data: Data[],
  filters: Filter[],
  category: string,
): [Data[], number] => {
  if (!data.length) {
    return [[], 0];
  }
  // TODO: replace this with crossfilter
  const categoryDatas = _.filter(data, (d) => d.AEBODSYS === category || d.AEDECOD === category);

  const filteredData = filterData(categoryDatas, filters);
  const count = _.size(filteredData);

  return [filteredData, count];
};

export const useDetailsData = (data: Data[], filters: Filter[], category: string) =>
  useMemo(() => computeData(data, filters, category), [data, filters, category]);
