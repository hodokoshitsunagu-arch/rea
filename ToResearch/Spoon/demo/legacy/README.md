# Spoon 本地机制重构

Lucky Box · 把打赏变成选择挑战

直接证据：文案可选择最多5盒、未选中仅得10%（resource-evidence.json string:5790）；boxCount / amount / message（REA类证据）。固定5盒、答案3、100 spoons、取消策略是本地重构选择。

运行：从本目录执行 `python3 -m http.server 8765`，浏览器打开 http://localhost:8765。模型规则见 model.mjs，验证见 model.test.mjs。无需安装依赖。所有演示资产与数值是本地设计；未调用原始服务。
