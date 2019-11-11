import React, {FC} from "react";
import {useSelector, useDispatch} from "react-redux";
import {StoreManager} from "@dedrr/rui.component-lib";
import produce from "immer";
import {ActionCreators} from "redux-undo";
import {setSelectedSetting, setSettings} from "../../store/storeManager";
import {AppState, SettingsState} from "../../store";

export const StoreManagerConnection: FC = () => {
  const dispatch = useDispatch();
  const handleUndo = () => dispatch(ActionCreators.undo());
  const handleRedo = () => dispatch(ActionCreators.redo());

  const settings = useSelector((state: AppState) => state.settings);
  const presentSetting = useSelector((state: AppState) => state.present);

  const handleSelectSetting = (payload: string) => {
    dispatch(setSelectedSetting(settings[payload]));
  };

  const handleAddSetting = (payload: string) => {
    const newSettings = {
      ...settings,
      ...{[payload]: presentSetting},
    };

    dispatch(setSettings(newSettings));
  };

  const handleDeleteSetting = (payload: string) => {
    const newSettings = produce(settings, (draft: any) => {
      // tslint:disable-next-line: no-dynamic-delete
      delete draft[payload];
      return draft;
    });

    dispatch(setSettings(newSettings));
  };

  const handleRenameSetting = (newName: string, oldName: string) => {
    const newSettings = produce(settings, (draft: SettingsState) => {
      delete Object.assign(draft, {[newName]: draft[oldName]})[oldName];
      return draft;
    });

    dispatch(setSettings(newSettings));
  };

  const handleReorderSettings = (payload: string[]) => {
    let orderedSettings = {Default: settings.Default};
    payload.forEach((item: string) => {
      orderedSettings = {
        ...orderedSettings,
        ...{[item]: settings[item]},
      };
    });
    dispatch(setSettings(orderedSettings));
  };

  return (
    <StoreManager
      settingNames={Object.keys(settings).map((setting: string) => setting)}
      defaultValue="Default"
      undo={handleUndo}
      redo={handleRedo}
      selectSetting={handleSelectSetting}
      addSetting={handleAddSetting}
      deleteSetting={handleDeleteSetting}
      renameSetting={handleRenameSetting}
      reorderSettings={handleReorderSettings}
    />
  );
};
