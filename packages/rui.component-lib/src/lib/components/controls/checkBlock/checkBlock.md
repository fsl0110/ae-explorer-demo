### direction: row

ChekboxBlock is displayed as a row.

```jsx
const getUncheckedValues = (payload) => console.log(`getUncheckedValues: ${payload}`);
const getCheckedValues = (payload) => console.log(`getCheckedValues: ${payload}`);

<CheckBlock
  label="Severity"
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  selectedValues={["MILD"]}
  direction="row"
  getUncheckedValues={getUncheckedValues}
  getCheckedValues={getCheckedValues}
/>;
```

### direction: column

ChekboxBlock is displayed as a column.

```jsx
const getUncheckedValues = (payload) => console.log(`getUncheckedValues: ${payload}`);
const getCheckedValues = (payload) => console.log(`getCheckedValues: ${payload}`);

<CheckBlock
  label="Severity"
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  selectedValues={["MILD", "MODERATE"]}
  direction="column"
  getUncheckedValues={getUncheckedValues}
  getCheckedValues={getCheckedValues}
/>;
```

### direction: column-row

ChekboxBlock is displayed as a column, the checkboxes as a row.

```jsx
const getUncheckedValues = (payload) => console.log(`getUncheckedValues: ${payload}`);
const getCheckedValues = (payload) => console.log(`getCheckedValues: ${payload}`);

<CheckBlock
  label="Severity"
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  selectedValues={["MILD", "MODERATE", "SEVERVE"]}
  direction="column-row"
  getUncheckedValues={getUncheckedValues}
  getCheckedValues={getCheckedValues}
/>;
```

### getUncheckedValues() & getCheckedValues()

See console.log()

```jsx
const getUncheckedValues = (payload) => console.log(`getUncheckedValues: ${payload}`);
const getCheckedValues = (payload) => console.log(`getCheckedValues: ${payload}`);

<CheckBlock
  label="Severity"
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  selectedValues={["MILD"]}
  direction="row"
  getUncheckedValues={getUncheckedValues}
  getCheckedValues={getCheckedValues}
/>;
```

### keepOne: true

One checkbox is always set.

```jsx
const getUncheckedValues = (payload) => console.log(`getUncheckedValues: ${payload}`);
const getCheckedValues = (payload) => console.log(`getCheckedValues: ${payload}`);

<CheckBlock
  label="Severity"
  keepOne={true}
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  selectedValues={["MILD"]}
  direction="column-row"
  getUncheckedValues={getUncheckedValues}
  getCheckedValues={getCheckedValues}
/>;
```

### keys: true

Press Control key while clicking a checkbox and all other checkboxes will be unchecked.
Press Alt key while clicking a checkbox and all checkboxes will be set.

```jsx
const getUncheckedValues = (payload) => console.log(`getUncheckedValues: ${payload}`);
const getCheckedValues = (payload) => console.log(`getCheckedValues: ${payload}`);

<CheckBlock
  label="Severity"
  keys={true}
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  selectedValues={["MILD"]}
  direction="column-row"
  getUncheckedValues={getUncheckedValues}
  getCheckedValues={getCheckedValues}
/>;
```

### disabled: true

```jsx
const getUncheckedValues = (payload) => console.log(`getUncheckedValues: ${payload}`);
const getCheckedValues = (payload) => console.log(`getCheckedValues: ${payload}`);

<CheckBlock
  label="Severity"
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  selectedValues={["MILD"]}
  direction="row"
  disabled={true}
  getUncheckedValues={getUncheckedValues}
  getCheckedValues={getCheckedValues}
/>;
```

### without label

```jsx
const getUncheckedValues = (payload) => console.log(`getUncheckedValues: ${payload}`);
const getCheckedValues = (payload) => console.log(`getCheckedValues: ${payload}`);
<>
  <CheckBlock
    allValues={["MILD", "MODERATE", "SEVERVE"]}
    selectedValues={["MILD"]}
    direction="row"
    getUncheckedValues={getUncheckedValues}
    getCheckedValues={getCheckedValues}
  />
  <hr />
  <CheckBlock
    allValues={["MILD", "MODERATE", "SEVERVE"]}
    selectedValues={["MILD"]}
    direction="column"
    getUncheckedValues={getUncheckedValues}
    getCheckedValues={getCheckedValues}
  />
</>;
```

### DND example vertical

```jsx
const getUncheckedValues = (payload) => console.log(`getUncheckedValues: ${payload}`);
const getCheckedValues = (payload) => console.log(`getCheckedValues: ${payload}`);
const getAllValuesReordered = (payload) => console.log(`getAllValuesReordered: ${payload}`);

<CheckBlock
  label="Severity"
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  selectedValues={["MILD"]}
  direction="column"
  enableDND={true}
  getUncheckedValues={getUncheckedValues}
  getCheckedValues={getCheckedValues}
  getAllValuesReordered={getAllValuesReordered}
/>;
```

### DND example horizontal

```jsx
const getUncheckedValues = (payload) => console.log(`getUncheckedValues: ${payload}`);
const getCheckedValues = (payload) => console.log(`getCheckedValues: ${payload}`);
const getAllValuesReordered = (payload) => console.log(`getAllValuesReordered: ${payload}`);

<CheckBlock
  label="Severity"
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  selectedValues={["MILD"]}
  direction="row"
  enableDND={true}
  getUncheckedValues={getUncheckedValues}
  getCheckedValues={getCheckedValues}
  getAllValuesReordered={getAllValuesReordered}
/>;
```

### showCheckAll = true

```jsx
const getUncheckedValues = (payload) => console.log(`getUncheckedValues: ${payload}`);
const getCheckedValues = (payload) => console.log(`getCheckedValues: ${payload}`);
<>
  <CheckBlock
    label="Severity"
    allValues={["MILD", "MODERATE", "SEVERVE"]}
    selectedValues={["MILD"]}
    direction="column"
    showCheckAll={true}
    getUncheckedValues={getUncheckedValues}
    getCheckedValues={getCheckedValues}
  />

  <hr />
  <CheckBlock
    label="Severity"
    allValues={["MILD", "MODERATE", "SEVERVE"]}
    selectedValues={["MILD"]}
    direction="row"
    showCheckAll={true}
    getUncheckedValues={getUncheckedValues}
    getCheckedValues={getCheckedValues}
  />
</>;
```

### showCheckSingle = true

```jsx
const getUncheckedValues = (payload) => console.log(`getUncheckedValues: ${payload}`);
const getCheckedValues = (payload) => console.log(`getCheckedValues: ${payload}`);
const getAllValuesReordered = (payload) => console.log(`getAllValuesReordered: ${payload}`);

<CheckBlock
  label="Severity"
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  selectedValues={["MILD"]}
  direction="row"
  enableDND={true}
  showCheckSingle={true}
  getUncheckedValues={getUncheckedValues}
  getCheckedValues={getCheckedValues}
  getAllValuesReordered={getAllValuesReordered}
/>;
```

### showCheckAll & showCheckSingle = true

```jsx
const getUncheckedValues = (payload) => console.log(`getUncheckedValues: ${payload}`);
const getCheckedValues = (payload) => console.log(`getCheckedValues: ${payload}`);
const getAllValuesReordered = (payload) => console.log(`getAllValuesReordered: ${payload}`);

<CheckBlock
  label="Severity"
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  selectedValues={["MILD"]}
  direction="row"
  enableDND={true}
  showCheckAll={true}
  showCheckSingle={true}
  getUncheckedValues={getUncheckedValues}
  getCheckedValues={getCheckedValues}
  getAllValuesReordered={getAllValuesReordered}
/>;
```
