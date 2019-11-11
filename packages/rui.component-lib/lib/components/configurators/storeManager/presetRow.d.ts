import { FC } from "react";
export interface Props {
    presetName: string;
    edit?: string;
    handleEditOpen: (payload: string) => void;
    handleDelete: (payload: string) => void;
}
export declare const PresetRow: FC<Props>;
