import React, {FC, useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {FilterButtons, isFilterActive} from "rui.component-lib";
import {AppState} from "../../types";
import {Filter} from "rui.component-lib/lib/types";
import {setDataFilters} from "../../store/actions";

export const GroupsFilterButtonsConnection: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const dispatch = useDispatch();
  const filters = useSelector((state: AppState) => state.present.filters.filters);

  const handleChange = (payload: Filter[]) => {
    dispatch(setDataFilters(payload));
  };

  useEffect(() => {
    let visible = false;
    filters.forEach((filter: Filter) => {
      if (isFilterActive(filter.selectedValues, filter.filterValues, filter.type)) {
        visible = true;
      }
    });
    setShow(visible);
  }, [filters]);

  return show ? (
    <FilterButtons label="Data Filters:" filters={filters} handleChange={handleChange} />
  ) : null;
};
