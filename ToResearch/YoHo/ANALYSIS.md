# YoHo 核心语音房 / 社交 / 小游戏静态分析

分析日期：2026-10-13。对象：`com.voicechat.live.group` 5.48.40 (4630)。SHA-256：`2d26edd454bd9bd7d39d9df94750aa7cc714c0d6c3e445ebbde10c9d1ffc14c8`。保留下载来源与完整归档，见 [APK-INFO.md](APK-INFO.md)。本报告只针对用户选定当前包，未混用 source-comparison 旧版。

## 结果与覆盖

重点玩法：**家族排名 PK 与社交组织**。包内文字明确存在自主家族、召集房间、家族周排行 PK 与败方20%贡献转移。另一组拍卖文案将礼物竞价与守护关系、期限连接。语音房与家族的联系有具体召集文案支持。小游戏候选有战斗游戏/Battle Royale/Ludo，但此轮不将名字当成游戏完整规则。

语音房、社交、小游戏均完成一轮包体静态证据盘点，覆盖为 **partial**；没有启动 APK，没有 Android 真机/模拟器、真实账户、后台流量、RTC 或付款验证。不能据此宣称恢复全部原App或所有核心玩法。此轮交付一个较深入的差异玩法 demo，基础登录、私聊、关注等不在重构范围。

## REA 与辅助证据

- 真正调用 REA 6.4.0 `inspect_android_package`，完整 Evidence 在 [analysis/rea-package.json](analysis/rea-package.json)，ID `ev_b5330ac3b2215d43ddc0b4a4a12016793435d82747797fafe2bd47408ae51b50`；JADX headless 0.7.1。解析类数 40054、资源数 8965。Manifest 中麦克风声明只说明申请能力。
- 本次 `inspect_android_class` 120000ms provider_timeout，未得到方法或字段恢复。原始超时及 partial_observation 保留在 [analysis/rea-feature-class.json](analysis/rea-feature-class.json)。若为 timeout，不作为反编译成功的证据。
- [analysis/archive-inventory.json](analysis/archive-inventory.json) 保存 ZIP 成员与 CRC/大小；[analysis/feature-candidates.json](analysis/feature-candidates.json) 保存格式感知解析 DEX string_ids、Android string-pool 的词汇候选。候选匹配不是完整语义或功能启用证明。
- [analysis/feature-ledger.json](analysis/feature-ledger.json) 保存发现分类、精确 string pool offset/index 和覆盖；分析脚本存于同目录。Sxx 是本地辅助证据标签，不冒充 REA Evidence ID。
- 对所有语言资源池做 lexical 检查，报告选择可读英文规则；未解析全部 resource ID→语言配置→布局调用映射。字符串索引可重复定位，不等于资源 ID。

## 包体直接证据

以下直接观察只表示该文本实际存在于包体；文本描述的业务规则仍待代码/运行/后台交叉验证。

| 标签 | 领域 | 定位 | 包内原文 |
|---|---|---|---|
| S01 | voice | resources.arsc @12 / string 9017 | After mic seats are closed, users cannot apply for a mic |
| S02 | voice | resources.arsc @12 / string 9043 | All family members will receive your call and have direct access to your room(There is only one chance to summon a day ~) |
| S03 | voice | resources.arsc @12 / string 9044 | All family members will receive your reminder and join the room. (Number of daily reminders left: %1$s/%2$s) |
| S04 | voice | resources.arsc @12 / string 9066 | Allow PK invitations from other rooms |
| S05 | voice | resources.arsc @12 / string 9196 | Battle between red and blue, with the higher PK value owner being the winner! |
| S06 | social | resources.arsc @12 / string 8933 | A family is an organization created by users on their own. Users apply to join the family and work together with like-minded partners to keep the family growing. |
| S07 | social | resources.arsc @12 / string 9022 | After the auction starts, send gifts to the auctor to bid |
| S08 | social | resources.arsc @12 / string 9112 | Approach 2: form the guardianship through bidding in an auction venue (the guardianship type and its duration are decided by auctors). |
| S09 | social | resources.arsc @12 / string 9522 | Confrim to send forward a Ranking PK? After %s hours since the PK starts, system will compare both Families' weekly rankings. The lower-ranked Family will lose 20%% of own weekly contribution points to the higher-ranked Family. |
| S10 | social | resources.arsc @12 / string 11995 | The Family has accepted your Ranking PK invitation. After %s hours, system will compare both Families' weekly rankings. The lower-ranked Family will lose 20%% of own weekly contribution points to the higher-ranked Family. Invite your Family members to help climb the ranks! |
| S11 | social | resources.arsc @12 / string 12840 | Your Family has received a Ranking PK invitation. After %s hours since PK starts, system will compare both Families' weekly rankings. The lower-ranked Family will lose 20%% of own weekly contribution points to the higher-ranked Family. Do you accept to start PK? |
| S12 | game | resources.arsc @12 / string 8400 | %s Battle Royale |
| S13 | game | resources.arsc @12 / string 9195 | Battle Royale |
| S14 | game | resources.arsc @12 / string 9197 | Battle games |
| S15 | game | resources.arsc @12 / string 10597 | Join the Ludo game. |
| S16 | game | resources.arsc @12 / string 10748 | Ludo |
| S17 | game | resources.arsc @12 / string 10749 | Ludo Newbie Reward |
| S18 | game | resources.arsc @12 / string 10750 | Ludo return package |
| S19 | game | resources.arsc @12 / string 12770 | You may purchase game equipments at the Ludo mall. |

功能类 descriptor 的辅助观察见 ledger。这些类名存在可支持客户端模块候选，不能据此认定原算法、协议或网络服务恢复。

## 推导

包内文字明确存在自主家族、召集房间、家族周排行 PK 与败方20%贡献转移。另一组拍卖文案将礼物竞价与守护关系、期限连接。语音房与家族的联系有具体召集文案支持。小游戏候选有战斗游戏/Battle Royale/Ludo，但此轮不将名字当成游戏完整规则。

这些是将相关文案与资源/类候选聚合得到的客户端功能设计推导；不保证在线入口开放、地区开关一致，也不保证文案与当前后台实现一致。

## 推断

特色玩法将语音房参与、礼物/贡献、排行榜或关系成长绑定，可能用于激励持续房间参与及社交组织活动。此为产品动机推断，包体未提供用户指标或因果证据。原 RTC SDK/网络库名字不足以证明实际通话架构或质量。

## 未知项

周排名计算是否单纯依赖贡献、挑战小时占位符配置、20%取整/上限/异常处理、守护拍卖有效期与角色权限、Battle Royale 输赢规则及在线可用性。 原始后台、反作弊、服务端权限、跨设备状态、并发竞态、余额与经济模型、动态下载内容均未知。镜像发行签名未做发布者真实性验证。XAPK 的ABI与density split 未由 JADX 桥验证；原归档完整保留。

## 重构 demo 与规则归属

[demo/index.html](demo/index.html) · [demo/README.md](demo/README.md)

接受家族挑战 → 双方累积周贡献 → 比较排名 → 20%转移，显示守恒；排行榜按贡献排序是本地决策。 它是单机本地模型，所有礼物/点数都是模拟，没有真实资产。界面显式标注直接文本证据与重构参数。模型 `model.mjs` 与 `ui.mjs` 分开；「载入固定演示场景」提供确定性输入，「重置」恢复初始状态。没有宣称示例UI是原App截图。

证据支持的是功能主题与部分文字规则；时间、点数、阈值、平局、分配、淘汰触发、缺失权限等仅在模型中补齐。不能把这些本地补齐细节写回为包体发现。

## 验证与未验证

`node ToResearch/YoHo/demo/model.test.mjs` 已通过：状态输入不被修改，及玩法专属结算/权限状态限制。测试只建立本地重构规则，不建立原App行为。

浏览器验证记录与桌面/手机截图保存在 `demo/browser-check.json`、`demo/desktop.png`、`demo/mobile.png`。本地浏览器不等于安卓或原服务验收。未测真实语音、在线多人、第三方授权、付款、区域灰度与人工听感。

聚焦类名搜索的超时/失败同样保存在 `analysis/rea-feature-search.json`，不作成功结果解读。

本地 Chrome 验证：1280×900 桌面与390×844移动视口均运行固定场景、推进与重置；零pageerror、无横向溢出。截图已由本次代理检查可读性，未经用户视觉验收。它不是原APK真机或人工听感测试。
