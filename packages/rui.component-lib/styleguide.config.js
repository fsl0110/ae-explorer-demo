module.exports = {
  title: "Novartis UI",
  propsParser: require("react-docgen-typescript").withCustomConfig("./tsconfig.json", {
    propFilter: (prop) => {
      if (prop.parent) {
        return !prop.parent.fileName.includes("node_modules");
      }

      return true;
    },
  }).parse,
  ignore: ["**/*.stories.*", "**/*.styles.*", "**/*.test.*", "**/*.d.ts", "**/index.*"],
  // Ignore components that don’t have an example file (as determined by getExampleFilename).
  // These components won’t be accessible from other examples unless you manually require them.
  skipComponentsWithoutExample: true,
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.tsx?$/, ".md");
  },
  pagePerSection: true,
  usageMode: "collapse",
  exampleMode: "collapse",
  require: ["antd/dist/antd.css"],
  sections: [
    {
      name: "Introduction",
      content: "src/lib/docs/introduction.md",
      sectionDepth: 1,
    },
    {
      name: "Documentation",
      content: "src/lib/docs/documentation.md",
      sectionDepth: 3,
      sections: [
        {
          name: "Coding Styleguide",
          content: "src/lib/docs/codingStyleguide.md",
        },
        {
          name: "Design Styleguide",
          content: "src/lib/docs/designStyleguide.md",
        },
      ],
    },
    {
      name: "Components",
      content: "src/lib/docs/components.md",
      sectionDepth: 2,
      sections: [
        {
          name: "Buttons",
          content: "src/lib/docs/charts.md",
          components: "src/lib/components/buttons/**/*.tsx",
          exampleMode: "collapse", // 'hide' | 'collapse' | 'expand'
          usageMode: "collapse", // 'hide' | 'collapse' | 'expand'
        },
        {
          name: "Charts",
          content: "src/lib/docs/charts.md",
          components: "src/lib/components/charts/**/*.tsx",
          exampleMode: "collapse", // 'hide' | 'collapse' | 'expand'
          usageMode: "collapse", // 'hide' | 'collapse' | 'expand'
        },
        {
          name: "Configurators",
          content: "src/lib/docs/configurators.md",
          components: "src/lib/components/configurators/**/*.tsx",
          exampleMode: "collapse", // 'hide' | 'collapse' | 'expand'
          usageMode: "collapse", // 'hide' | 'collapse' | 'expand'
        },
        {
          name: "Controls",
          content: "src/lib/docs/controls.md",
          components: "src/lib/components/controls/**/*.tsx",
          exampleMode: "collapse", // 'hide' | 'collapse' | 'expand'
          usageMode: "collapse", // 'hide' | 'collapse' | 'expand'
        },
        {
          name: "Layouts",
          content: "src/lib/docs/layout.md",
          components: "src/lib/components/layouts/**/*.tsx",
          exampleMode: "collapse", // 'hide' | 'collapse' | 'expand'
          usageMode: "collapse", // 'hide' | 'collapse' | 'expand'
        },
        {
          name: "Tables",
          content: "src/lib/docs/tables.md",
          components: "src/lib/components/tables/**/*.tsx",
          exampleMode: "collapse", // 'hide' | 'collapse' | 'expand'
          usageMode: "collapse", // 'hide' | 'collapse' | 'expand'
        },
        {
          name: "Templates",
          content: "src/lib/docs/templates.md",
          components: "src/lib/components/templates/**/*.tsx",
          exampleMode: "collapse", // 'hide' | 'collapse' | 'expand'
          usageMode: "collapse", // 'hide' | 'collapse' | 'expand'
        },
        {
          name: "Typography",
          content: "src/lib/docs/typography.md",
          components: "src/lib/components/typography/**/*.tsx",
          exampleMode: "collapse", // 'hide' | 'collapse' | 'expand'
          usageMode: "collapse", // 'hide' | 'collapse' | 'expand'
        },
        {
          name: "Utils",
          content: "src/lib/docs/utils.md",
          components: "src/lib/components/utils/**/*.tsx",
          exampleMode: "collapse", // 'hide' | 'collapse' | 'expand'
          usageMode: "collapse", // 'hide' | 'collapse' | 'expand'
        },
      ],
    },
    {
      name: "Hooks",
      content: "src/lib/docs/hooks.md",
      sectionDepth: 2,
      components: "src/lib/hooks/**/*.tsx",
      exampleMode: "hide", // 'hide' | 'collapse' | 'expand'
      usageMode: "hide", // 'hide' | 'collapse' | 'expand'
    },
    {
      name: "Helper functions",
      content: "src/lib/docs/helpers.md",
      components: "src/lib/helpers/**/*.tsx",
      sectionDepth: 2,
      exampleMode: "expand", // 'hide' | 'collapse' | 'expand'
      usageMode: "expand", // 'hide' | 'collapse' | 'expand'
    },
  ],
};
