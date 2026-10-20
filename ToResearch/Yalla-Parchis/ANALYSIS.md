# Yalla-Parchis 核心语音房 / 社交 / 小游戏静态研究

研究日期：2026-10-13。当前交付是证据分层的静态分析与可运行的核心机制demo；未执行Android包、登录真实账号或访问运行服务。基础登录、聊天、关注列表不作为重构目标。

## 固定包体与方法

- 包名 `com.yalla.yallaparchisi`，版本 `1.5.3` / `191`。
- REA对象SHA-256 `619075f46880c04b14b6ffc299557431404270e429a9a17b5476398bd532bd51`。安装来源及原始归档见 `APK-INFO.json`。
- 真实REA `inspect_android_package` Evidence `ev_3ba0a0afa5f2ff8bafd072267ce8084dbed4f06fc1ac7640bb50179e8a3b1167`，解析类数 18186，resource_count 2790；JADX headless 0.7.1，jar SHA-256 `6e5eacf500b64292bfb73c49797c1958f6ee44646e43e868039ae7feb573ff75`。完整原始/归一化结果与限制保存在 `analysis/rea-package.json`，不是截断预览。
- 辅助格式感知证据：ZIP成员目录、DEX string table ULEB128解析、resources.arsc全局字符串池解析。`package-candidates.json`每项保留member/index/byte offset；类描述符只作候选，不将类名当成执行链。输出全量候选不是全量反编译源码。
- “直接证据”只表示包内声明/资源/反编译文字真实存在；“推导”是这些事实的逻辑关系；“推断”是待验证解释；“未知”保留运行与服务器空白。资源文字也可能是未启用功能或共享模块遗留。

## 核心发现与证据分层

Android Java层主要包含引擎/平台桥，玩法证据的重要来源是 Unity `assets/bin/Data/data.unity3d` 中真实 `TextAsset: englishlocalization`。`unity-text-assets.json`保留57个TextAsset的原内容、来源member与Unity path_id；`selected-feature-resources.json`保留精确键与值。IL2CPP metadata v31解码32200条字符串只作为静态名称/文字补充，不等于 native方法反编译。

|问题|包体直接证据|推导/推断|未知与覆盖|
|---|---|---|---|
|游戏模式的区别|`ids_ui_100`说明1V1与4 Player各有Classic和Spanish变体；`ids_ui_new_team_rule_info`说明队伍两位玩家的4枚棋子全部到终点才胜。|推导：模式、人数和组队胜利条件是独立维度。|区域实际开放模式、排位配置、2V2归属与服务器裁决未知。|
|双骰出巢|`ids_ui_66`：单骰5或双骰之和5可出一子，双5可出两子。|推导：双骰可作为独立额度，也存在和数的特殊出巢条件。|强制出巢优先级、不能动时额度消费与动画规则未知。|
|路障如何改变移动|`ids_ui_70`：同色两子同格形成路障，任何玩家都不能穿越；不能动则回合无效；掷双数强制拆自己的路障。|推导：同色叠子既保护占位又妨碍己方，双数将拆路障变为行动约束。|终点轨道上的叠子、双骰分配次序、所有不能动时自动跳过实现未知。|
|吃子与奖励|`ids_ui_72`：灰色星格安全不可吃；`ids_ui_76`及`ids_ui_ludo_guide_step_4_content`：吃子获得20步奖励；相邻规则给入终点奖励10步。|推导：吃子后需选择奖励步数给哪枚棋子，策略不只是掷骰。|安全格具体索引、捕获多子、奖励连续触发服务器行为未知。|
|三次双数的模式差异|`ids_ui_match_tip6` Spanish把最后移动棋子送回巢；`ids_ui_match_tip7` Classic把最前棋子送回巢。|推导：相同骰子历史在两种模式下应引用不同目标身份，不能使用同一处罚对象。|终点棋子能否受罚、未移动过时回退对象未知。|
|语音房和游戏社交|`ids_ui_mode1`6人视频Classic、`ids_ui_mode3`8人音频Classic；archive有游戏ludochat、quickchat、invitechatroom、spectator等独立prefab；englishlocalization含room相关文案。|推断：游戏观战/房间邀请/聊天与语音房形成入口关系。仅prefab名不能证明完整功能链。|语音供应商运行、麦位权限、spectator同步和线上礼物效果未知。|

## 本地重构

`demo/index.html`实现双骰额度、拆己方路障、不可穿越路障、吃子20步奖励、以及Classic/Spanish的三次双数差异。模式按钮和预置吃子场景都可重复重置。初始同色两枚在10形成路障：点击2+2，再移动18上的棋子会被“必须拆除己方路障”拒绝；移动10上的其中一枚可拆除。吃子场景掷1+2，用2额度捕获12上的B，获得20步奖励。

棋盘压缩为0–64、灰绿色安全格、所有玩家共用坐标、每队4枚、固定骰子按钮、无服务器裁决是重构选择。没有恢复真实棋盘偏移或native IL2CPP逻辑；未实现完整自动跳过、队伍终局、全部比赛和商店，不能标记成原版Parchis复制完成。

## 证据与验收范围

`analysis/evidence-index.json`索引所有真实REA调用，含Evidence ID和失败结果；`analysis/feature-ledger.json`记录逐项覆盖。APK signature、arm64 split native code、动态下发游戏、反射、RTC、服务端规则、地区开关和真人体验均未验证。Manifest权限仅表示请求能力，不表示运行授予或功能成功。

本地规则测试与浏览器状态验证是重构模型验收，不是原包验收。`demo/browser-check.json`保存桌面1280×850、手机390×844、页面错误与横向溢出检查；`desktop.png`与`mobile.png`是本地demo截图。源码模型与UI分离，支持固定场景和重置，无联网。运行方法见 `demo/README.md`。
