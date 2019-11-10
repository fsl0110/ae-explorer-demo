### internal example

```jsx
import data from "./data.tiny.json";

const columns = [
  {
    attribute: "RACE",
    filter: "check",
  },
  {
    attribute: "ARM",
    filter: "check",
  },
  {
    attribute: "SEX",
    filter: "check",
    sort: "default",
  },
  {
    attribute: "AGE",
    filter: "slider",
    sort: "default",
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

<DetailsTable
  data={data}
  columns={columns}
  striped={true}
  pagination={true}
  filterButtons={true}
  sortButtons={true}
/>;
```

### external example

Use for handling data on server. See fetching values in console log.

```jsx
import data from "./data.tiny.json";

const columns = [
  {
    attribute: "RACE",
    filter: "check",
  },
  {
    attribute: "ARM",
    filter: "check",
  },
  {
    attribute: "SEX",
    filter: "check",
    sort: "default",
  },
  {
    attribute: "AGE",
    filter: "slider",
    sort: "default",
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

const handleExternal = (payload) => console.log("handleExternal", payload);

<DetailsTable
  data={data}
  columns={columns}
  striped={true}
  pagination={true}
  filterButtons={true}
  sortButtons={true}
  external={true}
  handleExternal={handleExternal}
/>;
```

### default sort and filter example

```jsx
import data from "./data.tiny.json";

const columns = [
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
const sort = [{attribute: "AGE", name: "AGE", direction: "asc"}];

const filters = [
  {
    attribute: "RACE",
    name: "RACE",
    type: "check",
    filterValues: ["Black", "White", "Hispanic", "Other/Mixed"],
    selectedValues: ["Black", "White"],
  },
];

const handleExternal = (payload) => console.log("handleExternal", payload);

<DetailsTable
  data={data}
  columns={columns}
  sort={sort}
  filters={filters}
  striped={true}
  pagination={true}
  filterButtons={true}
  sortButtons={true}
/>;
```
