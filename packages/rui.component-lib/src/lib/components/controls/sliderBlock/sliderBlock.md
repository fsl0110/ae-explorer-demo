### without label

```jsx
const mockFn = (payload) => console.log("SliderBlock", payload);

<SliderBlock step={1} rangeValues={[20, 50]} selectedValues={[25, 35]} handleChange={mockFn} />;
```

### with label and direction: row (default)

```jsx
const mockFn = (payload) => console.log("SliderBlock", payload);

<SliderBlock
  label="Age"
  step={1}
  rangeValues={[20, 50]}
  selectedValues={[25, 35]}
  handleChange={mockFn}
/>;
```

### with label and direction: column

```jsx
const mockFn = (payload) => console.log("SliderBlock", payload);

<SliderBlock
  label="Age"
  direction="column"
  step={1}
  rangeValues={[20, 50]}
  selectedValues={[25, 35]}
  handleChange={mockFn}
/>;
```

### disabled

```jsx
const mockFn = (payload) => console.log("SliderBlock", payload);

<SliderBlock
  disabled={true}
  direction="column"
  step={1}
  rangeValues={[20, 50]}
  selectedValues={[25, 35]}
  handleChange={mockFn}
/>;
```

### with custom width

```jsx
const mockFn = (payload) => console.log("SliderBlock", payload);

<SliderBlock
  direction="column"
  step={1}
  rangeValues={[20, 50]}
  selectedValues={[25, 35]}
  handleChange={mockFn}
  width="500px"
/>;
```

### with parent width (inherit)

```jsx
const mockFn = (payload) => console.log("SliderBlock", payload);

<SliderBlock
  direction="column"
  step={1}
  rangeValues={[20, 50]}
  selectedValues={[25, 35]}
  handleChange={mockFn}
  width="inherit"
/>;
```
