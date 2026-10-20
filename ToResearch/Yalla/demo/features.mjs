// Pure deterministic local reconstruction. Source catalog facts and local choices remain separate.
export const definitions = [
  {
    "id": "YAL01",
    "categories": [
      "游戏",
      "玩法"
    ],
    "name": "观众干预的速度赛",
    "core_loop": "玩家参赛→观众点赞或送技能礼物→加速自己/干扰对手→终点排名领奖",
    "distinctive": "把观众互动变成竞速控制输入。",
    "rules": "点赞或带[$0]礼物可影响速度；高终点排名奖励更多；管理员可被授权管理速度赛。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 5667,
        "text": "1. During the game, players can like or give any player gifts with [$0] to use skills to increase their own speed or affect others' speed, and there will be different effects."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 6996,
        "text": "In each game, players have the opportunity to get the following rewards. Players who reach the finish line and rank high will receive more abundant rewards."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 5990,
        "text": "Allow Admins to Manage Speed Battle"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8244,
        "text": "Speed Battle"
      }
    ],
    "unknowns": [
      "[$0]含义、技能表、轨道与速度公式、人数和时间未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "固定轨道、技能按钮、排名结算，技能数值标为自定。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "观众干预的速度赛",
    "actions": [
      {
        "id": "a0",
        "label": "授权管理员"
      },
      {
        "id": "a1",
        "label": "管理员开赛"
      },
      {
        "id": "a2",
        "label": "观众点赞蓝队"
      },
      {
        "id": "a3",
        "label": "技能减速红队"
      },
      {
        "id": "a4",
        "label": "推进一秒"
      },
      {
        "id": "a5",
        "label": "结算"
      }
    ],
    "reconstruction_choice": "12格赛道；速度2、点赞+1、技能减速1；平终点蓝队先到裁决；奖金20/10为重构参数。"
  },
  {
    "id": "YAL02",
    "categories": [
      "游戏",
      "玩法"
    ],
    "name": "足球/团队礼物积分奖池",
    "core_loop": "送游戏专属礼物→积累奖池→获胜方分奖",
    "distinctive": "竞技结果与礼物奖池绑定，存在定时概率增益文案。",
    "rules": "有Crazy Football专属礼物；另一条团队奖池文案写胜队TOP1–4分享积分、定时概率增益。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 6792,
        "text": "Game gifts can only be sent in the Crazy Football game."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8491,
        "text": "The room owner who gets the corresponding ranking in the Crazy Football room list can get the following rewards:"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9212,
        "text": "You can get points and add points to the treasure chest by giving game gifts. The treasure chest has a probability of increasing the points every certain time, and the TOP 1-4 in the winning team can share the points."
      }
    ],
    "unknowns": [
      "团队奖池文字是否专属于足球未完成资源调用映射；比分算法、概率、奖励比例未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "现demo只有通用团队奖池，虽标题含Speed Battle但未实现速度技能；足球与奖池调用未证实前不合并。",
    "replica_effort": "中",
    "readiness": "需补证据",
    "demo_status": "已有",
    "title": "足球/团队礼物积分奖池",
    "actions": [
      {
        "id": "a0",
        "label": "选择足球入口"
      },
      {
        "id": "a1",
        "label": "足球专属礼物"
      },
      {
        "id": "a2",
        "label": "完成足球入口实验"
      },
      {
        "id": "a3",
        "label": "选择独立团队奖池"
      },
      {
        "id": "a4",
        "label": "开启定时增益"
      },
      {
        "id": "a5",
        "label": "支持蓝队一号"
      },
      {
        "id": "a6",
        "label": "支持蓝队二号"
      },
      {
        "id": "a7",
        "label": "支持红队"
      },
      {
        "id": "a8",
        "label": "定时结束结算"
      }
    ],
    "reconstruction_choice": "足球仅专属礼物入口实验；独立奖池前4均分、增益固定2倍；两条静态文案未关联。"
  },
  {
    "id": "YAL03",
    "categories": [
      "玩法",
      "权益"
    ],
    "name": "10级房间共同开宝箱",
    "core_loop": "房内赠金礼物→钥匙进度满→全房有机会得奖励→每日进度重置",
    "distinctive": "房间等级门槛与全房共享奖励，含排除型礼物规则。",
    "rules": "房Level10解锁；赠金礼物获得钥匙，排除golds-winning gift；GMT+2零点重置；全房均有机会获奖。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 5672,
        "text": "1. Only the rooms that reach Level 10 have treasure chests."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 5736,
        "text": "2. The chest key is obtained by sending gold gifts in the room (excluding golds-winning gift)."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 5777,
        "text": "3. When the progress bar of the chest key is filled up, the treasure chest will be opened."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 5798,
        "text": "4. Everyone in the room has a chance to get the rewards in the treasure chest."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 5838,
        "text": "7. The progress bar of the chest key will be reset at 00:00 (GMT+2) everyday."
      }
    ],
    "unknowns": [
      "钥匙兑换率、宝箱各级阈值、抽取分配与概率未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "共享进度、开箱和模拟分配，阈值/随机率自定。",
    "replica_effort": "低",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "10级房间共同开宝箱",
    "actions": [
      {
        "id": "a0",
        "label": "房间升到10级"
      },
      {
        "id": "a1",
        "label": "赠中奖金币礼物"
      },
      {
        "id": "a2",
        "label": "赠普通金币礼物"
      },
      {
        "id": "a3",
        "label": "全房开箱"
      },
      {
        "id": "a4",
        "label": "推进到GMT+2零点"
      }
    ],
    "reconstruction_choice": "普通礼物1钥匙、3钥匙开箱、每日一箱、固定分配用于可重复测试；全部在房成员进入候选。"
  },
  {
    "id": "YAL04",
    "categories": [
      "游戏",
      "玩法"
    ],
    "name": "押金式房内猜拳",
    "core_loop": "发起者选手势/胜者礼物并交押金→房消息邀人选手势→结算或过期返押金",
    "distinctive": "轻量手势小游戏绑定礼物押金和参与/胜者排行榜。",
    "rules": "押金为礼物对应金币；结束/到期退押金；2小时无人参与关闭；胜者榜按获得礼物数、参与榜按次数。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 5665,
        "text": "1. Choose a gesture and the gifts for the winner, then start the game. You need to pay golds for the gifts as a deposit, which will be returned to you when the game ends or expires."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 5732,
        "text": "2. Tap the Roshambo game messages in the room and choose a gesture to participate in the game."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 5734,
        "text": "2. The Top Winners rankings are based on the number of gifts won by playing Roshambo."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 5772,
        "text": "3. The Top Participants ranking is based on the times of playing Roshambo."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 5801,
        "text": "4. If no one participates in the game within 2 hours, the game will be closed and the deposit will be returned to the starter."
      }
    ],
    "unknowns": [
      "一对多手势比对、开奖时点、赠礼扣款和退款先后未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "发起/响应/到期状态机与两个榜，不接支付。",
    "replica_effort": "低",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "押金式房内猜拳",
    "actions": [
      {
        "id": "a0",
        "label": "发起押金20金币"
      },
      {
        "id": "a1",
        "label": "玩家出布参与"
      },
      {
        "id": "a2",
        "label": "玩家出剪刀参与"
      },
      {
        "id": "a3",
        "label": "结束并退款"
      },
      {
        "id": "a4",
        "label": "推进2小时"
      }
    ],
    "reconstruction_choice": "单响应者；押金20、赠礼榜只记录胜者礼物、参与榜记录次数；结算和到期返押金不重复。"
  },
  {
    "id": "YAL05",
    "categories": [
      "玩法",
      "权益"
    ],
    "name": "变声整蛊与防护牌",
    "core_loop": "对他人施变声→对方移除或加护盾→免疫时窗结束",
    "distinctive": "语音互动可被道具干预，并有可见反制。",
    "rules": "Protective Shield移除变声并防止再次施加10分钟；Remove Effects单次移除。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 5861,
        "text": "A \"Protective Shield\" card can eliminate the effect of a \"Voice Changer\" card and prevent someone from being applied a “Voice Changer” card in 10 mins."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 5871,
        "text": "A “Remove Effects” card can eliminate the effect of a \"Voice Changer\" card."
      }
    ],
    "unknowns": [
      "变声音效列表、目标同意与适用房模式、卡片获取/价格未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "道具状态与10分钟免疫倒计时；真实变声另立技术任务。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "变声整蛊与防护牌",
    "actions": [
      {
        "id": "a0",
        "label": "施加机器人变声"
      },
      {
        "id": "a1",
        "label": "使用防护牌"
      },
      {
        "id": "a2",
        "label": "单次移除效果"
      },
      {
        "id": "a3",
        "label": "推进10分钟"
      }
    ],
    "reconstruction_choice": "机器人为视觉占位，无音频/麦克风；防护10分钟按文案。"
  },
  {
    "id": "YAL06",
    "categories": [
      "社交",
      "权益"
    ],
    "name": "CP绑定与专属礼物亲密",
    "core_loop": "双方绑定CP→送专属礼物增亲密→榜单展示→解绑失去权益",
    "distinctive": "包内有异性绑定门槛和CP礼物加成，不能泛化成全部关系系统。",
    "rules": "绑定要求不同性别；给CP专属礼物增加额外亲密；解绑后相关权益丧失。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 6115,
        "text": "Binding a CP relationship requires both parties to be of different genders. Please confirm your gender information before proceeding."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 6168,
        "text": "CP Rankings"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8121,
        "text": "Sending this gift to your CP will grant extra intimacy."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8529,
        "text": "This action cannot be undone. Once the CP relationship is unbound, all associated benefits will be lost."
      }
    ],
    "unknowns": [
      "邀请同意流程、等级、加成倍率、解绑亲密处理未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "双向邀请、模拟亲密及权益开关；门槛作为可配置策略。",
    "replica_effort": "低",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "CP绑定与专属礼物亲密",
    "actions": [
      {
        "id": "a0",
        "label": "切换对象性别"
      },
      {
        "id": "a1",
        "label": "发送CP邀请"
      },
      {
        "id": "a2",
        "label": "对象同意"
      },
      {
        "id": "a3",
        "label": "送CP专属礼物"
      },
      {
        "id": "a4",
        "label": "解除CP"
      }
    ],
    "reconstruction_choice": "双向同意、每礼物15亲密、解绑保留亲密为重构；不同性别为本条资源门槛。"
  },
  {
    "id": "YAL07",
    "categories": [
      "社交",
      "权益"
    ],
    "name": "房会员亲密与徽章熄亮",
    "core_loop": "支付房会员费→做任务/赠会员礼物→亲密成长与徽章→退组锁定、重入解锁",
    "distinctive": "房主收费会员组织与可恢复亲密绑定；不同于普通关注。",
    "rules": "房主设置会费且收益有日上限；会员礼物1.2倍亲密；退组锁亲密/权益、重入解锁；任务可重新点亮灰徽章。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 7689,
        "text": "Please set the membership fee for your room. Users can join your room by paying the fee. You will get the reward no more than a daily limit."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8105,
        "text": "Send exclusive member gifts to get 1.2 times intimacy points."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 7027,
        "text": "Intimacy points and privileges will be locked when removed. The intimacy points will be unlocked by re-joining the member group."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9433,
        "text": "Your member badge is greyed out. Complete the member tasks to light it up."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 6356,
        "text": "Congratulations! Your room member group is in TOP10 weekly ranking. You obtained an exclusive room theme."
      }
    ],
    "unknowns": [
      "会费范围、会员有效期、日上限、徽章变灰周期未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "会员组、任务、徽章状态与1.2倍计分；费用为模拟。",
    "replica_effort": "低",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "房会员亲密与徽章熄亮",
    "actions": [
      {
        "id": "a0",
        "label": "加入房会员"
      },
      {
        "id": "a1",
        "label": "赠会员礼物"
      },
      {
        "id": "a2",
        "label": "完成点亮任务"
      },
      {
        "id": "a3",
        "label": "退出会员"
      },
      {
        "id": "a4",
        "label": "重新加入解锁"
      },
      {
        "id": "a5",
        "label": "下一日"
      }
    ],
    "reconstruction_choice": "会费10、房主日上限20；基础亲密10×1.2；任务和灰化触发为本地配置，重入保留。"
  },
  {
    "id": "YAL08",
    "categories": [
      "权益"
    ],
    "name": "90天VIP升降与退款冻结",
    "core_loop": "购买得VIP积分→升级清零开启90天→维护/降级→退款欠积分冻结",
    "distinctive": "积分周期、跳级、重新评定及冻结组成完整权益状态机。",
    "rules": "90天内升高等级即积分清零；周期末重新评定；退款造成积分不足冻结；180天未解冻则剩余有效期清零。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 6973,
        "text": "If you are not VIP yet, when your VIP Points meet the requirements of a certain VIP level during a 90-day period, you will reach this VIP level and your VIP Points will be reset to 0. If you fail to reach any VIP level during the 90-day period, your accumulated VIP Points will be reset to 0 when the period ends."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 6985,
        "text": "If your VIP level is not upgraded during the period, when the period is over, your VIP level will be reset according to the VIP Points you earned within the period, and your VIP Points will be reset to 0. To maintain your current VIP level, you need to accumulate the VIP Points needed from the previous level during the period. Otherwise, your VIP level will be downgraded."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8477,
        "text": "The period of validity for each VIP level is 90 days. During the 90-day period, if your VIP Points meet the requirement for a higher level, your VIP level will be immediately upgraded and your VIP Points will be reset to 0. Upgrading by skipping a certain level is supported."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 6979,
        "text": "If you don't have enough VIP Points to be deducted for a refund, your VIP membership will be frozen until you pay off the VIP Points you owe."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 7680,
        "text": "Please note that if your VIP membership is not unfrozen within 180 days of freeze, your remaining VIP validity period will be reset to 0 days, but your VIP Points will not be reset to 0."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8410,
        "text": "The VIP program is different from Yalla Premium. Generally speaking, VIP membership is acquired by earning VIP Points through your in-app purchases, while Yalla Premium membership is acquired through direct purchase."
      }
    ],
    "unknowns": [
      "逐级点数阈值、宽限期时长、不同新旧文案配置是否同版生效未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "参数化周期/升降/冻结模拟器，阈值自行定义。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "90天VIP升降与退款冻结",
    "actions": [
      {
        "id": "a0",
        "label": "累积100积分升级"
      },
      {
        "id": "a1",
        "label": "模拟退款冻结"
      },
      {
        "id": "a2",
        "label": "补足解冻积分"
      },
      {
        "id": "a3",
        "label": "推进90天评定"
      },
      {
        "id": "a4",
        "label": "推进180天"
      }
    ],
    "reconstruction_choice": "每级100点、最低Lv1、有效期初值270天；升级清零/90天重评/180天冻结清有效期保留明确文案。"
  },
  {
    "id": "YAL09",
    "categories": [
      "权益"
    ],
    "name": "Premium爵位返金与成长倍率",
    "core_loop": "直接购买爵位→得到徽章/车/倍率/返金→使用权益",
    "distinctive": "直接购买Premium与积分VIP双轨，伯爵/侯爵有不同增长和送礼返金。",
    "rules": "Count文案1.2倍升级、5%送礼返金；Marquis 1.3倍、10%；Baron1.1倍；可选择VIP/Premium显示徽章。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8386,
        "text": "Thank you for being a Yalla Premium member. Your membership includes the following privileges:\n1. Premium badge for Count\n2. Exclusive luxury car for Count\n3. Level up at 1.2x speed\n4. 5% gold rebate on sending gifts\n5. Customize your profile cover\n6. Exclusive room theme\n7. Some other privileges"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8387,
        "text": "Thank you for being a Yalla Premium member. Your membership includes the following privileges:\n1. Premium badge for Marquis\n2. Exclusive luxury car for Marquis\n3. Level up at 1.3x speed\n4. 10% gold rebate on sending gifts\n5. Customize your profile cover\n6. 10 whole-platform broadcasts\n7. Some other privileges"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8388,
        "text": "Thank you for being a Yalla Premium member. Your membership includes the following privileges:\n1. Receive golds for logging in every day\n2. Premium badge for Baron\n3. Exclusive luxury car for Baron\n4. Level up at 1.1x speed\n5. Exclusive name card for Baron\n6. Some other privileges"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 6972,
        "text": "If you are both a VIP member and a Yalla Premium member, you can choose which membership privilege to use to control your identity badge displayed on mic and the color of your username in chatroom messages."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8410,
        "text": "The VIP program is different from Yalla Premium. Generally speaking, VIP membership is acquired by earning VIP Points through your in-app purchases, while Yalla Premium membership is acquired through direct purchase."
      }
    ],
    "unknowns": [
      "售价、订阅周期、返金适用礼物、实际配置未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "双轨权益表与倍率/返金账本，模拟余额。",
    "replica_effort": "低",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "Premium爵位返金与成长倍率",
    "actions": [
      {
        "id": "a0",
        "label": "选择Count"
      },
      {
        "id": "a1",
        "label": "选择Marquis"
      },
      {
        "id": "a2",
        "label": "送礼100金币"
      },
      {
        "id": "a3",
        "label": "显示Premium徽章"
      },
      {
        "id": "a4",
        "label": "显示VIP徽章"
      }
    ],
    "reconstruction_choice": "Baron返金未恢复取0；Count/Marquis明确倍率；100金币礼物仅模拟。"
  },
  {
    "id": "YAL10",
    "categories": [
      "权益",
      "玩法"
    ],
    "name": "自定义房主题的时效与冻结",
    "core_loop": "有资格上传→审核→7/30天使用续期→会员失效冻结→恢复",
    "distinctive": "房装扮包含购买、审核退还、使用资格冻结多个独立状态。",
    "rules": "Premium/VIP可上传；7天799金币、30天1999；会员失效冻结；被拒退币或退VIP3+免费次数。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 5670,
        "text": "1. Only Yalla Premium members and VIP users can upload and use custom room themes."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 5762,
        "text": "3. A custom room theme is valid for 7 or 30 days. You can renew it with 799 golds for 7 days or 1999 golds for 30 days. When your premium membership or VIP membership expires, your custom room themes will be frozen."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 5828,
        "text": "6. If the custom room theme is rejected, golds you paid will be refunded. If the custom theme is obtained by the privilege for VIP 3 and above users, the times to have free custom theme will be refunded."
      }
    ],
    "unknowns": [
      "审核规则、VIP免费额度、冻结期间时长是否继续流逝未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "上传占位、审核模拟、有效期与冻结，不复刻素材商店。",
    "replica_effort": "低",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "自定义房主题的时效与冻结",
    "actions": [
      {
        "id": "a0",
        "label": "用金币上传7天主题"
      },
      {
        "id": "a1",
        "label": "用VIP3免费次数上传"
      },
      {
        "id": "a2",
        "label": "审核通过"
      },
      {
        "id": "a3",
        "label": "审核拒绝退款"
      },
      {
        "id": "a4",
        "label": "会员失效冻结"
      },
      {
        "id": "a5",
        "label": "续会员解冻"
      },
      {
        "id": "a6",
        "label": "推进7天"
      },
      {
        "id": "a7",
        "label": "用金币上传30天主题"
      }
    ],
    "reconstruction_choice": "免费次数初值1、冻结照常耗时为补齐；上传是本地占位审核。；另保留30天1999金币申请。"
  },
  {
    "id": "YAL11",
    "categories": [
      "权益",
      "玩法"
    ],
    "name": "房间置顶卡拍卖",
    "core_loop": "2小时拍卖置顶卡→赢家房间自动置顶→无人出价时转直接购买",
    "distinctive": "流量位置按时段竞拍，未售可立即买。",
    "rules": "每卡拍卖2小时；拍得后自动置顶；无人出价结束后可直接买并立即生效。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 6566,
        "text": "Each Pin on Top card is sold by an auction lasting for 2 hours. If you successfully purchase one, your room will be pinned on top automatically. If no bid is made by the end of the auction, the Pin on Top Card can be purchased and be effective immediately after purchase."
      }
    ],
    "unknowns": [
      "出价步长、押金返还、置顶时长和同分处理未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "时段拍卖及榜首页位置模拟。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "房间置顶卡拍卖",
    "actions": [
      {
        "id": "a0",
        "label": "阿蓝出价20"
      },
      {
        "id": "a1",
        "label": "阿红出价30"
      },
      {
        "id": "a2",
        "label": "推进2小时落槌"
      },
      {
        "id": "a3",
        "label": "无人竞价后直接买"
      }
    ],
    "reconstruction_choice": "出价20/30、流拍直购10、结束扣最高者模拟余额；原押金/置顶时长未知。"
  },
  {
    "id": "YAL12",
    "categories": [
      "权益",
      "玩法"
    ],
    "name": "徽章星级与限时荣誉榜",
    "core_loop": "达成成就→得铜银金徽章星→累计星排名→按周期授荣誉",
    "distinctive": "可长期积累成就和短期荣誉形成两层身份系统。",
    "rules": "一条规则铜1/银3/金11星；相同星先获得者优先；通常周日发荣誉一周，Billionaire每月首个周日发约一月。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 5896,
        "text": "Achievement Badge Rankings are based on the number of stars of badge holders. For an Achievement Badge, the stars you can get at each level are as follows: \nBronze - 1 star \nSilver - 3 stars \nGold - 11 stars"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 5680,
        "text": "1. The rankings are based on the number of stars of badge holders.\n2. In case two or more users have equal number of stars, the user who first obtained these stars will be ranked higher."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 6564,
        "text": "Each Achievement Badge has four levels from low to high: Bronze - Silver - Gold - Diamond."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 6565,
        "text": "Each Achievement Badge has three levels from low to high: Bronze - Silver - Gold."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 7572,
        "text": "Other Honor Badges are awarded to eligible users every Sunday and are valid for one week."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8402,
        "text": "The \"Yalla Billionaire\" Honor Badges are awarded to eligible users on the first Sunday of every month and is valid for about one month."
      }
    ],
    "unknowns": [
      "同时有四级含Diamond与三级版本文案；钻石星数、具体成就任务、版本配置未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "采用明确三级星规则演示；四级作为未决配置。",
    "replica_effort": "低",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "徽章星级与限时荣誉榜",
    "actions": [
      {
        "id": "a0",
        "label": "阿蓝获得金徽章"
      },
      {
        "id": "a1",
        "label": "阿红获得金徽章"
      },
      {
        "id": "a2",
        "label": "阿红获得银徽章"
      },
      {
        "id": "a3",
        "label": "周日发周荣誉"
      },
      {
        "id": "a4",
        "label": "月首周日发Billionaire"
      },
      {
        "id": "a5",
        "label": "推进7天"
      },
      {
        "id": "a6",
        "label": "阿蓝获得铜徽章"
      },
      {
        "id": "a7",
        "label": "阿红获得铜徽章"
      }
    ],
    "reconstruction_choice": "采用铜1银3金11；钻石未恢复；荣誉月取30天，先获得同分优先。"
  }
];
const configs = {
  "YAL01": {
    "state": {
      "phase": "等待",
      "role": "房主",
      "authorized": false,
      "runners": [
        0,
        0
      ],
      "speed": [
        2,
        2
      ],
      "winner": null,
      "rewards": [
        0,
        0
      ]
    }
  },
  "YAL02": {
    "state": {
      "phase": "选择分支",
      "branch": null,
      "team": [
        0,
        0
      ],
      "contributors": [
        0,
        0,
        0,
        0,
        0
      ],
      "pool": 0,
      "footballGift": 0,
      "boost": false,
      "rewards": []
    }
  },
  "YAL03": {
    "state": {
      "roomLevel": 9,
      "keys": 0,
      "opened": false,
      "rewards": [],
      "day": 0
    }
  },
  "YAL04": {
    "state": {
      "phase": "未发起",
      "wallet": 100,
      "deposit": 0,
      "hours": 0,
      "participations": 0,
      "winningGifts": 0,
      "hand": "石头",
      "result": null
    }
  },
  "YAL05": {
    "state": {
      "effect": "无",
      "shieldUntil": 0,
      "minute": 0,
      "removed": 0
    }
  },
  "YAL06": {
    "state": {
      "phase": "无关系",
      "genderA": "女",
      "genderB": "男",
      "intimacy": 0,
      "benefits": false
    }
  },
  "YAL07": {
    "state": {
      "member": false,
      "intimacy": 0,
      "locked": false,
      "badge": "灰",
      "ownerRevenue": 0,
      "wallet": 100,
      "day": 0
    }
  },
  "YAL08": {
    "state": {
      "level": 1,
      "points": 0,
      "day": 0,
      "cycleEnd": 90,
      "frozen": false,
      "frozenAt": null,
      "validUntil": 270
    }
  },
  "YAL09": {
    "state": {
      "title": "Baron",
      "growth": 0,
      "wallet": 1000,
      "cashback": 0,
      "badge": "VIP"
    }
  },
  "YAL10": {
    "state": {
      "vip": true,
      "wallet": 3000,
      "phase": "无主题",
      "daysLeft": 0,
      "cost": 0,
      "freeUses": 1,
      "useFree": false
    }
  },
  "YAL11": {
    "state": {
      "phase": "竞拍",
      "hour": 0,
      "wallet": 100,
      "high": 0,
      "winner": null,
      "pinned": null
    }
  },
  "YAL12": {
    "state": {
      "stars": {
        "阿蓝": 0,
        "阿红": 0
      },
      "obtained": {
        "阿蓝": 0,
        "阿红": 0
      },
      "clock": 0,
      "rank": [],
      "honorUntil": 0,
      "day": 0
    }
  }
};
function submitTheme(s,days,cost,useFree){
 need(s.vip&&['无主题','到期'].includes(s.phase),'需会员且没有有效/待审核主题');
 need(useFree?s.freeUses>0:s.wallet>=cost,useFree?'无免费额度':'余额不足');
 if(useFree)s.freeUses--;else s.wallet-=cost;
 // This application owns its refund currency. Never retain the previous application's fields.
 s.cost=cost;s.useFree=useFree;s.daysLeft=days;s.phase='待审核';
}
const handlers = {"YAL01": (s,a)=>{if(a==='授权管理员'){s.authorized=true;s.role='管理员';}
else if(a==='管理员开赛'){need(s.authorized&&s.phase==='等待','管理员尚未授权或赛事已开始');s.phase='比赛';}
else if(a==='观众点赞蓝队'){need(s.phase==='比赛','尚未开赛');s.speed[0]+=1;}
else if(a==='技能减速红队'){need(s.phase==='比赛','尚未开赛');s.speed[1]=Math.max(1,s.speed[1]-1);}
else if(a==='推进一秒'){need(s.phase==='比赛','比赛已结束或未开赛');s.runners=s.runners.map((p,i)=>Math.min(12,p+s.speed[i]));if(s.runners.some(p=>p===12)){s.phase='终点';s.winner=s.runners[0]>=s.runners[1]?0:1;}}
else if(a==='结算'){need(s.phase==='终点','仅终点可结算一次');s.rewards[s.winner]=20;s.rewards[1-s.winner]=10;s.phase='已结算';}},
"YAL02": (s,a)=>{if(a==='选择足球入口'){need(s.phase==='选择分支','重置后选择');s.branch='足球';s.phase='足球入口';}
else if(a==='足球专属礼物'){need(s.branch==='足球'&&s.phase==='足球入口','仅足球分支');s.footballGift+=1;}
else if(a==='完成足球入口实验'){need(s.footballGift>0&&s.phase==='足球入口','先送专属礼物');s.phase='已完成入口实验';}
else if(a==='选择独立团队奖池'){need(s.phase==='选择分支','不把足球与奖池关联');s.branch='团队奖池';s.phase='收礼';}
else if(a==='开启定时增益'){need(s.phase==='收礼','已结束');s.boost=true;}
else if(a.startsWith('支持')){need(s.phase==='收礼','请选择奖池分支');let i=a==='支持红队'?4:a==='支持蓝队二号'?1:0;s.contributors[i]+=s.boost?20:10;s.team[i===4?1:0]+=s.boost?20:10;s.pool+=10;}
else if(a==='定时结束结算'){need(s.phase==='收礼'&&s.pool>0,'没有可结算奖池');let win=s.team[0]>=s.team[1]?0:1;let ids=s.contributors.map((v,i)=>({v,i})).filter(x=>x.v>0&&(x.i===4?1:0)===win).sort((x,y)=>y.v-x.v).slice(0,4);s.rewards=ids.map(x=>({player:x.i+1,coins:s.pool/ids.length}));s.phase='已结算';}},
"YAL03": (s,a)=>{if(a==='房间升到10级')s.roomLevel=10;
else if(a==='赠中奖金币礼物'){need(s.roomLevel>=10,'房间需10级');}
else if(a==='赠普通金币礼物'){need(s.roomLevel>=10,'房间需10级');s.keys+=1;}
else if(a==='全房开箱'){need(s.keys>=3&&!s.opened,'需3钥匙且每日仅一次');s.keys-=3;s.opened=true;s.rewards=[{name:'观众阿蓝',coins:8},{name:'未送礼阿红',coins:4}];}
else if(a==='推进到GMT+2零点'){s.day+=1;s.keys=0;s.opened=false;}},
"YAL04": (s,a)=>{if(a==='发起押金20金币'){need(s.phase==='未发起'&&s.wallet>=20,'余额或状态不足');s.wallet-=20;s.deposit=20;s.phase='开放';}
else if(a.startsWith('玩家出')){need(s.phase==='开放','比赛未开放');s.participations++;s.result=a.includes('布')?'参与者获胜':'发起者获胜';if(a.includes('布'))s.winningGifts++;s.phase='已响应';}
else if(a==='结束并退款'){need(s.phase==='已响应','先完成比手势');s.wallet+=s.deposit;s.deposit=0;s.phase='已关闭';}
else if(a==='推进2小时'){need(s.phase==='开放','仅无人响应时自动到期');s.hours+=2;s.wallet+=s.deposit;s.deposit=0;s.phase='到期关闭';}},
"YAL05": (s,a)=>{if(a==='施加机器人变声'){need(s.minute>=s.shieldUntil,'防护牌免疫中');s.effect='机器人（视觉模拟）';}
else if(a==='使用防护牌'){s.effect='无';s.shieldUntil=s.minute+10;}
else if(a==='单次移除效果'){need(s.effect!=='无','没有效果');s.effect='无';s.removed++;}
else if(a==='推进10分钟')s.minute+=10;},
"YAL06": (s,a)=>{if(a==='切换对象性别'){need(s.phase==='无关系','关系期间不可改策略');s.genderB=s.genderB==='男'?'女':'男';}
else if(a==='发送CP邀请'){need(s.phase==='无关系'&&s.genderA!==s.genderB,'文案要求不同性别');s.phase='待同意';}
else if(a==='对象同意'){need(s.phase==='待同意','无邀请');s.phase='已绑定';s.benefits=true;}
else if(a==='送CP专属礼物'){need(s.benefits,'仅CP可用');s.intimacy+=15;}
else if(a==='解除CP'){need(s.phase==='已绑定','无关系');s.phase='无关系';s.benefits=false;}},
"YAL07": (s,a)=>{if(a==='加入房会员'){need(!s.member&&s.wallet>=10,'已加入或余额不足');s.wallet-=10;s.ownerRevenue=Math.min(20,s.ownerRevenue+10);s.member=true;s.locked=false;}
else if(a==='赠会员礼物'){need(s.member&&!s.locked,'亲密与权益锁定');s.intimacy+=12;}
else if(a==='完成点亮任务'){need(s.member,'需会员');s.badge='亮';}
else if(a==='退出会员'){need(s.member,'不是会员');s.member=false;s.locked=true;s.badge='灰';}
else if(a==='重新加入解锁'){need(s.locked,'没有待解锁数据');s.member=true;s.locked=false;}
else if(a==='下一日'){s.day++;s.ownerRevenue=0;}},
"YAL08": (s,a)=>{if(a==='累积100积分升级'){need(!s.frozen,'冻结需补足');s.points+=100;if(s.points>=100&&s.level<3){s.level++;s.points=0;}}
else if(a==='模拟退款冻结'){need(!s.frozen,'已冻结');s.points=-100;s.frozen=true;s.frozenAt=s.day;}
else if(a==='补足解冻积分'){need(s.frozen&&s.validUntil>0&&s.day-s.frozenAt<180,'冻结资格已清零');s.points=0;s.frozen=false;s.frozenAt=null;}
else if(a==='推进90天评定'){s.day+=90;if(s.day>=s.cycleEnd){s.level=Math.max(1,1+Math.floor(Math.max(0,s.points)/100));s.points=0;s.cycleEnd=s.day+90;}if(s.frozen&&s.day-s.frozenAt>=180)s.validUntil=0;}
else if(a==='推进180天'){s.day+=180;if(s.frozen&&s.day-s.frozenAt>=180)s.validUntil=0;}},
"YAL09": (s,a)=>{if(a==='选择Count')s.title='Count';else if(a==='选择Marquis')s.title='Marquis';else if(a==='送礼100金币'){need(s.wallet>=100,'余额不足');let rate={Baron:1.1,Count:1.2,Marquis:1.3}[s.title],back={Baron:0,Count:.05,Marquis:.1}[s.title];s.wallet-=100;s.growth+=100*rate;s.cashback+=100*back;s.wallet+=100*back;}
else if(a==='显示Premium徽章')s.badge='Premium';else if(a==='显示VIP徽章')s.badge='VIP';},
"YAL10": (s,a)=>{if(a==='用金币上传7天主题')submitTheme(s,7,799,false);
else if(a==='用VIP3免费次数上传')submitTheme(s,7,0,true);
else if(a==='审核通过'){need(s.phase==='待审核','无申请');s.phase='生效';}
else if(a==='审核拒绝退款'){need(s.phase==='待审核','只能拒绝待审核主题');s.wallet+=s.cost;if(s.useFree)s.freeUses++;s.cost=0;s.useFree=false;s.daysLeft=0;s.phase='无主题';}
else if(a==='会员失效冻结'){s.vip=false;if(s.phase==='生效')s.phase='冻结';}
else if(a==='续会员解冻'){s.vip=true;if(s.phase==='冻结'&&s.daysLeft>0)s.phase='生效';}
else if(a==='推进7天'){if(['待审核','生效','冻结'].includes(s.phase)){s.daysLeft=Math.max(0,s.daysLeft-7);if(s.daysLeft===0)s.phase='到期';}}
else if(a==='用金币上传30天主题')submitTheme(s,30,1999,false);},
"YAL11": (s,a)=>{if(a==='阿蓝出价20'||a==='阿红出价30'){need(s.phase==='竞拍','拍卖结束');let bid=a.includes('20')?20:30;need(bid>s.high,'需更高价');s.high=bid;s.winner=a.includes('阿蓝')?'阿蓝':'阿红';}
else if(a==='推进2小时落槌'){need(s.phase==='竞拍','不得重复落槌');s.hour+=2;if(s.high){s.wallet-=s.high;s.pinned=s.winner;s.phase='已置顶';}else s.phase='可直接买';}
else if(a==='无人竞价后直接买'){need(s.phase==='可直接买'&&s.wallet>=10,'仅流拍后可买');s.wallet-=10;s.pinned='阿蓝';s.phase='已置顶';}},
"YAL12": (s,a)=>{if(a.includes('获得')){let who=a.startsWith('阿蓝')?'阿蓝':'阿红';s.clock++;s.stars[who]+=a.includes('金')?11:a.includes('银')?3:1;s.obtained[who]=s.clock;}
else if(a.startsWith('周日')||a.startsWith('月首')){need(s.honorUntil<=s.day,'现荣誉仍有效');s.rank=Object.keys(s.stars).sort((x,y)=>s.stars[y]-s.stars[x]||s.obtained[x]-s.obtained[y]);s.honorUntil=s.day+(a.startsWith('周日')?7:30);}
else if(a==='推进7天')s.day+=7;}};
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
