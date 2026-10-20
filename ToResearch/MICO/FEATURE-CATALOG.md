# MICO 特色机制下钻目录

分析日期：2026-10-13；包名 `com.mico`；版本 `9.1.5.0`。范围：**partial static**。本轮供选择性复刻，不扩建demo。

“独特”指本App机制组合与特色，并非市场独占。通用登录、关注、聊天、充值没有单独列项。**B**=包体明确资源规则；**C**=结构/入口候选，不能视为玩法已恢复；**A**=代码+文案交叉证据，本轮无A。包体直接证据是资源实际存在，未确认线上生效。核心循环和机制聚合是静态派生；产品目的解释是推断；缺失算法、阈值及权限列为未知。

复用REA包体Evidence `ev_c0beb4b9f51620bf8cffb7f4d5143b8bf8d91e73dc379bcdc034167e12859275`（[原结果](analysis/rea-package.json)）。本轮新增格式感知Android资源池扫描：[可复查证据](analysis/feature-expanded-resources.json)。每条给原文件/池offset/索引；索引不是resource ID。未完成资源调用/语言配置绑定，未执行APK、登录或访问原业务服务。之前类反编译超时不能算代码恢复。

现有demo只覆盖原选定片段，规则补齐是重构选择。所有新建议以模拟资产为边界；真实权益定价、支付、多人后台、反作弊、RTC和地区开关未验证。MICO为全球包，不能把静态机制认作MENA/东南亚均开放。

| ID | 特色机制 | 分类 | 证据 | 复刻判断 | 工作量 | demo |

|---|---|---|---|---|---|---|

| MIC01 | 武器升级双倍与淘汰复活团队PK | 游戏 / 玩法 | B | 可先复刻 | 中 | 已有 |

| MIC02 | Couple专属麦位与模式互斥 | 社交 / 玩法 / 权益 | B | 可先复刻 | 中 | 未实现 |

| MIC03 | Couple等级的优先展示与专属礼物 | 社交 / 权益 | B | 可先复刻 | 低 | 未实现 |

| MIC04 | 家族赠收礼贡献榜与退出清分 | 社交 / 玩法 | B | 可先复刻 | 低 | 未实现 |

| MIC05 | 主播守护的免踢免禁言 | 社交 / 权益 | B | 可先复刻 | 低 | 未实现 |

| MIC06 | 贵族身份的房管免踢与称号启停 | 权益 / 玩法 | B | 可先复刻 | 低 | 未实现 |

| MIC07 | Pure Supporter分场景隐藏与SVIP9双经验 | 权益 / 社交 | B | 可先复刻 | 中 | 未实现 |

| MIC08 | 跨语言VIP与访问隐身/招呼优先 | 权益 / 社交 | B | 可先复刻 | 中 | 未实现 |

| MIC09 | Rocket Blast分级奖励候选 | 玩法 / 权益 | C | 需补证据 | 中 | 未实现 |

| MIC10 | Ludo成长与车辆竞猜入口候选 | 游戏 | C | 需补证据 | 高 | 未实现 |

| MIC11 | TOP10小时抽奖候选 | 玩法 / 权益 | C | 需补证据 | 中 | 未实现 |

## MIC01 · 武器升级双倍与淘汰复活团队PK

**核心循环（派生）**：队伍收礼升级武器→Lv5双倍PK→淘汰玩家→复活礼物重返计分。

**特色说明**：观众可以通过礼物把战局从升级推进到复活救援。

**资源中可见规则/门槛/资源/回报**：武器Lv5礼物2倍PK；复活礼物即时恢复；淘汰触发离麦后不能再上；换队重算、退出清个人分。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **8467**：Blue Team has upgraded their weapon to Lv. 5, during which sending gifts will increase 2x PK points

- `resources.arsc` pool offset **12**，string index **10312**：Red Team has upgraded their weapon to Lv. 5, during which sending gifts will increase 2x PK points

- `resources.arsc` pool offset **12**，string index **7725**：%s has been eliminated! Send a Revival Gift to revive them instantly so that they can continue earning PK points.

- `resources.arsc` pool offset **12**，string index **9442**：If you leave the mic when elimination is triggered, you cannot take the mic again in this team battle. Are you sure you want to leave the mic?

- `resources.arsc` pool offset **12**，string index **9445**：If you switch teams during a team battle, your points will be recalculated. Are you sure you want to switch teams?

- `resources.arsc` pool offset **12**，string index **8362**：Are you sure you want to quit? If you quit, your individual PK points earned in the team battle will be reset

**未知**：升级/淘汰阈值、双倍时间、复活价格、服务端计分未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：保留现有demo，自定淘汰条件与阈值清晰标注。 工作量：中；判断：可先复刻；现demo：已有。

## MIC02 · Couple专属麦位与模式互斥

**核心循环（派生）**：建立Couple→解锁房主/用户情侣席→席位扩容→切换房模式受限。

**特色说明**：双人关系在房间空间中有专用位置，会排斥PK与计分板。

**资源中可见规则/门槛/资源/回报**：房主/用户Couple席；启用Couple Slot不支持PK；PK开始不能开情侣席；满席可付费扩容；关闭Couple才可计分。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **10396**：Room Owner Couple Slot

- `resources.arsc` pool offset **12**，string index **11263**：User Couple Slot

- `resources.arsc` pool offset **12**，string index **10050**：PK is not available when Couple Slot is enabled

- `resources.arsc` pool offset **12**，string index **11509**：You cannot enable Couple Slot after starting a PK

- `resources.arsc` pool offset **12**，string index **11599**：Your Couple slots are full. Pay to expand slots?

- `resources.arsc` pool offset **12**，string index **11484**：You can enable the scorekeeper after disabling Couple Slots

**未知**：关系数量、扩容价格/上限、具体座位布局未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：空间布局和模式约束；扩容模拟。 工作量：中；判断：可先复刻；现demo：未实现。

## MIC03 · Couple等级的优先展示与专属礼物

**核心循环（派生）**：结CP→互动增级→到Lv3设置优先展示→榜单与礼物→解除关系。

**特色说明**：关系等级解锁展示优先权而非仅加一个标签。

**资源中可见规则/门槛/资源/回报**：Couple Lv3可优先展示；专属礼物要求Couple LV动态值；有Couple榜；取消关注/拉黑自动终止Couple。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **10276**：Reach Couple LV3 to set priority display

- `resources.arsc` pool offset **12**，string index **10275**：Reach Couple LV %s to gift this

- `resources.arsc` pool offset **12**，string index **8764**：Couple Leaderboard

- `resources.arsc` pool offset **12**，string index **11186**：Unfollow this user?(Couple relationship will be automatically terminated)

- `resources.arsc` pool offset **12**，string index **8495**：By blacklisting this user, you will automatically unfollow them and terminate your Couple relationship. You will no longer receive their messages and they can no longer follow you or comment or like your posts. Are you sure you want to block this user?

**未知**：建立双方同意、亲密公式、退出清分与榜单统计未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：关系等级展示及终止规则，成长参数自定。 工作量：低；判断：可先复刻；现demo：未实现。

## MIC04 · 家族赠收礼贡献榜与退出清分

**核心循环（派生）**：达到级别建族/申请加入→赠礼收礼计贡献→家族排名→离族清贡献。

**特色说明**：群体贡献明确覆盖赠送与接收两侧，单人仅能一家。

**资源中可见规则/门槛/资源/回报**：每成员送/收礼钻石或金币用于排名；单人一家；建族等级动态门槛；离族清此家贡献；可启免审批加入。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **10265**：Ranks based on every family members' number of diamonds or coins from gift sending or receiving

- `resources.arsc` pool offset **12**，string index **10003**：One person can only join one family

- `resources.arsc` pool offset **12**，string index **11273**：Users can only create a family when they exceed the level of %s.

- `resources.arsc` pool offset **12**，string index **8883**：Do you confirm to leave this family? Your contribution points for this family will be cleared after you leave.

- `resources.arsc` pool offset **12**，string index **8290**：After this function is activated, no permission is needed when users apply to join the family.

**未知**：送收加权、防刷、榜周期、建族门槛和人数未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：单一归属、两侧贡献榜与退族，不含普通群聊。 工作量：低；判断：可先复刻；现demo：未实现。

## MIC05 · 主播守护的免踢免禁言

**核心循环（派生）**：成为指定主播守护→等级/时限→得到入场与保护→取消回收。

**特色说明**：关系权益直接限制房管操作，和普通礼物徽章不同。

**资源中可见规则/门槛/资源/回报**：守护不能被踢/禁言；剩余天数展示；守护等级决定专属礼物；取消收回权益。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **11075**：This user is a guardian, you can't kick this user out

- `resources.arsc` pool offset **12**，string index **11076**：This user is a guardian, you can't mute this user

- `resources.arsc` pool offset **12**，string index **10330**：Remaining time as a guardian: %s days

- `resources.arsc` pool offset **12**，string index **11487**：You can gift it after reaching %s in the guardian level.

- `resources.arsc` pool offset **12**，string index **11396**：When you cancel, the guardianship privilege will be retracted.

- `resources.arsc` pool offset **12**，string index **9005**：Entry visual effects for guardians

**未知**：购买/邀请方式、续期、违规管理员 override、等级阈值未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：守护权限矩阵和限期，不连接原账号。 工作量：低；判断：可先复刻；现demo：未实现。

## MIC06 · 贵族身份的房管免踢与称号启停

**核心循环（派生）**：获得爵位→启用称号→免房主/管理员踢出→停用丧权益。

**特色说明**：贵族权利改变房间治理，不止视觉包装。

**资源中可见规则/门槛/资源/回报**：启用贵族称号才得到权益；贵族不被主播/admin踢；停用将失去权益；部分称号只可活动获得。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **7872**：2. Only by using aristocratic titles you can get all the aristocratic privileges

- `resources.arsc` pool offset **12**，string index **8891**：Do you want the privilege of being permanently in the live room without being kicked out? Aristocrat users can avoid to be kicked out of the live room by broadcasters or admins.

- `resources.arsc` pool offset **12**，string index **9435**：If you disable the aristocracy you won't be able to use its privileges, are you sure to stop using it?

- `resources.arsc` pool offset **12**，string index **11056**：This noble privilege is currently not open for purchase, can only be obtained through the event

**未知**：各爵位权限差异、平台处罚覆盖、购买范围/价格未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：启停称号与房管操作约束；平台治理作为本地明确新规则。 工作量：低；判断：可先复刻；现demo：未实现。

## MIC07 · Pure Supporter分场景隐藏与SVIP9双经验

**核心循环（派生）**：取得支持者资格→开隐藏榜/礼物身份→送SVIP9礼物双经验。

**特色说明**：支持者能隐藏自己在榜单和部分赠礼场景的身份，另有经验倍率。

**资源中可见规则/门槛/资源/回报**：可隐藏TOP FANS；Mystery Man赠礼部分场景隐身；部分游戏可隐藏；SVIP9专属礼物双EXP。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **9038**：Exclusive privilege for Pure Supporters. When enabled, your identity will be hidden in certain games.

- `resources.arsc` pool offset **12**，string index **10239**：Pure Supporter SVIP9 exclusive gift. Earn double EXP when you send it!

- `resources.arsc` pool offset **12**，string index **10240**：Pure Supporter exclusive privilege that lets you hide yourself from a streamer's TOP FANS list.

- `resources.arsc` pool offset **12**，string index **10241**：Pure Supporter privilege. Once Mystery Man is enabled, you can hide your identity in certain situations when sending gifts. Details

**未知**：Pure Supporter准入、具体可匿名场景、EXP归属和隐私边界未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：分场景显示开关与2倍EXP账本，身份保护只为本地视觉演示。 工作量：中；判断：可先复刻；现demo：未实现。

## MIC08 · 跨语言VIP与访问隐身/招呼优先

**核心循环（派生）**：开VIP→跨语言无限翻译→访问不留足迹→招呼在对方列表优先。

**特色说明**：跨语言社交加成与可见性、曝光优先权整合成权益包。

**资源中可见规则/门槛/资源/回报**：VIP无限翻译；可启无痕访问；VIP招呼在Chat列表优先且增加招呼数。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **8438**：Become a VIP and get additional greetings!

- `resources.arsc` pool offset **12**，string index **8439**：Become a VIP, and enjoy unlimited translation privileges!

- `resources.arsc` pool offset **12**，string index **11342**：Want to take a look to others, but you don't want to be detected? The invisible visit privilege just got here! Enable this privilege, and be invisible immediately, and check the profile of others without leaving a footprint

- `resources.arsc` pool offset **12**，string index **11380**：What a pity that your greetings are unknown by people you are interested in. Become a VIP member, and all your greetings will be given preference in the Chat list, draw more attention by becoming a VIP member!

**未知**：套餐期限/价格、优先排序、防骚扰限制、翻译服务未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：模拟双语消息与权益排序/足迹策略，不复刻基础聊天。 工作量：中；判断：可先复刻；现demo：未实现。

## MIC09 · Rocket Blast分级奖励候选

**核心循环（派生）**：火箭等级提升→领取对应奖励→继续更高等级。

**特色说明**：单条奖品文案支持成长奖励支线，尚不能描述贡献玩法。

**资源中可见规则/门槛/资源/回报**：包体仅明确下一火箭等级更好奖励，奖励已到账提示。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **10390**：Rewards from Rocket Blast have been issued to your account. The next level of the rocket will give even better rewards!

**未知**：火箭如何获得能量、参与者、时窗、等级和分配未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：只做等级领奖概念卡；先补调用/资源绑定。 工作量：中；判断：需补证据；现demo：未实现。

## MIC10 · Ludo成长与车辆竞猜入口候选

**核心循环（派生）**：进入Ludo/车辆竞猜→参与→可能获得Ludo EXP。

**特色说明**：Ludo有邀玩和EXP展示，车辆竞猜只有名字，不能编造下注/结算。

**资源中可见规则/门槛/资源/回报**：观察到Ludo邀请、教程提示、Ludo EXP+占位和Guess the vehicle入口文案。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **9355**：Hi, welcome to Ludo. Let me show you how to play~

- `resources.arsc` pool offset **12**，string index **9523**：Invites you to a game of LUDO

- `resources.arsc` pool offset **12**，string index **9673**：Ludo EXP +%1$s

- `resources.arsc` pool offset **12**，string index **9320**：Guess the vehicle

**未知**：具体棋盘、规则变体、车辆竞猜操作、资源奖励全部未恢复。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：先补游戏资源/协议；若选择仅可自定义规则版本并标重构。 工作量：高；判断：需补证据；现demo：未实现。

## MIC11 · TOP10小时抽奖候选

**核心循环（派生）**：进入TOP10抽奖→等待小时开奖→领取结果。

**特色说明**：榜单名称和每小时开奖文字相邻主题，但还未证实同一活动。

**资源中可见规则/门槛/资源/回报**：仅观察TOP10 lottery draw与once every hour两文案。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **10774**：TOP 10 lottery draw

- `resources.arsc` pool offset **12**，string index **10930**：The lottery will be drawn once every hour.

**未知**：二者调用关联、入场资格、概率、奖品和地区开关未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：先确认榜单与活动绑定，暂不构建原版开奖规则。 工作量：中；判断：需补证据；现demo：未实现。

## 选择方式

选择ID即可进入下一轮规格确认。可先复刻表示有足够文本支持一个透明补齐参数的本地机制原型，并不表示已恢复原App全部算法。工作量仅估计单机机制原型，相对于低/中/高；多人后端与真语音另计。

权益特例需要先决定复刻的是身份表现、权限矩阵还是完整商业订阅，本文不默认迁移真实付费规则。
