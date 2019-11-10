**Developers are able to:**

- predefine settings for most common usecases. These sort of settings are not deletable or editable by users like the Default setting.

**Users are able to:**

- save, rename, delete and reorder personal settings.
- choose between predefined settings.
- reset Settings to the Default settings.
- see always the current setting displayed in the store manager. (If it is a saved setting without changes the settings name appears. If the user have made changes the placholder appears to show that no setting is selected or the selected setting has changed.)

**Currently there is no comparison between saved settings and the current selection. So it is possible that the user can save the same setting several times. Maybe we should implement these sort of comparison.**

```jsx
const presets = [
  "Participants One",
  "Participants Two",
  "Events Preset One",
  "Filter Preset Two",
  "Participants by Prevalence",
  "Events by AGE",
];

const defaultValue = "Default";
const undo = () => console.log("undo");
const redo = () => console.log("redo");
const handlePresetChange = (payload) => console.log("handlePresetChange", payload);
const handleSelectPreset = (payload) => console.log("handleSelectPreset", payload);

<StoreManager
  presets={presets}
  defaultValue={defaultValue}
  undo={undo}
  redo={redo}
  handlePresetChange={handlePresetChange}
  handleSelectPreset={handleSelectPreset}
/>;
```
