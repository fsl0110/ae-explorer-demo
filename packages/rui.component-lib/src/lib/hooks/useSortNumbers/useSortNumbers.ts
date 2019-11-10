import {useMemo} from "react";
import _ from "lodash";
import {Data, Sort} from "../../types";

export function sortNumbers(data: any, sortColumns: Sort[]) {
  if (!data.length) {
    return data;
  }
  if (sortColumns.length) {
    // tslint:disable-next-line: prefer-immediate-return
    const sortedDatas = _.orderBy(
      data,
      _.map(sortColumns, (item) => {
        const fn = (o: any) => {
          // tslint:disable: no-construct
          // tslint:disable: prefer-immediate-return
          // tslint:disable: arrow-return-shorthand
          // tslint:disable-next-line: use-primitive-type
          return new Number(o[item.name]); // eslint-disable-line
        };
        return fn;
      }),
      _.map(sortColumns, "direction"),
    );

    return sortedDatas;
  } else {
    return _.orderBy(
      data,
      [
        function(o: any) {
          // tslint:disable-next-line: use-primitive-type
          return new Number(o["Total"]); // eslint-disable-line
        },
        "name",
      ],
      ["desc", "asc"],
    );
  }
}

export const useSortNumbers = (data: Data[], sort: Sort[]) =>
  useMemo(() => sortNumbers(data, sort), [data, sort]);
