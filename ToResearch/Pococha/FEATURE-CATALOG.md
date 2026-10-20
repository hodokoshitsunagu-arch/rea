# Pococha 独特社交 / 权益 / 游戏 / 玩法候选清单

基准：`com.dena.pokota` / `7.36.0`。只分析已选包和全部提供的 splits；不启动APK、不登录、不联系原服务。本轮复用原 `ANALYSIS.md` 中的真实 REA Evidence，并补充 `analysis/feature-resource-rules.json` 的 Android ResTable key→resource ID→global string 映射。复杂 bag 明确跳过；覆盖数字见该文件。

“独特”指本应用内值得单独复刻的特色机制，不代表市场独占。**A**=反编译成员及规则文案共同支持（不等于完整执行链）；**B**=明确资源规则；**C**=结构/入口候选。资源是包体直接证据，产品流程是静态派生；动机说明属于推断。未验证原服务端、账号/地区开关、真实支付、RTC或原小游戏运行。

| ID | 特色机制 | 类别 | 证据 | 复刻准备 | 工作量 | Demo |
|---|---|---|---|---|---|---|
| POC01 | 开放/核心粉丝Family资格与退群 | 社交 / 权益 | B | 可先复刻 | 中 | 已有 |
| POC02 | Family频道权限和助手治理 | 社交 / 权益 | C | 需补证据 | 中 | 未实现 |
| POC03 | 助手操作日志同意 | 社交 / 玩法 | B | 可先复刻 | 低 | 未实现 |
| POC04 | 季度Family Board留言 | 社交 / 玩法 | B | 可先复刻 | 低 | 未实现 |
| POC05 | Rank Meter应援保级进度 | 玩法 / 权益 | C | 需补证据 | 中 | 已有 |
| POC06 | Rest Day强制休息与等级保护 | 权益 / 玩法 | B | 可先复刻 | 中 | 已有 |
| POC07 | Freeze Pass按需停表 | 权益 / 玩法 | B | 可先复刻 | 中 | 已有 |
| POC08 | PocoBox连续观看+评论续计时 | 玩法 / 权益 | B | 可先复刻 | 低 | 未实现 |
| POC09 | Poco Knight应援身份与专属道具 | 权益 / 玩法 | B | 可先复刻 | 中 | 未实现 |
| POC10 | Flexi/Premier直播收益时长模式 | 权益 / 玩法 | B | 可先复刻 | 中 | 未实现 |
| POC11 | Audition活动收益切换 | 玩法 / 权益 | B | 可先复刻 | 低 | 未实现 |

工作量针对本地可交互机制原型，排除真实后台/支付/音视频基础设施。“可先复刻”表示规则足以做标注重构选择的demo，并非完整还原已通过验收。已有demo仅覆盖前一轮选定机制，具体差异见原报告。

## POC01 · 开放/核心粉丝Family资格与退群

**核心循环（静态派生）：** 粉丝申请Family→持续观看与保持核心资格→失格自动退群。
**机制价值（推断）：** 社群成员资格由持续参与而非一次关注维持。

**包体直接事实与规则：**
- 门槛：Core Family需Core Fan及以上申请
- 时序：连续10天没看自动退出；核心Family另有月末低于Core Fan退群

**直接证据定位：**
- `analysis/feature-resource-rules.json`：`apks/com.dena.pokota.apk:resources.arsc:core_fan_family_enter_condition / 0x7f13012b / string 2653`，原字节offset `182918`。文案/契约：Core Fans and above can send a request
- `analysis/feature-resource-rules.json`：`apks/com.dena.pokota.apk:resources.arsc:core_fan_family_kickout_condition / 0x7f13012c / string 3007`，原字节offset `192418`。文案/契约：No views for 10 consecutive days, or the user is below Core Fan level by the end of the month
- `analysis/feature-resource-rules.json`：`apks/com.dena.pokota.apk:resources.arsc:open_family_kickout_condition / 0x7f13059c / string 3006`，原字节offset `192383`。文案/契约：No views for 10 consecutive days

**未知：** 核心资格积分、观看计日时区；例外。
**建议复刻边界：** 开放/核心两类成员状态机及十日/月末检查。
**选择建议：** 可先复刻；中；现有demo：已有。

## POC02 · Family频道权限和助手治理

**核心循环（静态派生）：** 主播建频道→按助手/应援等级分隔→委派助手执行管理。
**机制价值（推断）：** 粉丝组织内有多个沟通空间与角色分工。

**包体直接事实与规则：**
- 门槛：FamilyChannelPermissionType与Separate Assistants and Fan Noise资源
- 资源：成员邀请有限，数值未给

**直接证据定位：**
- `analysis/package-string-evidence.json`：`com.dena.pokota.apk:classes.dex:string:15688`，原字节offset `6727531`。文案/契约：Lcom/dena/pokota/model/multi_channel_family/FamilyChannelPermissionType;
- `analysis/feature-resource-rules.json`：`apks/com.dena.pokota.apk:resources.arsc:multi_channel_family_channel_permission_assistant_yell_label_title / 0x7f1304c3 / string 3209`，原字节offset `197596`。文案/契约：Separate Assistants and Fan Noise
- `analysis/feature-resource-rules.json`：`apks/com.dena.pokota.apk:resources.arsc:multi_channel_family_family_add_member_invite_desciption_label_title / 0x7f1304e8 / string 3296`，原字节offset `201088`。文案/契约：There is a limit to Family invites. For more details, check "Help".

**未知：** 具体权限枚举、邀请数量；成员等级判定。
**建议复刻边界：** 角色/频道可见性矩阵与邀请配额，配置值标重构。
**选择建议：** 需补证据；中；现有demo：未实现。

## POC03 · 助手操作日志同意

**核心循环（静态派生）：** 助手同意动作可见→管理评论/用户/Family→主播查看专属日志。
**机制价值（推断）：** 委派治理同时给主理人透明记录。

**包体直接事实与规则：**
- 门槛：不同意则不能使用助手功能，其他观看/直播不受影响
- 回报：日志含动作、时间、助手/目标账户；仅Family owner可见

**直接证据定位：**
- `analysis/feature-resource-rules.json`：`apks/com.dena.pokota.apk:resources.arsc:family_assistant_log_action_consent_dialog_content / 0x7f1301f8 / string 3682`，原字节offset `219325`。文案/契约：アシスタントとして行った操作（例：コメント管理、ユーザー対応、ファミリー管理等）に関する情報は、ファミリーオーナーであるライバーに対して「アシスタントログ」として表示されます。 / 表示される情報には、当該行動の内容や実施日時、アシスタントおよび対象ユーザーに関するアカウント情報（ニックネームやアイコン等）が含まれます。 / これらは、ライバーによるファミリー運営の透明性と信頼性確保を目的としたものであり、ファミリーオーナーにのみ限定的に提供されます。 / 今後、機能拡張に伴い、表示される項目が追加・変更される可能性があります。 /  / ※アシスタントとしての活動には、行動履歴の可視化についての同意が必要です。 / 同意されない場合は、アシスタント機能をご利用いただくことはできませんが、配信・視聴等の他の機能は引き続きご利用いただけます。同意される場合は「同意して続ける」を押してください。

**未知：** 具体日志事件列表、保存期。
**建议复刻边界：** 同意状态+角色权限+动作日志看板。
**选择建议：** 可先复刻；低；现有demo：未实现。

## POC04 · 季度Family Board留言

**核心循环（静态派生）：** 满足Core Fan等条件→每3个月留一条→指定日期集体可见。
**机制价值（推断）：** 长周期粉丝纪念留言与定时公开。

**包体直接事实与规则：**
- 门槛：Core Fan等条件
- 时序：3个月一次；%s之后大家可见

**直接证据定位：**
- `analysis/feature-resource-rules.json`：`apks/com.dena.pokota.apk:resources.arsc:family_board_message_title / 0x7f130206 / string 3712`，原字节offset `221904`。文案/契约：コアファンなどの条件を満たすと、3ヶ月に1回、ファミリーボードにメッセージを残すことができます。 / メッセージは、%1$s以降みんなで見ることができます。 / 

**未知：** 其他资格、周期锚点、修改删除。
**建议复刻边界：** 季度资格与预约公开留言墙。
**选择建议：** 可先复刻；低；现有demo：未实现。

## POC05 · Rank Meter应援保级进度

**核心循环（静态派生）：** 直播积累应援→Rank Meter显示当前分与目标→周期变化。
**机制价值（推断）：** 将应援结果变成可见的主播等级压力/协作目标。

**包体直接事实与规则：**
- 资源：rankMeterCurrentPoint/rankMeterPoints字段；休息保护关联

**直接证据定位：**
- `analysis/package-string-evidence.json`：`com.dena.pokota.apk:classes4.dex:string:2721`，原字节offset `6378432`。文案/契约：, rankMeterCurrentPoint=
- `analysis/feature-resource-rules.json`：`apks/com.dena.pokota.apk:resources.arsc:rest_day_home_holiday_ticket_description / 0x7f1307a1 / string 2805`，原字节offset `186464`。文案/契约：Freezes your Rank Meter so you can take time off as needed.

**未知：** 真实计分、等级变化阈值与周期。
**建议复刻边界：** 进度目标+模拟日结，公式标本地选择。
**选择建议：** 需补证据；中；现有demo：已有。

## POC06 · Rest Day强制休息与等级保护

**核心循环（静态派生）：** 排本月休息→到点禁止直播/终止当前直播→Rank不变。
**机制价值（推断）：** 收益竞争系统自带强制休息。

**包体直接事实与规则：**
- 门槛：需设置月休息；休息日不能开播
- 时序：开始前10分钟仍可改；到点后动态延迟自动结束
- 回报：休息日Rank不变；不能同时Freeze Pass

**直接证据定位：**
- `analysis/resource-evidence.json`：`com.dena.pokota.apk:resources.arsc:pool:12:string:2373`，原字节offset `175837`。文案/契约：- You cannot broadcast on a Rest Day.  / - Your Rank will not change on a Rest Day.  / - You cannot use a Freeze Pass and Rest Day at the same time.  / - You can change a Rest Day’s settings until 10 minutes before it starts.  / - If a Rest Day starts while you are broadcasting, the broadcast will end automatically after a fixed amount of time.

**未知：** 月最低天数、延迟终止秒数；不同模式适用。
**建议复刻边界：** 月历安排、开播门控、冻结rank与互斥。
**选择建议：** 可先复刻；中；现有demo：已有。

## POC07 · Freeze Pass按需停表

**核心循环（静态派生）：** 消耗通票→Rank Meter冻结→保护休息中的等级。
**机制价值（推断）：** 与强制禁播休息日分开，保护资源可主动使用。

**包体直接事实与规则：**
- 资源：Freeze Pass
- 回报：冻结Rank Meter
- 门槛：与Rest Day不能同时使用

**直接证据定位：**
- `analysis/feature-resource-rules.json`：`apks/com.dena.pokota.apk:resources.arsc:rest_day_home_holiday_ticket_description / 0x7f1307a1 / string 2805`，原字节offset `186464`。文案/契约：Freezes your Rank Meter so you can take time off as needed.
- `analysis/resource-evidence.json`：`com.dena.pokota.apk:resources.arsc:pool:12:string:2373`，原字节offset `175837`。文案/契约：- You cannot broadcast on a Rest Day.  / - Your Rank will not change on a Rest Day.  / - You cannot use a Freeze Pass and Rest Day at the same time.  / - You can change a Rest Day’s settings until 10 minutes before it starts.  / - If a Rest Day starts while you are broadcasting, the broadcast will end automatically after a fixed amount of time.

**未知：** 券获取/有效期；能否直播/赚收益。
**建议复刻边界：** 通票库存和冻结状态，直播限制保持未知。
**选择建议：** 可先复刻；中；现有demo：已有。

## POC08 · PocoBox连续观看+评论续计时

**核心循环（静态派生）：** 看直播→宝箱倒计时→停止时评论恢复→连续看候选升级箱。
**机制价值（推断）：** 奖励资格结合观看与互动，不是纯签到。

**包体直接事实与规则：**
- 时序：计时停后发评论重启
- 回报：连续观看可能出现Super/Hyper PocoBox

**直接证据定位：**
- `analysis/feature-resource-rules.json`：`apks/com.dena.pokota.apk:resources.arsc:pocobox_howto_count_stop_description / 0x7f1305fb / string 3291`，原字节offset `200652`。文案/契约：The countdown has stopped. / Comment to restart it.
- `analysis/feature-resource-rules.json`：`apks/com.dena.pokota.apk:resources.arsc:pocobox_detail_label_description / 0x7f1305f4 / string 3394`，原字节offset `203966`。文案/契约：Watching consecutively could get you / Super or even Hyper PocoBoxes!

**未知：** 计时长度、停止条件、掉率、币奖；升级是概率提示。
**建议复刻边界：** 计时/暂停/评论恢复/箱等级，奖励数值显式自设。
**选择建议：** 可先复刻；低；现有demo：未实现。

## POC09 · Poco Knight应援身份与专属道具

**核心循环（静态派生）：** 付Coins成为主播Knight→获对应身份道具→升级后旧道具仍可用。
**机制价值（推断）：** 身份购买产生可用的主播应援物件且升级保留历史资源。

**包体直接事实与规则：**
- 资源：Coin；Baby/Petit/Normal/Mega资源名
- 回报：对应限定应援道具；升级保留原级物件

**直接证据定位：**
- `analysis/feature-resource-rules.json`：`apks/com.dena.pokota.apk:resources.arsc:poco_knight_confirm_dialog_coin_text / 0x7f1305cb / string 3359`，原字节offset `202986`。文案/契约：Use %1$s Coins / to become %2$s's / %3$s?
- `analysis/feature-resource-rules.json`：`apks/com.dena.pokota.apk:resources.arsc:poco_knight_update_dialog_body_text / 0x7f1305e4 / string 2317`，原字节offset `173503`。文案/契约：%1$sアイテムを / %2$sつ獲得できます。 / %3$sのアイテムはそのまま使えます。
- `analysis/feature-resource-rules.json`：`apks/com.dena.pokota.apk:resources.arsc:poco_knight_mega_item_description / 0x7f1305d6 / string 4126`，原字节offset `246221`。文案/契约：限定アイテム「ボクたちならできる！」で / ライバーを応援しよう！

**未知：** 价格、身份期限、道具数量和消耗。
**建议复刻边界：** 身份阶梯+道具库存+升级保留，原金额不猜。
**选择建议：** 可先复刻；中；现有demo：未实现。

## POC10 · Flexi/Premier直播收益时长模式

**核心循环（静态派生）：** 选择节奏→申请审核→模式调整时长/Stage。
**机制价值（推断）：** 主播按每周强度选择收益时数方案。

**包体直接事实与规则：**
- 回报：Flexi每月35小时time diamond；Premier75小时
- 门槛：首次直播21日后才申请；有审核及动态申请窗
- 时序：Flexi改Premier会降低stage

**直接证据定位：**
- `analysis/feature-resource-rules.json`：`apks/com.dena.pokota.apk:resources.arsc:settings_user_rank_mode_page_mode_description_flexi / 0x7f1307ee / string 4091`，原字节offset `244479`。文案/契约：週に2〜3日の配信ならこちら！時間ダイヤは月間35時間分獲得可能。自分のペースで配信したい方向けのモードです。
- `analysis/feature-resource-rules.json`：`apks/com.dena.pokota.apk:resources.arsc:settings_user_rank_mode_page_mode_description_premier / 0x7f1307ef / string 4092`，原字节offset `244640`。文案/契约：週に4〜5日配信できるあなたにぴったり！時間ダイヤを月間75時間分獲得可能。思う存分配信したい方におすすめです。
- `analysis/feature-resource-rules.json`：`apks/com.dena.pokota.apk:resources.arsc:settings_user_rank_mode_page_description / 0x7f1307ed / string 3588`，原字节offset `212061`。文案/契约：※「フレキシモード」から「プレミアモード」へ変更するとステージが下がります。併せて詳細をご確認ください。 / ※モード変更できるのは%1$s〜%2$sです。 / ※モード変更の申請は、初配信から21日経過後に可能となります。 / ※申請後に審査を行うため、反映までにお時間をいただく場合があります。

**未知：** Diamond倍率、Stage降幅；适用地区。
**建议复刻边界：** 模式比较、资格/申请、月收益时数仪表盘。
**选择建议：** 可先复刻；中；现有demo：未实现。

## POC11 · Audition活动收益切换

**核心循环（静态派生）：** 切到选拔活动模式→应援入活动points→停常规diamond获取。
**机制价值（推断）：** 活动曝光竞争与平常收益存在互斥。

**包体直接事实与规则：**
- 回报：应援计入Audition event points
- 限制：此模式无time diamond和engagement diamond

**直接证据定位：**
- `analysis/resource-evidence.json`：`com.dena.pokota.apk:resources.arsc:pool:12:string:3697`，原字节offset `221088`。文案/契约：オーディションイベントのイベントポイントに応援が反映されます。本モードを選択中の配信では、時間ダイヤ・盛り上がりダイヤは獲得できません。

**未知：** 切换窗口、积分和奖励；是否所有选拔适用。
**建议复刻边界：** 活动模式与收益账本互斥示意。
**选择建议：** 可先复刻；低；现有demo：未实现。

## 覆盖边界

本列表为部分静态下钻；未穷尽所有反射、Unity/native、远程H5或动态配置。未发现完整小游戏规则的功能保留为候选并注明未知，不能由类名或资源名声称其执行行为。下一轮用户可按稳定ID选择机制，先补对应未知再定义复刻参数。
