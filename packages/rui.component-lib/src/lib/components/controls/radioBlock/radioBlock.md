### direction row

```jsx
const handleChange = (payload) => console.log(`handleChange: ${payload}`);

<RadioBlock
  label="Severity"
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  selectedValue="MILD"
  handleChange={handleChange}
/>;
```

### direction column

```jsx
const handleChange = (payload) => console.log(`handleChange: ${payload}`);

<RadioBlock
  direction="column"
  label="Severity"
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  selectedValue="MODERATE"
  handleChange={handleChange}
/>;
```

### direction column-row

```jsx
const handleChange = (payload) => console.log(`handleChange: ${payload}`);

<RadioBlock
  direction="column-row"
  label="Severity"
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  selectedValue="SEVERVE"
  handleChange={handleChange}
/>;
```

### disabled

```jsx
const handleChange = (payload) => console.log(`handleChange: ${payload}`);

<RadioBlock
  direction="column"
  label="Severity"
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  selectedValue="MILD"
  disabled={true}
  handleChange={handleChange}
/>;
```

### without label

```jsx
const handleChange = (payload) => console.log(`handleChange: ${payload}`);

<>
  <RadioBlock
    allValues={["MILD", "MODERATE", "SEVERVE"]}
    selectedValue="MILD"
    handleChange={handleChange}
  />
  <hr />
  <RadioBlock
    direction="column"
    allValues={["MILD", "MODERATE", "SEVERVE"]}
    selectedValue="MILD"
    handleChange={handleChange}
  />
</>;
```
