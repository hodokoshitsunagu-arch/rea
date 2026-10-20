# Mirrativ：核心机制静态逆向与重构边界

研究目标：Emomo 联动通话 / 联动直播与主播-观众双侧游戏任务。

包名 `com.dena.mirrativ`，版本 `11.92.1`；基准APK SHA-256 `47fdad48fc045719b3e942c87d03d12058ed0d572705efa80890fe0b38eeffc9`。版本下载来源与全部split哈希保存在 APK-INFO.json。本次没有启动Android包体、登录账号或调用原始后台。

## 方法与证据

- 实际调用 REA 6.4.0 / JADX headless MCP 0.7.1 的 inspect_android_package；完整Evidence为 `analysis/rea-package.json`，ID `ev_b7dd7e849b94abbab1f663eff125b1afc769b70432bdd9cba5365b2b96043b40`。
- 包体身份/Manifest声明是直接观察，反编译返回的成员是静态恢复事实；不把权限声明当作实际授予或已执行。
- `analysis/package-string-evidence.json`：全部APK split的DEX string_ids结构化解析，保留DEX文件、string索引和字节offset；使用显式关键词，因此负向结论仅在此搜索范围内有效。
- `analysis/resource-evidence.json`：按Android资源表嵌套chunk与字符串池解析全部split；保留APK、资源pool偏移和字符串索引。资源文案直接证明包体包含说明，不证明功能实时可用。
- `analysis/archive-inventory.json`：全部split成员清单；`feature-excerpts.json`是报告可读摘录，`feature-ledger.json`记录问题、证据类型和未知项。

- `rea-livegame-mission.json`：真实REA `inspect_android_class` Evidence `ev_52515f86ca7754591784595cbb06e8d42d3fda904270055c6b435fb8706a51b2`。

## 功能问题逐项

| 问题 | 证据级别 | 直接依据 | 限制 / 未知 |
|---|---|---|---|
| 语聊 / 联动通话与联动直播 | 包体直接证据 | CollabInvited/Requested/Accepted/Closed/ReceivedPeer 事件族；资源邀请、断线等待、取消及streaming/talk类型 | 存在静态状态表示；完整竞态、最大人数、RTC协议未知 |
| 社交 / Emomo 共场 | 包体直接证据 | CollabAvatarManager、UnityCommand$SetCollabo / SetCollaboGiftAvatarModel、EmomoClosetEquipShopAvatars | Unity形象装扮与联动候选；原始渲染动作和资产授权未恢复 |
| 游戏 / Live Game双侧任务 | 包体直接证据 | REA LiveGameMission 字段 condition、player、viewer、coinBoost；LiveGameConnected/Playing/Ended 事件族 | 支持主播和观众分别携带任务信息，奖励计算与触发条件未知 |
| 游戏 / Emomo Mahjong | 包体直接证据 | EmomoMahjongMemberAvatar(sResponse)、SetEmomoMahjongAvatarModel | 仅建立相关契约存在，麻将规则/房间玩法/执行逻辑未恢复 |

## 直接证据摘录与定位

- `com.dena.mirrativ.apk:classes.dex:string:1561`，offset `1912113`：`, collabInvited=`
- `com.dena.mirrativ.apk:classes.dex:string:6281`，offset `2074255`：`CollabAccepted`
- `com.dena.mirrativ.apk:classes.dex:string:6282`，offset `2074271`：`CollabAccepted(key=`
- `com.dena.mirrativ.apk:classes.dex:string:6288`，offset `2074420`：`CollabClosed`
- `com.dena.mirrativ.apk:classes.dex:string:6289`，offset `2074434`：`CollabClosed(key=`
- `com.dena.mirrativ.apk:classes.dex:string:6294`，offset `2074587`：`CollabInvited`
- `com.dena.mirrativ.apk:classes.dex:string:6295`，offset `2074602`：`CollabInvited(key=`
- `com.dena.mirrativ.apk:classes.dex:string:6299`，offset `2074721`：`CollabReceivedPeer`
- `com.dena.mirrativ.apk:classes.dex:string:6300`，offset `2074741`：`CollabReceivedPeer(key=`
- `com.dena.mirrativ.apk:classes.dex:string:6301`，offset `2074766`：`CollabRequested`
- `com.dena.mirrativ.apk:classes.dex:string:6302`，offset `2074783`：`CollabRequested(key=`
- `com.dena.mirrativ.apk:classes.dex:string:22168`，offset `2746336`：`Lcom/dena/mirrativ/featurecommon/bcsvr/BcsvrEvent$CollabAccepted;`
- `com.dena.mirrativ.apk:classes.dex:string:22171`，offset `2746536`：`Lcom/dena/mirrativ/featurecommon/bcsvr/BcsvrEvent$CollabClosed;`
- `com.dena.mirrativ.apk:classes.dex:string:22176`，offset `2746908`：`Lcom/dena/mirrativ/featurecommon/bcsvr/BcsvrEvent$CollabReceivedPeer;`
- `com.dena.mirrativ.apk:classes.dex:string:22177`，offset `2746979`：`Lcom/dena/mirrativ/featurecommon/bcsvr/BcsvrEvent$CollabRequested;`
- `com.dena.mirrativ.apk:classes.dex:string:22294`，offset `2755246`：`Lcom/dena/mirrativ/featurecommon/unity/CollabAvatarManager;`
- `com.dena.mirrativ.apk:classes.dex:string:22311`，offset `2756293`：`Lcom/dena/mirrativ/featurecommon/unity/SetCollaboType;`
- `com.dena.mirrativ.apk:classes.dex:string:22401`，offset `2763558`：`Lcom/dena/mirrativ/featurecommon/unity/UnityCommand$SetCollabo;`
- `com.dena.mirrativ.apk:classes.dex:string:22402`，offset `2763623`：`Lcom/dena/mirrativ/featurecommon/unity/UnityCommand$SetCollaboGiftAvatarModel;`
- `com.dena.mirrativ.apk:classes.dex:string:22406`，offset `2763911`：`Lcom/dena/mirrativ/featurecommon/unity/UnityCommand$SetEmomoMahjongAvatarModel;`
- `com.dena.mirrativ.apk:classes.dex:string:22659`，offset `2780150`：`Lcom/dena/mirrativ/mirrativapi/emomomahjong/EmomoMahjongMemberAvatarsResponse;`
- `com.dena.mirrativ.apk:classes.dex:string:28854`，offset `3038056`：`LiveGameMission(condition=`
- `com.dena.mirrativ.apk:classes.dex:string:37300`，offset `3229453`：`SetEmomoMahjongAvatarModel`
- `com.dena.mirrativ.apk:classes3.dex:string:4742`，offset `1868904`：`CollabAvatarManager.kt`
- `com.dena.mirrativ.apk:classes3.dex:string:20243`，offset `2548411`：`Lcom/dena/mirrativ/featurecommon/unity/CollabAvatarManager$Companion;`
- `com.dena.mirrativ.apk:classes4.dex:string:28563`，offset `2957323`：`LiveGameMissionStatus(coin=`
- `com.dena.mirrativ.apk:resources.arsc:pool:12:string:3873`，offset `185371`：`コラボ者が%1$s秒以内に配信を始められなかったか通信に問題があり、コラボ配信を開始できませんでした`
- `com.dena.mirrativ.apk:resources.arsc:pool:12:string:3881`，offset `185731`：`コラボ通話中`
- `com.dena.mirrativ.apk:resources.arsc:pool:12:string:3882`，offset `185752`：`コラボ通話中は / 配信の移動はできません`
- `com.dena.mirrativ.apk:resources.arsc:pool:12:string:4430`，offset `209866`：`現在コラボ通話中です。退出するとコラボ通話も終了しますがよろしいですか?`
- `com.dena.mirrativ.apk:resources.arsc:pool:221216:string:9806`，offset `553105`：`text_collab_waiting_reconnect_title`
- `com.dena.mirrativ.apk:resources.arsc:pool:221216:string:9807`，offset `553143`：`text_collab_waiting_title`
- `com.dena.mirrativ.apk:resources.arsc:pool:221216:string:9808`，offset `553171`：`text_collab_waiting_title_streaming_collab`

## 推导（由多个静态事实连接）

邀请候选 → 被邀请/接受事件 → 同场联动与Unity形象配置 → LiveGame连接/游玩事件 → LiveGameMission内player和viewer任务状态 → 结束/断线候选。事件族共现与任务字段能够建立结构联系，但没有证明任务必须在联动中运行。

## 推断（待运行时证实）

Emomo 联动通话 / 联动直播与主播-观众双侧游戏任务可能用于把直播参与行为与长期社区关系连接。此产品意图是对静态资源和契约的解释，不能证明真实用户使用方式、留存效果、收益或各区域版本实际开放策略。

## 未知与尚未覆盖

- 没有真机/模拟器界面、原始网络抓包、RTC音频质量、账号/服务端授权、真实支付/礼物结算、地域开关或人耳验收。
- 没有完整恢复所有业务调用路径；反射、混淆、native/Unity逻辑、动态加载和远程H5可能包含未覆盖实现。
- 不把未找到的基础语音房或小游戏类等同于不存在；字段/文件名不能证明执行路径。所有三类问题状态为部分回答，详见ledger。

## Demo实现与差异

Demo把Emomo邀请/接受/断线重连与双侧任务放在同一体验中，是用于研究组合机制的本地设计。各侧目标3、必须两侧全部完成、一次领取、联动结束保留轨迹均非原始规则；实际LiveGame可能独立运行。

- `demo/index.html`：本地可交互机制；`demo/model.mjs`：纯状态转换；`demo/model.test.mjs`：边界与重复结算测试。
- 运行：在demo目录执行 `python3 -m http.server 8765`，打开 http://localhost:8765。重置恢复固定初始场景；事件轨迹保留本局状态转换。
- 不包含登录、基础聊天等泛用功能；UI是研究用本地设计，没有复制完整原应用界面。
- 测试是重构规则验证，不是原始APK行为验收。自动化结果见 `analysis/demo-test-results.txt`；浏览器验证若有记录单独保存。

## 验证结果

模型语义测试通过（analysis/demo-test-results.txt）。受控Chrome已验证桌面1280×900与移动390×844：机制按钮流程、重置事件轨迹、无页面脚本错误、无横向溢出。记录与截图在analysis/browser-verification.json、demo-desktop.png、demo-mobile.png。没有Android原包运行时验收或真人视觉/听感验收。
