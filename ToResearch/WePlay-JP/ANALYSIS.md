# WePlay-JP 核心机制静态逆向与重构

分析日期：2026-10-13。包名 `com.wejoy.weplay.jp`，版本 `6.12.0` / 61207。REA基准base APK `apks/com.wejoy.weplay.jp.apk`，SHA-256 `9b86689be30cc4e3dbb4a16ef268a6ac5ca275f58c37ed41cd073c3b89884e3a`。原始XAPK、split和来源不变，见 [APK-INFO.md](APK-INFO.md)。

## 结果与分析边界

重点：**绘画接力 / 抢麦资格 / 房内社交**。语音房、小游戏、社交三个问题均为部分回答；并未完整恢复所有业务实现。此轮交付有证据锚点的独特玩法研究和本地可运行实验，不包含基础登录/聊天/关注列表。

REA不会执行APK。没有Android真机/模拟器、真实账号、原网络流量、RTC、支付或服务器验收。字符串/类的存在不等于线上启用；“未找到”仅限已检索边界。

## 方法与完整REA Evidence

- 实际REA CLI 6.4.0，JADX MCP 0.7.1。包概览 Evidence `ev_4002a8fa4996b713d0a85dfc9bd84e2103d0244f67535456d46a74db7edf95e0`，见 [analysis/rea-package.json](analysis/rea-package.json)。原始 producer响应、请求、目标hash、JARhash与 limitations 均保留。
- JAR SHA-256 `6e5eacf500b64292bfb73c49797c1958f6ee44646e43e868039ae7feb573ff75` 与本仓库审计发布相同；使用现有Java26.0.1与临时CLI，不改全局配置。
- `analysis/archive-members.json`：所有已选APK split成员、大小、CRC。`dex-class-inventory.json`/`package-feature-strings.json`：DEX字符串表、类描述符和Android字符串池，带成员/索引/字节偏移。类描述符不是REA选择器；不将DEX行数与JADX parsed class数混同。
- `analysis/resource-rules.json`：格式感知解析ResTable简单string entry，关联resource ID、key、全局string pool及configuration原始字节。复杂bag显式跳过；配置保留原始hex，未猜测不支持的语言编码。
- `analysis/packaged-database.json`：`assets/databases/wespy.sqlite` 只读immutable导出的表架构和现有行。表名只能证明静态数据结构，不证明后端契约或真实用户数据。
- `analysis/feature-ledger.json` 和 `evidence-index.json` 逐项记录来源、证据类型、置信边界及真实失败。辅助Python产物不是REA Evidence。脚本已保存以供重新生成。

- [rea-draw-chain-class.json](analysis/rea-draw-chain-class.json)：inspect_android_class / error；invalid_request
- [rea-package-sandbox-error.json](analysis/rea-package-sandbox-error.json)：inspect_android_package / error；capability_unavailable
- [rea-package.json](analysis/rea-package.json)：inspect_android_package / success；ev_4002a8fa4996b713d0a85dfc9bd84e2103d0244f67535456d46a74db7edf95e0
- [rea-relay-decode-method.json](analysis/rea-relay-decode-method.json)：inspect_android_method / success；ev_844237c459bb84f6556961716376292f664727f94aaacf986d5610aba5015c4d
- [rea-relay-search.json](analysis/rea-relay-search.json)：search_android_classes / success；ev_867b1cbe3aeb6d6c48b20404ffd009f72003facf00c152bef9f705cdf44b9c53
- [rea-relay-state-class.json](analysis/rea-relay-state-class.json)：inspect_android_class / success；ev_2c8f2a8e330fcbb590178d60fe94ee7b60e0674f1296e4aacd85d3a6441a10b3

最初沙箱调用因Swift模块缓存权限失败，允许静态工具调用后成功；`TotalGameStat$DrawChain` 使用DEX形式而非provider标识导致一次invalid_request。后续先查询REA标识，再检索有效类，不把失败当成模块不存在。

## 包体直接证据

以下只断言字节中含有文本和声明；资源解释的业务行为还需代码/原运行交叉验证。

| 标签 | 资源ID / key | APK / 位置 | 原文 |
|---|---|---|---|
| R01 | `0x7f130c3b` / `draw_relay` | `apks/com.wejoy.weplay.jp.apk:resources.arsc` entry @4898944; pool index 14495, offset 750121 | Draw& Guess Solitaire |
| R02 | `0x7f130c3b` / `draw_relay` | `apks/com.wejoy.weplay.jp.apk:resources.arsc` entry @5203540; pool index 22063, offset 1028162 | お絵描きリレー |
| R03 | `0x7f130c57` / `draw_relay_select_dialog_title` | `apks/com.wejoy.weplay.jp.apk:resources.arsc` entry @4899392; pool index 13886, offset 731689 | Choose a word to draw |
| R04 | `0x7f130c57` / `draw_relay_select_dialog_title` | `apks/com.wejoy.weplay.jp.apk:resources.arsc` entry @5203972; pool index 24271, offset 1138464 | ワードでお絵描き |
| R05 | `0x7f130c59` / `draw_relay_stage_guess` | `apks/com.wejoy.weplay.jp.apk:resources.arsc` entry @4899424; pool index 15239, offset 770106 | Guessing |
| R06 | `0x7f130c59` / `draw_relay_stage_guess` | `apks/com.wejoy.weplay.jp.apk:resources.arsc` entry @5204004; pool index 24298, offset 1139851 | ワード当て段階 |
| R07 | `0x7f130c5d` / `draw_relay_status_upload_draw` | `apks/com.wejoy.weplay.jp.apk:resources.arsc` entry @4899488; pool index 14500, offset 750226 | Drawing uploading |
| R08 | `0x7f130c5d` / `draw_relay_status_upload_draw` | `apks/com.wejoy.weplay.jp.apk:resources.arsc` entry @5204068; pool index 27254, offset 1264227 | 絵をアップロード中 |
| R09 | `0x7f130c42` / `draw_relay_cant_change_room_when_gaming` | `apks/com.wejoy.weplay.jp.apk:resources.arsc` entry @4899056; pool index 19643, offset 918326 | You can't change rooms in the game |
| R10 | `0x7f130c42` / `draw_relay_cant_change_room_when_gaming` | `apks/com.wejoy.weplay.jp.apk:resources.arsc` entry @5203652; pool index 22879, offset 1073544 | ゲーム中のためルームを変更できません |
| R11 | `0x7f130c43` / `draw_relay_cant_send_when_watch` | `apks/com.wejoy.weplay.jp.apk:resources.arsc` entry @4899072; pool index 19647, offset 918535 | You can't send it while spectating |
| R12 | `0x7f130c43` / `draw_relay_cant_send_when_watch` | `apks/com.wejoy.weplay.jp.apk:resources.arsc` entry @5203668; pool index 27403, offset 1269224 | 観戦状態では送信できませんよ |
| R13 | `0x7f130c3f` / `draw_relay_are_everyone_satisfied_with_word_relay` | `apks/com.wejoy.weplay.jp.apk:resources.arsc` entry @4899008; pool index 13327, offset 713562 | Are you satisfied with the Word Solitaire? |
| R14 | `0x7f130c3f` / `draw_relay_are_everyone_satisfied_with_word_relay` | `apks/com.wejoy.weplay.jp.apk:resources.arsc` entry @5203604; pool index 22104, offset 1030979 | このお絵描きリレーについてどう思いますか？ |
| R15 | `0x7f130c63` / `draw_relay_x_praise_x` | `apks/com.wejoy.weplay.jp.apk:resources.arsc` entry @4899584; pool index 12534, offset 685507 | %1$s sent likes to %2$s |
| R16 | `0x7f130c63` / `draw_relay_x_praise_x` | `apks/com.wejoy.weplay.jp.apk:resources.arsc` entry @5204164; pool index 21188, offset 977820 | %1$sは%2$sにいいねしました |
| R17 | `0x7f131a04` / `musichum_vr_solo_practice_desc` | `apks/com.wejoy.weplay.jp.apk:resources.arsc` entry @4955072; pool index 17896, offset 850494 | Solo games don't count toward Records or Rank Pts. If another player joins midway, the official Mic Grab will start from the next song. |
| R18 | `0x7f131a04` / `musichum_vr_solo_practice_desc` | `apks/com.wejoy.weplay.jp.apk:resources.arsc` entry @5255604; pool index 21394, offset 989640 | 1人で開始した場合、戦績・ランクポイントは加算されません。途中でプレイヤーが参加した場合は、次のお題から正式対戦となります。 |
| R19 | `0x7f130b9d` / `double_spies_spy_words_not_exceed_12_characters` | `apks/com.wejoy.weplay.jp.apk:resources.arsc` entry @4896416; pool index 19363, offset 904694 | When there are 2 spies, the spy words must not exceed %1$d characters |
| R20 | `0x7f130b9d` / `double_spies_spy_words_not_exceed_12_characters` | `apks/com.wejoy.weplay.jp.apk:resources.arsc` entry @5202676; pool index 22563, offset 1057215 | ウルフダブルワードの時にウルフのワードが%1$d文字を超えてはいけません |

## 推导与派生代码

REA DrawRelaySingleInfo.i 从 protobuf 列表读取 chainNum、selectUid、prevImgData、wordInfo、availableWords、changeWordCoin/changeWordCount/canChangeWord、currentUid/prevUid/prevWord、赞/踩计数、isVoteOk/isShowOk 和展示消息列表。这直接支持接力链与前一棒、换词和反馈的数据契约；不恢复服务端排座/阶段机。返回 Java 带 type inference 警告，完整文本不等于语义无损。

REA Java/smali是反编译派生表示。方法/字段来自静态解析，不是观察到的调用；反射、native、远程H5与动态加载仍未覆盖。JADX警告保留在完整Evidence。

## 推断

游戏中的信息差、共创/竞争与结算反馈可能形成语音房社交循环。这是产品解释；包体不能证明转化率、留存、效果或不同地区的实际运营。

## 未知项

绘画接力服务端轮序、观众权限、词库来源、计时/价格、结算得分与反作弊；双人画布的笔迹合并与实时协议；狼人 Unity/IL2CPP 状态机；Mic Grab 音频识别/评分。

真实RTC供应链、声音质量、服务器权威状态、反作弊、后台重试、奖励价格与地域灰度均未知。Manifest RECORD_AUDIO等权限只证明声明；provider未验证签名与split运行兼容性。

## Demo与规则归属

[demo/index.html](demo/index.html) · [运行说明](demo/README.md)。绘画接力：选择词卡 → 画图 → 下一位猜图 → 再绘画 → 最终整链揭晓 → 点赞。

四人固定场景、词卡内容、绘画/猜测交替顺序、前一棒仅在当前页面展示、每位一次点赞是重构选择。没有恢复服务端公平性、长度限制、轮数、换词金币结算或原始 UI。

可视化状态保留在浏览器内存；参与者/结果全为模拟。不是原App UI复刻，没有RTC、真实麦克风、匹配、商业曲库或多人服务。客户端可见投影用于展示信息差，不提供真实权限或秘密安全保证。

## 验证与覆盖

`node demo/test.mjs` 已通过。测试验证本地规则的阶段限制、重复操作与私密投影/排位资格边界；不验证原App。桌面/手机浏览器验证单独记录于 `analysis/browser-verification.json`，最终覆盖见该文件。未做真机、真人视觉验收、人耳/音质、线上多人、账号授权或生产验收。

最终受控Chrome验证：1280×900桌面及390×844手机完整流程/重置通过，无页面脚本错误、无横向溢出；截图已检查可读性。观察的是本地demo，不是原APK或真实权限验收。
