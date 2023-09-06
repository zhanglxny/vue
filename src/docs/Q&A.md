# Develop Q&A
Q：项目启动后，找不到模块，eg: `Cannot find module 'vue-router'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option`

A：在 `tsconfig.app.json` 的 `compilerOptions` 中添加 `"moduleResolution": "node"`, 然后再vscode的命令中启动 `Volar: restart vue server`，或者重启编辑器。

---

