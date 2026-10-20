# MICO 核心语音房 / 社交 / 小游戏静态分析

分析日期：2026-10-13。对象：`com.mico` 9.1.5.0 (131380)。SHA-256：`305aa51527f6e73b298a6bf17c554ea96b9a0514a7e33a36e629bdee9a539181`。保留下载来源与完整归档，见 [APK-INFO.md](APK-INFO.md)。本报告只针对用户选定当前包，未混用 source-comparison 旧版。

## 结果与覆盖

重点玩法：**武器团队 PK：双倍、淘汰、复活**。团队 PK 资源明确显示武器等级5会让礼物产生双倍PK分；淘汰限制麦位切换，存在瞬时复活道具。社交有 Couple、家族贡献以及拉黑时解除情侣关系的说明。Ludo、车辆猜测是小游戏候选，但本轮不恢复完整规则。MICO 此包为全球包，MENA/东南亚具体开关未验证。

语音房、社交、小游戏均完成一轮包体静态证据盘点，覆盖为 **partial**；没有启动 APK，没有 Android 真机/模拟器、真实账户、后台流量、RTC 或付款验证。不能据此宣称恢复全部原App或所有核心玩法。此轮交付一个较深入的差异玩法 demo，基础登录、私聊、关注等不在重构范围。

## REA 与辅助证据

- 真正调用 REA 6.4.0 `inspect_android_package`，完整 Evidence 在 [analysis/rea-package.json](analysis/rea-package.json)，ID `ev_c0beb4b9f51620bf8cffb7f4d5143b8bf8d91e73dc379bcdc034167e12859275`；JADX headless 0.7.1。解析类数 46185、资源数 8139。Manifest 中麦克风声明只说明申请能力。
- 本次 `inspect_android_class` 120000ms provider_timeout，未得到方法或字段恢复。原始超时及 partial_observation 保留在 [analysis/rea-feature-class.json](analysis/rea-feature-class.json)。若为 timeout，不作为反编译成功的证据。
- [analysis/archive-inventory.json](analysis/archive-inventory.json) 保存 ZIP 成员与 CRC/大小；[analysis/feature-candidates.json](analysis/feature-candidates.json) 保存格式感知解析 DEX string_ids、Android string-pool 的词汇候选。候选匹配不是完整语义或功能启用证明。
- [analysis/feature-ledger.json](analysis/feature-ledger.json) 保存发现分类、精确 string pool offset/index 和覆盖；分析脚本存于同目录。Sxx 是本地辅助证据标签，不冒充 REA Evidence ID。
- 对所有语言资源池做 lexical 检查，报告选择可读英文规则；未解析全部 resource ID→语言配置→布局调用映射。字符串索引可重复定位，不等于资源 ID。

## 包体直接证据

以下直接观察只表示该文本实际存在于包体；文本描述的业务规则仍待代码/运行/后台交叉验证。

| 标签 | 领域 | 定位 | 包内原文 |
|---|---|---|---|
| S01 | voice | resources.arsc @12 / string 8259 | Administrators can invite viewers to the mic seat |
| S02 | voice | resources.arsc @12 / string 9442 | If you leave the mic when elimination is triggered, you cannot take the mic again in this team battle. Are you sure you want to leave the mic? |
| S03 | voice | resources.arsc @12 / string 9742 | Mic seat mode |
| S04 | voice | resources.arsc @12 / string 10051 | PK is not supported by the current mic seat mode |
| S05 | voice | resources.arsc @12 / string 10763 | Switching the mic seat mode may remove some users from mic seats. Are you sure you want to switch the mode? |
| S06 | voice | resources.arsc @12 / string 10977 | The room owner has switched the mic seat mode. The mic seat status has changed. |
| S07 | voice | resources.arsc @12 / string 11046 | This mic seat mode is not supported when the Room Owner Couple Seat is enabled. |
| S08 | voice | resources.arsc @12 / string 11047 | This mic seat mode is not supported when the User Couple Seat is enabled. |
| S09 | social | resources.arsc @12 / string 8495 | By blacklisting this user, you will automatically unfollow them and terminate your Couple relationship. You will no longer receive their messages and they can no longer follow you or comment or like your posts. Are you sure you want to block this user? |
| S10 | social | resources.arsc @12 / string 8764 | Couple Leaderboard |
| S11 | social | resources.arsc @12 / string 8883 | Do you confirm to leave this family? Your contribution points for this family will be cleared after you leave. |
| S12 | game | resources.arsc @12 / string 7725 | %s has been eliminated! Send a Revival Gift to revive them instantly so that they can continue earning PK points. |
| S13 | game | resources.arsc @12 / string 8362 | Are you sure you want to quit? If you quit, your individual PK points earned in the team battle will be reset |
| S14 | game | resources.arsc @12 / string 8467 | Blue Team has upgraded their weapon to Lv. 5, during which sending gifts will increase 2x PK points |
| S15 | game | resources.arsc @12 / string 9320 | Guess the vehicle |
| S16 | game | resources.arsc @12 / string 9445 | If you switch teams during a team battle, your points will be recalculated. Are you sure you want to switch teams? |
| S17 | game | resources.arsc @12 / string 9568 | LUDO game |
| S18 | game | resources.arsc @12 / string 10312 | Red Team has upgraded their weapon to Lv. 5, during which sending gifts will increase 2x PK points |
| S19 | game | resources.arsc @12 / string 10535 | Send this to an eliminated player in PK team battle to revive them instantly |

功能类 descriptor 的辅助观察见 ledger。这些类名存在可支持客户端模块候选，不能据此认定原算法、协议或网络服务恢复。

## 推导

团队 PK 资源明确显示武器等级5会让礼物产生双倍PK分；淘汰限制麦位切换，存在瞬时复活道具。社交有 Couple、家族贡献以及拉黑时解除情侣关系的说明。Ludo、车辆猜测是小游戏候选，但本轮不恢复完整规则。MICO 此包为全球包，MENA/东南亚具体开关未验证。

这些是将相关文案与资源/类候选聚合得到的客户端功能设计推导；不保证在线入口开放、地区开关一致，也不保证文案与当前后台实现一致。

## 推断

特色玩法将语音房参与、礼物/贡献、排行榜或关系成长绑定，可能用于激励持续房间参与及社交组织活动。此为产品动机推断，包体未提供用户指标或因果证据。原 RTC SDK/网络库名字不足以证明实际通话架构或质量。

## 未知项

武器升级阈值与持续时间、淘汰触发公式、复活道具经济、团队切换后的积分重算公式、服务端裁决、区域小游戏开关、原始语音延迟和麦位同步。 原始后台、反作弊、服务端权限、跨设备状态、并发竞态、余额与经济模型、动态下载内容均未知。镜像发行签名未做发布者真实性验证。XAPK 的ABI与density split 未由 JADX 桥验证；原归档完整保留。

## 重构 demo 与规则归属

[demo/index.html](demo/index.html) · [demo/README.md](demo/README.md)

武器升级到5 → 礼物双倍积分 → 固定场景淘汰 → 被淘汰玩家无法贡献 → 复活恢复；淘汰后的贡献限制是本地游戏规则。 它是单机本地模型，所有礼物/点数都是模拟，没有真实资产。界面显式标注直接文本证据与重构参数。模型 `model.mjs` 与 `ui.mjs` 分开；「载入固定演示场景」提供确定性输入，「重置」恢复初始状态。没有宣称示例UI是原App截图。

证据支持的是功能主题与部分文字规则；时间、点数、阈值、平局、分配、淘汰触发、缺失权限等仅在模型中补齐。不能把这些本地补齐细节写回为包体发现。

## 验证与未验证

`node ToResearch/MICO/demo/model.test.mjs` 已通过：状态输入不被修改，及玩法专属结算/权限状态限制。测试只建立本地重构规则，不建立原App行为。

浏览器验证记录与桌面/手机截图保存在 `demo/browser-check.json`、`demo/desktop.png`、`demo/mobile.png`。本地浏览器不等于安卓或原服务验收。未测真实语音、在线多人、第三方授权、付款、区域灰度与人工听感。

聚焦类名搜索的超时/失败同样保存在 `analysis/rea-feature-search.json`，不作成功结果解读。

本地 Chrome 验证：1280×900 桌面与390×844移动视口均运行固定场景、推进与重置；零pageerror、无横向溢出。截图已由本次代理检查可读性，未经用户视觉验收。它不是原APK真机或人工听感测试。
