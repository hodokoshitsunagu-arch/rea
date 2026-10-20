# HeeSay 独特社交 / 权益 / 游戏 / 玩法目录

固定目标：`com.blued.international` `5.14.5`；日期 2026-10-13；覆盖 `partial static`。独特指本应用中值得单独研究的机制，不宣称市场独占。基础登录、普通聊天、关注不列入。

复用本目录真实 REA 结果和当前包体格式感知资源解析；此次补充权益字符串池检索，不执行 APK、不请求原服务、不使用 source-comparison 旧包。直接证据仅证明代码/资源存在，不能证明地区开放或线上执行。规则表是资源明确声明或代码观察；推断列是研究者对意义的解释；未知项保留服务器与配置空白。现有 demo 仅表示覆盖该项的部分核心机制。

证据等级：A=代码与文案互证；B=明确资源规则；C=结构或入口候选。可先复刻只指有足够边界做本地核心机制原型，不代表完整原版恢复。

复用 REA 包体初检 Evidence：`ev_1e3bb03b049790916a92c54d4103175fcc275bb910291de87eb042cf1d76bb89`。资源扩展保留原 resources.arsc 全局池 index 和 byte offset，避免把候选类名解释为业务执行。


| ID | 机制 | 类别 | 证据 | 复刻准备 | 成本 | 现有demo |
|---|---|---|---|---|---|---|
| HEE01 | 守护资格、Top1 Couple 与积分到期 | 社交 / 权益 / 玩法 | B | 可先复刻 | 中 | 已有 |
| HEE02 | Chat Spark 到 Soulmate 徽章 | 社交 / 权益 | B | 需补证据 | 中 | 未实现 |
| HEE03 | Fan Club 取最高等级奖励 | 社交 / 权益 | B | 可先复刻 | 中 | 未实现 |
| HEE04 | Family Starship 月度保级 | 社交 / 玩法 / 权益 | B | 可先复刻 | 中 | 未实现 |
| HEE05 | 家族双域管理员与创建存续条件 | 社交 / 权益 | B | 需补证据 | 中 | 未实现 |
| HEE06 | RICH 保级失败冻结不降级 | 权益 / 玩法 | B | 可先复刻 | 中 | 未实现 |
| HEE07 | 匿名观播对主播可见 | 权益 / 社交 | B | 可先复刻 | 中 | 未实现 |
| HEE08 | 幸运礼物按实际收币算榜 | 玩法 / 权益 | B | 需补证据 | 中 | 未实现 |
| HEE09 | 宝箱任务排除特定礼物 | 玩法 / 社交 | B | 可先复刻 | 中 | 未实现 |
| HEE10 | Card Battle 分阶段揭牌 | 游戏 / 玩法 | B | 需补证据 | 中 | 未实现 |
| HEE11 | Hot Pick 与跨房PK互斥 | 玩法 / 社交 | C | 需补证据 | 中 | 未实现 |
| HEE12 | Doodle 月榜排除上月Top10 | 社交 / 玩法 | B | 可先复刻 | 中 | 未实现 |
| HEE13 | 游戏票的失败补偿 Lucky Points | 游戏 / 玩法 / 权益 | B | 需补证据 | 低 | 未实现 |
| HEE14 | 徽章槽位按展示域分权 | 权益 / 社交 | B | 可先复刻 | 低 | 未实现 |

## HEE01 · 守护资格、Top1 Couple 与积分到期

核心循环：单日2500Beans成为守护→滚动七日积分争Top1→投射Couple。

特色解释（推断）：多对多守护与主播维度Top1关系分离。

包体直接规则：
- 门槛：GMT+0单日2500Beans
- 时序：点7天有效，第8日0点扣除；榜延迟1–2分钟
- 资源：1Bean=1守护点
- 回报：Top1 Couple身份

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10180 / 588508`：1. In the VOICE room, send gifts worth 2,500 beans to a voicer within a single day(00:00:00 - 24:00:00, GMT+0), you will become his guardian.  / 2. The TOP 1 guardian and the voicer become a couple.  / 3. Each voicer can have multiple guardians, and each user can also guard multiple voicers.  / (The data may be a 1-2 minutes delay in updating.)
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10161 / 584393`：1 Bean = 1 Guardian Point / The validity period of the guardian points is 7 days. You can send gifts to your guardian voicer to increase your guardian points. The guardian points will be deducted at 00:00:00 (GMT+0) on the 8th day after it is obtained.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 15391 / 807285`：Top 1 guardian will be displayed on the voice mini profile of the guarded voicer.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 15855 / 822659`：Warning! You will lose the guardian of %2$s. Send him %1$s beans as gifts today and to keep guarding. / (V5.3.4 and above)

未知项：同分；资格失效需要补量文案但精确公式未知。

建议复刻范围：守护双账本和滚动到期。成本：中；准备：可先复刻；demo：已有。

## HEE02 · Chat Spark 到 Soulmate 徽章

核心循环：点燃聊天火花→一天互送超过10Beans→Soulmate徽章。

特色解释（推断）：双向送礼叠加持续聊天关系符号。

包体直接规则：
- 门槛：已点燃Chat Spark；一天互赠>10Beans
- 时序：单日
- 资源：聊天火花/双方赠礼
- 回报：Soulmate徽章

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10562 / 622700`：After igniting the Chat Spark, exchange gifts worth over 10 beans in one day to unlock the Soulmate badge, representing a closer relationship.

未知项：Chat Spark点燃与熄灭；双方各10还是合计。

建议复刻范围：关系进阶模型。成本：中；准备：需补证据；demo：未实现。

## HEE03 · Fan Club 取最高等级奖励

核心循环：加入多主播粉丝团→提高徽章等级→领取最高团奖励。

特色解释（推断）：多团参与不会简单叠加奖励。

包体直接规则：
- 门槛：加入Fan Club
- 时序：每日赠礼奖励
- 资源：粉丝点/等级
- 回报：最高等级团奖励；进所属主播房才显徽章

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 15098 / 788536`：The higher level your Fan Badge reaches, the more Fan Club Exclusive Gifts you can get every day. If you join multiple Fan Clubs, you'll get the highest level one's bonus.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 16008 / 830356`：Worn badges will only be shown when you get into the Fan Club owner's LIVE room. If you remove the badge or you enter another host's LIVE room, it will not be shown.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10565 / 623289`：After quitting the Fan Club, your privileges, level and Fan Points will be lost and cannot be recovered. Are you sure you want to quit the Fan Club?

未知项：粉丝点生产；退出不可恢复；奖励内容。

建议复刻范围：多粉丝团奖励去重模型。成本：中；准备：可先复刻；demo：未实现。

## HEE04 · Family Starship 月度保级

核心循环：成员做任务加Force→选择升级→下一月保级→失败降级减总力。

特色解释（推断）：组织扩大容量也提高维护负担。

包体直接规则：
- 门槛：Lv1月保15000容量10；Lv2升级150000/月保60000容量15
- 时序：下月提高保级门槛，GMT+0每月清月值
- 资源：Monthly与Overall Force
- 回报：等级、容量、权益

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 13176 / 719600`：Monthly Safe Force: The Monthly Force required to keep your Starship safe at the current level. The Monthly Safe Force challenge at each level is different. If your Monthly Force fails to meet the Level's Monthly Safe Force requirement, your Starship will be downgraded in the next month and your Overall Force will fall to the Attacked point.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 15641 / 814087`：Upgrade: After earning enough Overall Force, you will be able to upgrade your Starship. /  / When upgraded, your Starship will unlock a higher member capacity and other perks, but also have to meet a higher Monthly Safe Force requirement. The higher Monthly Safe Force requirement starts in the next month. /  / If you choose not to upgrade, the Monthly Safe Force requirement will remain the same, but you won't be able to grow your Starship with more new members and other perks.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 15030 / 783370`：The Monthly Safe Force of Level 1 Starship is '15000', and the Member Capacity is 10.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 15038 / 783959`：The Upgrade Force of Level 2 Starship is '150000', the Monthly Safe Force is '60000', and the Member Capacity is 15.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 14086 / 752379`：Rankings will be sorted according to the current Monthly Force, which will be counted from 0:00 (GMT+0) on the 1st of this month and automatically emptied for the following month.

未知项：当前Family与Starship是否双体系；任务分；降级恢复公式。

建议复刻范围：组织成长与风险沙盘。成本：中；准备：可先复刻；demo：未实现。

## HEE05 · 家族双域管理员与创建存续条件

核心循环：创建/加入→族务与群管理角色→招募达标维持存续。

特色解释（推断）：家族角色有家族和群聊两套权限域。

包体直接规则：
- 门槛：资源有财富Lv9创建与主播等级优惠两套门槛；30天>10人文案
- 时序：创建许可证/招募期
- 资源：家族资格/管理员身份
- 回报：管理招募、奖励、群公告

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 14765 / 773399`：Starship Admin privileges consist of two parts Starship related: / Approval of applications for joining the Starship, kicking out members, inviting members to join, and issuing Starship rewards, editing the starship bulletin / Group chat related: / Group chat member invitation, member joining application, group chat removing member, editing group profile/announcement
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10207 / 597691`：1.1 When you choose to create a Family, you will automatically become the Leader of the Family, with the authority to publish family announcements, manage family members, and more. /  / 1.2 The Family Leader and Members can complete family tasks to accumulate Family Force and elevate the family level. If the family you create or join does not meet the platform's required power level for maintenance, your family downgraded. If your family consistently fails to meet the minimum (Level 1) maintenance requirements, it may be automatically disbanded. /  / 1.3 Within 30 days of creation, each Family must ensure that the number of members exceeds 10, otherwise, it will be automatically disbanded. Once disbanded, the family cannot be restored.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 16096 / 836883`：You can only create a family if your wealth level in live streaming/voice rooms is 9 or higher.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 14953 / 779027`：Tap the "Build" button below to create the Starship of your own. /  / New Commander Special Offer: /  / If you are a host above Lv.10, you can build your first Family Starship for FREE. /  / If you are a host between Lv.5 - Lv.9, you can build your first family Starship right now at a discounted price, or choose to build for free after reaching Lv.10. /  / Tip: If you haven't reached Lv.5 yet, we recommend that you board an existing Family Starship to explore the space.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 93492 / 5417898`：The created family must have more than %1$s members within 10 days, or it will be automatically disbanded if the requirement is not met.

未知项：10天/30天人数文案冲突；旧Starship与新Family适用；当前服务器门槛。

建议复刻范围：先分家族产品路径再复刻。成本：中；准备：需补证据；demo：未实现。

## HEE06 · RICH 保级失败冻结不降级

核心循环：积EXP→周期重算→达标扣维护EXP并重启→失败冻结→补EXP解冻。

特色解释（推断）：冻结权益与等级下降是不同状态。

包体直接规则：
- 门槛：维护EXP
- 时序：有效期末
- 资源：RICH EXP
- 回报：保级权益；失败等级保留但冻结

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 12511 / 697254`：If your RICH level does not change during the validity period, it will be recalculated at the end of the period.  /  / a. If you successfully maintain your level, the required maintenance EXP will be deducted, and the validity period for your current level will restart.  /  / b. If you fail to maintain your level, a portion of the maintenance EXP will be deducted (your level will not be downgraded), and your RICH level and privileges will be frozen until the maintenance requirement is met.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 15546 / 811355`：Unfortunately, your RICH level failed to maintain and has been frozen. / Once you earn the required EXP again, your level will immediately unfreeze and your exclusive privileges will be restored.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 11281 / 653015`：Congratulations on maintaining your RICH level! / Your RICH level has entered a new cycle. Enjoy your exclusive privileges!

未知项：部分扣除比例；阈值和周期；VIP是否独立。

建议复刻范围：冻结保级状态机。成本：中；准备：可先复刻；demo：未实现。

## HEE07 · 匿名观播对主播可见

核心循环：启用Anonymous Viewing→观众看神秘头像昵称→主播仍见真身份。

特色解释（推断）：同一个匿名身份按角色有不同可见性。

包体直接规则：
- 门槛：匿名观看资格
- 时序：观播时
- 资源：匿名开关
- 回报：观众不能打开真实主页，主播能识别

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10559 / 622241`：After enabling Anonymous Viewing, your personal avatar and nickname in the live will be replaced with an anonymous avatar and a mystery nickname, and others will not be able to access your profile. / Your real identity is only visible to the host.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 13202 / 720587`：Mr. Mystery entered this LIVE Room. Guess who he is! (You can activate mystery mode when your wealth level reaches Lv. 8)
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 13449 / 727527`：No one will be able to see your profile and Wealth Level Badge in the LIVE room.

未知项：财富Lv8神秘模式是否同一路径；房管可见性。

建议复刻范围：观众/主播可见性矩阵。成本：中；准备：可先复刻；demo：未实现。

## HEE08 · 幸运礼物按实际收币算榜

核心循环：送幸运礼物→发送者抽Beans→接收者得部分Coins→按实际Coins统计榜。

特色解释（推断）：送礼成本、奖励与榜单价值非同一个数量。

包体直接规则：
- 门槛：Lucky Gift
- 时序：奖励立即到账
- 资源：礼物Beans、接收Coins
- 回报：宣称最高500倍Beans；财富/魅力按实际Coins

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10190 / 591536`：1. Send a Lucky Gift to automatically enter the draw for a chance to win up to 500× the gift's value in Beans. /  / Example: If you send a Lucky Gift worth 100 Beans and hit the 500× multiplier, you'll win 50,000 Beans. /  /  /  / 2. When you send a Lucky Gift, the recipient receives a percentage of its value in Coins. The exact amount is shown in the gift details. /  /  /  / 3. Any Beans won from a Lucky Gift are credited to your HeeSay account immediately. /  /  /  / 4. Gift-related stats, such as Wealth Points, are calculated based on the number of Coins the recipient actually receives. /  / Example: If you send a Lucky Gift worth 1,000 Beans and the recipient receives 100 Coins, you will earn 0.1 Wealth Point. /  /  /  / 5. Recipient-related stats, such as Charm Points, are calculated based on the actual number of Coins received.

未知项：概率/每礼物兑换率；不同币种单位。

建议复刻范围：双币账本可先复刻，抽取算法待补。成本：中；准备：需补证据；demo：未实现。

## HEE09 · 宝箱任务排除特定礼物

核心循环：开二级宝箱→收指定积分→进入房间奖励竞争。

特色解释（推断）：普通礼物/地图与幸运袋等具有不同任务资格。

包体直接规则：
- 门槛：二级宝箱开启
- 时序：本场直播
- 资源：1Bean=1点；地图1张1点且上限下发；排除Lucky/Bag/Flying Comments
- 回报：任务完成与宝箱奖励

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10573 / 624019`：After the Level 2 treasure box starts, collect %1$s to complete the mission.  /  Points acquisition method:  /  - 1 bean = 1 point. Only counts gift consumption. Not including map, lucky gift, bag gift and flying comments. /  - 1 map = 1 point. This box can accumulate up to %2$s points through maps.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 13914 / 747462`：Points acquisition method:  /  - 1 bean = 1 point. Only counts gift consumption. Not including map, lucky gift, bag gift and flying comments. /  - 1 map = 1 point. This box can accumulate up to %1$s points through maps.

未知项：奖励池/竞争胜者；地图消耗与赠送语义。

建议复刻范围：按来源统计的共同目标。成本：中；准备：可先复刻；demo：未实现。

## HEE10 · Card Battle 分阶段揭牌

核心循环：三常规卡+秘密卡→中途揭第二张→结束揭第三张→比队分。

特色解释（推断）：信息逐渐公开而非一开始看到全部手牌。

包体直接规则：
- 门槛：人数/参与次数门槛占位
- 时序：倒计时揭牌
- 资源：3常规卡+1秘密卡
- 回报：高分队赢

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10336 / 609604`：4. Each team in the game will have 3 regular cards and 1 secret card. The second regular card will be revealed after a %1$s-minute countdown, and the third regular card will be revealed at the end of the countdown.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10333 / 609249`：4. After the game countdown ends, the team with the higher points wins and the winning team members will receive additional bean rewards.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10401 / 614493`：6. After the game countdown ends, the team with the higher points wins and the winning team members will receive additional bean rewards.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10437 / 617571`：9. Starting conditions of the game: The game can be successfully started when the total number of players participating in the game in this round is greater than 10 times, and each team has at least one player.

未知项：卡分/概率；秘密卡购买合成；结算赔率。

建议复刻范围：仅揭牌节奏与信息公开矩阵。成本：中；准备：需补证据；demo：未实现。

## HEE11 · Hot Pick 与跨房PK互斥

核心循环：服务器配置开放/显示/按钮→进入Hot Pick→禁止跨房PK。

特色解释（推断）：活动开放与可见性分别受控。

包体直接规则：
- 门槛：配置开关
- 时序：end_seconds/time_config
- 资源：score_config
- 回报：评分活动，胜者奖励未知

直接证据定位：
- [analysis/rea-hotpick-config.json](analysis/rea-hotpick-config.json) · `VoiceHotPickConfig / ev_826546cf807536187f3f1343323f2d254ed74d2dc083ef65335c7120b94156da`：is_hot_pick_open/is_show_hot_pick/is_show_hot_pick_btn/end_seconds/score_config/time_config字段
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 11042 / 644036`：Can’t start cross-room PK during Hot Pick
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 15302 / 803694`：This room will end the King battle and switch to Hot Pick.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 16394 / 857007`：You’re in a PK now. Can’t start Hot Pick.

未知项：分数来源和rank_type；完整胜负规则。

建议复刻范围：仅活动互斥与可见性模型。成本：中；准备：需补证据；demo：未实现。

## HEE12 · Doodle 月榜排除上月Top10

核心循环：发布涂鸦→人气竞榜→月初结榜→Top10下月排除。

特色解释（推断）：给新作品轮换上榜机会。

包体直接规则：
- 门槛：非排除涂鸦可参与，不限制创作时间
- 时序：GMT+0下月1日结算，1–3日展示
- 资源：每作品月人气
- 回报：月榜；上月前10下月排除

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10905 / 640143`：Besides the Doodles excluded, Doodles created at any time are able to participate in the monthly ranking of Popularity. The Popularity level of each Doodle will expire next month.
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 15068 / 786149`：The calculation of Monthly Popularity ends at 00:00:00 (GMT+0) on the 1st of the following month. The rankings will be shown during the 1st-3th of the each month. The top 10 Doodles on the Popularity ranking each month will be excluded in the next month's ranking.

未知项：人气生产和奖项；排除期是否仅一月。

建议复刻范围：作品榜轮换机制。成本：中；准备：可先复刻；demo：未实现。

## HEE13 · 游戏票的失败补偿 Lucky Points

核心循环：消费游戏票→赢得1点/输3点/平0→累计Lucky Points。

特色解释（推断）：失败玩家累积更多补偿进度。

包体直接规则：
- 门槛：每张游戏票使用
- 时序：结果后
- 资源：Lucky Points
- 回报：赢1输3平0，兑换用途未核实

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 12993 / 713075`：Lucky Points: For every game ticket used, you can get 1 lucky point for winning, 3 lucky points for not winning, and no points for a draw.

未知项：适用游戏；点数用途；退款结果。

建议复刻范围：结果补偿积分层。成本：低；准备：需补证据；demo：未实现。

## HEE14 · 徽章槽位按展示域分权

核心循环：装备最多六徽章→第一枚房间+主页展示→其余仅主页。

特色解释（推断）：身份展示位置具有槽位优先级。

包体直接规则：
- 门槛：持有徽章
- 时序：佩戴时
- 资源：六徽章槽
- 回报：第一枚跨场景展示，其余主页展示

直接证据定位：
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10218 / 600271`：1.The badge worn first is displayed on both the personal homepage and other badge display locations in the LIVE room / 2.Badges worn in positions 2-6 are only displayed on the personal homepage / 3.Up to 6 badges can be worn at the same time
- [analysis/feature-expansion-resources.json](analysis/feature-expansion-resources.json) · `resources.arsc / 10566 / 623442`：After successfully wearing it, the badge will be displayed on your homepage, LIVE room information card, etc

未知项：不同徽章专属规则；粉丝徽章与普通徽章交互。

建议复刻范围：徽章展示优先级。成本：低；准备：可先复刻；demo：未实现。

## 覆盖与剩余问题

这是选择性功能目录，不是全量产品规格。资源可能为旧文案、共享模块或未开启功能；A/B仍需真实账号与地区运行证据验证。C条目不能作为已确认的玩法规则。未核实概率、支付、服务器经济和真人体验；当前split可读但未全量反编译native实现。上述范围均需在选择复刻后锁定。
