import { FC } from "react";
import { GroupedValue, HeaderGroup, Filter, Sort } from "../../types";
export interface Props {
    colors: string[];
    headerGroups: HeaderGroup[];
    bodyGroups: any;
    footerGroups: GroupedValue[];
    prevalenceRange: [number, number];
    expandedCategories: string[];
    bodyCellsView: string;
    searchTerm: string;
    filters: Filter[];
    sort: Sort[];
    handleExpandedCategoriesChange: (payload: string[]) => void;
    handleSearchChange: (payload: string) => void;
    handleFiltersChange: (payload: Filter[]) => void;
    handleSortChange: (payload: Sort[]) => void;
}
export declare const GroupsTable: FC<Props>;
