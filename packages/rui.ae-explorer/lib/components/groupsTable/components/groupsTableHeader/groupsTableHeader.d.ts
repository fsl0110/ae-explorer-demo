import { FC } from "react";
import { Filter, Sort, HeaderGroup } from "../../../../types";
export interface Props {
    colors: string[];
    headerGroups: HeaderGroup[];
    prevalenceRange: [number, number];
    searchTerm: string;
    sort: Sort[];
    filters: Filter[];
    handleSearch: (payload: string) => void;
    handleFilters: (payload: Filter[]) => void;
    handleSort: (payload: Sort[]) => void;
}
export declare const GroupsTableHeader: FC<Props>;
