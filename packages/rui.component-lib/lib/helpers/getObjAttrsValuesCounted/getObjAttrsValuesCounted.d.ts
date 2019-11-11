/// <reference types="react" />
import _ from "lodash";
export declare const getObjAttrsValuesCounted: (obj: {
    [key: string]: import("react").ReactText;
}[], objAttrs?: string[] | undefined) => {
    name: string;
    values: _.Dictionary<number>;
}[];
/** @component */
export default getObjAttrsValuesCounted;
