#!/usr/bin/env node
const os = require("os");
const fs = require("fs");

const marked = require("marked");
const globby = require("globby");
const TerminalRenderer = require("marked-terminal");
const { Command } = require("commander");

const packageInfo = require("../package.json");

const program = new Command();
marked.setOptions({
  // Define custom renderer
  renderer: new TerminalRenderer(),
});
// 在用户根目录下创建一个文件夹用于记录日志
const HOMEDIR = os.homedir();
const FILEDIR = `${HOMEDIR}/.carenotes`;
// 如果文件不存在 创建一个.carenotes文件夹
if (!fs.existsSync(FILEDIR)) {
  fs.mkdirSync(FILEDIR);
}

const findMdByKeyword = async (keyword) => {
  const paths = await globby(FILEDIR, {
    expandDirectories: {
      extensions: ["md"],
    },
  });
  const filteredPaths = paths.filter((p) => {
    const filename = p.replace(`${FILEDIR}/`, "");
    return filename.includes(keyword) || keyword.includes(filename);
  });
  return filteredPaths;
};

// 接收命令行参数
program
  .version(packageInfo.version)
  .arguments("[keyword]")
  .action(async (keyword) => {
    if (!keyword) {
      return;
    }
    // keyword 输入值
    const result = await findMdByKeyword(keyword);
    if (result.length) {
      result.forEach((file, index) => {
        const fileData = fs.readFileSync(file, "utf8");
        console.log("\n");
        console.log(marked(fileData));
        if (index + 1 !== result.length) {
          console.log(
            "========================================================================================"
          );
        }
      });
    } else {
      console.log("暂时没有相关记录哦~\nNo related records temporarily~");
    }
  });

program.name("care").usage("[input what you want to find]");
program.parse(process.argv);
