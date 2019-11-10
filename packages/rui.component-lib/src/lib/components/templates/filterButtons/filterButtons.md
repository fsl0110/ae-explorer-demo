### default

```jsx
const columns = [
  {
    attrName: "AEREL",
    name: "Relationship",
    filter: "check",
  },
  {
    attrName: "AGE",
    name: "AGE",
    filter: "slider",
  },
  {
    attrName: "AEBODSYS",
    name: "BodySys",
    filter: "search",
  },
  {
    attrName: "AEDECOD",
    name: "AEDECOD",
  },
  {
    attrName: "ARM",
    name: "ARM",
  },
];

const filters = [
  {
    attrName: "AEREL",
    name: "Relationship",
    allValues: ["MODERATE", "MILD", "SEVERE"],
    selectedValues: ["MODERATE", "MILD"],
  },
  {
    attrName: "AGE",
    name: "Age",
    allValues: [18, 55],
    selectedValues: [30, 40],
  },
  {
    attrName: "AEBODSYS",
    name: "AEBODSYS",
    selectedValues: "Searchterm",
  },
];

const mockFn = (payload) => console.log("FilterButtons handleClose", payload);

<FilterButtons columns={columns} tableFilters={filters} handleClose={mockFn} />;
```

### disabled

```jsx
const columns = [
  {
    attrName: "AEREL",
    name: "Relationship",
    filter: "check",
  },
  {
    attrName: "AGE",
    name: "AGE",
    filter: "slider",
  },
  {
    attrName: "AEBODSYS",
    name: "BodySys",
    filter: "search",
  },
  {
    attrName: "AEDECOD",
    name: "AEDECOD",
  },
  {
    attrName: "ARM",
    name: "ARM",
  },
];

const filters = [
  {
    attrName: "AEREL",
    name: "Relationship",
    allValues: ["MODERATE", "MILD", "SEVERE"],
    selectedValues: ["MODERATE", "MILD"],
  },
  {
    attrName: "AGE",
    name: "Age",
    allValues: [18, 55],
    selectedValues: [30, 40],
  },
  {
    attrName: "AEBODSYS",
    name: "AEBODSYS",
    selectedValues: "Searchterm",
  },
];

<FilterButtons columns={columns} tableFilters={filters} disabled={true} />;
```
