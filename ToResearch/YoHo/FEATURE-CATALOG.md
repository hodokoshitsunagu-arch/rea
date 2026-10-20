# YoHo 特色机制下钻目录

分析日期：2026-10-13；包名 `com.voicechat.live.group`；版本 `5.48.40`。范围：**partial static**。本轮供选择性复刻，不扩建demo。

“独特”指本App机制组合与特色，并非市场独占。通用登录、关注、聊天、充值没有单独列项。**B**=包体明确资源规则；**C**=结构/入口候选，不能视为玩法已恢复；**A**=代码+文案交叉证据，本轮无A。包体直接证据是资源实际存在，未确认线上生效。核心循环和机制聚合是静态派生；产品目的解释是推断；缺失算法、阈值及权限列为未知。

复用REA包体Evidence `ev_b5330ac3b2215d43ddc0b4a4a12016793435d82747797fafe2bd47408ae51b50`（[原结果](analysis/rea-package.json)）。本轮新增格式感知Android资源池扫描：[可复查证据](analysis/feature-expanded-resources.json)。每条给原文件/池offset/索引；索引不是resource ID。未完成资源调用/语言配置绑定，未执行APK、登录或访问原业务服务。之前类反编译超时不能算代码恢复。

现有demo只覆盖原选定片段，规则补齐是重构选择。所有新建议以模拟资产为边界；真实权益定价、支付、多人后台、反作弊、RTC和地区开关未验证。MICO为全球包，不能把静态机制认作MENA/东南亚均开放。

| ID | 特色机制 | 分类 | 证据 | 复刻判断 | 工作量 | demo |

|---|---|---|---|---|---|---|

| YOH01 | 家族周排名挑战与20%贡献转移 | 社交 / 玩法 | B | 可先复刻 | 中 | 已有 |

| YOH02 | 家族召集与成长任务 | 社交 / 权益 | B | 可先复刻 | 低 | 未实现 |

| YOH03 | 礼物竞拍守护关系 | 社交 / 玩法 / 权益 | B | 可先复刻 | 中 | 未实现 |

| YOH04 | 守护代币与限期关系升级 | 社交 / 权益 | B | 可先复刻 | 中 | 未实现 |

| YOH05 | 双向亮心配对回合 | 社交 / 玩法 | B | 可先复刻 | 中 | 未实现 |

| YOH06 | 最低钻石狙击的大逃杀 | 游戏 / 玩法 | B | 可先复刻 | 中 | 未实现 |

| YOH07 | 团队武器PK与火箭升级 | 游戏 / 玩法 | B | 可先复刻 | 中 | 未实现 |

| YOH08 | 游戏币与通用币双钱包 | 权益 / 游戏 | B | 可先复刻 | 低 | 未实现 |

| YOH09 | Room Club等级与成员权益 | 社交 / 权益 | B | 可先复刻 | 低 | 未实现 |

| YOH10 | Mystery匿名身份与贵族隐私 | 权益 / 社交 | B | 可先复刻 | 中 | 未实现 |

| YOH11 | 贵族礼物授权与高阶动态名片 | 权益 | B | 可先复刻 | 低 | 未实现 |

| YOH12 | 生日与关系周年派对奖励 | 社交 / 玩法 | B | 需补证据 | 中 | 未实现 |

## YOH01 · 家族周排名挑战与20%贡献转移

**核心循环（派生）**：邀请家族PK→接受后积累周贡献→指定小时后比排名→败方贡献转赢家。

**特色说明**：对赌对象是群体排名，回报是对手已有贡献。

**资源中可见规则/门槛/资源/回报**：败方20%周贡献转移；拒绝后24小时不能再挑战同一族；挑战小时是占位配置。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **9522**：Confrim to send forward a Ranking PK? After %s hours since the PK starts, system will compare both Families' weekly rankings. The lower-ranked Family will lose 20%% of own weekly contribution points to the higher-ranked Family.

- `resources.arsc` pool offset **12**，string index **11995**：The Family has accepted your Ranking PK invitation. After %s hours, system will compare both Families' weekly rankings. The lower-ranked Family will lose 20%% of own weekly contribution points to the higher-ranked Family. Invite your Family members to help climb the ranks!

- `resources.arsc` pool offset **12**，string index **12087**：The other Family has declined your Ranking PK invitation. You cannot invite this Family to a PK for another 24 hours, but you can challenge another Family.

- `resources.arsc` pool offset **12**，string index **12841**：Your Family lost the Ranking PK. 20%% of your weekly contribution points were taken by the other Family.

**未知**：排名算法、取整、并列、超时和上限未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：保留现有单机demo；扩展拒绝冷却，公开自定排名算法。 工作量：中；判断：可先复刻；现demo：已有。

## YOH02 · 家族召集与成长任务

**核心循环（派生）**：达到财富等级建族→成员申请→任务发展→召集进入语音房。

**特色说明**：社交组织具备直接把全体成员送往房间的召集权益。

**资源中可见规则/门槛/资源/回报**：建/入族财富门槛为动态值；全族召集一天一次；另有每日提醒计数；管理员可管理成员。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **12780**：You need a wealth level ≥%d to create a family. Upgrade your level or try to join a fun family!

- `resources.arsc` pool offset **12**，string index **12671**：You can apply to join this family when you reach the wealth level up to %d

- `resources.arsc` pool offset **12**，string index **9043**：All family members will receive your call and have direct access to your room(There is only one chance to summon a day ~)

- `resources.arsc` pool offset **12**，string index **9044**：All family members will receive your reminder and join the room. (Number of daily reminders left: %1$s/%2$s)

- `resources.arsc` pool offset **12**，string index **9000**：Admins can help you manage the family, kick people out as well. Do you want to set this person as an admin?

**未知**：具体门槛、族等级、人数和提醒数未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：家族申请/任务及一日一次召集；不实现普通群聊。 工作量：低；判断：可先复刻；现demo：未实现。

## YOH03 · 礼物竞拍守护关系

**核心循环（派生）**：拍卖师设关系与期限→上麦竞价赠礼→赢家建立守护→累计量解锁宝箱。

**特色说明**：拍卖的产物是限期社交关系，附带贡献门槛宝箱。

**资源中可见规则/门槛/资源/回报**：赠礼竞价；类型/期限由拍卖师决定；Guests与host不能竞拍；100拍卖值=100守护值；总量达到动态值解锁宝箱。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **9022**：After the auction starts, send gifts to the auctor to bid

- `resources.arsc` pool offset **12**，string index **9112**：Approach 2: form the guardianship through bidding in an auction venue (the guardianship type and its duration are decided by auctors).

- `resources.arsc` pool offset **12**，string index **8600**：2. 100 auction value in the auction venue = 100 guardian value

- `resources.arsc` pool offset **12**，string index **10312**：Guests cannot join the auction.

- `resources.arsc` pool offset **12**，string index **12061**：The host cannot join the auction.

- `resources.arsc` pool offset **12**，string index **12583**：When the total amount involved in the auction reaches %1$s, the treasure reward will be unlocked.

**未知**：竞价比较、最高价还是累计价、分成、退款、平局未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：关系竞拍状态机与模拟守护值/宝箱。 工作量：中；判断：可先复刻；现demo：未实现。

## YOH04 · 守护代币与限期关系升级

**核心循环（派生）**：赠7/30天代币→对方接受→累计守护值升级→续期/替换/过期。

**特色说明**：关系同时具备成长等级和有效期；升级与覆盖不等于简单叠加。

**资源中可见规则/门槛/资源/回报**：100币代币=100守护值；可7/30天；拒绝/超时退代币；替换不同类型不合并时长；结束清守护值；守护或Couple Lv3通话免费。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **8530**：1. 100 coins of relationship token sent = 100 guardian value

- `resources.arsc` pool offset **12**，string index **9111**：Approach 1: send relationship tokens. Once they accept the tokens, the guardianship can thus be formed (the guardianship duration can be 7 days / 30 days).

- `resources.arsc` pool offset **12**，string index **12162**：They have declined your guardianship invitation. Your token is returned. No relationship is formed.

- `resources.arsc` pool offset **12**，string index **12056**：The guardian application has expired, and the gold coins you spent on purchasing tokens have been returned

- `resources.arsc` pool offset **12**，string index **12625**：You and %1$s currently have a [%2$s] relationship with %3$s days remaining. Do you still want to form a %4$s relationship? If you proceed, the [%4$s] relationship will replace your current [%2$s] relationship. The validity periods will not be combined.

- `resources.arsc` pool offset **12**，string index **9013**：After ending the relationship, both of your guardian value will be cleared.

- `resources.arsc` pool offset **12**，string index **9280**：Calls are free once you start any Guardian relationship with each other

- `resources.arsc` pool offset **12**，string index **9281**：Calls are free once you're Couple Lv.3 with each other

**未知**：关系名称全集、等级阈值、续期定价、通话计价未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：代币同意、续期/覆盖、权益判定；数值可配。 工作量：中；判断：可先复刻；现demo：未实现。

## YOH05 · 双向亮心配对回合

**核心循环（派生）**：上席→向喜欢的人亮心→互相亮心匹配→主持带配对小游戏→未匹配留下一轮。

**特色说明**：多人房交互配对有明确互选与回合留席规则。

**资源中可见规则/门槛/资源/回报**：双向亮心才成功；礼物可增加配对概率的提示存在；成功动画公布、引导离场，未成功可留席。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **10671**：Light up ❤ of the player you like, if he/she lights you, you will be paired successfully!

- `resources.arsc` pool offset **12**，string index **10672**：Light up ❤ of the player you like, if he/she lights you, you will be paired successfully! (Tips: giving gifts can increase the probability of pairing)

- `resources.arsc` pool offset **12**，string index **11890**：Successfully paired users will be announced in an animation. If not successful, you can stay in the seat to wait for next game!

- `resources.arsc` pool offset **12**，string index **9024**：After the end, guide the paired players leave the game. Other users can stay for next game. Invite new players to join.

- `resources.arsc` pool offset **12**，string index **10313**：Guide the paired players to play a game of active atmosphere; guide other users to express a blessing to the paired players by sending gifts.

**未知**：礼物如何影响互选概率、角色人数、性别与隐私呈现未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：互选与配对后小游戏引导；概率提示单独保留为未决，不随机制造同意。 工作量：中；判断：可先复刻；现demo：未实现。

## YOH06 · 最低钻石狙击的大逃杀

**核心循环（派生）**：上麦加入→收钻累积分→每轮倒计时狙击最低分→淘汰后下一轮。

**特色说明**：观众赠礼成为生存资源，同分最低者可被共同瞄准。

**资源中可见规则/门槛/资源/回报**：至少2人起；房主选回合倒计时；最低钻分被瞄准；最低同分全部瞄准；中途不能加入，退出淘汰且不能回归；换座不影响分。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **8531**：1. After the game starts, the score will be based on the score of diamonds received; / 2. Those with the lowest scores will be targeted by snipers; / 3. If there are several people with the same lowest score at the same time, all these people will be targeted by snipers;

- `resources.arsc` pool offset **12**，string index **8533**：1. Click "Join" to join this round; / 2. Other people that directly take the mic can also join the game; / 3. You need at least 2 people to start the game; / 4. In order to be fair, after the game starts, you cannot remove the player from the game until that user is eliminated or the game is over; / 5. By clicking ❤, you can review the game guidelines;

- `resources.arsc` pool offset **12**，string index **8542**：1. The countdown of each round is selected by the owner; / 2. After the end of the countdown, the sniper will shoot to eliminate the targeted people; / 3. After eliminating one person, the countdown of the next round will start immediately ;

- `resources.arsc` pool offset **12**，string index **8544**：1. The score of the people who've been eliminated will not continue, so the scoreboard will be eliminated; / 2. Users with mics won't be able to join the game in the middle of the game; / 3. If you drop the mic or leave the room in the middle of the game, you will be considered as a quitter. You will be eliminated and won't be able to go back to the game; / 4. Changing seats will not affect the score;

- `resources.arsc` pool offset **12**，string index **12320**：Unable to switch mode while Battle Royale mode is in progress

**未知**：同轮瞄准多人时射击次序、最终胜者/奖池、积分折算未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：多轮淘汰状态机，公开多人瞄准裁决补齐。 工作量：中；判断：可先复刻；现demo：未实现。

## YOH07 · 团队武器PK与火箭升级

**核心循环（派生）**：红蓝收钻→升级武器/火箭→比较总钻→MVP与等级奖励。

**特色说明**：同一团队竞技承载武器成长和火箭分级领奖。

**资源中可见规则/门槛/资源/回报**：更多钻=更高武器等级，更多钻队胜；5币礼物=1钻=1PK分；换队重置本场钻；MVP且团队>200钻可上榜；火箭升级领奖。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **8543**：1. The more diamonds you receive, the higher your weapon level will be.The team that receives more diamonds will win the game.

- `resources.arsc` pool offset **12**，string index **10244**：Gifts worth 5 coins = 1 diamond = 1 PK credit

- `resources.arsc` pool offset **12**，string index **10438**：If you change your team now, diamonds received during the battle will be reset. Do you confirm to continue?

- `resources.arsc` pool offset **12**，string index **10479**：In team battle mode, users that win MPV and are part of a team that has more than 200 diamonds will appear on this list

- `resources.arsc` pool offset **12**，string index **12514**：We now added the rocket feature to the team battle. Level up your rocket to win prizes!

- `resources.arsc` pool offset **12**，string index **12036**：The following prizes are rewarded to you since you have unlocked LV%1$s rocket.

**未知**：火箭和武器是否同一进度、升级阈值、时长、奖池未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：团队收钻与武器成长；火箭作为独立奖励支线。 工作量：中；判断：可先复刻；现demo：未实现。

## YOH08 · 游戏币与通用币双钱包

**核心循环（派生）**：获取游戏币→进入指定游戏→优先耗游戏币→用完再通用币。

**特色说明**：限定用途奖励币与通用币等值但不同消费权限。

**资源中可见规则/门槛/资源/回报**：两币等值；有两种币优先用Game Coins；仅用于文案所列9类指定游戏。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **8537**：1. Game Coins and Coins are equal in value.

- `resources.arsc` pool offset **12**，string index **8603**：2. If you have both Coins and Game Coins, Game Coins will be used first.

- `resources.arsc` pool offset **12**，string index **8688**：3. Game Coins can only be used in designated games: greedycat, slot_frenzy, yummy, crash_rocket, lion, eliminateslot, chickenpass, fishing, olymapus

**未知**：兑换方向、过期/退款、中奖产出类型、地区开放未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：双钱包与9个占位游戏入口的消费规则；不复刻随机博彩。 工作量：低；判断：可先复刻；现demo：未实现。

## YOH09 · Room Club等级与成员权益

**核心循环（派生）**：加入特定房Club→成长等级→成员席位/抢红包/专属礼物。

**特色说明**：权益归属某房的会员组织，礼物还需Club等级门槛。

**资源中可见规则/门槛/资源/回报**：会员可抢红包、使用专属席位；部分礼物须Club LV动态值；升级解锁权益。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **9208**：Become a Room Club member to snatch red packets

- `resources.arsc` pool offset **12**，string index **10592**：Join Room Club to enjoy exclusive seats

- `resources.arsc` pool offset **12**，string index **10591**：Join Room Club and reach LV%1$s to send this gift

- `resources.arsc` pool offset **12**，string index **9540**：Congratulations to %1$s for upgrading to Room Club LV%2$s, unlocking the following benefits

**未知**：费用、亲密/等级增长、退组数据、席位数量未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：房Club等级门禁与成员席位/红包资格，不接真实金额。 工作量：低；判断：可先复刻；现demo：未实现。

## YOH10 · Mystery匿名身份与贵族隐私

**核心循环（派生）**：有资格在房外打开神秘人→匿名进入/上榜→关闭恢复→关系试用受限。

**特色说明**：身份匿名不是单一隐藏名，还约束切换地点与关系操作。

**资源中可见规则/门槛/资源/回报**：房外才能切换；指定贵族/VIP等级可用；匿名用户不能使用关系试用卡；另有国家Unknown/在线Yesterday/魅力0隐藏项。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **12000**：The Mystery User feature is an exclusive privilege for %1$s and %2$s statuses and above.

- `resources.arsc` pool offset **12**，string index **12307**：Turning on and off the mystery person function needs to be performed outside the room

- `resources.arsc` pool offset **12**，string index **12090**：The other party is a mystery user; relationship trial cards cannot be used

- `resources.arsc` pool offset **12**，string index **12570**：When enabled during an active Aristocracy, Charm Level will always display as 0

- `resources.arsc` pool offset **12**，string index **12577**：When enabled, your country or region will be displayed as "Unknown" on your profile page (%1$s, %2$s exclusive privilege)

- `resources.arsc` pool offset **12**，string index **12579**：When enabled, your last online time will be displayed as "Yesterday" on your profile page, and the green online status dot will not be shown (%1$s, %2$s exclusive privilege)

- `resources.arsc` pool offset **12**，string index **9008**：After changing your ID, all the contributions you made with your previous ID will be transferred to your real ID. Your real name will be shown on the gift wall and a new mysterious ID will be created for you.

**未知**：具体解锁等级、匿名ID稳定性、哪些日志与他人视图仍可见未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：匿名展示策略与操作互斥模拟；不宣称匿名安全保证。 工作量：中；判断：可先复刻；现demo：未实现。

## YOH11 · 贵族礼物授权与高阶动态名片

**核心循环（派生）**：开贵族/VIP→按层级授礼物和动态名片→到期回收。

**特色说明**：高等级包含低等级礼物权限，并有欢迎图/动态头像/动态封面不同门槛。

**资源中可见规则/门槛/资源/回报**：贵族礼物向下兼容；Noble10以上入房欢迎图；VIP9或Noble13可GIF头像；VIP12以上动态封面。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **11031**：Noble members can send exclusive Noble gifts. Higher-level Noble status includes the authority to send lower-level gifts.

- `resources.arsc` pool offset **12**，string index **11157**：Open noble 10 above, the user into the room can automatically send welcome pictures.

- `resources.arsc` pool offset **12**，string index **12405**：Users at VIP9 or Noble13 can upload animated profile pictures in GIF format

- `resources.arsc` pool offset **12**，string index **12852**：Your VIP level is too low. Users with VIP12 or above can upload animated cover photos.

**未知**：各爵位售价、周期、欢迎图可定制度、地区版本未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：分级能力矩阵与展示，门槛按文本保留。 工作量：低；判断：可先复刻；现demo：未实现。

## YOH12 · 生日与关系周年派对奖励

**核心循环（派生）**：临近生日/周年→创建庆祝派对→参与活动→获取身份装扮。

**特色说明**：个人/双人关系纪念日转化成房内庆祝玩法。

**资源中可见规则/门槛/资源/回报**：生日与周年均提示可赢徽章、头像框、车辆。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **10577**：It will be your birthday in %1$s days. Come and create your own birthday party. You can win badges, avatar frames, and vehicles!

- `resources.arsc` pool offset **12**，string index **11990**：Thanks for staying with %3$s! It will be our %2$s anniversary in %1$s days. Wanna join our anniversary celebration? You can win badges, avatar frames, and vehicles!

- `resources.arsc` pool offset **12**，string index **12012**：The birthday party held by %1$s

**未知**：活动触发条件、奖励任务、邀请权限、时间窗未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：日历提醒和派对流程概念原型；任务不能当恢复规则。 工作量：中；判断：需补证据；现demo：未实现。

## 选择方式

选择ID即可进入下一轮规格确认。可先复刻表示有足够文本支持一个透明补齐参数的本地机制原型，并不表示已恢复原App全部算法。工作量仅估计单机机制原型，相对于低/中/高；多人后端与真语音另计。

权益特例需要先决定复刻的是身份表现、权限矩阵还是完整商业订阅，本文不默认迁移真实付费规则。
