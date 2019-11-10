import _ from "lodash";
import {getObjAttrs} from "../..";

export const getObjAttrsValuesCounted = (
  obj: Array<{[key: string]: string | number}>,
  objAttrs?: string[],
) => {
  const attrs = objAttrs || getObjAttrs(obj[0]);

  return _.map(attrs, (key) => ({
    name: key,
    values: _.countBy(obj, key),
  }));
};

/** @component */
export default getObjAttrsValuesCounted;
