# SUGO 核心语音房 / 社交 / 小游戏静态研究

研究日期：2026-10-13。当前交付是证据分层的静态分析与可运行的核心机制demo；未执行Android包、登录真实账号或访问运行服务。基础登录、聊天、关注列表不作为重构目标。

## 固定包体与方法

- 包名 `com.voicemaker.android`，版本 `2.52.0.1` / `326`。
- REA对象SHA-256 `24e683f9dce6d6dd83a53dc4d84768a36bb2e96f63173ba2abcaec8052673ae2`。安装来源及原始归档见 `APK-INFO.json`。
- 真实REA `inspect_android_package` Evidence `ev_8a0c842e65bdb722f4363e341491f3079364ce14bef2648856fe9ab484c6a98f`，解析类数 31643，resource_count 8928；JADX headless 0.7.1，jar SHA-256 `6e5eacf500b64292bfb73c49797c1958f6ee44646e43e868039ae7feb573ff75`。完整原始/归一化结果与限制保存在 `analysis/rea-package.json`，不是截断预览。
- 辅助格式感知证据：ZIP成员目录、DEX string table ULEB128解析、resources.arsc全局字符串池解析。`package-candidates.json`每项保留member/index/byte offset；类描述符只作候选，不将类名当成执行链。输出全量候选不是全量反编译源码。
- “直接证据”只表示包内声明/资源/反编译文字真实存在；“推导”是这些事实的逻辑关系；“推断”是待验证解释；“未知”保留运行与服务器空白。资源文字也可能是未启用功能或共享模块遗留。

## 核心发现与证据分层

|问题|包体直接证据|推导/推断|未知与覆盖|
|---|---|---|---|
|语音房PK怎样形成持续活动|资源12521明确随机匹配对手、每轮5分钟、5分钟冷却、循环直到主动停止；11331有冷却再匹配提示。|推导：这是持续轮转的节目机制，不仅是一次性送礼排行榜。|实际随机匹配池、配平、地区开关、退出处罚、断线恢复均未知。|
|换麦会不会抹掉阵营分数|资源10380说明麦位显示用户本轮收礼总量，换用户时重新计算；14179说明两组麦位累计值不受上下麦影响，并提到麦位值重置为零。|推导：至少需要把阵营历史累计和当前麦用户显示分开。demo采用当前用户本轮个人积分作麦位显示；这个细节是重构选择。|文本存在“重新计算”与“归零”细节差异，未还原原生计分实现；跨队移动如何归属未知。|
|跨房PK的代码边界|REA `rea-pk-api-class.json` 观察到 `PKApiService` 14个普通方法；`i(long, PartySeat.CrossRoomPKTemplate, long, long, int, qy1)`显示模板类型参数。DEX有acceptPKInvite、auditRoomPkInvite、cancelCrossRoomPkMatch等来源类。|推断：客户端存在邀请/模板/匹配多个动作，模板不是纯展示文字。仅类名不能证明具体执行路径。|序列化后的真实RPC流量、服务器裁决、并发冲突未知；方法 `i` 反编译直接显示构建 `SendPKInviteRequest`，包含模板入参，并经 `grpcHttpCall` 包装传递，包装超时常量15000ms。Evidence `ev_34a9b34b1a0739db6ec6541b5e6104b9f8ef0002d9272feb08c63ca117974af7`；混淆builder方法g/f/j/e/h/i的字段名保持未知。|
|社交关系是否嵌入房间|资源包含Couple专用入场效果、情侣麦位、关系唯一性/解除请求、家族任务、转让领导等提示；选中资源13936明确Couple seats与stage seats主题。|推断：关系身份会投射到房间席位与可见装扮，家族提供持续社群组织。|门槛配置、权限算法、邀请同意边界、活跃度统计与服务端关系真实性未知。|
|有哪些非基础小游戏|资源8571直接说明Super winner：房主发起、报名入口费用、倒计时结束后人数大于2自动开始；另有Ludo 2V2组队类与Unity资产。|推导：报名与锁定人数阶段有状态门槛；不能只看到Unity/Ludo SDK就声称恢复游戏。|随机算法、完整Super winner结算/退款比例及Ludo规则没有在本轮代码核实，未制作虚假的原版结算。|

## 本地重构

`demo/index.html`提供“麦位 vs 阵营双计分”及PK/冷却轮转。点击模拟礼物→切换Nora上麦→观察当前麦位分数归零但阵营累计保留；前进5分钟进入冷却，此时礼物计分被拒绝；再次前进进入新轮；停止后不再自动重启。核心模型在 `model.mjs`，界面在 `app.mjs`。本地没有RTC、支付、线上随机对手。

人物、+100礼物值、左右两席、清空新轮个人积分、对手匹配时刻及计分事件都是重构选择。无声的状态机不能证明原应用语音质量或服务器一致性。社交与Super winner已建立静态发现清单，本轮demo不覆盖其全部玩法。

## 残余问题

静态路径和资源均无法证明 LATAM 与 SEA 独立开关。全球包身份不等于所有地区功能同时启用。一次 `search_android_classes MicPk` 在120秒限时超时，完整失败原因及partial_observation保存在 `rea-micpk-classes.json`；随后改用DEX已解析确切类名成功聚焦。没有重复超时请求或用空搜索宣称功能不存在。

## 证据与验收范围

`analysis/evidence-index.json`索引所有真实REA调用，含Evidence ID和失败结果；`analysis/feature-ledger.json`记录逐项覆盖。APK signature、arm64 split native code、动态下发游戏、反射、RTC、服务端规则、地区开关和真人体验均未验证。Manifest权限仅表示请求能力，不表示运行授予或功能成功。

本地规则测试与浏览器状态验证是重构模型验收，不是原包验收。`demo/browser-check.json`保存桌面1280×850、手机390×844、页面错误与横向溢出检查；`desktop.png`与`mobile.png`是本地demo截图。源码模型与UI分离，支持固定场景和重置，无联网。运行方法见 `demo/README.md`。
