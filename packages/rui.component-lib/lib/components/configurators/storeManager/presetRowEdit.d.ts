import { FC } from "react";
interface Props {
    presetName: string;
    presets: string[];
    handleChangedName: (newName: string, oldName: string) => void;
    handleEditClose: () => void;
}
export declare const PresetRowEdit: FC<Props>;
export {};
