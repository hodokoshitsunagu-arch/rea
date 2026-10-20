# TopTop 核心语音房 / 社交 / 小游戏静态分析

分析日期：2026-10-13。对象：`com.game.friends.android` 3.27.3 (3027003)。SHA-256：`554cd034d0302ae99de4bce341588e821fa0ea4ad7019579bba2839536bb2f62`。保留下载来源与完整归档，见 [APK-INFO.md](APK-INFO.md)。本报告只针对用户选定当前包，未混用 source-comparison 旧版。

## 结果与覆盖

重点玩法：**关系竞拍与亲密成长**。关系拍卖有具体房主/管理员开场文案、竞拍者/拍卖师角色资源、保底价与成交后保留或建立关系、增加亲密值的文案。TopTop 并非只有棋牌入口；包内有语音房关系竞拍、Room PK 与武器任务玩法。Ludo/Carrom 内嵌资源和 topinnergame.apk 的存在不证明此轮分析了内嵌模块。

语音房、社交、小游戏均完成一轮包体静态证据盘点，覆盖为 **partial**；没有启动 APK，没有 Android 真机/模拟器、真实账户、后台流量、RTC 或付款验证。不能据此宣称恢复全部原App或所有核心玩法。此轮交付一个较深入的差异玩法 demo，基础登录、私聊、关注等不在重构范围。

## REA 与辅助证据

- 真正调用 REA 6.4.0 `inspect_android_package`，完整 Evidence 在 [analysis/rea-package.json](analysis/rea-package.json)，ID `ev_122ca9e3f3af3c3b0d0ed6b9301e4623b759f7e96ed1800b670a01ba0c942598`；JADX headless 0.7.1。解析类数 38079、资源数 9111。Manifest 中麦克风声明只说明申请能力。
- 本次 `inspect_android_class` 120000ms provider_timeout，未得到方法或字段恢复。原始超时及 partial_observation 保留在 [analysis/rea-feature-class.json](analysis/rea-feature-class.json)。若为 timeout，不作为反编译成功的证据。
- [analysis/archive-inventory.json](analysis/archive-inventory.json) 保存 ZIP 成员与 CRC/大小；[analysis/feature-candidates.json](analysis/feature-candidates.json) 保存格式感知解析 DEX string_ids、Android string-pool 的词汇候选。候选匹配不是完整语义或功能启用证明。
- [analysis/feature-ledger.json](analysis/feature-ledger.json) 保存发现分类、精确 string pool offset/index 和覆盖；分析脚本存于同目录。Sxx 是本地辅助证据标签，不冒充 REA Evidence ID。
- 对所有语言资源池做 lexical 检查，报告选择可读英文规则；未解析全部 resource ID→语言配置→布局调用映射。字符串索引可重复定位，不等于资源 ID。

## 包体直接证据

以下直接观察只表示该文本实际存在于包体；文本描述的业务规则仍待代码/运行/后台交叉验证。

| 标签 | 领域 | 定位 | 包内原文 |
|---|---|---|---|
| S01 | voice | resources.arsc @12 / string 9522 | Closing Room PK will result in a loss for this round. Continue? |
| S02 | voice | resources.arsc @12 / string 11126 | Only the owner/admin can open the auction |
| S03 | voice | resources.arsc @12 / string 12659 | Wait for the auctioneer to take the seat |
| S04 | social | resources.arsc @12 / string 11454 | Relationship to be auctioneed |
| S05 | social | resources.arsc @12 / string 12280 | This round of relationship auction has ended. Congratulations to [%1$s] for successfully bidding, maintaining the original relationship [%2$s], and increasing the intimacy value [%3$s] |
| S06 | social | resources.arsc @12 / string 12281 | This round of relationship auction has ended. Congratulations to [%1$s] for successfully bidding, reaching a new relationship [%2$s], and increasing the intimacy value [%3$s] |
| S07 | game | resources.arsc @12 / string 9245 | Auction is in progress |
| S08 | game | resources.arsc @12 / string 10687 | Ludo |
| S09 | game | resources.arsc @12 / string 12546 | Users cannot win the auction if lower than the lowest win price |
| S10 | game | resources.arsc @12 / string 12680 | Weapon PK + mission gameplay |

功能类 descriptor 的辅助观察见 ledger。这些类名存在可支持客户端模块候选，不能据此认定原算法、协议或网络服务恢复。

## 推导

关系拍卖有具体房主/管理员开场文案、竞拍者/拍卖师角色资源、保底价与成交后保留或建立关系、增加亲密值的文案。TopTop 并非只有棋牌入口；包内有语音房关系竞拍、Room PK 与武器任务玩法。Ludo/Carrom 内嵌资源和 topinnergame.apk 的存在不证明此轮分析了内嵌模块。

这些是将相关文案与资源/类候选聚合得到的客户端功能设计推导；不保证在线入口开放、地区开关一致，也不保证文案与当前后台实现一致。

## 推断

特色玩法将语音房参与、礼物/贡献、排行榜或关系成长绑定，可能用于激励持续房间参与及社交组织活动。此为产品动机推断，包体未提供用户指标或因果证据。原 RTC SDK/网络库名字不足以证明实际通话架构或质量。

## 未知项

竞价聚合规则、礼物价值折算、角色席位数量、最低价配置、并列与超时处理、亲密度公式、关系可选类型、内嵌 topinnergame.apk 完整规则与原服务器逻辑。 原始后台、反作弊、服务端权限、跨设备状态、并发竞态、余额与经济模型、动态下载内容均未知。镜像发行签名未做发布者真实性验证。XAPK 的ABI与density split 未由 JADX 桥验证；原归档完整保留。

## 重构 demo 与规则归属

[demo/index.html](demo/index.html) · [demo/README.md](demo/README.md)

管理员开启 → 双人累积模拟出价 → 保底价判断 → 维持旧关系/新关系 → 增加亲密；具体数值与计时是本地选择。 它是单机本地模型，所有礼物/点数都是模拟，没有真实资产。界面显式标注直接文本证据与重构参数。模型 `model.mjs` 与 `ui.mjs` 分开；「载入固定演示场景」提供确定性输入，「重置」恢复初始状态。没有宣称示例UI是原App截图。

证据支持的是功能主题与部分文字规则；时间、点数、阈值、平局、分配、淘汰触发、缺失权限等仅在模型中补齐。不能把这些本地补齐细节写回为包体发现。

## 验证与未验证

`node ToResearch/TopTop/demo/model.test.mjs` 已通过：状态输入不被修改，及玩法专属结算/权限状态限制。测试只建立本地重构规则，不建立原App行为。

浏览器验证记录与桌面/手机截图保存在 `demo/browser-check.json`、`demo/desktop.png`、`demo/mobile.png`。本地浏览器不等于安卓或原服务验收。未测真实语音、在线多人、第三方授权、付款、区域灰度与人工听感。

聚焦类名搜索的超时/失败同样保存在 `analysis/rea-feature-search.json`，不作成功结果解读。

本地 Chrome 验证：1280×900 桌面与390×844移动视口均运行固定场景、推进与重置；零pageerror、无横向溢出。截图已由本次代理检查可读性，未经用户视觉验收。它不是原APK真机或人工听感测试。
