# Falla 特色机制重构

13 / 13 个目录ID具有独立规则与操作闭环。新入口为 demo/index.html，支持 ?feature=ID 和 ?module=ID；旧版本完整归档 demo/legacy/。

这是基于既有静态证据的本地机制实验，不是原应用运行或完整恢复。没有原API、账户、支付、RTC、真实奖励或服务器行为。每个模块的源规则、模拟补齐、未知项和证据定位分别记录于 analysis/reconstruction-coverage.json；浏览器验收由根任务串行执行。

## 模型与界面

model.mjs 导出 definitions、initialState(id)、reducer(state,{type}) 和 scenarios。业务状态不被输入动作原地修改；失败保留业务状态、返回中文错误并追加拒绝轨迹。app.mjs 只渲染状态并派发动作；特殊棋盘显示为实验轨道，Card Battle公开卡牌独立渲染。全部动作使用稳定 data-action，功能导航 data-testid=feature-select，状态 state，事件轨迹 event-log。

计时器通过明确的手动时序事件推进，页面显示模拟日/周/月与资格截止，不依赖真实等待。所有未核实公式和数值在每模块界面突出标为本地参数。没有把旧demo常量解释为原规则。C级入口/协议项与完整玩法有明确界限。

## 验证

运行 node --test demo/features.test.mjs：52 个测试通过，覆盖每ID正常闭环、专属机制拒绝、重置/未知动作，以及该ID独立的资格/时序/重复结算/互斥等边界。纯Reducer测试不证明原服务、真实设备、真人体验或原运行。旧截图、browser-check.json和旧测试结果仅属于legacy版本；新browser验证另由根任务保存。

## 逐项实现

### FAL01 · Quick Ludo 先吃后冲线

源核心循环：至少吃一子→获得进终点资格→一子到终点获胜。

包体规则：门槛：快速模式吃1子才能进终点；时序：单局；资源：捕获标记；回报：一子完成即胜；经典全子。

实现：吃子资格与终局状态机；专属操作：移动4格吃对手 → 精确走到本地12格终点。

本地补齐：12格机制试验轨道，不是原棋盘；只完成Quick门槛，经典全子用文字边界说明。

未知：棋盘坐标/安全格；服务器骰子。

正常路径：capture → goal → reset；专属边界动作：goal。源码断言结果：{"finished":true,"captures":1}。

证据：analysis/feature-expansion-resources.json [index=7024,offset=501282]。

### FAL02 · Ludo 额外回合与三连六停局

源核心循环：掷6/吃子/到终点→再投→连续三6结束回合。

包体规则：门槛：6、吃子、精确终点；时序：三次连续6结束本回合；资源：骰子历史；回报：再投机会。

实现：连动规则实验；专属操作：输入骰子6 → 注入捕获事件获得再投 → 注入精确终点事件获得再投 → 输入非6点数结束序列。

本地补齐：捕获/终点是测试事件；不重置6历史为本地分支，源连续定义和重置规则未知。

未知：连续定义；捕获后六历史是否重置。

正常路径：capture → finish → six → six → six → reset；专属边界动作：six。源码断言结果：{"phase":"ended","sixStreak":3,"extra":false}。

证据：analysis/feature-expansion-resources.json [index=7024,offset=501282]。

### FAL03 · Ludo 金骰磁铁炸弹

源核心循环：获得道具→修改骰子或行进→破坏对手布局。

包体规则：门槛：获取对应道具；时序：使用窗口未知；资源：金骰必6；磁铁前进8直到阻挡；炸弹8步送对手回基地；回报：位置优势。

实现：道具机制候选，先补使用窗口；专属操作：使用金骰得到6 → 磁铁前进最多8格直到阻挡 → 使用炸弹检查前8格对手。

本地补齐：12格直线试验地图，道具各1、阻挡前停、炸弹扫描路径本地补齐；原安全格未知。

未知：获取成本/概率；安全格例外；炸弹路径。

正常路径：gold → magnet → bomb → reset；专属边界动作：gold。源码断言结果：{"dice":6,"position":5,"opponent":-1}。

证据：analysis/feature-expansion-resources.json [index=7024,offset=501282]。

### FAL04 · 房间与外部游戏匹配绑定

源核心循环：选游戏→请求匹配→得到gid→带游戏信息进房。

包体规则：门槛：gameId与gamePlatform；时序：gid>0才进入成功分支；资源：room_match_extra/MatchModel；回报：共享游戏房。

实现：游戏匹配与房间关联流程；专属操作：选择外部Ludo平台样本 → 构造room_match_extra请求样本 → 注入MatchModel gid=42 → 注入MatchModel gid=0 → 携游戏信息进入样本房。

本地补齐：纯协议载荷实验，不连接平台；gid42本地注入，不补造房内游戏。

未知：服务器路由；进房后的游戏状态。

正常路径：select → request → success → enter → reset；专属边界动作：enter。源码断言结果：{"phase":"room","gid":42}。

证据：analysis/rea-ludo-method.json [LudoMatchHelper.a]。

### FAL05 · 幸运袋票与Queen权限

源核心循环：使用幸运袋票→房间分礼→Queen身份禁止送袋。

包体规则：门槛：幸运袋票；Queen不能送袋；时序：房间活动；资源：袋票/礼物；回报：参与分发。

实现：权限闸门+袋活动骨架；专属操作：切换Queen身份 → 切换普通成员 → 消耗一张幸运袋票发送 → 阿澄领取本地分发名额 → 关闭本地袋活动。

本地补齐：仅1票和样本名额，本地手动关袋；不模拟原分配概率与Queen资格。

未知：Queen获取失效；分配概率；票成本。

正常路径：send → claim → close → reset；专属边界动作：claim。源码断言结果：{"tickets":0,"phase":"closed"}。

证据：analysis/feature-expansion-resources.json [index=7926,offset=527792]；analysis/feature-expansion-resources.json [index=9059,offset=562932]；analysis/feature-expansion-resources.json [index=9062,offset=563042]；analysis/feature-expansion-resources.json [index=9258,offset=567234]。

### FAL06 · 许愿池碎片兑换和榜单

源核心循环：抽许愿池→必得奖励入背包→礼物/贵族碎片兑换→日周排行。

包体规则：门槛：参加抽奖；时序：沙特时间日0点、周一0点结算；资源：礼物碎片/贵族碎片；回报：限定礼物、兑换物、榜单奖励。

实现：虚拟碎片合成与结算节奏；专属操作：本地许愿：保证奖励样本 → 用2礼物碎片兑样本礼物 → 用1贵族碎片兑换样本权益 → 沙特时间日0点结榜 → 沙特周一0点结周榜。

本地补齐：1币抽取、固定碎片产出和兑换率都是本地样本；不仿真概率；日/周独立记录而非原榜排名。

未知：抽取概率/成本；碎片兑换率。

正常路径：draw → exchange → noble → day → week → reset；专属边界动作：exchange。源码断言结果：{"giftFragments":0,"nobleFragments":0,"week":2}。

证据：analysis/feature-expansion-resources.json [index=7023,offset=500516]。

### FAL07 · Soulmate/Bestie/Homie 区域关系榜

源核心循环：邀请关系→积累亲密→按邀请者地区排行→解除清点/权益。

包体规则：门槛：成立关系；按邀请者区域；时序：统计期未知；资源：亲密值，活动与周星礼物排除；回报：关系榜和权益。

实现：关系类别与来源排除账本；专属操作：选择Bestie关系路径 → 选择Homie关系路径 → 邀请者发当前类型关系邀请 → 对方同意关系邀请 → 普通礼物增加本地10亲密 → 活动/周星礼物排除不加亲密 → 解除关系清亲密及权益。

本地补齐：可选Soulmate/Bestie/Homie，同源区域/解除规则，不推断槽位；同意和10点是本地补齐。

未知：各类槽位/同意；具体权益。

正常路径：invite → accept → gift → excluded → terminate → reset；专属边界动作：gift。源码断言结果：{"intimacy":0,"relationship":false}。

证据：analysis/feature-expansion-resources.json [index=7027,offset=503115]；analysis/feature-expansion-resources.json [index=7202,offset=507999]；analysis/feature-expansion-resources.json [index=9308,offset=570192]；analysis/feature-expansion-resources.json [index=9668,offset=581042]。

### FAL08 · 家族EXP保级周期

源核心循环：成员贡献EXP→到截止前升级/保级→区域家族榜。

包体规则：门槛：指定EXP阈值；时序：等级截止时间下发；资源：家族EXP；回报：等级与地区排行。

实现：可配置家族维护系统；专属操作：成员完成任务（本地10EXP） → 截止前达到40EXP升级 → 推进截止并保级结算。

本地补齐：每任务10、升级40、保级20、周期3天及失败降一级全是本地配置；不把周期称原月制。

未知：EXP来源；降级幅度；月周期是否统一。

正常路径：task → task → deadline → reset；专属边界动作：upgrade。源码断言结果：{"level":1,"exp":0,"cycle":2}。

证据：analysis/feature-expansion-resources.json [index=9281,offset=568782]；analysis/feature-expansion-resources.json [index=9787,offset=587069]；analysis/feature-expansion-resources.json [index=8778,offset=556314]。

### FAL09 · 家族管理员发言特权

源核心循环：群管理开启全员禁言→族长和管理可发言→对单人另行禁言。

包体规则：门槛：族长/管理员；时序：开关即时；资源：管理身份；回报：组织活动秩序。

实现：家族群主持权限演示；专属操作：切换管理员身份 → 切换普通成员 → 开启全员禁言 → 对自己添加单人禁言样本 → 当前角色发送活动公告。

本地补齐：群文本权限沙盘；单人禁言高于全员豁免是本地选择，语音影响未知。

未知：开关操作者；角色转让；语音是否受影响。

正常路径：admin → muteAll → speak → member → reset；专属边界动作：muteAll。源码断言结果：{"role":"member","allMuted":true}。

证据：analysis/feature-expansion-resources.json [index=9448,offset=575623]；analysis/feature-expansion-resources.json [index=9754,offset=585262]。

### FAL10 · 贵族30天权益与续期折扣

源核心循环：买贵族→30天生效→有效期及到期7天内复购八折。

包体规则：门槛：购买贵族；时序：30天；到期后7天仍20%折扣；资源：贵族资格；回报：限时贵族权限。

实现：权益有效期与价格窗口；专属操作：购买/续期贵族：显示折扣账单 → 推进30天使首周期到期 → 推进到期后7天边界 → 推进到期后8天。

本地补齐：基价100和续期从旧到期叠加为本地选择；30天与20%折扣、7天窗口为源规则。

未知：等级权益/价格；续期叠加。

正常路径：buy → expire → seven → buy → reset；专属边界动作：buy。源码断言结果：{"wallet":120,"noble":true}。

证据：analysis/feature-expansion-resources.json [index=6913,offset=498931]。

### FAL11 · 神秘身份体验卡与自动恢复

源核心循环：试用卡→切神秘ID→限时匿名→到期恢复真实ID。

包体规则：门槛：神秘权益或试用卡；时序：{Holder}天；到期恢复；资源：体验卡；回报：神秘身份。

实现：匿名身份生命周期；专属操作：消耗神秘体验卡（本地2天） → 推进1天并检查自动恢复。

本地补齐：2天为Holder占位本地参数；只显示观众视图，原主播可见性未知。

未知：可见对象；真ID泄露范围。

正常路径：use → day → day → reset；专属边界动作：use。源码断言结果：{"mystery":false,"displayId":"Falla-阿澄"}。

证据：analysis/feature-expansion-resources.json [index=8477,offset=543744]；analysis/feature-expansion-resources.json [index=9798,offset=587744]。

### FAL12 · SVIP周期重算与充值加成

源核心循环：周期内积点→按点重算SVIP→清点→享受充值奖励。

包体规则：门槛：SVIP等级积分；时序：到期重算后积分清空；资源：SVIP点/充值；回报：额外百分比金币。

实现：周期权益账本；专属操作：注入100金币充值与10SVIP点 → 有效期到期重算等级并清点。

本地补齐：10点一级、100基础币、每级5%为本地参数；源只明确周期重算清点与百分比加成。

未知：等级阈值；点生产；返还数值。

正常路径：topup → recalc → topup → recalc → reset；专属边界动作：recalc。源码断言结果：{"points":0,"level":1,"coins":205}。

证据：analysis/feature-expansion-resources.json [index=9850,offset=589793]；analysis/feature-expansion-resources.json [index=7608,offset=520022]。

### FAL13 · 跨语区迁移的一次性身份代价

源核心循环：选新语言地区→确认→退家族清榜/清SVIP→旧国房不可进入。

包体规则：门槛：仅一次跨语言区域迁移；时序：确认后重置；资源：特殊ID、家族、榜分、SVIP级点；回报：新区域身份。

实现：只做沙盘，不操作真实账户；专属操作：选择新英语地区 → 查看迁移代价并明确确认 → 执行已确认的一次性迁移 → 尝试进入旧国房。

本地补齐：本地两个地区；迁移确认与模拟资产清除，无原账号迁移或恢复能力。

未知：当前服务地区定义；迁移可恢复性。

正常路径：choose → preview → migrate → reset；专属边界动作：migrate。源码断言结果：{"migrated":true,"canEnterOld":false,"family":null,"svip":0}。

证据：analysis/feature-expansion-resources.json [index=8523,offset=544882]。
