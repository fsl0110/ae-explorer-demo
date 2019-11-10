Implementation is not completed. Don't use it before finishing!!!

### default

```jsx
import moment from "moment";
const dateFormat = "YYYY/MM/DD";
const handleChange = (payload) => console.log("searchterm1", payload);

<DateBlock
  label="Date"
  direction="row"
  rangeValues={[moment("2015/01/01", dateFormat), moment("2015/12/31", dateFormat)]}
  selectedValues={[moment("2015/03/01", dateFormat), moment("2015/5/01", dateFormat)]}
  format={dateFormat}
  handleChange={handleChange}
/>;
```

### direction = column

```jsx
import moment from "moment";
const dateFormat = "YYYY/MM/DD";
const handleChange = (payload) => console.log("dateBlock", payload);

<DateBlock
  label="Date"
  direction="row"
  rangeValues={[moment("2015/01/01", dateFormat), moment("2015/12/31", dateFormat)]}
  selectedValues={[moment("2015/03/01", dateFormat), moment("2015/5/01", dateFormat)]}
  format={dateFormat}
  direction="column"
  handleChange={handleChange}
/>;
```

### With custom width

```jsx
import moment from "moment";
const dateFormat = "YYYY/MM/DD";
const handleChange = (payload) => console.log("searchterm1", payload);

<DateBlock
  label="Date"
  direction="row"
  rangeValues={[moment("2015/01/01", dateFormat), moment("2015/12/31", dateFormat)]}
  selectedValues={[moment("2015/03/01", dateFormat), moment("2015/5/01", dateFormat)]}
  format={dateFormat}
  width="400px"
  handleChange={handleChange}
/>;
```
