// 自定义codesandbox项目的文件
// 比如修改package.json，增加一些依赖

export default function modifyCodesandbox(
  files: {
    [file: string]: string;
  },
  demoMeta
): { [file: string]: string } {
  files["src/bootstrap.tsx"] =
    `import "@alicloud/console-components/dist/wind.css";\n` +
    files["src/bootstrap.tsx"];

  const pkgJson = JSON.parse(files["package.json"]);
  pkgJson.dependencies["moment"] = "latest";
  pkgJson.name = demoMeta.title ?? "demo";
  files["package.json"] = JSON.stringify(pkgJson, null, 2);
  return files;
}
