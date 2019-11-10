import {useMemo} from "react";
import _ from "lodash";
import {Column, Data, Attribute} from "../../types";

export const computeData = (data: Data[], columns?: Column[]) => {
  const attrs: Attribute[] = _.map(data[0], (key, value) => ({attribute: value, name: value}));

  if (columns) {
    columns.forEach((column: Column) => {
      const index = attrs.findIndex((x: {attribute: string}) => x.attribute === column.attribute);

      if (column.filter && column.filter === "search") {
        const computedColumn = {
          attribute: column.attribute,
          name: column.name || column.attribute,
          filterValues: "",
          sort: column.sort,
          filter: column.filter,
        };

        attrs[index] = {
          ...attrs[index],
          ...computedColumn,
        };
      }

      if (column.filter && column.filter === "check") {
        const filterValues = _.chain(data)
          .uniqBy(column.attribute)
          .map((item) => item[column.attribute])
          .value();

        const computedColumn = {
          attribute: column.attribute,
          name: column.name || column.attribute,
          filter: column.filter,
          filterValues,
          sort: column.sort,
        };

        attrs[index] = {
          ...attrs[index],
          ...computedColumn,
        };
      }

      if ((column.filter && column.filter === "slider") || column.filter === "date") {
        const values = _.chain(data)
          .uniqBy(column.attribute)
          .map((item) => item[column.attribute])
          .value();
        const filterValues = [_.min(values), _.max(values)];

        const computedColumn = {
          attribute: column.attribute,
          name: column.name || column.attribute,
          filter: column.filter,
          filterValues,
          sort: column.sort,
        };

        attrs[index] = {
          ...attrs[index],
          ...computedColumn,
        };
      }
    });
  }

  return attrs;
};

export const useData = (data: Data[], columns?: Column[]) =>
  useMemo(() => computeData(data, columns), [data, columns]);
