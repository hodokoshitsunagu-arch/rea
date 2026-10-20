# SUGO 可运行玩法研究 demo

从此目录执行 `python3 -m http.server 8000`，浏览器打开 http://127.0.0.1:8000 。测试：`node --test model.test.mjs`。

纯本地、无依赖、无联网。`model.mjs`负责规则，`app.mjs`负责界面。页面明确区分包体规则和重构选择。人物、场景、棋盘坐标、点击产生的模拟礼物及时间均为研究者选择，不是运行证据。详细证据与未知项在上级 `ANALYSIS.md`。
