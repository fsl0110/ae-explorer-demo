import React from "react";
import {storiesOf} from "@storybook/react";
import {Heading} from "./heading";
import heading from "./heading.md";

storiesOf("Typography|Heading", module).add(
  "Heading default",
  () => <Heading>Default Heading with h1 Tag</Heading>,
  {
    notes: {markdown: heading},
  },
);

storiesOf("Typography|Heading", module).add(
  "Heading h1",
  () => <Heading tag="h2">Heading with h2 Tag</Heading>,
  {
    notes: {markdown: heading},
  },
);
