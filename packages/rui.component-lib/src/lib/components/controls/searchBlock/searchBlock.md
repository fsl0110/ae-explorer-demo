### direction: row

```jsx
const handleChange = (payload) => console.log("searchterm1", payload);

<SearchBlock
  label="Search by category"
  placeholder="input with clear icon"
  allowClear={true}
  handleChange={handleChange}
/>;
```

### direction: column

```jsx
const handleChange = (payload) => console.log("searchterm2", payload);

<SearchBlock
  label="Search by category"
  placeholder="input with clear icon"
  direction="column"
  allowClear={true}
  handleChange={handleChange}
/>;
```

### without label and placeholder

```jsx
const handleChange = (payload) => console.log("searchterm1", payload);

<SearchBlock allowClear={true} handleChange={handleChange} />;
```

### disabled: true

```jsx
const handleChange = (payload) => console.log("searchterm1", payload);

<SearchBlock
  label="Search by category"
  placeholder="input with clear icon"
  disabled={true}
  allowClear={true}
  handleChange={handleChange}
/>;
```

### With custom width

```jsx
const handleChange = (payload) => console.log("searchterm3", payload);

<SearchBlock
  label="Search by category"
  placeholder="input with clear icon"
  width="320px"
  allowClear={true}
  handleChange={handleChange}
/>;
```

### with default value

```jsx
const handleChange = (payload) => console.log("searchterm4", payload);

<SearchBlock
  label="Search by category"
  placeholder="input with clear icon"
  value="Value"
  handleChange={handleChange}
/>;
```
