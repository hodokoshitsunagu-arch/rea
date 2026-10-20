# Falla 核心语音房 / 社交 / 小游戏静态研究

研究日期：2026-10-13。当前交付是证据分层的静态分析与可运行的核心机制demo；未执行Android包、登录真实账号或访问运行服务。基础登录、聊天、关注列表不作为重构目标。

## 固定包体与方法

- 包名 `com.juhaoliao.vochat`，版本 `V9.23.0` / `9230`。
- REA对象SHA-256 `c927d0193643e097f0287188924aeb8dafefb5c66be91462bc3d61f4bc59dc59`。安装来源及原始归档见 `APK-INFO.json`。
- 真实REA `inspect_android_package` Evidence `ev_b912cfe3008fec64e3cf78e410966217198ae0879ebe7c7019aa1846c91ea606`，解析类数 20751，resource_count 8241；JADX headless 0.7.1，jar SHA-256 `6e5eacf500b64292bfb73c49797c1958f6ee44646e43e868039ae7feb573ff75`。完整原始/归一化结果与限制保存在 `analysis/rea-package.json`，不是截断预览。
- 辅助格式感知证据：ZIP成员目录、DEX string table ULEB128解析、resources.arsc全局字符串池解析。`package-candidates.json`每项保留member/index/byte offset；类描述符只作候选，不将类名当成执行链。输出全量候选不是全量反编译源码。
- “直接证据”只表示包内声明/资源/反编译文字真实存在；“推导”是这些事实的逻辑关系；“推断”是待验证解释；“未知”保留运行与服务器空白。资源文字也可能是未启用功能或共享模块遗留。

## 核心发现与证据分层

|问题|包体直接证据|推导/推断|未知与覆盖|
|---|---|---|---|
|语音房如何承载小游戏|`assets/game/gameConfig.json`直接列出PK、幸运袋、骰子、猜拳/数字面板；`show`与gameType为静态默认配置；Ludo/UNO/Domino/Okey/Crush/Carrom/Jackaroo条目带独立gameId。|推导：房间菜单编排原生互动和外部游戏入口，不是一个单独的Ludo应用。|服务端覆盖静态配置的方式、哪些地区开放、动态下载规则与真实SDK运行未知。`show:true`不证明线上用户可见。|
|Ludo匹配怎样回到房间|REA反编译 `LudoMatchHelper.a`：默认gameId `1468180338417074177`，默认gamePlatform=1；WebRequest送gameId/gamePlatform，经RoomApi得到GroupInfo；gid≤0显示未匹配提示；成功组装`room_match_extra`/MatchModel。|推导：游戏匹配的返回身份是房间gid，并把游戏信息带入房间上下文。|服务端路由、超时重试、安全性、组队分配与房间进入后的真实行为未知；JADX有type inference警告保留。|
|Quick Ludo独特规则|resources.arsc全局字符串7024：先吃掉对手至少一子才能进入终点轨道；掷6/吃子/精确到终点获得再次掷骰；三次连续6结束回合；快速模式一枚到终点即可，经典需全部。|推导：快速局把捕获与冲刺绑定，适合短局重复参与。|安全格坐标、完整棋盘映射、不同玩家偏移、服务器骰子公平性未知。|
|特殊道具|同一规则7024说明金骰必出6、磁铁前进8步直到阻挡、炸弹炸8步并把对手送回基地。|推断：道具改变骰子与占位风险，可能影响局内协作/对抗。|付费与获取概率、使用窗口、爆炸路径、安全格例外未知，demo没有硬造这些例外。|
|房间社交的特殊对象|资源9258明确Queen不能送幸运袋礼物；7926、9059、9062明确礼物幸运袋票与房间发送提示。|推断：Queen身份与礼物分发存在权限边界。|Queen产生/失效、奖池规则、唯一性、抢袋公平分配未知；未把字符串扩写成完整女王玩法。|

## 本地重构

`demo/index.html`实现Quick Ludo“先吃子后冲线”的规则实验。默认玩家1在48，掷4尝试进入52时被规则阻挡。吃子场景玩家1在2、玩家2在3，掷1吃子后对手回基地，自己保留掷骰机会。连续三次6停止回合；终点57只能精确到达。

每人一枚棋子、0–51外圈/52–57终点、模拟安全格、固定点数按钮均为研究者缩略选择，不是原版映射。资源只给文字规则，本轮不声称已恢复原版完整棋盘、4人局、道具商城、在线游戏SDK、语音服务。demo仅实现快速模式；经典规则/道具作为研究条目保留。

## 证据与验收范围

`analysis/evidence-index.json`索引所有真实REA调用，含Evidence ID和失败结果；`analysis/feature-ledger.json`记录逐项覆盖。APK signature、arm64 split native code、动态下发游戏、反射、RTC、服务端规则、地区开关和真人体验均未验证。Manifest权限仅表示请求能力，不表示运行授予或功能成功。

本地规则测试与浏览器状态验证是重构模型验收，不是原包验收。`demo/browser-check.json`保存桌面1280×850、手机390×844、页面错误与横向溢出检查；`desktop.png`与`mobile.png`是本地demo截图。源码模型与UI分离，支持固定场景和重置，无联网。运行方法见 `demo/README.md`。
