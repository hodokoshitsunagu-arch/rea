// Pure deterministic local reconstruction. Source catalog facts and local choices remain separate.
export const definitions = [
  {
    "id": "MIC01",
    "categories": [
      "游戏",
      "玩法"
    ],
    "name": "武器升级双倍与淘汰复活团队PK",
    "core_loop": "队伍收礼升级武器→Lv5双倍PK→淘汰玩家→复活礼物重返计分",
    "distinctive": "观众可以通过礼物把战局从升级推进到复活救援。",
    "rules": "武器Lv5礼物2倍PK；复活礼物即时恢复；淘汰触发离麦后不能再上；换队重算、退出清个人分。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8467,
        "text": "Blue Team has upgraded their weapon to Lv. 5, during which sending gifts will increase 2x PK points"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10312,
        "text": "Red Team has upgraded their weapon to Lv. 5, during which sending gifts will increase 2x PK points"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 7725,
        "text": "%s has been eliminated! Send a Revival Gift to revive them instantly so that they can continue earning PK points."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9442,
        "text": "If you leave the mic when elimination is triggered, you cannot take the mic again in this team battle. Are you sure you want to leave the mic?"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9445,
        "text": "If you switch teams during a team battle, your points will be recalculated. Are you sure you want to switch teams?"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8362,
        "text": "Are you sure you want to quit? If you quit, your individual PK points earned in the team battle will be reset"
      }
    ],
    "unknowns": [
      "升级/淘汰阈值、双倍时间、复活价格、服务端计分未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "保留现有demo，自定淘汰条件与阈值清晰标注。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "已有",
    "title": "武器升级双倍与淘汰复活团队PK",
    "actions": [
      {
        "id": "a0",
        "label": "收20礼物升级"
      },
      {
        "id": "a1",
        "label": "收10礼物计分"
      },
      {
        "id": "a2",
        "label": "淘汰并离麦"
      },
      {
        "id": "a3",
        "label": "尝试重新上麦"
      },
      {
        "id": "a4",
        "label": "复活礼物"
      },
      {
        "id": "a5",
        "label": "换到红队"
      },
      {
        "id": "a6",
        "label": "退出清个人分"
      },
      {
        "id": "a7",
        "label": "结束PK"
      }
    ],
    "reconstruction_choice": "20礼物升1级、初Lv1、Lv5双分；淘汰人为裁决，不声称恢复阈值/双倍时间。"
  },
  {
    "id": "MIC02",
    "categories": [
      "社交",
      "玩法",
      "权益"
    ],
    "name": "Couple专属麦位与模式互斥",
    "core_loop": "建立Couple→解锁房主/用户情侣席→席位扩容→切换房模式受限",
    "distinctive": "双人关系在房间空间中有专用位置，会排斥PK与计分板。",
    "rules": "房主/用户Couple席；启用Couple Slot不支持PK；PK开始不能开情侣席；满席可付费扩容；关闭Couple才可计分。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10396,
        "text": "Room Owner Couple Slot"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11263,
        "text": "User Couple Slot"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10050,
        "text": "PK is not available when Couple Slot is enabled"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11509,
        "text": "You cannot enable Couple Slot after starting a PK"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11599,
        "text": "Your Couple slots are full. Pay to expand slots?"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11484,
        "text": "You can enable the scorekeeper after disabling Couple Slots"
      }
    ],
    "unknowns": [
      "关系数量、扩容价格/上限、具体座位布局未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "空间布局和模式约束；扩容模拟。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "Couple专属麦位与模式互斥",
    "actions": [
      {
        "id": "a0",
        "label": "房主开启Couple席"
      },
      {
        "id": "a1",
        "label": "情侣上席"
      },
      {
        "id": "a2",
        "label": "模拟付费扩容"
      },
      {
        "id": "a3",
        "label": "开启PK"
      },
      {
        "id": "a4",
        "label": "关闭Couple席"
      },
      {
        "id": "a5",
        "label": "PK计分"
      },
      {
        "id": "a6",
        "label": "结束PK"
      }
    ],
    "reconstruction_choice": "1席初始、扩容10币，无原价格上限；占位席不含RTC。"
  },
  {
    "id": "MIC03",
    "categories": [
      "社交",
      "权益"
    ],
    "name": "Couple等级的优先展示与专属礼物",
    "core_loop": "结CP→互动增级→到Lv3设置优先展示→榜单与礼物→解除关系",
    "distinctive": "关系等级解锁展示优先权而非仅加一个标签。",
    "rules": "Couple Lv3可优先展示；专属礼物要求Couple LV动态值；有Couple榜；取消关注/拉黑自动终止Couple。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10276,
        "text": "Reach Couple LV3 to set priority display"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10275,
        "text": "Reach Couple LV %s to gift this"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8764,
        "text": "Couple Leaderboard"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11186,
        "text": "Unfollow this user?(Couple relationship will be automatically terminated)"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8495,
        "text": "By blacklisting this user, you will automatically unfollow them and terminate your Couple relationship. You will no longer receive their messages and they can no longer follow you or comment or like your posts. Are you sure you want to block this user?"
      }
    ],
    "unknowns": [
      "建立双方同意、亲密公式、退出清分与榜单统计未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "关系等级展示及终止规则，成长参数自定。",
    "replica_effort": "低",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "Couple等级的优先展示与专属礼物",
    "actions": [
      {
        "id": "a0",
        "label": "双向同意建立Couple"
      },
      {
        "id": "a1",
        "label": "普通互动成长"
      },
      {
        "id": "a2",
        "label": "展示Lv3优先卡"
      },
      {
        "id": "a3",
        "label": "送3级专属礼物"
      },
      {
        "id": "a4",
        "label": "取消关注终止"
      },
      {
        "id": "a5",
        "label": "拉黑终止"
      }
    ],
    "reconstruction_choice": "亲密10升级、本地专属礼物Lv3；榜用单机关系卡，终止保留成长未知选择。"
  },
  {
    "id": "MIC04",
    "categories": [
      "社交",
      "玩法"
    ],
    "name": "家族赠收礼贡献榜与退出清分",
    "core_loop": "达到级别建族/申请加入→赠礼收礼计贡献→家族排名→离族清贡献",
    "distinctive": "群体贡献明确覆盖赠送与接收两侧，单人仅能一家。",
    "rules": "每成员送/收礼钻石或金币用于排名；单人一家；建族等级动态门槛；离族清此家贡献；可启免审批加入。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10265,
        "text": "Ranks based on every family members' number of diamonds or coins from gift sending or receiving"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10003,
        "text": "One person can only join one family"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11273,
        "text": "Users can only create a family when they exceed the level of %s."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8883,
        "text": "Do you confirm to leave this family? Your contribution points for this family will be cleared after you leave."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8290,
        "text": "After this function is activated, no permission is needed when users apply to join the family."
      }
    ],
    "unknowns": [
      "送收加权、防刷、榜周期、建族门槛和人数未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "单一归属、两侧贡献榜与退族，不含普通群聊。",
    "replica_effort": "低",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "家族赠收礼贡献榜与退出清分",
    "actions": [
      {
        "id": "a0",
        "label": "用户升到5级"
      },
      {
        "id": "a1",
        "label": "创建蓝族"
      },
      {
        "id": "a2",
        "label": "申请加入红族"
      },
      {
        "id": "a3",
        "label": "开启免审批"
      },
      {
        "id": "a4",
        "label": "赠礼贡献20"
      },
      {
        "id": "a5",
        "label": "收礼贡献10"
      },
      {
        "id": "a6",
        "label": "刷新双侧贡献榜"
      },
      {
        "id": "a7",
        "label": "退出家族清分"
      }
    ],
    "reconstruction_choice": "建族5级、送收等权展示分离源值；单人一家、离族清分保留文案。"
  },
  {
    "id": "MIC05",
    "categories": [
      "社交",
      "权益"
    ],
    "name": "主播守护的免踢免禁言",
    "core_loop": "成为指定主播守护→等级/时限→得到入场与保护→取消回收",
    "distinctive": "关系权益直接限制房管操作，和普通礼物徽章不同。",
    "rules": "守护不能被踢/禁言；剩余天数展示；守护等级决定专属礼物；取消收回权益。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11075,
        "text": "This user is a guardian, you can't kick this user out"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11076,
        "text": "This user is a guardian, you can't mute this user"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10330,
        "text": "Remaining time as a guardian: %s days"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11487,
        "text": "You can gift it after reaching %s in the guardian level."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11396,
        "text": "When you cancel, the guardianship privilege will be retracted."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9005,
        "text": "Entry visual effects for guardians"
      }
    ],
    "unknowns": [
      "购买/邀请方式、续期、违规管理员 override、等级阈值未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "守护权限矩阵和限期，不连接原账号。",
    "replica_effort": "低",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "主播守护的免踢免禁言",
    "actions": [
      {
        "id": "a0",
        "label": "接受7天主播守护"
      },
      {
        "id": "a1",
        "label": "房管尝试踢出"
      },
      {
        "id": "a2",
        "label": "房管尝试禁言"
      },
      {
        "id": "a3",
        "label": "守护升到2级"
      },
      {
        "id": "a4",
        "label": "送2级守护礼物"
      },
      {
        "id": "a5",
        "label": "取消守护"
      },
      {
        "id": "a6",
        "label": "推进7天"
      }
    ],
    "reconstruction_choice": "7天守护及礼物Lv2为补齐；房管免踢/禁言按文案，不设计平台处罚。"
  },
  {
    "id": "MIC06",
    "categories": [
      "权益",
      "玩法"
    ],
    "name": "贵族身份的房管免踢与称号启停",
    "core_loop": "获得爵位→启用称号→免房主/管理员踢出→停用丧权益",
    "distinctive": "贵族权利改变房间治理，不止视觉包装。",
    "rules": "启用贵族称号才得到权益；贵族不被主播/admin踢；停用将失去权益；部分称号只可活动获得。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 7872,
        "text": "2. Only by using aristocratic titles you can get all the aristocratic privileges"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8891,
        "text": "Do you want the privilege of being permanently in the live room without being kicked out? Aristocrat users can avoid to be kicked out of the live room by broadcasters or admins."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9435,
        "text": "If you disable the aristocracy you won't be able to use its privileges, are you sure to stop using it?"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11056,
        "text": "This noble privilege is currently not open for purchase, can only be obtained through the event"
      }
    ],
    "unknowns": [
      "各爵位权限差异、平台处罚覆盖、购买范围/价格未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "启停称号与房管操作约束；平台治理作为本地明确新规则。",
    "replica_effort": "低",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "贵族身份的房管免踢与称号启停",
    "actions": [
      {
        "id": "a0",
        "label": "领取活动限定称号"
      },
      {
        "id": "a1",
        "label": "启用贵族称号"
      },
      {
        "id": "a2",
        "label": "房管尝试踢出"
      },
      {
        "id": "a3",
        "label": "停用称号"
      },
      {
        "id": "a4",
        "label": "尝试购买活动称号"
      }
    ],
    "reconstruction_choice": "活动骑士名称自定；启用才获免踢，不扩展原未知权限。"
  },
  {
    "id": "MIC07",
    "categories": [
      "权益",
      "社交"
    ],
    "name": "Pure Supporter分场景隐藏与SVIP9双经验",
    "core_loop": "取得支持者资格→开隐藏榜/礼物身份→送SVIP9礼物双经验",
    "distinctive": "支持者能隐藏自己在榜单和部分赠礼场景的身份，另有经验倍率。",
    "rules": "可隐藏TOP FANS；Mystery Man赠礼部分场景隐身；部分游戏可隐藏；SVIP9专属礼物双EXP。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9038,
        "text": "Exclusive privilege for Pure Supporters. When enabled, your identity will be hidden in certain games."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10239,
        "text": "Pure Supporter SVIP9 exclusive gift. Earn double EXP when you send it!"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10240,
        "text": "Pure Supporter exclusive privilege that lets you hide yourself from a streamer's TOP FANS list."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10241,
        "text": "Pure Supporter privilege. Once Mystery Man is enabled, you can hide your identity in certain situations when sending gifts. Details"
      }
    ],
    "unknowns": [
      "Pure Supporter准入、具体可匿名场景、EXP归属和隐私边界未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "分场景显示开关与2倍EXP账本，身份保护只为本地视觉演示。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "Pure Supporter分场景隐藏与SVIP9双经验",
    "actions": [
      {
        "id": "a0",
        "label": "隐藏TOP FANS"
      },
      {
        "id": "a1",
        "label": "启用Mystery Man"
      },
      {
        "id": "a2",
        "label": "选择支持匿名场景"
      },
      {
        "id": "a3",
        "label": "选择未证实游戏场景"
      },
      {
        "id": "a4",
        "label": "SVIP升到9"
      },
      {
        "id": "a5",
        "label": "赠SVIP9专属礼物"
      }
    ],
    "reconstruction_choice": "基础EXP10、SVIP9×2；单个本地允许场景用于展示，原匿名场景名单未恢复。"
  },
  {
    "id": "MIC08",
    "categories": [
      "权益",
      "社交"
    ],
    "name": "跨语言VIP与访问隐身/招呼优先",
    "core_loop": "开VIP→跨语言无限翻译→访问不留足迹→招呼在对方列表优先",
    "distinctive": "跨语言社交加成与可见性、曝光优先权整合成权益包。",
    "rules": "VIP无限翻译；可启无痕访问；VIP招呼在Chat列表优先且增加招呼数。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8438,
        "text": "Become a VIP and get additional greetings!"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8439,
        "text": "Become a VIP, and enjoy unlimited translation privileges!"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11342,
        "text": "Want to take a look to others, but you don't want to be detected? The invisible visit privilege just got here! Enable this privilege, and be invisible immediately, and check the profile of others without leaving a footprint"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11380,
        "text": "What a pity that your greetings are unknown by people you are interested in. Become a VIP member, and all your greetings will be given preference in the Chat list, draw more attention by becoming a VIP member!"
      }
    ],
    "unknowns": [
      "套餐期限/价格、优先排序、防骚扰限制、翻译服务未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "模拟双语消息与权益排序/足迹策略，不复刻基础聊天。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "跨语言VIP与访问隐身/招呼优先",
    "actions": [
      {
        "id": "a0",
        "label": "启用VIP套餐"
      },
      {
        "id": "a1",
        "label": "启用无痕访问"
      },
      {
        "id": "a2",
        "label": "访问阿红资料"
      },
      {
        "id": "a3",
        "label": "翻译固定双语消息"
      },
      {
        "id": "a4",
        "label": "发送VIP优先招呼"
      },
      {
        "id": "a5",
        "label": "停用VIP"
      }
    ],
    "reconstruction_choice": "固定词典/同级新招呼先排为重构；未恢复套餐/限额，不含真实聊天。"
  },
  {
    "id": "MIC09",
    "categories": [
      "玩法",
      "权益"
    ],
    "name": "Rocket Blast分级奖励候选",
    "core_loop": "火箭等级提升→领取对应奖励→继续更高等级",
    "distinctive": "单条奖品文案支持成长奖励支线，尚不能描述贡献玩法。",
    "rules": "包体仅明确下一火箭等级更好奖励，奖励已到账提示。",
    "evidence_strength": "C",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10390,
        "text": "Rewards from Rocket Blast have been issued to your account. The next level of the rocket will give even better rewards!"
      }
    ],
    "unknowns": [
      "火箭如何获得能量、参与者、时窗、等级和分配未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "只做等级领奖概念卡；先补调用/资源绑定。",
    "replica_effort": "中",
    "readiness": "需补证据",
    "demo_status": "未实现",
    "title": "Rocket Blast分级奖励候选",
    "actions": [
      {
        "id": "a0",
        "label": "进入Rocket Blast候选"
      },
      {
        "id": "a1",
        "label": "投入概念能量"
      },
      {
        "id": "a2",
        "label": "确认下一等级更好奖励"
      },
      {
        "id": "a3",
        "label": "领取等级概念奖励"
      }
    ],
    "reconstruction_choice": "只有更高等级/已到账文案；能量2、领取流程均概念实验，不称原火箭玩法。"
  },
  {
    "id": "MIC10",
    "categories": [
      "游戏"
    ],
    "name": "Ludo成长与车辆竞猜入口候选",
    "core_loop": "进入Ludo/车辆竞猜→参与→可能获得Ludo EXP",
    "distinctive": "Ludo有邀玩和EXP展示，车辆竞猜只有名字，不能编造下注/结算。",
    "rules": "观察到Ludo邀请、教程提示、Ludo EXP+占位和Guess the vehicle入口文案。",
    "evidence_strength": "C",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9355,
        "text": "Hi, welcome to Ludo. Let me show you how to play~"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9523,
        "text": "Invites you to a game of LUDO"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9673,
        "text": "Ludo EXP +%1$s"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9320,
        "text": "Guess the vehicle"
      }
    ],
    "unknowns": [
      "具体棋盘、规则变体、车辆竞猜操作、资源奖励全部未恢复。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "先补游戏资源/协议；若选择仅可自定义规则版本并标重构。",
    "replica_effort": "高",
    "readiness": "需补证据",
    "demo_status": "未实现",
    "title": "Ludo成长与车辆竞猜入口候选",
    "actions": [
      {
        "id": "a0",
        "label": "选择Ludo候选"
      },
      {
        "id": "a1",
        "label": "选择车辆竞猜候选"
      },
      {
        "id": "a2",
        "label": "发送Ludo邀请"
      },
      {
        "id": "a3",
        "label": "对方接受邀请"
      },
      {
        "id": "a4",
        "label": "查看教程提示"
      },
      {
        "id": "a5",
        "label": "完成本地一格教程"
      },
      {
        "id": "a6",
        "label": "提交车辆概念选择"
      },
      {
        "id": "a7",
        "label": "结束车辆入口实验"
      }
    ],
    "reconstruction_choice": "仅Ludo邀请/教程/EXP+占位和车辆入口有证据；无骰子/棋盘/竞猜判奖恢复，本地教程走一格。"
  },
  {
    "id": "MIC11",
    "categories": [
      "玩法",
      "权益"
    ],
    "name": "TOP10小时抽奖候选",
    "core_loop": "进入TOP10抽奖→等待小时开奖→领取结果",
    "distinctive": "榜单名称和每小时开奖文字相邻主题，但还未证实同一活动。",
    "rules": "仅观察TOP10 lottery draw与once every hour两文案。",
    "evidence_strength": "C",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10774,
        "text": "TOP 10 lottery draw"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10930,
        "text": "The lottery will be drawn once every hour."
      }
    ],
    "unknowns": [
      "二者调用关联、入场资格、概率、奖品和地区开关未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "先确认榜单与活动绑定，暂不构建原版开奖规则。",
    "replica_effort": "中",
    "readiness": "需补证据",
    "demo_status": "未实现",
    "title": "TOP10小时抽奖候选",
    "actions": [
      {
        "id": "a0",
        "label": "进入TOP10候选面板"
      },
      {
        "id": "a1",
        "label": "本地模拟进入第10名"
      },
      {
        "id": "a2",
        "label": "提交资格假设"
      },
      {
        "id": "a3",
        "label": "推进一小时"
      },
      {
        "id": "a4",
        "label": "执行无奖品契约检查"
      }
    ],
    "reconstruction_choice": "TOP10与每小时的关联未证实；只做假设资格提交/计时不开奖不发奖。"
  }
];
const configs = {
  "MIC01": {
    "state": {
      "phase": "PK",
      "team": [
        0,
        0
      ],
      "personal": 0,
      "memberTeam": 0,
      "weapon": 1,
      "alive": true,
      "onMic": true,
      "exited": false,
      "revives": 0
    }
  },
  "MIC02": {
    "state": {
      "mode": "普通",
      "coupleSeat": false,
      "slots": 1,
      "occupants": 0,
      "wallet": 100,
      "score": 0
    }
  },
  "MIC03": {
    "state": {
      "phase": "无Couple",
      "level": 1,
      "intimacy": 0,
      "priority": false,
      "giftSent": false,
      "following": true
    }
  },
  "MIC04": {
    "state": {
      "level": 1,
      "family": null,
      "application": false,
      "autoJoin": false,
      "sent": 0,
      "received": 0,
      "rank": []
    }
  },
  "MIC05": {
    "state": {
      "guard": false,
      "level": 1,
      "day": 0,
      "expiry": 0,
      "kicked": false,
      "muted": false,
      "giftSent": false
    }
  },
  "MIC06": {
    "state": {
      "owned": false,
      "enabled": false,
      "kicked": false,
      "title": "活动骑士"
    }
  },
  "MIC07": {
    "state": {
      "svip": 8,
      "hideFans": false,
      "mystery": false,
      "scene": "普通礼物",
      "publicName": "阿蓝",
      "exp": 0,
      "ledger": []
    }
  },
  "MIC08": {
    "state": {
      "vip": false,
      "incognito": false,
      "footprints": [],
      "translations": 0,
      "chat": [
        {
          "name": "普通招呼",
          "vip": false,
          "seq": 0
        }
      ],
      "greetings": 0
    }
  },
  "MIC09": {
    "state": {
      "phase": "候选入口",
      "level": 1,
      "energy": 0,
      "reward": null,
      "claimed": false
    }
  },
  "MIC10": {
    "state": {
      "phase": "入口",
      "branch": null,
      "invited": false,
      "consent": false,
      "tutorial": false,
      "exp": 0,
      "guess": null
    }
  },
  "MIC11": {
    "state": {
      "phase": "候选",
      "hour": 0,
      "rank": 11,
      "entry": false,
      "result": null,
      "lastRun": -1
    }
  }
};
const handlers = {"MIC01": (s,a)=>{if(a==='收20礼物升级'||a==='收10礼物计分'){need(s.phase==='PK'&&s.alive&&!s.exited,'淘汰/退出不计分');let v=a.includes('20')?20:10;s.team[s.memberTeam]+=v*(s.weapon>=5?2:1);s.personal+=v*(s.weapon>=5?2:1);if(a.includes('20'))s.weapon=Math.min(5,s.weapon+1);}
else if(a==='淘汰并离麦'){need(s.alive&&s.phase==='PK','已经淘汰');s.alive=false;s.onMic=false;}
else if(a==='尝试重新上麦'){need(s.alive&&!s.exited,'淘汰离麦不能再上；需复活礼物');s.onMic=true;}
else if(a==='复活礼物'){need(!s.alive&&!s.exited&&s.phase==='PK','只有淘汰玩家可复活');s.alive=true;s.onMic=true;s.revives++;}
else if(a==='换到红队'){need(s.phase==='PK'&&!s.exited,'已退出');s.team[s.memberTeam]-=s.personal;s.personal=0;s.memberTeam=1;s.weapon=1;}
else if(a==='退出清个人分'){need(s.phase==='PK'&&!s.exited,'仅PK进行中可退出清本场个人分；结算结果不可修改');s.team[s.memberTeam]-=s.personal;s.personal=0;s.exited=true;s.onMic=false;}
else if(a==='结束PK'){need(s.phase==='PK','已结束');s.phase='已结算';s.winner=s.team[0]>=s.team[1]?'蓝队':'红队';}},
"MIC02": (s,a)=>{if(a==='房主开启Couple席'){need(s.mode!=='PK','PK中不可开情侣席');s.coupleSeat=true;s.mode='Couple';}
else if(a==='情侣上席'){need(s.coupleSeat&&s.occupants<s.slots,'情侣席未开或满席');s.occupants++;}
else if(a==='模拟付费扩容'){need(s.coupleSeat&&s.occupants===s.slots&&s.wallet>=10,'满席且余额足够');s.wallet-=10;s.slots++;}
else if(a==='开启PK'){need(!s.coupleSeat&&s.mode!=='PK','Couple与PK互斥');s.mode='PK';}
else if(a==='关闭Couple席'){need(s.coupleSeat,'未开启');s.coupleSeat=false;s.occupants=0;s.mode='普通';}
else if(a==='PK计分'){need(s.mode==='PK'&&!s.coupleSeat,'关闭Couple后才能PK计分');s.score+=10;}
else if(a==='结束PK'){need(s.mode==='PK','未开始PK');s.mode='普通';}},
"MIC03": (s,a)=>{if(a==='双向同意建立Couple'){need(s.phase==='无Couple'&&s.following,'需互相关注');s.phase='Couple';}
else if(a==='普通互动成长'){need(s.phase==='Couple','无关系');s.intimacy+=10;s.level=Math.min(100,1+Math.floor(s.intimacy/10));}
else if(a==='展示Lv3优先卡'){need(s.phase==='Couple'&&s.level>=3,'Lv3门槛');s.priority=true;}
else if(a==='送3级专属礼物'){need(s.phase==='Couple'&&s.level>=3,'本地专属礼物Lv3门槛');s.giftSent=true;}
else if(a==='取消关注终止'||a==='拉黑终止'){need(s.phase==='Couple','关系已结束');s.following=false;s.phase='已终止';s.priority=false;}},
"MIC04": (s,a)=>{if(a==='用户升到5级')s.level=5;
else if(a==='创建蓝族'){need(s.level>=5&&s.family===null,'需5级且不能已有家族');s.family='蓝族';}
else if(a==='申请加入红族'){need(s.family===null,'单人仅一家');if(s.autoJoin)s.family='红族';else s.application=true;}
else if(a==='开启免审批'){s.autoJoin=true;if(s.application){s.family='红族';s.application=false;}}
else if(a==='赠礼贡献20'){need(s.family!==null,'需在家族');s.sent+=20;}
else if(a==='收礼贡献10'){need(s.family!==null,'需在家族');s.received+=10;}
else if(a==='刷新双侧贡献榜'){need(s.family!==null,'需家族');s.rank=[{member:'阿蓝',sent:s.sent,received:s.received,total:s.sent+s.received}];}
else if(a==='退出家族清分'){need(s.family!==null,'无家族');s.family=null;s.sent=0;s.received=0;s.rank=[];}},
"MIC05": (s,a)=>{if(a==='接受7天主播守护'){need(!s.guard,'已守护');s.guard=true;s.expiry=s.day+7;}
else if(a==='房管尝试踢出'){need(!s.guard,'守护免踢');s.kicked=true;}
else if(a==='房管尝试禁言'){need(!s.guard,'守护免禁言');s.muted=true;}
else if(a==='守护升到2级'){need(s.guard,'需守护');s.level=2;}
else if(a==='送2级守护礼物'){need(s.guard&&s.level>=2,'守护等级不够');s.giftSent=true;}
else if(a==='取消守护'){need(s.guard,'已取消');s.guard=false;}
else if(a==='推进7天'){s.day+=7;if(s.day>=s.expiry)s.guard=false;}},
"MIC06": (s,a)=>{if(a==='领取活动限定称号'){need(!s.owned,'已领取');s.owned=true;}
else if(a==='启用贵族称号'){need(s.owned,'先获得称号');s.enabled=true;}
else if(a==='停用称号'){need(s.enabled,'未启用');s.enabled=false;}
else if(a==='房管尝试踢出'){need(!s.enabled,'启用贵族免主播/admin踢');s.kicked=true;}
else if(a==='尝试购买活动称号')need(false,'该示例称号仅活动获得');},
"MIC07": (s,a)=>{if(a==='隐藏TOP FANS')s.hideFans=true;
else if(a==='启用Mystery Man')s.mystery=true;
else if(a==='选择支持匿名场景'){s.scene='本地允许礼物场景';s.publicName=s.mystery?'Mystery Man':'阿蓝';}
else if(a==='选择未证实游戏场景'){s.scene='未恢复场景';s.publicName='阿蓝（无法确认匿名）';}
else if(a==='SVIP升到9')s.svip=9;
else if(a==='赠SVIP9专属礼物'){need(s.svip>=9,'SVIP9门槛');s.exp+=20;s.ledger.push({source:'阿蓝',display:s.publicName,exp:20});}},
"MIC08": (s,a)=>{if(a==='启用VIP套餐')s.vip=true;
else if(a==='启用无痕访问'){need(s.vip,'VIP权益');s.incognito=true;}
else if(a==='访问阿红资料'){if(!s.incognito)s.footprints.push('阿蓝访问阿红');}
else if(a==='翻译固定双语消息'){need(s.vip,'VIP无限翻译');s.translations++;s.translation='مرحبا → 你好（固定词典，非翻译服务）';}
else if(a==='发送VIP优先招呼'){need(s.vip,'VIP优先招呼资格');s.greetings++;s.chat.push({name:'阿蓝VIP招呼',vip:true,seq:s.greetings});s.chat.sort((x,y)=>Number(y.vip)-Number(x.vip)||y.seq-x.seq);}
else if(a==='停用VIP'){s.vip=false;s.incognito=false;}},
"MIC09": (s,a)=>{if(a==='进入Rocket Blast候选'){need(s.phase==='候选入口','已进入');s.phase='局部契约实验';}
else if(a==='投入概念能量'){need(s.phase==='局部契约实验','先进入候选');s.energy++;}
else if(a==='确认下一等级更好奖励'){need(s.energy>=2&&s.phase==='局部契约实验','本地2能量门槛');s.level=2;s.reward='Lv2概念奖励优于Lv1（无原奖值）';s.phase='可领取';}
else if(a==='领取等级概念奖励'){need(s.phase==='可领取'&&!s.claimed,'没有奖励或已领取');s.claimed=true;s.phase='本地已到账';}},
"MIC10": (s,a)=>{if(a==='选择Ludo候选'){need(s.phase==='入口','重置后换分支');s.branch='Ludo';s.phase='邀请';}
else if(a==='选择车辆竞猜候选'){need(s.phase==='入口','重置后换分支');s.branch='车辆';s.phase='选择';}
else if(a==='发送Ludo邀请'){need(s.phase==='邀请'&&!s.invited,'邀请状态');s.invited=true;}
else if(a==='对方接受邀请'){need(s.invited&&!s.consent,'无邀请或已接受');s.consent=true;}
else if(a==='查看教程提示'){need(s.consent&&s.branch==='Ludo','对方先接受');s.tutorial=true;}
else if(a==='完成本地一格教程'){need(s.tutorial&&s.phase==='邀请','先看教程，只做一次');s.exp=1;s.phase='教程实验完成';}
else if(a==='提交车辆概念选择'){need(s.branch==='车辆'&&s.phase==='选择','请选择车辆入口');s.guess='蓝车（只记录选择，不判奖）';}
else if(a==='结束车辆入口实验'){need(s.guess!==null&&s.phase==='选择','先选择');s.phase='车辆入口完成';}},
"MIC11": (s,a)=>{if(a==='进入TOP10候选面板'){need(s.phase==='候选','已进入');s.phase='假设检查';}
else if(a==='本地模拟进入第10名')s.rank=10;
else if(a==='提交资格假设'){need(s.phase==='假设检查'&&s.rank<=10,'TOP10资格是本地假设');s.entry=true;}
else if(a==='推进一小时')s.hour++;
else if(a==='执行无奖品契约检查'){need(s.entry&&s.hour>=1&&s.lastRun!==s.hour,'本地1小时检查且不可重复');s.lastRun=s.hour;s.result='假设入口可提交；榜单/小时/抽奖关联仍未证实';s.phase='契约检查完成';}}};
class GuardError extends Error { constructor(message){ super(message); this.tag='rule_guard'; } }
function need(condition,message){ if(!condition) throw new GuardError(message); }
export function createState(id){ if(!configs[id]) throw new Error('Unknown feature '+id); return {id,...structuredClone(configs[id].state),events:['初始化本地模拟；全部参与者和资产虚构'],error:null}; }
export const initialState=createState;
export function reducer(state, action){
 const def=definitions.find(d=>d.id===state.id); if(!def) throw new Error('Unknown feature');
 const label=typeof action==='string'?action:(def.actions.find(a=>a.id===action?.type)?.label??action?.label);
 if(label==='reset') return createState(state.id);
 const next=structuredClone(state); next.error=null;
 try { need(def.actions.some(a=>a.label===label),'未知操作'); handlers[state.id](next,label); next.events=[...state.events,`${label} → ${next.phase??'状态已更新'}`].slice(-40); return next; }
 catch(e){ if(!(e instanceof GuardError)) throw e; return {...structuredClone(state),error:{tag:e.tag,message:e.message},events:[...state.events,`拒绝：${label} · ${e.message}`].slice(-40)}; }
}
export function domainState(s){const {events,error,...domain}=s;return domain;}
export function replay(id,labels){return labels.reduce((s,a)=>reducer(s,a),createState(id));}
