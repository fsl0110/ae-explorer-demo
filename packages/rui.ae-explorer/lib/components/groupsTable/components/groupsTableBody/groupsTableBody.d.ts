import { FC } from "react";
import { GroupedValue, Sort } from "../../../../types";
export interface Props {
    colors: string[];
    groups: GroupedValue[];
    prevalenceRange: [number, number];
    sort: Sort[];
    searchTerm: string;
    expandedCategories: string[];
    bodyCellsView: string;
    handleExpandedCategories: (payload: string[]) => void;
}
export declare const GroupsTableBody: FC<Props>;
