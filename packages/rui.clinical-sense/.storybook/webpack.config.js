module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: "awesome-typescript-loader"
      },
      {
        loader: "react-docgen-typescript-loader",
        options: {
          propFilter: prop => {
            if (prop.parent) {
              return !prop.parent.fileName.includes("node_modules");
            }

            return true;
          }
        }
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
