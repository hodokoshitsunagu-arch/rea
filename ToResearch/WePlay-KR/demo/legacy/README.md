# WePlay-KR 玩法重构 demo

抢麦排位 · 单人练习到下一题正式对战。

运行：在此 demo 目录执行 `python3 -m http.server 4190 --bind 127.0.0.1`，打开 `http://127.0.0.1:4190/`。或使用 ToResearch/demo-lab 的统一启动器。

测试：`node test.mjs`。

韩语与英语资源直接写明：单人不计战绩/排位；中途有人加入，从下一题正式对战。REA 模型包含当前演唱者、抢麦次数、题目和积分字段。

本地座位、原创题句、人工成功/失败和每题10分是重构参数；语音识别与服务器评分未恢复。

这是本地模拟，不执行 APK、不连接原后端、没有真实 RTC/曲库/账号。详细逐项归因见上级 ANALYSIS.md 和 analysis/feature-ledger.json。
