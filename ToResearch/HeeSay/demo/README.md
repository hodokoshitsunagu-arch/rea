# HeeSay 全机制实验室

入口 `index.html` 支持 `?feature=ID` / `?module=ID`。包含14个目录ID。请由ToResearch统一HTTP服务器加载；纯Reducer不调用网络。

运行：`node --test features.test.mjs`。界面/模型分离，规则定义和纯函数由 `model.mjs` 导出。`modules.json` 提供逐项浏览器步骤。

旧版本完整保留于 `legacy/`，旧相对模块依赖仍在同一目录可运行。原截图与测试结果只属于旧版本，不能作为新版本验收。

所有未知常量在每项界面明确标为本地参数。C级协议、入场流程、奖励事件只研究已知边界，不能当作完整原玩法。新覆盖明细见 `../RECONSTRUCTION.md` 与 `../analysis/reconstruction-coverage.json`。
