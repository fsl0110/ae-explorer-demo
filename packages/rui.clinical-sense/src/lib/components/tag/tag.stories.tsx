import React from "react";
import {storiesOf} from "@storybook/react";

import {Tag} from "./tag";
import tag from "./tag.md";

storiesOf("Utils|Tag", module).add("Tag as div", () => <Tag type="div">The Tag is a div</Tag>, {
  notes: {markdown: tag},
});
storiesOf("Utils|Tag", module).add("Tag as span", () => <Tag type="span">The Tag is a span</Tag>, {
  notes: {markdown: tag},
});
