# Yalla 核心语音房 / 社交 / 小游戏静态分析

分析日期：2026-10-13。对象：`com.weieyu.yalla` 3.7.0 (30702)。SHA-256：`f14f498c00d06367e92cb3b54a830f6986601d2f89a71105887e752bb7623303`。保留下载来源与完整归档，见 [APK-INFO.md](APK-INFO.md)。本报告只针对用户选定当前包，未混用 source-comparison 旧版。

## 结果与覆盖

重点玩法：**Speed Battle 团队贡献与宝箱**。Speed Battle 的文案明确将游戏礼物、贡献、宝箱和胜队 TOP 1–4 连接起来。另有 Ludo/Carrom 大厅、2/4人资源和情侣页面资源；这些只能证实客户端候选功能，不能声称实际房间均开启或恢复棋牌完整规则。

语音房、社交、小游戏均完成一轮包体静态证据盘点，覆盖为 **partial**；没有启动 APK，没有 Android 真机/模拟器、真实账户、后台流量、RTC 或付款验证。不能据此宣称恢复全部原App或所有核心玩法。此轮交付一个较深入的差异玩法 demo，基础登录、私聊、关注等不在重构范围。

## REA 与辅助证据

- 真正调用 REA 6.4.0 `inspect_android_package`，完整 Evidence 在 [analysis/rea-package.json](analysis/rea-package.json)，ID `ev_dc7ee38426bf6f05688eb7278920e380c10713d920f713a22133dfd5a3472338`；JADX headless 0.7.1。解析类数 39163、资源数 6771。Manifest 中麦克风声明只说明申请能力。
- 本次 `inspect_android_class` 120000ms provider_timeout，未得到方法或字段恢复。原始超时及 partial_observation 保留在 [analysis/rea-feature-class.json](analysis/rea-feature-class.json)。若为 timeout，不作为反编译成功的证据。
- [analysis/archive-inventory.json](analysis/archive-inventory.json) 保存 ZIP 成员与 CRC/大小；[analysis/feature-candidates.json](analysis/feature-candidates.json) 保存格式感知解析 DEX string_ids、Android string-pool 的词汇候选。候选匹配不是完整语义或功能启用证明。
- [analysis/feature-ledger.json](analysis/feature-ledger.json) 保存发现分类、精确 string pool offset/index 和覆盖；分析脚本存于同目录。Sxx 是本地辅助证据标签，不冒充 REA Evidence ID。
- 对所有语言资源池做 lexical 检查，报告选择可读英文规则；未解析全部 resource ID→语言配置→布局调用映射。字符串索引可重复定位，不等于资源 ID。

## 包体直接证据

以下直接观察只表示该文本实际存在于包体；文本描述的业务规则仍待代码/运行/后台交叉验证。

| 标签 | 领域 | 定位 | 包内原文 |
|---|---|---|---|
| S01 | voice | resources.arsc @12 / string 5990 | Allow Admins to Manage Speed Battle |
| S02 | voice | resources.arsc @12 / string 7988 | Room PK Ended |
| S03 | voice | resources.arsc @12 / string 7989 | Room PK Started |
| S04 | social | resources.arsc @12 / string 6722 | First Crush |
| S05 | social | resources.arsc @12 / string 7328 | Mystery Couple |
| S06 | social | resources.arsc @12 / string 7329 | Mystery Couple (You) |
| S07 | game | resources.arsc @12 / string 5672 | 1. Only the rooms that reach Level 10 have treasure chests. |
| S08 | game | resources.arsc @12 / string 5777 | 3. When the progress bar of the chest key is filled up, the treasure chest will be opened. |
| S09 | game | resources.arsc @12 / string 6199 | Carrom |
| S10 | game | resources.arsc @12 / string 6984 | If you win the game, you will have a chance to share the following treasure chest rewards. The more game gifts you give, the more abundant the treasure chest rewards will be. |
| S11 | game | resources.arsc @12 / string 7196 | Ludo |
| S12 | game | resources.arsc @12 / string 9209 | You can earn points by giving game gifts, and accumulate points for the treasure chest. The more intense the game, the more points you will get. |
| S13 | game | resources.arsc @12 / string 9212 | You can get points and add points to the treasure chest by giving game gifts. The treasure chest has a probability of increasing the points every certain time, and the TOP 1-4 in the winning team can share the points. |
| S14 | game | resources.arsc @2075652 / string 5162 | game_dialog_common_bg_carrom |

功能类 descriptor 的辅助观察见 ledger。这些类名存在可支持客户端模块候选，不能据此认定原算法、协议或网络服务恢复。

## 推导

Speed Battle 的文案明确将游戏礼物、贡献、宝箱和胜队 TOP 1–4 连接起来。另有 Ludo/Carrom 大厅、2/4人资源和情侣页面资源；这些只能证实客户端候选功能，不能声称实际房间均开启或恢复棋牌完整规则。

这些是将相关文案与资源/类候选聚合得到的客户端功能设计推导；不保证在线入口开放、地区开关一致，也不保证文案与当前后台实现一致。

## 推断

特色玩法将语音房参与、礼物/贡献、排行榜或关系成长绑定，可能用于激励持续房间参与及社交组织活动。此为产品动机推断，包体未提供用户指标或因果证据。原 RTC SDK/网络库名字不足以证明实际通话架构或质量。

## 未知项

宝箱实际概率、奖品分配公式、Speed Battle 完整状态机、房间等级与资格的服务端执行、Ludo/Carrom 原始回合协议。 原始后台、反作弊、服务端权限、跨设备状态、并发竞态、余额与经济模型、动态下载内容均未知。镜像发行签名未做发布者真实性验证。XAPK 的ABI与density split 未由 JADX 桥验证；原归档完整保留。

## 重构 demo 与规则归属

[demo/index.html](demo/index.html) · [demo/README.md](demo/README.md)

贡献礼物 → 红蓝队积分 → 定期宝箱增长 → 胜队贡献者分享；未重构抽奖或真实奖品。 它是单机本地模型，所有礼物/点数都是模拟，没有真实资产。界面显式标注直接文本证据与重构参数。模型 `model.mjs` 与 `ui.mjs` 分开；「载入固定演示场景」提供确定性输入，「重置」恢复初始状态。没有宣称示例UI是原App截图。

证据支持的是功能主题与部分文字规则；时间、点数、阈值、平局、分配、淘汰触发、缺失权限等仅在模型中补齐。不能把这些本地补齐细节写回为包体发现。

## 验证与未验证

`node ToResearch/Yalla/demo/model.test.mjs` 已通过：状态输入不被修改，及玩法专属结算/权限状态限制。测试只建立本地重构规则，不建立原App行为。

浏览器验证记录与桌面/手机截图保存在 `demo/browser-check.json`、`demo/desktop.png`、`demo/mobile.png`。本地浏览器不等于安卓或原服务验收。未测真实语音、在线多人、第三方授权、付款、区域灰度与人工听感。

## 聚焦类名元数据

REA `search_android_classes` 成功，Evidence `ev_2df9d9151c549a8c4b61d59af00816859870b3c9654019b69e48439ea6d4ae96`，完整结果见 [analysis/rea-feature-search.json](analysis/rea-feature-search.json)。在 39163 个解析类名中匹配 13 个候选，仅说明模块命名存在；不是方法反编译或运行验证。

本地 Chrome 验证：1280×900 桌面与390×844移动视口均运行固定场景、推进与重置；零pageerror、无横向溢出。截图已由本次代理检查可读性，未经用户视觉验收。它不是原APK真机或人工听感测试。
