```jsx
import data from "../../../../data.json";
const selectedFilter = [
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
];

const selectedValues = {
  AESEV: ["MILD"],
  AEOUT: "SearchTerm",
  AGE: [30, 40],
  ASTDT: [],
};

const handleChange = (payload) => console.log("handleChange", payload);

<Filter
  data={data}
  selectedFilter={selectedFilter}
  selectedValues={selectedValues}
  handleChange={handleChange}
/>;
```
