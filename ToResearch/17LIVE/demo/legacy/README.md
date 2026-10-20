# 17LIVE 本地机制重构

PK竞争 × 双房间共斗任务

直接证据：礼物点与PK点1:1、双方共同完成任务赚额外点、投降终止任务（resources.arsc文案）。每侧3次任务与30奖励点为本地重构选择。

运行：从本目录执行 `python3 -m http.server 8765`，浏览器打开 http://localhost:8765。模型规则见 model.mjs，验证见 model.test.mjs。无需安装依赖。所有演示资产与数值是本地设计；未调用原始服务。
