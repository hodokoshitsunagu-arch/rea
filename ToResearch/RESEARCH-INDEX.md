# 语聊 / 社交 / 小游戏静态研究与玩法重构

日期：2026-10-13。覆盖15个独立包名；MICO和SUGO在研究地区间共用同一全球包。基准、来源与版本见 [APK收集清单](APK-COLLECTION-2026-10-13.md)。

本轮交付每个应用一份独立报告、REA Evidence与一套聚焦差异玩法的本地demo。语音房、社交、小游戏均作静态盘点，**所有应用的原始业务覆盖仍为 partial**：不是完整产品复刻或全部玩法/后台恢复。明确未知就是交付边界，不将缺失规则编造为原包事实。

[打开统一demo入口](http://127.0.0.1:4193/) · [启动说明](demo-lab/README.md)

| 应用 / 版本 | 独特重构机制 | 报告 | demo | REA成功 / 失败 |
|---|---|---|---|---|
| Yalla / 3.7.0 | Speed Battle · 贡献宝箱分配 | [ANALYSIS.md](Yalla/ANALYSIS.md) | [本地打开](http://127.0.0.1:4193/Yalla/) / [源码](Yalla/demo/index.html) | 2 / 2 |
| YoHo / 5.48.40 | 家族排名PK · 败方周贡献20%转移 | [ANALYSIS.md](YoHo/ANALYSIS.md) | [本地打开](http://127.0.0.1:4193/YoHo/) / [源码](YoHo/demo/index.html) | 1 / 3 |
| MICO / 9.1.5.0 | 武器Lv.5双倍 · 淘汰/复活 | [ANALYSIS.md](MICO/ANALYSIS.md) | [本地打开](http://127.0.0.1:4193/MICO/) / [源码](MICO/demo/index.html) | 1 / 2 |
| TopTop / 3.27.3 | 关系竞拍 · 保底价与亲密成长 | [ANALYSIS.md](TopTop/ANALYSIS.md) | [本地打开](http://127.0.0.1:4193/TopTop/) / [源码](TopTop/demo/index.html) | 1 / 2 |
| WePlay-AR / 6.8.5 | 双词卧底实验 · 描述/投票/结算交友 | [ANALYSIS.md](WePlay-AR/ANALYSIS.md) | [本地打开](http://127.0.0.1:4193/WePlay-AR/) / [源码](WePlay-AR/demo/index.html) | 3 / 0 |
| Spoon / 11.20.0 | Lucky Box · 可视礼物挑战 | [ANALYSIS.md](Spoon/ANALYSIS.md) | [本地打开](http://127.0.0.1:4193/Spoon/) / [源码](Spoon/demo/index.html) | 3 / 1 |
| WePlay-JP / 6.12.0 | 绘画接力 · 前一棒/揭晓/点赞 | [ANALYSIS.md](WePlay-JP/ANALYSIS.md) | [本地打开](http://127.0.0.1:4193/WePlay-JP/) / [源码](WePlay-JP/demo/index.html) | 4 / 2 |
| WePlay-KR / 6.12.0 | 抢麦 · 练习→下一题正式资格 | [ANALYSIS.md](WePlay-KR/ANALYSIS.md) | [本地打开](http://127.0.0.1:4193/WePlay-KR/) / [源码](WePlay-KR/demo/index.html) | 3 / 0 |
| Mirrativ / 11.92.1 | Emomo · 主播/观众双侧任务 | [ANALYSIS.md](Mirrativ/ANALYSIS.md) | [本地打开](http://127.0.0.1:4193/Mirrativ/) / [源码](Mirrativ/demo/index.html) | 2 / 0 |
| Pococha / 7.36.0 | Family留存 · RankMeter/休息保护 | [ANALYSIS.md](Pococha/ANALYSIS.md) | [本地打开](http://127.0.0.1:4193/Pococha/) / [源码](Pococha/demo/index.html) | 2 / 0 |
| 17LIVE / 2.253.1.0 | 双房PK · 竞争/共斗任务 | [ANALYSIS.md](17LIVE/ANALYSIS.md) | [本地打开](http://127.0.0.1:4193/17LIVE/) / [源码](17LIVE/demo/index.html) | 1 / 1 |
| SUGO / 2.52.0.1 | PK · 阵营累计与麦位显示分離 | [ANALYSIS.md](SUGO/ANALYSIS.md) | [本地打开](http://127.0.0.1:4193/SUGO/) / [源码](SUGO/demo/index.html) | 3 / 1 |
| Yalla-Parchis / 1.5.3 | 双骰/路障/捕获20步/三双处罚差异 | [ANALYSIS.md](Yalla-Parchis/ANALYSIS.md) | [本地打开](http://127.0.0.1:4193/Yalla-Parchis/) / [源码](Yalla-Parchis/demo/index.html) | 1 / 0 |
| Falla / V9.23.0 | Quick Ludo · 吃子后冲线/三6 | [ANALYSIS.md](Falla/ANALYSIS.md) | [本地打开](http://127.0.0.1:4193/Falla/) / [源码](Falla/demo/index.html) | 3 / 0 |
| HeeSay / 5.14.5 | 7日Guardian · 单日资格与Top1 | [ANALYSIS.md](HeeSay/ANALYSIS.md) | [本地打开](http://127.0.0.1:4193/HeeSay/) / [源码](HeeSay/demo/index.html) | 3 / 0 |

## 证据分层

- **包体直接证据**：实际Manifest、归档成员、资源文本、结构/字节定位。资源文字是存在性证据，不证明线上启用或行为执行。
- **推导与派生表示**：REA反编译Java/smali、protobuf/数据模型与静态关系；保留警告、未知位置与覆盖。
- **推断**：产品动机、跨模块关联解释；不把SDK/类/文件名当作原运行或效果证明。
- **未知**：服务器、动态游戏、RTC、地区灰度、反作弊、经济/评分、原Android运行等；逐应用列出。
- **重构选择**：人数、阈值、计时、假玩家、原文缺失的裁决算法和实验UI明确与原包事实分开。

## 真实REA范围

33次真实REA操作成功；14次失败/受限也完整保存，包括首次Swift缓存沙箱失败、类选择器形式错误、provider_timeout与JADX库存/输出问题。15个包的 `inspect_android_package` 全部成功，目标SHA-256与指定下载文件一致。完整调用索引、Evidence ID和文件哈希见 [RESEARCH-INDEX.json](RESEARCH-INDEX.json)。

使用REA CLI6.4.0 / JADX headless MCP0.7.1；JAR SHA-256 `6e5eacf500b64292bfb73c49797c1958f6ee44646e43e868039ae7feb573ff75`。仅临时获取工具并使用现有Java，没有改全局配置或升级系统工具。包体未执行；XAPK split由辅助格式解析检查，JADX只分析明确选择的base APK。

## 本地验证与未验证

15个模型测试套件通过；各组在Chrome桌面与390×844手机尺寸验证完整机制流程和重置、无脚本错误/横向溢出，记录与截图保存在各应用analysis/或demo/。统一入口另对15个demo做手机尺寸打开检查，并验证非demo路径404。截图经过代理检查，不等于用户视觉验收。

统一规则验证：`node ToResearch/demo-lab/test.mjs`。这些测试验证重构模型，而不是原App。未进行原APK真机、账号、后台、RTC音质、真人听感、真人视觉或生产验收。没有提交、推送或部署。

基础登录、基础聊天、关注列表等不在demo范围。额外玩法只记录已有证据，不为每个未知小游戏硬造demo。
