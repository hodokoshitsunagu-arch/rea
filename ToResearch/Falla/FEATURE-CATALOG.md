# Falla 独特社交 / 权益 / 游戏 / 玩法目录

固定目标：`com.juhaoliao.vochat` `V9.23.0`；日期 2026-10-13；覆盖 `partial static`。独特指本应用中值得单独研究的机制，不宣称市场独占。基础登录、普通聊天、关注不列入。

复用本目录真实 REA 结果和当前包体格式感知资源解析；此次补充权益字符串池检索，不执行 APK、不请求原服务、不使用 source-comparison 旧包。直接证据仅证明代码/资源存在，不能证明地区开放或线上执行。规则表是资源明确声明或代码观察；推断列是研究者对意义的解释；未知项保留服务器与配置空白。现有 demo 仅表示覆盖该项的部分核心机制。

证据等级：A=代码与文案互证；B=明确资源规则；C=结构或入口候选。可先复刻只指有足够边界做本地核心机制原型，不代表完整原版恢复。

复用 REA 包体初检 Evidence：`ev_b912cfe3008fec64e3cf78e410966217198ae0879ebe7c7019aa1846c91ea606`。资源扩展保留原 resources.arsc 全局池 index 和 byte offset，避免把候选类名解释为业务执行。


| ID | 机制 | 类别 | 证据 | 复刻准备 | 成本 | 现有demo |
|---|---|---|---|---|---|---|
| FAL01 | Quick Ludo 先吃后冲线 | 游戏 / 玩法 | B | 可先复刻 | 中 | 已有 |
| FAL02 | Ludo 额外回合与三连六停局 | 游戏 / 玩法 | B | 可先复刻 | 中 | 已有 |
| FAL03 | Ludo 金骰磁铁炸弹 | 游戏 / 玩法 | B | 需补证据 | 中 | 未实现 |
| FAL04 | 房间与外部游戏匹配绑定 | 游戏 / 社交 / 玩法 | A | 可先复刻 | 高 | 未实现 |
| FAL05 | 幸运袋票与Queen权限 | 玩法 / 权益 | B | 需补证据 | 中 | 未实现 |
| FAL06 | 许愿池碎片兑换和榜单 | 玩法 / 权益 | B | 需补证据 | 中 | 未实现 |
| FAL07 | Soulmate/Bestie/Homie 区域关系榜 | 社交 / 权益 | B | 可先复刻 | 中 | 未实现 |
| FAL08 | 家族EXP保级周期 | 社交 / 玩法 / 权益 | B | 需补证据 | 中 | 未实现 |
| FAL09 | 家族管理员发言特权 | 社交 / 权益 | B | 可先复刻 | 低 | 未实现 |
| FAL10 | 贵族30天权益与续期折扣 | 权益 | B | 可先复刻 | 低 | 未实现 |
| FAL11 | 神秘身份体验卡与自动恢复 | 权益 / 社交 | B | 可先复刻 | 中 | 未实现 |
| FAL12 | SVIP周期重算与充值加成 | 权益 | B | 需补证据 | 中 | 未实现 |
| FAL13 | 跨语区迁移的一次性身份代价 | 社交 / 权益 / 玩法 | B | 可先复刻 | 中 | 未实现 |

## FAL01 · Quick Ludo 先吃后冲线

核心循环：至少吃一子→获得进终点资格→一子到终点获胜。

特色解释（推断）：冲刺以前必须主动对抗。

包体直接规则：
- 门槛：快速模式吃1子才能进终点
- 时序：单局
- 资源：捕获标记
- 回报：一子完成即胜；经典全子

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 7024 / 501282`：1. In Quick Mode, you can enter the finish track only after killing 1 piece of any other player /  / 2. A player who throws 6 can move, and gets another chance to throw the dice. If a player throws 6 three consecutive times, the round ends.  /  / 3. Players who steps on an opponent can eliminate the opponent, forcing them back to base, while the player gets another chance to throw the dice.  /  / 4. Player can reach the finish only when they throw the number for the fixed point, and get another chance to throw the dice.  /  / 5. Players who earn 'gold dice' must throw 6.  /  / 6. Players who earn the 'magnet' can advance 8 steps until others block them  /  / 7. Players who earn the 'bomb' can bomb 8 steps, eliminating the opponent back to the base  /  / 8. All pieces should reach the finish in a classic competition, and only one piece should reach the finish in a quick competition.  / 9. When the game is over, the more pieces that reach the finish, and  / the farther the pieces that haven't reached the finish are, the higher the rank.

未知项：棋盘坐标/安全格；服务器骰子。

建议复刻范围：吃子资格与终局状态机。成本：中；准备：可先复刻；demo：已有。

## FAL02 · Ludo 额外回合与三连六停局

核心循环：掷6/吃子/到终点→再投→连续三6结束回合。

特色解释（推断）：连动收益与失去回合相制约。

包体直接规则：
- 门槛：6、吃子、精确终点
- 时序：三次连续6结束本回合
- 资源：骰子历史
- 回报：再投机会

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 7024 / 501282`：1. In Quick Mode, you can enter the finish track only after killing 1 piece of any other player /  / 2. A player who throws 6 can move, and gets another chance to throw the dice. If a player throws 6 three consecutive times, the round ends.  /  / 3. Players who steps on an opponent can eliminate the opponent, forcing them back to base, while the player gets another chance to throw the dice.  /  / 4. Player can reach the finish only when they throw the number for the fixed point, and get another chance to throw the dice.  /  / 5. Players who earn 'gold dice' must throw 6.  /  / 6. Players who earn the 'magnet' can advance 8 steps until others block them  /  / 7. Players who earn the 'bomb' can bomb 8 steps, eliminating the opponent back to the base  /  / 8. All pieces should reach the finish in a classic competition, and only one piece should reach the finish in a quick competition.  / 9. When the game is over, the more pieces that reach the finish, and  / the farther the pieces that haven't reached the finish are, the higher the rank.

未知项：连续定义；捕获后六历史是否重置。

建议复刻范围：连动规则实验。成本：中；准备：可先复刻；demo：已有。

## FAL03 · Ludo 金骰磁铁炸弹

核心循环：获得道具→修改骰子或行进→破坏对手布局。

特色解释（推断）：三种作用边界各异。

包体直接规则：
- 门槛：获取对应道具
- 时序：使用窗口未知
- 资源：金骰必6；磁铁前进8直到阻挡；炸弹8步送对手回基地
- 回报：位置优势

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 7024 / 501282`：1. In Quick Mode, you can enter the finish track only after killing 1 piece of any other player /  / 2. A player who throws 6 can move, and gets another chance to throw the dice. If a player throws 6 three consecutive times, the round ends.  /  / 3. Players who steps on an opponent can eliminate the opponent, forcing them back to base, while the player gets another chance to throw the dice.  /  / 4. Player can reach the finish only when they throw the number for the fixed point, and get another chance to throw the dice.  /  / 5. Players who earn 'gold dice' must throw 6.  /  / 6. Players who earn the 'magnet' can advance 8 steps until others block them  /  / 7. Players who earn the 'bomb' can bomb 8 steps, eliminating the opponent back to the base  /  / 8. All pieces should reach the finish in a classic competition, and only one piece should reach the finish in a quick competition.  / 9. When the game is over, the more pieces that reach the finish, and  / the farther the pieces that haven't reached the finish are, the higher the rank.

未知项：获取成本/概率；安全格例外；炸弹路径。

建议复刻范围：道具机制候选，先补使用窗口。成本：中；准备：需补证据；demo：未实现。

## FAL04 · 房间与外部游戏匹配绑定

核心循环：选游戏→请求匹配→得到gid→带游戏信息进房。

特色解释（推断）：游戏匹配将社交空间身份作为结果。

包体直接规则：
- 门槛：gameId与gamePlatform
- 时序：gid>0才进入成功分支
- 资源：room_match_extra/MatchModel
- 回报：共享游戏房

直接证据定位：
- [analysis/rea-ludo-method.json](analysis/rea-ludo-method.json) · `LudoMatchHelper.a / ev_be475da3348244034000399d8fa034d17c878dd6cfb6babf2af5de3e223d3bd2`：gameId/gamePlatform→RoomApi GroupInfo→gid判定→room_match_extra

未知项：服务器路由；进房后的游戏状态。

建议复刻范围：游戏匹配与房间关联流程。成本：高；准备：可先复刻；demo：未实现。

## FAL05 · 幸运袋票与Queen权限

核心循环：使用幸运袋票→房间分礼→Queen身份禁止送袋。

特色解释（推断）：礼物活动权限依特殊身份变化。

包体直接规则：
- 门槛：幸运袋票；Queen不能送袋
- 时序：房间活动
- 资源：袋票/礼物
- 回报：参与分发

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 7926 / 527792`：Gift lucky bag ticket
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 9059 / 562932`：Sent a gift lucky bag, come and open it
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 9062 / 563042`：Sent gift lucky bag worth [Holder]
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 9258 / 567234`：The Queen can't send a lucky bag gift

未知项：Queen获取失效；分配概率；票成本。

建议复刻范围：权限闸门+袋活动骨架。成本：中；准备：需补证据；demo：未实现。

## FAL06 · 许愿池碎片兑换和榜单

核心循环：抽许愿池→必得奖励入背包→礼物/贵族碎片兑换→日周排行。

特色解释（推断）：一次抽取连接装扮、贵族和社交赠礼。

包体直接规则：
- 门槛：参加抽奖
- 时序：沙特时间日0点、周一0点结算
- 资源：礼物碎片/贵族碎片
- 回报：限定礼物、兑换物、榜单奖励

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 7023 / 500516`：1. Every time you participate in the Wishing Fountain lottery, you will receive a reward, and the reward will be automatically placed in your backpack. / 2. The gifts in the Wishing Fountain are limited gifts. You can only get this gift by drawing in the Wishing Fountain. / 3. Obtain gift fragments and noble fragments, which can be used in the happy exchange house. / 4. The daily list settlement time is from 00:00 on the same day to 00:00 the next day, saudi time, and the weekly list settlement time is from monday 00:00 on monday to 00:00 on the next monday, saudi time. ranking rewards will be automatically distributed after settlement. / 5. This gameplay has nothing to do with apple. / 6. The final interpretation right of this gameplay belongs to the platform.

未知项：抽取概率/成本；碎片兑换率。

建议复刻范围：虚拟碎片合成与结算节奏。成本：中；准备：需补证据；demo：未实现。

## FAL07 · Soulmate/Bestie/Homie 区域关系榜

核心循环：邀请关系→积累亲密→按邀请者地区排行→解除清点/权益。

特色解释（推断）：多关系类别共用区域亲密竞争。

包体直接规则：
- 门槛：成立关系；按邀请者区域
- 时序：统计期未知
- 资源：亲密值，活动与周星礼物排除
- 回报：关系榜和权益

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 7027 / 503115`：1. The relationship list of Soulmate, Bestie, and Homie in your region /  / 2. Ranking based on the intimacy value obtained (events and weekly star gifts do not participate in the relationship list) /  / 3. Intimacy are ranked based on the inviter region, and intimacy in other region will not be ranked.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 7202 / 507999`：Are you sure to initiate a termination application? The intimacy value and privileges will be removed immediately after the relationship is terminated
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 9308 / 570192`：The intimacy has been terminated; the intimacy value is cleared and the privilege becomes invalid
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 9668 / 581042`：You and [Holder] unbind the CP relationship, the CP intimacy has been cleared to 0, and the CP privileges have disappeared

未知项：各类槽位/同意；具体权益。

建议复刻范围：关系类别与来源排除账本。成本：中；准备：可先复刻；demo：未实现。

## FAL08 · 家族EXP保级周期

核心循环：成员贡献EXP→到截止前升级/保级→区域家族榜。

特色解释（推断）：家族升级不是永久状态。

包体直接规则：
- 门槛：指定EXP阈值
- 时序：等级截止时间下发
- 资源：家族EXP
- 回报：等级与地区排行

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 9281 / 568782`：The family level will be settled at [Holder1]. EXP reach [Holder2] before the expiration date to upgrade. Hurry up and contribute EXP to your family!
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 9787 / 587069`：Your family level is about to expire at [Holder1]. EXP reach [Holder2] before the expiration date to keep current level. Hurry up and contribute EXP to your family!
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 8778 / 556314`：Ranked based on family EXP, display the ranking the family owner's region/country. Different country/region will not be displayed.

未知项：EXP来源；降级幅度；月周期是否统一。

建议复刻范围：可配置家族维护系统。成本：中；准备：需补证据；demo：未实现。

## FAL09 · 家族管理员发言特权

核心循环：群管理开启全员禁言→族长和管理可发言→对单人另行禁言。

特色解释（推断）：组织角色控制社群主持权。

包体直接规则：
- 门槛：族长/管理员
- 时序：开关即时
- 资源：管理身份
- 回报：组织活动秩序

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 9448 / 575623`：Turn it on and only family owner and admins are allowed to speak. (In the group or member list, click the user's avatar to mute a single member)
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 9754 / 585262`：You have turned on All Mute, which only allows family owner and admins to send messages

未知项：开关操作者；角色转让；语音是否受影响。

建议复刻范围：家族群主持权限演示。成本：低；准备：可先复刻；demo：未实现。

## FAL10 · 贵族30天权益与续期折扣

核心循环：买贵族→30天生效→有效期及到期7天内复购八折。

特色解释（推断）：续费窗口跨过期边界。

包体直接规则：
- 门槛：购买贵族
- 时序：30天；到期后7天仍20%折扣
- 资源：贵族资格
- 回报：限时贵族权限

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 6913 / 498931`：*The aristocratic privilege is valid for 30 days each time, and will automatically expire after 30 days. You can get 20% discount if you buy again within the period of validity and 7 days after expiration

未知项：等级权益/价格；续期叠加。

建议复刻范围：权益有效期与价格窗口。成本：低；准备：可先复刻；demo：未实现。

## FAL11 · 神秘身份体验卡与自动恢复

核心循环：试用卡→切神秘ID→限时匿名→到期恢复真实ID。

特色解释（推断）：身份展示有显式自动回落。

包体直接规则：
- 门槛：神秘权益或试用卡
- 时序：{Holder}天；到期恢复
- 资源：体验卡
- 回报：神秘身份

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 8477 / 543744`：No mystery privilege yet, do you want to use a [Holder]-day trial card and switch to mystery ID ?
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 9798 / 587744`：Your mystery privileges will expire within [Holder] hours, and will automatically switch to real ID then

未知项：可见对象；真ID泄露范围。

建议复刻范围：匿名身份生命周期。成本：中；准备：可先复刻；demo：未实现。

## FAL12 · SVIP周期重算与充值加成

核心循环：周期内积点→按点重算SVIP→清点→享受充值奖励。

特色解释（推断）：等级与本周期积分分开结算。

包体直接规则：
- 门槛：SVIP等级积分
- 时序：到期重算后积分清空
- 资源：SVIP点/充值
- 回报：额外百分比金币

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 9850 / 589793`：[Holder] The current level is about to expire and the SVIP level will be reset according to the points you have, and the points will be cleared after reset.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 7608 / 520022`：Dear SVIP[Holder1] user, you will enjoy additional [Holder2]% coin reward for every recharge you make

未知项：等级阈值；点生产；返还数值。

建议复刻范围：周期权益账本。成本：中；准备：需补证据；demo：未实现。

## FAL13 · 跨语区迁移的一次性身份代价

核心循环：选新语言地区→确认→退家族清榜/清SVIP→旧国房不可进入。

特色解释（推断）：地区迁移切换整个社交经济身份。

包体直接规则：
- 门槛：仅一次跨语言区域迁移
- 时序：确认后重置
- 资源：特殊ID、家族、榜分、SVIP级点
- 回报：新区域身份

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 8523 / 544882`：Notes for Changing Country / 1. Each user has only one opportunity to change country across language regions. You are changing to【[Holder]】 / 2. After the change, you will lose your current special ID and automatically quit the family, and all activity and ranking points, SVIP level and SVIP points will be reset to 0. / 3. After the change, you will no longer be able to enter rooms of your previous country.

未知项：当前服务地区定义；迁移可恢复性。

建议复刻范围：只做沙盘，不操作真实账户。成本：中；准备：可先复刻；demo：未实现。

## 覆盖与剩余问题

这是选择性功能目录，不是全量产品规格。资源可能为旧文案、共享模块或未开启功能；A/B仍需真实账号与地区运行证据验证。C条目不能作为已确认的玩法规则。未核实概率、支付、服务器经济和真人体验；当前split可读但未全量反编译native实现。上述范围均需在选择复刻后锁定。
