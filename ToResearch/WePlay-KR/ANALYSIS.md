# WePlay-KR 核心机制静态逆向与重构

分析日期：2026-10-13。包名 `com.wejoy.weplay.kr`，版本 `6.12.0` / 61207。REA基准base APK `apks/com.wejoy.weplay.kr.apk`，SHA-256 `6c1ddbaeca51610598e156964eebe2bfcf4baddc5a360a45466923f90e104ced`。原始XAPK、split和来源不变，见 [APK-INFO.md](APK-INFO.md)。

## 结果与分析边界

重点：**抢麦 / 双人画布与绘画接力 / 社交反馈**。语音房、小游戏、社交三个问题均为部分回答；并未完整恢复所有业务实现。此轮交付有证据锚点的独特玩法研究和本地可运行实验，不包含基础登录/聊天/关注列表。

REA不会执行APK。没有Android真机/模拟器、真实账号、原网络流量、RTC、支付或服务器验收。字符串/类的存在不等于线上启用；“未找到”仅限已检索边界。

## 方法与完整REA Evidence

- 实际REA CLI 6.4.0，JADX MCP 0.7.1。包概览 Evidence `ev_d2cd728bed450f182352b84c6be8213c43a75b29e81260b5d93ca981009054f2`，见 [analysis/rea-package.json](analysis/rea-package.json)。原始 producer响应、请求、目标hash、JARhash与 limitations 均保留。
- JAR SHA-256 `6e5eacf500b64292bfb73c49797c1958f6ee44646e43e868039ae7feb573ff75` 与本仓库审计发布相同；使用现有Java26.0.1与临时CLI，不改全局配置。
- `analysis/archive-members.json`：所有已选APK split成员、大小、CRC。`dex-class-inventory.json`/`package-feature-strings.json`：DEX字符串表、类描述符和Android字符串池，带成员/索引/字节偏移。类描述符不是REA选择器；不将DEX行数与JADX parsed class数混同。
- `analysis/resource-rules.json`：格式感知解析ResTable简单string entry，关联resource ID、key、全局string pool及configuration原始字节。复杂bag显式跳过；配置保留原始hex，未猜测不支持的语言编码。
- `analysis/packaged-database.json`：`assets/databases/wespy.sqlite` 只读immutable导出的表架构和现有行。表名只能证明静态数据结构，不证明后端契约或真实用户数据。
- `analysis/feature-ledger.json` 和 `evidence-index.json` 逐项记录来源、证据类型、置信边界及真实失败。辅助Python产物不是REA Evidence。脚本已保存以供重新生成。

- [rea-mic-exit-method.json](analysis/rea-mic-exit-method.json)：inspect_android_method / success；ev_6034795de7a17e5071da2a172b6fc2bce786928669dcf4c9824ec6cbb91a72ff
- [rea-mic-state-class.json](analysis/rea-mic-state-class.json)：inspect_android_class / success；ev_c0285c43494f831398d5739c2d92ea61ea794a42ae599910cd54a2f12ac771bd
- [rea-package.json](analysis/rea-package.json)：inspect_android_package / success；ev_d2cd728bed450f182352b84c6be8213c43a75b29e81260b5d93ca981009054f2

## 包体直接证据

以下只断言字节中含有文本和声明；资源解释的业务行为还需代码/原运行交叉验证。

| 标签 | 资源ID / key | APK / 位置 | 原文 |
|---|---|---|---|
| R01 | `0x7f131985` / `musichum_vr_solo_practice_desc` | `apks/com.wejoy.weplay.kr.apk:resources.arsc` entry @4886804; pool index 17642, offset 839841 | Solo games don't count toward Records or Rank Pts. If another player joins midway, the official Mic Grab will start from the next song. |
| R02 | `0x7f131985` / `musichum_vr_solo_practice_desc` | `apks/com.wejoy.weplay.kr.apk:resources.arsc` entry @5184164; pool index 21163, offset 981271 | 1명으로 시작한 게임은 성적 및 랭킹치에 반영되지 않습니다. 게임 중 다른 플레이어가 참여하면 다음 퀴즈부터 캐치가 시작됩니다. |
| R03 | `0x7f130c31` / `draw_relay` | `apks/com.wejoy.weplay.kr.apk:resources.arsc` entry @4832548; pool index 14278, offset 740262 | Draw& Guess Solitaire |
| R04 | `0x7f130c31` / `draw_relay` | `apks/com.wejoy.weplay.kr.apk:resources.arsc` entry @5134324; pool index 22353, offset 1030430 | 그림 릴레이 |
| R05 | `0x7f130c38` / `draw_relay_cant_change_room_when_gaming` | `apks/com.wejoy.weplay.kr.apk:resources.arsc` entry @4832660; pool index 19371, offset 907247 | You can't change rooms in the game |
| R06 | `0x7f130c38` / `draw_relay_cant_change_room_when_gaming` | `apks/com.wejoy.weplay.kr.apk:resources.arsc` entry @5134436; pool index 21857, offset 1008891 | 게임 진행 중에 룸을 바꿀 수 없습니다. |
| R07 | `0x7f130c39` / `draw_relay_cant_send_when_watch` | `apks/com.wejoy.weplay.kr.apk:resources.arsc` entry @4832676; pool index 19375, offset 907456 | You can't send it while spectating |
| R08 | `0x7f130c39` / `draw_relay_cant_send_when_watch` | `apks/com.wejoy.weplay.kr.apk:resources.arsc` entry @5134452; pool index 22196, offset 1023457 | 관전 상태에서 발송할 수 없습니다. |
| R09 | `0x7f130c35` / `draw_relay_are_everyone_satisfied_with_word_relay` | `apks/com.wejoy.weplay.kr.apk:resources.arsc` entry @4832612; pool index 13118, offset 704019 | Are you satisfied with the Word Solitaire? |
| R10 | `0x7f130c35` / `draw_relay_are_everyone_satisfied_with_word_relay` | `apks/com.wejoy.weplay.kr.apk:resources.arsc` entry @5134388; pool index 22354, offset 1030449 | 그림 릴레이의 플레이 체험에 대해서 어떻게 생각하세요? |
| R11 | `0x7f130c59` / `draw_relay_x_praise_x` | `apks/com.wejoy.weplay.kr.apk:resources.arsc` entry @4833188; pool index 12337, offset 676707 | %1$s sent likes to %2$s |
| R12 | `0x7f130c59` / `draw_relay_x_praise_x` | `apks/com.wejoy.weplay.kr.apk:resources.arsc` entry @5134948; pool index 20944, offset 969192 | %1$s님이 %2$s님에게 좋아요를 눌렀습니다. |
| R13 | `0x7f130b93` / `double_spies_spy_words_not_exceed_12_characters` | `apks/com.wejoy.weplay.kr.apk:resources.arsc` entry @4830020; pool index 19093, offset 893711 | When there are 2 spies, the spy words must not exceed %1$d characters |
| R14 | `0x7f130b93` / `double_spies_spy_words_not_exceed_12_characters` | `apks/com.wejoy.weplay.kr.apk:resources.arsc` entry @5131908; pool index 23200, offset 1068079 | 라이어의 단어가 2개일 경우 단어 길이는 %1$d글자를 초과할 수 없습니다 |
| R15 | `0x7f1322ac` / `spy_bombing_word_1` | `apks/com.wejoy.weplay.kr.apk:resources.arsc` entry @4924180; pool index 18332, offset 868259 | The spy is revealing his/her word. |
| R16 | `0x7f1322ac` / `spy_bombing_word_1` | `apks/com.wejoy.weplay.kr.apk:resources.arsc` entry @5218596; pool index 23183, offset 1067341 | 라이어가 정답을 맞히고 있습니다 |
| R17 | `0x7f13214b` / `snatch_song_result_item_view_4` | `apks/com.wejoy.weplay.kr.apk:resources.arsc` entry @4918532; pool index 17030, offset 825111 | Relay Success Rate |
| R18 | `0x7f13214b` / `snatch_song_result_item_view_4` | `apks/com.wejoy.weplay.kr.apk:resources.arsc` entry @5213060; pool index 24543, offset 1121933 | 성공률 |
| R19 | `0x7f13214c` / `snatch_song_result_item_view_5` | `apks/com.wejoy.weplay.kr.apk:resources.arsc` entry @4918548; pool index 15715, offset 786083 | Max Bonus |

## 推导与派生代码

REA MusicHumGameInfo 保留当前演唱者、抢麦次数、题目贡献者/歌词/歌曲URL、积分、结果等字段/方法。exitIgnoreState 方法：游戏结束可忽略退出状态；当前用户 forceQuit 或 out 时可忽略；其余返回 state==10。没有恢复 state==10 的原始名称，不把这个数字当成“练习”或“结算”。资源英文与韩语明确中途加入后从下一题转正式。

REA Java/smali是反编译派生表示。方法/字段来自静态解析，不是观察到的调用；反射、native、远程H5与动态加载仍未覆盖。JADX警告保留在完整Evidence。

## 推断

游戏中的信息差、共创/竞争与结算反馈可能形成语音房社交循环。这是产品解释；包体不能证明转化率、留存、效果或不同地区的实际运营。

## 未知项

曲库/歌曲审核、抢麦先到判定、音高/语音识别、真实奖励、强退后果和状态枚举含义；双人画布/绘画接力实时协作协议；CP亲密成长和狼人原始逻辑。

真实RTC供应链、声音质量、服务器权威状态、反作弊、后台重试、奖励价格与地域灰度均未知。Manifest RECORD_AUDIO等权限只证明声明；provider未验证签名与split运行兼容性。

## Demo与规则归属

[demo/index.html](demo/index.html) · [运行说明](demo/README.md)。抢麦资格边界：一人开局练习 → 中途有人入场 → 当前题不加排位分 → 下一题正式 → 单一抢麦者 → 人工输入结果。

三位模拟参与者、原创提示句、手动判定成功/失败、正式成功每题10分、演唱时不能离席为本地演示参数。只将资源明文的练习不计分与下一题生效边界作为有直接支持的文字规则；原评分/资格服务未知。

可视化状态保留在浏览器内存；参与者/结果全为模拟。不是原App UI复刻，没有RTC、真实麦克风、匹配、商业曲库或多人服务。客户端可见投影用于展示信息差，不提供真实权限或秘密安全保证。

## 验证与覆盖

`node demo/test.mjs` 已通过。测试验证本地规则的阶段限制、重复操作与私密投影/排位资格边界；不验证原App。桌面/手机浏览器验证单独记录于 `analysis/browser-verification.json`，最终覆盖见该文件。未做真机、真人视觉验收、人耳/音质、线上多人、账号授权或生产验收。

最终受控Chrome验证：1280×900桌面及390×844手机完整流程/重置通过，无页面脚本错误、无横向溢出；截图已检查可读性。观察的是本地demo，不是原APK或真实权限验收。
