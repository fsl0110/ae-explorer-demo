import React, {FC} from "react";
import * as d3 from "d3";
import {Tooltip} from "antd";
import {ChartDotsStyles} from "./chart.styles";
import {getColor} from "../../helpers";

export interface Props {
  colors: string[];
  groupValues?: any;
  prevalenceRange: [number, number];
}

export const ChartDots: FC<Props> = ({colors, groupValues, prevalenceRange}) => {
  const width = 70;

  let data: any = [];
  groupValues.forEach((group: any) => {
    data.push([group.percentage, 0]);
  });

  const xScaleDots = d3
    .scaleLinear()
    .domain([prevalenceRange[0], prevalenceRange[1]])
    .range([5, width + 5]);

  return (
    <ChartDotsStyles>
      <g>
        {data.map((item: any, i: number) => (
          <Tooltip key={groupValues[i].name} title={`${groupValues[i].name}: ${item[0]}%`}>
            <circle
              key={i}
              cx={xScaleDots(item[0])}
              cy={5}
              r={4}
              fill={getColor(groupValues[i].name, colors[i])}
              stroke={getColor(groupValues[i].name, colors[i])}
              strokeWidth={2}
            />
          </Tooltip>
        ))}
      </g>
    </ChartDotsStyles>
  );
};
