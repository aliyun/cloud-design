const path = require("path");
const globby = require("globby");
import * as Chain from "webpack-chain";

module.exports = {
  presets: [
    [
      require.resolve("@alicloud/console-toolkit-preset-demos"),
      {
        consoleOSId: "xconsole-chart-demos",
        getDemos() {
          const baseDir = path.resolve(__dirname, "../base-components/src/");
          const paths = globby.sync("**/demo/*.tsx", { cwd: baseDir });
          const res = paths.map((relativePath) => {
            return {
              key: "./" + relativePath,
              path: path.resolve(baseDir, relativePath),
            };
          });
          return res;
        },
        chainWebpack(chain: Chain) {
          chain.resolve.alias.set('@alicloudfe/components', path.resolve(__dirname, "../base-components/src/"))
        }
      },
    ],
  ],
};
