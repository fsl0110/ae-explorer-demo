import React from "react";
import {storiesOf} from "@storybook/react";
import {Button} from "./button";
import button from "./button.md";

storiesOf("Utils|Button", module).add(
  "Button",
  () => <Button type="primary">I'm an Ant-Design Button</Button>,
  {
    notes: {markdown: button},
  },
);
