# HeeSay 特色机制重构

14 / 14 个目录ID具有独立规则与操作闭环。新入口为 demo/index.html，支持 ?feature=ID 和 ?module=ID；旧版本完整归档 demo/legacy/。

这是基于既有静态证据的本地机制实验，不是原应用运行或完整恢复。没有原API、账户、支付、RTC、真实奖励或服务器行为。每个模块的源规则、模拟补齐、未知项和证据定位分别记录于 analysis/reconstruction-coverage.json；浏览器验收由根任务串行执行。

## 模型与界面

model.mjs 导出 definitions、initialState(id)、reducer(state,{type}) 和 scenarios。业务状态不被输入动作原地修改；失败保留业务状态、返回中文错误并追加拒绝轨迹。app.mjs 只渲染状态并派发动作；特殊棋盘显示为实验轨道，Card Battle公开卡牌独立渲染。全部动作使用稳定 data-action，功能导航 data-testid=feature-select，状态 state，事件轨迹 event-log。

计时器通过明确的手动时序事件推进，页面显示模拟日/周/月与资格截止，不依赖真实等待。所有未核实公式和数值在每模块界面突出标为本地参数。没有把旧demo常量解释为原规则。C级入口/协议项与完整玩法有明确界限。

## 验证

运行 node --test demo/features.test.mjs：57 个测试通过，覆盖每ID正常闭环、专属机制拒绝、重置/未知动作，以及该ID独立的资格/时序/重复结算/互斥等边界。纯Reducer测试不证明原服务、真实设备、真人体验或原运行。旧截图、browser-check.json和旧测试结果仅属于legacy版本；新browser验证另由根任务保存。

## 逐项实现

### HEE01 · 守护资格、Top1 Couple 与积分到期

源核心循环：单日2500Beans成为守护→滚动七日积分争Top1→投射Couple。

包体规则：门槛：GMT+0单日2500Beans；时序：点7天有效，第8日0点扣除；榜延迟1–2分钟；资源：1Bean=1守护点；回报：Top1 Couple身份。

实现：守护双账本和滚动到期；专属操作：阿澄赠2500Beans成为守护 → 米拉赠3000Beans争Top1 → 推进2分钟榜单延迟 → 推进至第8日GMT+0零点。

本地补齐：固定2500/3000Beans样本；2分钟延迟是源范围内测试值；积分逐笔7天到期，资格失效公式未知不推断。

未知：同分；资格失效需要补量文案但精确公式未知。

正常路径：giftA → sync → giftB → sync → expiry → reset；专属边界动作：sync。源码断言结果：{"day":8,"couple":null}。

证据：analysis/feature-expansion-resources.json [index=10180,offset=588508]；analysis/feature-expansion-resources.json [index=10161,offset=584393]；analysis/feature-expansion-resources.json [index=15391,offset=807285]；analysis/feature-expansion-resources.json [index=15855,offset=822659]。

### HEE02 · Chat Spark 到 Soulmate 徽章

源核心循环：点燃聊天火花→一天互送超过10Beans→Soulmate徽章。

包体规则：门槛：已点燃Chat Spark；一天互赠>10Beans；时序：单日；资源：聊天火花/双方赠礼；回报：Soulmate徽章。

实现：关系进阶模型；专属操作：注入Chat Spark已点燃事件 → 阿澄向米拉送11Beans → 米拉向阿澄送11Beans → 核验同一天互赠门槛 → GMT+0进入新一天。

本地补齐：点燃事件手动注入；选择双方各>10分支，合计/各自歧义保留；徽章跨日保留为本地选择。

未知：Chat Spark点燃与熄灭；双方各10还是合计。

正常路径：spark → giftA → giftB → unlock → day → reset；专属边界动作：unlock。源码断言结果：{"soulmate":true,"day":2}。

证据：analysis/feature-expansion-resources.json [index=10562,offset=622700]。

### HEE03 · Fan Club 取最高等级奖励

源核心循环：加入多主播粉丝团→提高徽章等级→领取最高团奖励。

包体规则：门槛：加入Fan Club；时序：每日赠礼奖励；资源：粉丝点/等级；回报：最高等级团奖励；进所属主播房才显徽章。

实现：多粉丝团奖励去重模型；专属操作：加入主播A粉丝团Lv1 → 加入主播B粉丝团Lv1 → 给B贡献本地20粉丝点升Lv3 → 领取当天最高团等级奖励 → 进入所属主播B房展示徽章 → 进入无所属团主播C房。

本地补齐：粉丝点20和每10一级本地配置；奖励只标等级，退出不可恢复未造账户数据。

未知：粉丝点生产；退出不可恢复；奖励内容。

正常路径：joinA → joinB → giftB → reward → roomB → outside → reset；专属边界动作：reward。源码断言结果：{"badge":null,"room":"主播C"}。

证据：analysis/feature-expansion-resources.json [index=15098,offset=788536]；analysis/feature-expansion-resources.json [index=16008,offset=830356]；analysis/feature-expansion-resources.json [index=10565,offset=623289]。

### HEE04 · Family Starship 月度保级

源核心循环：成员做任务加Force→选择升级→下一月保级→失败降级减总力。

包体规则：门槛：Lv1月保15000容量10；Lv2升级150000/月保60000容量15；时序：下月提高保级门槛，GMT+0每月清月值；资源：Monthly与Overall Force；回报：等级、容量、权益。

实现：组织成长与风险沙盘；专属操作：任务注入150000 Force样本 → 选择用150000 Overall升级Lv2 → GMT+0月末结算与清月值。

本地补齐：15000/150000/60000/容量10与15源规则；升级扣Overall、失败扣门槛为本地公式，未知原降级扣总力。

未知：当前Family与Starship是否双体系；任务分；降级恢复公式。

正常路径：task → upgrade → month → month → reset；专属边界动作：upgrade。源码断言结果：{"level":1,"capacity":10,"month":3}。

证据：analysis/feature-expansion-resources.json [index=13176,offset=719600]；analysis/feature-expansion-resources.json [index=15641,offset=814087]；analysis/feature-expansion-resources.json [index=15030,offset=783370]；analysis/feature-expansion-resources.json [index=15038,offset=783959]；analysis/feature-expansion-resources.json [index=14086,offset=752379]。

### HEE05 · 家族双域管理员与创建存续条件

源核心循环：创建/加入→族务与群管理角色→招募达标维持存续。

包体规则：门槛：资源有财富Lv9创建与主播等级优惠两套门槛；30天>10人文案；时序：创建许可证/招募期；资源：家族资格/管理员身份；回报：管理招募、奖励、群公告。

实现：先分家族产品路径再复刻；专属操作：模拟财富Lv9 → 走财富Lv9新Family路径创建 → 族务管理员编辑家族公告 → 群管理员编辑群聊公告 → 独立授予群管理员 → 招募10成员使总人数11 → 到本地30天招募截止 → 查看旧Starship创建资格样本。

本地补齐：明示新Family财富Lv9+本地选择30天>10路径；10/30天和旧Starship冲突不合并，角色授权为本地补齐。

未知：10天/30天人数文案冲突；旧Starship与新Family适用；当前服务器门槛。

正常路径：eligible → create → familyBulletin → chatAdmin → chatAnnouncement → recruit → deadline → starship → reset；专属边界动作：create。源码断言结果：{"created":true,"members":11,"chatAdmin":true}。

证据：analysis/feature-expansion-resources.json [index=14765,offset=773399]；analysis/feature-expansion-resources.json [index=10207,offset=597691]；analysis/feature-expansion-resources.json [index=16096,offset=836883]；analysis/feature-expansion-resources.json [index=14953,offset=779027]；analysis/feature-expansion-resources.json [index=93492,offset=5417898]。

### HEE06 · RICH 保级失败冻结不降级

源核心循环：积EXP→周期重算→达标扣维护EXP并重启→失败冻结→补EXP解冻。

包体规则：门槛：维护EXP；时序：有效期末；资源：RICH EXP；回报：保级权益；失败等级保留但冻结。

实现：冻结保级状态机；专属操作：积累本地50EXP → 有效期结束维护重算。

本地补齐：维护100、失败部分扣25、每事件50和解冻扣100全是本地参数；冻结不降级源规则。

未知：部分扣除比例；阈值和周期；VIP是否独立。

正常路径：earn → end → earn → earn → reset；专属边界动作：end。源码断言结果：{"level":3,"frozen":false,"exp":25,"cycle":2}。

证据：analysis/feature-expansion-resources.json [index=12511,offset=697254]；analysis/feature-expansion-resources.json [index=15546,offset=811355]；analysis/feature-expansion-resources.json [index=11281,offset=653015]。

### HEE07 · 匿名观播对主播可见

源核心循环：启用Anonymous Viewing→观众看神秘头像昵称→主播仍见真身份。

包体规则：门槛：匿名观看资格；时序：观播时；资源：匿名开关；回报：观众不能打开真实主页，主播能识别。

实现：观众/主播可见性矩阵；专属操作：授予Anonymous Viewing模拟资格 → 开启/关闭匿名观看 → 切换主播视角识别真实身份 → 切换普通观众视角 → 当前视角打开主页。

本地补齐：资格直接注入，不把财富Lv8神秘模式合并；房管可见性保留未知。

未知：财富Lv8神秘模式是否同一路径；房管可见性。

正常路径：eligible → toggle → host → profile → audience → reset；专属边界动作：toggle。源码断言结果：{"profileAccess":false,"anonymous":true}。

证据：analysis/feature-expansion-resources.json [index=10559,offset=622241]；analysis/feature-expansion-resources.json [index=13202,offset=720587]；analysis/feature-expansion-resources.json [index=13449,offset=727527]。

### HEE08 · 幸运礼物按实际收币算榜

源核心循环：送幸运礼物→发送者抽Beans→接收者得部分Coins→按实际Coins统计榜。

包体规则：门槛：Lucky Gift；时序：奖励立即到账；资源：礼物Beans、接收Coins；回报：宣称最高500倍Beans；财富/魅力按实际Coins。

实现：双币账本可先复刻，抽取算法待补；专属操作：送1000Beans幸运礼物（100Coins样本） → 注入已知抽取样本：0倍奖励 → 重置本地赠礼资产至1000Beans。

本地补齐：1000Beans→100Coins→0.1财富点采用源示例；0倍结果手动注入非概率；魅力仅记录Coin源值，比例未知。

未知：概率/每礼物兑换率；不同币种单位。

正常路径：gift → result → reset；专属边界动作：result。源码断言结果：{"recipientCoins":100,"wealthPoints":0.1,"drawPending":false}。

证据：analysis/feature-expansion-resources.json [index=10190,offset=591536]。

### HEE09 · 宝箱任务排除特定礼物

源核心循环：开二级宝箱→收指定积分→进入房间奖励竞争。

包体规则：门槛：二级宝箱开启；时序：本场直播；资源：1Bean=1点；地图1张1点且上限下发；排除Lucky/Bag/Flying Comments；回报：任务完成与宝箱奖励。

实现：按来源统计的共同目标；专属操作：开始Lv2宝箱任务 → 普通礼物消耗10Beans → 幸运/袋/飞评礼物消耗不计点 → 赠送1地图记1点至本地上限2 → 完成共同目标领取资格。

本地补齐：目标12/地图上限2为下发字段本地值；严格按来源统计，奖励竞争未补造。

未知：奖励池/竞争胜者；地图消耗与赠送语义。

正常路径：open → excluded → ordinary → map → map → map → claim → reset；专属边界动作：claim。源码断言结果：{"points":12,"mapPoints":2,"claimed":true}。

证据：analysis/feature-expansion-resources.json [index=10573,offset=624019]；analysis/feature-expansion-resources.json [index=13914,offset=747462]。

### HEE10 · Card Battle 分阶段揭牌

源核心循环：三常规卡+秘密卡→中途揭第二张→结束揭第三张→比队分。

包体规则：门槛：人数/参与次数门槛占位；时序：倒计时揭牌；资源：3常规卡+1秘密卡；回报：高分队赢。

实现：仅揭牌节奏与信息公开矩阵；专属操作：A队参加一次 → B队参加一次 → 超过10次且双队有人才开局 → 推进揭第二张卡的倒计时 → 结束揭第三张并比较样本队分。

本地补齐：卡值2/3/4与1/2/3、本地中点事件均演示参数；只做揭牌与比较，秘密卡购买/合成/赔率不造。

未知：卡分/概率；秘密卡购买合成；结算赔率。

正常路径：joinA → joinB → joinA → joinA → joinA → joinA → joinA → joinA → joinA → joinA → joinA → start → mid → end → reset；专属边界动作：start。源码断言结果：{"phase":"ended","visibleCards":3,"secretVisible":false}。

证据：analysis/feature-expansion-resources.json [index=10336,offset=609604]；analysis/feature-expansion-resources.json [index=10333,offset=609249]；analysis/feature-expansion-resources.json [index=10401,offset=614493]；analysis/feature-expansion-resources.json [index=10437,offset=617571]。

### HEE11 · Hot Pick 与跨房PK互斥

源核心循环：服务器配置开放/显示/按钮→进入Hot Pick→禁止跨房PK。

包体规则：门槛：配置开关；时序：end_seconds/time_config；资源：score_config；回报：评分活动，胜者奖励未知。

实现：仅活动互斥与可见性模型；专属操作：打开开放/显示/按钮三独立配置 → 只隐藏Hot Pick按钮 → 进入跨房PK → 进入Hot Pick入口实验 → 推进配置end_seconds至活动结束。

本地补齐：C级仅协议字段、可见性与互斥实验；60秒本地配置，不补造Hot Pick分数或胜负。

未知：分数来源和rank_type；完整胜负规则。

正常路径：configure → hotpick → end → pk → end → reset；专属边界动作：hotpick。源码断言结果：{"phase":"idle","end_seconds":0}。

证据：analysis/rea-hotpick-config.json [VoiceHotPickConfig]；analysis/feature-expansion-resources.json [index=11042,offset=644036]；analysis/feature-expansion-resources.json [index=15302,offset=803694]；analysis/feature-expansion-resources.json [index=16394,offset=857007]。

### HEE12 · Doodle 月榜排除上月Top10

源核心循环：发布涂鸦→人气竞榜→月初结榜→Top10下月排除。

包体规则：门槛：非排除涂鸦可参与，不限制创作时间；时序：GMT+0下月1日结算，1–3日展示；资源：每作品月人气；回报：月榜；上月前10下月排除。

实现：作品榜轮换机制；专属操作：为旧作注入人气事件10点 → 为新作注入人气事件20点 → GMT+0下月1日00:00结榜 → 推进到每月4日关闭展示。

本地补齐：两作品沙盘，同分按本地ID先后；人气10/20样本；排除仅下一月为本地解释，未推断奖项。

未知：人气生产和奖项；排除期是否仅一月。

正常路径：likeOld → likeNew → month → fourth → reset；专属边界动作：likeOld。源码断言结果：{"month":2,"displayWindow":false}。

证据：analysis/feature-expansion-resources.json [index=10905,offset=640143]；analysis/feature-expansion-resources.json [index=15068,offset=786149]。

### HEE13 · 游戏票的失败补偿 Lucky Points

源核心循环：消费游戏票→赢得1点/输3点/平0→累计Lucky Points。

包体规则：门槛：每张游戏票使用；时序：结果后；资源：Lucky Points；回报：赢1输3平0，兑换用途未核实。

实现：结果补偿积分层；专属操作：使用一张模拟游戏票 → 注入赢局：Lucky Points+1 → 注入输局：Lucky Points+3 → 注入平局：Lucky Points+0。

本地补齐：结果手动输入，不补造具体游戏；1/3/0为源值，兑换/退款未知。

未知：适用游戏；点数用途；退款结果。

正常路径：use → win → use → loss → use → draw → reset；专属边界动作：win。源码断言结果：{"tickets":0,"luckyPoints":4}。

证据：analysis/feature-expansion-resources.json [index=12993,offset=713075]。

### HEE14 · 徽章槽位按展示域分权

源核心循环：装备最多六徽章→第一枚房间+主页展示→其余仅主页。

包体规则：门槛：持有徽章；时序：佩戴时；资源：六徽章槽；回报：第一枚跨场景展示，其余主页展示。

实现：徽章展示优先级；专属操作：装备下一枚持有徽章 → 将最后一枚提到第一槽 → 卸下第一槽并重排。

本地补齐：七枚样本徽章；重排与卸载后顺移为本地补齐；六槽展示域为源规则。

未知：不同徽章专属规则；粉丝徽章与普通徽章交互。

正常路径：equip → equip → equip → equip → equip → equip → reorder → remove → reset；专属边界动作：reorder。源码断言结果：{"roomBadge":"星星"}。

证据：analysis/feature-expansion-resources.json [index=10218,offset=600271]；analysis/feature-expansion-resources.json [index=10566,offset=623442]。

## 独立审查回归修复

HEE01：积分到期重算时使旧待同步榜身份失效（pending=null）；giftA→expiry→sync拒绝旧同步，不会复活过期Couple，新积分事件才可生成新待同步身份。
