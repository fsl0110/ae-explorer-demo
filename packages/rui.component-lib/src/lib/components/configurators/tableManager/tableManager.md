**Developers are able to:**

- to predefine selectable columns to show.
- predefine type of filter e.g. checkbox, rengeSlider or text search for columns.
- define readable names for columns.

**Users are able to:**

- show/hide columns.
- reorder columns.
- make other table configurations e.g toggle between display types, enable/disable tooltips, set fixed columns

```jsx
import {ModalButton} from "../..";

const allColumns = [
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

const selectedColumns = [
  {
    attrName: "AEOUT",
    name: "Outcome",
  },
];
const getCheckedValues = (payload) => console.log("getCheckedValues", payload);
const getAllValuesReordered = (payload) => console.log("getAllValuesReordered", payload);

<ModalButton iconName="table" tooltipTitle="Table Manager">
  <TableManager
    allColumns={allColumns}
    selectedColumns={selectedColumns}
    getCheckedColumns={getCheckedValues}
    getAllColumnsReordered={getAllValuesReordered}
  />
</ModalButton>;
```

### Table manager wrapper disabled

```jsx
import {ModalButton} from "../..";

const allColumns = [
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

const selectedColumns = [
  {
    attrName: "AEOUT",
    name: "Outcome",
  },
];
const getCheckedValues = (payload) => console.log("getCheckedValues", payload);
const getAllValuesReordered = (payload) => console.log("getAllValuesReordered", payload);

<ModalButton iconName="table" tooltipTitle="Table Manager" disabled={true}>
  <TableManager
    allColumns={allColumns}
    selectedColumns={selectedColumns}
    getCheckedColumns={getCheckedValues}
    getAllColumnsReordered={getAllValuesReordered}
  />
</ModalButton>;
```

### Table manager wrapper hidden

```jsx
import {ModalButton} from "../..";
const allColumns = [
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

const selectedColumns = [
  {
    attrName: "AEOUT",
    name: "Outcome",
  },
];
const getCheckedValues = (payload) => console.log("getCheckedValues", payload);
const getAllValuesReordered = (payload) => console.log("getAllValuesReordered", payload);

<ModalButton iconName="table" tooltipTitle="Table Manager" hide={true}>
  <TableManager
    allColumns={allColumns}
    selectedColumns={selectedColumns}
    getCheckedColumns={getCheckedValues}
    getAllColumnsReordered={getAllValuesReordered}
  />
</ModalButton>;
```

### Table manager with dropdown

```jsx
import {DropdownButton} from "../..";
const allColumns = [
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

const selectedColumns = [
  {
    attrName: "AEOUT",
    name: "Outcome",
  },
];
const getCheckedValues = (payload) => console.log("getCheckedValues", payload);
const getAllValuesReordered = (payload) => console.log("getAllValuesReordered", payload);

<DropdownButton iconName="table" tooltipTitle="Table Manager">
  <TableManager
    allColumns={allColumns}
    selectedColumns={selectedColumns}
    getCheckedColumns={getCheckedValues}
    getAllColumnsReordered={getAllValuesReordered}
  />
</DropdownButton>;
```
