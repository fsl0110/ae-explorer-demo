import React, {FC} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Filters} from "../../components";
import {Filter, AppState, Data} from "../../types";
import {useCreateFilterValues} from "../../hooks/useCreateFilterValues/useCreateFilterValues";
import {setDataFilters} from "../../store/actions";

export interface Props {
  data: Data[];
}

export const FilterConnection: FC<Props> = ({data}) => {
  const dispatch = useDispatch();
  const availableFilters = useSelector((state: AppState) => state.present.filters.availableFilters);
  const selectedFilters = useSelector((state: AppState) => state.present.filters.selectedFilters);
  const filters = useSelector((state: AppState) => state.present.filters.filters);
  const filterValues = useCreateFilterValues(data, availableFilters, selectedFilters);

  const newFilters: Filter[] = [];

  selectedFilters.forEach((attribute: string) => {
    const valuesIndex = filterValues.findIndex(
      (d: {attribute: string}) => d.attribute === attribute,
    );
    const filtersIndex = filters.findIndex((d: {attribute: string}) => d.attribute === attribute);

    newFilters.push({
      attribute,
      type: filterValues[valuesIndex].type,
      filterValues: filterValues[valuesIndex].filterValues,
      selectedValues:
        filtersIndex !== -1
          ? filters[filtersIndex].selectedValues
          : filterValues[valuesIndex].filterValues,
    });
  });

  const handleFilter = (payload: Filter[]) => {
    dispatch(setDataFilters(payload));
  };

  return <Filters filters={newFilters} handleFilter={handleFilter} />;
};
