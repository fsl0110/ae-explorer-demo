export declare const ChartDotsStyles: import("styled-components").StyledComponent<"svg", any, {}, never>;
export declare const ChartAxisStyles: import("styled-components").StyledComponent<"svg", any, {}, never>;
export interface StyleProps {
    /**
     * Define an axis color.
     * @default undefined
     */
    axisColor?: string;
    /**
     * Define an axis style.
     * @default undefined
     */
    axisStyle?: string;
    /**
     * Define an axis width.
     * @default undefined
     */
    axisWidth?: string;
    /**
     * Define a tick color.
     * @default undefined
     */
    tickColor?: string;
    /**
     * Define a tick style.
     * @default undefined
     */
    tickStyle?: string;
    /**
     * Define a tick width.
     * @default undefined
     */
    tickWidth?: number;
    /**
     * Define a tick text color.
     * @default undefined
     */
    tickTextColor?: string;
    /**
     * Define a tick text size.
     * @default undefined
     */
    tickTextSize?: number;
    /**
     * Define a tick text family.
     * @default undefined
     */
    tickTextFamily?: string;
}
export declare const StyledAxisG: import("styled-components").StyledComponent<"g", any, StyleProps, never>;
