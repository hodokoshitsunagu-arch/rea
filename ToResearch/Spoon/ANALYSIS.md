# Spoon：核心机制静态逆向与重构边界

研究目标：Lucky Box 打赏挑战、Quiz Gift、LiveCall 收礼客人与 Fan Board。

包名 `co.spoonme`，版本 `11.20.0`；基准APK SHA-256 `3af6243d07193bd4a8441cfd2b19215c2c5cd46978534f617badbd174a3aa592`。版本下载来源与全部split哈希保存在 APK-INFO.json。本次没有启动Android包体、登录账号或调用原始后台。

## 方法与证据

- 实际调用 REA 6.4.0 / JADX headless MCP 0.7.1 的 inspect_android_package；完整Evidence为 `analysis/rea-package.json`，ID `ev_5b0e712bf5678648d97c6824c768e85e31054bbfd98e602e8f6e9493afb12acf`。
- 包体身份/Manifest声明是直接观察，反编译返回的成员是静态恢复事实；不把权限声明当作实际授予或已执行。
- `analysis/package-string-evidence.json`：全部APK split的DEX string_ids结构化解析，保留DEX文件、string索引和字节offset；使用显式关键词，因此负向结论仅在此搜索范围内有效。
- `analysis/resource-evidence.json`：按Android资源表嵌套chunk与字符串池解析全部split；保留APK、资源pool偏移和字符串索引。资源文案直接证明包体包含说明，不证明功能实时可用。
- `analysis/archive-inventory.json`：全部split成员清单；`feature-excerpts.json`是报告可读摘录，`feature-ledger.json`记录问题、证据类型和未知项。

- `rea-luckybox-info.json`：真实REA `inspect_android_class` Evidence `ev_1ede51c0f24fc18e6817881b85e65dbc26da3a0d504fd57e55159e0765467312`。
- `rea-luckybox-tostring.json`：真实REA `inspect_android_method` Evidence `ev_be3fe9577771aa9b36728ea1eeae972e6f423283bb5f6c27594e614aa6a0b0bf`。
- `rea-package-blocked.json`：保留的一次受限调用/错误诊断，不用它证明原始功能。

## 功能问题逐项

| 问题 | 证据级别 | 直接依据 | 限制 / 未知 |
|---|---|---|---|
| 语聊 / LiveCall 客人收礼 | 包体直接证据 | LiveChatMessage$LiveCallGuestDonation、WalaLiveCallDonation 与资源 Guests can receive donations through Lucky Boxes sent by listeners. | 类/文案证明存在该表示；人数、主持权限、RTC质量未知 |
| 游戏 / Lucky Box | 包体直接证据 | Create/Accept/Result 消息族；REA WalaLuckyBoxInfo 的 boxCount、amount、message；资源文案“可选择最多5盒”、失败仅10%。 | 已恢复静态契约与文案，不证明线上所有地区开放 |
| 游戏 / Quiz Gift | 包体直接证据 | Donation$Quiz、Send a quiz to your streamer…、失败仅10% spoons文案 | 具体题型、时限、判题与出题配额未知 |
| 社交 / Fan Board | 包体直接证据 | ChannelFanBoard 深链、ViewModel、WelcomeFanBoard 编辑及 fanboard_write/visit | 表示频道粉丝留言入口；社区可见性和审核未知 |

## 直接证据摘录与定位

- `co.spoonme.apk:classes.dex:string:18221`，offset `8372388`：`Lco/spoonme/common/model/chat/LiveChatMessage$LiveCallGuestDonation;`
- `co.spoonme.apk:classes.dex:string:18436`，offset `8384882`：`Lco/spoonme/core/model/deeplink/DeepLink$ChannelFanBoard;`
- `co.spoonme.apk:classes2.dex:string:959`，offset `8937210`：`()Lco/spoonme/core/model/chat/response/eventpayload/WalaLuckyBoxInfo;`
- `co.spoonme.apk:classes2.dex:string:960`，offset `8937281`：`()Lco/spoonme/core/model/chat/response/eventpayload/WalaLuckyBoxResultDetail;`
- `co.spoonme.apk:classes2.dex:string:1288`，offset `8960389`：`(ILjava/lang/String;I)Lco/spoonme/core/model/chat/response/eventpayload/WalaLuckyBoxInfo;`
- `co.spoonme.apk:classes2.dex:string:1293`，offset `8960676`：`(ILjava/lang/String;IIILco/spoonme/core/model/chat/response/eventpayload/WalaLuckyBoxInfo;Lco/spoonme/core/model/chat/response/eventpayload/common/WalaSender;JLy3n;)V`
- `co.spoonme.apk:classes2.dex:string:1297`，offset `8961213`：`(ILjava/lang/String;IIILco/spoonme/core/model/chat/response/eventpayload/common/WalaSender;Lco/spoonme/core/model/chat/response/eventpayload/WalaLuckyBoxResultDetail;Ly3n;)V`
- `co.spoonme.apk:classes2.dex:string:1552`，offset `8990006`：`(Laa6;)Lco/spoonme/core/model/chat/response/eventpayload/WalaLuckyBoxResultDetail;`
- `co.spoonme.apk:classes2.dex:string:5121`，offset `9116295`：`BeforeOpen(selectedLuckyBoxIndex=`
- `co.spoonme.apk:classes2.dex:string:5614`，offset `9126828`：`ChannelFanBoard`
- `co.spoonme.apk:classes2.dex:string:5615`，offset `9126845`：`ChannelFanBoard(userId=`
- `co.spoonme.apk:classes2.dex:string:5910`，offset `9133304`：`CreateLuckyBoxReq(targetId=`
- `co.spoonme.apk:classes2.dex:string:5911`，offset `9133333`：`CreateLuckyBoxReq.kt`
- `co.spoonme.apk:classes2.dex:string:8113`，offset `9175086`：`LIVE_LUCKYBOX_CREATE`
- `co.spoonme.apk:classes2.dex:string:8114`，offset `9175108`：`LIVE_LUCKYBOX_RESULT`
- `co.spoonme.apk:classes2.dex:string:11465`，offset `9250677`：`Lco/spoonme/core/model/http/ReqLiveCallGuestDonation;`
- `co.spoonme.apk:classes2.dex:string:11842`，offset `9270815`：`Lco/spoonme/core/model/live/game/Donation$Quiz$Creator;`
- `co.spoonme.apk:classes2.dex:string:11843`，offset `9270872`：`Lco/spoonme/core/model/live/game/Donation$Quiz;`
- `co.spoonme.apk:classes2.dex:string:18142`，offset `9414845`：`LiveCallGuestDonationResp(presentSpoon=`
- `co.spoonme.apk:classes2.dex:string:36295`，offset `9693252`：`[Lco/spoonme/core/model/live/game/Donation$Quiz;`
- `co.spoonme.apk:classes2.dex:string:38432`，offset `9750418`：`co.spoonme.core.network.model.http.CreateLuckyBoxReq`
- `co.spoonme.apk:classes2.dex:string:46882`，offset `10083156`：`live_luckybox_create`
- `co.spoonme.apk:resources.arsc:pool:12:string:4132`，offset `203517`：`Guests can receive donations through Lucky Boxes sent by listeners.`
- `co.spoonme.apk:resources.arsc:pool:12:string:5092`，offset `231580`：`Send a quiz to your streamer and make them get your donated spoons!`
- `co.spoonme.apk:resources.arsc:pool:12:string:5174`，offset `233939`：`Sorry! Only 10%% of the spoons sent by %1$s have been rewarded to %2$s`
- `co.spoonme.apk:resources.arsc:pool:12:string:5561`，offset `249723`：`Unfortunately, only 10%% of spoons with the quiz sent from %1$s were sent to %2$s`
- `co.spoonme.apk:resources.arsc:pool:12:string:5790`，offset `257573`：`You can choose up to 5 boxes. Only 10% of spoons will be rewarded if the Lucky box is not drawn.`

## 推导（由多个静态事实连接）

听众创建挑战 → LuckyBoxCreate/Accept 消息候选 → 主播或客人接受 → UI 的选择盒子入口 / BeforeOpen → Result 及 isSuccess 结果模型。该顺序是由命名、类型与页面共现推导的候选流程，未追踪所有真实调用边。

## 推断（待运行时证实）

Lucky Box 打赏挑战、Quiz Gift、LiveCall 收礼客人与 Fan Board可能用于把直播参与行为与长期社区关系连接。此产品意图是对静态资源和契约的解释，不能证明真实用户使用方式、留存效果、收益或各区域版本实际开放策略。

## 未知与尚未覆盖

- 没有真机/模拟器界面、原始网络抓包、RTC音频质量、账号/服务端授权、真实支付/礼物结算、地域开关或人耳验收。
- 没有完整恢复所有业务调用路径；反射、混淆、native/Unity逻辑、动态加载和远程H5可能包含未覆盖实现。
- 不把未找到的基础语音房或小游戏类等同于不存在；字段/文件名不能证明执行路径。所有三类问题状态为部分回答，详见ledger。

## Demo实现与差异

Demo引用有文案证据的“可选择最多5盒”和失败10%奖励。文案没有建立“总盒数一定为5”或“每次只能选1盒”。固定5盒、100 spoons、答案第3盒、向下取整、接受后选一个盒子、取消策略均是本地重构选择，概率、资金冻结/退款与服务端结算未恢复。

- `demo/index.html`：本地可交互机制；`demo/model.mjs`：纯状态转换；`demo/model.test.mjs`：边界与重复结算测试。
- 运行：在demo目录执行 `python3 -m http.server 8765`，打开 http://localhost:8765。重置恢复固定初始场景；事件轨迹保留本局状态转换。
- 不包含登录、基础聊天等泛用功能；UI是研究用本地设计，没有复制完整原应用界面。
- 测试是重构规则验证，不是原始APK行为验收。自动化结果见 `analysis/demo-test-results.txt`；浏览器验证若有记录单独保存。

## 验证结果

模型语义测试通过（analysis/demo-test-results.txt）。受控Chrome已验证桌面1280×900与移动390×844：机制按钮流程、重置事件轨迹、无页面脚本错误、无横向溢出。记录与截图在analysis/browser-verification.json、demo-desktop.png、demo-mobile.png。没有Android原包运行时验收或真人视觉/听感验收。
