# WePlay-JP 玩法重构 demo

绘画接力 · 上一棒可见，整条链结算揭晓。

运行：在此 demo 目录执行 `python3 -m http.server 4190 --bind 127.0.0.1`，打开 `http://127.0.0.1:4190/`。或使用 ToResearch/demo-lab 的统一启动器。

测试：`node test.mjs`。

包体资源列出选择、绘画、猜测、展示、点赞与换房限制；REA 模型保留 prevWord、prevImgData、chainNum 与投票计数。

四座位、词卡、交替轮序和局内可见投影是本地重构；服务端配对与得分算法未知。

这是本地模拟，不执行 APK、不连接原后端、没有真实 RTC/曲库/账号。详细逐项归因见上级 ANALYSIS.md 和 analysis/feature-ledger.json。
