# WePlay-AR 独特社交 / 权益 / 游戏 / 玩法选择目录

固定版本：`com.wejoy.weplay.ar` / 6.8.5；研究日期2026-10-13。共16项，原始业务覆盖仍为部分静态分析。

独特指本应用内有特色的机制，不声称市场独占；A为客户端代码/契约+文案互证，B明确资源规则，C入口/结构候选，均无原运行验收

本轮补扫全部当前split的资源表simple entries；非string入口和复杂bag的边界明确保留。资源名、ID、配置原始字节与具体text位置在 `analysis/resource-catalog.json`，其生成脚本为 `analysis/inspect-feature-catalog-resources.py`。沿用上轮真实REA Evidence，JP家族宝箱追加类/权限方法。新目录不改已有demo。

## 快速选择

| ID | 机制 | 分类 | 证据 | 复刻准备 | 本地难度 | demo |
|---|---|---|---|---|---|---|
| WAR01 | BFF门槛、竞拍旁路与关系展示槽位 | 社交 / 权益 / 玩法 | B明确资源规则 | 可先复刻 | 中 | 未实现 |
| WAR02 | BFF关系进阶：亲密进度、宝箱与专属关系卡 | 社交 / 游戏 / 玩法 | B明确资源规则 | 可先复刻 | 中 | 未实现 |
| WAR03 | 戒指替换保留旧物与关系年龄 | 社交 / 权益 | B明确资源规则 | 可先复刻 | 低 | 未实现 |
| WAR04 | 高级房容量扩张与到期回收 | 权益 / 社交 | B明确资源规则 | 可先复刻 | 低 | 未实现 |
| WAR05 | 高级房三管理员与到期权限撤销 | 权益 / 社交 | B明确资源规则 | 可先复刻 | 低 | 未实现 |
| WAR06 | 语音房宝箱倒计时与任务减时 | 权益 / 玩法 | B明确资源规则 | 可先复刻 | 低 | 未实现 |
| WAR07 | 签约歌手出题与审核回报 | 玩法 / 权益 / 社交 | B明确资源规则 | 可先复刻 | 中 | 未实现 |
| WAR08 | 玩家词题投稿与延后奖励 | 玩法 / 权益 | B明确资源规则 | 需补证据 | 低 | 未实现 |
| WAR09 | 绘画道具：付费延时与成长解锁颜色 | 游戏 / 权益 | B明确资源规则 | 可先复刻 | 中 | 未实现 |
| WAR10 | VIP全站广播、礼物隐私与成长转换 | 权益 / 社交 | B明确资源规则 | 可先复刻 | 中 | 未实现 |
| WAR11 | 家族人气徽章触发房间奖励 | 社交 / 权益 / 玩法 | B明确资源规则 | 可先复刻 | 低 | 未实现 |
| WAR12 | 卧底语音描述、不可撤销猜词与同投票结算交友 | 游戏 / 社交 / 玩法 | B明确资源规则 | 可先复刻 | 中 | 已有 |
| WAR13 | 家族宝箱：职位发放、周活门槛与解锁占用 | 社交 / 权益 / 玩法 | B明确资源规则 | 可先复刻 | 中 | 未实现 |
| WAR14 | Baloot金币房、系统接管与离局匹配冷却 | 游戏 / 玩法 / 权益 | B明确资源规则 | 需补证据 | 高 | 未实现 |
| WAR15 | 家族护盾库存的职位可见性 | 社交 / 权益 | B明确资源规则 | 可先复刻 | 低 | 未实现 |
| WAR16 | Bingo满卡后道具禁用 | 游戏 / 玩法 | B明确资源规则 | 需补证据 | 中 | 未实现 |

## WAR01 · BFF门槛、竞拍旁路与关系展示槽位

**交互闭环**：累积Guard达到普通BFF门槛 → 发起关系 → 对方同意 → 解锁展示槽位；竞拍房存在跳过Guard门槛的旁路。
**特色解释（推断）**：关系形成资格与关系展示容量分开；不是简单好友申请。

**可见规则/直接证据的解释**：
- 文本普通门槛为1000 Guard；竞拍BFF可绕过此门槛。
- 展示新增BFF槽位另需Gold，价格/槽位数是占位符。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `build_intimacy` / `0x7f13041c` / entry @3183780；`apks/com.wejoy.weplay.ar.apk`。摘录：To become a BFF, you need to reach a Guard of 1000! (In the bidding room, bidding for a BFF can bypass this requirement.)
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `ask_to_be_intimacy_friend_invited` / `0x7f13020c` / entry @3175764；`apks/com.wejoy.weplay.ar.apk`。摘录：Inviting, waiting for the other user to agree
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `build_intimacy_tips1` / `0x7f13041e` / entry @3183812；`apks/com.wejoy.weplay.ar.apk`。摘录：Are you sure to spend <b><font color=#FFA94A>%1$s</font></b> Gold to unlock the %2$sth BFF slot

**未知/待核验**：
- Guard增加/衰减公式、旁路服务端授权、并行申请与槽位价格未知。

**可复刻范围**：复刻普通门槛/竞拍旁路/同意/槽位四状态，Guard和Gold用虚拟变量，不接原资产。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 中 / 未实现。

## WAR02 · BFF关系进阶：亲密进度、宝箱与专属关系卡

**交互闭环**：先成为BFF → 在进阶局增加亲密 → 达阈值开宝箱 → 选专属关系卡 → 局末结算。
**特色解释（推断）**：将关系升级变成房内多人可观看的进度与选卡事件；抽取动画不直接决定最终卡。

**可见规则/直接证据的解释**：
- 只有BFF能进更亲密关系；房主可竞拍BFF但不能参与关系进阶。
- 亲密达动态阈值解锁宝箱，每轮最多取得1卡；抽卡结果用于展示，最终以玩家选择为准。
- 选择超时随机分配；结束/下麦清空本轮进度。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `auction_advance_progress_tips` / `0x7f130240` / entry @3176580；`apks/com.wejoy.weplay.ar.apk`。摘录：Only BFF can have more intimate relationships
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `auction_advance_owner_tip` / `0x7f13023f` / entry @3176564；`apks/com.wejoy.weplay.ar.apk`。摘录：The game is about to end. The host can bid a BFF, but the host cannot participate in the "Relationship Advancement" ~
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `auction_advance_card_box_unlock_tips` / `0x7f13022e` / entry @3176292；`apks/com.wejoy.weplay.ar.apk`。摘录：It can be unlocked when your intimacy reaches %1$s
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `auction_advance_card_box_award_tips` / `0x7f13021f` / entry @3176052；`apks/com.wejoy.weplay.ar.apk`。摘录：Note: Cards can be drawn each time the chest is opened, but players can get <font color="#FFD392"> up to 1 card per round</font>
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `auction_advance_card_box_award_tips_had` / `0x7f130220` / entry @3176068；`apks/com.wejoy.weplay.ar.apk`。摘录：Note: the result of the player's card drawing is only used as a display, and the final card is subject to the player's selection
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `auction_advance_card_select_tips` / `0x7f130233` / entry @3176372；`apks/com.wejoy.weplay.ar.apk`。摘录：If not selected, the result will be randomly allocated after <font color="#FFD392">%1$s s</font>
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `auction_advance_close_tip` / `0x7f130236` / entry @3176420；`apks/com.wejoy.weplay.ar.apk`。摘录：Are you sure to end this round of progress? (After ending, players will enter game settlement, and the accumulated intimacy points for this round will be cleared)

**未知/待核验**：
- 阈值、卡池、随机分布、亲密增加方式及落库冲突未知。

**可复刻范围**：复刻BFF→进度→解锁→选择/超时→结算闭环，阈值/超时显式作为研究参数。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 中 / 未实现。

## WAR03 · 戒指替换保留旧物与关系年龄

**交互闭环**：关系中使用新戒指 → 旧戒指入盒 → 关系年龄保留 → Charm/Guard按新戒指属性更新。
**特色解释（推断）**：展示装备更换与长期关系记忆分离，新道具不抹掉关系历史。

**可见规则/直接证据的解释**：
- 新戒指不需要对方再次批准；旧戒指保存。
- 婚姻时间不变；Charm、Guard依据新戒指属性改变。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `add_couple_ring` / `0x7f1301a8` / entry @3174324；`apks/com.wejoy.weplay.ar.apk`。摘录：- You can use rings of any value / - You don't need approval to use new rings / - When new rings are used, the previous ones will be saved in the ring box / - The time of your marriage will not be changed / - Charm and Guard Pts will increase according to the new rings' stats

**未知/待核验**：
- 是否能降低数值、戒指属性表、赠予/撤销和服务端防重未知。

**可复刻范围**：复刻装备替换、历史盒子、年龄保留与属性快照；关系成立条件另行定义。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 低 / 未实现。

## WAR04 · 高级房容量扩张与到期回收

**交互闭环**：高级房开通 → 上限40扩到80 → 到期降回40 → 保留现有超额成员但暂停新增。
**特色解释（推断）**：权限回收遵循保留存量、限制增量；避免到期粗暴踢人。

**可见规则/直接证据的解释**：
- 资源明确40→80→40。
- 到期超额成员不删除，但不能再接收新成员。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `game_room_vip_desc_desc_01` / `0x7f130bab` / entry @3211748；`apks/com.wejoy.weplay.ar.apk`。摘录：The member limit of Advanced Room will be promoted from 40 to 80. /  / Once it expires, the member limit will be reduced to 40 again. Excess members will not be deleted, but the room will not be able to hold any new member.

**未知/待核验**：
- 踢人后何时恢复新增、房主转让、离线人数口径与服务器一致性未知。

**可复刻范围**：复刻到期计时/容量和既有成员保留，模拟多个加入请求，不做真实订阅。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 低 / 未实现。

## WAR05 · 高级房三管理员与到期权限撤销

**交互闭环**：任命最多3管理员 → 管理游戏模式/人数/陌生人准入/等级/踢人 → 高级房到期统一撤权。
**特色解释（推断）**：将社交房的协同管理作为可到期的权益，而非永久管理员。

**可见规则/直接证据的解释**：
- 最多3管理员；可改模式/人数、允许或拒绝陌生人、设等级门槛和移除成员。
- 到期管理员失去上述权限，等级门槛也不可设置。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `game_room_vip_desc_desc_06` / `0x7f130bb0` / entry @3211828；`apks/com.wejoy.weplay.ar.apk`。摘录：You can appoint up to 3 admins in an Advanced Room. /  / Admins can change the game mode and member number, allow in and reject strangers, set a level requirement and kick out members. /  / Once it expires, admins will lose these rights.
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `game_room_vip_desc_desc_07` / `0x7f130bb1` / entry @3211844；`apks/com.wejoy.weplay.ar.apk`。摘录：You can set a level requirement for members in an Advanced Room. /  / Once it expires, you will not be able to use this feature.

**未知/待核验**：
- 权限细粒度组合、房主覆盖、强退及操作竞态未知。

**可复刻范围**：复刻可撤销角色授权表、到期事件和操作日志，不接原后台。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 低 / 未实现。

## WAR06 · 语音房宝箱倒计时与任务减时

**交互闭环**：房内停留推进宝箱倒计时 → 完成任务减少剩余时间 → 达条件可开宝箱。
**特色解释（推断）**：参与行为既积累在线时间，又直接压缩领取等待。

**可见规则/直接证据的解释**：
- 在Voice Room停留一段时间后可开启对应箱。
- 每完成一个任务减少开启倒计时1分钟。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `treasure_desc` / `0x7f13183e` / entry @3259908；`apks/com.wejoy.weplay.ar.apk`。摘录：Watching for some time in the Voice Room to open corresponding Treasure Box~
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `treasure_task_desc` / `0x7f131842` / entry @3259972；`apks/com.wejoy.weplay.ar.apk`。摘录：Every task you completed will decrease the countdown of treasure box opening for 1 minute

**未知/待核验**：
- 实际停留条件、后台/静音/断网处理、任务重复计数、奖励概率未知。

**可复刻范围**：复刻计时与幂等任务减时，最低归零为明确重构选择；不宣称原后台时钟策略。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 低 / 未实现。

## WAR07 · 签约歌手出题与审核回报

**交互闭环**：获得签约歌手资格 → 每日录制投稿 → 审核 → 歌曲进入唱歌题库并获得奖励。
**特色解释（推断）**：玩家同时是题库内容生产者；资格奖励和作品通过奖励分开。

**可见规则/直接证据的解释**：
- 文本成为签约歌手奖励50 Gold。
- 每天最多提交1首；每首审核通过奖励20 Gold。
- 上传歌曲需要作品/授权承诺，原审核执行未知。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `contribute_song_tips1` / `0x7f130688` / entry @3192372；`apks/com.wejoy.weplay.ar.apk`。摘录：Hey, my name is Paul, producer of the show.<br> You need to get the qualification before submitting questions for singing games!<br> Becoming a contracted singer also grants <strong>50 Gold</strong>. Try your best!
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `contribute_song_full_activity_2` / `0x7f130685` / entry @3192324；`apks/com.wejoy.weplay.ar.apk`。摘录：Every contracted singer can submit 1 song a day. Every approved song grants 20 Gold

**未知/待核验**：
- 资格考核、曲库版权核验、音频审核及各语言奖励货币配置未知。

**可复刻范围**：复刻资格→投稿→待审→通过/拒绝→题库→奖励的内容循环，只用原创样本音频。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 中 / 未实现。

## WAR08 · 玩家词题投稿与延后奖励

**交互闭环**：提交村民词/卧底词或绘画词 → 审核 → 通过才付奖励。
**特色解释（推断）**：把玩家语言创作接入游戏内容池；即时提交与权益到账分离。

**可见规则/直接证据的解释**：
- 文案每份贡献5 Gold并由Judge审核后发放。
- “up to25 per day”的单位在英文文案不明确，不据此断言25份或25 Gold。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `contribute_word_tips` / `0x7f13068a` / entry @3192388；`apks/com.wejoy.weplay.ar.apk`。摘录：Award Subject, 5 gold for 1 contribution, up to 25 per day. (Subject will be reviewed by Judge, gold will be sent after passing.)
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `game_room_word_contribute_tips_1` / `0x7f130bd1` / entry @3212324；`apks/com.wejoy.weplay.ar.apk`。摘录：Theme

**未知/待核验**：
- 适用游戏、每日25的单位、审核标准/队列及多语字符算法未知。

**可复刻范围**：复刻审核后才奖励、重复投稿去重；日限额须先明确产品单位。
**准备程度 / 本地工作量 / 已有demo**：需补证据 / 低 / 未实现。

## WAR09 · 绘画道具：付费延时与成长解锁颜色

**交互闭环**：绘画倒计时中支付虚拟币延时 → 颜色以Gold或等级/EXP双路径解锁。
**特色解释（推断）**：把局内创作资源与长期成长绑定，付款只是一条解锁路径。

**可见规则/直接证据的解释**：
- 颜色可用Gold解锁，也可达到绘画等级/EXP免费解锁。
- 延长绘画时间需要Gold；延时秒数在不同资源是固定或占位参数。
- 取消准备最多2次/局的资源文案也存在。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `draw_unlock_color_in_game` / `0x7f13080e` / entry @3197828；`apks/com.wejoy.weplay.ar.apk`。摘录：Spend %1$d Gold to unlock this color / You need %2$d more EXP to unlock it for free
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `draw_unlock_color_in_other` / `0x7f13080f` / entry @3197844；`apks/com.wejoy.weplay.ar.apk`。摘录：Spend %1$d Gold to unlock this color / You need to reach Draw & Guess Lv.%2$d to unlock it for free
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `game_room_draw_room_prolong_time` / `0x7f130b19` / entry @3209556；`apks/com.wejoy.weplay.ar.apk`。摘录：Spend %1$d Gold to prolong the drawing time by %2$ds?
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `draw_game_unready_max_time_2` / `0x7f130805` / entry @3197684；`apks/com.wejoy.weplay.ar.apk`。摘录：You can cancel getting ready up to twice a game

**未知/待核验**：
- 每色费用、笔迹授权、动画/实时协作协议和延时竞态未知。

**可复刻范围**：复刻双色解锁路径、画布工具和倒计时权益，所有价格/延时作为配置参数。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 中 / 未实现。

## WAR10 · VIP全站广播、礼物隐私与成长转换

**交互闭环**：赠领VIP卡/Charm转成长 → VIP广播占公共展示位 → 新广播覆盖旧 → 隐藏近期礼物。
**特色解释（推断）**：身份权益同时改变展示竞争和社交可见性，而非仅头像装饰。

**可见规则/直接证据的解释**：
- 广播默认显示5分钟，其他VIP的新广播覆盖最后一条。
- 资源允许把Charm转换为VIP Growth Pts。
- 近期礼物隐藏：本包未在该文案注明VIP等级。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `activity_send_vip_desc` / `0x7f13012e` / entry @3172484；`apks/com.wejoy.weplay.ar.apk`。摘录：The default display time of broadcast is 5 minutes。  / When other VIP users release a new broadcast post, the last one will be covered
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `activity_gain_vip_gift_4` / `0x7f1300bb` / entry @3170676；`apks/com.wejoy.weplay.ar.apk`。摘录：Claim it to convert Charm into VIP Growth Pts
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `vip_user_hide_receive_gift` / `0x7f131973` / entry @3264644；`apks/com.wejoy.weplay.ar.apk`。摘录：The player enabled VIP Exclusive feature: Hide recent gifts

**未知/待核验**：
- 转换倍率、等级保持、广播队列、退款回收与隐私服务端范围未知。

**可复刻范围**：复刻有限展示位的替换规则、可见性开关和成长账本；原会员经济不复刻。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 中 / 未实现。

## WAR11 · 家族人气徽章触发房间奖励

**交互闭环**：家族累积人气 → 徽章达到阈值 → 用户确认触发房间奖励 → 扣除当天触发额度。
**特色解释（推断）**：集体成就需要主动触发，并有每日次数额度。

**可见规则/直接证据的解释**：
- 徽章达到动态等级可点OK触发房间奖励。
- 每天可打开次数和剩余次数均由占位值显示。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `hot_badge_dialog_tips1` / `0x7f130d6b` / entry @3218388；`apks/com.wejoy.weplay.ar.apk`。摘录：Congrats, the family popularity badge has reached %d / Click OK to trigger the following room rewards:
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `confirm_open_hot_badge_tips` / `0x7f130674` / entry @3192068；`apks/com.wejoy.weplay.ar.apk`。摘录：Are you sure you want to turn on the popularity badge feature?  /  (can be opened %d times per day, %d times left)

**未知/待核验**：
- 人气来源、阈值、奖励表、计日时区与冷却未知。

**可复刻范围**：复刻多人贡献进度、确认触发与次数扣减；奖励使用固定实验道具。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 低 / 未实现。

## WAR12 · 卧底语音描述、不可撤销猜词与同投票结算交友

**交互闭环**：分配词卡 → 轮流语音描述 → 票选或卧底猜村民词 → 揭词 → 用同目标投票次数推荐同桌。
**特色解释（推断）**：结算关系候选由共同决策轨迹解释，而非任意推荐名单。

**可见规则/直接证据的解释**：
- 双词/双卧底文案存在语言歧义，最大字符为占位值。
- 描述超时会被跳过；确认猜村民词后不可取消。
- 改房人数会重新分词、换词会重开。
- 结算文案显示两人投相同目标次数并建议交朋友。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `double_spies_spy_words_not_exceed_x_characters` / `0x7f130797` / entry @3195924；`apks/com.wejoy.weplay.ar.apk`。摘录：When there are 2 spies, the spy words must not exceed %s characters
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `game_room_spy_bomb_word_confirm_desc` / `0x7f130b68` / entry @3210740；`apks/com.wejoy.weplay.ar.apk`。摘录：Are you sure to guess the villagers’ word?<b> After confirmation, it cannot be cancelled.</b>
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `game_room_spy_not_speak_tip` / `0x7f130b7f` / entry @3211108；`apks/com.wejoy.weplay.ar.apk`。摘录：Please describe the word by voice, otherwise you will be skipped after <font color=#FFEB35>%1$ss</font>
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `party_spy_change_config_tips_when_not_gaming` / `0x7f1311a6` / entry @3234340；`apks/com.wejoy.weplay.ar.apk`。摘录：After changing the number of people in the room, the words will be reassigned. Are you sure to change it?
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `spy_game_end_match_tips_4` / `0x7f131719` / entry @3255764；`apks/com.wejoy.weplay.ar.apk`。摘录：He/she and I voted for the same target %1$d times. You understand each other perfectly! Why don't you be friends!?

**未知/待核验**：
- 角色配比、平票、猜词成功判定、共享投票匹配算法及真实加友服务未知。

**可复刻范围**：已有AR本地实验只含模拟描述/投票/单向交友选择；猜词不可逆与同投票解释未实现，可选补。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 中 / 已有。

## WAR13 · 家族宝箱：职位发放、周活门槛与解锁占用

**交互闭环**：Leader/Deputy配置家族宝箱 → 成员达周活条件 → 解锁等待 → 领取奖励。
**特色解释（推断）**：组织职位、成员贡献和奖池发放权限绑定。

**可见规则/直接证据的解释**：
- 不具备发箱资格时提示找Leader/Deputy。
- 周活达占位阈值才可领取；一箱开始后不能停止或再解锁其他箱。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `family_send_box_error_tips1` / `0x7f1309d0` / entry @3204628；`apks/com.wejoy.weplay.ar.apk`。摘录：You are not qualified to send chests. Ask your Leader or Deputy to do it!
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `family_main_activity_week_active_dialog_tips` / `0x7f130948` / entry @3202468；`apks/com.wejoy.weplay.ar.apk`。摘录：Weekly Activity reach %1$d to claim
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `family_grab_box_box_unlock_normal_content` / `0x7f1308ff` / entry @3201300；`apks/com.wejoy.weplay.ar.apk`。摘录：You can't stop or unlock another  /  chest once it starts

**未知/待核验**：
- 领取名单、奖池分配与解锁的作用域未知；本包未直接匹配日韩Limited/Normal文字。

**可复刻范围**：复刻Leader发放/周活资格/单解锁占用，不借用日韩双模式作原包事实。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 中 / 未实现。

## WAR14 · Baloot金币房、系统接管与离局匹配冷却

**交互闭环**：设置房间出牌/叫牌时限及金币结算 → 开局 → 退出由系统接管 → 限制短期重新匹配。
**特色解释（推断）**：桌游离局后的代理行为与匹配/收益惩罚同时存在。

**可见规则/直接证据的解释**：
- 退出后系统接管，3分钟内不能匹配、不能赢Gold，并按占位金额扣除。
- 资源描述出牌/叫牌时间设置、金币结算设置。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `baloot_force_quit_tip_s` / `0x7f1302fc` / entry @3179588；`apks/com.wejoy.weplay.ar.apk`。摘录：The game is in progress. Do you want to quit this game? After exiting the game, the system will take over, but the match cannot be carried out within 3 minutes and the gold cannot be won (%1$s will be deducted when exiting the game at present).
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `baloot_config_help_tip4` / `0x7f1302f4` / entry @3179460；`apks/com.wejoy.weplay.ar.apk`。摘录：The round time you can spend on bidding or playing.
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `baloot_config_help_tip6` / `0x7f1302f6` / entry @3179492；`apks/com.wejoy.weplay.ar.apk`。摘录：This room will use gold in final settlement.

**未知/待核验**：
- Baloot叫牌/牌型/积分、安全托管策略及当前金额未知。

**可复刻范围**：先做退出→托管→冷却→收益限制的外围状态；完整Baloot须恢复规则。
**准备程度 / 本地工作量 / 已有demo**：需补证据 / 高 / 未实现。

## WAR15 · 家族护盾库存的职位可见性

**交互闭环**：开启Hide Shield → 普通成员不见护盾数 → Leader/Deputy可见真实计数。
**特色解释（推断）**：同一个集体资源有角色分层的可见性，而不是统一隐藏。

**可见规则/直接证据的解释**：
- 隐藏状态Leader/Deputy仍可看到Current shield count。
- 其他成员仅显示已启用隐藏，不给数字。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `family_defence_leader_tips` / `0x7f1308d5` / entry @3200628；`apks/com.wejoy.weplay.ar.apk`。摘录：The hide shield is activated, and the family shield count is hidden. Current shield count: %1$s (visible only to the Leader and Deputy Leader)
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `family_defence_not_leader_tips` / `0x7f1308d6` / entry @3200644；`apks/com.wejoy.weplay.ar.apk`。摘录：The hide shield is activated, and the family shield count is hidden.

**未知/待核验**：
- 护盾消耗/补充、可见性切换者、客户端缓存与服务器校验未知。

**可复刻范围**：复刻按角色投影的集体库存，并明确只是本地权限实验。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 低 / 未实现。

## WAR16 · Bingo满卡后道具禁用

**交互闭环**：购买卡片并开局 → 填卡 → 全卡Bingo后禁用道具。
**特色解释（推断）**：胜利/完成状态会收回局内消耗能力，而不是仍允许无意义使用。

**可见规则/直接证据的解释**：
- 资源明确全Bingo卡后不能使用items。
- 有等待其他玩家买卡和道具入口，完整数值规则未恢复。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `all_bingo_tips` / `0x7f1301e5` / entry @3175220；`apks/com.wejoy.weplay.ar.apk`。摘录：You've got a full Bingo card, items can't be used now
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `bingo_card_finish_tips2` / `0x7f13035e` / entry @3181092；`apks/com.wejoy.weplay.ar.apk`。摘录：Waiting for other players to buy cards…

**未知/待核验**：
- 开球/标记规则、卡牌生成、道具效果和完整胜负未知。

**可复刻范围**：仅可做完成后禁用道具的状态实验，完整Bingo暂需更多证据。
**准备程度 / 本地工作量 / 已有demo**：需补证据 / 中 / 未实现。

## 地区对照与覆盖

日韩包的许多默认资源一致，应合并选一个核心实现后再做本地化；不能据默认文案断言线上开关相同。阿语Baloot、家族护盾等条目按本包来源独立列出；此处未命中某条文本不证明功能不存在。

会员到期、随机奖励、关系和小游戏均未完成原Android/服务端运行验收。价格、动态阈值、时区、公平性和配置不以演示常量代替。后续选择请报稳定ID，可一次选择多个应用的多个模块。
