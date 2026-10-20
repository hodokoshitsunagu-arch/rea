# WePlay-AR 核心机制静态逆向与重构

分析日期：2026-10-13。包名 `com.wejoy.weplay.ar`，版本 `6.8.5` / 60851。REA基准base APK `apks/com.wejoy.weplay.ar.apk`，SHA-256 `d0c169358df88039a0b98db9879d1e4908aa3cd2a17d64c81f89d96ee21bfaf1`。原始XAPK、split和来源不变，见 [APK-INFO.md](APK-INFO.md)。

## 结果与分析边界

重点：**双词卧底 / 抢麦和绘画 / 游戏结算交友**。语音房、小游戏、社交三个问题均为部分回答；并未完整恢复所有业务实现。此轮交付有证据锚点的独特玩法研究和本地可运行实验，不包含基础登录/聊天/关注列表。

REA不会执行APK。没有Android真机/模拟器、真实账号、原网络流量、RTC、支付或服务器验收。字符串/类的存在不等于线上启用；“未找到”仅限已检索边界。

## 方法与完整REA Evidence

- 实际REA CLI 6.4.0，JADX MCP 0.7.1。包概览 Evidence `ev_2cb81149b361a8b4ea14049e593412ebaf72608aeea074a7ce0096d4145dd787`，见 [analysis/rea-package.json](analysis/rea-package.json)。原始 producer响应、请求、目标hash、JARhash与 limitations 均保留。
- JAR SHA-256 `6e5eacf500b64292bfb73c49797c1958f6ee44646e43e868039ae7feb573ff75` 与本仓库审计发布相同；使用现有Java26.0.1与临时CLI，不改全局配置。
- `analysis/archive-members.json`：所有已选APK split成员、大小、CRC。`dex-class-inventory.json`/`package-feature-strings.json`：DEX字符串表、类描述符和Android字符串池，带成员/索引/字节偏移。类描述符不是REA选择器；不将DEX行数与JADX parsed class数混同。
- `analysis/resource-rules.json`：格式感知解析ResTable简单string entry，关联resource ID、key、全局string pool及configuration原始字节。复杂bag显式跳过；配置保留原始hex，未猜测不支持的语言编码。
- `analysis/packaged-database.json`：`assets/databases/wespy.sqlite` 只读immutable导出的表架构和现有行。表名只能证明静态数据结构，不证明后端契约或真实用户数据。
- `analysis/feature-ledger.json` 和 `evidence-index.json` 逐项记录来源、证据类型、置信边界及真实失败。辅助Python产物不是REA Evidence。脚本已保存以供重新生成。

- [rea-package.json](analysis/rea-package.json)：inspect_android_package / success；ev_2cb81149b361a8b4ea14049e593412ebaf72608aeea074a7ce0096d4145dd787
- [rea-spy-search.json](analysis/rea-spy-search.json)：search_android_classes / success；ev_0c6eaadc42d4114e9f82c3d7f4434a2fea83af8effcade95699a227b42e7453f
- [rea-spy-social-class.json](analysis/rea-spy-social-class.json)：inspect_android_class / success；ev_3dcb029c0d6cbd8184d2d24a04f5f96e55bfc693d8dc12784994fc6e85824ff2

## 包体直接证据

以下只断言字节中含有文本和声明；资源解释的业务行为还需代码/原运行交叉验证。

| 标签 | 资源ID / key | APK / 位置 | 原文 |
|---|---|---|---|
| R01 | `0x7f130797` / `double_spies_spy_words_not_exceed_x_characters` | `apks/com.wejoy.weplay.ar.apk:resources.arsc` entry @3195924; pool index 13401, offset 591342 | When there are 2 spies, the spy words must not exceed %s characters |
| R02 | `0x7f130797` / `double_spies_spy_words_not_exceed_x_characters` | `apks/config.ar.apk:resources.arsc` entry @730532; pool index 4102, offset 228150 | لا يمكن أن تكون كلمات الجاسوس اكثر من %s كلمات |
| R03 | `0x7f1315e9` / `snatch_song_result_view_5` | `apks/com.wejoy.weplay.ar.apk:resources.arsc` entry @3250980; pool index 10489, offset 500537 | Grabbed |
| R04 | `0x7f1315e9` / `snatch_song_result_view_5` | `apks/config.ar.apk:resources.arsc` entry @782916; pool index 1735, offset 104483 | الغناء |
| R05 | `0x7f1315ea` / `snatch_song_result_view_7` | `apks/com.wejoy.weplay.ar.apk:resources.arsc` entry @3250996; pool index 12550, offset 559214 | Success Rate |
| R06 | `0x7f1315ea` / `snatch_song_result_view_7` | `apks/config.ar.apk:resources.arsc` entry @782932; pool index 4763, offset 271455 | معدل نجاح الغناء |

## 推导与派生代码

REA Spy 搜索完整返回9个候选，包括 SpySeatView、SpyQASeatView、SpyGameBottomFragment、PartySpySeatView 和 SpyGameEndAddFriendAnim。后者的真实类成员有 Context、ImageView、ObjectAnimator 和动画/窗口清理方法；只支持“结算交友动画”候选，不证明后端加好友成功或权限。DEX/资源另有MusicHum、Draw和语音房候选，asset split含Baloot卡面/动画及Unity内容，均不能替代原游戏算法。

REA Java/smali是反编译派生表示。方法/字段来自静态解析，不是观察到的调用；反射、native、远程H5与动态加载仍未覆盖。JADX警告保留在完整Evidence。

## 推断

游戏中的信息差、共创/竞争与结算反馈可能形成语音房社交循环。这是产品解释；包体不能证明转化率、留存、效果或不同地区的实际运营。

## 未知项

卧底数量与“双词”语义、实际长度占位符、角色配比、词库、空白卧底/炸词/投票平票规则、服务器权限、真实社交关系提交；Baloot完整叫牌与得分、Unity狼人和动态游戏。日韩绘画接力/Mic练习资格规则不得移植为本包事实。

真实RTC供应链、声音质量、服务器权威状态、反作弊、后台重试、奖励价格与地域灰度均未知。Manifest RECORD_AUDIO等权限只证明声明；provider未验证签名与split运行兼容性。

## Demo与规则归属

[demo/index.html](demo/index.html) · [运行说明](demo/README.md)。双词卧底实验：词卡配置 → 各座位私密词卡 → 模拟语音描述 → 六次投票 → 揭词 → 同桌交友候选。

双词/双卧底的字面含义跨语言存在歧义：英文说2 spies，阿语文案说单词长度/数量，占位符的实际数值未知。Demo明确选择“一位卧底持双词、其余持同词”，六人、12个Unicode码点、票数唯一最大淘汰/平票不淘汰、结算后的单向交友候选选择为本地重构。不是原版角色配置、Unicode计数或判胜算法。

可视化状态保留在浏览器内存；参与者/结果全为模拟。不是原App UI复刻，没有RTC、真实麦克风、匹配、商业曲库或多人服务。客户端可见投影用于展示信息差，不提供真实权限或秘密安全保证。

## 验证与覆盖

`node demo/test.mjs` 已通过。测试验证本地规则的阶段限制、重复操作与私密投影/排位资格边界；不验证原App。桌面/手机浏览器验证单独记录于 `analysis/browser-verification.json`，最终覆盖见该文件。未做真机、真人视觉验收、人耳/音质、线上多人、账号授权或生产验收。

最终受控Chrome验证：1280×900桌面及390×844手机完整流程/重置通过，无页面脚本错误、无横向溢出；截图已检查可读性。观察的是本地demo，不是原APK或真实权限验收。
