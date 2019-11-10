import _ from "lodash";
import {getObjAttrs} from "../..";

export const getObjAttrsValues = (
  obj: Array<{[key: string]: string | number}>,
  objAttrs?: string[],
) => {
  const attrs: string[] = objAttrs || getObjAttrs(obj[0]);

  let values = {};

  _.each(attrs, (key: string) => {
    values = {
      ...values,
      [key]: _.chain(obj)
        .uniqBy(key)
        .map((item) => item[key])
        .value(),
    };
  });

  return values;
};

/** @component */
export default getObjAttrsValues;
