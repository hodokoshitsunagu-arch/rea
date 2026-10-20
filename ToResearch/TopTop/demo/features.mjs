// Pure deterministic local reconstruction. Source catalog facts and local choices remain separate.
export const definitions = [
  {
    "id": "TOP01",
    "categories": [
      "社交",
      "玩法"
    ],
    "name": "保底价关系竞拍",
    "core_loop": "房管开拍→拍卖师上席→竞价过保底→维持/新建关系并涨亲密",
    "distinctive": "竞拍结果包括关系保留与关系改建两类。",
    "rules": "仅owner/admin开；低于最低价不能胜；CF与其他关系不同保底动态值；成交加亲密。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11126,
        "text": "Only the owner/admin can open the auction"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12659,
        "text": "Wait for the auctioneer to take the seat"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12130,
        "text": "The minimum winning price is %1$s for Close Friend relationships and %2$s for other relationships"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12546,
        "text": "Users cannot win the auction if lower than the lowest win price"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12280,
        "text": "This round of relationship auction has ended. Congratulations to [%1$s] for successfully bidding, maintaining the original relationship [%2$s], and increasing the intimacy value [%3$s]"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12281,
        "text": "This round of relationship auction has ended. Congratulations to [%1$s] for successfully bidding, reaching a new relationship [%2$s], and increasing the intimacy value [%3$s]"
      }
    ],
    "unknowns": [
      "竞价聚合/步长、退费、时限、同价与亲密公式未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "保留现有关系拍卖demo，补两类保底配置。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "已有",
    "title": "保底价关系竞拍",
    "actions": [
      {
        "id": "a0",
        "label": "切换房管"
      },
      {
        "id": "a1",
        "label": "选择CP保底40"
      },
      {
        "id": "a2",
        "label": "房管开拍"
      },
      {
        "id": "a3",
        "label": "阿蓝出价10"
      },
      {
        "id": "a4",
        "label": "阿红出价50"
      },
      {
        "id": "a5",
        "label": "落槌关系成交"
      }
    ],
    "reconstruction_choice": "CF20/其他40保底，最高单价胜、亲密10，扣款仅模拟；退费/同价未恢复。"
  },
  {
    "id": "TOP02",
    "categories": [
      "社交",
      "权益"
    ],
    "name": "CF衰减与CP/Deep Bond升级树",
    "core_loop": "花礼物建CF→Lv2后升级CP/深关系→解锁更高等级与不衰减→解除冷却",
    "distinctive": "亲密关系分支改变成长上限与衰减机制。",
    "rules": "CF上限Lv9，CP/Deep Bond Lv100；Lv2后可升级；CF不互动会衰减，CP/Bond不衰减；终止不清亲密但7天不能再互申。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9068,
        "text": "After Lv. 2, a CF can be upgraded to a Couple or a deeper Bond"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9375,
        "text": "CF relationships can reach up to Lv. 9. CP and Deep Bond relationships can reach up to Lv. 100"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12121,
        "text": "The intimacy points of your CF Relationship will decay without interaction. Activate CP/Bond to prevent decay."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11359,
        "text": "Protected by Couple or Deep Bond privileges, Intimacy will not decrease"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9098,
        "text": "After the relationship is terminated \n 1. Both parties can no longer apply for the relationship to each other within 7 days \n 2. The intimacy won't be cleared. \n 3. All keepsakes will become invalid. \n Click confirm to terminate the relationship."
      }
    ],
    "unknowns": [
      "衰减公式/间隔、等级阈值、建立条件与最大关系数未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "关系树、衰减策略、解除7天冷却模拟。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "CF衰减与CP/Deep Bond升级树",
    "actions": [
      {
        "id": "a0",
        "label": "申请CF并互相同意"
      },
      {
        "id": "a1",
        "label": "互动增加10亲密"
      },
      {
        "id": "a2",
        "label": "升级CP"
      },
      {
        "id": "a3",
        "label": "升级Deep Bond"
      },
      {
        "id": "a4",
        "label": "推进一天衰减"
      },
      {
        "id": "a5",
        "label": "终止关系保留亲密"
      },
      {
        "id": "a6",
        "label": "推进7天冷却"
      }
    ],
    "reconstruction_choice": "每10亲密升1级、CF日减2为自定；CP/Bond不衰减、9/100上限、7天冷却按文案。"
  },
  {
    "id": "TOP03",
    "categories": [
      "社交",
      "权益"
    ],
    "name": "关系信物类型与失效修复",
    "core_loop": "赠花/戒/包/表建立关系→关系转换锁信物→50%价修复",
    "distinctive": "不同物品对应不同关系，恢复不再制造亲密/魅力。",
    "rules": "戒CP；包表Best Friend等深关系；花CF；CP转出锁戒；失效信物付原价50%恢复但不增亲密/魅力。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11532,
        "text": "Rings are used to form Couple relationships. Watches and bags are used to form Best Friend/Confidant/Brother/Sister/Brother & Sister relationships. Flowers are used to form Close Friend relationships"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11534,
        "text": "Rings can only be sent to your CP. Bags and watches can be sent to your CP and Deep Bonds. Flowers can be sent to all relationships"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12274,
        "text": "This relationship used to be a CP relationship, and the CP-exclusive ring keepsakes will be locked"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12319,
        "text": "To restore an invalid keepsake, you need to pay 50% of the original keepsake price in coins. And it will not increase the relationship intimacy and the recipient's charm value."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8601,
        "text": "* Building a relationship will consume keepsake"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8602,
        "text": "*Switching relationship will consume keepsake"
      }
    ],
    "unknowns": [
      "具体售价、每日上限、哪些转移失效、修复后有效期未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "信物账本、类型门禁与无重复成长修复。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "关系信物类型与失效修复",
    "actions": [
      {
        "id": "a0",
        "label": "切换到CP关系"
      },
      {
        "id": "a1",
        "label": "切换到Deep Bond"
      },
      {
        "id": "a2",
        "label": "赠花信物"
      },
      {
        "id": "a3",
        "label": "赠戒指信物"
      },
      {
        "id": "a4",
        "label": "赠包表信物"
      },
      {
        "id": "a5",
        "label": "CP转出锁戒"
      },
      {
        "id": "a6",
        "label": "信物失效"
      },
      {
        "id": "a7",
        "label": "按原价50%修复"
      }
    ],
    "reconstruction_choice": "信物原价20、成长10；修复10且不重复亲密/魅力；转出戒锁不得修复为本地清晰选择。"
  },
  {
    "id": "TOP04",
    "categories": [
      "社交",
      "权益"
    ],
    "name": "双人限定关系卡墙",
    "core_loop": "已CP拿卡→赠对方→双人空间展示→重复卡仅加成长→重展示半价",
    "distinctive": "关系收藏双方共显，去重与重复成长不同处理。",
    "rules": "重复不增新卡但有亲密/魅力/花点；重展示付50%币并得50%原亲密/花点；CP任一方可赠卡给对方。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9102,
        "text": "After two users form a CP, they may obtain a Limited Relationship Card for both characters through events or other means. Either user can gift the card to the other. Once gifted, it will appear in both users' Intimate Space, profiles, and other locations."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12830,
        "text": "You and this user already have this Relationship Card. Adding another won't add a new card to the Card Wall, but you will still receive the Intimacy points, Charm points, and Flower points."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9792,
        "text": "Displaying this Relationship Card again costs 50% of its price in coins. You will also receive 50% of its original Intimacy points and Flower points."
      }
    ],
    "unknowns": [
      "卡稀有度、获得任务、可展示时效、退CP后卡处理未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "双人共享卡墙、去重与重复奖励账本。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "双人限定关系卡墙",
    "actions": [
      {
        "id": "a0",
        "label": "切换另一方赠卡"
      },
      {
        "id": "a1",
        "label": "赠送同一张星光卡"
      },
      {
        "id": "a2",
        "label": "卡片展示到期"
      },
      {
        "id": "a3",
        "label": "半价重新展示"
      },
      {
        "id": "a4",
        "label": "解除CP"
      }
    ],
    "reconstruction_choice": "星光卡原价20、各成长10、重复去重但成长；半价展示仅亲密/花点50%，不加魅力。"
  },
  {
    "id": "TOP05",
    "categories": [
      "社交",
      "玩法"
    ],
    "name": "部落火箭共同燃料与返航分奖",
    "core_loop": "部落发火箭→成员供燃料→到站继续飞→返航→贡献者分奖",
    "distinctive": "社区资源投入变成合作远征，未供燃料不给奖励。",
    "rules": "到站仍需飞动态秒数并送燃料；返航给所有供燃料用户；未供不给；旧宝箱升级火箭并开放商店/礼物。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12055,
        "text": "The Tribe Rocket has returned, and rewards will be issued to all users who contributed fuel"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12406,
        "text": "Tribe Rocket arrived at %1$s! Keep flying %2$s s, send fuel to fetch rewards!"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12925,
        "text": "You didn't send fuel so you get no reward. Join next time!"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12396,
        "text": "Tribe Chest has evolved into Tribe Rockets! The Tribe Store and Tribe Gift system are now unlocked - come experience it now!"
      }
    ],
    "unknowns": [
      "燃料成本、航程、奖励公式、最低贡献与发射条件未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "贡献/航程/返航模型，参数自定；不把旧箱规则套火箭。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "部落火箭共同燃料与返航分奖",
    "actions": [
      {
        "id": "a0",
        "label": "阿蓝供燃料"
      },
      {
        "id": "a1",
        "label": "阿红供燃料"
      },
      {
        "id": "a2",
        "label": "族长发射"
      },
      {
        "id": "a3",
        "label": "飞行10秒"
      },
      {
        "id": "a4",
        "label": "到站补燃料"
      },
      {
        "id": "a5",
        "label": "等待10秒返航"
      },
      {
        "id": "a6",
        "label": "返航分奖"
      }
    ],
    "reconstruction_choice": "2燃料发射、100里航程、到站再10秒/补燃料、每贡献5奖励自定；未供阿绿不给。"
  },
  {
    "id": "TOP06",
    "categories": [
      "社交",
      "权益"
    ],
    "name": "部落干部资产与成员任务回报",
    "core_loop": "任命干部→管理成员/资产/发射火箭→成员完成任务→族长额外领奖",
    "distinctive": "职位具有资产分配和玩法发起权，成员完成任务给领导者回报。",
    "rules": "任命可授管理成员、分配资产、发火箭；成员完成quest使族长获更多币/道具。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12142,
        "text": "The other party will have the authority to manage members, allocate assets, launch rockets, etc. Are you sure to set it?"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12771,
        "text": "When a member completes a quest, the tribe leader will have more Coin and item rewards."
      }
    ],
    "unknowns": [
      "角色名称、级别/人数、审批、账本审计、任务定义未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "干部能力与任务归属模型，不含基础群功能。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "部落干部资产与成员任务回报",
    "actions": [
      {
        "id": "a0",
        "label": "族长任命干部"
      },
      {
        "id": "a1",
        "label": "授权资产分配"
      },
      {
        "id": "a2",
        "label": "授权火箭发射"
      },
      {
        "id": "a3",
        "label": "分配10资产给成员"
      },
      {
        "id": "a4",
        "label": "成员完成quest"
      },
      {
        "id": "a5",
        "label": "干部发火箭"
      },
      {
        "id": "a6",
        "label": "族长撤销权限"
      }
    ],
    "reconstruction_choice": "资产50、分10、quest族长5币/1道具为参数；干部三权限分离。"
  },
  {
    "id": "TOP07",
    "categories": [
      "玩法",
      "权益"
    ],
    "name": "幸运号码礼物抽奖",
    "core_loop": "房管设置奖品/礼物→参与赠抽奖礼物→命中幸运号→派奖后活动结束",
    "distinctive": "抽奖由房内用户赠礼触发，难度与礼物成本可选。",
    "rules": "匹配幸运号得奖；中奖后动态小时内自动结束；低价礼物/低难度更好机会提示；奖品有效期≥动态小时。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11688,
        "text": "Send a lottery gift. Match the lucky number to win a reward"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12547,
        "text": "Users give a Lottery Gift. Match the lucky number to win a prize. The event will end automatically within %1$s hours after the prize is won."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12418,
        "text": "Try cheaper lottery gifts or lower difficulty for better odds."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11107,
        "text": "Only items with a validity of ≥%1$s hour(s) can be used as rewards"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11735,
        "text": "Set Lottery Gift"
      }
    ],
    "unknowns": [
      "号码空间、概率、同号、多次中奖/结束时窗与剩余礼物退款未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "无真实资产的号码抽奖；概率/中奖后时窗参数标自定。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "幸运号码礼物抽奖",
    "actions": [
      {
        "id": "a0",
        "label": "赠礼试号1"
      },
      {
        "id": "a1",
        "label": "赠礼试号3"
      },
      {
        "id": "a2",
        "label": "推进1小时结束"
      },
      {
        "id": "a3",
        "label": "使用奖品"
      },
      {
        "id": "a4",
        "label": "推进奖品有效期"
      }
    ],
    "reconstruction_choice": "号码1..3、幸运3、每礼5币、中奖后1小时结束/奖品2小时；确定性试号非原概率。"
  },
  {
    "id": "TOP08",
    "categories": [
      "游戏",
      "玩法"
    ],
    "name": "武器PK与任务/护盾候选",
    "core_loop": "团队PK→武器商店→可购买护盾→任务游戏",
    "distinctive": "武器PK+mission明确有入口，护盾提示暗示保护他人。",
    "rules": "仅资源写Weapon PK + mission gameplay和买shield保护他人；不能推定MICO式Lv5双倍。",
    "evidence_strength": "C",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12680,
        "text": "Weapon PK + mission gameplay"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12681,
        "text": "Weapon Shop"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10227,
        "text": "Go to weapon store and buy shield to protect him?"
      }
    ],
    "unknowns": [
      "武器表、升级、攻击/保护、任务、时限、PK计分未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "先补小游戏模块/方法，暂只做机制线框。",
    "replica_effort": "高",
    "readiness": "需补证据",
    "demo_status": "未实现",
    "title": "武器PK与任务/护盾候选",
    "actions": [
      {
        "id": "a0",
        "label": "进入武器PK线框"
      },
      {
        "id": "a1",
        "label": "执行概念任务"
      },
      {
        "id": "a2",
        "label": "为阿红购买模拟盾"
      },
      {
        "id": "a3",
        "label": "模拟一次保护命中"
      },
      {
        "id": "a4",
        "label": "完成局部契约实验"
      }
    ],
    "reconstruction_choice": "仅Weapon PK+mission和shield保护他人资源；一次盾消耗/任务全自定，无Lv5或原攻击计分。"
  },
  {
    "id": "TOP09",
    "categories": [
      "游戏",
      "权益"
    ],
    "name": "战斗游戏5级解锁League",
    "core_loop": "任一战斗游戏升到5→联赛入口开放→赛季竞技/奖励",
    "distinctive": "多游戏成长共同解锁联赛，而非每个小游戏孤立。",
    "rules": "任一battle game Level5才解League；存在season rewards。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10590,
        "text": "League can only be unlocked when any battle game reaches level 5."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9627,
        "text": "Congratulations, you get season rewards"
      }
    ],
    "unknowns": [
      "哪些游戏计入、EXP、联赛分段、赛季时长/匹配/奖励未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "共享解锁状态与联赛概念；赛制需另证。",
    "replica_effort": "中",
    "readiness": "需补证据",
    "demo_status": "未实现",
    "title": "战斗游戏5级解锁League",
    "actions": [
      {
        "id": "a0",
        "label": "战斗A成长一级"
      },
      {
        "id": "a1",
        "label": "战斗B成长一级"
      },
      {
        "id": "a2",
        "label": "检查League门禁"
      },
      {
        "id": "a3",
        "label": "进入League概念页"
      },
      {
        "id": "a4",
        "label": "提交赛季奖励设计"
      }
    ],
    "reconstruction_choice": "战斗A/B为未知游戏占位、每动作一级本地参数；Lv5资格已恢复，赛制只设计不执行。"
  },
  {
    "id": "TOP10",
    "categories": [
      "社交",
      "游戏"
    ],
    "name": "公开正式比赛游戏名片",
    "core_loop": "打公开正式局→记录表现→生成游戏卡→寻找同水平队友",
    "distinctive": "社交名片基于比赛数据，有明确统计覆盖边界。",
    "rules": "游戏卡帮助匹配同水平队友；2025-06-01起官方公开/语音/Battle/Club比赛纳入，私人房排除；删除同时移除队友卡和游戏卡。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10132,
        "text": "Game cards can help you match with equally skilled teammates, give it a try!"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9731,
        "text": "Data only includes official matches in public rooms, voice rooms, Battle matches, and Club rooms from June 1, 2025 onward. Private rooms are excluded."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9761,
        "text": "Deletion will remove both Teammate Cards and Game Card from your profile."
      }
    ],
    "unknowns": [
      "具体统计指标、匹配评分、卡片生成门槛未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "公开/私房统计过滤与能力卡；不复刻未知匹配算法。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "公开正式比赛游戏名片",
    "actions": [
      {
        "id": "a0",
        "label": "记录2025年5月公开赛"
      },
      {
        "id": "a1",
        "label": "记录私人房胜局"
      },
      {
        "id": "a2",
        "label": "记录6月官方公开赛"
      },
      {
        "id": "a3",
        "label": "记录6月Club赛"
      },
      {
        "id": "a4",
        "label": "生成能力名片"
      },
      {
        "id": "a5",
        "label": "删除双卡"
      }
    ],
    "reconstruction_choice": "名片展示场数/胜场作为补齐统计；日期和私人排除按文案，不恢复匹配算法。"
  },
  {
    "id": "TOP11",
    "categories": [
      "社交",
      "游戏"
    ],
    "name": "游戏Club固定类型与专属房",
    "core_loop": "选Club类型创会→成员申请→专属Club游戏房→组织成员",
    "distinctive": "组织类型创建后不能改，带有游戏房边界。",
    "rules": "Club类型创建后不能改；有Club Applications、Club Members Only、Club Game Room。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9537,
        "text": "Club type \"%1$s\" cannot be changed after creation. Continue?"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11087,
        "text": "Once created, the club type cannot be changed. Please choose carefully."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9525,
        "text": "Club Applications"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9533,
        "text": "Club Members Only"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9528,
        "text": "Club Game Room"
      }
    ],
    "unknowns": [
      "各类型、等级/容量、创建权限和房间玩法限制未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "固定类型Club与游戏房成员门禁；非普通群聊。",
    "replica_effort": "中",
    "readiness": "需补证据",
    "demo_status": "未实现",
    "title": "游戏Club固定类型与专属房",
    "actions": [
      {
        "id": "a0",
        "label": "创建Ludo类型Club"
      },
      {
        "id": "a1",
        "label": "尝试改成另一类型"
      },
      {
        "id": "a2",
        "label": "提交Club申请"
      },
      {
        "id": "a3",
        "label": "管理员批准成员"
      },
      {
        "id": "a4",
        "label": "进入成员专属游戏房"
      },
      {
        "id": "a5",
        "label": "退出Club"
      }
    ],
    "reconstruction_choice": "Ludo仅示例类型未恢复官方Club全集；申请/批准局部契约、固定类型/成员门禁按文案。"
  },
  {
    "id": "TOP12",
    "categories": [
      "权益",
      "游戏"
    ],
    "name": "VIP竞技门禁与高阶临时封房",
    "core_loop": "开VIP→进入VIP Room/筛VIP用户→高阶踢人临时阻入",
    "distinctive": "权限同时决定竞技同圈层和房管级别。",
    "rules": "VIP Room仅VIP可玩；VIP可筛VIP用户；VIP16踢出后1小时不能进；VIP9动态头像。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11104,
        "text": "Only VIPs can join the games in the VIP Room."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9069,
        "text": "After becoming a VIP, you will have the right to filter VIP users."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12525,
        "text": "Use VIP16 privileges to kick the user out of the room? After being kicked out, the user cannot enter the room for 1 hour."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12472,
        "text": "Unlock privilege of uploading dynamic avatars after VIP9"
      }
    ],
    "unknowns": [
      "费用、具体房局差异、踢人是否有角色条件、抗滥用覆盖未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "权益矩阵与1小时阻入计时；本地模拟。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "VIP竞技门禁与高阶临时封房",
    "actions": [
      {
        "id": "a0",
        "label": "VIP升到9"
      },
      {
        "id": "a1",
        "label": "进入VIP竞技房"
      },
      {
        "id": "a2",
        "label": "只筛选VIP队友"
      },
      {
        "id": "a3",
        "label": "设置动态头像"
      },
      {
        "id": "a4",
        "label": "VIP16房主踢出"
      },
      {
        "id": "a5",
        "label": "尝试再次进入"
      },
      {
        "id": "a6",
        "label": "推进60分钟"
      }
    ],
    "reconstruction_choice": "VIP16仅本地房主可踢作为防歧义补齐；60分钟按文案，竞技规则未知不模拟。"
  },
  {
    "id": "TOP13",
    "categories": [
      "权益",
      "社交"
    ],
    "name": "贵族称号启用与匿名入房",
    "core_loop": "获得爵位→选择启用→按最高爵位授权益→匿名入场",
    "distinctive": "持有多个爵位仅最高项决定权益，匿名把头像/名/入场都隐藏。",
    "rules": "需使用称号才得权益；多个取最高；匿名时其他用户看不到头像昵称和进入；Noble Points有次月结转。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8693,
        "text": "2. Only by using aristocratic titles you can get all the aristocratic privileges"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8695,
        "text": "2. When somebody has more than one aristocratic title, the privileges of the highest title will be considered."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9235,
        "text": "Aristocratic privileges. After enabling it, other users in the live studio won't be able to see your profile pic, nickname and when you come in"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8523,
        "text": "%s Noble Points will carry over to next month."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12123,
        "text": "The invisibility privilege has been incorporated into the noble privileges. Please upgrade your noble level to obtain it."
      }
    ],
    "unknowns": [
      "级别列表、购买价格/有效期、匿名真实边界、点数结转条件未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "多称号能力优先级与匿名展示，不承诺隐私安全。",
    "replica_effort": "低",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "贵族称号启用与匿名入房",
    "actions": [
      {
        "id": "a0",
        "label": "启用银爵称号"
      },
      {
        "id": "a1",
        "label": "启用金爵称号"
      },
      {
        "id": "a2",
        "label": "按最高启用称号判权"
      },
      {
        "id": "a3",
        "label": "开启匿名入房"
      },
      {
        "id": "a4",
        "label": "停用全部称号"
      },
      {
        "id": "a5",
        "label": "推进次月结转"
      }
    ],
    "reconstruction_choice": "爵位名称/级别自定、结转全额为未恢复条件补齐；匿名只本地他人视图。"
  }
];
const configs = {
  "TOP01": {
    "state": {
      "phase": "配置",
      "role": "成员",
      "type": "CF",
      "reserve": 20,
      "bid": 0,
      "winner": null,
      "intimacy": 0,
      "relationship": "原CF",
      "wallet": 100
    }
  },
  "TOP02": {
    "state": {
      "phase": "无关系",
      "type": "CF",
      "intimacy": 0,
      "level": 1,
      "day": 0,
      "cooldown": 0
    }
  },
  "TOP03": {
    "state": {
      "type": "CF",
      "token": null,
      "valid": false,
      "locked": false,
      "wallet": 100,
      "intimacy": 0,
      "charm": 0
    }
  },
  "TOP04": {
    "state": {
      "cp": true,
      "wallet": 100,
      "cards": [],
      "intimacy": 0,
      "charm": 0,
      "flower": 0,
      "displayed": false,
      "giver": "阿蓝"
    }
  },
  "TOP05": {
    "state": {
      "phase": "准备",
      "fuel": {
        "阿蓝": 0,
        "阿红": 0,
        "阿绿": 0
      },
      "distance": 0,
      "seconds": 0,
      "rewards": [],
      "shop": false
    }
  },
  "TOP06": {
    "state": {
      "role": "成员",
      "permissions": [],
      "assets": 50,
      "memberReward": 0,
      "chiefCoins": 0,
      "chiefItems": 0,
      "task": false,
      "launched": false
    }
  },
  "TOP07": {
    "state": {
      "phase": "开放",
      "hour": 0,
      "lucky": 3,
      "draws": [],
      "winner": null,
      "endAt": null,
      "prizeExpires": null,
      "wallet": 50
    }
  },
  "TOP08": {
    "state": {
      "phase": "候选入口",
      "mission": false,
      "shield": false,
      "target": "阿红",
      "protectedHits": 0
    }
  },
  "TOP09": {
    "state": {
      "gameLevel": {
        "战斗A": 1,
        "战斗B": 1
      },
      "leagueUnlocked": false,
      "phase": "资格",
      "seasonReward": null
    }
  },
  "TOP10": {
    "state": {
      "records": [],
      "card": null,
      "teammateCard": null,
      "deleted": false
    }
  },
  "TOP11": {
    "state": {
      "type": null,
      "phase": "未建Club",
      "application": false,
      "member": false,
      "inGameRoom": false
    }
  },
  "TOP12": {
    "state": {
      "vip": 0,
      "hostVip": 16,
      "inRoom": false,
      "minute": 0,
      "bannedUntil": 0,
      "filter": false,
      "avatar": "静态"
    }
  },
  "TOP13": {
    "state": {
      "titles": [
        {
          "name": "银爵",
          "level": 2
        },
        {
          "name": "金爵",
          "level": 5
        }
      ],
      "enabled": [],
      "anonymous": false,
      "publicView": {
        "name": "阿蓝",
        "avatar": "蓝",
        "entry": true
      },
      "points": 100,
      "month": 1,
      "carry": 0
    }
  }
};
const handlers = {"TOP01": (s,a)=>{if(a==='切换房管')s.role='admin';
else if(a==='选择CP保底40'){need(s.phase==='配置','开拍不能改配置');s.type='CP';s.reserve=40;}
else if(a==='房管开拍'){need(['owner','admin'].includes(s.role)&&s.phase==='配置','只有房主或房管');s.phase='竞拍';}
else if(a==='阿蓝出价10'||a==='阿红出价50'){need(s.phase==='竞拍','没有竞拍');let b=a.includes('10')?10:50;need(b>s.bid,'需高于当前价');s.bid=b;s.winner=a.includes('阿蓝')?'阿蓝':'阿红';}
else if(a==='落槌关系成交'){need(s.phase==='竞拍','只能落槌一次');if(s.bid<s.reserve){s.phase='流拍保留关系';return;}s.wallet-=s.bid;s.relationship=s.type+' · '+s.winner;s.intimacy+=10;s.phase='已成交';}},
"TOP02": (s,a)=>{if(a==='申请CF并互相同意'){need(s.phase==='无关系'&&s.day>=s.cooldown,'终止后7天不能再申请');s.phase='关系';s.type='CF';s.level=Math.min(9,1+Math.floor(s.intimacy/10));}
else if(a==='互动增加10亲密'){need(s.phase==='关系','无关系');s.intimacy+=10;s.level=Math.min(s.type==='CF'?9:100,1+Math.floor(s.intimacy/10));}
else if(a==='升级CP'||a==='升级Deep Bond'){need(s.phase==='关系'&&s.type==='CF'&&s.level>=2,'CF至少Lv2');s.type=a==='升级CP'?'CP':'Deep Bond';s.level=Math.min(100,1+Math.floor(s.intimacy/10));}
else if(a==='推进一天衰减'){s.day++;if(s.phase==='关系'&&s.type==='CF'){s.intimacy=Math.max(0,s.intimacy-2);s.level=Math.min(9,1+Math.floor(s.intimacy/10));}}
else if(a==='终止关系保留亲密'){need(s.phase==='关系','无关系');s.phase='无关系';s.cooldown=s.day+7;}
else if(a==='推进7天冷却')s.day+=7;},
"TOP03": (s,a)=>{if(a==='切换到CP关系')s.type='CP';else if(a==='切换到Deep Bond')s.type='Deep Bond';
else if(a.startsWith('赠')){let token=a.includes('花')?'花':a.includes('戒')?'戒指':'包表';need((token==='花'&&s.type==='CF')||(token==='戒指'&&s.type==='CP')||(token==='包表'&&s.type==='Deep Bond'),'信物和关系类型不匹配');need(s.wallet>=20,'余额不足');s.wallet-=20;s.token=token;s.valid=true;s.locked=false;s.intimacy+=10;s.charm+=10;}
else if(a==='CP转出锁戒'){need(s.type==='CP'&&s.token==='戒指','需CP戒指');s.type='Deep Bond';s.locked=true;s.valid=false;}
else if(a==='信物失效'){need(s.token!==null&&s.valid,'无有效信物');s.valid=false;}
else if(a==='按原价50%修复'){need(s.token!==null&&!s.valid&&!s.locked&&s.wallet>=10,'锁戒/有效/余额不足不可修复');s.wallet-=10;s.valid=true;}},
"TOP04": (s,a)=>{if(a==='切换另一方赠卡')s.giver=s.giver==='阿蓝'?'阿红':'阿蓝';
else if(a==='赠送同一张星光卡'){need(s.cp&&s.wallet>=20,'必须双人CP且余额足够');s.wallet-=20;if(!s.cards.includes('星光'))s.cards.push('星光');s.intimacy+=10;s.charm+=10;s.flower+=10;s.displayed=true;}
else if(a==='卡片展示到期'){need(s.displayed,'未展示');s.displayed=false;}
else if(a==='半价重新展示'){need(s.cp&&s.cards.length>0&&!s.displayed&&s.wallet>=10,'必须拥有到期卡');s.wallet-=10;s.intimacy+=5;s.flower+=5;s.displayed=true;}
else if(a==='解除CP'){need(s.cp,'已解除');s.cp=false;s.displayed=false;}},
"TOP05": (s,a)=>{if(a==='阿蓝供燃料'||a==='阿红供燃料'){need(['准备','飞行','到站'].includes(s.phase),'已经返航');s.fuel[a.startsWith('阿蓝')?'阿蓝':'阿红']+=1;}
else if(a==='族长发射'){need(s.phase==='准备'&&Object.values(s.fuel).reduce((x,y)=>x+y)>=2,'本地发射需2燃料');s.phase='飞行';s.shop=true;}
else if(a==='飞行10秒'){need(s.phase==='飞行','未飞行');s.seconds+=10;s.distance=100;s.phase='到站';}
else if(a==='到站补燃料'){need(s.phase==='到站','尚未到站');s.fuel['阿蓝']+=1;s.phase='站后飞行';}
else if(a==='等待10秒返航'){need(s.phase==='站后飞行','到站仍须供燃料和飞行');s.seconds+=10;s.phase='已返航';}
else if(a==='返航分奖'){need(s.phase==='已返航','只可结算一次');s.rewards=Object.entries(s.fuel).filter(([n,v])=>v>0).map(([name,v])=>({name,reward:v*5}));s.phase='已结算';}},
"TOP06": (s,a)=>{if(a==='族长任命干部'){s.role='干部';s.permissions=['管理成员'];}
else if(a==='授权资产分配'){need(s.role==='干部','先任命');if(!s.permissions.includes('分配资产'))s.permissions.push('分配资产');}
else if(a==='授权火箭发射'){need(s.role==='干部','先任命');if(!s.permissions.includes('发火箭'))s.permissions.push('发火箭');}
else if(a==='分配10资产给成员'){need(s.permissions.includes('分配资产')&&s.assets>=10,'无分配权限或资产不足');s.assets-=10;s.memberReward+=10;}
else if(a==='成员完成quest'){need(!s.task,'任务不可重复');s.task=true;s.chiefCoins+=5;s.chiefItems+=1;}
else if(a==='干部发火箭'){need(s.permissions.includes('发火箭')&&!s.launched,'无权限或已发');s.launched=true;}
else if(a==='族长撤销权限'){s.permissions=[];s.role='成员';}},
"TOP07": (s,a)=>{if(a==='赠礼试号1'||a==='赠礼试号3'){need(s.phase==='开放'&&s.wallet>=5,'活动已结束/币不足');s.wallet-=5;let number=a.includes('试号1')?1:3;s.draws.push(number);if(number===s.lucky&&s.winner===null){s.winner='阿蓝';s.endAt=s.hour+1;s.prizeExpires=s.hour+2;}}
else if(a==='推进1小时结束'){s.hour++;if(s.endAt!==null&&s.hour>=s.endAt)s.phase='已结束';}
else if(a==='使用奖品'){need(s.winner!==null&&s.hour<s.prizeExpires,'未中奖或奖品已到期');s.used=true;}
else if(a==='推进奖品有效期'){need(s.winner!==null&&s.prizeExpires!==null,'尚未中奖，没有可推进的奖品有效期');s.hour+=2;if(s.endAt!==null&&s.hour>=s.endAt)s.phase='已结束';}},
"TOP08": (s,a)=>{if(a==='进入武器PK线框'){need(s.phase==='候选入口','已进入');s.phase='概念局面';}
else if(a==='执行概念任务'){need(s.phase==='概念局面'&&!s.mission,'本地任务一次');s.mission=true;}
else if(a==='为阿红购买模拟盾'){need(s.phase==='概念局面'&&!s.shield,'重复盾不可买');s.shield=true;}
else if(a==='模拟一次保护命中'){need(s.shield&&s.phase==='概念局面','需购买模拟盾');s.shield=false;s.protectedHits++;}
else if(a==='完成局部契约实验'){need(s.mission&&s.protectedHits>0&&s.phase==='概念局面','任务与保护均实验后完成');s.phase='实验完成';}},
"TOP09": (s,a)=>{if(a==='战斗A成长一级'||a==='战斗B成长一级'){s.gameLevel[a.includes('A')?'战斗A':'战斗B']++;}
else if(a==='检查League门禁'){need(Math.max(...Object.values(s.gameLevel))>=5,'任一battle game达到Lv5');s.leagueUnlocked=true;}
else if(a==='进入League概念页'){need(s.leagueUnlocked&&s.phase==='资格','尚未解锁');s.phase='League概念';}
else if(a==='提交赛季奖励设计'){need(s.phase==='League概念','先进入');s.seasonReward='待补赛制与奖品：仅提交设计';s.phase='设计完成';}},
"TOP10": (s,a)=>{if(a.startsWith('记录')){let r=a.includes('5月')?{date:'2025-05-31',mode:'公开',win:true}:a.includes('私人')?{date:'2025-06-02',mode:'私人',win:true}:a.includes('Club')?{date:'2025-06-02',mode:'Club',win:false}:{date:'2025-06-01',mode:'官方公开',win:true};s.records.push(r);}
else if(a==='生成能力名片'){let eligible=s.records.filter(r=>r.date>='2025-06-01'&&r.mode!=='私人');need(eligible.length>0,'无符合2025-06-01后正式公开赛事');s.card={matches:eligible.length,wins:eligible.filter(r=>r.win).length};s.teammateCard={level:'本地按胜场展示，非匹配评分'};s.deleted=false;}
else if(a==='删除双卡'){need(s.card!==null,'没有卡');s.card=null;s.teammateCard=null;s.deleted=true;}},
"TOP11": (s,a)=>{if(a==='创建Ludo类型Club'){need(s.phase==='未建Club','创建后类型不可变');s.type='Ludo（示例类型）';s.phase='Club';}
else if(a==='尝试改成另一类型'){need(s.type===null,'Club创建后固定类型');}
else if(a==='提交Club申请'){need(s.phase==='Club'&&!s.member&&!s.application,'申请状态');s.application=true;}
else if(a==='管理员批准成员'){need(s.application,'无申请');s.application=false;s.member=true;}
else if(a==='进入成员专属游戏房'){need(s.member&&!s.inGameRoom,'仅Club成员可进入');s.inGameRoom=true;}
else if(a==='退出Club'){need(s.member,'不是成员');s.member=false;s.inGameRoom=false;}},
"TOP12": (s,a)=>{if(a==='VIP升到9')s.vip=9;
else if(a==='进入VIP竞技房'||a==='尝试再次进入'){need(s.vip>0&&s.minute>=s.bannedUntil&&!s.inRoom,'需VIP且1小时阻入未结束');s.inRoom=true;}
else if(a==='只筛选VIP队友'){need(s.vip>0,'VIP权益');s.filter=true;}
else if(a==='设置动态头像'){need(s.vip>=9,'VIP9');s.avatar='动态视觉占位';}
else if(a==='VIP16房主踢出'){need(s.hostVip>=16&&s.inRoom,'房主VIP16与目标在房');s.inRoom=false;s.bannedUntil=s.minute+60;}
else if(a==='推进60分钟')s.minute+=60;},
"TOP13": (s,a)=>{if(a==='启用银爵称号'){if(!s.enabled.includes(2))s.enabled.push(2);}
else if(a==='启用金爵称号'){if(!s.enabled.includes(5))s.enabled.push(5);}
else if(a==='按最高启用称号判权'){need(s.enabled.length>0,'需使用称号才得权益');s.activeLevel=Math.max(...s.enabled);}
else if(a==='开启匿名入房'){need(s.enabled.length>0,'启用称号资格');s.anonymous=true;s.publicView={name:'匿名',avatar:'隐藏',entry:false};}
else if(a==='停用全部称号'){s.enabled=[];s.activeLevel=0;s.anonymous=false;s.publicView={name:'阿蓝',avatar:'蓝',entry:true};}
else if(a==='推进次月结转'){s.month++;s.carry=s.points;s.points=0;}}};
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
