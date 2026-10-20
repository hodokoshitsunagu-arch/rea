# Mirrativ 本地核心交互重构

覆盖全部 8 个目录ID。入口 `demo/index.html?feature=ID`，功能选择器可访问每项。旧demo完整移动至 `demo/legacy/`，其原model、测试与相对引用保持同目录。

直接证据与源规则继续以 FEATURE-CATALOG.md / analysis/feature-catalog.json 为准；没有修改原报告或APK。`demo/model.mjs`导出definitions、initialState与纯reduce，每项有专属角色、状态、动作、资源及拒绝边界。源文案不完整的数量、期限、题库和算法在params显式配置，不声称原公式。Evidence C仅局部字段契约实验。Mirrativ实体卡仅资格与头像设计预览，不发行卡、不提供金融服务。

所有账号、媒体、支付、广告、随机奖池、审核和后台为本地模拟。Node测试验证本地逻辑，不能证明原服务或真实设备行为。参数对象可在UI调整，数组/对象用JSON。

运行 `node --test demo/features.test.mjs`。使用既定本地server `/Mirrativ/`。覆盖明细见 analysis/reconstruction-coverage.json；可枚举模块与浏览器步骤见 demo/modules.json。

验证：本App新模型 17 项Node测试通过；旧model.test.mjs归档后仍通过。每个功能ID均验证专属正常闭环、关键资格/重复/异常边界、输入不可变与重置。浏览器由根代理统一串行验证，本文不声称已完成真实设备或原服务验收。
