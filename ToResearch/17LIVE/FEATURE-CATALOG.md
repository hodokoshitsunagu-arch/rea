# 17LIVE 独特社交 / 权益 / 游戏 / 玩法候选清单

基准：`com.machipopo.media17` / `2.253.1.0`。只分析已选包和全部提供的 splits；不启动APK、不登录、不联系原服务。本轮复用原 `ANALYSIS.md` 中的真实 REA Evidence，并补充 `analysis/feature-resource-rules.json` 的 Android ResTable key→resource ID→global string 映射。复杂 bag 明确跳过；覆盖数字见该文件。

“独特”指本应用内值得单独复刻的特色机制，不代表市场独占。**A**=反编译成员及规则文案共同支持（不等于完整执行链）；**B**=明确资源规则；**C**=结构/入口候选。资源是包体直接证据，产品流程是静态派生；动机说明属于推断。未验证原服务端、账号/地区开关、真实支付、RTC或原小游戏运行。

| ID | 特色机制 | 类别 | 证据 | 复刻准备 | 工作量 | Demo |
|---|---|---|---|---|---|---|
| L1701 | PK竞争+双边共斗任务 | 游戏 / 社交 / 玩法 | B | 可先复刻 | 中 | 已有 |
| L1702 | Army分级订阅与专属直播 | 社交 / 权益 | B | 可先复刻 | 中 | 未实现 |
| L1703 | 赠送Army30天与限制 | 社交 / 权益 | B | 可先复刻 | 低 | 未实现 |
| L1704 | Army自定义身份与表情 | 社交 / 权益 / 玩法 | B | 可先复刻 | 低 | 未实现 |
| L1705 | Army Call-in专属连线 | 权益 / 玩法 | B | 需补证据 | 中 | 未实现 |
| L1706 | Guardian独占七日竞价守护 | 权益 / 社交 / 玩法 | B | 可先复刻 | 中 | 未实现 |
| L1707 | 入场动画按身份优先级择一 | 权益 / 玩法 | B | 可先复刻 | 低 | 未实现 |
| L1708 | Lucky Bag共享保底 | 游戏 / 玩法 | B | 可先复刻 | 中 | 未实现 |
| L1709 | Random Rush集物开箱活动 | 游戏 / 社交 / 玩法 | B | 可先复刻 | 中 | 未实现 |
| L1710 | Draw & Guess直播互动 | 游戏 / 社交 | B | 需补证据 | 中 | 未实现 |
| L1711 | Quiz Game主题直播问答 | 游戏 / 社交 | B | 需补证据 | 中 | 未实现 |
| L1712 | Army贡献榜按订阅天摊分 | 权益 / 玩法 | B | 可先复刻 | 低 | 未实现 |

工作量针对本地可交互机制原型，排除真实后台/支付/音视频基础设施。“可先复刻”表示规则足以做标注重构选择的demo，并非完整还原已通过验收。已有demo仅覆盖前一轮选定机制，具体差异见原报告。

## L1701 · PK竞争+双边共斗任务

**核心循环（静态派生）：** 组队设题/时长→礼物竞争→双方共同做随机任务→双边奖励。
**机制价值（推断）：** 对抗得分与跨阵营合作在同一PK内叠加。

**包体直接事实与规则：**
- 资源：1 gift point=1 PK point；任务有评论/赞/礼物
- 时序：任务完成后礼物仍加PK点；一方投降结束共斗

**直接证据定位：**
- `analysis/resource-evidence.json`：`config.ko.apk:resources.arsc:pool:12:string:1999`，原字节offset `115122`。文案/契约：Gifting will accumulate PK Points regardless of whether it’s during a mission. / Even after the mission is completed, users can continue sending gifts to help boost your PK score and earn rewards! (1 gift point = 1 PK point)
- `analysis/resource-evidence.json`：`config.ko.apk:resources.arsc:pool:12:string:3494`，原字节offset `182206`。文案/契约：Random missions (such as comments, likes, or various gifts) will appear during the PK! / Viewers from both livestreams can work together to complete them and earn even more PK Points!
- `analysis/resource-evidence.json`：`config.ko.apk:resources.arsc:pool:12:string:4404`，原字节offset `217148`。文案/契约：The PK co-op mission has ended since the opponent has surrendered.

**未知：** 匹配、任务随机、真实奖励；胜负结算。
**建议复刻边界：** 已有双边PK任务demo；下一步选任务模板及倒计时。
**选择建议：** 可先复刻；中；现有demo：已有。

## L1702 · Army分级订阅与专属直播

**核心循环（静态派生）：** 订某主播Army→按阶级进入专属场→失效即停权益。
**机制价值（推断）：** 权益绑定主播关系与订阅rank而非全站VIP。

**包体直接事实与规则：**
- 门槛：只在对应主播直播享权益且订阅有效
- 回报：徽章、专属礼物、Front Row、弹幕；专属直播可限制rank
- 规则：一文案写level4及以上，另一%s为配置

**直接证据定位：**
- `analysis/resource-evidence.json`：`config.ko.apk:resources.arsc:pool:12:string:764`，原字节offset `68835`。文案/契约：Army perks are only available when your subscription is active.
- `analysis/resource-evidence.json`：`config.ko.apk:resources.arsc:pool:12:string:765`，原字节offset `68901`。文案/契约：Army privilege can only be enjoyed in this livestream, it doesn't work on other streamers.
- `analysis/resource-evidence.json`：`config.ko.apk:resources.arsc:pool:12:string:755`，原字节offset `68250`。文案/契约：Army exclusive livestream requires army level 4 and above.
- `analysis/resource-evidence.json`：`config.ko.apk:resources.arsc:pool:12:string:1924`，原字节offset `112551`。文案/契约：Gain access to Army-only streams. Note that some Army-only streams may be restricted by Army rank.

**未知：** 各地区/阶级矩阵、价格；4级与配置适用。
**建议复刻边界：** 频道×有效期×阶级权限表，不套统一4级到所有地区。
**选择建议：** 可先复刻；中；现有demo：未实现。

## L1703 · 赠送Army30天与限制

**核心循环（静态派生）：** 用户赠朋友Army→30天固定身份→到期结束。
**机制价值（推断）：** 代买支持关系且避免把受赠者带入自动续费。

**包体直接事实与规则：**
- 时序：赠订30天且不自动续费
- 限制：赠订不能升级

**直接证据定位：**
- `analysis/resource-evidence.json`：`config.ko.apk:resources.arsc:pool:12:string:483`，原字节offset `56639`。文案/契约：A gifted Army subscription gives your friend a 30-day membership to %s's Army and won't auto-renew.
- `analysis/resource-evidence.json`：`config.ko.apk:resources.arsc:pool:12:string:1992`，原字节offset `114835`。文案/契约：Gifted Army memberships do not auto-renew and cannot be upgraded.

**未知：** 赠送资格、重复赠送与叠加；退款。
**建议复刻边界：** 赠送资格凭证、固定到期与升级限制。
**选择建议：** 可先复刻；低；现有demo：未实现。

## L1704 · Army自定义身份与表情

**核心循环（静态派生）：** 主播自定义Army/rank命名→审核后生效→成员使用专属emoji。
**机制价值（推断）：** 组织名称和成员表达围绕主播塑造。

**包体直接事实与规则：**
- 时序：名称需批准后生效
- 门槛：Army成员可在此主播直播使用其自制emoji

**直接证据定位：**
- `analysis/resource-evidence.json`：`config.ko.apk:resources.arsc:pool:12:string:1391`，原字节offset `92998`。文案/契约：Customize your Army with a unique name. You can even name your ranks! Names will go into effect once they've been approved.
- `analysis/resource-evidence.json`：`config.ko.apk:resources.arsc:pool:12:string:761`，原字节offset `68519`。文案/契约：Army members will be able to access custom emojis created by the streamer and use them in streamer's live stream chat.

**未知：** emoji数量/审核；改名频率。
**建议复刻边界：** 组织/rank编辑审核与专属emoji门控。
**选择建议：** 可先复刻；低；现有demo：未实现。

## L1705 · Army Call-in专属连线

**核心循环（静态派生）：** Army专属直播内→实时语音/视频Call-in→选择摄像头。
**机制价值（推断）：** 订阅专属内容内还有面对面互动通道。

**包体直接事实与规则：**
- 回报：Army直播内实时语音/视频Call-in
- 规则：可选择开/关相机；另Group Calls在Army-exclusive被禁

**直接证据定位：**
- `analysis/resource-evidence.json`：`config.ko.apk:resources.arsc:pool:12:string:2377`，原字节offset `137532`。文案/契约：Introducing Army Call in! / You can now enjoy real-time voice or video calls with streamers during Army livestreams for a more interactive experience.
- `analysis/feature-resource-rules.json`：`apks/com.machipopo.media17.apk:resources.arsc:call_in_viewer_request_permission_des / 0x7f140a6b / string 8817`，原字节offset `429055`。文案/契约：Go to Settings > 17LIVE and enable microphone and camera access. When joining a call-in, you can choose whether to turn on your camera.
- `analysis/resource-evidence.json`：`config.ko.apk:resources.arsc:pool:12:string:2062`，原字节offset `117576`。文案/契约：Group Calls are disabled in Army-exclusive streams.

**未知：** Call-in与Group Call协议差异；等级、人数、主持控制。
**建议复刻边界：** 资格→申请→接入的状态原型，区分Call-in和Group Call。
**选择建议：** 需补证据；中；现有demo：未实现。

## L1706 · Guardian独占七日竞价守护

**核心循环（静态派生）：** 观众出价→最高价成唯一Guardian→他人加价抢位/本人续时。
**机制价值（推断）：** 主播关系身份具唯一性、期限和可竞争所有权。

**包体直接事实与规则：**
- 门槛：每主播同时一位Guardian
- 时序：七天；任何人可更高价竞标；本人可竞价延长
- 资源：最高价确认后消费Baby Coins；只对对应主播生效

**直接证据定位：**
- `analysis/feature-resource-rules.json`：`apks/com.machipopo.media17.apk:resources.arsc:guardian_rule_1_txt / 0x7f14118b / string 8189`，原字节offset `409953`。文案/契约：Each streamer has ONE Guardian Knight
- `analysis/feature-resource-rules.json`：`apks/com.machipopo.media17.apk:resources.arsc:guardian_rule_2_txt / 0x7f14118c / string 11999`，原字节offset `550652`。文案/契约：The Knight will be committed to guarding the beloved streamer in SEVEN days
- `analysis/feature-resource-rules.json`：`apks/com.machipopo.media17.apk:resources.arsc:guardian_rule_4_txt / 0x7f14118e / string 7017`，原字节offset `367260`。文案/契约：Anyone can offer a higher price to bid for Knight honor at any time.
- `analysis/feature-resource-rules.json`：`apks/com.machipopo.media17.apk:resources.arsc:guardian_rule_5_txt / 0x7f14118f / string 7923`，原字节offset `399632`。文案/契约：Current Knight can also bid to extend their time as Guardian Knight
- `analysis/feature-resource-rules.json`：`apks/com.machipopo.media17.apk:resources.arsc:app_containers_Guardian_consume_reminder / 0x7f1406a9 / string 9152`，原字节offset `447934`。文案/契约：If you tap "Bid" and you are the highest bidder, the corresponding amount of Baby Coins will be consumed.

**未知：** 被抢退款、续期叠加；竞价最小增幅。
**建议复刻边界：** 本地竞价、所有者替换、七日有效期，不接支付。
**选择建议：** 可先复刻；中；现有demo：未实现。

## L1707 · 入场动画按身份优先级择一

**核心循环（静态派生）：** 用户排序Army/Guardian/Premium动画→进房→播放最高适用者。
**机制价值（推断）：** 多种权益冲突有显式顺序且按当前房主资格判断。

**包体直接事实与规则：**
- 规则：可开关并拖拽排序；多个打开只播最高匹配动画

**直接证据定位：**
- `analysis/resource-evidence.json`：`config.ko.apk:resources.arsc:pool:12:string:346`，原字节offset `45993`。文案/契约：1. Once you've set an Entry Animation and enter a stream room, everyone in the room including the streamer will see the animation. / 2. You can toggle each Entry Animation off and on. / 3. Press and hold to drag and drop Entry Animations in your preferred order. / 4. If you've toggled on multiple Entry Animations, the animation highest on the list will be shown when you enter stream rooms. /  / For example if your Entry Animations are ordered with Army at the top, followed by Guardian and then Premium, the following will happen: / 1. If you enter a stream room and you subscribe to that streamer's Army, the Army Entry Animation will play. / 2. If you enter a stream room and you do not subscribe to that streamer's Army, but you are their Guardian, the Guardian Entry Animation will play. / 3. If you enter a stream room and you are not a member of the streamer's Army nor their Guardian, the Premium Entry Animation will play.

**未知：** 去重/冷却及动画资源；权限失效即时性。
**建议复刻边界：** 排序+关系匹配的入场预览，使用原创动效。
**选择建议：** 可先复刻；低；现有demo：未实现。

## L1708 · Lucky Bag共享保底

**核心循环（静态派生）：** 多人抽同一随机袋→共享累计次数→触发GP大奖。
**机制价值（推断）：** 保底属于袋而不是单个送礼者。

**包体直接事实与规则：**
- 资源：各奖按概率抽取
- 规则：距GP次数基于袋自身，由所有gift senders累计

**直接证据定位：**
- `analysis/feature-resource-rules.json`：`apks/com.machipopo.media17.apk:resources.arsc:lucky_bag_ceiling_desc / 0x7f141626 / string 12080`，原字节offset `559098`。文案/契约：The number of times left before guaranteed prize (GP) is based on the lucky bag per se, which is accumulated by all gift senders.
- `analysis/feature-resource-rules.json`：`apks/com.machipopo.media17.apk:resources.arsc:lucky_bag_detail_description / 0x7f14162a / string 12099`，原字节offset `560871`。文案/契约：The reward is based on the probability of each draw; the actual outcome may vary depending on each draw and your luck. To learn more about lucky bag, please check the %s.

**未知：** 袋scope/重置、阈值、权重；概率动态配置。
**建议复刻边界：** 共享计数+抽取+GP触发模拟，参数不冒充原值。
**选择建议：** 可先复刻；中；现有demo：未实现。

## L1709 · Random Rush集物开箱活动

**核心循环（静态派生）：** 观众买Lucky Bag获物件→满足箱内物件清单→主播领奖。
**机制价值（推断）：** 随机袋消费转成多人共集物件目标。

**包体直接事实与规则：**
- 资源：不同活动物件需求不同
- 回报：等级1-5对应不同ultimate prizes；清单全满足主播获奖

**直接证据定位：**
- `analysis/resource-evidence.json`：`config.ko.apk:resources.arsc:pool:12:string:475`，原字节offset `55463`。文案/契约：A Random Rush Event is a box event where viewers can satisfy the required items in the box by purchasing Lucky Bags. When the requirements are all met, the streamer will win an awesome prize! /  / The required items will be different in each Random Rush Event. Ranging from levels 1 to 5, Random Rush Events have different ultimate prizes. /  / The Random Rush Event is a new fun event to get support from your fans. Come and join us!

**未知：** 各level清单、物件重复处理；结算时机。
**建议复刻边界：** 原型共集物件看板与动态需求目标，抽取配置自设。
**选择建议：** 可先复刻；中；现有demo：未实现。

## L1710 · Draw & Guess直播互动

**核心循环（静态派生）：** 主播开画猜→观众猜→AI给规则提示答案。
**机制价值（推断）：** 直播评论成为互动猜题输入候选。

**包体直接事实与规则：**
- 直接文案：Interactive Games包含Draw & Guess；AI handles rules/hints/answers

**直接证据定位：**
- `analysis/resource-evidence.json`：`config.ko.apk:resources.arsc:pool:12:string:4063`，原字节offset `202678`。文案/契约：Spice up streams with Interactive Games! Play Draw & Guess and Quiz Game with viewers. AI handles everything: rules, hints, answers. Just have fun with your community.

**未知：** 输入渠道、回合、计分、AI/题库；画布同步。
**建议复刻边界：** 可做选题/绘画/猜题局；参数及AI用本地重构标识。
**选择建议：** 需补证据；中；现有demo：未实现。

## L1711 · Quiz Game主题直播问答

**核心循环（静态派生）：** 选问题theme→开Quiz→观众参与→提示/答案。
**机制价值（推断）：** 直播主题可由主播控制，自动主持是文案承诺。

**包体直接事实与规则：**
- 门槛：先select question theme
- 资源：AI规则、提示与答案文案

**直接证据定位：**
- `analysis/resource-evidence.json`：`config.ko.apk:resources.arsc:pool:12:string:3806`，原字节offset `191114`。文案/契约：Select a question theme for the Quiz game
- `analysis/resource-evidence.json`：`config.ko.apk:resources.arsc:pool:12:string:4063`，原字节offset `202678`。文案/契约：Spice up streams with Interactive Games! Play Draw & Guess and Quiz Game with viewers. AI handles everything: rules, hints, answers. Just have fun with your community.

**未知：** 判题、参与资格、分数、超时；是否实际AI。
**建议复刻边界：** 先做主题题库与本地判题，不声称恢复AI。
**选择建议：** 需补证据；中；现有demo：未实现。

## L1712 · Army贡献榜按订阅天摊分

**核心循环（静态派生）：** 买Army订阅→按总价/天数日摊→纳入收/送礼榜。
**机制价值（推断）：** 一次买长订不会全额集中算在购买日。

**包体直接事实与规则：**
- 公式：Army Subscription/subscription days
- 示例：196554 coins/90天=每日2184，尾差到期更新

**直接证据定位：**
- `analysis/resource-evidence.json`：`config.ko.apk:resources.arsc:pool:12:string:347`，原字节offset `46916`。文案/契约：1. The coins listed on the Army Leaderboard include Received Gifts and Sent Gifts. / 2. Calculation: Army Subscription/subscription days.  / For example, when a user purchases a 3-month/90-day Captain Army Subscription on 12/15 for 196,554 Baby Coins, the daily Baby Coins of 2,184 will be updated on the leaderboard (the daily decimals will be updated when the Army Subscription is due)

**未知：** 赠订/跨日取消、尾差精度；榜计时区。
**建议复刻边界：** 订阅摊分账本和榜单日汇总。
**选择建议：** 可先复刻；低；现有demo：未实现。

## 覆盖边界

本列表为部分静态下钻；未穷尽所有反射、Unity/native、远程H5或动态配置。未发现完整小游戏规则的功能保留为候选并注明未知，不能由类名或资源名声称其执行行为。下一轮用户可按稳定ID选择机制，先补对应未知再定义复刻参数。
