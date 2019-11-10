import React, {FC, useState, useEffect} from "react";
import _ from "lodash";
import {getObjAttrsValues, CheckBlock, DateBlock, SliderBlock, SearchBlock} from "../../..";

interface FilterOption {
  attrName: string;
  name: string;
  type: "check" | "slider" | "date" | "search";
  values?: any;
}

export interface Props {
  selectedFilter: any;
  selectedValues: any;
  data: Array<{[key: string]: string | number}>;
  handleChange: (payload: any) => void;
}

export const Filter: FC<Props> = ({selectedFilter, selectedValues, data, handleChange}) => {
  const [allValues, setAllValues] = useState<FilterOption[]>();
  const [newSelectedValues, setNewSelectedValues] = useState<any>(selectedValues);

  // tslint:disable-next-line: no-any
  const handleFilterChanges = (value: any, attrName: string) => {
    const newValues = {...newSelectedValues, ...{[attrName]: value}};
    setNewSelectedValues(newValues);
    handleChange(newValues);
  };

  useEffect(() => {
    setNewSelectedValues(selectedValues);
  }, [selectedValues]);

  useEffect(() => {
    // tslint:disable-next-line: no-any
    const filterValues: any = getObjAttrsValues(data);
    const filterSelection = selectedFilter.map((filter: FilterOption) => {
      switch (filter.type) {
        case "check":
          const checkObj = _.find(filterValues, ["name", filter.attrName]);
          const checkValues = _.filter(checkObj.values, (range: string) => range !== "");
          return {...filter, ...{values: checkValues}};
        case "slider":
          const rangesObj = _.find(filterValues, ["name", filter.attrName]);
          const rangeValues = _.filter(rangesObj.values, (range: string) => range !== "");
          const rangeMin = _.min(rangeValues);
          const rangeMax = _.max(rangeValues);
          return {...filter, ...{values: [rangeMin, rangeMax]}};
        case "date":
          const datesObj = _.find(filterValues, ["name", filter.attrName]);
          const datesValues = _.filter(datesObj.values, (date: string) => date !== "");
          const dateMin = _.min(datesValues);
          const dateMax = _.max(datesValues);
          return {...filter, ...{value: [dateMin, dateMax]}};
        case "search":
          return {...filter, ...{values: []}};
        default:
          return null;
      }
    });
    setAllValues(filterSelection);
  }, [selectedFilter, data]);

  if (!allValues) {
    return null;
  }

  return (
    <div>
      {allValues.map((filter: FilterOption) => (
        <div key={filter.name}>
          {filter.type === "check" && (
            <CheckBlock
              label={filter.name}
              direction="column"
              keepOne={true}
              keys={true}
              allValues={filter.values}
              selectedValues={newSelectedValues[filter.attrName]}
              // tslint:disable-next-line: no-any jsx-no-lambda
              getUncheckedValues={(e: any) => {
                handleFilterChanges(e, filter.attrName);
              }}
            />
          )}
          {filter.type === "date" && (
            <DateBlock
              label={filter.name}
              direction="column"
              rangeValues={["2015/01/01", "2015/05/01"]}
              selectedValues={filter.values}
              // tslint:disable-next-line: no-any jsx-no-lambda
              handleChange={(e: any) => {
                handleFilterChanges(e, filter.attrName);
              }}
            />
          )}
          {filter.type === "slider" && (
            <SliderBlock
              label={filter.name}
              direction="column"
              rangeValues={filter.values}
              selectedValues={newSelectedValues[filter.attrName]}
              // tslint:disable-next-line: no-any jsx-no-lambda
              handleChange={(e: any) => {
                handleFilterChanges(e, filter.attrName);
              }}
            />
          )}
          {filter.type === "search" && (
            <SearchBlock
              label="Search"
              direction="column"
              placeholder="input with clear icon"
              value={newSelectedValues[filter.attrName]}
              // tslint:disable-next-line: no-any jsx-no-lambda
              handleChange={(e: any) => {
                handleFilterChanges(e, filter.attrName);
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Filter;
