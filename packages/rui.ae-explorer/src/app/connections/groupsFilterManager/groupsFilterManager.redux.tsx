import React, {FC} from "react";
import {useSelector, useDispatch} from "react-redux";
import {FilterManager} from "@dedrr/rui.component-lib";
import {AppState} from "../../store";
import {setSelectedFilters, setAvailableFilters} from "../../store/actions/filters/filters.actions";
import {AvailableFilter} from "../../types";

export const GroupsFilterManagerConnection: FC = () => {
  const dispatch = useDispatch();
  const availableFilters = useSelector((state: AppState) => state.present.filters.availableFilters);
  const selectedFilters = useSelector((state: AppState) => state.present.filters.selectedFilters);

  const handleGetCheckedValues = (payload: string[]) => {
    dispatch(setSelectedFilters(payload));
  };

  const handleReorderedValues = (payload: string[]) => {
    const reorderedFilters: string[] = [];
    const unselectedFilters: string[] = [];
    payload.forEach((item: string) => {
      if (selectedFilters.includes(item)) {
        reorderedFilters.push(item);
      } else {
        unselectedFilters.push(item);
      }
    });

    const orderedAvailableFilters = reorderedFilters.concat(unselectedFilters);
    const nextAvailableFilters: AvailableFilter[] = [];

    orderedAvailableFilters.forEach((attribute: string) => {
      const index = availableFilters.findIndex(
        (d: {attribute: string}) => d.attribute === attribute,
      );
      nextAvailableFilters.push({
        attribute,
        type: availableFilters[index].type,
      });
    });

    dispatch(setSelectedFilters(reorderedFilters));
    dispatch(setAvailableFilters(nextAvailableFilters));
  };

  return (
    <FilterManager
      availableFilters={availableFilters}
      selectedFilters={selectedFilters}
      getSelectedFilters={handleGetCheckedValues}
      getReorderedFilters={handleReorderedValues}
    />
  );
};
