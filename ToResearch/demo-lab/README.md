# 本地特色机制实验室

15 个 App、196 个稳定目录 ID。选择 App 后用机制选择器切换；支持 `/<App>/?feature=ID` 深链。每项提供具名动作、状态、事件轨迹、结果及重置，源规则与本地参数分别显示。原单机制 demo 保留在 `/<App>/legacy/`。

在 REA 项目根运行：

```sh
node ToResearch/demo-lab/server.mjs
```

打开 http://127.0.0.1:4193/ 。端口可通过 `RESEARCH_DEMO_PORT=4194` 改变。服务绑定127.0.0.1，固定白名单只提供15应用demo目录内HTML/CSS/JS/图片/JSON，不提供APK、报告或原始REA Evidence。不需要npm安装、外部API或真实账号；停止服务用Ctrl-C。直接file打开JS模块可能被浏览器CORS阻止。

完整规则测试与ID覆盖验证：

```sh
node ToResearch/demo-lab/test.mjs
node ToResearch/demo-lab/verify-scopes.mjs
```

各 App 还可独立运行 `node --test ToResearch/<App>/demo/features.test.mjs`。每 App 的 `modules.json` 枚举模块、局限和可重复的浏览器动作；`verification.json` 记录受控桌面/手机交互结果，`verification/` 保存手机截图。旧版验证记录在legacy，不表示新目录覆盖。

包体说明与原始分析见各App的 `APK-INFO.md` / `ANALYSIS.md`；特色目录与来源见 `FEATURE-CATALOG.md`；逐项实现、局限见 `RECONSTRUCTION.md` 和 `analysis/reconstruction-coverage.json`。总范围固定在上级 `RECONSTRUCTION-SCOPE.json`。

这些是本地交互规则重构。模拟角色、配置、经济、时间、题库、随机与服务回应不代表原后台。C级条目仅展示有依据的局部契约；实体卡仅资格/设计预览。浏览器和Node测试验证本地实现，不证明原Android真机、真实多人同步、RTC、人耳体验、付费或线上运营行为。

浏览器验证可重复运行：设置 `REA_DEMO_PLAYWRIGHT` 为现有 `playwright-core/index.mjs` 的绝对路径，再运行 `node ToResearch/demo-lab/verify-browser.mjs`（可在末尾指定App名）。macOS默认Chrome路径；其他安装位置用 `REA_DEMO_CHROME`。脚本不安装依赖，服务需已启动；每项逐动作验证状态变化、重置、页面错误与横向溢出。

首页机制表格从固定范围、各App机制目录和实现模块生成：

```sh
node ToResearch/demo-lab/build-index.mjs
```

表格提供App、编号、标题、独特性、核心玩法和直达Demo入口，可按App和关键词筛选。手机上表格容器支持左右滑动。内容与链接的桌面/手机检查记录在 `table-verification.json`。
