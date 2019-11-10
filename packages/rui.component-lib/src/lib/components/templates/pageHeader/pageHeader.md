### default = BackButton and StoreManager

```jsx
import {StoreManager} from "../..";
import {BackButton} from "./backButton";

const mockFn = () => null;

<PageHeader>
  <BackButton tooltipTitle="Back" />
  <StoreManager
    presets={["Preset 1", "Preset 2"]}
    defaultValue="Default"
    undo={mockFn}
    redo={mockFn}
    addPreset={mockFn}
    selectPreset={mockFn}
    deletePreset={mockFn}
    renamePreset={mockFn}
  />
</PageHeader>;
```

### page header with manager, help and disable back button

```jsx
import {FilterManager, TableManager, ChartManager, StoreManager, ModalButton} from "../..";
import {BackButton} from "./backButton";
import {HelpModal} from "./helpModal";

const mockFn = () => null;
const filterValues = [
  {
    attribute: "RACE",
    name: "Race",
  },
  {
    attribute: "SEX",
    name: "Sex",
  },
  {
    attribute: "AGE",
    name: "Age",
  },
];

<PageHeader>
  <BackButton tooltipTitle="Back" disabled={true} />
  <StoreManager
    presets={["Preset 1", "Preset 2"]}
    defaultValue="Default"
    undo={mockFn}
    redo={mockFn}
    addPreset={mockFn}
    selectPreset={mockFn}
    deletePreset={mockFn}
    renamePreset={mockFn}
  />
  <div className="manager">
    <ModalButton iconName="filter" tooltipTitle="Filter Manager">
      <FilterManager
        filterValues={filterValues}
        selectedValues={[]}
        getCheckedValues={mockFn}
        getAllValuesReordered={mockFn}
      />
    </ModalButton>
    <ModalButton iconName="table" tooltipTitle="Table Manager">
      <TableManager
        allColumns={filterValues}
        selectedColumns={filterValues}
        getCheckedColumns={mockFn}
        getAllColumnsReordered={mockFn}
      />
    </ModalButton>
    <ModalButton iconName="line-chart" tooltipTitle="Chart Manager">
      <ChartManager
        allValues={["BarChart", "LineChart"]}
        selectedValue="LineChart"
        handleChange={mockFn}
      />
    </ModalButton>
  </div>
  <HelpModal />
</PageHeader>;
```

### page header with help and disabled Table Manager

```jsx
import {FilterManager, TableManager, ChartManager, StoreManager, ModalButton} from "../..";
import {BackButton} from "./backButton";
import {HelpModal} from "./helpModal";

const mockFn = () => null;
const filterValues = [
  {
    attribute: "RACE",
    name: "Race",
  },
  {
    attribute: "SEX",
    name: "Sex",
  },
  {
    attribute: "AGE",
    name: "Age",
  },
];

<PageHeader>
  <BackButton tooltipTitle="Back" />
  <StoreManager
    presets={["Preset 1", "Preset 2"]}
    defaultValue="Default"
    undo={mockFn}
    redo={mockFn}
    addPreset={mockFn}
    selectPreset={mockFn}
    deletePreset={mockFn}
    renamePreset={mockFn}
  />
  <div class="manager">
    <ModalButton iconName="filter" tooltipTitle="Filter Manager">
      <FilterManager
        filterValues={filterValues}
        selectedValues={[]}
        getCheckedValues={mockFn}
        getAllValuesReordered={mockFn}
      />
    </ModalButton>
    <ModalButton iconName="table" tooltipTitle="Table Manager" disabled={true}>
      <TableManager
        allColumns={filterValues}
        selectedColumns={filterValues}
        getCheckedColumns={mockFn}
        getAllColumnsReordered={mockFn}
      />
    </ModalButton>
    <ModalButton iconName="line-chart" tooltipTitle="Chart Manager">
      <ChartManager
        allValues={["BarChart", "LineChart"]}
        selectedValue="LineChart"
        handleChange={mockFn}
      />
    </ModalButton>
  </div>
  <HelpModal />
</PageHeader>;
```

### page header with help and hidden Table Manager

```jsx
import {FilterManager, TableManager, ChartManager, StoreManager, ModalButton} from "../..";
import {BackButton} from "./backButton";
import {HelpModal} from "./helpModal";

const mockFn = () => null;
const filterValues = [
  {
    attribute: "RACE",
    name: "Race",
  },
  {
    attribute: "SEX",
    name: "Sex",
  },
  {
    attribute: "AGE",
    name: "Age",
  },
];

<PageHeader>
  <BackButton tooltipTitle="Back" />
  <StoreManager
    presets={["Preset 1", "Preset 2"]}
    defaultValue="Default"
    undo={mockFn}
    redo={mockFn}
    addPreset={mockFn}
    selectPreset={mockFn}
    deletePreset={mockFn}
    renamePreset={mockFn}
  />
  <div class="manager">
    <ModalButton iconName="filter" tooltipTitle="Filter Manager">
      <FilterManager
        filterValues={filterValues}
        selectedValues={[]}
        getCheckedValues={mockFn}
        getAllValuesReordered={mockFn}
      />
    </ModalButton>
    <ModalButton iconName="table" tooltipTitle="Table Manager" hide={true}>
      <TableManager
        allColumns={filterValues}
        selectedColumns={filterValues}
        getCheckedColumns={mockFn}
        getAllColumnsReordered={mockFn}
      />
    </ModalButton>
    <ModalButton iconName="line-chart" tooltipTitle="Chart Manager">
      <ChartManager
        allValues={["BarChart", "LineChart"]}
        selectedValue="LineChart"
        handleChange={mockFn}
      />
    </ModalButton>
  </div>
  <HelpModal />
</PageHeader>;
```
