# 17LIVE：核心机制静态逆向与重构边界

研究目标：PK 双主播竞争与共斗任务、Army 订阅社交、直播互动游戏。

包名 `com.machipopo.media17`，版本 `2.253.1.0`；基准APK SHA-256 `b8eca71f7e68a9359e4a84ffe81db2cf242c6ce3f08e2e614ee4628a1d2bd2f4`。版本下载来源与全部split哈希保存在 APK-INFO.json。本次没有启动Android包体、登录账号或调用原始后台。

## 方法与证据

- 实际调用 REA 6.4.0 / JADX headless MCP 0.7.1 的 inspect_android_package；完整Evidence为 `analysis/rea-package.json`，ID `ev_19c7ddec4c8edb0aa0c5683505e32bb7fa1155f345de1c5b594ebee38f4d0aab`。
- 包体身份/Manifest声明是直接观察，反编译返回的成员是静态恢复事实；不把权限声明当作实际授予或已执行。
- `analysis/package-string-evidence.json`：全部APK split的DEX string_ids结构化解析，保留DEX文件、string索引和字节offset；使用显式关键词，因此负向结论仅在此搜索范围内有效。
- `analysis/resource-evidence.json`：按Android资源表嵌套chunk与字符串池解析全部split；保留APK、资源pool偏移和字符串索引。资源文案直接证明包体包含说明，不证明功能实时可用。
- `analysis/archive-inventory.json`：全部split成员清单；`feature-excerpts.json`是报告可读摘录，`feature-ledger.json`记录问题、证据类型和未知项。

- `rea-pk-search.json`：保留的一次受限调用/错误诊断，不用它证明原始功能。

## 功能问题逐项

| 问题 | 证据级别 | 直接依据 | 限制 / 未知 |
|---|---|---|---|
| 语聊 / PK等待室与队伍 | 包体直接证据 | 等待室交流文案、拖放分队/话题/时长设置文案、原主持离开后系统指定新主持文案 | 是静态产品说明；实际队伍人数、房主转移算法与媒体路由未知 |
| 社交游戏化 / PK共斗 | 包体直接证据 | 双方主播及观众完成任务拿奖励；随机评论/点赞/礼物任务；1gift point=1PK point；投降结束共斗文案；DEX PK_DYNAMIC_MISSION | 可以重构竞争与协作叠加；任务生成概率、奖励、匹配/结算逻辑未知 |
| 社交 / Army | 包体直接证据 | Army说明为订阅系统；专属徽章礼物、进入动画、Army-only streaming、前排等权益文案 | 订阅服务/定价/各级权益与有效校验未知 |
| 小游戏 / Draw & Guess与Quiz | 包体直接证据 | 交互游戏文案明确Draw & Guess与Quiz Game，AI处理规则、提示、答案；题目主题资源 | 确认宣传/界面契约，不证明模型、服务端出题、判题或地区开放 |
| 游戏化 / Lucky Bag | 包体直接证据 | 概率抽取、guaranteed prize计数由送礼者累积文案 | 抽奖概率、保底阈值和实际资金结算未知 |

## 直接证据摘录与定位

- `com.machipopo.media17.apk:classes10.dex:string:4827`，offset `6687676`：`(Lcom/machipopo/media17/modules/rockarea/adapter/RockAreaListAdapter;Landroid/view/View;ILcom/machipopo/media17/modules/rockarea/adapter/RockAreaListAdapter$RockAreaListAdapterOnClickListener;Lcom/machipopo/media17/modules/livebroadcast/utils/LiveBroadcastType;Ljava/lang/Boolean;Lcom/machipopo/media17/modules/armysubs/data/network/model/ArmyNameDat`
- `com.machipopo.media17.apk:classes10.dex:string:7831`，offset `6847829`：`ARMY_BROADCAST_SETTING_REQUIRE_LEVEL`
- `com.machipopo.media17.apk:classes10.dex:string:9113`，offset `6880341`：`CONFIG_ARMY_BROADCAST_LEVEL`
- `com.machipopo.media17.apk:classes8.dex:string:27546`，offset `7221832`：`PK_DYNAMIC_MISSION`
- `com.machipopo.media17.apk:classes9.dex:string:33279`，offset `7832267`：`button_pk.mission.help`
- `config.ko.apk:resources.arsc:pool:12:string:866`，offset `72921`：`Before starting the battle, please set up the teams (drag and drop to assign streamers), choose a topic, and set the duration.`
- `config.ko.apk:resources.arsc:pool:12:string:1551`，offset `98537`：`During the PK event period, both streamers and their viewers work together to complete the above missions and earn rewards for both sides.`
- `config.ko.apk:resources.arsc:pool:12:string:1870`，offset `110912`：`For PK livestreams that successfully complete the mission, both streamers will receive the following rewards.`
- `config.ko.apk:resources.arsc:pool:12:string:1999`，offset `115122`：`Gifting will accumulate PK Points regardless of whether it’s during a mission. / Even after the mission is completed, users can continue sending gifts to help boost your PK score and earn rewards! (1 gift point = 1 PK point)`
- `config.ko.apk:resources.arsc:pool:12:string:3494`，offset `182206`：`Random missions (such as comments, likes, or various gifts) will appear during the PK! / Viewers from both livestreams can work together to complete them and earn even more PK Points!`
- `config.ko.apk:resources.arsc:pool:12:string:3806`，offset `191114`：`Select a question theme for the Quiz game`
- `config.ko.apk:resources.arsc:pool:12:string:4063`，offset `202678`：`Spice up streams with Interactive Games! Play Draw & Guess and Quiz Game with viewers. AI handles everything: rules, hints, answers. Just have fun with your community.`
- `config.ko.apk:resources.arsc:pool:12:string:4085`，offset `203435`：`Start Quiz game`
- `config.ko.apk:resources.arsc:pool:12:string:4404`，offset `217148`：`The PK co-op mission has ended since the opponent has surrendered.`
- `config.ko.apk:resources.arsc:pool:12:string:4405`，offset `217217`：`The PK co-op mission has ended since the streamer has surrendered.`

## 推导（由多个静态事实连接）

等待室 → 设队伍/主题/时长 → PK；双方礼物产生PK点，同时双方观众共同完成任务获得额外点；完成任务后仍可送礼积累PK点；投降终止共斗。流程主要由包体说明文案推导，DEX枚举补强任务机制命名，未证明实际调用路径。

## 推断（待运行时证实）

PK 双主播竞争与共斗任务、Army 订阅社交、直播互动游戏可能用于把直播参与行为与长期社区关系连接。此产品意图是对静态资源和契约的解释，不能证明真实用户使用方式、留存效果、收益或各区域版本实际开放策略。

## 未知与尚未覆盖

- 没有真机/模拟器界面、原始网络抓包、RTC音频质量、账号/服务端授权、真实支付/礼物结算、地域开关或人耳验收。
- 没有完整恢复所有业务调用路径；反射、混淆、native/Unity逻辑、动态加载和远程H5可能包含未覆盖实现。
- 不把未找到的基础语音房或小游戏类等同于不存在；字段/文件名不能证明执行路径。所有三类问题状态为部分回答，详见ledger。

## Demo实现与差异

Demo实现礼物1:1PK点、共同助力、任务完成后继续送礼、投降终止。每侧3次目标、固定每礼物10点、双方各30奖励、按分数决胜/平局与单局没有倒计时均为本地选择。未模拟支付、随机任务生成、AI判题或原始匹配。

- `demo/index.html`：本地可交互机制；`demo/model.mjs`：纯状态转换；`demo/model.test.mjs`：边界与重复结算测试。
- 运行：在demo目录执行 `python3 -m http.server 8765`，打开 http://localhost:8765。重置恢复固定初始场景；事件轨迹保留本局状态转换。
- 不包含登录、基础聊天等泛用功能；UI是研究用本地设计，没有复制完整原应用界面。
- 测试是重构规则验证，不是原始APK行为验收。自动化结果见 `analysis/demo-test-results.txt`；浏览器验证若有记录单独保存。

## 验证结果

模型语义测试通过（analysis/demo-test-results.txt）。受控Chrome已验证桌面1280×900与移动390×844：机制按钮流程、重置事件轨迹、无页面脚本错误、无横向溢出。记录与截图在analysis/browser-verification.json、demo-desktop.png、demo-mobile.png。没有Android原包运行时验收或真人视觉/听感验收。

REA PK类搜索受限：JADX类库存重复或与loaded class_count不一致，返回unreadable_output；保留analysis/rea-pk-search.json完整部分观察及诊断。未把失败搜索当作不存在PK类，PK机制依据独立资源文案和DEX事件标识。
