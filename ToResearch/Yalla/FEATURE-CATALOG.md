# Yalla 特色机制下钻目录

分析日期：2026-10-13；包名 `com.weieyu.yalla`；版本 `3.7.0`。范围：**partial static**。本轮供选择性复刻，不扩建demo。

“独特”指本App机制组合与特色，并非市场独占。通用登录、关注、聊天、充值没有单独列项。**B**=包体明确资源规则；**C**=结构/入口候选，不能视为玩法已恢复；**A**=代码+文案交叉证据，本轮无A。包体直接证据是资源实际存在，未确认线上生效。核心循环和机制聚合是静态派生；产品目的解释是推断；缺失算法、阈值及权限列为未知。

复用REA包体Evidence `ev_dc7ee38426bf6f05688eb7278920e380c10713d920f713a22133dfd5a3472338`（[原结果](analysis/rea-package.json)）。本轮新增格式感知Android资源池扫描：[可复查证据](analysis/feature-expanded-resources.json)。每条给原文件/池offset/索引；索引不是resource ID。未完成资源调用/语言配置绑定，未执行APK、登录或访问原业务服务。之前类反编译超时不能算代码恢复。

现有demo只覆盖原选定片段，规则补齐是重构选择。所有新建议以模拟资产为边界；真实权益定价、支付、多人后台、反作弊、RTC和地区开关未验证。MICO为全球包，不能把静态机制认作MENA/东南亚均开放。

| ID | 特色机制 | 分类 | 证据 | 复刻判断 | 工作量 | demo |

|---|---|---|---|---|---|---|

| YAL01 | 观众干预的速度赛 | 游戏 / 玩法 | B | 可先复刻 | 中 | 未实现 |

| YAL02 | 足球/团队礼物积分奖池 | 游戏 / 玩法 | B | 需补证据 | 中 | 已有 |

| YAL03 | 10级房间共同开宝箱 | 玩法 / 权益 | B | 可先复刻 | 低 | 未实现 |

| YAL04 | 押金式房内猜拳 | 游戏 / 玩法 | B | 可先复刻 | 低 | 未实现 |

| YAL05 | 变声整蛊与防护牌 | 玩法 / 权益 | B | 可先复刻 | 中 | 未实现 |

| YAL06 | CP绑定与专属礼物亲密 | 社交 / 权益 | B | 可先复刻 | 低 | 未实现 |

| YAL07 | 房会员亲密与徽章熄亮 | 社交 / 权益 | B | 可先复刻 | 低 | 未实现 |

| YAL08 | 90天VIP升降与退款冻结 | 权益 | B | 可先复刻 | 中 | 未实现 |

| YAL09 | Premium爵位返金与成长倍率 | 权益 | B | 可先复刻 | 低 | 未实现 |

| YAL10 | 自定义房主题的时效与冻结 | 权益 / 玩法 | B | 可先复刻 | 低 | 未实现 |

| YAL11 | 房间置顶卡拍卖 | 权益 / 玩法 | B | 可先复刻 | 中 | 未实现 |

| YAL12 | 徽章星级与限时荣誉榜 | 权益 / 玩法 | B | 可先复刻 | 低 | 未实现 |

## YAL01 · 观众干预的速度赛

**核心循环（派生）**：玩家参赛→观众点赞或送技能礼物→加速自己/干扰对手→终点排名领奖。

**特色说明**：把观众互动变成竞速控制输入。

**资源中可见规则/门槛/资源/回报**：点赞或带[$0]礼物可影响速度；高终点排名奖励更多；管理员可被授权管理速度赛。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **5667**：1. During the game, players can like or give any player gifts with [$0] to use skills to increase their own speed or affect others' speed, and there will be different effects.

- `resources.arsc` pool offset **12**，string index **6996**：In each game, players have the opportunity to get the following rewards. Players who reach the finish line and rank high will receive more abundant rewards.

- `resources.arsc` pool offset **12**，string index **5990**：Allow Admins to Manage Speed Battle

- `resources.arsc` pool offset **12**，string index **8244**：Speed Battle

**未知**：[$0]含义、技能表、轨道与速度公式、人数和时间未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：固定轨道、技能按钮、排名结算，技能数值标为自定。 工作量：中；判断：可先复刻；现demo：未实现。

## YAL02 · 足球/团队礼物积分奖池

**核心循环（派生）**：送游戏专属礼物→积累奖池→获胜方分奖。

**特色说明**：竞技结果与礼物奖池绑定，存在定时概率增益文案。

**资源中可见规则/门槛/资源/回报**：有Crazy Football专属礼物；另一条团队奖池文案写胜队TOP1–4分享积分、定时概率增益。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **6792**：Game gifts can only be sent in the Crazy Football game.

- `resources.arsc` pool offset **12**，string index **8491**：The room owner who gets the corresponding ranking in the Crazy Football room list can get the following rewards:

- `resources.arsc` pool offset **12**，string index **9212**：You can get points and add points to the treasure chest by giving game gifts. The treasure chest has a probability of increasing the points every certain time, and the TOP 1-4 in the winning team can share the points.

**未知**：团队奖池文字是否专属于足球未完成资源调用映射；比分算法、概率、奖励比例未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：现demo只有通用团队奖池，虽标题含Speed Battle但未实现速度技能；足球与奖池调用未证实前不合并。 工作量：中；判断：需补证据；现demo：已有。

## YAL03 · 10级房间共同开宝箱

**核心循环（派生）**：房内赠金礼物→钥匙进度满→全房有机会得奖励→每日进度重置。

**特色说明**：房间等级门槛与全房共享奖励，含排除型礼物规则。

**资源中可见规则/门槛/资源/回报**：房Level10解锁；赠金礼物获得钥匙，排除golds-winning gift；GMT+2零点重置；全房均有机会获奖。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **5672**：1. Only the rooms that reach Level 10 have treasure chests.

- `resources.arsc` pool offset **12**，string index **5736**：2. The chest key is obtained by sending gold gifts in the room (excluding golds-winning gift).

- `resources.arsc` pool offset **12**，string index **5777**：3. When the progress bar of the chest key is filled up, the treasure chest will be opened.

- `resources.arsc` pool offset **12**，string index **5798**：4. Everyone in the room has a chance to get the rewards in the treasure chest.

- `resources.arsc` pool offset **12**，string index **5838**：7. The progress bar of the chest key will be reset at 00:00 (GMT+2) everyday.

**未知**：钥匙兑换率、宝箱各级阈值、抽取分配与概率未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：共享进度、开箱和模拟分配，阈值/随机率自定。 工作量：低；判断：可先复刻；现demo：未实现。

## YAL04 · 押金式房内猜拳

**核心循环（派生）**：发起者选手势/胜者礼物并交押金→房消息邀人选手势→结算或过期返押金。

**特色说明**：轻量手势小游戏绑定礼物押金和参与/胜者排行榜。

**资源中可见规则/门槛/资源/回报**：押金为礼物对应金币；结束/到期退押金；2小时无人参与关闭；胜者榜按获得礼物数、参与榜按次数。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **5665**：1. Choose a gesture and the gifts for the winner, then start the game. You need to pay golds for the gifts as a deposit, which will be returned to you when the game ends or expires.

- `resources.arsc` pool offset **12**，string index **5732**：2. Tap the Roshambo game messages in the room and choose a gesture to participate in the game.

- `resources.arsc` pool offset **12**，string index **5734**：2. The Top Winners rankings are based on the number of gifts won by playing Roshambo.

- `resources.arsc` pool offset **12**，string index **5772**：3. The Top Participants ranking is based on the times of playing Roshambo.

- `resources.arsc` pool offset **12**，string index **5801**：4. If no one participates in the game within 2 hours, the game will be closed and the deposit will be returned to the starter.

**未知**：一对多手势比对、开奖时点、赠礼扣款和退款先后未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：发起/响应/到期状态机与两个榜，不接支付。 工作量：低；判断：可先复刻；现demo：未实现。

## YAL05 · 变声整蛊与防护牌

**核心循环（派生）**：对他人施变声→对方移除或加护盾→免疫时窗结束。

**特色说明**：语音互动可被道具干预，并有可见反制。

**资源中可见规则/门槛/资源/回报**：Protective Shield移除变声并防止再次施加10分钟；Remove Effects单次移除。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **5861**：A "Protective Shield" card can eliminate the effect of a "Voice Changer" card and prevent someone from being applied a “Voice Changer” card in 10 mins.

- `resources.arsc` pool offset **12**，string index **5871**：A “Remove Effects” card can eliminate the effect of a "Voice Changer" card.

**未知**：变声音效列表、目标同意与适用房模式、卡片获取/价格未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：道具状态与10分钟免疫倒计时；真实变声另立技术任务。 工作量：中；判断：可先复刻；现demo：未实现。

## YAL06 · CP绑定与专属礼物亲密

**核心循环（派生）**：双方绑定CP→送专属礼物增亲密→榜单展示→解绑失去权益。

**特色说明**：包内有异性绑定门槛和CP礼物加成，不能泛化成全部关系系统。

**资源中可见规则/门槛/资源/回报**：绑定要求不同性别；给CP专属礼物增加额外亲密；解绑后相关权益丧失。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **6115**：Binding a CP relationship requires both parties to be of different genders. Please confirm your gender information before proceeding.

- `resources.arsc` pool offset **12**，string index **6168**：CP Rankings

- `resources.arsc` pool offset **12**，string index **8121**：Sending this gift to your CP will grant extra intimacy.

- `resources.arsc` pool offset **12**，string index **8529**：This action cannot be undone. Once the CP relationship is unbound, all associated benefits will be lost.

**未知**：邀请同意流程、等级、加成倍率、解绑亲密处理未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：双向邀请、模拟亲密及权益开关；门槛作为可配置策略。 工作量：低；判断：可先复刻；现demo：未实现。

## YAL07 · 房会员亲密与徽章熄亮

**核心循环（派生）**：支付房会员费→做任务/赠会员礼物→亲密成长与徽章→退组锁定、重入解锁。

**特色说明**：房主收费会员组织与可恢复亲密绑定；不同于普通关注。

**资源中可见规则/门槛/资源/回报**：房主设置会费且收益有日上限；会员礼物1.2倍亲密；退组锁亲密/权益、重入解锁；任务可重新点亮灰徽章。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **7689**：Please set the membership fee for your room. Users can join your room by paying the fee. You will get the reward no more than a daily limit.

- `resources.arsc` pool offset **12**，string index **8105**：Send exclusive member gifts to get 1.2 times intimacy points.

- `resources.arsc` pool offset **12**，string index **7027**：Intimacy points and privileges will be locked when removed. The intimacy points will be unlocked by re-joining the member group.

- `resources.arsc` pool offset **12**，string index **9433**：Your member badge is greyed out. Complete the member tasks to light it up.

- `resources.arsc` pool offset **12**，string index **6356**：Congratulations! Your room member group is in TOP10 weekly ranking. You obtained an exclusive room theme.

**未知**：会费范围、会员有效期、日上限、徽章变灰周期未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：会员组、任务、徽章状态与1.2倍计分；费用为模拟。 工作量：低；判断：可先复刻；现demo：未实现。

## YAL08 · 90天VIP升降与退款冻结

**核心循环（派生）**：购买得VIP积分→升级清零开启90天→维护/降级→退款欠积分冻结。

**特色说明**：积分周期、跳级、重新评定及冻结组成完整权益状态机。

**资源中可见规则/门槛/资源/回报**：90天内升高等级即积分清零；周期末重新评定；退款造成积分不足冻结；180天未解冻则剩余有效期清零。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **6973**：If you are not VIP yet, when your VIP Points meet the requirements of a certain VIP level during a 90-day period, you will reach this VIP level and your VIP Points will be reset to 0. If you fail to reach any VIP level during the 90-day period, your accumulated VIP Points will be reset to 0 when the period ends.

- `resources.arsc` pool offset **12**，string index **6985**：If your VIP level is not upgraded during the period, when the period is over, your VIP level will be reset according to the VIP Points you earned within the period, and your VIP Points will be reset to 0. To maintain your current VIP level, you need to accumulate the VIP Points needed from the previous level during the period. Otherwise, your VIP level will be downgraded.

- `resources.arsc` pool offset **12**，string index **8477**：The period of validity for each VIP level is 90 days. During the 90-day period, if your VIP Points meet the requirement for a higher level, your VIP level will be immediately upgraded and your VIP Points will be reset to 0. Upgrading by skipping a certain level is supported.

- `resources.arsc` pool offset **12**，string index **6979**：If you don't have enough VIP Points to be deducted for a refund, your VIP membership will be frozen until you pay off the VIP Points you owe.

- `resources.arsc` pool offset **12**，string index **7680**：Please note that if your VIP membership is not unfrozen within 180 days of freeze, your remaining VIP validity period will be reset to 0 days, but your VIP Points will not be reset to 0.

- `resources.arsc` pool offset **12**，string index **8410**：The VIP program is different from Yalla Premium. Generally speaking, VIP membership is acquired by earning VIP Points through your in-app purchases, while Yalla Premium membership is acquired through direct purchase.

**未知**：逐级点数阈值、宽限期时长、不同新旧文案配置是否同版生效未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：参数化周期/升降/冻结模拟器，阈值自行定义。 工作量：中；判断：可先复刻；现demo：未实现。

## YAL09 · Premium爵位返金与成长倍率

**核心循环（派生）**：直接购买爵位→得到徽章/车/倍率/返金→使用权益。

**特色说明**：直接购买Premium与积分VIP双轨，伯爵/侯爵有不同增长和送礼返金。

**资源中可见规则/门槛/资源/回报**：Count文案1.2倍升级、5%送礼返金；Marquis 1.3倍、10%；Baron1.1倍；可选择VIP/Premium显示徽章。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **8386**：Thank you for being a Yalla Premium member. Your membership includes the following privileges: / 1. Premium badge for Count / 2. Exclusive luxury car for Count / 3. Level up at 1.2x speed / 4. 5% gold rebate on sending gifts / 5. Customize your profile cover / 6. Exclusive room theme / 7. Some other privileges

- `resources.arsc` pool offset **12**，string index **8387**：Thank you for being a Yalla Premium member. Your membership includes the following privileges: / 1. Premium badge for Marquis / 2. Exclusive luxury car for Marquis / 3. Level up at 1.3x speed / 4. 10% gold rebate on sending gifts / 5. Customize your profile cover / 6. 10 whole-platform broadcasts / 7. Some other privileges

- `resources.arsc` pool offset **12**，string index **8388**：Thank you for being a Yalla Premium member. Your membership includes the following privileges: / 1. Receive golds for logging in every day / 2. Premium badge for Baron / 3. Exclusive luxury car for Baron / 4. Level up at 1.1x speed / 5. Exclusive name card for Baron / 6. Some other privileges

- `resources.arsc` pool offset **12**，string index **6972**：If you are both a VIP member and a Yalla Premium member, you can choose which membership privilege to use to control your identity badge displayed on mic and the color of your username in chatroom messages.

- `resources.arsc` pool offset **12**，string index **8410**：The VIP program is different from Yalla Premium. Generally speaking, VIP membership is acquired by earning VIP Points through your in-app purchases, while Yalla Premium membership is acquired through direct purchase.

**未知**：售价、订阅周期、返金适用礼物、实际配置未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：双轨权益表与倍率/返金账本，模拟余额。 工作量：低；判断：可先复刻；现demo：未实现。

## YAL10 · 自定义房主题的时效与冻结

**核心循环（派生）**：有资格上传→审核→7/30天使用续期→会员失效冻结→恢复。

**特色说明**：房装扮包含购买、审核退还、使用资格冻结多个独立状态。

**资源中可见规则/门槛/资源/回报**：Premium/VIP可上传；7天799金币、30天1999；会员失效冻结；被拒退币或退VIP3+免费次数。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **5670**：1. Only Yalla Premium members and VIP users can upload and use custom room themes.

- `resources.arsc` pool offset **12**，string index **5762**：3. A custom room theme is valid for 7 or 30 days. You can renew it with 799 golds for 7 days or 1999 golds for 30 days. When your premium membership or VIP membership expires, your custom room themes will be frozen.

- `resources.arsc` pool offset **12**，string index **5828**：6. If the custom room theme is rejected, golds you paid will be refunded. If the custom theme is obtained by the privilege for VIP 3 and above users, the times to have free custom theme will be refunded.

**未知**：审核规则、VIP免费额度、冻结期间时长是否继续流逝未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：上传占位、审核模拟、有效期与冻结，不复刻素材商店。 工作量：低；判断：可先复刻；现demo：未实现。

## YAL11 · 房间置顶卡拍卖

**核心循环（派生）**：2小时拍卖置顶卡→赢家房间自动置顶→无人出价时转直接购买。

**特色说明**：流量位置按时段竞拍，未售可立即买。

**资源中可见规则/门槛/资源/回报**：每卡拍卖2小时；拍得后自动置顶；无人出价结束后可直接买并立即生效。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **6566**：Each Pin on Top card is sold by an auction lasting for 2 hours. If you successfully purchase one, your room will be pinned on top automatically. If no bid is made by the end of the auction, the Pin on Top Card can be purchased and be effective immediately after purchase.

**未知**：出价步长、押金返还、置顶时长和同分处理未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：时段拍卖及榜首页位置模拟。 工作量：中；判断：可先复刻；现demo：未实现。

## YAL12 · 徽章星级与限时荣誉榜

**核心循环（派生）**：达成成就→得铜银金徽章星→累计星排名→按周期授荣誉。

**特色说明**：可长期积累成就和短期荣誉形成两层身份系统。

**资源中可见规则/门槛/资源/回报**：一条规则铜1/银3/金11星；相同星先获得者优先；通常周日发荣誉一周，Billionaire每月首个周日发约一月。

**包体直接证据**：

- `resources.arsc` pool offset **12**，string index **5896**：Achievement Badge Rankings are based on the number of stars of badge holders. For an Achievement Badge, the stars you can get at each level are as follows:  / Bronze - 1 star  / Silver - 3 stars  / Gold - 11 stars

- `resources.arsc` pool offset **12**，string index **5680**：1. The rankings are based on the number of stars of badge holders. / 2. In case two or more users have equal number of stars, the user who first obtained these stars will be ranked higher.

- `resources.arsc` pool offset **12**，string index **6564**：Each Achievement Badge has four levels from low to high: Bronze - Silver - Gold - Diamond.

- `resources.arsc` pool offset **12**，string index **6565**：Each Achievement Badge has three levels from low to high: Bronze - Silver - Gold.

- `resources.arsc` pool offset **12**，string index **7572**：Other Honor Badges are awarded to eligible users every Sunday and are valid for one week.

- `resources.arsc` pool offset **12**，string index **8402**：The "Yalla Billionaire" Honor Badges are awarded to eligible users on the first Sunday of every month and is valid for about one month.

**未知**：同时有四级含Diamond与三级版本文案；钻石星数、具体成就任务、版本配置未知。；是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。

**可选择的重构范围**：采用明确三级星规则演示；四级作为未决配置。 工作量：低；判断：可先复刻；现demo：未实现。

## 选择方式

选择ID即可进入下一轮规格确认。可先复刻表示有足够文本支持一个透明补齐参数的本地机制原型，并不表示已恢复原App全部算法。工作量仅估计单机机制原型，相对于低/中/高；多人后端与真语音另计。

权益特例需要先决定复刻的是身份表现、权限矩阵还是完整商业订阅，本文不默认迁移真实付费规则。
