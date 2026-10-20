# Pococha：核心机制静态逆向与重构边界

研究目标：Family 粉丝组织、Rank Meter、Rest Day / Freeze Pass 与应援活动。

包名 `com.dena.pokota`，版本 `7.36.0`；基准APK SHA-256 `0de7478f2a347464e34727de59a104d2137633325f0aafafd95f91dee5279be9`。版本下载来源与全部split哈希保存在 APK-INFO.json。本次没有启动Android包体、登录账号或调用原始后台。

## 方法与证据

- 实际调用 REA 6.4.0 / JADX headless MCP 0.7.1 的 inspect_android_package；完整Evidence为 `analysis/rea-package.json`，ID `ev_14e535e6a4b9d2037fdc518c610106f3d96d1e3ca3d735fff46e8a330cea0232`。
- 包体身份/Manifest声明是直接观察，反编译返回的成员是静态恢复事实；不把权限声明当作实际授予或已执行。
- `analysis/package-string-evidence.json`：全部APK split的DEX string_ids结构化解析，保留DEX文件、string索引和字节offset；使用显式关键词，因此负向结论仅在此搜索范围内有效。
- `analysis/resource-evidence.json`：按Android资源表嵌套chunk与字符串池解析全部split；保留APK、资源pool偏移和字符串索引。资源文案直接证明包体包含说明，不证明功能实时可用。
- `analysis/archive-inventory.json`：全部split成员清单；`feature-excerpts.json`是报告可读摘录，`feature-ledger.json`记录问题、证据类型和未知项。

- `rea-rank-meter.json`：真实REA `inspect_android_class` Evidence `ev_5d2de4bbf4f798658d32e8fbdecd50ac8252e15a455c4c9d0ba2fcfdedbd8785`。

## 功能问题逐项

| 问题 | 证据级别 | 直接依据 | 限制 / 未知 |
|---|---|---|---|
| 语聊 / 直播应援 | 包体直接证据 | 直播资源与应援条目、CheerBursts protobuf配置/积分字段族 | 本包主要是直播应援社交；独立语音房、多麦权限未知 |
| 社交 / Family与频道权限 | 包体直接证据 | FamilyChannelPermissionType、families/FamilyV1 与10天未观看移出Family文案 | 能恢复文案规则；不同地区/家族类型是否同规则未知 |
| 社交游戏化 / Rank Meter | 包体直接证据 | REA protobuf RankMeter：current point、points、position、advancement、rank order等成员 | 服务端排序和应援分公式未知，不能从字段反推 |
| 社交游戏化 / 休息保护 | 包体直接证据 | Rest Day文案：不能开播、rank不变、不能同时使用Freeze Pass；Freeze Pass冻结meter | 实时开放、固定时长、时区与自动终止直播的具体延时未知 |
| 小游戏 / Guild Battle或Cheer Burst | 包体直接证据 | guild_battle排名类、CheerBursts配置、listener score ratio、bonus字段族 | 属于事件/应援契约；独立小游戏规则未发现充分证据 |

## 直接证据摘录与定位

- `com.dena.pokota.apk:classes.dex:string:15688`，offset `6727531`：`Lcom/dena/pokota/model/multi_channel_family/FamilyChannelPermissionType;`
- `com.dena.pokota.apk:classes3.dex:string:2312`，offset `5820113`：`(Ljava/lang/String;)Lcom/dena/pokota/model/multi_channel_family/FamilyChannelPermissionType;`
- `com.dena.pokota.apk:classes3.dex:string:2536`，offset `5835853`：`(Lycj;)Lcom/dena/pokota/model/multi_channel_family/FamilyChannelPermissionType;`
- `com.dena.pokota.apk:classes4.dex:string:1008`，offset `6324596`：`(ILjava/lang/String;ILjava/lang/String;Lcom/dena/pokota/model/liveevent/ListeningRecord;Lcom/dena/pokota/model/liveevent/LiverFamily;Lcom/dena/pokota/model/liveevent/DailyTopFun;Lcom/dena/pokota/model/liveevent/DailyTopFun;Lcom/dena/pokota/model/liveevent/FIRPocoKnight;ZZZLcom/dena/pokota/model/liveevent/FIRDecoratedProfileBadge;Ljava/lang/String;)`
- `com.dena.pokota.apk:classes4.dex:string:2721`，offset `6378432`：`, rankMeterCurrentPoint=`
- `com.dena.pokota.apk:classes4.dex:string:2724`，offset `6378506`：`, rankMeterPoints=`
- `com.dena.pokota.apk:classes6.dex:string:8082`，offset `5984518`：`CheerBursts.java`
- `com.dena.pokota.apk:classes6.dex:string:22850`，offset `6438031`：`Lprotobuf/api/festivals/logics/cheer_bursts/CheerBursts$DebuffDetail$a;`
- `com.dena.pokota.apk:classes6.dex:string:22851`，offset `6438104`：`Lprotobuf/api/festivals/logics/cheer_bursts/CheerBursts$DebuffDetail;`
- `com.dena.pokota.apk:classes6.dex:string:22889`，offset `6441544`：`Lprotobuf/api/festivals/logics/cheer_bursts/daily_rankings/DailyRankings$GetPocoKnightV1Response$a;`
- `com.dena.pokota.apk:classes6.dex:string:22890`，offset `6441645`：`Lprotobuf/api/festivals/logics/cheer_bursts/daily_rankings/DailyRankings$GetPocoKnightV1Response;`
- `com.dena.pokota.apk:classes6.dex:string:23102`，offset `6458984`：`Lprotobuf/resources/RankMeterOuterClass$RankMeter$RankMeterPoint;`
- `com.dena.pokota.apk:classes6.dex:string:23103`，offset `6459051`：`Lprotobuf/resources/RankMeterOuterClass$RankMeter$a;`
- `com.dena.pokota.apk:classes6.dex:string:23104`，offset `6459105`：`Lprotobuf/resources/RankMeterOuterClass$RankMeter$b;`
- `com.dena.pokota.apk:classes6.dex:string:34286`，offset `6694475`：`addAllRankMeterPoints`
- `com.dena.pokota.apk:classes6.dex:string:34461`，offset `6697759`：`addRankMeterPoints`
- `com.dena.pokota.apk:classes6.dex:string:36541`，offset `6738388`：`clearRankMeterCurrentPoint`
- `com.dena.pokota.apk:classes6.dex:string:42313`，offset `6873330`：`getRankMeterCurrentPoint`
- `com.dena.pokota.apk:resources.arsc:pool:12:string:2369`，offset `175577`：`- After the %1$s day of the month, you can broadcast even if you did not set a Rest Day for the current month.`
- `com.dena.pokota.apk:resources.arsc:pool:12:string:2373`，offset `175837`：`- You cannot broadcast on a Rest Day.  / - Your Rank will not change on a Rest Day.  / - You cannot use a Freeze Pass and Rest Day at the same time.  / - You can change a Rest Day’s settings until 10 minutes before it starts.  / - If a Rest Day starts while you are broadcasting, the broadcast will end automatically after a fixed amount of time.`
- `com.dena.pokota.apk:resources.arsc:pool:12:string:2805`，offset `186464`：`Freezes your Rank Meter so you can take time off as needed.`
- `com.dena.pokota.apk:resources.arsc:pool:12:string:2871`，offset `188147`：`It has been %1$s days since you last watched a broadcast. You will automatically be removed from the Family if you do not watch any broadcasts for 10 consecutive days.`
- `com.dena.pokota.apk:resources.arsc:pool:12:string:3092`，offset `194718`：`Pococha asks broadcasters to take Rest Days.  / We hope you can enjoy broadcasting by pacing yourself and taking time for self-care!`

## 推导（由多个静态事实连接）

Family成员观看主播 → 连续不观看计数候选 → 10天移出文案；直播应援 → RankMeter字段及等级展示 → 日结/休息保护候选。用户保护机制和社区留存规则可分别研究，不应把rank字段当成本地可计算完整排行榜。

## 推断（待运行时证实）

Family 粉丝组织、Rank Meter、Rest Day / Freeze Pass 与应援活动可能用于把直播参与行为与长期社区关系连接。此产品意图是对静态资源和契约的解释，不能证明真实用户使用方式、留存效果、收益或各区域版本实际开放策略。

## 未知与尚未覆盖

- 没有真机/模拟器界面、原始网络抓包、RTC音频质量、账号/服务端授权、真实支付/礼物结算、地域开关或人耳验收。
- 没有完整恢复所有业务调用路径；反射、混淆、native/Unity逻辑、动态加载和远程H5可能包含未覆盖实现。
- 不把未找到的基础语音房或小游戏类等同于不存在；字段/文件名不能证明执行路径。所有三类问题状态为部分回答，详见ledger。

## Demo实现与差异

Demo保留Family10天缺席移出、Rest Day与Freeze Pass互斥及保护等级概念。应援+25、100升级/50保级阈值、每按钮推进一天、通票每日清零均是本地重构选择，原始积分公式、时间窗与剩余券管理未恢复。

- `demo/index.html`：本地可交互机制；`demo/model.mjs`：纯状态转换；`demo/model.test.mjs`：边界与重复结算测试。
- 运行：在demo目录执行 `python3 -m http.server 8765`，打开 http://localhost:8765。重置恢复固定初始场景；事件轨迹保留本局状态转换。
- 不包含登录、基础聊天等泛用功能；UI是研究用本地设计，没有复制完整原应用界面。
- 测试是重构规则验证，不是原始APK行为验收。自动化结果见 `analysis/demo-test-results.txt`；浏览器验证若有记录单独保存。

## 验证结果

模型语义测试通过（analysis/demo-test-results.txt）。受控Chrome已验证桌面1280×900与移动390×844：机制按钮流程、重置事件轨迹、无页面脚本错误、无横向溢出。记录与截图在analysis/browser-verification.json、demo-desktop.png、demo-mobile.png。没有Android原包运行时验收或真人视觉/听感验收。
