import { FC } from "react";
import { Column, Data, Filter, Sort } from "../../../types";
interface Props {
    /**
     * The table data to display.
     */
    data: Data[];
    /**
     * Config to enable filter and sort for certain columns and to define readable names for columns
     */
    columns?: Column[];
    /**
     * Wether to display striped rows.
     */
    striped?: boolean;
    /**
     * Wether to show sort buttons above the table when sorts are active.
     */
    sortButtons?: boolean;
    /**
     * Wether to show filter buttons above the table when filters are active.
     */
    filterButtons?: boolean;
    /**
     * Wether to show the pagination.
     */
    pagination?: boolean;
    /**
     * Wether to set default sorting from outside, e.g. from redux store.
     */
    sort?: Sort[];
    /**
     * Wether to set default filters from outside, e.g. from redux store.
     */
    filters?: Filter[];
    /**
     * Wether to set default page from outside, e.g. from redux store.
     */
    page?: number;
    /**
     * Wether to set default resultsPerPage from outside, e.g. from redux store.
     */
    resultsPerPage?: number;
    /**
     * Wether to compute filter, sort and pagination external.
     */
    external?: boolean;
    /**
     * Receive filter, sort, and pagination settings from outside for handling fetches or storing in redux.
     */
    handleExternal?: (payload: {
        currentPage: number;
        resultsPerPage: number;
        filters: Filter[];
        sort: Sort[];
    }) => void;
    getSort?: (payload: Sort[]) => void;
    getFilters?: (payload: Filter[]) => void;
    getResultsPerPage?: (payload: number) => void;
    getPage?: (payload: number) => void;
}
export declare const DetailsTable: FC<Props>;
export {};
