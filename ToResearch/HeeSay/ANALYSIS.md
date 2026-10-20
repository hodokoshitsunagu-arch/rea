# HeeSay 核心语音房 / 社交 / 小游戏静态研究

研究日期：2026-10-13。当前交付是证据分层的静态分析与可运行的核心机制demo；未执行Android包、登录真实账号或访问运行服务。基础登录、聊天、关注列表不作为重构目标。

## 固定包体与方法

- 包名 `com.blued.international`，版本 `5.14.5` / `514052`。
- REA对象SHA-256 `fa23b9e0bee7d646a10689d3289a84224f6c174def4a59ccb63a71e457ff2d48`。安装来源及原始归档见 `APK-INFO.json`。
- 真实REA `inspect_android_package` Evidence `ev_1e3bb03b049790916a92c54d4103175fcc275bb910291de87eb042cf1d76bb89`，解析类数 50114，resource_count 10720；JADX headless 0.7.1，jar SHA-256 `6e5eacf500b64292bfb73c49797c1958f6ee44646e43e868039ae7feb573ff75`。完整原始/归一化结果与限制保存在 `analysis/rea-package.json`，不是截断预览。
- 辅助格式感知证据：ZIP成员目录、DEX string table ULEB128解析、resources.arsc全局字符串池解析。`package-candidates.json`每项保留member/index/byte offset；类描述符只作候选，不将类名当成执行链。输出全量候选不是全量反编译源码。
- “直接证据”只表示包内声明/资源/反编译文字真实存在；“推导”是这些事实的逻辑关系；“推断”是待验证解释；“未知”保留运行与服务器空白。资源文字也可能是未启用功能或共享模块遗留。

## 核心发现与证据分层

本包不仅有附近/社交入口的名称候选，也实际携带 `com.heesay.live_sdk.live_ui.voice` 房间模块与明确规则文案。因此可以研究语音房及游戏，但静态模块存在不证明SEA地区当前上线或账号可进入。

|问题|包体直接证据|推导/推断|未知与覆盖|
|---|---|---|---|
|语音守护关系怎样产生|资源10180：GMT+0单日送给主播2500Beans成为guardian；主播可有多个guardian、用户可守护多个主播；Top1 guardian与主播成为Couple，榜单可能延迟1–2分钟。|推导：guardian是多对多资格，Couple是主播维度Top1排名投影，不能直接把两者等同互斥好友。|同分规则、隐藏分、关系更新事务、守护者资格过期、账号地域限制未知。|
|守护积分为何会变化|资源10161：1Bean=1Guardian Point，积分有效7天，于获得后第8天GMT+0午夜扣除。|推导：积分应按获得批次带到期时间，累积总量不能永久保存。|跨时区服务器时钟、退礼扣分、精确起止含当日语义没有运行核实。|
|Hot Pick有哪些服务器参数|REA `HotPickScoreConfig`真实字段rank_type、score、name、image；`VoiceHotPickConfig`有end_seconds、is_hot_pick_open、is_show_hot_pick、is_show_hot_pick_btn、score_config、time_config。资源有Hot Pick阶段禁用跨房PK提示。|推导：开放态、可见态、按钮态应分开；得分与时间可配置。|rank_type枚举含义、计分来源、胜者判定、结束后奖励未知，未硬造Hot Pick完整规则。|
|Card Battle能看到什么|资源10336明确3张常规卡+1张secret card，第二张倒计时揭示、第三张结束时揭示；10333/10401说明高分队赢；10437开局人数/参与次数字段门槛；根目录`GameProtos.proto`存在secret card合成/第四卡购买确认的事件枚举。|推导：存在分阶段信息揭示与秘密卡解锁入口。该proto包名为DAS客户端game，属于埋点描述而非对局消息协议。|卡牌点值概率、secret card权限、合成算法、结算赔率与服务器协议未知；本轮不实现虚构赌局。|
|其他非基础互动|10191把Dice/Roshambo与语音房普通评论区分计任务；GameProtos有Lion vs Tiger、免费币、轮盘与任务埋点；VoiceGameLudoUtils类名包含downloadGameFile。|推断：小游戏与任务经济相互连接，部分资源可能动态加载。|SDK或类名不能证明当前可玩游戏、下载地址有效性、支付/奖池真实性；本轮未执行动态下载。|

## 本地重构

`demo/index.html`实现语音房guardians→Top1 Couple与7日积分到期。Ari当天送2500成为候选Top1；Bo在第二天送2500，则第七日Ari的首日积分到期而Bo的仍保留，Top1切换。跨日1500+1000不触发单日2500门槛；同分时显示“并列：原包仲裁未知”，不任意选一个。

时间按研究者日编号模拟：获得当日为第0日，第7日模拟GMT+0午夜清除，对应第8个日历日。没有执行原包校验这一时刻。历史达标guardian列表保留，因为资格失效规则未知；不能把积分清空推导成资格被撤销。所有人物、点击的虚拟Beans和同步立即更新为重构选择，无支付或线上关系写入。Card Battle、Hot Pick与其它小游戏已记录证据和未知，本轮demo聚焦证据更完整的守护关系机制。

## 证据与验收范围

`analysis/evidence-index.json`索引所有真实REA调用，含Evidence ID和失败结果；`analysis/feature-ledger.json`记录逐项覆盖。APK signature、arm64 split native code、动态下发游戏、反射、RTC、服务端规则、地区开关和真人体验均未验证。Manifest权限仅表示请求能力，不表示运行授予或功能成功。

本地规则测试与浏览器状态验证是重构模型验收，不是原包验收。`demo/browser-check.json`保存桌面1280×850、手机390×844、页面错误与横向溢出检查；`desktop.png`与`mobile.png`是本地demo截图。源码模型与UI分离，支持固定场景和重置，无联网。运行方法见 `demo/README.md`。
