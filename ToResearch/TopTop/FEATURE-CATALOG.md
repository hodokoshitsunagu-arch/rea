# TopTop 特色机制下钻目录

分析日期：2026-10-13；包名 `com.game.friends.android`；版本 `3.27.3`。范围：**partial static**。本轮供选择性复刻，不扩建demo。

“独特”指本App机制组合与特色，并非市场独占。通用登录、关注、聊天、充值没有单独列项。**B**=包体明确资源规则；**C**=结构/入口候选，不能视为玩法已恢复；**A**=代码+文案交叉证据，本轮无A。包体直接证据是资源实际存在，未确认线上生效。核心循环和机制聚合是静态派生；产品目的解释是推断；缺失算法、阈值及权限列为未知。

复用REA包体Evidence `ev_122ca9e3f3af3c3b0d0ed6b9301e4623b759f7e96ed1800b670a01ba0c942598`（[原结果](analysis/rea-package.json)）。本轮新增格式感知Android资源池扫描：[可复查证据](analysis/feature-expanded-resources.json)。每条给原文件/池offset/索引；索引不是resource ID。未完成资源调用/语言配置绑定，未执行APK、登录或访问原业务服务。之前类反编译超时不能算代码恢复。

现有demo只覆盖原选定片段，规则补齐是重构选择。所有新建议以模拟资产为边界；真实权益定价、支付、多人后台、反作弊、RTC和地区开关未验证。MICO为全球包，不能把静态机制认作MENA/东南亚均开放。

| ID | 特色机制 | 分类 | 证据 | 复刻判断 | 工作量 | demo |

|---|---|---|---|---|---|---|

| TOP01 | 保底价关系竞拍 | 社交 / 玩法 | B | 可先复刻 | 中 | 已有 |

| TOP02 | CF衰减与CP/Deep Bond升级树 | 社交 / 权益 | B | 可先复刻 | 中 | 未实现 |

| TOP03 | 关系信物类型与失效修复 | 社交 / 权益 | B | 可先复刻 | 中 | 未实现 |

| TOP04 | 双人限定关系卡墙 | 社交 / 权益 | B | 可先复刻 | 中 | 未实现 |

| TOP05 | 部落火箭共同燃料与返航分奖 | 社交 / 玩法 | B | 可先复刻 | 中 | 未实现 |

| TOP06 | 部落干部资产与成员任务回报 | 社交 / 权益 | B | 可先复刻 | 中 | 未实现 |

| TOP07 | 幸运号码礼物抽奖 | 玩法 / 权益 | B | 可先复刻 | 中 | 未实现 |

| TOP08 | 武器PK与任务/护盾候选 | 游戏 / 玩法 | C | 需补证据 | 高 | 未实现 |

| TOP09 | 战斗游戏5级解锁League | 游戏 / 权益 | B | 需补证据 | 中 | 未实现 |

| TOP10 | 公开正式比赛游戏名片 | 社交 / 游戏 | B | 可先复刻 | 中 | 未实现 |

| TOP11 | 游戏Club固定类型与专属房 | 社交 / 游戏 | B | 需补证据 | 中 | 未实现 |

| TOP12 | VIP竞技门禁与高阶临时封房 | 权益 / 游戏 | B | 可先复刻 | 中 | 未实现 |

| TOP13 | 贵族称号启用与匿名入房 | 权益 / 社交 | B | 可先复刻 | 低 | 未实现 |

## TOP01 · 保底价关系竞拍

**核心循环（派生）**：房管开拍→拍卖师上席→竞价过保底→维持/新建关系并涨亲密。

**特色说明**：竞拍结果包括关系保留与关系改建两类。

**资源中可见规则/门槛/资源/回报**：仅owner/admin开；低于最低价不能胜；CF与其他关系不同保底动态值；成交加亲密。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **11126**：Only the owner/admin can open the auction

- `resources.arsc` pool offset **12**，string index **12659**：Wait for the auctioneer to take the seat

- `resources.arsc` pool offset **12**，string index **12130**：The minimum winning price is %1$s for Close Friend relationships and %2$s for other relationships

- `resources.arsc` pool offset **12**，string index **12546**：Users cannot win the auction if lower than the lowest win price

- `resources.arsc` pool offset **12**，string index **12280**：This round of relationship auction has ended. Congratulations to [%1$s] for successfully bidding, maintaining the original relationship [%2$s], and increasing the intimacy value [%3$s]

- `resources.arsc` pool offset **12**，string index **12281**：This round of relationship auction has ended. Congratulations to [%1$s] for successfully bidding, reaching a new relationship [%2$s], and increasing the intimacy value [%3$s]

**未知**：竞价聚合/步长、退费、时限、同价与亲密公式未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：保留现有关系拍卖demo，补两类保底配置。 工作量：中；判断：可先复刻；现demo：已有。

## TOP02 · CF衰减与CP/Deep Bond升级树

**核心循环（派生）**：花礼物建CF→Lv2后升级CP/深关系→解锁更高等级与不衰减→解除冷却。

**特色说明**：亲密关系分支改变成长上限与衰减机制。

**资源中可见规则/门槛/资源/回报**：CF上限Lv9，CP/Deep Bond Lv100；Lv2后可升级；CF不互动会衰减，CP/Bond不衰减；终止不清亲密但7天不能再互申。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **9068**：After Lv. 2, a CF can be upgraded to a Couple or a deeper Bond

- `resources.arsc` pool offset **12**，string index **9375**：CF relationships can reach up to Lv. 9. CP and Deep Bond relationships can reach up to Lv. 100

- `resources.arsc` pool offset **12**，string index **12121**：The intimacy points of your CF Relationship will decay without interaction. Activate CP/Bond to prevent decay.

- `resources.arsc` pool offset **12**，string index **11359**：Protected by Couple or Deep Bond privileges, Intimacy will not decrease

- `resources.arsc` pool offset **12**，string index **9098**：After the relationship is terminated  /  1. Both parties can no longer apply for the relationship to each other within 7 days  /  2. The intimacy won't be cleared.  /  3. All keepsakes will become invalid.  /  Click confirm to terminate the relationship.

**未知**：衰减公式/间隔、等级阈值、建立条件与最大关系数未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：关系树、衰减策略、解除7天冷却模拟。 工作量：中；判断：可先复刻；现demo：未实现。

## TOP03 · 关系信物类型与失效修复

**核心循环（派生）**：赠花/戒/包/表建立关系→关系转换锁信物→50%价修复。

**特色说明**：不同物品对应不同关系，恢复不再制造亲密/魅力。

**资源中可见规则/门槛/资源/回报**：戒CP；包表Best Friend等深关系；花CF；CP转出锁戒；失效信物付原价50%恢复但不增亲密/魅力。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **11532**：Rings are used to form Couple relationships. Watches and bags are used to form Best Friend/Confidant/Brother/Sister/Brother & Sister relationships. Flowers are used to form Close Friend relationships

- `resources.arsc` pool offset **12**，string index **11534**：Rings can only be sent to your CP. Bags and watches can be sent to your CP and Deep Bonds. Flowers can be sent to all relationships

- `resources.arsc` pool offset **12**，string index **12274**：This relationship used to be a CP relationship, and the CP-exclusive ring keepsakes will be locked

- `resources.arsc` pool offset **12**，string index **12319**：To restore an invalid keepsake, you need to pay 50% of the original keepsake price in coins. And it will not increase the relationship intimacy and the recipient's charm value.

- `resources.arsc` pool offset **12**，string index **8601**：* Building a relationship will consume keepsake

- `resources.arsc` pool offset **12**，string index **8602**：*Switching relationship will consume keepsake

**未知**：具体售价、每日上限、哪些转移失效、修复后有效期未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：信物账本、类型门禁与无重复成长修复。 工作量：中；判断：可先复刻；现demo：未实现。

## TOP04 · 双人限定关系卡墙

**核心循环（派生）**：已CP拿卡→赠对方→双人空间展示→重复卡仅加成长→重展示半价。

**特色说明**：关系收藏双方共显，去重与重复成长不同处理。

**资源中可见规则/门槛/资源/回报**：重复不增新卡但有亲密/魅力/花点；重展示付50%币并得50%原亲密/花点；CP任一方可赠卡给对方。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **9102**：After two users form a CP, they may obtain a Limited Relationship Card for both characters through events or other means. Either user can gift the card to the other. Once gifted, it will appear in both users' Intimate Space, profiles, and other locations.

- `resources.arsc` pool offset **12**，string index **12830**：You and this user already have this Relationship Card. Adding another won't add a new card to the Card Wall, but you will still receive the Intimacy points, Charm points, and Flower points.

- `resources.arsc` pool offset **12**，string index **9792**：Displaying this Relationship Card again costs 50% of its price in coins. You will also receive 50% of its original Intimacy points and Flower points.

**未知**：卡稀有度、获得任务、可展示时效、退CP后卡处理未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：双人共享卡墙、去重与重复奖励账本。 工作量：中；判断：可先复刻；现demo：未实现。

## TOP05 · 部落火箭共同燃料与返航分奖

**核心循环（派生）**：部落发火箭→成员供燃料→到站继续飞→返航→贡献者分奖。

**特色说明**：社区资源投入变成合作远征，未供燃料不给奖励。

**资源中可见规则/门槛/资源/回报**：到站仍需飞动态秒数并送燃料；返航给所有供燃料用户；未供不给；旧宝箱升级火箭并开放商店/礼物。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **12055**：The Tribe Rocket has returned, and rewards will be issued to all users who contributed fuel

- `resources.arsc` pool offset **12**，string index **12406**：Tribe Rocket arrived at %1$s! Keep flying %2$s s, send fuel to fetch rewards!

- `resources.arsc` pool offset **12**，string index **12925**：You didn't send fuel so you get no reward. Join next time!

- `resources.arsc` pool offset **12**，string index **12396**：Tribe Chest has evolved into Tribe Rockets! The Tribe Store and Tribe Gift system are now unlocked - come experience it now!

**未知**：燃料成本、航程、奖励公式、最低贡献与发射条件未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：贡献/航程/返航模型，参数自定；不把旧箱规则套火箭。 工作量：中；判断：可先复刻；现demo：未实现。

## TOP06 · 部落干部资产与成员任务回报

**核心循环（派生）**：任命干部→管理成员/资产/发射火箭→成员完成任务→族长额外领奖。

**特色说明**：职位具有资产分配和玩法发起权，成员完成任务给领导者回报。

**资源中可见规则/门槛/资源/回报**：任命可授管理成员、分配资产、发火箭；成员完成quest使族长获更多币/道具。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **12142**：The other party will have the authority to manage members, allocate assets, launch rockets, etc. Are you sure to set it?

- `resources.arsc` pool offset **12**，string index **12771**：When a member completes a quest, the tribe leader will have more Coin and item rewards.

**未知**：角色名称、级别/人数、审批、账本审计、任务定义未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：干部能力与任务归属模型，不含基础群功能。 工作量：中；判断：可先复刻；现demo：未实现。

## TOP07 · 幸运号码礼物抽奖

**核心循环（派生）**：房管设置奖品/礼物→参与赠抽奖礼物→命中幸运号→派奖后活动结束。

**特色说明**：抽奖由房内用户赠礼触发，难度与礼物成本可选。

**资源中可见规则/门槛/资源/回报**：匹配幸运号得奖；中奖后动态小时内自动结束；低价礼物/低难度更好机会提示；奖品有效期≥动态小时。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **11688**：Send a lottery gift. Match the lucky number to win a reward

- `resources.arsc` pool offset **12**，string index **12547**：Users give a Lottery Gift. Match the lucky number to win a prize. The event will end automatically within %1$s hours after the prize is won.

- `resources.arsc` pool offset **12**，string index **12418**：Try cheaper lottery gifts or lower difficulty for better odds.

- `resources.arsc` pool offset **12**，string index **11107**：Only items with a validity of ≥%1$s hour(s) can be used as rewards

- `resources.arsc` pool offset **12**，string index **11735**：Set Lottery Gift

**未知**：号码空间、概率、同号、多次中奖/结束时窗与剩余礼物退款未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：无真实资产的号码抽奖；概率/中奖后时窗参数标自定。 工作量：中；判断：可先复刻；现demo：未实现。

## TOP08 · 武器PK与任务/护盾候选

**核心循环（派生）**：团队PK→武器商店→可购买护盾→任务游戏。

**特色说明**：武器PK+mission明确有入口，护盾提示暗示保护他人。

**资源中可见规则/门槛/资源/回报**：仅资源写Weapon PK + mission gameplay和买shield保护他人；不能推定MICO式Lv5双倍。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **12680**：Weapon PK + mission gameplay

- `resources.arsc` pool offset **12**，string index **12681**：Weapon Shop

- `resources.arsc` pool offset **12**，string index **10227**：Go to weapon store and buy shield to protect him?

**未知**：武器表、升级、攻击/保护、任务、时限、PK计分未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：先补小游戏模块/方法，暂只做机制线框。 工作量：高；判断：需补证据；现demo：未实现。

## TOP09 · 战斗游戏5级解锁League

**核心循环（派生）**：任一战斗游戏升到5→联赛入口开放→赛季竞技/奖励。

**特色说明**：多游戏成长共同解锁联赛，而非每个小游戏孤立。

**资源中可见规则/门槛/资源/回报**：任一battle game Level5才解League；存在season rewards。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **10590**：League can only be unlocked when any battle game reaches level 5.

- `resources.arsc` pool offset **12**，string index **9627**：Congratulations, you get season rewards

**未知**：哪些游戏计入、EXP、联赛分段、赛季时长/匹配/奖励未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：共享解锁状态与联赛概念；赛制需另证。 工作量：中；判断：需补证据；现demo：未实现。

## TOP10 · 公开正式比赛游戏名片

**核心循环（派生）**：打公开正式局→记录表现→生成游戏卡→寻找同水平队友。

**特色说明**：社交名片基于比赛数据，有明确统计覆盖边界。

**资源中可见规则/门槛/资源/回报**：游戏卡帮助匹配同水平队友；2025-06-01起官方公开/语音/Battle/Club比赛纳入，私人房排除；删除同时移除队友卡和游戏卡。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **10132**：Game cards can help you match with equally skilled teammates, give it a try!

- `resources.arsc` pool offset **12**，string index **9731**：Data only includes official matches in public rooms, voice rooms, Battle matches, and Club rooms from June 1, 2025 onward. Private rooms are excluded.

- `resources.arsc` pool offset **12**，string index **9761**：Deletion will remove both Teammate Cards and Game Card from your profile.

**未知**：具体统计指标、匹配评分、卡片生成门槛未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：公开/私房统计过滤与能力卡；不复刻未知匹配算法。 工作量：中；判断：可先复刻；现demo：未实现。

## TOP11 · 游戏Club固定类型与专属房

**核心循环（派生）**：选Club类型创会→成员申请→专属Club游戏房→组织成员。

**特色说明**：组织类型创建后不能改，带有游戏房边界。

**资源中可见规则/门槛/资源/回报**：Club类型创建后不能改；有Club Applications、Club Members Only、Club Game Room。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **9537**：Club type "%1$s" cannot be changed after creation. Continue?

- `resources.arsc` pool offset **12**，string index **11087**：Once created, the club type cannot be changed. Please choose carefully.

- `resources.arsc` pool offset **12**，string index **9525**：Club Applications

- `resources.arsc` pool offset **12**，string index **9533**：Club Members Only

- `resources.arsc` pool offset **12**，string index **9528**：Club Game Room

**未知**：各类型、等级/容量、创建权限和房间玩法限制未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：固定类型Club与游戏房成员门禁；非普通群聊。 工作量：中；判断：需补证据；现demo：未实现。

## TOP12 · VIP竞技门禁与高阶临时封房

**核心循环（派生）**：开VIP→进入VIP Room/筛VIP用户→高阶踢人临时阻入。

**特色说明**：权限同时决定竞技同圈层和房管级别。

**资源中可见规则/门槛/资源/回报**：VIP Room仅VIP可玩；VIP可筛VIP用户；VIP16踢出后1小时不能进；VIP9动态头像。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **11104**：Only VIPs can join the games in the VIP Room.

- `resources.arsc` pool offset **12**，string index **9069**：After becoming a VIP, you will have the right to filter VIP users.

- `resources.arsc` pool offset **12**，string index **12525**：Use VIP16 privileges to kick the user out of the room? After being kicked out, the user cannot enter the room for 1 hour.

- `resources.arsc` pool offset **12**，string index **12472**：Unlock privilege of uploading dynamic avatars after VIP9

**未知**：费用、具体房局差异、踢人是否有角色条件、抗滥用覆盖未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：权益矩阵与1小时阻入计时；本地模拟。 工作量：中；判断：可先复刻；现demo：未实现。

## TOP13 · 贵族称号启用与匿名入房

**核心循环（派生）**：获得爵位→选择启用→按最高爵位授权益→匿名入场。

**特色说明**：持有多个爵位仅最高项决定权益，匿名把头像/名/入场都隐藏。

**资源中可见规则/门槛/资源/回报**：需使用称号才得权益；多个取最高；匿名时其他用户看不到头像昵称和进入；Noble Points有次月结转。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **8693**：2. Only by using aristocratic titles you can get all the aristocratic privileges

- `resources.arsc` pool offset **12**，string index **8695**：2. When somebody has more than one aristocratic title, the privileges of the highest title will be considered.

- `resources.arsc` pool offset **12**，string index **9235**：Aristocratic privileges. After enabling it, other users in the live studio won't be able to see your profile pic, nickname and when you come in

- `resources.arsc` pool offset **12**，string index **8523**：%s Noble Points will carry over to next month.

- `resources.arsc` pool offset **12**，string index **12123**：The invisibility privilege has been incorporated into the noble privileges. Please upgrade your noble level to obtain it.

**未知**：级别列表、购买价格/有效期、匿名真实边界、点数结转条件未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：多称号能力优先级与匿名展示，不承诺隐私安全。 工作量：低；判断：可先复刻；现demo：未实现。

## 选择方式

选择ID即可进入下一轮规格确认。可先复刻表示有足够文本支持一个透明补齐参数的本地机制原型，并不表示已恢复原App全部算法。工作量仅估计单机机制原型，相对于低/中/高；多人后端与真语音另计。

权益特例需要先决定复刻的是身份表现、权限矩阵还是完整商业订阅，本文不默认迁移真实付费规则。
