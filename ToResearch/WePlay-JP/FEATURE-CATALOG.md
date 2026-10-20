# WePlay-JP 独特社交 / 权益 / 游戏 / 玩法选择目录

固定版本：`com.wejoy.weplay.jp` / 6.12.0；研究日期2026-10-13。共19项，原始业务覆盖仍为部分静态分析。

独特指本应用内有特色的机制，不声称市场独占；A为客户端代码/契约+文案互证，B明确资源规则，C入口/结构候选，均无原运行验收

本轮补扫全部当前split的资源表simple entries；非string入口和复杂bag的边界明确保留。资源名、ID、配置原始字节与具体text位置在 `analysis/resource-catalog.json`，其生成脚本为 `analysis/inspect-feature-catalog-resources.py`。沿用上轮真实REA Evidence，JP家族宝箱追加类/权限方法。新目录不改已有demo。

## 快速选择

| ID | 机制 | 分类 | 证据 | 复刻准备 | 本地难度 | demo |
|---|---|---|---|---|---|---|
| WJP01 | BFF门槛、竞拍旁路与关系展示槽位 | 社交 / 权益 / 玩法 | B明确资源规则 | 可先复刻 | 中 | 未实现 |
| WJP02 | BFF关系进阶：亲密进度、宝箱与专属关系卡 | 社交 / 游戏 / 玩法 | B明确资源规则 | 可先复刻 | 中 | 未实现 |
| WJP03 | 戒指替换保留旧物与关系年龄 | 社交 / 权益 | B明确资源规则 | 可先复刻 | 低 | 未实现 |
| WJP04 | 高级房容量扩张与到期回收 | 权益 / 社交 | B明确资源规则 | 可先复刻 | 低 | 未实现 |
| WJP05 | 高级房三管理员与到期权限撤销 | 权益 / 社交 | B明确资源规则 | 可先复刻 | 低 | 未实现 |
| WJP06 | 语音房宝箱倒计时与任务减时 | 权益 / 玩法 | B明确资源规则 | 可先复刻 | 低 | 未实现 |
| WJP07 | 签约歌手出题与审核回报 | 玩法 / 权益 / 社交 | B明确资源规则 | 可先复刻 | 中 | 未实现 |
| WJP08 | 玩家词题投稿与延后奖励 | 玩法 / 权益 | B明确资源规则 | 需补证据 | 低 | 未实现 |
| WJP09 | 绘画道具：付费延时与成长解锁颜色 | 游戏 / 权益 | B明确资源规则 | 可先复刻 | 中 | 未实现 |
| WJP10 | VIP全站广播、礼物隐私与成长转换 | 权益 / 社交 | B明确资源规则 | 可先复刻 | 中 | 未实现 |
| WJP11 | 家族人气徽章触发房间奖励 | 社交 / 权益 / 玩法 | B明确资源规则 | 可先复刻 | 低 | 未实现 |
| WJP12 | 卧底语音描述、不可撤销猜词与同投票结算交友 | 游戏 / 社交 / 玩法 | B明确资源规则 | 可先复刻 | 中 | 未实现 |
| WJP13 | 家族宝箱：锁定名单与领取时动态校验 | 社交 / 权益 / 玩法 | A代码+文案 | 可先复刻 | 中 | 未实现 |
| WJP14 | 绘画接力：上一棒、展示确认与赞踩 | 游戏 / 社交 | A代码+文案 | 可先复刻 | 中 | 已有 |
| WJP15 | 抢麦：练习局转正式的下一题生效 | 游戏 / 玩法 / 权益 | B明确资源规则 | 可先复刻 | 中 | 未实现 |
| WJP16 | 次日婚礼堂竞拍与固定婚礼时段 | 社交 / 权益 / 玩法 | B明确资源规则 | 可先复刻 | 中 | 未实现 |
| WJP17 | 关系退出：未回复三天自动拒绝 | 社交 / 权益 | B明确资源规则 | 可先复刻 | 低 | 未实现 |
| WJP18 | 双人画布协作入口 | 游戏 / 社交 | C结构或入口候选 | 需补证据 | 高 | 未实现 |
| WJP19 | Puppet/Mind：四槽装配与遗迹一轮一次 | 游戏 / 权益 | B明确资源规则 | 需补证据 | 高 | 未实现 |

## WJP01 · BFF门槛、竞拍旁路与关系展示槽位

**交互闭环**：累积Guard达到普通BFF门槛 → 发起关系 → 对方同意 → 解锁展示槽位；竞拍房存在跳过Guard门槛的旁路。
**特色解释（推断）**：关系形成资格与关系展示容量分开；不是简单好友申请。

**可见规则/直接证据的解释**：
- 文本普通门槛为1000 Guard；竞拍BFF可绕过此门槛。
- 展示新增BFF槽位另需Gold，价格/槽位数是占位符。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `build_intimacy` / `0x7f1305ba` / entry @4872320；`apks/com.wejoy.weplay.jp.apk`。摘录：To become a BFF, your Guard to your friend have to reach 1000. (In the bidding room, bid your friend saves 1000 Guard)
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `build_intimacy_tips1` / `0x7f1305bc` / entry @4872352；`apks/com.wejoy.weplay.jp.apk`。摘录：Unlocking the %2$s close friend slot requires <b><font color=#FFA94A>%1$s</font></b> Gold coins

**未知/待核验**：
- Guard增加/衰减公式、旁路服务端授权、并行申请与槽位价格未知。

**可复刻范围**：复刻普通门槛/竞拍旁路/同意/槽位四状态，Guard和Gold用虚拟变量，不接原资产。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 中 / 未实现。

## WJP02 · BFF关系进阶：亲密进度、宝箱与专属关系卡

**交互闭环**：先成为BFF → 在进阶局增加亲密 → 达阈值开宝箱 → 选专属关系卡 → 局末结算。
**特色解释（推断）**：将关系升级变成房内多人可观看的进度与选卡事件；抽取动画不直接决定最终卡。

**可见规则/直接证据的解释**：
- 只有BFF能进更亲密关系；房主可竞拍BFF但不能参与关系进阶。
- 亲密达动态阈值解锁宝箱，每轮最多取得1卡；抽卡结果用于展示，最终以玩家选择为准。
- 选择超时随机分配；结束/下麦清空本轮进度。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `auction_advance_progress_tips` / `0x7f130388` / entry @4863328；`apks/com.wejoy.weplay.jp.apk`。摘录：Only close friends can have more intimate relationships
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `auction_advance_owner_tip` / `0x7f130387` / entry @4863312；`apks/com.wejoy.weplay.jp.apk`。摘录：The game is about to end. The host can bid a BFF, but the host cannot participate in the "Relationship Advancement" ~
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `auction_advance_card_box_unlock_tips` / `0x7f130374` / entry @4863008；`apks/com.wejoy.weplay.jp.apk`。摘录：It can be unlocked when your intimacy reaches %1$s
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `auction_advance_card_box_award_tips` / `0x7f130365` / entry @4862768；`apks/com.wejoy.weplay.jp.apk`。摘录：Note: Cards can be drawn each time the chest is opened, but players can get <font color="#FFD392"> up to 1 card per round</font>
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `auction_advance_card_box_award_tips_had` / `0x7f130366` / entry @4862784；`apks/com.wejoy.weplay.jp.apk`。摘录：Note: the result of the player's card drawing is only used as a display, and the final card is subject to the player's selection
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `auction_advance_card_select_tips` / `0x7f130379` / entry @4863088；`apks/com.wejoy.weplay.jp.apk`。摘录：It will be randomly assigned after <font color="#FFD392">%1$ss</font>
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `auction_advance_close_tip` / `0x7f13037c` / entry @4863136；`apks/com.wejoy.weplay.jp.apk`。摘录：Are you sure to end this round of relationship advancement? (after the end of the advancement, the game settlement will begin, and the accumulated Intimacy of this round will be cleared)

**未知/待核验**：
- 阈值、卡池、随机分布、亲密增加方式及落库冲突未知。

**可复刻范围**：复刻BFF→进度→解锁→选择/超时→结算闭环，阈值/超时显式作为研究参数。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 中 / 未实现。

## WJP03 · 戒指替换保留旧物与关系年龄

**交互闭环**：关系中使用新戒指 → 旧戒指入盒 → 关系年龄保留 → Charm/Guard按新戒指属性更新。
**特色解释（推断）**：展示装备更换与长期关系记忆分离，新道具不抹掉关系历史。

**可见规则/直接证据的解释**：
- 新戒指不需要对方再次批准；旧戒指保存。
- 婚姻时间不变；Charm、Guard依据新戒指属性改变。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `add_couple_ring` / `0x7f1302bd` / entry @4860128；`apks/com.wejoy.weplay.jp.apk`。摘录：- You can use rings of any value / - You don't need approval to use new rings / - When new rings are used, the previous ones will be saved in the ring box / - The time of your marriage will not be changed / - Charm and Guard Pts will increase according to the new rings' stats

**未知/待核验**：
- 是否能降低数值、戒指属性表、赠予/撤销和服务端防重未知。

**可复刻范围**：复刻装备替换、历史盒子、年龄保留与属性快照；关系成立条件另行定义。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 低 / 未实现。

## WJP04 · 高级房容量扩张与到期回收

**交互闭环**：高级房开通 → 上限40扩到80 → 到期降回40 → 保留现有超额成员但暂停新增。
**特色解释（推断）**：权限回收遵循保留存量、限制增量；避免到期粗暴踢人。

**可见规则/直接证据的解释**：
- 资源明确40→80→40。
- 到期超额成员不删除，但不能再接收新成员。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `game_room_vip_desc_desc_01` / `0x7f1311f7` / entry @4922416；`apks/com.wejoy.weplay.jp.apk`。摘录：The member limit of Advanced Room will be promoted from 40 to 80. /  / Once it expires, the member limit will be reduced to 40 again. Excess members will not be deleted, but the room will not be able to hold any new member.

**未知/待核验**：
- 踢人后何时恢复新增、房主转让、离线人数口径与服务器一致性未知。

**可复刻范围**：复刻到期计时/容量和既有成员保留，模拟多个加入请求，不做真实订阅。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 低 / 未实现。

## WJP05 · 高级房三管理员与到期权限撤销

**交互闭环**：任命最多3管理员 → 管理游戏模式/人数/陌生人准入/等级/踢人 → 高级房到期统一撤权。
**特色解释（推断）**：将社交房的协同管理作为可到期的权益，而非永久管理员。

**可见规则/直接证据的解释**：
- 最多3管理员；可改模式/人数、允许或拒绝陌生人、设等级门槛和移除成员。
- 到期管理员失去上述权限，等级门槛也不可设置。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `game_room_vip_desc_desc_06` / `0x7f1311fc` / entry @4922496；`apks/com.wejoy.weplay.jp.apk`。摘录：You can appoint up to 3 admins in an Advanced Room. /  / Admins can change the game mode and member number, allow in and reject strangers, set a level requirement and kick out members. /  / Once it expires, admins will lose these rights.
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `game_room_vip_desc_desc_07` / `0x7f1311fd` / entry @4922512；`apks/com.wejoy.weplay.jp.apk`。摘录：You can set a level requirement for members in an Advanced Room. /  / Once it expires, you will not be able to use this feature.

**未知/待核验**：
- 权限细粒度组合、房主覆盖、强退及操作竞态未知。

**可复刻范围**：复刻可撤销角色授权表、到期事件和操作日志，不接原后台。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 低 / 未实现。

## WJP06 · 语音房宝箱倒计时与任务减时

**交互闭环**：房内停留推进宝箱倒计时 → 完成任务减少剩余时间 → 达条件可开宝箱。
**特色解释（推断）**：参与行为既积累在线时间，又直接压缩领取等待。

**可见规则/直接证据的解释**：
- 在Voice Room停留一段时间后可开启对应箱。
- 每完成一个任务减少开启倒计时1分钟。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `treasure_desc` / `0x7f132574` / entry @5001760；`apks/com.wejoy.weplay.jp.apk`。摘录：Watching for some time in the Voice Room to open corresponding Treasure Box~
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `treasure_task_desc` / `0x7f132579` / entry @5001840；`apks/com.wejoy.weplay.jp.apk`。摘录：Every task you completed will decrease the countdown of treasure box opening for 1 minute

**未知/待核验**：
- 实际停留条件、后台/静音/断网处理、任务重复计数、奖励概率未知。

**可复刻范围**：复刻计时与幂等任务减时，最低归零为明确重构选择；不宣称原后台时钟策略。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 低 / 未实现。

## WJP07 · 签约歌手出题与审核回报

**交互闭环**：获得签约歌手资格 → 每日录制投稿 → 审核 → 歌曲进入唱歌题库并获得奖励。
**特色解释（推断）**：玩家同时是题库内容生产者；资格奖励和作品通过奖励分开。

**可见规则/直接证据的解释**：
- 文本成为签约歌手奖励50 Gold。
- 每天最多提交1首；每首审核通过奖励20 Gold。
- 上传歌曲需要作品/授权承诺，原审核执行未知。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `contribute_song_tips1` / `0x7f1309a7` / entry @4888400；`apks/com.wejoy.weplay.jp.apk`。摘录：Hey, my name is Paul, producer of the show.<br> You need to get the qualification before submitting questions for singing games!<br> Becoming a contracted singer also grants <strong>50 Gold</strong>. Try your best!
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `contribute_song_full_activity_2` / `0x7f1309a4` / entry @4888352；`apks/com.wejoy.weplay.jp.apk`。摘录：Every contracted singer can submit 1 song a day. Every approved song grants 20 Gold

**未知/待核验**：
- 资格考核、曲库版权核验、音频审核及各语言奖励货币配置未知。

**可复刻范围**：复刻资格→投稿→待审→通过/拒绝→题库→奖励的内容循环，只用原创样本音频。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 中 / 未实现。

## WJP08 · 玩家词题投稿与延后奖励

**交互闭环**：提交村民词/卧底词或绘画词 → 审核 → 通过才付奖励。
**特色解释（推断）**：把玩家语言创作接入游戏内容池；即时提交与权益到账分离。

**可见规则/直接证据的解释**：
- 文案每份贡献5 Gold并由Judge审核后发放。
- “up to25 per day”的单位在英文文案不明确，不据此断言25份或25 Gold。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `contribute_word_tips` / `0x7f1309a9` / entry @4888432；`apks/com.wejoy.weplay.jp.apk`。摘录：Award Subject, 5 gold for 1 contribution, up to 25 per day. (Subject will be reviewed by Judge, gold will be sent after passing.)
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `game_room_word_contribute_tips_1` / `0x7f1312c6` / entry @4925728；`apks/com.wejoy.weplay.jp.apk`。摘录：Word Type

**未知/待核验**：
- 适用游戏、每日25的单位、审核标准/队列及多语字符算法未知。

**可复刻范围**：复刻审核后才奖励、重复投稿去重；日限额须先明确产品单位。
**准备程度 / 本地工作量 / 已有demo**：需补证据 / 低 / 未实现。

## WJP09 · 绘画道具：付费延时与成长解锁颜色

**交互闭环**：绘画倒计时中支付虚拟币延时 → 颜色以Gold或等级/EXP双路径解锁。
**特色解释（推断）**：把局内创作资源与长期成长绑定，付款只是一条解锁路径。

**可见规则/直接证据的解释**：
- 颜色可用Gold解锁，也可达到绘画等级/EXP免费解锁。
- 有明确30s延时文案，也有可配置秒数文案；适用绘画模式尚未绑定，不把30s当全模式常量。
- 取消准备最多2次/局的资源文案也存在。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `draw_unlock_color_in_game` / `0x7f130c6c` / entry @4899728；`apks/com.wejoy.weplay.jp.apk`。摘录：Spend %1$d Gold to unlock this color / You need %2$d more EXP to unlock it for free
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `draw_unlock_color_in_other` / `0x7f130c6d` / entry @4899744；`apks/com.wejoy.weplay.jp.apk`。摘录：Spend %1$d Gold to unlock this color / You need to reach Draw & Guess Lv.%2$d to unlock it for free
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `game_room_draw_room_prolong_time` / `0x7f13111c` / entry @4918912；`apks/com.wejoy.weplay.jp.apk`。摘录：Spend %1$d Gold to prolong the drawing time by %2$ds?
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `draw_game_unready_max_time_2` / `0x7f130c11` / entry @4898272；`apks/com.wejoy.weplay.jp.apk`。摘录：You can cancel getting ready up to twice a game

**未知/待核验**：
- 每色费用、笔迹授权、动画/实时协作协议和延时竞态未知。

**可复刻范围**：复刻双色解锁路径、画布工具和倒计时权益，所有价格/延时作为配置参数。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 中 / 未实现。

## WJP10 · VIP全站广播、礼物隐私与成长转换

**交互闭环**：赠领VIP卡/Charm转成长 → VIP广播占公共展示位 → 新广播覆盖旧 → 隐藏近期礼物。
**特色解释（推断）**：身份权益同时改变展示竞争和社交可见性，而非仅头像装饰。

**可见规则/直接证据的解释**：
- 广播默认显示5分钟，其他VIP的新广播覆盖最后一条。
- 资源允许把Charm转换为VIP Growth Pts。
- 近期礼物隐藏：本包资源明确VIP7。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `activity_send_vip_desc` / `0x7f1301cc` / entry @4856272；`apks/com.wejoy.weplay.jp.apk`。摘录：The default display time of broadcast is 5 minutes。  / When other VIP users release a new broadcast post, the last one will be covered
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `activity_gain_vip_gift_4` / `0x7f130127` / entry @4853632；`apks/com.wejoy.weplay.jp.apk`。摘录：Claim it to convert Charm into VIP Growth Pts
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `vip_user_hide_receive_gift` / `0x7f13274c` / entry @5009312；`apks/com.wejoy.weplay.jp.apk`。摘录：The player enabled VIP 7 Exclusive feature: Hide recent gifts

**未知/待核验**：
- 转换倍率、等级保持、广播队列、退款回收与隐私服务端范围未知。

**可复刻范围**：复刻有限展示位的替换规则、可见性开关和成长账本；原会员经济不复刻。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 中 / 未实现。

## WJP11 · 家族人气徽章触发房间奖励

**交互闭环**：家族累积人气 → 徽章达到阈值 → 用户确认触发房间奖励 → 扣除当天触发额度。
**特色解释（推断）**：集体成就需要主动触发，并有每日次数额度。

**可见规则/直接证据的解释**：
- 徽章达到动态等级可点OK触发房间奖励。
- 每天可打开次数和剩余次数均由占位值显示。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `hot_badge_dialog_tips1` / `0x7f131520` / entry @4935312；`apks/com.wejoy.weplay.jp.apk`。摘录：Congrats, the family popularity badge has reached %d / Click OK to trigger the following room rewards:
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `confirm_open_hot_badge_tips` / `0x7f130986` / entry @4887872；`apks/com.wejoy.weplay.jp.apk`。摘录：Are you sure you want to turn on the popularity badge feature?  /  (can be opened %d times per day, %d times left)

**未知/待核验**：
- 人气来源、阈值、奖励表、计日时区与冷却未知。

**可复刻范围**：复刻多人贡献进度、确认触发与次数扣减；奖励使用固定实验道具。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 低 / 未实现。

## WJP12 · 卧底语音描述、不可撤销猜词与同投票结算交友

**交互闭环**：分配词卡 → 轮流语音描述 → 票选或卧底猜村民词 → 揭词 → 用同目标投票次数推荐同桌。
**特色解释（推断）**：结算关系候选由共同决策轨迹解释，而非任意推荐名单。

**可见规则/直接证据的解释**：
- 双词/双卧底文案存在语言歧义，最大字符为占位值。
- 描述超时会被跳过；确认猜村民词后不可取消。
- 改房人数会重新分词、换词会重开。
- 结算文案显示两人投相同目标次数并建议交朋友。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `double_spies_spy_words_not_exceed_12_characters` / `0x7f130b9d` / entry @4896416；`apks/com.wejoy.weplay.jp.apk`。摘录：When there are 2 spies, the spy words must not exceed %1$d characters
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `party_spy_change_config_tips_when_not_gaming` / `0x7f131b7f` / entry @4961088；`apks/com.wejoy.weplay.jp.apk`。摘录：Redistributing word is required after modifying the number of players. Are you sure to modify it?
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `spy_game_end_match_tips_4` / `0x7f13234a` / entry @4992944；`apks/com.wejoy.weplay.jp.apk`。摘录：He/she and I voted for the same target %1$d times. You understand each other perfectly. Why don't you be friends?

**未知/待核验**：
- 角色配比、平票、猜词成功判定、共享投票匹配算法及真实加友服务未知。

**可复刻范围**：可复刻描述/猜词不可逆/共同投票的结算解释；角色与裁决须明确选择，不冒充原算法。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 中 / 未实现。

## WJP13 · 家族宝箱：锁定名单与领取时动态校验

**交互闭环**：家族配置发送方式/分配模式 → 发放时锁定受领人或等待领取校验 → 按周活跃分享奖池。
**特色解释（推断）**：把“什么时候具备资格”与“如何分奖励”分成两层策略。

**可见规则/直接证据的解释**：
- Limited发放时锁定名单，之后达标不能领；不在领取时复验活跃。
- Normal不锁名单，后来达标可领，领取时核验活跃。
- 多劳多得按成员周活跃占比随机分发；随机函数和公平性未知。
- JP客户端FamilyBoxInfo：sendTypes空时仅允许数字1或2；非空用contains判断。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `FamilyBox_AllocationModeLimitedDesc` / `0x7f130002` / entry @4848944；`apks/com.wejoy.weplay.jp.apk`。摘录：The Recipient list is locked when the Treasure Chest is issued; no activeness verification is required, and those who qualify later cannot claim it.
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `FamilyBox_AllocationModeNormalDesc` / `0x7f130003` / entry @4848960；`apks/com.wejoy.weplay.jp.apk`。摘录：The Recipient list is not locked at distribution; the Treasure Chest can be claimed once the threshold is met, and activeness must be verified at the time of claim.
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `FamilyBox_EarnMoreLockedTip` / `0x7f130007` / entry @4849024；`apks/com.wejoy.weplay.jp.apk`。摘录：Rewards are randomly distributed based on each member's share of weekly activeness contribution; once distributed, the eligible recipients are fixed, and members who reach the threshold later also cannot claim them.
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `FamilyBox_EarnMoreTip` / `0x7f130008` / entry @4849040；`apks/com.wejoy.weplay.jp.apk`。摘录：Rewards are randomly distributed based on each member's share of the total Weekly Activeness contribution.
- [analysis/rea-catalog-family-box-class.json](analysis/rea-catalog-family-box-class.json) Evidence `ev_f92dfead4f258d6cf1bc59efc783212d9cb25d32fe588318f5bf532770b1a2a5`：inspect_android_class，`com.wepie.wespy.model.entity.family.FamilyBoxInfo`。
- [analysis/rea-catalog-family-box-policy.json](analysis/rea-catalog-family-box-policy.json) Evidence `ev_0ca4575c9d2c60b1d99f8bdec091116e42709de0f821dd778651877bf623343a`：inspect_android_method，`com.wepie.wespy.model.entity.family.FamilyBoxInfo`。

**未知/待核验**：
- 数字1/2映射未恢复；资格阈值、随机分配、上限和反抢并发未知。

**可复刻范围**：复刻名单快照/动态资格、活动贡献与幂等领取。发送类型权限和分奖概率分开配置。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 中 / 未实现。

## WJP14 · 绘画接力：上一棒、展示确认与赞踩

**交互闭环**：选词 → 绘画 → 看上一棒猜词 → 继续传递 → 整链展示 → 赞踩反馈。
**特色解释（推断）**：信息逐棒转译，结算既展示误差链，也收集成员评价。

**可见规则/直接证据的解释**：
- 资源阶段包含Selecting/Uploading/Guessing/Revealing。
- 游戏中不能换房；观众不能发送答案。
- JP反编译模型读chainNum、prevWord/prevImgData、currentUid/prevUid、换词费用与次数、赞踩和展示/投票确认。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `draw_relay_select_dialog_title` / `0x7f130c57` / entry @4899392；`apks/com.wejoy.weplay.jp.apk`。摘录：Choose a word to draw
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `draw_relay_stage_guess` / `0x7f130c59` / entry @4899424；`apks/com.wejoy.weplay.jp.apk`。摘录：Guessing
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `draw_relay_status_upload_draw` / `0x7f130c5d` / entry @4899488；`apks/com.wejoy.weplay.jp.apk`。摘录：Drawing uploading
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `draw_relay_cant_change_room_when_gaming` / `0x7f130c42` / entry @4899056；`apks/com.wejoy.weplay.jp.apk`。摘录：You can't change rooms in the game
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `draw_relay_cant_send_when_watch` / `0x7f130c43` / entry @4899072；`apks/com.wejoy.weplay.jp.apk`。摘录：You can't send it while spectating
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `draw_relay_x_praise_x` / `0x7f130c63` / entry @4899584；`apks/com.wejoy.weplay.jp.apk`。摘录：%1$s sent likes to %2$s
- [analysis/rea-relay-decode-method.json](analysis/rea-relay-decode-method.json) Evidence `ev_844237c459bb84f6556961716376292f664727f94aaacf986d5610aba5015c4d`：inspect_android_method，`com.wepie.wespy.module.drawrelay.gameinfo.DrawRelaySingleInfo`。

**未知/待核验**：
- 轮序、评分、词库、展示和投票确认的服务端阶段条件未知。

**可复刻范围**：已有JP本地实验；可扩大到观众权限、换词费用和双反馈，但不能套用原服务端规则。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 中 / 已有。

## WJP15 · 抢麦：练习局转正式的下一题生效

**交互闭环**：单人开局练习 → 中途其他人入场 → 当前题仍练习 → 下一题转正式 → 抢麦接唱并记排行。
**特色解释（推断）**：房间随时加入，但计分资格在题目边界生效，避免把半题当排位。

**可见规则/直接证据的解释**：
- 单人不计战绩/Rank Pts；中途加入从下一首正式。
- 练习模式不保存战绩与排位；资源也有排行榜分组和Star Bonus Card。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `musichum_vr_solo_practice_desc` / `0x7f131a04` / entry @4955072；`apks/com.wejoy.weplay.jp.apk`。摘录：Solo games don't count toward Records or Rank Pts. If another player joins midway, the official Mic Grab will start from the next song.
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `musichum_self_practice_tips` / `0x7f1319f5` / entry @4954832；`apks/com.wejoy.weplay.jp.apk`。摘录：Practice Mode. Results and Rank Pts won't be recorded
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `musichum_rank_card_effect` / `0x7f1319e6` / entry @4954592；`apks/com.wejoy.weplay.jp.apk`。摘录：Star Bonus Card has taken effect

**未知/待核验**：
- 抢麦判定、歌声评分、加分卡倍率/有效期和Rank日组分配未知。

**可复刻范围**：已有KR本地实验；可复刻资格冻结与下一題更新，人工评分须显式标模拟。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 中 / 未实现。

## WJP16 · 次日婚礼堂竞拍与固定婚礼时段

**交互闭环**：当日竞拍次日礼堂 → 最高出价得使用权 → 在给定晚间窗口选时段 → 主持/嘉宾进入。
**特色解释（推断）**：关系仪式房的稀缺时段与社区活动竞价相连。

**可见规则/直接证据的解释**：
- 竞拍文案当日00:00—22:00，拍卖次日礼堂。
- 最高价得礼堂，可选择18:30—22:30时段；确认后不能改时间。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `auction_rule_text` / `0x7f1303d8` / entry @4864608；`apks/com.wejoy.weplay.jp.apk`。摘录：– The auction lasts during 00:00 – 22:00 every day, selling special wedding hall for the next day. / - When the auction is over, the highest bidder will win the hall. The winner can select a period between 18:30 and 22:30 to use the hall
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `wedding_time_not_changed` / `0x7f1329ce` / entry @5019584；`apks/com.wejoy.weplay.jp.apk`。摘录：The wedding time cannot be changed once confirmed

**未知/待核验**：
- 时区、每次仪式长度、并列出价、禁用账号和退款补偿未知。

**可复刻范围**：复刻虚拟礼堂/档期锁/最高价/不可变确认，不接真实竞拍资产。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 中 / 未实现。

## WJP17 · 关系退出：未回复三天自动拒绝

**交互闭环**：发出关系解除请求 → 等待对方 → 同意/拒绝 → 三天未回应自动拒绝；有强制解除入口。
**特色解释（推断）**：未响应结果是拒绝而非默认同意；长关系退出还有另一条显式路径。

**可见规则/直接证据的解释**：
- 未在3天内回复时请求被自动declined。
- 另有forced divorce终止关系的文案；费用及资格未恢复。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `divorce_request_reject_by_system_sub_title` / `0x7f130b7c` / entry @4895888；`apks/com.wejoy.weplay.jp.apk`。摘录：Since he/she did not respond to your request within 3 days, it has been automatically declined.
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `divorce_request_has_been_accepted_sub_title` / `0x7f130b76` / entry @4895792；`apks/com.wejoy.weplay.jp.apk`。摘录：You selected forced divorce, your marriage is terminated

**未知/待核验**：
- 强制路径资格/费用、服务器计时、道具属性回收和关系冲突未知。

**可复刻范围**：复刻请求超时拒绝状态机；强制解除需另定权限，不借包体臆定。
**准备程度 / 本地工作量 / 已有demo**：可先复刻 / 低 / 未实现。

## WJP18 · 双人画布协作入口

**交互闭环**：双方进入绘画玩法 → 打开双人画布 → 共同编辑并显示协作指引。
**特色解释（推断）**：从单人画、他人猜转向同屏共创；目前只可确认入口/类/动画。

**可见规则/直接证据的解释**：
- 只有结构/入口证据，不补写原始规则。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `draw_double_canvas_guide_dialog` / `0x7f0d039c` / entry @4657516；`apks/com.wejoy.weplay.jp.apk`。摘录：res/layout/draw_double_canvas_guide_dialog.xml

**未知/待核验**：
- 画布所有权、谁可同时画、笔迹合并、撤销、轮替和结算完全未知。

**可复刻范围**：适合先补真实操作或客户端控制方法，再选同步/轮替的产品方案。
**准备程度 / 本地工作量 / 已有demo**：需补证据 / 高 / 未实现。

## WJP19 · Puppet/Mind：四槽装配与遗迹一轮一次

**交互闭环**：装备Puppet和Minds → 进入Mystic Ruins → 每个Mind一轮只可使用一次 → 战斗获得碎片。
**特色解释（推断）**：装配玩法在特定场景改变能力约束，不是普通皮肤系统。

**可见规则/直接证据的解释**：
- 每个Puppet最多4个Minds；部分自身Minds可应用于Puppet。
- Mystic Ruins中Natal Mind只有固定效果；每个Mind每轮一次。

**精确来源**：
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `guide_puppet` / `0x7f1314a7` / entry @4933408；`apks/com.wejoy.weplay.jp.apk`。摘录：Each Puppet can be equipped with up to four Minds. Additionally, your Minds can also be applied to Puppets. However, in the Mystic Ruins, the Natal Mind is restricted and only provides fixed effects
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `puppet_core_magic_cooling_tips` / `0x7f131d26` / entry @4967856；`apks/com.wejoy.weplay.jp.apk`。摘录：Due to the effects of the Mystic Ruins, each mind can only be used once per round
- [analysis/resource-catalog.json](analysis/resource-catalog.json) `puppet_composite_toast` / `0x7f131d24` / entry @4967824；`apks/com.wejoy.weplay.jp.apk`。摘录：Puppet Mind cannot be converted into Special Fragment

**未知/待核验**：
- 战斗核心、能力表、事件顺序、掉落和原Unity/native实现未知。

**可复刻范围**：只可先做四槽与场景条件的规则实验；完整副本需补状态/协议证据。
**准备程度 / 本地工作量 / 已有demo**：需补证据 / 高 / 未实现。

## 地区对照与覆盖

日韩包的许多默认资源一致，应合并选一个核心实现后再做本地化；不能据默认文案断言线上开关相同。阿语Baloot、家族护盾等条目按本包来源独立列出；此处未命中某条文本不证明功能不存在。

会员到期、随机奖励、关系和小游戏均未完成原Android/服务端运行验收。价格、动态阈值、时区、公平性和配置不以演示常量代替。后续选择请报稳定ID，可一次选择多个应用的多个模块。
