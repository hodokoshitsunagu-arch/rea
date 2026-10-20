# Spoon 独特社交 / 权益 / 游戏 / 玩法候选清单

基准：`co.spoonme` / `11.20.0`。只分析已选包和全部提供的 splits；不启动APK、不登录、不联系原服务。本轮复用原 `ANALYSIS.md` 中的真实 REA Evidence，并补充 `analysis/feature-resource-rules.json` 的 Android ResTable key→resource ID→global string 映射。复杂 bag 明确跳过；覆盖数字见该文件。

“独特”指本应用内值得单独复刻的特色机制，不代表市场独占。**A**=反编译成员及规则文案共同支持（不等于完整执行链）；**B**=明确资源规则；**C**=结构/入口候选。资源是包体直接证据，产品流程是静态派生；动机说明属于推断。未验证原服务端、账号/地区开关、真实支付、RTC或原小游戏运行。

| ID | 特色机制 | 类别 | 证据 | 复刻准备 | 工作量 | Demo |
|---|---|---|---|---|---|---|
| SPO01 | Lucky Box 条件打赏 | 游戏 / 玩法 | A | 可先复刻 | 中 | 已有 |
| SPO02 | Quiz Gift 答题打赏 | 游戏 / 玩法 | B | 可先复刻 | 中 | 未实现 |
| SPO03 | 首访3分钟欢迎贴 | 社交 / 玩法 | B | 可先复刻 | 低 | 未实现 |
| SPO04 | 频道Tier付费内容社区 | 社交 / 权益 | B | 可先复刻 | 中 | 未实现 |
| SPO05 | Premium专属直播与Podcasts | 权益 / 玩法 | B | 可先复刻 | 中 | 未实现 |
| SPO06 | DJ会员制作工具权益 | 权益 / 玩法 | B | 可先复刻 | 低 | 未实现 |
| SPO07 | Choice DJ评选徽章 | 权益 / 社交 | B | 需补证据 | 中 | 未实现 |
| SPO08 | 粉丝贡献排行与忠诚徽章 | 社交 / 权益 | B | 需补证据 | 中 | 未实现 |
| SPO09 | Nudge催开播与重置 | 社交 / 玩法 | B | 可先复刻 | 低 | 未实现 |

工作量针对本地可交互机制原型，排除真实后台/支付/音视频基础设施。“可先复刻”表示规则足以做标注重构选择的demo，并非完整还原已通过验收。已有demo仅覆盖前一轮选定机制，具体差异见原报告。

## SPO01 · Lucky Box 条件打赏

**核心循环（静态派生）：** 听众设置盒子与Spoons→接收人接受挑战→选盒→揭晓打赏结果。
**机制价值（推断）：** 把打赏结果转化为主播/嘉宾现场挑战。

**包体直接事实与规则：**
- 门槛：主播或Live Call嘉宾接收
- 资源：Spoons；可选择最多5盒
- 回报：未抽中只奖励10%
- 时序：创建/接受/结果模型存在；全路径未恢复

**直接证据定位：**
- `analysis/rea-luckybox-info.json`，Evidence `ev_1ede51c0f24fc18e6817881b85e65dbc26da3a0d504fd57e55159e0765467312`。**REA成员归纳（推导）：** REA解析WalaLuckyBoxInfo成员：amount:int、boxCount:int、message:String。成员证据不包含随机或结算算法。
- `analysis/resource-evidence.json`：`co.spoonme.apk:resources.arsc:pool:12:string:5790`，原字节offset `257573`。文案/契约：You can choose up to 5 boxes. Only 10% of spoons will be rewarded if the Lucky box is not drawn.
- `analysis/package-string-evidence.json`：`co.spoonme.apk:classes2.dex:string:959`，原字节offset `8937210`。文案/契约：()Lco/spoonme/core/model/chat/response/eventpayload/WalaLuckyBoxInfo;

**未知：** 真实概率与总盒数；超时/退款/取消；服务端结算。
**建议复刻边界：** 已有单局选盒demo可扩为多选及嘉宾挑战；模拟余额与结果。
**选择建议：** 可先复刻；中；现有demo：已有。

## SPO02 · Quiz Gift 答题打赏

**核心循环（静态派生）：** 听众赠问答→主播答题→按成功与否分配Spoons。
**机制价值（推断）：** 奖励与主播回答表现绑定。

**包体直接事实与规则：**
- 资源：问答附带Spoons
- 回报：失败只转10%
- 门槛：听众出题，主播收礼

**直接证据定位：**
- `analysis/resource-evidence.json`：`co.spoonme.apk:resources.arsc:pool:12:string:5092`，原字节offset `231580`。文案/契约：Send a quiz to your streamer and make them get your donated spoons!
- `analysis/resource-evidence.json`：`co.spoonme.apk:resources.arsc:pool:12:string:5561`，原字节offset `249723`。文案/契约：Unfortunately, only 10%% of spoons with the quiz sent from %1$s were sent to %2$s

**未知：** 判题、题型、时间限制；成功比例完整规则。
**建议复刻边界：** 题目编辑、接受、答题、模拟奖励，显式配置未知参数。
**选择建议：** 可先复刻；中；现有demo：未实现。

## SPO03 · 首访3分钟欢迎贴

**核心循环（静态派生）：** 新听众听满3分钟→直播结束→向其Space自动发欢迎贴。
**机制价值（推断）：** 直播中轻关系在结束后沉淀为个人空间留言。

**包体直接事实与规则：**
- 门槛：首次听众且收听≥3分钟
- 时序：直播结束自动发
- 资源：欢迎内容至少20字；昵称自动前缀
- 回报：过去一年接收者记录；更早移出清单

**直接证据定位：**
- `analysis/feature-resource-rules.json`：`apks/co.spoonme.apk:resources.arsc:welcomefanboard_write_tip_desc_03 / 0x7f140cdc / string 4037`，原字节offset `200817`。文案/契约：First-time listeners get your Welcome Post after listening for 3 minutes or more.
- `analysis/feature-resource-rules.json`：`apks/co.spoonme.apk:resources.arsc:welcomefanboard_write_desc / 0x7f140cd5 / string 3517`，原字节offset `186714`。文案/契约：Auto-posted to their Space when your live ends.
- `analysis/feature-resource-rules.json`：`apks/co.spoonme.apk:resources.arsc:welcomefanboard_write_error_min_length / 0x7f140cd6 / string 3917`，原字节offset `197080`。文案/契约：Enter at least 20 characters.
- `analysis/feature-resource-rules.json`：`apks/co.spoonme.apk:resources.arsc:welcomefanboard_listener_list_info_desc / 0x7f140ccf / string 5047`，原字节offset `230528`。文案/契约：See who received your Welcome Post over the past year, sorted by date. Entries older than a year drop off the list.

**未知：** 收听累计及离线判定；去重/封禁处理。
**建议复刻边界：** 首访计时→结束批量欢迎→一年接收记录，纯本地模拟。
**选择建议：** 可先复刻；低；现有demo：未实现。

## SPO04 · 频道Tier付费内容社区

**核心循环（静态派生）：** DJ开Tier→审核→粉丝订阅→访问专属内容/贴文。
**机制价值（推断）：** DJ会员能力与粉丝Tier资格形成两层门槛。

**包体直接事实与规则：**
- 门槛：Tier创建存在审核通过/拒绝
- 回报：订Tier才能看指定post；仅plan订阅者可发Fan Board图片

**直接证据定位：**
- `analysis/feature-resource-rules.json`：`apks/co.spoonme.apk:resources.arsc:push_subscription_plan_review_approved / 0x7f140a4e / string 6081`，原字节offset `271729`。文案/契约：‎%1$s‎'s %2$s Tier has been approved! Congratulations!
- `analysis/feature-resource-rules.json`：`apks/co.spoonme.apk:resources.arsc:subscription_plan_join_post_view / 0x7f140c47 / string 5280`，原字节offset `237174`。文案/契约：Subscribe to membership tier to view the post.
- `analysis/resource-evidence.json`：`co.spoonme.apk:resources.arsc:pool:12:string:4666`，原字节offset `220277`。文案/契约：Only plan subscribers can upload images to the fan board.

**未知：** 订价、退款、审核细則；各Tier权益分配。
**建议复刻边界：** 本地审核状态、订阅有效期与帖子/图片权限矩阵。
**选择建议：** 可先复刻；中；现有demo：未实现。

## SPO05 · Premium专属直播与Podcasts

**核心循环（静态派生）：** DJ获Premium→创建专属直播/播客→订阅者进入。
**机制价值（推断）：** 同一频道把实时与异步内容纳入订阅。

**包体直接事实与规则：**
- 门槛：创建者需Premium会员
- 回报：subscriber-exclusive broadcasts/Podcasts

**直接证据定位：**
- `analysis/resource-evidence.json`：`co.spoonme.apk:resources.arsc:pool:12:string:4653`，原字节offset `219543`。文案/契约：Only Premium membership subscribers can create broadcasts. / Join the membership and try subscriber-exclusive broadcasts.
- `analysis/resource-evidence.json`：`co.spoonme.apk:resources.arsc:pool:12:string:4655`，原字节offset `219742`。文案/契约：Only Premium membership subscribers can create subscriber-exclusive Podcasts.

**未知：** 接收端Tier映射；失效后的访问策略。
**建议复刻边界：** 双内容类型权限门控，不重构基础直播/播放。
**选择建议：** 可先复刻；中；现有demo：未实现。

## SPO06 · DJ会员制作工具权益

**核心循环（静态派生）：** DJ开会员→4小时直播/Live Call；Premium自动保存回放与精选CAST。
**机制价值（推断）：** 会员不只代表粉丝身份，还购买主播制作能力。

**包体直接事实与规则：**
- 门槛：Spoon Membership；回放/精选需Premium
- 回报：最长4小时；Live Call；自动保存；featured CAST

**直接证据定位：**
- `analysis/resource-evidence.json`：`co.spoonme.apk:resources.arsc:pool:12:string:5199`，原字节offset `234617`。文案/契约：Spoon Membership Subscribers can broadcast for up to 4 hours.
- `analysis/resource-evidence.json`：`co.spoonme.apk:resources.arsc:pool:12:string:5223`，原字节offset `235488`。文案/契约：Start a Live Call / with Spoon Membership.
- `analysis/feature-resource-rules.json`：`apks/co.spoonme.apk:resources.arsc:djmembership_benefit_save_replay / 0x7f14049f / string 3522`，原字节offset `186890`。文案/契约：Automatically save all live broadcasts.
- `analysis/feature-resource-rules.json`：`apks/co.spoonme.apk:resources.arsc:djmembership_premium_only_featured_cast / 0x7f1404a9 / string 5810`，原字节offset `258871`。文案/契约：You can register a featured cast after subscribing to Spoon Membership Premium.

**未知：** 非会员时长；保存周期及存储限额；Live Call人数。
**建议复刻边界：** 制作权益表和计划失效模拟。
**选择建议：** 可先复刻；低；现有demo：未实现。

## SPO07 · Choice DJ评选徽章

**核心循环（静态派生）：** DJ积累直播应援→平台结合历史/活跃选择→月徽章。
**机制价值（推断）：** 应援量和行为历史共同形成主播资格。

**包体直接事实与规则：**
- 资源：直播Spoons+likes；Live Call嘉宾收入排除
- 门槛：另参考违规史和直播活跃
- 回报：当月DJ badge

**直接证据定位：**
- `analysis/resource-evidence.json`：`co.spoonme.apk:resources.arsc:pool:12:string:2`，原字节offset `24790`。文案/契约：This ranking is based on spoons and likes received in livestreams.(*spoons received as a Live Call Guest is not included.) /  / This is used to select Choice DJs, along with violation history and livestream activity. /  / Check your livestream activity in Streamer's Dashboard. /  / ➡️ Go to Dashboard /  / ※Monthly: From the 1st of this month to yesterday / ※ Last 7 days: The 7 days leading up to yesterday / ※ Last 1 day: Within the last 24 hours
- `analysis/feature-resource-rules.json`：`apks/co.spoonme.apk:resources.arsc:push_choice / 0x7f140a33 / string 3296`，原字节offset `179163`。文案/契约：%s, you have been awarded this month’s DJ badge! Check it out on your channel now.

**未知：** 加权、评选门槛及权益；月徽章续期。
**建议复刻边界：** 候选评分看板，指标分离且不伪造原公式。
**选择建议：** 需补证据；中；现有demo：未实现。

## SPO08 · 粉丝贡献排行与忠诚徽章

**核心循环（静态派生）：** 听众应援→当前场/周/月/历史榜→DJ可隐藏听众→移出榜和徽章。
**机制价值（推断）：** 身份奖励同时受时间窗与频道管理控制。

**包体直接事实与规则：**
- 时序：Real-time为当前Live；周一到周日；月初到月末
- 门槛：隐藏后不入Loyalty Score榜也无徽章

**直接证据定位：**
- `analysis/resource-evidence.json`：`co.spoonme.apk:resources.arsc:pool:12:string:4007`，原字节offset `200022`。文案/契约：Fan rankings: Total, Real-time, This Week, This Month. Updated daily; reset each period. /  / · Total (All): all time / · Real-time: current Live / · This Week: Mon–Sun / · This Month: 1st–last day
- `analysis/resource-evidence.json`：`co.spoonme.apk:resources.arsc:pool:12:string:4198`，原字节offset `205521`。文案/契约：If a streamer hides a listener from their Loyalty Score Ranking, that listener is excluded from the ranking and won't receive the badge.

**未知：** 忠诚计分及徽章门槛；贡献与忠诚两榜是否共公式。
**建议复刻边界：** 四时间窗贡献榜与独立忠诚隐藏开关。
**选择建议：** 需补证据；中；现有demo：未实现。

## SPO09 · Nudge催开播与重置

**核心循环（静态派生）：** 粉丝催DJ直播→等待开播→两天或开播时重置。
**机制价值（推断）：** 轻量催播有冷却周期，联系到真实开播事件。

**包体直接事实与规则：**
- 时序：使用后两天，或DJ开始直播时重置

**直接证据定位：**
- `analysis/resource-evidence.json`：`co.spoonme.apk:resources.arsc:pool:12:string:6061`，原字节offset `270511`。文案/契约：· Nudging resets two days after use or when the DJ starts a broadcast. / · If you become a fan of the DJ, you can receive broadcast notifications anytime

**未知：** 次数限制、通知合并；是否需先关注。
**建议复刻边界：** 催播冷却状态机与开播重置。
**选择建议：** 可先复刻；低；现有demo：未实现。

## 覆盖边界

本列表为部分静态下钻；未穷尽所有反射、Unity/native、远程H5或动态配置。未发现完整小游戏规则的功能保留为候选并注明未知，不能由类名或资源名声称其执行行为。下一轮用户可按稳定ID选择机制，先补对应未知再定义复刻参数。
