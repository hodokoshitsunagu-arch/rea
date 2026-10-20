# Yalla-Parchis 特色机制重构

15 / 15 个目录ID具有独立规则与操作闭环。新入口为 demo/index.html，支持 ?feature=ID 和 ?module=ID；旧版本完整归档 demo/legacy/。

这是基于既有静态证据的本地机制实验，不是原应用运行或完整恢复。没有原API、账户、支付、RTC、真实奖励或服务器行为。每个模块的源规则、模拟补齐、未知项和证据定位分别记录于 analysis/reconstruction-coverage.json；浏览器验收由根任务串行执行。

## 模型与界面

model.mjs 导出 definitions、initialState(id)、reducer(state,{type}) 和 scenarios。业务状态不被输入动作原地修改；失败保留业务状态、返回中文错误并追加拒绝轨迹。app.mjs 只渲染状态并派发动作；特殊棋盘显示为实验轨道，Card Battle公开卡牌独立渲染。全部动作使用稳定 data-action，功能导航 data-testid=feature-select，状态 state，事件轨迹 event-log。

计时器通过明确的手动时序事件推进，页面显示模拟日/周/月与资格截止，不依赖真实等待。所有未核实公式和数值在每模块界面突出标为本地参数。没有把旧demo常量解释为原规则。C级入口/协议项与完整玩法有明确界限。

## 验证

运行 node --test demo/features.test.mjs：63 个测试通过，覆盖每ID正常闭环、专属机制拒绝、重置/未知动作，以及该ID独立的资格/时序/重复结算/互斥等边界。纯Reducer测试不证明原服务、真实设备、真人体验或原运行。旧截图、browser-check.json和旧测试结果仅属于legacy版本；新browser验证另由根任务保存。

## 逐项实现

### YPH01 · Classic/Spanish 双骰策略

源核心循环：双骰出巢→分配步数→三次双数受罚。

包体规则：门槛：单骰或和5出一子；双5出两子；时序：双数再投；三连双数处罚；资源：两个骰子额度；回报：步数与额外回合。

实现：两种模式骰史实验；专属操作：选择Spanish最后移动子处罚 → 输入骰子2+3（和5出巢） → 输入骰子5+2 → 输入双5 → 用5点出巢一子 → 将余下骰额给首子。

本地补齐：40格实验轨道；Classic退最前棋子/Spanish退最后移动子与单双5出巢来自源规则；无已移动子处罚未知。

未知：未移动棋子处罚；骰子服务器产生。

正常路径：roll5 → exit → move → rollDouble → exit → exit → rollDouble → move → move → rollDouble → reset；专属边界动作：exit。源码断言结果：{"penalty":true,"phase":"penalty"}。

证据：analysis/unity-localization-values.json [ids_ui_66]；analysis/unity-localization-values.json [ids_ui_match_tip6]；analysis/unity-localization-values.json [ids_ui_match_tip7]。

### YPH02 · 路障与强制拆障

源核心循环：同色两子同格→阻塞所有玩家→掷双数必须拆己障。

包体规则：门槛：两枚同色同格；时序：双数强制拆障；资源：棋子布局；回报：阻止穿越。

实现：布局策略实验；专属操作：路障导致无棋可走，本回合作废 → 对手尝试穿越格4 → 输入双数并触发拆障义务 → 尝试绕过强拆义务 → 首子移动2格拆路障。

本地补齐：仅直线试验格0–8；终点轨道例外与不可行动额度未知。

未知：终点轨道例外；无法行动额度消费。

正常路径：double → split → opponent → reset；专属边界动作：opponent。源码断言结果：{"barrier":false,"opponent":6}。

证据：analysis/unity-localization-values.json [ids_ui_70]。

### YPH03 · 吃子20步和终点10步奖励

源核心循环：吃子/入终点→额外奖励额度→选择棋子移动。

包体规则：门槛：吃子或到终点；时序：事件后奖励；资源：20/10步；回报：额外移动。

实现：奖励额度策略实验；专属操作：移动4格捕获对手 → 把20步奖励分配给第二子 → 首子精确进入本地40格终点 → 第二子消费10步终点奖励。

本地补齐：40格与捕获路径本地布局；奖励20/10为源规则，奖励串联未知。

未知：奖励串联；棋盘安全格坐标。

正常路径：capture → bonus → finish → finishBonus → reset；专属边界动作：bonus。源码断言结果：{"reward":0,"phase":"ended"}。

证据：analysis/unity-localization-values.json [ids_ui_76]；analysis/unity-localization-values.json [ids_ui_78]；analysis/unity-localization-values.json [ids_ui_72]。

### YPH04 · 队伍八子终局和代操作队友

源核心循环：邀请码/好友/快配组队→己方四子完成→帮队友走完。

包体规则：门槛：红黄对蓝绿；时序：先完成自己的四子才操作队友；资源：每队8子；回报：全队完成才赢；队友离局对方赢。

实现：协作残局与代操作；专属操作：自己一枚棋子到终点 → 代队友走完一枚 → 队友主动退出。

本地补齐：使用终点事件而非原棋盘寻路；退出只模拟主动退出，断线与挂机未知。

未知：代操作冲突；挂机/掉线和主动退出区别。

正常路径：own → own → own → own → assist → assist → assist → assist → reset；专属边界动作：assist。源码断言结果：{"phase":"ended","ownFinished":4,"teammateFinished":4}。

证据：analysis/unity-localization-values.json [ids_ui_82]；analysis/unity-localization-values.json [ids_ui_86]；analysis/unity-localization-values.json [ids_ui_88]；analysis/unity-localization-values.json [ids_ui_90]；analysis/unity-localization-values.json [ids_ui_92]。

### YPH05 · 联赛升降和传奇星

源核心循环：每周排位→前20%升级/后20%降级→传奇前40拿星。

包体规则：门槛：Lv4解锁文案；时序：每周；资源：联赛成绩/传奇星；回报：段位与星身份。

实现：周结算联赛沙盘；专属操作：达到玩家Lv4 → 每周结算前20%晋升 → 开启新一周 → 结算传奇前40名拿星 → 输入后20%并结算降级。

本地补齐：100人和普通/传奇两段本地参数；积分生产与同分不模拟，前20/后20/传奇前40为源边界。

未知：联赛分生产；分组容量；同分。

正常路径：level → promote → week → star → week → bottom → reset；专属边界动作：promote。源码断言结果：{"stars":1,"league":"普通"}。

证据：analysis/unity-localization-values.json [ids_ui_league_desc]；analysis/unity-localization-values.json [ids_ui_league unlocks at level 4]。

### YPH06 · 宝箱队列与通行证

源核心循环：赢局拿箱→排队解锁→当前箱完成自动开始下一箱。

包体规则：门槛：购买event pass可排队；时序：串行倒计时；资源：箱位/钻石；回报：皮肤碎片和钻石。

实现：宝箱排队系统；专属操作：注入胜局获得宝箱 → 授予模拟Event Pass → 开箱/通行证串行排队 → 推进本地60分钟。

本地补齐：每箱60分钟、本地无容量；奖励只标注样本种类，不冒充掉率。

未知：解锁时长/掉率；队列容量。

正常路径：win → win → pass → start → hour → hour → reset；专属边界动作：hour。源码断言结果：{"current":null}。

证据：analysis/unity-localization-values.json [ids_ui_36]；analysis/unity-localization-values.json [ids_ui_skinboxqueue_06]；analysis/unity-localization-values.json [ids_ui_chestdes_02]。

### YPH07 · 协助缩短开箱

源核心循环：请求协助→好友帮助→分钟减免→当天累加额度过期。

包体规则：门槛：协助事件；时序：减时即时应用；GMT-5午夜过期；资源：可堆叠减时；回报：更快开箱。

实现：互助开箱状态机；专属操作：好友阿宁协助减20分钟 → 好友米拉协助减20分钟 → 推进GMT-5午夜 → 推进剩余解锁时间。

本地补齐：每人一次20分钟和开箱100分钟为本地参数；GMT-5午夜额度清零为源边界。

未知：次数上限；协助者奖励；减时来源。

正常路径：helpA → helpB → midnight → finish → reset；专属边界动作：helpA。源码断言结果：{"opened":true,"reduction":0}。

证据：analysis/unity-localization-values.json [ids_ui_help_receive_suc]；analysis/unity-localization-values.json [ids_ui_skin_box_help_text1]。

### YPH08 · VIP Elite 房与观战身份

源核心循环：订VIP等级→创建/进入Elite→观战特殊弹幕。

包体规则：门槛：VIP2可与其他VIP2玩Elite；时序：订阅有效期；资源：VIP资格；回报：Elite模式、房主踢人、观战效果、月度皮肤。

实现：房间权限矩阵演示；专属操作：模拟VIP2有效订阅 → 创建Elite房邀请VIP2 → 以VIP观众身份观战发特效弹幕 → 房主踢出模拟访客 → 模拟订阅到期。

本地补齐：订阅仅模拟；房内到期保留房间、关闭新权益为本地选择。

未知：Android实际支付实现；等级成本。

正常路径：vip → elite → watch → kick → expire → reset；专属边界动作：elite。源码断言结果：{"vip":0,"barrage":false}。

证据：analysis/unity-localization-values.json [ids_ui_privilege_content_3]；analysis/unity-localization-values.json [ids_ui_vip_content_82]；analysis/unity-localization-values.json [ids_ui_vip_content_152]；analysis/unity-localization-values.json [ids_ui_privilege_content_5]。

### YPH09 · Member Club 任务社群

源核心循环：加入房间会员团→任务贡献→升团等级→周排行。

包体规则：门槛：加入Member Club；时序：周排行，GMT-5双窗口统计；资源：任务贡献；回报：动态表情/钻石；Top3房间展示与热度奖。

实现：房间社群任务与周荣誉；专属操作：加入房间Member Club → 完成会员任务（本地10贡献） → 推进GMT-5 01:00夜间统计窗口 → 推进GMT-5 12:00午间统计窗口 → 统计窗口更新贡献排名快照 → 离开会员团等待统计清榜 → 结算本地周榜Top3样本 → GMT-5新周清贡献窗口。

本地补齐：10贡献任务、20升级与Top3样本资格均本地参数；GMT-5 01–02/12–13窗口与离团统计清除来自源规则；同分先注册优先显示为规则，未建完整原榜。

未知：具体任务积分；退团清算时刻。

正常路径：join → task → task → window1 → sync → settle → week → reset；专属边界动作：task。源码断言结果：{"week":2,"contribution":0}。

证据：analysis/unity-localization-values.json [ids_ui_room_global_content]；analysis/unity-localization-values.json [ids_ui_member_rank_explain]；analysis/unity-localization-values.json [ids_ui_mc_description_1]；analysis/unity-localization-values.json [ids_ui_emoji_join_tips]。

### YPH10 · Baron 房内按月权益续费

源核心循环：钻石购买Baron→房内身份→自动续费或过期。

包体规则：门槛：钻石购买；时序：到期前12小时扣款；余额不足取消；超过20天未登录取消下期；资源：钻石；回报：房内Baron装扮权益。

实现：双资格体系与续期沙盘；专属操作：模拟花20钻开通30天Baron → 推进至到期前12小时 → 模拟当天登录 → 检查12小时续费窗口 → 推进至当前到期。

本地补齐：30天周期与20钻价格为本地参数；12小时/20天源边界，续期从旧到期累加为重构。

未知：价格配置；准确权益列表。

正常路径：buy → near → login → renew → expire → reset；专属边界动作：renew。源码断言结果：{"diamonds":60,"active":false}。

证据：analysis/unity-localization-values.json [ids_ui_auto_content]；analysis/unity-localization-values.json [ids_ui_knight_content4]；analysis/unity-localization-values.json [ids_ui_knight_get]。

### YPH11 · 关系亲密度衰减

源核心循环：与好友积累亲密→停滞若干天→衰减→降级少权益。

包体规则：门槛：连续{0}天不增长，值为下发占位；时序：停滞后衰减；资源：关系亲密点；回报：关系等级权益。

实现：可配置亲密度生命周期；专属操作：注入未知停滞天数，保留未知状态 → 恢复本地停滞3天参数 → 与好友互动（本地10点） → 推进1天并检查停滞。

本地补齐：停滞3天、每日扣10、每10点1级都是明确本地参数，源只提供占位天数与衰减方向。

未知：天数和衰减公式；关系类型。

正常路径：interact → day → day → day → reset；专属边界动作：day。源码断言结果：{"points":20,"level":2}。

证据：analysis/unity-localization-values.json [ids_ui_relation_rule5]；analysis/unity-localization-values.json [ids_ui_intimacy_upgrade_1]。

### YPH12 · 礼物专属 Sponsor 冠名

源核心循环：给某人送特定礼物→该礼物数量第一→成为冠名赞助。

包体规则：门槛：特定礼物最高数量；同分先达到优先；时序：GMT-5周一至周日，更新延迟5–30分钟，新周清空；资源：礼物数量；回报：Sponsor身份。

实现：礼物维度冠名榜；专属操作：阿澄送指定玫瑰1朵 → 米拉送指定玫瑰1朵 → 推进5分钟发布Sponsor → GMT-5周一开始新周。

本地补齐：选择5分钟延迟（源范围5–30）；本地只计指定玫瑰，同分按先达到；退款未知。

未知：退礼处理；不同礼包礼物计数。

正常路径：giftA → sync → giftB → sync → giftB → sync → week → reset；专属边界动作：sync。源码断言结果：{"sponsor":null,"week":2}。

证据：analysis/unity-localization-values.json [ids_ui_gifttitle_rules_tips]。

### YPH13 · Royal 充值等级和冻结权益

源核心循环：充值→Royal点/币→权益→冻结后无法拿加成。

包体规则：门槛：点数门槛下发；时序：冻结态影响权益；资源：Royal Points/Coins；回报：充值加成和物品兑换。

实现：权益冻结与兑换原型；专属操作：注入模拟充值10点/10币 → 注入Royal冻结状态 → 兑换本地10币装扮 → 注入Royal解冻状态。

本地补齐：10点一级、10币兑换和2币加成为本地参数；冻结/解冻由注入状态不补造维护规则。

未知：维护/冻结规则；等级成本；兑换限制。

正常路径：topup → freeze → topup → restore → exchange → reset；专属边界动作：exchange。源码断言结果：{"coins":12,"frozen":false}。

证据：analysis/unity-localization-values.json [ids_ui_royal_r0_desc_f]；analysis/unity-localization-values.json [ids_ui_royal_pay_benefit_but_frozen]；analysis/unity-localization-values.json [ids_ui_royal_coin_no_data2]。

### YPH14 · Fruit Merge 复活与排行

源核心循环：拖放水果→同类合成→排行→清顶部水果继续。

包体规则：门槛：进入小游戏；时序：退出保存；上传失败需手动更新；资源：水果布局/道具；回报：合成得分与排行奖励。

实现：单机合成玩法核心；专属操作：拖放合并前两颗同类水果 → 顶部落下Lv2水果 → 清顶部水果复活一次 → 退出保存布局 → 手动更新排行榜样本。

本地补齐：使用离散水果栈，非原物理引擎；合成分=新等级/复活一次均本地参数；退出保存与失败手动更新为源方向。

未知：碰撞/得分；道具成本；排行榜奖励。

正常路径：merge → drop → merge → revive → exit → update → reset；专属边界动作：update。源码断言结果：{"upload":"synced","revived":true}。

证据：analysis/unity-localization-values.json [ids_ui_synthsis_fruit_guide_1]；analysis/unity-localization-values.json [ids_ui_synthsis_fruit_guide_2]；analysis/unity-localization-values.json [ids_ui_synthsis_fruit_guide_3]；analysis/unity-localization-values.json [ids_ui_minigame_revive_syntheticfruits]；analysis/unity-localization-values.json [ids_ui_minigame_quit_confirm]。

### YPH15 · 邀请新用户到二级领奖

源核心循环：选奖励→邀请码引流→新用户注册打局到Lv2→减进度→限时达标领取。

包体规则：门槛：新用户注册且到2级；时序：活动倒计时内完成；部分奖励3工作日邮件发放；资源：邀请进度；回报：自选奖励。

实现：邀请任务状态流；专属操作：选择模拟奖励：主题皮肤 → 两位新用户注册邀请码 → 阿宁玩到Lv2核验 → 小云玩到Lv2核验 → 限时领取本地奖励 → 推进至活动第3天到期。

本地补齐：2位新用户和3天倒计时为本地配置；不做真实引流、反作弊、邮件或奖励。

未知：人数动态；反作弊；真实奖励。

正常路径：select → register → level2 → second → claim → reset；专属边界动作：claim。源码断言结果：{"claimed":true,"remaining":0}。

证据：analysis/unity-localization-values.json [ids_ui_pn_tips16]；analysis/unity-localization-values.json [ids_ui_system_boost2]；analysis/unity-localization-values.json [ids_ui_pn_get0]；analysis/unity-localization-values.json [ids_ui_pn_tips12]。

## 独立审查回归修复

YPH15：重复注册和领取后注册均拒绝；邀请身份counted由单次登记拥有，不得覆盖已核验记录。复现select→register→level2→register→level2→claim不会领取，remaining仍1，小云仍Lv1；second后方可领奖。

YPH07：两位好友协助统一由applyChestHelp拥有资格与去重；宝箱已开后helpA/helpB均拒绝且remaining/reduction/helped不改变。
