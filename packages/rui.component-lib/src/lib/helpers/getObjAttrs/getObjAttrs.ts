import _ from "lodash";

// tslint:disable-next-line: no-any
export const getObjAttrs = (obj: {[key: string]: any}) => _.map(obj, (key, value) => value);

/** @component */
export default getObjAttrs;
