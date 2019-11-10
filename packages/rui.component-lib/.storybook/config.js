import {configure, addParameters, addDecorator} from "@storybook/react";
import {withInfo} from "@storybook/addon-info";
import "antd/dist/antd.css";

addDecorator(withInfo);

addParameters({
  options: {
    name: "Component Lib",
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: "bottom",
    sortStoriesByKind: false,
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
  },
});

configure(require.context("../src/lib", true, /\.stories\.tsx$/), module);
