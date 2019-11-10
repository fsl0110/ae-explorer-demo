**developers are able to:**

- to predefine selectable attributes to filters.
- predefine type of filter e.g. checkbox, rengeSlider or text search.
- define readable names for filters.

**Users are able to:**

- choose the one or more attributes/columns to filter.
- reorder the appearance of the filter by drag and drop. (coming soon!)

### Filter manager wrapped with ModalButton

```jsx
import {ModalButton} from "../..";
const filterValues = [
  {
    attrName: "AESEV",
    name: "Severity",
  },
  {
    attrName: "AEOUT",
    name: "Outcome",
  },
  {
    attrName: "AGE",
    name: "Age",
  },
];
const selectedValues = ["Outcome", "Severity"];
const getCheckedValues = (payload) => console.log("getCheckedValues", payload);
const getAllValuesReordered = (payload) => console.log("getAllValuesReordered", payload);

<ModalButton iconName="filter" tooltipTitle="Filter Manager">
  <FilterManager
    filterValues={filterValues}
    selectedValues={selectedValues}
    getCheckedValues={getCheckedValues}
    getAllValuesReordered={getAllValuesReordered}
  />
</ModalButton>;
```

### Filter manager wrapper disabled

```jsx
import {ModalButton} from "../..";
const filterValues = [
  {
    attrName: "AESEV",
    name: "Severity",
    type: "check",
  },
  {
    attrName: "AEOUT",
    name: "Outcome",
    type: "search",
  },
  {
    attrName: "AGE",
    name: "AGE",
    type: "slider",
  },
  {
    attrName: "ASTDT",
    name: "Dates",
    type: "date",
  },
];
const selectedValues = ["Outcome", "Severity"];
const getCheckedValues = (payload) => console.log("getCheckedValues", payload);

<ModalButton iconName="filter" tooltipTitle="Filter Manager" disabled={true}>
  <FilterManager
    filterValues={filterValues}
    selectedValues={selectedValues}
    getCheckedValues={getCheckedValues}
  />
</ModalButton>;
```

### Filter manager wrapper hidden

```jsx
import {ModalButton} from "../..";
const filterValues = [
  {
    attrName: "AESEV",
    name: "Severity",
  },
  {
    attrName: "AEOUT",
    name: "Outcome",
  },
  {
    attrName: "AGE",
    name: "Age",
  },
];
const selectedValues = ["Outcome", "Severity"];
const getCheckedValues = (payload) => console.log("getCheckedValues", payload);

<ModalButton iconName="filter" tooltipTitle="Filter Manager" hide={true}>
  <FilterManager
    filterValues={filterValues}
    selectedValues={selectedValues}
    getCheckedValues={getCheckedValues}
  />
</ModalButton>;
```

### Filter manager with dropdown

```jsx
import {DropdownButton} from "../..";
const filterValues = [
  {
    attrName: "AESEV",
    name: "Severity",
  },
  {
    attrName: "AEOUT",
    name: "Outcome",
  },
  {
    attrName: "AGE",
    name: "Age",
  },
];
const selectedValues = ["Outcome", "Severity"];
const getCheckedValues = (payload) => console.log("getCheckedValues", payload);

<DropdownButton iconName="filter" tooltipTitle="Filter Manager">
  <FilterManager
    filterValues={filterValues}
    selectedValues={selectedValues}
    getCheckedValues={getCheckedValues}
  />
</DropdownButton>;
```
