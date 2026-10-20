# Yalla-Parchis 独特社交 / 权益 / 游戏 / 玩法目录

固定目标：`com.yalla.yallaparchisi` `1.5.3`；日期 2026-10-13；覆盖 `partial static`。独特指本应用中值得单独研究的机制，不宣称市场独占。基础登录、普通聊天、关注不列入。

复用本目录真实 REA 结果和当前包体格式感知资源解析；此次补充权益字符串池检索，不执行 APK、不请求原服务、不使用 source-comparison 旧包。直接证据仅证明代码/资源存在，不能证明地区开放或线上执行。规则表是资源明确声明或代码观察；推断列是研究者对意义的解释；未知项保留服务器与配置空白。现有 demo 仅表示覆盖该项的部分核心机制。

证据等级：A=代码与文案互证；B=明确资源规则；C=结构或入口候选。可先复刻只指有足够边界做本地核心机制原型，不代表完整原版恢复。

Unity本地化拥有者边界：`analysis/unity-localization-values.json` 对旧 `unity-text-assets.json` 中 `englishlocalization` 的 JSON TextAsset 使用标准 JSON 解析，保存 member/name/path_id/key、原 text 的 UTF-8 SHA-256 与解析后的原值。下方引文精确匹配解析值；这是派生表示，旧原证据未改。

复用 REA 包体初检 Evidence：`ev_3ba0a0afa5f2ff8bafd072267ce8084dbed4f06fc1ac7640bb50179e8a3b1167`。资源扩展保留原 resources.arsc 全局池 index 和 byte offset，避免把候选类名解释为业务执行。


| ID | 机制 | 类别 | 证据 | 复刻准备 | 成本 | 现有demo |
|---|---|---|---|---|---|---|
| YPH01 | Classic/Spanish 双骰策略 | 游戏 / 玩法 | B | 可先复刻 | 中 | 已有 |
| YPH02 | 路障与强制拆障 | 游戏 / 玩法 | B | 可先复刻 | 中 | 已有 |
| YPH03 | 吃子20步和终点10步奖励 | 游戏 / 玩法 | B | 可先复刻 | 中 | 已有 |
| YPH04 | 队伍八子终局和代操作队友 | 游戏 / 社交 | B | 可先复刻 | 高 | 未实现 |
| YPH05 | 联赛升降和传奇星 | 游戏 / 权益 | B | 可先复刻 | 中 | 未实现 |
| YPH06 | 宝箱队列与通行证 | 权益 / 玩法 | B | 可先复刻 | 中 | 未实现 |
| YPH07 | 协助缩短开箱 | 社交 / 玩法 | B | 可先复刻 | 中 | 未实现 |
| YPH08 | VIP Elite 房与观战身份 | 权益 / 社交 | B | 可先复刻 | 中 | 未实现 |
| YPH09 | Member Club 任务社群 | 社交 / 权益 / 玩法 | B | 可先复刻 | 中 | 未实现 |
| YPH10 | Baron 房内按月权益续费 | 权益 / 社交 | B | 可先复刻 | 中 | 未实现 |
| YPH11 | 关系亲密度衰减 | 社交 / 权益 | B | 需补证据 | 中 | 未实现 |
| YPH12 | 礼物专属 Sponsor 冠名 | 社交 / 权益 | B | 可先复刻 | 中 | 未实现 |
| YPH13 | Royal 充值等级和冻结权益 | 权益 | B | 需补证据 | 中 | 未实现 |
| YPH14 | Fruit Merge 复活与排行 | 游戏 / 玩法 | B | 需补证据 | 高 | 未实现 |
| YPH15 | 邀请新用户到二级领奖 | 社交 / 玩法 / 权益 | B | 可先复刻 | 中 | 未实现 |

## YPH01 · Classic/Spanish 双骰策略

核心循环：双骰出巢→分配步数→三次双数受罚。

特色解释（推断）：同一骰史在变体下对应不同处罚棋子。

包体直接规则：
- 门槛：单骰或和5出一子；双5出两子
- 时序：双数再投；三连双数处罚
- 资源：两个骰子额度
- 回报：步数与额外回合

直接证据定位：
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_66`：A token can come out of the nest when player rolls 5 in a single dice or the sum of two dice. Two tokens can come out when player rolls double 5.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_match_tip6`：Tip: In Spanish rule, the last moved token will be sent back to nest when player rolled double three times continuously.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_match_tip7`：Tip: In Classic rule, the most advanced token will be sent back to nest when player rolled double three times continuously.

未知项：未移动棋子处罚；骰子服务器产生。

建议复刻范围：两种模式骰史实验。成本：中；准备：可先复刻；demo：已有。

## YPH02 · 路障与强制拆障

核心循环：同色两子同格→阻塞所有玩家→掷双数必须拆己障。

特色解释（推断）：防守占位也会阻挡自己。

包体直接规则：
- 门槛：两枚同色同格
- 时序：双数强制拆障
- 资源：棋子布局
- 回报：阻止穿越

直接证据定位：
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_70`：If two tokens of the same color stay in the same box then they form a blockade. Neither the player's token or opponents' token can cross blockade. If a player can't move any token because of blockade then this turn is invalid. Note: If the player rolls double then it is forced to break blockade.

未知项：终点轨道例外；无法行动额度消费。

建议复刻范围：布局策略实验。成本：中；准备：可先复刻；demo：已有。

## YPH03 · 吃子20步和终点10步奖励

核心循环：吃子/入终点→额外奖励额度→选择棋子移动。

特色解释（推断）：一次行动可带来二次策略选择。

包体直接规则：
- 门槛：吃子或到终点
- 时序：事件后奖励
- 资源：20/10步
- 回报：额外移动

直接证据定位：
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_76`：Player can move a token for 20 spaces after captured a token of opponent.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_78`：Player can move a token for 10 spaces after one token reached the end.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_72`：All gray spaces with star are safety zones. Token in safety zones can't be captured.

未知项：奖励串联；棋盘安全格坐标。

建议复刻范围：奖励额度策略实验。成本：中；准备：可先复刻；demo：已有。

## YPH04 · 队伍八子终局和代操作队友

核心循环：邀请码/好友/快配组队→己方四子完成→帮队友走完。

特色解释（推断）：个人完成后仍能参与队伍胜利。

包体直接规则：
- 门槛：红黄对蓝绿
- 时序：先完成自己的四子才操作队友
- 资源：每队8子
- 回报：全队完成才赢；队友离局对方赢

直接证据定位：
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_82`：You can create a team by inviting Facebook friends, sharing team code/link, or quick match.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_86`：The first team to move all 8 tokens to the end will win. There is no reward if you only move your own 4 tokens.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_88`：Players team up as follows: (Red & Yellow) vs (Blue & Green)
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_90`：When you finish the game, you will be able to roll the teammate’s dice and move the teammate’s token.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_92`：When one player leaves the game, opponents win.

未知项：代操作冲突；挂机/掉线和主动退出区别。

建议复刻范围：协作残局与代操作。成本：高；准备：可先复刻；demo：未实现。

## YPH05 · 联赛升降和传奇星

核心循环：每周排位→前20%升级/后20%降级→传奇前40拿星。

特色解释（推断）：短局形成长期竞技阶梯。

包体直接规则：
- 门槛：Lv4解锁文案
- 时序：每周
- 资源：联赛成绩/传奇星
- 回报：段位与星身份

直接证据定位：
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_league_desc`：1. Top 20% players in the league will be promoted. / 2. Bottom 20% players in the league will be demoted. / 3. The rest will stay in the current league. / 4. You can win Legend Stars each week if you are Top 1-40 in the Legend League.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_league unlocks at level 4`：League unlocks at level 4!

未知项：联赛分生产；分组容量；同分。

建议复刻范围：周结算联赛沙盘。成本：中；准备：可先复刻；demo：未实现。

## YPH06 · 宝箱队列与通行证

核心循环：赢局拿箱→排队解锁→当前箱完成自动开始下一箱。

特色解释（推断）：等待队列是通行证专属便利。

包体直接规则：
- 门槛：购买event pass可排队
- 时序：串行倒计时
- 资源：箱位/钻石
- 回报：皮肤碎片和钻石

直接证据定位：
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_36`：Win games to get treasure chests.  / Open your chests here.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_skinboxqueue_06`：1. Treasure chest can line up only when players purchased event pass. / 2.When the countdown of unlocking current treasure chest ends, treasure chest in line will start countdown. / 3.Players can select other treasure chest which is not in line to change line up treasure chest.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_chestdes_02`：Higher possibility to get featured blue or purple skin fragments and diamonds

未知项：解锁时长/掉率；队列容量。

建议复刻范围：宝箱排队系统。成本：中；准备：可先复刻；demo：未实现。

## YPH07 · 协助缩短开箱

核心循环：请求协助→好友帮助→分钟减免→当天累加额度过期。

特色解释（推断）：玩家关系直接改善游戏奖励等待。

包体直接规则：
- 门槛：协助事件
- 时序：减时即时应用；GMT-5午夜过期
- 资源：可堆叠减时
- 回报：更快开箱

直接证据定位：
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_help_receive_suc`：As an assistance reward, {0} minutes have been deducted from the skin chest unlock time.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_skin_box_help_text1`：Stackable time-reductions expire daily at 0:00 (GMT-5) and apply instantly on chest unlock.

未知项：次数上限；协助者奖励；减时来源。

建议复刻范围：互助开箱状态机。成本：中；准备：可先复刻；demo：未实现。

## YPH08 · VIP Elite 房与观战身份

核心循环：订VIP等级→创建/进入Elite→观战特殊弹幕。

特色解释（推断）：竞技房间的社交权限分层。

包体直接规则：
- 门槛：VIP2可与其他VIP2玩Elite
- 时序：订阅有效期
- 资源：VIP资格
- 回报：Elite模式、房主踢人、观战效果、月度皮肤

直接证据定位：
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_privilege_content_3`：You can play mode online 1 on 1、 online 4 players or team up in Elite Room with other VIP 2 players after being VIP 2
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_vip_content_82`：Room owners with VIP subscriptions can kick out impolite users from rooms.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_vip_content_152`：You can send comments with the exclusive effect during spectating after being VIP
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_privilege_content_5`：Monthly free use at least 2 skins after being VIP. Free skins will have "VIP" logo in Skin Store and look as follows:

未知项：Android实际支付实现；等级成本。

建议复刻范围：房间权限矩阵演示。成本：中；准备：可先复刻；demo：未实现。

## YPH09 · Member Club 任务社群

核心循环：加入房间会员团→任务贡献→升团等级→周排行。

特色解释（推断）：游戏房间有长期社群共同目标。

包体直接规则：
- 门槛：加入Member Club
- 时序：周排行，GMT-5双窗口统计
- 资源：任务贡献
- 回报：动态表情/钻石；Top3房间展示与热度奖

直接证据定位：
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_room_global_content`：1. The global ranking counts the contribution points generated by your room member club or the room member clubs you have joined during a week (from Monday to Sunday). /  / 2. In global ranking, the top 3 room member clubs will have special display rewards in the "Popular" room list (As you may be in different regions and countries, the orders in which they are displayed may vary). /  / 3. In addition, the top 3 member clubs will be rewarded with different room heat prizes. /   / 4. The ranking contribution statistics will be updated at 1:00 - 2:00 AM and 12:00 - 13:00 (GMT-5).
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_member_rank_explain`：1. The ranking counts the contribution points generated by your room member club or the room member clubs you have joined during a week (from Monday to Sunday). /  / 2. Contribution points could be earned by completing the corresponding tasks. If the contribution points are same, the player who registered earlier will be displayed first. /   / 3. The ranking contribution statistics will be updated at 1:00 - 2:00 AM and 12:00 - 13:00 (GMT-5). /  / 4. The players who leave room member clubs will be removed from the ranking after the relevant statistics are cleared.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_mc_description_1`：Complete tasks to raise the level of the Member Club and you may get diamonds.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_emoji_join_tips`：Join the the Member Club to unlock some dynamic emojis in the chat room immediately!

未知项：具体任务积分；退团清算时刻。

建议复刻范围：房间社群任务与周荣誉。成本：中；准备：可先复刻；demo：未实现。

## YPH10 · Baron 房内按月权益续费

核心循环：钻石购买Baron→房内身份→自动续费或过期。

特色解释（推断）：房间身份有独立于平台VIP的生命周期。

包体直接规则：
- 门槛：钻石购买
- 时序：到期前12小时扣款；余额不足取消；超过20天未登录取消下期
- 资源：钻石
- 回报：房内Baron装扮权益

直接证据定位：
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_auto_content`：1. The users can enable or disable the option of automatic monthly payment. / 2. You will not be charged in the next period if you disable the option. / 3. If you enable the automatic monthly payment, you will be charged 12 hours before the privileges expire, for which we hope your balance is enough to pay. / 4. If you don't have enough diamonds, you will not be charged successfully. The automatic monthly payment will be canceled and the privileges will expire in the next scheduled period. / 5. If you don't log in for more than 20 days when charged, the automatic payment will be canceled for next period.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_knight_content4`：Your Baron privileges in the room will expire in {0} days and {1} hours. Do you want to pay for the next period in advance?
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_knight_get`：You have paid {0} diamonds for Baron's privileges successfully and got the following items.

未知项：价格配置；准确权益列表。

建议复刻范围：双资格体系与续期沙盘。成本：中；准备：可先复刻；demo：未实现。

## YPH11 · 关系亲密度衰减

核心循环：与好友积累亲密→停滞若干天→衰减→降级少权益。

特色解释（推断）：关系需要持续维护而非永久等级。

包体直接规则：
- 门槛：连续{0}天不增长，值为下发占位
- 时序：停滞后衰减
- 资源：关系亲密点
- 回报：关系等级权益

直接证据定位：
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_relation_rule5`：If your intimacy points with a friend does not increase for {0} consecutive day(s), a decay mechanism will be triggered. If your intimacy points falls below the minimum required for the current level, you will be downgraded. Downgrading will reduce your privileges.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_intimacy_upgrade_1`：Congratulations, your intimacy points with <color=#FFDD1F>{0}</color> has reached <color=#FFDD1F>{1}</color>. Here are your privileges:

未知项：天数和衰减公式；关系类型。

建议复刻范围：可配置亲密度生命周期。成本：中；准备：需补证据；demo：未实现。

## YPH12 · 礼物专属 Sponsor 冠名

核心循环：给某人送特定礼物→该礼物数量第一→成为冠名赞助。

特色解释（推断）：按收礼者×礼物种类分割关系荣誉。

包体直接规则：
- 门槛：特定礼物最高数量；同分先达到优先
- 时序：GMT-5周一至周日，更新延迟5–30分钟，新周清空
- 资源：礼物数量
- 回报：Sponsor身份

直接证据定位：
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_gifttitle_rules_tips`：1. The sponsors are typically calculated weekly, from Monday 00:00 to Sunday 24:00 (GMT-5). / 2. The user who sends the highest quantity of a specific gift to a player will be the sponsor of that gift. In case of a tie, the one who reaches the quantity first will be prioritized. / 3. If a player does not receive a specific gift during the week, there will be no sponsor of this gift. / 4. At the start of a new cycle, the previous sponsor information will be cleared. / 5. The update may take approximately 5 to 30 minutes.

未知项：退礼处理；不同礼包礼物计数。

建议复刻范围：礼物维度冠名榜。成本：中；准备：可先复刻；demo：未实现。

## YPH13 · Royal 充值等级和冻结权益

核心循环：充值→Royal点/币→权益→冻结后无法拿加成。

特色解释（推断）：消费等级、兑换币与有效权益分开。

包体直接规则：
- 门槛：点数门槛下发
- 时序：冻结态影响权益
- 资源：Royal Points/Coins
- 回报：充值加成和物品兑换

直接证据定位：
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_royal_r0_desc_f`：Recharge to get Royal Points(<slot index=0>) / You can use Royal privileges with more than {0} <slot index=1>
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_royal_pay_benefit_but_frozen`：You are Royal <color=#F7FF2A>{0}</color>.  / Unfrozen your account to enjoy <color=#F7FF2A>{1}%</color> recarge benefit.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_royal_coin_no_data2`：No data yet. / Recharge to get Royal Coins <slot index=0> / Items that meet the requirements can be exchanged.

未知项：维护/冻结规则；等级成本；兑换限制。

建议复刻范围：权益冻结与兑换原型。成本：中；准备：需补证据；demo：未实现。

## YPH14 · Fruit Merge 复活与排行

核心循环：拖放水果→同类合成→排行→清顶部水果继续。

特色解释（推断）：独立休闲局给主棋牌游戏增加短循环。

包体直接规则：
- 门槛：进入小游戏
- 时序：退出保存；上传失败需手动更新
- 资源：水果布局/道具
- 回报：合成得分与排行奖励

直接证据定位：
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_synthsis_fruit_guide_1`：Tap to move and drop the fruits.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_synthsis_fruit_guide_2`：Merge identical fruits to create new ones.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_synthsis_fruit_guide_3`：Compete for ranking rewards by merging fruits.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_minigame_revive_syntheticfruits`：Clear the top fruits to continue
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_minigame_quit_confirm`：Quit game? Your progress will be saved.

未知项：碰撞/得分；道具成本；排行榜奖励。

建议复刻范围：单机合成玩法核心。成本：高；准备：需补证据；demo：未实现。

## YPH15 · 邀请新用户到二级领奖

核心循环：选奖励→邀请码引流→新用户注册打局到Lv2→减进度→限时达标领取。

特色解释（推断）：邀请质量按游戏参与与成长验证。

包体直接规则：
- 门槛：新用户注册且到2级
- 时序：活动倒计时内完成；部分奖励3工作日邮件发放
- 资源：邀请进度
- 回报：自选奖励

直接证据定位：
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_pn_tips16`：Invite new users to register and reach level 2 to receive the reward for free
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_system_boost2`：So lucky!  / Here is some free boost from the system.  /  / Keep inviting new users to complete the progress bar before the countdown ends and redeem the reward you have selected.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_pn_get0`：Congratulations!  /  / You have received a free {0}!  /  / The reward will be sent to your in-app mail within 3 business days.
- [analysis/unity-localization-values.json](analysis/unity-localization-values.json) · `assets/bin/Data/data.unity3d / 77 / ids_ui_pn_tips12`：1. Play one game  / and reach level 2

未知项：人数动态；反作弊；真实奖励。

建议复刻范围：邀请任务状态流。成本：中；准备：可先复刻；demo：未实现。

## 覆盖与剩余问题

这是选择性功能目录，不是全量产品规格。资源可能为旧文案、共享模块或未开启功能；A/B仍需真实账号与地区运行证据验证。C条目不能作为已确认的玩法规则。未核实概率、支付、服务器经济和真人体验；当前split可读但未全量反编译native实现。上述范围均需在选择复刻后锁定。
