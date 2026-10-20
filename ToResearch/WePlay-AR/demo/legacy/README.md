# WePlay-AR 玩法重构 demo

双词卧底实验局 · 信息差、投票与结算交友。

运行：在此 demo 目录执行 `python3 -m http.server 4190 --bind 127.0.0.1`，打开 `http://127.0.0.1:4190/`。或使用 ToResearch/demo-lab 的统一启动器。

测试：`node test.mjs`。

资源有双词/双卧底词长度校验提示、卧底揭词和语音房入口；REA 确认结算后的加好友动画类。

双词/双卧底的角色配置存在语言歧义；本 demo 明确选择一位卧底持双词、其余同词。六人、12字符、投票和单向交友候选选择均为本地模型。

这是本地模拟，不执行 APK、不连接原后端、没有真实 RTC/曲库/账号。详细逐项归因见上级 ANALYSIS.md 和 analysis/feature-ledger.json。
