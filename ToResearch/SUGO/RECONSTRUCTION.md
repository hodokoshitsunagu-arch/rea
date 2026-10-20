# SUGO 特色机制重构

12 / 12 个目录ID具有独立规则与操作闭环。新入口为 demo/index.html，支持 ?feature=ID 和 ?module=ID；旧版本完整归档 demo/legacy/。

这是基于既有静态证据的本地机制实验，不是原应用运行或完整恢复。没有原API、账户、支付、RTC、真实奖励或服务器行为。每个模块的源规则、模拟补齐、未知项和证据定位分别记录于 analysis/reconstruction-coverage.json；浏览器验收由根任务串行执行。

## 模型与界面

model.mjs 导出 definitions、initialState(id)、reducer(state,{type}) 和 scenarios。业务状态不被输入动作原地修改；失败保留业务状态、返回中文错误并追加拒绝轨迹。app.mjs 只渲染状态并派发动作；特殊棋盘显示为实验轨道，Card Battle公开卡牌独立渲染。全部动作使用稳定 data-action，功能导航 data-testid=feature-select，状态 state，事件轨迹 event-log。

计时器通过明确的手动时序事件推进，页面显示模拟日/周/月与资格截止，不依赖真实等待。所有未核实公式和数值在每模块界面突出标为本地参数。没有把旧demo常量解释为原规则。C级入口/协议项与完整玩法有明确界限。

## 验证

运行 node --test demo/features.test.mjs：48 个测试通过，覆盖每ID正常闭环、专属机制拒绝、重置/未知动作，以及该ID独立的资格/时序/重复结算/互斥等边界。纯Reducer测试不证明原服务、真实设备、真人体验或原运行。旧截图、browser-check.json和旧测试结果仅属于legacy版本；新browser验证另由根任务保存。

## 逐项实现

### SUG01 · PK KING/QUEEN 自动轮转

源核心循环：随机配对→5分钟PK→5分钟冷却→继续配对直到主动停止。

包体规则：门槛：主持方开启；时序：5分钟对局+5分钟冷却；资源：PK礼物积分；回报：单轮竞争展示。

实现：自动轮转状态机；专属操作：主持人开始自动PK → 支持本队：模拟礼物10分 → 推进5分钟 → 主动停止轮转。

本地补齐：匹配对象以本地两主播轮换；1礼物=10分仅试验参数；5+5分钟为资源规则。

未知：匹配池和退出处罚；服务器计分。

正常路径：start → gift → advance → advance → stop → reset；专属边界动作：gift。源码断言结果：{"round":2,"phase":"idle"}。

证据：analysis/feature-expansion-resources.json [index=12521,offset=659717]；analysis/feature-expansion-resources.json [index=11331,offset=627451]。

### SUG02 · 麦位分与阵营累计分分离

源核心循环：上麦收礼→换人→麦位重新计算→阵营累计保留。

包体规则：门槛：PK场景；时序：本轮；资源：个人礼物与阵营累计；回报：双层分数。

实现：双账本计分实验；专属操作：向当前麦位送10分 → 阿澄下麦，米拉上麦 → 结算本轮双账本。

本地补齐：采用更换清零文案分支；重新计算文案冲突保留；礼物10分为本地参数。

未知：重新计算和归零文案差异；跨队转移归属。

正常路径：gift → replace → gift → settle → reset；专属边界动作：settle。源码断言结果：{"team":20,"seat":10,"phase":"ended"}。

证据：analysis/feature-expansion-resources.json [index=10380,offset=599994]；analysis/feature-expansion-resources.json [index=14179,offset=715414]。

### SUG03 · 亲密度解锁关系能力

源核心循环：聊天或送礼→亲密等级→解锁双方能力。

包体规则：门槛：Lv1通话/Lv2语音消息/Lv4私人相册/Lv5更多动态文案；时序：累计增长；资源：亲密度；回报：能力逐阶开放。

实现：以虚拟互动积累解锁非基础关系内容；专属操作：双方模拟聊天（本地10点） → 对方同意展示私人相册 → 请求查看相册样本。

本地补齐：每级10点本地参数；同意是重构补齐；Lv1/2/4/5为直接门槛。

未知：相互同意和付费边界；每级精确积分；地区差异。

正常路径：chat → chat → chat → chat → consent → album → reset；专属边界动作：album。源码断言结果：{"level":4,"privateAlbum":true}。

证据：analysis/feature-expansion-resources.json [index=11398,offset=629829]；analysis/feature-expansion-resources.json [index=11399,offset=629935]；analysis/feature-expansion-resources.json [index=11401,offset=630105]；analysis/feature-expansion-resources.json [index=12962,offset=673980]；analysis/feature-expansion-resources.json [index=9345,offset=566608]。

### SUG04 · Couple 唯一关系与扩槽冲突

源核心循环：邀请→形成关系→公开关系墙→解除或换伴侣。

包体规则：门槛：文案称每人一个Couple，另有付费扩槽文案；时序：解除时更新关系；资源：关系身份；回报：共享权益。

实现：先研究关系模型与同意流程；专属操作：邀请米拉成为Couple → 米拉接受邀请 → 尝试邀请另一位伴侣 → 双方确认解除关系。

本地补齐：明确选择先解除分支；自动替换和扩槽冲突仅展示，不宣称当前线上规则。

未知：唯一关系与扩槽文案适用对象冲突；当前开关。

正常路径：invite → accept → terminate → replace → reset；专属边界动作：accept。源码断言结果：{"partner":null,"pending":"阿宁"}。

证据：analysis/feature-expansion-resources.json [index=10381,offset=600161]；analysis/feature-expansion-resources.json [index=10382,offset=600282]；analysis/feature-expansion-resources.json [index=15283,offset=759299]；analysis/feature-expansion-resources.json [index=14577,offset=731357]。

### SUG05 · 情侣麦位双人特效

源核心循环：Couple双方坐情侣席→触发特效。

包体规则：门槛：双方占据Couple席；时序：席位占用触发；资源：关系/主题；回报：成对特效和入场装扮。

实现：情侣席位条件展示；专属操作：双方同意建立Couple → 阿澄坐情侣左席 → 米拉坐情侣右席 → 米拉离开右席。

本地补齐：特效离席即停止、本地权限与一次状态切换为重构选择。

未知：特效触发次数；席位权限；断线处理。

正常路径：relationship → seatA → seatB → leave → reset；专属边界动作：seatB。源码断言结果：{"effect":false}。

证据：analysis/feature-expansion-resources.json [index=13677,offset=692405]；analysis/feature-expansion-resources.json [index=13936,offset=699295]；analysis/feature-expansion-resources.json [index=10559,offset=604801]。

### SUG06 · 家族活跃维护与强制解散

源核心循环：创建或加入→完成每日任务→累积月活跃→维持家族。

包体规则：门槛：创建等级动态；每人仅加入一家；时序：自然月；资源：任务活跃值；回报：家族存续；低于25自动解散且不可恢复文案。

实现：任务活跃、月末预警及解散沙盘；专属操作：创建家族（本地门槛Lv5） → 完成今日任务（本地5活跃） → 推进一天 → 结算自然月。

本地补齐：创建Lv>5和每任务5点本地参数；自然月按手动月份步进，源时区未知。

未知：任务计分；时区；25常量适用区域。

正常路径：create → task → day → task → month → reset；专属边界动作：task。源码断言结果：{"disbanded":true,"activity":10}。

证据：analysis/feature-expansion-resources.json [index=10814,offset=611838]；analysis/feature-expansion-resources.json [index=12426,offset=656515]；analysis/feature-expansion-resources.json [index=14711,offset=735143]；analysis/feature-expansion-resources.json [index=14364,offset=724327]。

### SUG07 · 家族贡献账本和管理权

源核心循环：成员贡献→贡献排行→领导/副手管理→转让或离开。

包体规则：门槛：领导可任命副手/转让；时序：离开时贡献点清除；资源：成员贡献；回报：社群职位与贡献展示。

实现：角色授权与离族清账模拟；专属操作：米拉贡献本地10点 → 切换为族长阿澄 → 任命米拉为副手 → 族长转让给米拉 → 米拉确认离族并清贡献。

本地补齐：贡献每次10点、本地离族后领导空缺；未知管理规则不自动推断。

未知：管理权限全集；任务贡献算法。

正常路径：contribute → leader → appoint → transfer → leave → reset；专属边界动作：appoint。源码断言结果：{"leader":null}。

证据：analysis/feature-expansion-resources.json [index=10300,offset=596880]；analysis/feature-expansion-resources.json [index=8279,offset=531030]；analysis/feature-expansion-resources.json [index=8290,offset=531598]；analysis/feature-expansion-resources.json [index=9106,offset=558054]。

### SUG08 · Chat Star 限时认证权益

源核心循环：完成个人认证与聊天积分→80分→七天权益→再次达标刷新周期。

包体规则：门槛：全部个人验证+聊天分80；时序：7天；有效期内再达标同步更新；资源：聊天积分；回报：Chat Star权益。

实现：限时身份状态机；专属操作：完成全部模拟个人验证 → 聊天事件（本地40分） → 达到80分激活/刷新Chat Star → 推进一天 → 推进七天至权益到期。

本地补齐：聊天40分、达标扣分和刷新为从当前日起重置7天，是本地分支，不断言延长公式。

未知：聊天分生产规则；刷新是延长还是重置；权益全集。

正常路径：verify → chat → chat → claim → day → chat → chat → claim → week → reset；专属边界动作：claim。源码断言结果：{"active":false,"expires":8}。

证据：analysis/feature-expansion-resources.json [index=8785,offset=547566]。

### SUG09 · 贵族隐身入房和榜单匿名

源核心循环：开贵族→启用隐身→入房/榜单隐藏身份。

包体规则：门槛：贵族权益；时序：启用期间；资源：贵族资格；回报：头像昵称入房信息不可见、锁房入口。

实现：可见性矩阵与匿名房间演示；专属操作：授予模拟贵族资格 → 切换入房/榜单隐身 → 启用锁房 → 模拟资格失效。

本地补齐：只实现普通观众可见性；房主与管理员返回未知；到期回收是本地补齐。

未知：房主/管理员是否仍可见；不同贵族等级。

正常路径：noble → toggle → lock → expire → reset；专属边界动作：toggle。源码断言结果：{"noble":false,"invisible":false}。

证据：analysis/feature-expansion-resources.json [index=9295,offset=565187]；analysis/feature-expansion-resources.json [index=12268,offset=651890]；analysis/feature-expansion-resources.json [index=12479,offset=658708]。

### SUG10 · 榜单冠军的可维持身份

源核心循环：送礼竞争主播月榜→Top1获专属进场/道具→继续送礼维持。

包体规则：门槛：主播月榜Top1；时序：月榜周期；资源：礼物贡献；回报：专属入场效果/道具。

实现：限时榜首权益模型；专属操作：阿澄贡献10礼物分 → 米拉贡献20礼物分 → 当前榜首使用入场特效 → 进入新月清榜。

本地补齐：贡献10/20本地测试值；失榜立即回收为实验选择，同分保持未知。

未知：失去Top1后的失效时间；同分规则。

正常路径：giftA → enter → giftB → enter → month → reset；专属边界动作：enter。源码断言结果：{"champion":null,"month":2}。

证据：analysis/feature-expansion-resources.json [index=9393,offset=567633]；analysis/feature-expansion-resources.json [index=9394,offset=567819]。

### SUG11 · Super Winner 报名人数闸门

源核心循环：房主发起→付入口费报名→倒计时→人数超过2自动开局。

包体规则：门槛：房主启动且倒计时后>2人；时序：报名倒计时；资源：入口费；回报：获胜金币文案。

实现：仅报名/锁局状态机；专属操作：房主开启报名倒计时 → 阿澄付本地10币报名 → 米拉模拟报名 → 阿宁模拟报名 → 报名倒计时结束。

本地补齐：本地入口费10；仅报名与人数闸门，未知游戏动作/退款/胜者不补造。

未知：游戏动作和随机算法；退款；完整结算。

正常路径：start → joinA → joinB → joinC → deadline → reset；专属边界动作：joinA。源码断言结果：{"phase":"locked","wallet":90}。

证据：analysis/feature-expansion-resources.json [index=8571,offset=540364]；analysis/feature-expansion-resources.json [index=9958,offset=585843]。

### SUG12 · 幸运礼物的超级时刻

源核心循环：送幸运礼物→超级时刻解锁→奖励播报。

包体规则：门槛：幸运礼物；触发条件未知；时序：超级时刻；资源：幸运礼物；回报：资源宣称有人得1000倍奖励。

实现：仅事件节奏展示，数值不仿真；专属操作：送模拟幸运礼物 → 注入已知“超级时刻解锁”事件 → 注入1000倍奖励播报样本。

本地补齐：手动注入源事件；不仿真概率、触发公式、奖励货币或榜单排除范围。

未知：概率/触发/资金流；榜单排除范围。

正常路径：gift → unlock → announce → reset；专属边界动作：announce。源码断言结果：{"phase":"announced","received":true}。

证据：analysis/feature-expansion-resources.json [index=14165,offset=713948]；analysis/feature-expansion-resources.json [index=13497,offset=688034]；analysis/feature-expansion-resources.json [index=8529,offset=539758]。
