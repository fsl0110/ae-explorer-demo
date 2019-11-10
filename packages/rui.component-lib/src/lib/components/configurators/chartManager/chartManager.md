```jsx
import {ModalButton} from "../..";
const handleChange = (payload) => console.log("handleChange", payload);

<ModalButton iconName="line-chart" tooltipTitle="Chart Manager">
  <ChartManager
    allValues={["BarChart", "LineChart"]}
    selectedValue="LineChart"
    handleChange={handleChange}
  />
</ModalButton>;
```
