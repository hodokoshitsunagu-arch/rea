# TopTop 核心玩法重构

在仓库根目录执行 `python3 -m http.server 8765 --bind 127.0.0.1 --directory ToResearch/TopTop/demo`，打开 `http://localhost:8765/`。ES 模块需要 HTTP，不建议 file://。运行 `node ToResearch/TopTop/demo/model.test.mjs` 检查模型。

点击「载入固定演示场景」，继续推进回合/出价/贡献，观察结算和状态限制。点击「重置」恢复同一初始条件。模型 `model.mjs` 与 UI `ui.mjs` 分离。

这里只重构报告中的特色玩法。RTC、原服务器、经济、支付、匹配、真实多人同步及 APK 运行没有恢复。界面直接显示证据来源以及本地参数；数字、时间、概率与未证实规则均为重构决策。
