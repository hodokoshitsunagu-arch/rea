# Pococha 本地机制重构

Family应援 × Rank Meter休息保护

直接证据：RankMeter protobuf；10天不观看自动移出Family；Rest Day与Freeze Pass互斥、休息不改Rank。应援+25及100/50阈值是本地示例，非原始应援计算公式。

运行：从本目录执行 `python3 -m http.server 8765`，浏览器打开 http://localhost:8765。模型规则见 model.mjs，验证见 model.test.mjs。无需安装依赖。所有演示资产与数值是本地设计；未调用原始服务。
