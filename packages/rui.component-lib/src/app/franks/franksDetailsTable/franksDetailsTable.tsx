import React from "react";
import {DetailsTable} from "../../../lib";
import {Column, Sort, Filter} from "../../../lib/types";
import data from "./data.json";

export const FranksDetailsTable = () => {
  const columns: Column[] = [
    {
      attribute: "RACE",
      filter: "check",
      sort: true,
    },
    {
      attribute: "ARM",
      filter: "check",
      sort: true,
    },
    {
      attribute: "SEX",
      filter: "check",
      sort: true,
    },
    {
      attribute: "AGE",
      filter: "slider",
      sort: true,
    },
    {
      attribute: "AETERM",
      name: "AETERM with Some Text",
      filter: "search",
    },
    {
      attribute: "AEBODSYS",
      name: "AEBODSYS with Some Text",
      filter: "search",
    },
    {
      attribute: "RFSTDTC",
      name: "RFSTDTC Date",
      filter: "date",
    },
  ];

  const sort: Sort[] = [{attribute: "AGE", name: "AGE", direction: "asc"}];

  const filters: Filter[] = [
    {
      attribute: "RACE",
      name: "RACE",
      type: "check",
      filterValues: ["Black", "White", "Hispanic", "Other/Mixed"],
      selectedValues: ["Black", "White"],
    },
  ];

  /* const sort: Sort[] = [];
const filters: Filter[] = []; */

  return (
    <DetailsTable
      data={data}
      columns={columns}
      sort={sort}
      filters={filters}
      striped={true}
      pagination={true}
      filterButtons={true}
      sortButtons={true}
    />
  );
};
