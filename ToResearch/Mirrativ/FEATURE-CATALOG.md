# Mirrativ 独特社交 / 权益 / 游戏 / 玩法候选清单

基准：`com.dena.mirrativ` / `11.92.1`。只分析已选包和全部提供的 splits；不启动APK、不登录、不联系原服务。本轮复用原 `ANALYSIS.md` 中的真实 REA Evidence，并补充 `analysis/feature-resource-rules.json` 的 Android ResTable key→resource ID→global string 映射。复杂 bag 明确跳过；覆盖数字见该文件。

“独特”指本应用内值得单独复刻的特色机制，不代表市场独占。**A**=反编译成员及规则文案共同支持（不等于完整执行链）；**B**=明确资源规则；**C**=结构/入口候选。资源是包体直接证据，产品流程是静态派生；动机说明属于推断。未验证原服务端、账号/地区开关、真实支付、RTC或原小游戏运行。

| ID | 特色机制 | 类别 | 证据 | 复刻准备 | 工作量 | Demo |
|---|---|---|---|---|---|---|
| MIR01 | 双形态Collab：通话与共同直播 | 社交 / 玩法 | B | 可先复刻 | 中 | 已有 |
| MIR02 | Cheerleader礼物身份 | 社交 / 权益 / 玩法 | B | 需补证据 | 中 | 未实现 |
| MIR03 | 主播/观众双侧Live Game任务 | 游戏 / 玩法 | C | 需补证据 | 中 | 已有 |
| MIR04 | Emomo麻将邀请与NPC补位 | 游戏 / 社交 | B | 需补证据 | 中 | 未实现 |
| MIR05 | Emomo RPG奖励→抽卡券 | 游戏 / 权益 | B | 需补证据 | 中 | 未实现 |
| MIR06 | 定时任务与观看赚币 | 玩法 / 权益 | B | 可先复刻 | 低 | 未实现 |
| MIR07 | 自制Emomo表情礼物 | 社交 / 玩法 | B | 可先复刻 | 低 | 未实现 |
| MIR08 | 推し活实体卡形象设计资格 | 权益 / 社交 | B | 暂缓 | 高 | 未实现 |

工作量针对本地可交互机制原型，排除真实后台/支付/音视频基础设施。“可先复刻”表示规则足以做标注重构选择的demo，并非完整还原已通过验收。已有demo仅覆盖前一轮选定机制，具体差异见原报告。

## MIR01 · 双形态Collab：通话与共同直播

**核心循环（静态派生）：** 发起talk/streaming请求→承诺→开始→退出/取消/断线。
**机制价值（推断）：** 对话和联合直播分开建模，Emomo可共场。

**包体直接事实与规则：**
- 门槛：主播需开LiveParty；部分用户没有主持开关
- 时序：联合者须在%s秒内开播，具体值动态
- 资源：人数上限存在但值未知

**直接证据定位：**
- `analysis/feature-resource-rules.json`：`apks/com.dena.mirrativ.apk:resources.arsc:text_collab_request_type_streaming / 0x7f140727 / string 2404`，原字节offset `130676`。文案/契约：%1$sさんから『コラボ配信』のリクエストが届いています
- `analysis/feature-resource-rules.json`：`apks/com.dena.mirrativ.apk:resources.arsc:text_collab_request_type_talk / 0x7f140729 / string 2403`，原字节offset `130597`。文案/契约：%1$sさんから『コラボ通話』のリクエストが届いています
- `analysis/feature-resource-rules.json`：`apks/com.dena.mirrativ.apk:resources.arsc:text_collab_error_4 / 0x7f1406fa / string 3255`，原字节offset `157107`。文案/契约：This Streamer has LiveParty turned off so you can't start a LiveParty :(
- `analysis/feature-resource-rules.json`：`apks/com.dena.mirrativ.apk:resources.arsc:text_ios_collab_timeout_for_caster / 0x7f140fe9 / string 3873`，原字节offset `185371`。文案/契约：コラボ者が%1$s秒以内に配信を始められなかったか通信に問題があり、コラボ配信を開始できませんでした

**未知：** 人数、重试、竞态；媒体路由。
**建议复刻边界：** 两种邀请状态机与形象共场；已有demo可补超时和开关。
**选择建议：** 可先复刻；中；现有demo：已有。

## MIR02 · Cheerleader礼物身份

**核心循环（静态派生）：** 观众送Cheerleader礼物→形成主播专属应援关系/等级。
**机制价值（推断）：** 礼物行为变成可识别的支持者资格。

**包体直接事实与规则：**
- 门槛：指定Cheerleader gift
- 回报：支持者身份；另有Cheer level门控

**直接证据定位：**
- `analysis/feature-resource-rules.json`：`apks/com.dena.mirrativ.apk:resources.arsc:text_became_cheerleader_description / 0x7f140426 / string 3925`，原字节offset `187191`。文案/契约：チアリーダーギフトを贈って / あなたの配信を応援してくれた / 視聴者さんだよ！
- `analysis/feature-resource-rules.json`：`apks/com.dena.mirrativ.apk:resources.arsc:text_epos_card_issue_card_empty_streamers_v2 / 0x7f140b9d / string 3931`，原字节offset `187410`。文案/契约：チアレベル1以上の配信者さんがいないため / 発行できるカードがありません

**未知：** 应援等级计分、周期及完整权益。
**建议复刻边界：** 支持者关系与等级门控原型，等级参数由本地配置。
**选择建议：** 需补证据；中；现有demo：未实现。

## MIR03 · 主播/观众双侧Live Game任务

**核心循环（静态派生）：** 进入直播游戏→主播与观众分别接受条件→任务达成→金币/boost状态。
**机制价值（推断）：** 直播互动角色带不同任务契约。

**包体直接事实与规则：**
- 资源：LiveGameMission携带condition/player/viewer/coinBoost
- 时序：Connected/Playing/Ended事件候选

**直接证据定位：**
- `analysis/rea-livegame-mission.json`，Evidence `ev_52515f86ca7754591784595cbb06e8d42d3fda904270055c6b435fb8706a51b2`。**REA成员归纳（推导）：** REA解析LiveGameMission成员condition、player、viewer、coinBoost。未追踪具体游戏条件与奖励公式。
- `analysis/package-string-evidence.json`：`com.dena.mirrativ.apk:classes.dex:string:28854`，原字节offset `3038056`。文案/契约：LiveGameMission(condition=

**未知：** 触发条件、奖励公式；哪些观众可参与。
**建议复刻边界：** 保留双侧任务结构；原demo可配置角色目标。
**选择建议：** 需补证据；中；现有demo：已有。

## MIR04 · Emomo麻将邀请与NPC补位

**核心循环（静态派生）：** 邀请两名朋友或NPC→开始Emomo麻将→头像共桌。
**机制价值（推断）：** 把形象好友邀请接入三席候选局。

**包体直接事实与规则：**
- 门槛：已邀请2人，NPC亦可
- 资源：Emomo麻将avatar模型和邀请文案

**直接证据定位：**
- `analysis/feature-resource-rules.json`：`apks/com.dena.mirrativ.apk:resources.arsc:text_emomo_mahjong_select_users_notice_v2 / 0x7f140a0f / string 3511`，原字节offset `165020`。文案/契约：※2人（NPCも可）の友だちが招待できていると、プレイ開始できます
- `analysis/feature-resource-rules.json`：`apks/com.dena.mirrativ.apk:resources.arsc:text_emomo_mahjong_member_invited_title / 0x7f140a0a / string 2489`，原字节offset `133816`。文案/契约：%sさんから / エモ雀の招待が届いたよ! / 一緒にプレイしよう!!

**未知：** 具体麻将规则、席位总数；匹配与结算。
**建议复刻边界：** 只复刻邀请/NPC补位/头像等候，不造原麻将规则。
**选择建议：** 需补证据；中；现有demo：未实现。

## MIR05 · Emomo RPG奖励→抽卡券

**核心循环（静态派生）：** 玩Emomo跑酷RPG→获得gacha券→消耗于礼物抽取入口。
**机制价值（推断）：** 游戏进度联通虚拟形象/礼物奖励链。

**包体直接事实与规则：**
- 资源：gacha券从Emomoランあーるぴーじー奖励等获取

**直接证据定位：**
- `analysis/feature-resource-rules.json`：`apks/com.dena.mirrativ.apk:resources.arsc:text_emomo_quest_gift_gacha_ticket_error_message / 0x7f140aa5 / string 3797`，原字节offset `181413`。文案/契约：ガチャチケットはエモモランあーるぴーじーの報酬などで獲得できます。

**未知：** RPG战斗/跑酷规则；票来源和掉率；奖池。
**建议复刻边界：** 券的获得/消费账本和静态奖池候选，先补真实规则。
**选择建议：** 需补证据；中；现有demo：未实现。

## MIR06 · 定时任务与观看赚币

**核心循环（静态派生）：** 观众入直播→观看任务→每日得coin；定时任务窗口重新开放。
**机制价值（推断）：** 观看回访与一天三段任务节奏连接。

**包体直接事实与规则：**
- 时序：任务奖励说明为04:00/12:00/20:00重置且每次可挑战一次
- 回报：观看任务每日coin
- 门槛：资源称部分任务需广告；近30天未购coin显示广告

**直接证据定位：**
- `analysis/feature-resource-rules.json`：`apks/com.dena.mirrativ.apk:resources.arsc:text_mission_reward_description_popup / 0x7f14121d / string 4356`，原字节offset `206901`。文案/契约：朝4時、昼12時、夜20時にリセットされて / 1回ずつチャレンジできるよ!
- `analysis/feature-resource-rules.json`：`apks/com.dena.mirrativ.apk:resources.arsc:text_tutorial_mission_achievement_dialog_description / 0x7f1419af / string 4469`，原字节offset `211694`。文案/契约：素敵な配信に出会えたかな？次回の入室から「視聴ミッション」が表示されるよ！ミッションクリアで毎日コインをGETしよう！
- `analysis/feature-resource-rules.json`：`apks/com.dena.mirrativ.apk:resources.arsc:text_mission_cm_required_detail / 0x7f1411e3 / string 2636`，原字节offset `137511`。文案/契约：CMは直近30日間コイン購入が無い方に表示されます / （一部ミッションを除く）

**未知：** 各文案是否同任务；观看时长及coin数量；时区。
**建议复刻边界：** 分别做观看任务和三时段任务；不把两者合成已证实链路。
**选择建议：** 可先复刻；低；现有demo：未实现。

## MIR07 · 自制Emomo表情礼物

**核心循环（静态派生）：** 选自己的Emomo姿势→输入最多8字→创建/保存gift。
**机制价值（推断）：** 用个人形象做带短句的应援内容。

**包体直接事实与规则：**
- 资源：文字最多8字；姿势在Emomo拍摄界面改
- 时序：关闭制作页会丢弃正在创建的gift

**直接证据定位：**
- `analysis/feature-resource-rules.json`：`apks/com.dena.mirrativ.apk:resources.arsc:text_unique_emomo_gift_stamp_input_text_note / 0x7f141a13 / string 3530`，原字节offset `167265`。文案/契约：※テキストは最大8文字まで入力できます / ※ポーズはエモモ撮影画面から変更できます
- `analysis/feature-resource-rules.json`：`apks/com.dena.mirrativ.apk:resources.arsc:text_unique_emomo_close_alert_title / 0x7f1419fa / string 4665`，原字节offset `219225`。文案/契约：閉じると作成中のギフトが / 破棄されます / よろしいですか？

**未知：** 审核、发布权限、价格；图像净化与发送流程。
**建议复刻边界：** 本地avatar姿势+8字编辑器和草稿丢弃，使用原创资产。
**选择建议：** 可先复刻；低；现有demo：未实现。

## MIR08 · 推し活实体卡形象设计资格

**核心循环（静态派生）：** 有Cheer level≥1主播→设计形象卡→合作方审查发卡。
**机制价值（推断）：** 支持关系可进入联名卡权益，区别于普通会员徽章。

**包体直接事实与规则：**
- 门槛：无Cheer level 1以上主播则无可发行卡
- 资源：Emomo可拖动缩放；制作需同意PR规范
- 回报：EPOS发行的卡，需审批

**直接证据定位：**
- `analysis/feature-resource-rules.json`：`apks/com.dena.mirrativ.apk:resources.arsc:text_epos_card_issue_card_empty_streamers_v2 / 0x7f140b9d / string 3931`，原字节offset `187410`。文案/契约：チアレベル1以上の配信者さんがいないため / 発行できるカードがありません
- `analysis/feature-resource-rules.json`：`apks/com.dena.mirrativ.apk:resources.arsc:text_epos_card_creation_edit_hint_v2 / 0x7f140b8f / string 3965`，原字节offset `188879`。文案/契约：ピンチイン・ピンチアウトやドラッグで / エモモの大きさや位置を調整できるよ！
- `analysis/feature-resource-rules.json`：`apks/com.dena.mirrativ.apk:resources.arsc:text_epos_card_issued_by_epos_v2 / 0x7f140ba8 / string 4685`，原字节offset `219872`。文案/契约：［PR］エポスカードは株式会社エポスカードから発行されます。

**未知：** 原金融合作合同、审核；关联利益和权限。
**建议复刻边界：** 只做关系门控+原创纪念卡设计；实体金融流程暂缓。
**选择建议：** 暂缓；高；现有demo：未实现。

## 覆盖边界

本列表为部分静态下钻；未穷尽所有反射、Unity/native、远程H5或动态配置。未发现完整小游戏规则的功能保留为候选并注明未知，不能由类名或资源名声称其执行行为。下一轮用户可按稳定ID选择机制，先补对应未知再定义复刻参数。
