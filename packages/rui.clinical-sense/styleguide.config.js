module.exports = {
  title: "Component Lib",
  components: "src/lib/**/*.tsx",
  propsParser: require("react-docgen-typescript").withCustomConfig("./tsconfig.json", {
    propFilter: (prop) => {
      if (prop.parent) {
        return !prop.parent.fileName.includes("node_modules");
      }

      return true;
    },
  }).parse,
  ignore: ["**/*.stories.*", "**/*.styles.*", "**/*.test.*", "**/*.d.ts", "**/index.*"],
  skipComponentsWithoutExample: true,
  pagePerSection: true,
  usageMode: "collapse",
  exampleMode: "collapse",
  require: ["antd/dist/antd.css"],
  /*   sections: [
    {
      name: "Buttons",
      components: () => ["./src/lib/button/*.tsx"],
      exampleMode: "collapse", // 'hide' | 'collapse' | 'expand'
      usageMode: "collapse", // 'hide' | 'collapse' | 'expand'
    },
    {
      name: "Typography",
      components: () => ["./src/lib/heading/*.tsx"],
      exampleMode: "collapse", // 'hide' | 'collapse' | 'expand'
      usageMode: "collapse", // 'hide' | 'collapse' | 'expand'
    },
    {
      name: "Utils",
      components: () => ["./src/lib/tag/*.tsx"],
      exampleMode: "collapse", // 'hide' | 'collapse' | 'expand'
      usageMode: "collapse", // 'hide' | 'collapse' | 'expand'
    },
  ], */
};
