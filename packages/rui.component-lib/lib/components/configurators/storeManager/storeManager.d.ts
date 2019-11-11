import { FC } from "react";
export interface Props {
    /**
     * All saved settings of the user.
     */
    settingNames: string[];
    /**
     * The selected setting. If some changes happen after the selection, defaultValue = ""
     * @default Default
     */
    defaultValue: string;
    /**
     * Action to undo the last action.
     */
    undo: () => void;
    /**
     * Action to redo the last action.
     */
    redo: () => void;
    selectSetting: (payload: string) => void;
    addSetting: (settingName: string) => void;
    deleteSetting: (settingName: string) => void;
    renameSetting: (newName: string, oldName: string) => void;
    reorderSettings: (payload: string[]) => void;
}
export declare const StoreManager: FC<Props>;
export default StoreManager;
