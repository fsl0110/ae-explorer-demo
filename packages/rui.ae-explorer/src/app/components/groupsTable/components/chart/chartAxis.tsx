import React, {FC, useRef, useEffect} from "react";
import * as d3 from "d3";
import {ChartAxisStyles, StyledAxisG} from "./chart.styles";

export interface Props {
  prevalenceRange: [number, number];
}

export const ChartAxis: FC<Props> = ({prevalenceRange}) => {
  const el = useRef<SVGGElement>(null);
  const width = 70;
  const align = "axisTop";
  const xScaleAxis = d3
    .scaleLinear()
    .domain([prevalenceRange[0], prevalenceRange[1]])
    .range([5, width + 5]);

  useEffect(() => {
    // @ts-ignore
    const axis = d3[align]()
      .scale(xScaleAxis)
      .ticks(5)
      .tickSizeInner(5)
      .tickSizeOuter(5);

    d3.select(el.current).call(axis);
  });

  return (
    <ChartAxisStyles>
      <StyledAxisG
        ref={el}
        axisColor="blue"
        axisWidth="1"
        tickColor="black"
        tickWidth={1}
        tickTextColor="black"
        tickTextSize={13}
      />
    </ChartAxisStyles>
  );
};
