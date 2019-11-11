import { Groups, Group } from "../../types";
export declare const convertGroups: (category: [string, Groups], headerGroupsObj: Groups) => {
    name: string;
    value: number;
    total: number;
    percentage: number;
}[];
export declare const computeGroupPercentages: (groups: Group[], prevalenceMax: number | {}) => {}[];
