**You have to define a width by yourself!!!**

### direction row

```jsx
const handleChange = (payload) => console.log("selectedvalue", payload);

<SelectBlock
  label="Severity"
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  placeholder="Placeholder"
  handleChange={handleChange}
  selectedValue="MILD"
  direction="row"
  width="200px"
/>;
```

### direction column (has width of parent automatically)

```jsx
const handleChange = (payload) => console.log("selectedvalue", payload);

<SelectBlock
  label="Severity"
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  placeholder="Placeholder"
  handleChange={handleChange}
  selectedValue="MILD"
  direction="column"
/>;
```

### with parent width (width=100%)

```jsx
const handleChange = (payload) => console.log("selectedvalue", payload);

<SelectBlock
  label="Severity"
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  placeholder="Placeholder"
  handleChange={handleChange}
  selectedValue="MILD"
  width="100%"
/>;
```

### With placeholder

```jsx
const handleChange = (payload) => console.log("selectedvalue", payload);

<SelectBlock
  label="Severity"
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  placeholder="Placeholder"
  handleChange={handleChange}
  width="200px"
/>;
```

### disabled: true

```jsx
const handleChange = (payload) => console.log("selectedvalue", payload);

<SelectBlock
  label="Severity"
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  placeholder="Placeholder"
  handleChange={handleChange}
  disabled={true}
  width="200px"
/>;
```

### With multiple select

```jsx
const handleChange = (payload) => console.log("selectedvalue", payload);

<SelectBlock
  label="Severity"
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  placeholder="Placeholder"
  handleChange={handleChange}
  mode="multiple"
  width="200px"
/>;
```

### With multiple select tags

```jsx
const handleChange = (payload) => console.log("selectedvalue", payload);

<SelectBlock
  label="Severity"
  allValues={["MILD", "MODERATE", "SEVERVE"]}
  placeholder="Placeholder"
  handleChange={handleChange}
  mode="tags"
  width="200px"
/>;
```
