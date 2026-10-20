# SUGO 独特社交 / 权益 / 游戏 / 玩法目录

固定目标：`com.voicemaker.android` `2.52.0.1`；日期 2026-10-13；覆盖 `partial static`。独特指本应用中值得单独研究的机制，不宣称市场独占。基础登录、普通聊天、关注不列入。

复用本目录真实 REA 结果和当前包体格式感知资源解析；此次补充权益字符串池检索，不执行 APK、不请求原服务、不使用 source-comparison 旧包。直接证据仅证明代码/资源存在，不能证明地区开放或线上执行。规则表是资源明确声明或代码观察；推断列是研究者对意义的解释；未知项保留服务器与配置空白。现有 demo 仅表示覆盖该项的部分核心机制。

证据等级：A=代码与文案互证；B=明确资源规则；C=结构或入口候选。可先复刻只指有足够边界做本地核心机制原型，不代表完整原版恢复。

复用 REA 包体初检 Evidence：`ev_8a0c842e65bdb722f4363e341491f3079364ce14bef2648856fe9ab484c6a98f`。资源扩展保留原 resources.arsc 全局池 index 和 byte offset，避免把候选类名解释为业务执行。


| ID | 机制 | 类别 | 证据 | 复刻准备 | 成本 | 现有demo |
|---|---|---|---|---|---|---|
| SUG01 | PK KING/QUEEN 自动轮转 | 玩法 / 社交 | B | 可先复刻 | 中 | 已有 |
| SUG02 | 麦位分与阵营累计分分离 | 玩法 | B | 可先复刻 | 中 | 已有 |
| SUG03 | 亲密度解锁关系能力 | 社交 / 权益 | B | 可先复刻 | 中 | 未实现 |
| SUG04 | Couple 唯一关系与扩槽冲突 | 社交 / 权益 | B | 需补证据 | 中 | 未实现 |
| SUG05 | 情侣麦位双人特效 | 社交 / 玩法 / 权益 | B | 可先复刻 | 低 | 未实现 |
| SUG06 | 家族活跃维护与强制解散 | 社交 / 玩法 | B | 可先复刻 | 中 | 未实现 |
| SUG07 | 家族贡献账本和管理权 | 社交 / 权益 | B | 可先复刻 | 中 | 未实现 |
| SUG08 | Chat Star 限时认证权益 | 社交 / 权益 | B | 需补证据 | 中 | 未实现 |
| SUG09 | 贵族隐身入房和榜单匿名 | 权益 / 社交 | B | 可先复刻 | 中 | 未实现 |
| SUG10 | 榜单冠军的可维持身份 | 权益 / 玩法 | B | 可先复刻 | 中 | 未实现 |
| SUG11 | Super Winner 报名人数闸门 | 游戏 / 玩法 | B | 需补证据 | 中 | 未实现 |
| SUG12 | 幸运礼物的超级时刻 | 玩法 / 权益 | B | 需补证据 | 中 | 未实现 |

## SUG01 · PK KING/QUEEN 自动轮转

核心循环：随机配对→5分钟PK→5分钟冷却→继续配对直到主动停止。

特色解释（推断）：让主播保持连续节目节奏。

包体直接规则：
- 门槛：主持方开启
- 时序：5分钟对局+5分钟冷却
- 资源：PK礼物积分
- 回报：单轮竞争展示

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 12521 / 659717`：PK KING/QUEEN is a brand new way of playing. The system matches a random opponent with the host. Every PK lasts 5 minutes. After a PK, the system will have a 5-min cool-down. After the cool-down, a random opponent will be matched with the host again and so on, until the user chooses to stop the PK KING/QUEEN.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 11331 / 627451`：In %s seconds, the PK KING/QUEEN system will start matching for you again

未知项：匹配池和退出处罚；服务器计分。

建议复刻范围：自动轮转状态机。成本：中；准备：可先复刻；demo：已有。

## SUG02 · 麦位分与阵营累计分分离

核心循环：上麦收礼→换人→麦位重新计算→阵营累计保留。

特色解释（推断）：人员流动不抹去队伍战绩。

包体直接规则：
- 门槛：PK场景
- 时序：本轮
- 资源：个人礼物与阵营累计
- 回报：双层分数

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10380 / 599994`：Each mic seat displays the total number of%sreceived by the user during the PK; if the user on the mic seat changes during the PK, the points will be recalculated
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 14179 / 715414`：The two sets of PK values show the sum of the%sreceived by each group of mics positions during the PK period. During the PK period, the user's up and down mics will not affect the calculation of the PK value, and the PK value of the mic's position will be reset to zero.

未知项：重新计算和归零文案差异；跨队转移归属。

建议复刻范围：双账本计分实验。成本：中；准备：可先复刻；demo：已有。

## SUG03 · 亲密度解锁关系能力

核心循环：聊天或送礼→亲密等级→解锁双方能力。

特色解释（推断）：关系进度控制私密内容与互动能力。

包体直接规则：
- 门槛：Lv1通话/Lv2语音消息/Lv4私人相册/Lv5更多动态文案
- 时序：累计增长
- 资源：亲密度
- 回报：能力逐阶开放

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 11398 / 629829`：Intimacy Level reached Lv.1 to unlock the call feature~ Chatting & sending gifts can increase intimacy.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 11399 / 629935`：Intimacy Level reached Lv.2 to unlock the voice message feature ~ Chatting & sending gifts can increase intimacy.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 11401 / 630105`：Intimacy Level reached Lv.4 to view other user's private albums ~ Chatting & sending gifts can increase intimacy.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 12962 / 673980`：Reach Intimacy Lv.5 to unlock more Moments! Chat or send gifts to increase intimacy
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 9345 / 566608`：Avatar verified. Chat or send gifts to boost Intimacy and unlock more features!

未知项：相互同意和付费边界；每级精确积分；地区差异。

建议复刻范围：以虚拟互动积累解锁非基础关系内容。成本：中；准备：可先复刻；demo：未实现。

## SUG04 · Couple 唯一关系与扩槽冲突

核心循环：邀请→形成关系→公开关系墙→解除或换伴侣。

特色解释（推断）：亲密关系与装扮/席位共享。

包体直接规则：
- 门槛：文案称每人一个Couple，另有付费扩槽文案
- 时序：解除时更新关系
- 资源：关系身份
- 回报：共享权益

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10381 / 600161`：Each user can have only one Couple. To invite a new partner, the current Couple relationship must be terminated first.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10382 / 600282`：Each user can only have one Couple, if you form a Couple with a new partner, the old Couple relationship will be automatically disbanded, and the relationship will be publicly available on your profile - Relationship Wall.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 15283 / 759299`：Your Couple slots are full. Pay to expand slots?
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 14577 / 731357`：Unlock Couple slots

未知项：唯一关系与扩槽文案适用对象冲突；当前开关。

建议复刻范围：先研究关系模型与同意流程。成本：中；准备：需补证据；demo：未实现。

## SUG05 · 情侣麦位双人特效

核心循环：Couple双方坐情侣席→触发特效。

特色解释（推断）：将关系身份投射到房间空间。

包体直接规则：
- 门槛：双方占据Couple席
- 时序：席位占用触发
- 资源：关系/主题
- 回报：成对特效和入场装扮

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 13677 / 692405`：Special effects trigger when both occupy Couple seat
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 13936 / 699295`：The Theme label indicates special modes in this setting, such as Couple seats, stage seats, etc. %s
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10559 / 604801`：Exclusive two-person chat room entry effect (only available for couples)

未知项：特效触发次数；席位权限；断线处理。

建议复刻范围：情侣席位条件展示。成本：低；准备：可先复刻；demo：未实现。

## SUG06 · 家族活跃维护与强制解散

核心循环：创建或加入→完成每日任务→累积月活跃→维持家族。

特色解释（推断）：社群有持续维护成本。

包体直接规则：
- 门槛：创建等级动态；每人仅加入一家
- 时序：自然月
- 资源：任务活跃值
- 回报：家族存续；低于25自动解散且不可恢复文案

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10814 / 611838`：Forced disband: In order to ensure that users have a good experience of the family function, when the total active value of the family is lower than 25 in a natural month, it will be automatically disbanded, and the family leader/vice leader will receive a notification. the disbanded family cannot be restored.Thank you
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 12426 / 656515`：One person can only join one family
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 14711 / 735143`：Users can only create a family when they exceed the level of %s.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 14364 / 724327`：To everyone, finish today's family tasks to increase family activity，%s

未知项：任务计分；时区；25常量适用区域。

建议复刻范围：任务活跃、月末预警及解散沙盘。成本：中；准备：可先复刻；demo：未实现。

## SUG07 · 家族贡献账本和管理权

核心循环：成员贡献→贡献排行→领导/副手管理→转让或离开。

特色解释（推断）：贡献与组织身份绑定，离开清账。

包体直接规则：
- 门槛：领导可任命副手/转让
- 时序：离开时贡献点清除
- 资源：成员贡献
- 回报：社群职位与贡献展示

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10300 / 596880`：Do you confirm to leave this family? Your contribution points for this family will be cleared after you leave.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 8279 / 531030`：%1$s has been appointed by family leader %2$s as deputy
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 8290 / 531598`：%1$s has transferred family leadership to %2$s.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 9106 / 558054`：After this function is activated, no permission is needed when users apply to join the family.

未知项：管理权限全集；任务贡献算法。

建议复刻范围：角色授权与离族清账模拟。成本：中；准备：可先复刻；demo：未实现。

## SUG08 · Chat Star 限时认证权益

核心循环：完成个人认证与聊天积分→80分→七天权益→再次达标刷新周期。

特色解释（推断）：认证与社交活跃联合触发临时身份。

包体直接规则：
- 门槛：全部个人验证+聊天分80
- 时序：7天；有效期内再达标同步更新
- 资源：聊天积分
- 回报：Chat Star权益

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 8785 / 547566`：3：Complete all personal verification, the chat score reaches 80 to unlock 7 days Chat Star privileges, privileges are effective during the period to meet the conditions again, the privilege cycle will be synchronized and updated;.

未知项：聊天分生产规则；刷新是延长还是重置；权益全集。

建议复刻范围：限时身份状态机。成本：中；准备：需补证据；demo：未实现。

## SUG09 · 贵族隐身入房和榜单匿名

核心循环：开贵族→启用隐身→入房/榜单隐藏身份。

特色解释（推断）：隐私可见性成为身份权益。

包体直接规则：
- 门槛：贵族权益
- 时序：启用期间
- 资源：贵族资格
- 回报：头像昵称入房信息不可见、锁房入口

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 9295 / 565187`：Aristocratic privileges. After enabling it, other users in the live studio won't be able to see your profile pic, nickname and when you come in
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 12268 / 651890`：No real personal information is displayed in the regional wealth list, charm list, Couple list and room list, appearing as a mystery person
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 12479 / 658708`：Open aristocracy to enjoy the function of locking room

未知项：房主/管理员是否仍可见；不同贵族等级。

建议复刻范围：可见性矩阵与匿名房间演示。成本：中；准备：可先复刻；demo：未实现。

## SUG10 · 榜单冠军的可维持身份

核心循环：送礼竞争主播月榜→Top1获专属进场/道具→继续送礼维持。

特色解释（推断）：身份权益持续依赖竞争地位。

包体直接规则：
- 门槛：主播月榜Top1
- 时序：月榜周期
- 资源：礼物贡献
- 回报：专属入场效果/道具

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 9393 / 567633`：Become the TOP 1 of the broadcaster's monthly list, and get immediately the exclusive super fan entry effect! Send gifts to the broadcaster, this way you can keep your entry effect.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 9394 / 567819`：Become the TOP1 of the broadcaster's monthly list, and get immediately the exclusive super fan item! Send a gift to the broadcaster this way you can keep your item!

未知项：失去Top1后的失效时间；同分规则。

建议复刻范围：限时榜首权益模型。成本：中；准备：可先复刻；demo：未实现。

## SUG11 · Super Winner 报名人数闸门

核心循环：房主发起→付入口费报名→倒计时→人数超过2自动开局。

特色解释（推断）：先聚集参与者再启动房间小游戏。

包体直接规则：
- 门槛：房主启动且倒计时后>2人
- 时序：报名倒计时
- 资源：入口费
- 回报：获胜金币文案

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 8571 / 540364`：1. Game Description: Super winner is a multiplayer interactive game, started by room owners. Players can participate in the game by paying a entrance fee, and the game will start automatically when there are more than 2 players after the countdown
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 9958 / 585843`：Congratulations to the Winner %1$s won %2$scoins in Super Winner Game

未知项：游戏动作和随机算法；退款；完整结算。

建议复刻范围：仅报名/锁局状态机。成本：中；准备：需补证据；demo：未实现。

## SUG12 · 幸运礼物的超级时刻

核心循环：送幸运礼物→超级时刻解锁→奖励播报。

特色解释（推断）：礼物与房间共同期待的奖励时刻关联。

包体直接规则：
- 门槛：幸运礼物；触发条件未知
- 时序：超级时刻
- 资源：幸运礼物
- 回报：资源宣称有人得1000倍奖励

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 14165 / 713948`：The super moment for lucky gifts has been unlocked. Someone will win the reward worth 1000 times in a super moment. Join now and you could be the lucky player
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 13497 / 688034`：Sent you a surprise gift. Received a lucky unlimited gift %s.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 8529 / 539758`：*The gifts get from the games which are put in the backpack are not counted in any rankings.

未知项：概率/触发/资金流；榜单排除范围。

建议复刻范围：仅事件节奏展示，数值不仿真。成本：中；准备：需补证据；demo：未实现。

## 覆盖与剩余问题

这是选择性功能目录，不是全量产品规格。资源可能为旧文案、共享模块或未开启功能；A/B仍需真实账号与地区运行证据验证。C条目不能作为已确认的玩法规则。未核实概率、支付、服务器经济和真人体验；当前split可读但未全量反编译native实现。上述范围均需在选择复刻后锁定。
