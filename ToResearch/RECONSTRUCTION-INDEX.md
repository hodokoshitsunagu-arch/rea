# 特色机制重构总览

覆盖15个独立包体、196个目录ID。每个App的新入口提供机制选择器，所有旧demo完整保留在demo/legacy。源目录不改，功能说明、证据和未知项继续以各App FEATURE-CATALOG.md为准。

[打开本地互动实验室](http://127.0.0.1:4193/)；逐项选择说明见 [FEATURE-SELECTION.md](FEATURE-SELECTION.md)。

本地验证：698项Node测试，392个桌面/手机流程（其中114个同时验证专属拒绝路径），最终状态：全部通过。Node版本v24.17.0；仓库固定版本为24.18.0。本轮未安装或升级工具链，运行结果只代表所记录版本。桌面1280×900、手机390×844；逐项验证动作、核心状态变化、重置、页面错误和横向溢出。浏览器结果绑定demo文件SHA-256。总入口、15个旧demo入口及4个白名单外路径检查通过。机制实现使用SOL 6.1 Medium，最多3个子代理并行，Chrome验收串行。

| App | 机制数 | 本地规则测试 | 桌面/手机流程 | 覆盖报告 |
|---|---:|---:|---:|---|
| [Yalla](http://127.0.0.1:4193/Yalla/) | 12 | 54/54 | 24/24 | [实现与边界](Yalla/RECONSTRUCTION.md) |
| [YoHo](http://127.0.0.1:4193/YoHo/) | 12 | 47/47 | 24/24 | [实现与边界](YoHo/RECONSTRUCTION.md) |
| [MICO](http://127.0.0.1:4193/MICO/) | 11 | 43/43 | 22/22 | [实现与边界](MICO/RECONSTRUCTION.md) |
| [TopTop](http://127.0.0.1:4193/TopTop/) | 13 | 54/54 | 26/26 | [实现与边界](TopTop/RECONSTRUCTION.md) |
| [WePlay-AR](http://127.0.0.1:4193/WePlay-AR/) | 16 | 56/56 | 32/32 | [实现与边界](WePlay-AR/RECONSTRUCTION.md) |
| [Spoon](http://127.0.0.1:4193/Spoon/) | 9 | 20/20 | 18/18 | [实现与边界](Spoon/RECONSTRUCTION.md) |
| [WePlay-JP](http://127.0.0.1:4193/WePlay-JP/) | 19 | 67/67 | 38/38 | [实现与边界](WePlay-JP/RECONSTRUCTION.md) |
| [WePlay-KR](http://127.0.0.1:4193/WePlay-KR/) | 19 | 67/67 | 38/38 | [实现与边界](WePlay-KR/RECONSTRUCTION.md) |
| [Mirrativ](http://127.0.0.1:4193/Mirrativ/) | 8 | 17/17 | 16/16 | [实现与边界](Mirrativ/RECONSTRUCTION.md) |
| [Pococha](http://127.0.0.1:4193/Pococha/) | 11 | 25/25 | 22/22 | [实现与边界](Pococha/RECONSTRUCTION.md) |
| [17LIVE](http://127.0.0.1:4193/17LIVE/) | 12 | 28/28 | 24/24 | [实现与边界](17LIVE/RECONSTRUCTION.md) |
| [SUGO](http://127.0.0.1:4193/SUGO/) | 12 | 48/48 | 24/24 | [实现与边界](SUGO/RECONSTRUCTION.md) |
| [Yalla-Parchis](http://127.0.0.1:4193/Yalla-Parchis/) | 15 | 63/63 | 30/30 | [实现与边界](Yalla-Parchis/RECONSTRUCTION.md) |
| [Falla](http://127.0.0.1:4193/Falla/) | 13 | 52/52 | 26/26 | [实现与边界](Falla/RECONSTRUCTION.md) |
| [HeeSay](http://127.0.0.1:4193/HeeSay/) | 14 | 57/57 | 28/28 | [实现与边界](HeeSay/RECONSTRUCTION.md) |

复刻范围是核心交互机制：具名参与者、资格/权限、资源或时间、专属动作、阶段与结果、事件轨迹、拒绝边界和重置。按机制使用关系升级、权益到期、奖池分配、队伍贡献、骰子/绘画/问答等模型。各UI显示源规则和本地补齐；不完整题库、概率、阈值、配置、战斗、棋盘坐标及服务回应均不冒充原规则。C级候选只演示有证据的入口/字段/资格片段，Mirrativ实体卡只做资格与卡面设计预览。

原APK运行、真实账号/后台/RTC/支付、真实多人同步和真机/真人视觉听觉体验均未验证。桌面与手机尺寸验收是受控Chrome，不等同于Android设备验收。实现是本地研究原型，可按ID选择性复刻，不能据此宣称完整原应用恢复。

运行与可重复检查：

```sh
node ToResearch/demo-lab/server.mjs
node ToResearch/demo-lab/verify-rules.mjs
node ToResearch/demo-lab/verify-scopes.mjs
```

浏览器脚本及依赖路径配置见[实验室说明](demo-lab/README.md)。结构化结果见[RECONSTRUCTION-VERIFICATION.json](RECONSTRUCTION-VERIFICATION.json)，各App demo/verification.json与demo/verification/保留逐项轨迹和截图。

| App / ID | 机制 | 直接入口 |
|---|---|---|
| Yalla / YAL01 | 观众干预的速度赛 | [操作](http://127.0.0.1:4193/Yalla/?feature=YAL01) |
| Yalla / YAL02 | 足球/团队礼物积分奖池 | [操作](http://127.0.0.1:4193/Yalla/?feature=YAL02) |
| Yalla / YAL03 | 10级房间共同开宝箱 | [操作](http://127.0.0.1:4193/Yalla/?feature=YAL03) |
| Yalla / YAL04 | 押金式房内猜拳 | [操作](http://127.0.0.1:4193/Yalla/?feature=YAL04) |
| Yalla / YAL05 | 变声整蛊与防护牌 | [操作](http://127.0.0.1:4193/Yalla/?feature=YAL05) |
| Yalla / YAL06 | CP绑定与专属礼物亲密 | [操作](http://127.0.0.1:4193/Yalla/?feature=YAL06) |
| Yalla / YAL07 | 房会员亲密与徽章熄亮 | [操作](http://127.0.0.1:4193/Yalla/?feature=YAL07) |
| Yalla / YAL08 | 90天VIP升降与退款冻结 | [操作](http://127.0.0.1:4193/Yalla/?feature=YAL08) |
| Yalla / YAL09 | Premium爵位返金与成长倍率 | [操作](http://127.0.0.1:4193/Yalla/?feature=YAL09) |
| Yalla / YAL10 | 自定义房主题的时效与冻结 | [操作](http://127.0.0.1:4193/Yalla/?feature=YAL10) |
| Yalla / YAL11 | 房间置顶卡拍卖 | [操作](http://127.0.0.1:4193/Yalla/?feature=YAL11) |
| Yalla / YAL12 | 徽章星级与限时荣誉榜 | [操作](http://127.0.0.1:4193/Yalla/?feature=YAL12) |
| YoHo / YOH01 | 家族周排名挑战与20%贡献转移 | [操作](http://127.0.0.1:4193/YoHo/?feature=YOH01) |
| YoHo / YOH02 | 家族召集与成长任务 | [操作](http://127.0.0.1:4193/YoHo/?feature=YOH02) |
| YoHo / YOH03 | 礼物竞拍守护关系 | [操作](http://127.0.0.1:4193/YoHo/?feature=YOH03) |
| YoHo / YOH04 | 守护代币与限期关系升级 | [操作](http://127.0.0.1:4193/YoHo/?feature=YOH04) |
| YoHo / YOH05 | 双向亮心配对回合 | [操作](http://127.0.0.1:4193/YoHo/?feature=YOH05) |
| YoHo / YOH06 | 最低钻石狙击的大逃杀 | [操作](http://127.0.0.1:4193/YoHo/?feature=YOH06) |
| YoHo / YOH07 | 团队武器PK与火箭升级 | [操作](http://127.0.0.1:4193/YoHo/?feature=YOH07) |
| YoHo / YOH08 | 游戏币与通用币双钱包 | [操作](http://127.0.0.1:4193/YoHo/?feature=YOH08) |
| YoHo / YOH09 | Room Club等级与成员权益 | [操作](http://127.0.0.1:4193/YoHo/?feature=YOH09) |
| YoHo / YOH10 | Mystery匿名身份与贵族隐私 | [操作](http://127.0.0.1:4193/YoHo/?feature=YOH10) |
| YoHo / YOH11 | 贵族礼物授权与高阶动态名片 | [操作](http://127.0.0.1:4193/YoHo/?feature=YOH11) |
| YoHo / YOH12 | 生日与关系周年派对奖励 | [操作](http://127.0.0.1:4193/YoHo/?feature=YOH12) |
| MICO / MIC01 | 武器升级双倍与淘汰复活团队PK | [操作](http://127.0.0.1:4193/MICO/?feature=MIC01) |
| MICO / MIC02 | Couple专属麦位与模式互斥 | [操作](http://127.0.0.1:4193/MICO/?feature=MIC02) |
| MICO / MIC03 | Couple等级的优先展示与专属礼物 | [操作](http://127.0.0.1:4193/MICO/?feature=MIC03) |
| MICO / MIC04 | 家族赠收礼贡献榜与退出清分 | [操作](http://127.0.0.1:4193/MICO/?feature=MIC04) |
| MICO / MIC05 | 主播守护的免踢免禁言 | [操作](http://127.0.0.1:4193/MICO/?feature=MIC05) |
| MICO / MIC06 | 贵族身份的房管免踢与称号启停 | [操作](http://127.0.0.1:4193/MICO/?feature=MIC06) |
| MICO / MIC07 | Pure Supporter分场景隐藏与SVIP9双经验 | [操作](http://127.0.0.1:4193/MICO/?feature=MIC07) |
| MICO / MIC08 | 跨语言VIP与访问隐身/招呼优先 | [操作](http://127.0.0.1:4193/MICO/?feature=MIC08) |
| MICO / MIC09 | Rocket Blast分级奖励候选 | [操作](http://127.0.0.1:4193/MICO/?feature=MIC09) |
| MICO / MIC10 | Ludo成长与车辆竞猜入口候选 | [操作](http://127.0.0.1:4193/MICO/?feature=MIC10) |
| MICO / MIC11 | TOP10小时抽奖候选 | [操作](http://127.0.0.1:4193/MICO/?feature=MIC11) |
| TopTop / TOP01 | 保底价关系竞拍 | [操作](http://127.0.0.1:4193/TopTop/?feature=TOP01) |
| TopTop / TOP02 | CF衰减与CP/Deep Bond升级树 | [操作](http://127.0.0.1:4193/TopTop/?feature=TOP02) |
| TopTop / TOP03 | 关系信物类型与失效修复 | [操作](http://127.0.0.1:4193/TopTop/?feature=TOP03) |
| TopTop / TOP04 | 双人限定关系卡墙 | [操作](http://127.0.0.1:4193/TopTop/?feature=TOP04) |
| TopTop / TOP05 | 部落火箭共同燃料与返航分奖 | [操作](http://127.0.0.1:4193/TopTop/?feature=TOP05) |
| TopTop / TOP06 | 部落干部资产与成员任务回报 | [操作](http://127.0.0.1:4193/TopTop/?feature=TOP06) |
| TopTop / TOP07 | 幸运号码礼物抽奖 | [操作](http://127.0.0.1:4193/TopTop/?feature=TOP07) |
| TopTop / TOP08 | 武器PK与任务/护盾候选 | [操作](http://127.0.0.1:4193/TopTop/?feature=TOP08) |
| TopTop / TOP09 | 战斗游戏5级解锁League | [操作](http://127.0.0.1:4193/TopTop/?feature=TOP09) |
| TopTop / TOP10 | 公开正式比赛游戏名片 | [操作](http://127.0.0.1:4193/TopTop/?feature=TOP10) |
| TopTop / TOP11 | 游戏Club固定类型与专属房 | [操作](http://127.0.0.1:4193/TopTop/?feature=TOP11) |
| TopTop / TOP12 | VIP竞技门禁与高阶临时封房 | [操作](http://127.0.0.1:4193/TopTop/?feature=TOP12) |
| TopTop / TOP13 | 贵族称号启用与匿名入房 | [操作](http://127.0.0.1:4193/TopTop/?feature=TOP13) |
| WePlay-AR / WAR01 | BFF门槛、竞拍旁路与关系展示槽位 | [操作](http://127.0.0.1:4193/WePlay-AR/?feature=WAR01) |
| WePlay-AR / WAR02 | BFF关系进阶：亲密进度、宝箱与专属关系卡 | [操作](http://127.0.0.1:4193/WePlay-AR/?feature=WAR02) |
| WePlay-AR / WAR03 | 戒指替换保留旧物与关系年龄 | [操作](http://127.0.0.1:4193/WePlay-AR/?feature=WAR03) |
| WePlay-AR / WAR04 | 高级房容量扩张与到期回收 | [操作](http://127.0.0.1:4193/WePlay-AR/?feature=WAR04) |
| WePlay-AR / WAR05 | 高级房三管理员与到期权限撤销 | [操作](http://127.0.0.1:4193/WePlay-AR/?feature=WAR05) |
| WePlay-AR / WAR06 | 语音房宝箱倒计时与任务减时 | [操作](http://127.0.0.1:4193/WePlay-AR/?feature=WAR06) |
| WePlay-AR / WAR07 | 签约歌手出题与审核回报 | [操作](http://127.0.0.1:4193/WePlay-AR/?feature=WAR07) |
| WePlay-AR / WAR08 | 玩家词题投稿与延后奖励 | [操作](http://127.0.0.1:4193/WePlay-AR/?feature=WAR08) |
| WePlay-AR / WAR09 | 绘画道具：付费延时与成长解锁颜色 | [操作](http://127.0.0.1:4193/WePlay-AR/?feature=WAR09) |
| WePlay-AR / WAR10 | VIP全站广播、礼物隐私与成长转换 | [操作](http://127.0.0.1:4193/WePlay-AR/?feature=WAR10) |
| WePlay-AR / WAR11 | 家族人气徽章触发房间奖励 | [操作](http://127.0.0.1:4193/WePlay-AR/?feature=WAR11) |
| WePlay-AR / WAR12 | 卧底语音描述、不可撤销猜词与同投票结算交友 | [操作](http://127.0.0.1:4193/WePlay-AR/?feature=WAR12) |
| WePlay-AR / WAR13 | 家族宝箱：职位发放、周活门槛与解锁占用 | [操作](http://127.0.0.1:4193/WePlay-AR/?feature=WAR13) |
| WePlay-AR / WAR14 | Baloot金币房、系统接管与离局匹配冷却 | [操作](http://127.0.0.1:4193/WePlay-AR/?feature=WAR14) |
| WePlay-AR / WAR15 | 家族护盾库存的职位可见性 | [操作](http://127.0.0.1:4193/WePlay-AR/?feature=WAR15) |
| WePlay-AR / WAR16 | Bingo满卡后道具禁用 | [操作](http://127.0.0.1:4193/WePlay-AR/?feature=WAR16) |
| Spoon / SPO01 | Lucky Box 条件打赏 | [操作](http://127.0.0.1:4193/Spoon/?feature=SPO01) |
| Spoon / SPO02 | Quiz Gift 答题打赏 | [操作](http://127.0.0.1:4193/Spoon/?feature=SPO02) |
| Spoon / SPO03 | 首访3分钟欢迎贴 | [操作](http://127.0.0.1:4193/Spoon/?feature=SPO03) |
| Spoon / SPO04 | 频道Tier付费内容社区 | [操作](http://127.0.0.1:4193/Spoon/?feature=SPO04) |
| Spoon / SPO05 | Premium专属直播与Podcasts | [操作](http://127.0.0.1:4193/Spoon/?feature=SPO05) |
| Spoon / SPO06 | DJ会员制作工具权益 | [操作](http://127.0.0.1:4193/Spoon/?feature=SPO06) |
| Spoon / SPO07 | Choice DJ评选徽章 | [操作](http://127.0.0.1:4193/Spoon/?feature=SPO07) |
| Spoon / SPO08 | 粉丝贡献排行与忠诚徽章 | [操作](http://127.0.0.1:4193/Spoon/?feature=SPO08) |
| Spoon / SPO09 | Nudge催开播与重置 | [操作](http://127.0.0.1:4193/Spoon/?feature=SPO09) |
| WePlay-JP / WJP01 | BFF门槛、竞拍旁路与关系展示槽位 | [操作](http://127.0.0.1:4193/WePlay-JP/?feature=WJP01) |
| WePlay-JP / WJP02 | BFF关系进阶：亲密进度、宝箱与专属关系卡 | [操作](http://127.0.0.1:4193/WePlay-JP/?feature=WJP02) |
| WePlay-JP / WJP03 | 戒指替换保留旧物与关系年龄 | [操作](http://127.0.0.1:4193/WePlay-JP/?feature=WJP03) |
| WePlay-JP / WJP04 | 高级房容量扩张与到期回收 | [操作](http://127.0.0.1:4193/WePlay-JP/?feature=WJP04) |
| WePlay-JP / WJP05 | 高级房三管理员与到期权限撤销 | [操作](http://127.0.0.1:4193/WePlay-JP/?feature=WJP05) |
| WePlay-JP / WJP06 | 语音房宝箱倒计时与任务减时 | [操作](http://127.0.0.1:4193/WePlay-JP/?feature=WJP06) |
| WePlay-JP / WJP07 | 签约歌手出题与审核回报 | [操作](http://127.0.0.1:4193/WePlay-JP/?feature=WJP07) |
| WePlay-JP / WJP08 | 玩家词题投稿与延后奖励 | [操作](http://127.0.0.1:4193/WePlay-JP/?feature=WJP08) |
| WePlay-JP / WJP09 | 绘画道具：付费延时与成长解锁颜色 | [操作](http://127.0.0.1:4193/WePlay-JP/?feature=WJP09) |
| WePlay-JP / WJP10 | VIP全站广播、礼物隐私与成长转换 | [操作](http://127.0.0.1:4193/WePlay-JP/?feature=WJP10) |
| WePlay-JP / WJP11 | 家族人气徽章触发房间奖励 | [操作](http://127.0.0.1:4193/WePlay-JP/?feature=WJP11) |
| WePlay-JP / WJP12 | 卧底语音描述、不可撤销猜词与同投票结算交友 | [操作](http://127.0.0.1:4193/WePlay-JP/?feature=WJP12) |
| WePlay-JP / WJP13 | 家族宝箱：锁定名单与领取时动态校验 | [操作](http://127.0.0.1:4193/WePlay-JP/?feature=WJP13) |
| WePlay-JP / WJP14 | 绘画接力：上一棒、展示确认与赞踩 | [操作](http://127.0.0.1:4193/WePlay-JP/?feature=WJP14) |
| WePlay-JP / WJP15 | 抢麦：练习局转正式的下一题生效 | [操作](http://127.0.0.1:4193/WePlay-JP/?feature=WJP15) |
| WePlay-JP / WJP16 | 次日婚礼堂竞拍与固定婚礼时段 | [操作](http://127.0.0.1:4193/WePlay-JP/?feature=WJP16) |
| WePlay-JP / WJP17 | 关系退出：未回复三天自动拒绝 | [操作](http://127.0.0.1:4193/WePlay-JP/?feature=WJP17) |
| WePlay-JP / WJP18 | 双人画布协作入口 | [操作](http://127.0.0.1:4193/WePlay-JP/?feature=WJP18) |
| WePlay-JP / WJP19 | Puppet/Mind：四槽装配与遗迹一轮一次 | [操作](http://127.0.0.1:4193/WePlay-JP/?feature=WJP19) |
| WePlay-KR / WKR01 | BFF门槛、竞拍旁路与关系展示槽位 | [操作](http://127.0.0.1:4193/WePlay-KR/?feature=WKR01) |
| WePlay-KR / WKR02 | BFF关系进阶：亲密进度、宝箱与专属关系卡 | [操作](http://127.0.0.1:4193/WePlay-KR/?feature=WKR02) |
| WePlay-KR / WKR03 | 戒指替换保留旧物与关系年龄 | [操作](http://127.0.0.1:4193/WePlay-KR/?feature=WKR03) |
| WePlay-KR / WKR04 | 高级房容量扩张与到期回收 | [操作](http://127.0.0.1:4193/WePlay-KR/?feature=WKR04) |
| WePlay-KR / WKR05 | 高级房三管理员与到期权限撤销 | [操作](http://127.0.0.1:4193/WePlay-KR/?feature=WKR05) |
| WePlay-KR / WKR06 | 语音房宝箱倒计时与任务减时 | [操作](http://127.0.0.1:4193/WePlay-KR/?feature=WKR06) |
| WePlay-KR / WKR07 | 签约歌手出题与审核回报 | [操作](http://127.0.0.1:4193/WePlay-KR/?feature=WKR07) |
| WePlay-KR / WKR08 | 玩家词题投稿与延后奖励 | [操作](http://127.0.0.1:4193/WePlay-KR/?feature=WKR08) |
| WePlay-KR / WKR09 | 绘画道具：付费延时与成长解锁颜色 | [操作](http://127.0.0.1:4193/WePlay-KR/?feature=WKR09) |
| WePlay-KR / WKR10 | VIP全站广播、礼物隐私与成长转换 | [操作](http://127.0.0.1:4193/WePlay-KR/?feature=WKR10) |
| WePlay-KR / WKR11 | 家族人气徽章触发房间奖励 | [操作](http://127.0.0.1:4193/WePlay-KR/?feature=WKR11) |
| WePlay-KR / WKR12 | 卧底语音描述、不可撤销猜词与同投票结算交友 | [操作](http://127.0.0.1:4193/WePlay-KR/?feature=WKR12) |
| WePlay-KR / WKR13 | 家族宝箱：锁定名单与领取时动态校验 | [操作](http://127.0.0.1:4193/WePlay-KR/?feature=WKR13) |
| WePlay-KR / WKR14 | 绘画接力：上一棒、展示确认与赞踩 | [操作](http://127.0.0.1:4193/WePlay-KR/?feature=WKR14) |
| WePlay-KR / WKR15 | 抢麦：练习局转正式的下一题生效 | [操作](http://127.0.0.1:4193/WePlay-KR/?feature=WKR15) |
| WePlay-KR / WKR16 | 次日婚礼堂竞拍与固定婚礼时段 | [操作](http://127.0.0.1:4193/WePlay-KR/?feature=WKR16) |
| WePlay-KR / WKR17 | 关系退出：未回复三天自动拒绝 | [操作](http://127.0.0.1:4193/WePlay-KR/?feature=WKR17) |
| WePlay-KR / WKR18 | 双人画布协作入口 | [操作](http://127.0.0.1:4193/WePlay-KR/?feature=WKR18) |
| WePlay-KR / WKR19 | Puppet/Mind：四槽装配与遗迹一轮一次 | [操作](http://127.0.0.1:4193/WePlay-KR/?feature=WKR19) |
| Mirrativ / MIR01 | 双形态Collab：通话与共同直播 | [操作](http://127.0.0.1:4193/Mirrativ/?feature=MIR01) |
| Mirrativ / MIR02 | Cheerleader礼物身份 | [操作](http://127.0.0.1:4193/Mirrativ/?feature=MIR02) |
| Mirrativ / MIR03 | 主播/观众双侧Live Game任务 | [操作](http://127.0.0.1:4193/Mirrativ/?feature=MIR03) |
| Mirrativ / MIR04 | Emomo麻将邀请与NPC补位 | [操作](http://127.0.0.1:4193/Mirrativ/?feature=MIR04) |
| Mirrativ / MIR05 | Emomo RPG奖励→抽卡券 | [操作](http://127.0.0.1:4193/Mirrativ/?feature=MIR05) |
| Mirrativ / MIR06 | 定时任务与观看赚币 | [操作](http://127.0.0.1:4193/Mirrativ/?feature=MIR06) |
| Mirrativ / MIR07 | 自制Emomo表情礼物 | [操作](http://127.0.0.1:4193/Mirrativ/?feature=MIR07) |
| Mirrativ / MIR08 | 推し活实体卡形象设计资格 | [操作](http://127.0.0.1:4193/Mirrativ/?feature=MIR08) |
| Pococha / POC01 | 开放/核心粉丝Family资格与退群 | [操作](http://127.0.0.1:4193/Pococha/?feature=POC01) |
| Pococha / POC02 | Family频道权限和助手治理 | [操作](http://127.0.0.1:4193/Pococha/?feature=POC02) |
| Pococha / POC03 | 助手操作日志同意 | [操作](http://127.0.0.1:4193/Pococha/?feature=POC03) |
| Pococha / POC04 | 季度Family Board留言 | [操作](http://127.0.0.1:4193/Pococha/?feature=POC04) |
| Pococha / POC05 | Rank Meter应援保级进度 | [操作](http://127.0.0.1:4193/Pococha/?feature=POC05) |
| Pococha / POC06 | Rest Day强制休息与等级保护 | [操作](http://127.0.0.1:4193/Pococha/?feature=POC06) |
| Pococha / POC07 | Freeze Pass按需停表 | [操作](http://127.0.0.1:4193/Pococha/?feature=POC07) |
| Pococha / POC08 | PocoBox连续观看+评论续计时 | [操作](http://127.0.0.1:4193/Pococha/?feature=POC08) |
| Pococha / POC09 | Poco Knight应援身份与专属道具 | [操作](http://127.0.0.1:4193/Pococha/?feature=POC09) |
| Pococha / POC10 | Flexi/Premier直播收益时长模式 | [操作](http://127.0.0.1:4193/Pococha/?feature=POC10) |
| Pococha / POC11 | Audition活动收益切换 | [操作](http://127.0.0.1:4193/Pococha/?feature=POC11) |
| 17LIVE / L1701 | PK竞争+双边共斗任务 | [操作](http://127.0.0.1:4193/17LIVE/?feature=L1701) |
| 17LIVE / L1702 | Army分级订阅与专属直播 | [操作](http://127.0.0.1:4193/17LIVE/?feature=L1702) |
| 17LIVE / L1703 | 赠送Army30天与限制 | [操作](http://127.0.0.1:4193/17LIVE/?feature=L1703) |
| 17LIVE / L1704 | Army自定义身份与表情 | [操作](http://127.0.0.1:4193/17LIVE/?feature=L1704) |
| 17LIVE / L1705 | Army Call-in专属连线 | [操作](http://127.0.0.1:4193/17LIVE/?feature=L1705) |
| 17LIVE / L1706 | Guardian独占七日竞价守护 | [操作](http://127.0.0.1:4193/17LIVE/?feature=L1706) |
| 17LIVE / L1707 | 入场动画按身份优先级择一 | [操作](http://127.0.0.1:4193/17LIVE/?feature=L1707) |
| 17LIVE / L1708 | Lucky Bag共享保底 | [操作](http://127.0.0.1:4193/17LIVE/?feature=L1708) |
| 17LIVE / L1709 | Random Rush集物开箱活动 | [操作](http://127.0.0.1:4193/17LIVE/?feature=L1709) |
| 17LIVE / L1710 | Draw & Guess直播互动 | [操作](http://127.0.0.1:4193/17LIVE/?feature=L1710) |
| 17LIVE / L1711 | Quiz Game主题直播问答 | [操作](http://127.0.0.1:4193/17LIVE/?feature=L1711) |
| 17LIVE / L1712 | Army贡献榜按订阅天摊分 | [操作](http://127.0.0.1:4193/17LIVE/?feature=L1712) |
| SUGO / SUG01 | PK KING/QUEEN 自动轮转 | [操作](http://127.0.0.1:4193/SUGO/?feature=SUG01) |
| SUGO / SUG02 | 麦位分与阵营累计分分离 | [操作](http://127.0.0.1:4193/SUGO/?feature=SUG02) |
| SUGO / SUG03 | 亲密度解锁关系能力 | [操作](http://127.0.0.1:4193/SUGO/?feature=SUG03) |
| SUGO / SUG04 | Couple 唯一关系与扩槽冲突 | [操作](http://127.0.0.1:4193/SUGO/?feature=SUG04) |
| SUGO / SUG05 | 情侣麦位双人特效 | [操作](http://127.0.0.1:4193/SUGO/?feature=SUG05) |
| SUGO / SUG06 | 家族活跃维护与强制解散 | [操作](http://127.0.0.1:4193/SUGO/?feature=SUG06) |
| SUGO / SUG07 | 家族贡献账本和管理权 | [操作](http://127.0.0.1:4193/SUGO/?feature=SUG07) |
| SUGO / SUG08 | Chat Star 限时认证权益 | [操作](http://127.0.0.1:4193/SUGO/?feature=SUG08) |
| SUGO / SUG09 | 贵族隐身入房和榜单匿名 | [操作](http://127.0.0.1:4193/SUGO/?feature=SUG09) |
| SUGO / SUG10 | 榜单冠军的可维持身份 | [操作](http://127.0.0.1:4193/SUGO/?feature=SUG10) |
| SUGO / SUG11 | Super Winner 报名人数闸门 | [操作](http://127.0.0.1:4193/SUGO/?feature=SUG11) |
| SUGO / SUG12 | 幸运礼物的超级时刻 | [操作](http://127.0.0.1:4193/SUGO/?feature=SUG12) |
| Yalla-Parchis / YPH01 | Classic/Spanish 双骰策略 | [操作](http://127.0.0.1:4193/Yalla-Parchis/?feature=YPH01) |
| Yalla-Parchis / YPH02 | 路障与强制拆障 | [操作](http://127.0.0.1:4193/Yalla-Parchis/?feature=YPH02) |
| Yalla-Parchis / YPH03 | 吃子20步和终点10步奖励 | [操作](http://127.0.0.1:4193/Yalla-Parchis/?feature=YPH03) |
| Yalla-Parchis / YPH04 | 队伍八子终局和代操作队友 | [操作](http://127.0.0.1:4193/Yalla-Parchis/?feature=YPH04) |
| Yalla-Parchis / YPH05 | 联赛升降和传奇星 | [操作](http://127.0.0.1:4193/Yalla-Parchis/?feature=YPH05) |
| Yalla-Parchis / YPH06 | 宝箱队列与通行证 | [操作](http://127.0.0.1:4193/Yalla-Parchis/?feature=YPH06) |
| Yalla-Parchis / YPH07 | 协助缩短开箱 | [操作](http://127.0.0.1:4193/Yalla-Parchis/?feature=YPH07) |
| Yalla-Parchis / YPH08 | VIP Elite 房与观战身份 | [操作](http://127.0.0.1:4193/Yalla-Parchis/?feature=YPH08) |
| Yalla-Parchis / YPH09 | Member Club 任务社群 | [操作](http://127.0.0.1:4193/Yalla-Parchis/?feature=YPH09) |
| Yalla-Parchis / YPH10 | Baron 房内按月权益续费 | [操作](http://127.0.0.1:4193/Yalla-Parchis/?feature=YPH10) |
| Yalla-Parchis / YPH11 | 关系亲密度衰减 | [操作](http://127.0.0.1:4193/Yalla-Parchis/?feature=YPH11) |
| Yalla-Parchis / YPH12 | 礼物专属 Sponsor 冠名 | [操作](http://127.0.0.1:4193/Yalla-Parchis/?feature=YPH12) |
| Yalla-Parchis / YPH13 | Royal 充值等级和冻结权益 | [操作](http://127.0.0.1:4193/Yalla-Parchis/?feature=YPH13) |
| Yalla-Parchis / YPH14 | Fruit Merge 复活与排行 | [操作](http://127.0.0.1:4193/Yalla-Parchis/?feature=YPH14) |
| Yalla-Parchis / YPH15 | 邀请新用户到二级领奖 | [操作](http://127.0.0.1:4193/Yalla-Parchis/?feature=YPH15) |
| Falla / FAL01 | Quick Ludo 先吃后冲线 | [操作](http://127.0.0.1:4193/Falla/?feature=FAL01) |
| Falla / FAL02 | Ludo 额外回合与三连六停局 | [操作](http://127.0.0.1:4193/Falla/?feature=FAL02) |
| Falla / FAL03 | Ludo 金骰磁铁炸弹 | [操作](http://127.0.0.1:4193/Falla/?feature=FAL03) |
| Falla / FAL04 | 房间与外部游戏匹配绑定 | [操作](http://127.0.0.1:4193/Falla/?feature=FAL04) |
| Falla / FAL05 | 幸运袋票与Queen权限 | [操作](http://127.0.0.1:4193/Falla/?feature=FAL05) |
| Falla / FAL06 | 许愿池碎片兑换和榜单 | [操作](http://127.0.0.1:4193/Falla/?feature=FAL06) |
| Falla / FAL07 | Soulmate/Bestie/Homie 区域关系榜 | [操作](http://127.0.0.1:4193/Falla/?feature=FAL07) |
| Falla / FAL08 | 家族EXP保级周期 | [操作](http://127.0.0.1:4193/Falla/?feature=FAL08) |
| Falla / FAL09 | 家族管理员发言特权 | [操作](http://127.0.0.1:4193/Falla/?feature=FAL09) |
| Falla / FAL10 | 贵族30天权益与续期折扣 | [操作](http://127.0.0.1:4193/Falla/?feature=FAL10) |
| Falla / FAL11 | 神秘身份体验卡与自动恢复 | [操作](http://127.0.0.1:4193/Falla/?feature=FAL11) |
| Falla / FAL12 | SVIP周期重算与充值加成 | [操作](http://127.0.0.1:4193/Falla/?feature=FAL12) |
| Falla / FAL13 | 跨语区迁移的一次性身份代价 | [操作](http://127.0.0.1:4193/Falla/?feature=FAL13) |
| HeeSay / HEE01 | 守护资格、Top1 Couple 与积分到期 | [操作](http://127.0.0.1:4193/HeeSay/?feature=HEE01) |
| HeeSay / HEE02 | Chat Spark 到 Soulmate 徽章 | [操作](http://127.0.0.1:4193/HeeSay/?feature=HEE02) |
| HeeSay / HEE03 | Fan Club 取最高等级奖励 | [操作](http://127.0.0.1:4193/HeeSay/?feature=HEE03) |
| HeeSay / HEE04 | Family Starship 月度保级 | [操作](http://127.0.0.1:4193/HeeSay/?feature=HEE04) |
| HeeSay / HEE05 | 家族双域管理员与创建存续条件 | [操作](http://127.0.0.1:4193/HeeSay/?feature=HEE05) |
| HeeSay / HEE06 | RICH 保级失败冻结不降级 | [操作](http://127.0.0.1:4193/HeeSay/?feature=HEE06) |
| HeeSay / HEE07 | 匿名观播对主播可见 | [操作](http://127.0.0.1:4193/HeeSay/?feature=HEE07) |
| HeeSay / HEE08 | 幸运礼物按实际收币算榜 | [操作](http://127.0.0.1:4193/HeeSay/?feature=HEE08) |
| HeeSay / HEE09 | 宝箱任务排除特定礼物 | [操作](http://127.0.0.1:4193/HeeSay/?feature=HEE09) |
| HeeSay / HEE10 | Card Battle 分阶段揭牌 | [操作](http://127.0.0.1:4193/HeeSay/?feature=HEE10) |
| HeeSay / HEE11 | Hot Pick 与跨房PK互斥 | [操作](http://127.0.0.1:4193/HeeSay/?feature=HEE11) |
| HeeSay / HEE12 | Doodle 月榜排除上月Top10 | [操作](http://127.0.0.1:4193/HeeSay/?feature=HEE12) |
| HeeSay / HEE13 | 游戏票的失败补偿 Lucky Points | [操作](http://127.0.0.1:4193/HeeSay/?feature=HEE13) |
| HeeSay / HEE14 | 徽章槽位按展示域分权 | [操作](http://127.0.0.1:4193/HeeSay/?feature=HEE14) |
