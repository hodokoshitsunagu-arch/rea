// Pure deterministic local reconstruction. Source catalog facts and local choices remain separate.
export const definitions = [
  {
    "id": "YOH01",
    "categories": [
      "社交",
      "玩法"
    ],
    "name": "家族周排名挑战与20%贡献转移",
    "core_loop": "邀请家族PK→接受后积累周贡献→指定小时后比排名→败方贡献转赢家",
    "distinctive": "对赌对象是群体排名，回报是对手已有贡献。",
    "rules": "败方20%周贡献转移；拒绝后24小时不能再挑战同一族；挑战小时是占位配置。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9522,
        "text": "Confrim to send forward a Ranking PK? After %s hours since the PK starts, system will compare both Families' weekly rankings. The lower-ranked Family will lose 20%% of own weekly contribution points to the higher-ranked Family."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11995,
        "text": "The Family has accepted your Ranking PK invitation. After %s hours, system will compare both Families' weekly rankings. The lower-ranked Family will lose 20%% of own weekly contribution points to the higher-ranked Family. Invite your Family members to help climb the ranks!"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12087,
        "text": "The other Family has declined your Ranking PK invitation. You cannot invite this Family to a PK for another 24 hours, but you can challenge another Family."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12841,
        "text": "Your Family lost the Ranking PK. 20%% of your weekly contribution points were taken by the other Family."
      }
    ],
    "unknowns": [
      "排名算法、取整、并列、超时和上限未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "保留现有单机demo；扩展拒绝冷却，公开自定排名算法。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "已有",
    "title": "家族周排名挑战与20%贡献转移",
    "actions": [
      {
        "id": "a0",
        "label": "邀请同一家族"
      },
      {
        "id": "a1",
        "label": "对方拒绝"
      },
      {
        "id": "a2",
        "label": "推进24小时"
      },
      {
        "id": "a3",
        "label": "对方接受"
      },
      {
        "id": "a4",
        "label": "阿蓝家族贡献50"
      },
      {
        "id": "a5",
        "label": "挑战结束"
      }
    ],
    "reconstruction_choice": "2小时挑战、贡献即排名、向下取整、同分蓝队胜为本地规则。"
  },
  {
    "id": "YOH02",
    "categories": [
      "社交",
      "权益"
    ],
    "name": "家族召集与成长任务",
    "core_loop": "达到财富等级建族→成员申请→任务发展→召集进入语音房",
    "distinctive": "社交组织具备直接把全体成员送往房间的召集权益。",
    "rules": "建/入族财富门槛为动态值；全族召集一天一次；另有每日提醒计数；管理员可管理成员。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12780,
        "text": "You need a wealth level ≥%d to create a family. Upgrade your level or try to join a fun family!"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12671,
        "text": "You can apply to join this family when you reach the wealth level up to %d"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9043,
        "text": "All family members will receive your call and have direct access to your room(There is only one chance to summon a day ~)"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9044,
        "text": "All family members will receive your reminder and join the room. (Number of daily reminders left: %1$s/%2$s)"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9000,
        "text": "Admins can help you manage the family, kick people out as well. Do you want to set this person as an admin?"
      }
    ],
    "unknowns": [
      "具体门槛、族等级、人数和提醒数未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "家族申请/任务及一日一次召集；不实现普通群聊。",
    "replica_effort": "低",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "家族召集与成长任务",
    "actions": [
      {
        "id": "a0",
        "label": "财富达到10"
      },
      {
        "id": "a1",
        "label": "申请加入家族"
      },
      {
        "id": "a2",
        "label": "管理员批准"
      },
      {
        "id": "a3",
        "label": "全族召集"
      },
      {
        "id": "a4",
        "label": "每日提醒"
      },
      {
        "id": "a5",
        "label": "完成成长任务"
      },
      {
        "id": "a6",
        "label": "下一日"
      }
    ],
    "reconstruction_choice": "财富10、提醒每日2、任务10族EXP为自定；管理员每日召集一次保留文案。"
  },
  {
    "id": "YOH03",
    "categories": [
      "社交",
      "玩法",
      "权益"
    ],
    "name": "礼物竞拍守护关系",
    "core_loop": "拍卖师设关系与期限→上麦竞价赠礼→赢家建立守护→累计量解锁宝箱",
    "distinctive": "拍卖的产物是限期社交关系，附带贡献门槛宝箱。",
    "rules": "赠礼竞价；类型/期限由拍卖师决定；Guests与host不能竞拍；100拍卖值=100守护值；总量达到动态值解锁宝箱。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9022,
        "text": "After the auction starts, send gifts to the auctor to bid"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9112,
        "text": "Approach 2: form the guardianship through bidding in an auction venue (the guardianship type and its duration are decided by auctors)."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8600,
        "text": "2. 100 auction value in the auction venue = 100 guardian value"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10312,
        "text": "Guests cannot join the auction."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12061,
        "text": "The host cannot join the auction."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12583,
        "text": "When the total amount involved in the auction reaches %1$s, the treasure reward will be unlocked."
      }
    ],
    "unknowns": [
      "竞价比较、最高价还是累计价、分成、退款、平局未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "关系竞拍状态机与模拟守护值/宝箱。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "礼物竞拍守护关系",
    "actions": [
      {
        "id": "a0",
        "label": "拍卖师配置7天守护"
      },
      {
        "id": "a1",
        "label": "切换竞拍成员"
      },
      {
        "id": "a2",
        "label": "切换host"
      },
      {
        "id": "a3",
        "label": "阿蓝赠礼100"
      },
      {
        "id": "a4",
        "label": "阿红赠礼200"
      },
      {
        "id": "a5",
        "label": "结束竞拍"
      }
    ],
    "reconstruction_choice": "按累计赠礼比价、宝箱300、同分先蓝；未恢复分成退款，全部虚拟。"
  },
  {
    "id": "YOH04",
    "categories": [
      "社交",
      "权益"
    ],
    "name": "守护代币与限期关系升级",
    "core_loop": "赠7/30天代币→对方接受→累计守护值升级→续期/替换/过期",
    "distinctive": "关系同时具备成长等级和有效期；升级与覆盖不等于简单叠加。",
    "rules": "100币代币=100守护值；可7/30天；拒绝/超时退代币；替换不同类型不合并时长；结束清守护值；守护或Couple Lv3通话免费。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8530,
        "text": "1. 100 coins of relationship token sent = 100 guardian value"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9111,
        "text": "Approach 1: send relationship tokens. Once they accept the tokens, the guardianship can thus be formed (the guardianship duration can be 7 days / 30 days)."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12162,
        "text": "They have declined your guardianship invitation. Your token is returned. No relationship is formed."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12056,
        "text": "The guardian application has expired, and the gold coins you spent on purchasing tokens have been returned"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12625,
        "text": "You and %1$s currently have a [%2$s] relationship with %3$s days remaining. Do you still want to form a %4$s relationship? If you proceed, the [%4$s] relationship will replace your current [%2$s] relationship. The validity periods will not be combined."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9013,
        "text": "After ending the relationship, both of your guardian value will be cleared."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9280,
        "text": "Calls are free once you start any Guardian relationship with each other"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9281,
        "text": "Calls are free once you're Couple Lv.3 with each other"
      }
    ],
    "unknowns": [
      "关系名称全集、等级阈值、续期定价、通话计价未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "代币同意、续期/覆盖、权益判定；数值可配。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "守护代币与限期关系升级",
    "actions": [
      {
        "id": "a0",
        "label": "发送7天守护代币"
      },
      {
        "id": "a1",
        "label": "接受守护"
      },
      {
        "id": "a2",
        "label": "拒绝退代币"
      },
      {
        "id": "a3",
        "label": "邀请超时退代币"
      },
      {
        "id": "a4",
        "label": "续期7天"
      },
      {
        "id": "a5",
        "label": "替换30天Couple"
      },
      {
        "id": "a6",
        "label": "达到Couple Lv3"
      },
      {
        "id": "a7",
        "label": "推进30天"
      }
    ],
    "reconstruction_choice": "100代币=100守护值；同类型续期累加、异类型覆盖从今日30天；替换价格未知未扣款。"
  },
  {
    "id": "YOH05",
    "categories": [
      "社交",
      "玩法"
    ],
    "name": "双向亮心配对回合",
    "core_loop": "上席→向喜欢的人亮心→互相亮心匹配→主持带配对小游戏→未匹配留下一轮",
    "distinctive": "多人房交互配对有明确互选与回合留席规则。",
    "rules": "双向亮心才成功；礼物可增加配对概率的提示存在；成功动画公布、引导离场，未成功可留席。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10671,
        "text": "Light up ❤ of the player you like, if he/she lights you, you will be paired successfully!"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10672,
        "text": "Light up ❤ of the player you like, if he/she lights you, you will be paired successfully! (Tips: giving gifts can increase the probability of pairing)"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11890,
        "text": "Successfully paired users will be announced in an animation. If not successful, you can stay in the seat to wait for next game!"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9024,
        "text": "After the end, guide the paired players leave the game. Other users can stay for next game. Invite new players to join."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10313,
        "text": "Guide the paired players to play a game of active atmosphere; guide other users to express a blessing to the paired players by sending gifts."
      }
    ],
    "unknowns": [
      "礼物如何影响互选概率、角色人数、性别与隐私呈现未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "互选与配对后小游戏引导；概率提示单独保留为未决，不随机制造同意。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "双向亮心配对回合",
    "actions": [
      {
        "id": "a0",
        "label": "阿蓝亮心阿红"
      },
      {
        "id": "a1",
        "label": "阿红亮心阿蓝"
      },
      {
        "id": "a2",
        "label": "阿红不亮心"
      },
      {
        "id": "a3",
        "label": "礼物概率提示"
      },
      {
        "id": "a4",
        "label": "公布互选"
      },
      {
        "id": "a5",
        "label": "配对后离席"
      }
    ],
    "reconstruction_choice": "两人互选；礼物只显示未恢复的概率提示，不产生同意；未匹配留席。"
  },
  {
    "id": "YOH06",
    "categories": [
      "游戏",
      "玩法"
    ],
    "name": "最低钻石狙击的大逃杀",
    "core_loop": "上麦加入→收钻累积分→每轮倒计时狙击最低分→淘汰后下一轮",
    "distinctive": "观众赠礼成为生存资源，同分最低者可被共同瞄准。",
    "rules": "至少2人起；房主选回合倒计时；最低钻分被瞄准；最低同分全部瞄准；中途不能加入，退出淘汰且不能回归；换座不影响分。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8531,
        "text": "1. After the game starts, the score will be based on the score of diamonds received;\n2. Those with the lowest scores will be targeted by snipers;\n3. If there are several people with the same lowest score at the same time, all these people will be targeted by snipers;"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8533,
        "text": "1. Click \"Join\" to join this round;\n2. Other people that directly take the mic can also join the game;\n3. You need at least 2 people to start the game;\n4. In order to be fair, after the game starts, you cannot remove the player from the game until that user is eliminated or the game is over;\n5. By clicking ❤, you can review the game guidelines;"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8542,
        "text": "1. The countdown of each round is selected by the owner;\n2. After the end of the countdown, the sniper will shoot to eliminate the targeted people;\n3. After eliminating one person, the countdown of the next round will start immediately ;"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8544,
        "text": "1. The score of the people who've been eliminated will not continue, so the scoreboard will be eliminated;\n2. Users with mics won't be able to join the game in the middle of the game;\n3. If you drop the mic or leave the room in the middle of the game, you will be considered as a quitter. You will be eliminated and won't be able to go back to the game;\n4. Changing seats will not affect the score;"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12320,
        "text": "Unable to switch mode while Battle Royale mode is in progress"
      }
    ],
    "unknowns": [
      "同轮瞄准多人时射击次序、最终胜者/奖池、积分折算未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "多轮淘汰状态机，公开多人瞄准裁决补齐。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "最低钻石狙击的大逃杀",
    "actions": [
      {
        "id": "a0",
        "label": "房主设置10秒开局"
      },
      {
        "id": "a1",
        "label": "赠阿蓝2钻"
      },
      {
        "id": "a2",
        "label": "赠阿红1钻"
      },
      {
        "id": "a3",
        "label": "换座位"
      },
      {
        "id": "a4",
        "label": "阿蓝退出"
      },
      {
        "id": "a5",
        "label": "中途加入"
      },
      {
        "id": "a6",
        "label": "倒计时射击"
      }
    ],
    "reconstruction_choice": "最低同分同步淘汰、全员同分无胜者；每回合10秒；换座保持玩家身份计分。"
  },
  {
    "id": "YOH07",
    "categories": [
      "游戏",
      "玩法"
    ],
    "name": "团队武器PK与火箭升级",
    "core_loop": "红蓝收钻→升级武器/火箭→比较总钻→MVP与等级奖励",
    "distinctive": "同一团队竞技承载武器成长和火箭分级领奖。",
    "rules": "更多钻=更高武器等级，更多钻队胜；5币礼物=1钻=1PK分；换队重置本场钻；MVP且团队>200钻可上榜；火箭升级领奖。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8543,
        "text": "1. The more diamonds you receive, the higher your weapon level will be.The team that receives more diamonds will win the game."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10244,
        "text": "Gifts worth 5 coins = 1 diamond = 1 PK credit"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10438,
        "text": "If you change your team now, diamonds received during the battle will be reset. Do you confirm to continue?"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10479,
        "text": "In team battle mode, users that win MPV and are part of a team that has more than 200 diamonds will appear on this list"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12514,
        "text": "We now added the rocket feature to the team battle. Level up your rocket to win prizes!"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12036,
        "text": "The following prizes are rewarded to you since you have unlocked LV%1$s rocket."
      }
    ],
    "unknowns": [
      "火箭和武器是否同一进度、升级阈值、时长、奖池未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "团队收钻与武器成长；火箭作为独立奖励支线。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "团队武器PK与火箭升级",
    "actions": [
      {
        "id": "a0",
        "label": "送礼1005金币蓝队"
      },
      {
        "id": "a1",
        "label": "切换到红队清分"
      },
      {
        "id": "a2",
        "label": "送礼5金币当前队"
      },
      {
        "id": "a3",
        "label": "给独立火箭加燃料"
      },
      {
        "id": "a4",
        "label": "领取火箭等级奖励"
      },
      {
        "id": "a5",
        "label": "结束团队PK"
      }
    ],
    "reconstruction_choice": "5币=1钻；50钻升级；本样本单贡献者为MVP；火箭2燃料领奖独立，未关联武器。"
  },
  {
    "id": "YOH08",
    "categories": [
      "权益",
      "游戏"
    ],
    "name": "游戏币与通用币双钱包",
    "core_loop": "获取游戏币→进入指定游戏→优先耗游戏币→用完再通用币",
    "distinctive": "限定用途奖励币与通用币等值但不同消费权限。",
    "rules": "两币等值；有两种币优先用Game Coins；仅用于文案所列9类指定游戏。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8537,
        "text": "1. Game Coins and Coins are equal in value."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8603,
        "text": "2. If you have both Coins and Game Coins, Game Coins will be used first."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 8688,
        "text": "3. Game Coins can only be used in designated games: greedycat, slot_frenzy, yummy, crash_rocket, lion, eliminateslot, chickenpass, fishing, olymapus"
      }
    ],
    "unknowns": [
      "兑换方向、过期/退款、中奖产出类型、地区开放未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "双钱包与9个占位游戏入口的消费规则；不复刻随机博彩。",
    "replica_effort": "低",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "游戏币与通用币双钱包",
    "actions": [
      {
        "id": "a0",
        "label": "选择指定游戏1"
      },
      {
        "id": "a1",
        "label": "选择指定游戏9"
      },
      {
        "id": "a2",
        "label": "选择非指定游戏"
      },
      {
        "id": "a3",
        "label": "消费20币"
      },
      {
        "id": "a4",
        "label": "完成游戏入口实验"
      },
      {
        "id": "a5",
        "label": "选择指定游戏2"
      },
      {
        "id": "a6",
        "label": "选择指定游戏3"
      },
      {
        "id": "a7",
        "label": "选择指定游戏4"
      },
      {
        "id": "a8",
        "label": "选择指定游戏5"
      },
      {
        "id": "a9",
        "label": "选择指定游戏6"
      },
      {
        "id": "a10",
        "label": "选择指定游戏7"
      },
      {
        "id": "a11",
        "label": "选择指定游戏8"
      }
    ],
    "reconstruction_choice": "9类游戏名未作玩法恢复；消费20、游戏币优先，纯资格/账本实验无博彩。"
  },
  {
    "id": "YOH09",
    "categories": [
      "社交",
      "权益"
    ],
    "name": "Room Club等级与成员权益",
    "core_loop": "加入特定房Club→成长等级→成员席位/抢红包/专属礼物",
    "distinctive": "权益归属某房的会员组织，礼物还需Club等级门槛。",
    "rules": "会员可抢红包、使用专属席位；部分礼物须Club LV动态值；升级解锁权益。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9208,
        "text": "Become a Room Club member to snatch red packets"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10592,
        "text": "Join Room Club to enjoy exclusive seats"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10591,
        "text": "Join Room Club and reach LV%1$s to send this gift"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9540,
        "text": "Congratulations to %1$s for upgrading to Room Club LV%2$s, unlocking the following benefits"
      }
    ],
    "unknowns": [
      "费用、亲密/等级增长、退组数据、席位数量未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "房Club等级门禁与成员席位/红包资格，不接真实金额。",
    "replica_effort": "低",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "Room Club等级与成员权益",
    "actions": [
      {
        "id": "a0",
        "label": "加入Room Club"
      },
      {
        "id": "a1",
        "label": "完成任务升到3级"
      },
      {
        "id": "a2",
        "label": "使用专属席位"
      },
      {
        "id": "a3",
        "label": "领取会员红包"
      },
      {
        "id": "a4",
        "label": "送3级专属礼物"
      },
      {
        "id": "a5",
        "label": "退出Club"
      }
    ],
    "reconstruction_choice": "LV3为动态门槛补齐；会员席位1、红包一次；退出保留等级是本地选择。"
  },
  {
    "id": "YOH10",
    "categories": [
      "权益",
      "社交"
    ],
    "name": "Mystery匿名身份与贵族隐私",
    "core_loop": "有资格在房外打开神秘人→匿名进入/上榜→关闭恢复→关系试用受限",
    "distinctive": "身份匿名不是单一隐藏名，还约束切换地点与关系操作。",
    "rules": "房外才能切换；指定贵族/VIP等级可用；匿名用户不能使用关系试用卡；另有国家Unknown/在线Yesterday/魅力0隐藏项。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12000,
        "text": "The Mystery User feature is an exclusive privilege for %1$s and %2$s statuses and above."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12307,
        "text": "Turning on and off the mystery person function needs to be performed outside the room"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12090,
        "text": "The other party is a mystery user; relationship trial cards cannot be used"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12570,
        "text": "When enabled during an active Aristocracy, Charm Level will always display as 0"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12577,
        "text": "When enabled, your country or region will be displayed as \"Unknown\" on your profile page (%1$s, %2$s exclusive privilege)"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12579,
        "text": "When enabled, your last online time will be displayed as \"Yesterday\" on your profile page, and the green online status dot will not be shown (%1$s, %2$s exclusive privilege)"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 9008,
        "text": "After changing your ID, all the contributions you made with your previous ID will be transferred to your real ID. Your real name will be shown on the gift wall and a new mysterious ID will be created for you."
      }
    ],
    "unknowns": [
      "具体解锁等级、匿名ID稳定性、哪些日志与他人视图仍可见未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "匿名展示策略与操作互斥模拟；不宣称匿名安全保证。",
    "replica_effort": "中",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "Mystery匿名身份与贵族隐私",
    "actions": [
      {
        "id": "a0",
        "label": "模拟VIP达到3级"
      },
      {
        "id": "a1",
        "label": "切换Mystery身份"
      },
      {
        "id": "a2",
        "label": "进入房间"
      },
      {
        "id": "a3",
        "label": "离开房间"
      },
      {
        "id": "a4",
        "label": "使用关系试用卡"
      },
      {
        "id": "a5",
        "label": "隐藏国家在线魅力"
      }
    ],
    "reconstruction_choice": "VIP3解锁、匿名固定ID #7为本地参数；只展示视图，不承诺原隐私保护。"
  },
  {
    "id": "YOH11",
    "categories": [
      "权益"
    ],
    "name": "贵族礼物授权与高阶动态名片",
    "core_loop": "开贵族/VIP→按层级授礼物和动态名片→到期回收",
    "distinctive": "高等级包含低等级礼物权限，并有欢迎图/动态头像/动态封面不同门槛。",
    "rules": "贵族礼物向下兼容；Noble10以上入房欢迎图；VIP9或Noble13可GIF头像；VIP12以上动态封面。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11031,
        "text": "Noble members can send exclusive Noble gifts. Higher-level Noble status includes the authority to send lower-level gifts."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11157,
        "text": "Open noble 10 above, the user into the room can automatically send welcome pictures."
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12405,
        "text": "Users at VIP9 or Noble13 can upload animated profile pictures in GIF format"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12852,
        "text": "Your VIP level is too low. Users with VIP12 or above can upload animated cover photos."
      }
    ],
    "unknowns": [
      "各爵位售价、周期、欢迎图可定制度、地区版本未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "分级能力矩阵与展示，门槛按文本保留。",
    "replica_effort": "低",
    "readiness": "可先复刻",
    "demo_status": "未实现",
    "title": "贵族礼物授权与高阶动态名片",
    "actions": [
      {
        "id": "a0",
        "label": "Noble达到10"
      },
      {
        "id": "a1",
        "label": "Noble达到13"
      },
      {
        "id": "a2",
        "label": "VIP达到9"
      },
      {
        "id": "a3",
        "label": "VIP达到12"
      },
      {
        "id": "a4",
        "label": "送低阶贵族礼物"
      },
      {
        "id": "a5",
        "label": "设置GIF头像"
      },
      {
        "id": "a6",
        "label": "设置动态封面"
      },
      {
        "id": "a7",
        "label": "展示入房欢迎图"
      }
    ],
    "reconstruction_choice": "示例礼物门槛Noble3；其他等级按文案；售价/周期未模拟。"
  },
  {
    "id": "YOH12",
    "categories": [
      "社交",
      "玩法"
    ],
    "name": "生日与关系周年派对奖励",
    "core_loop": "临近生日/周年→创建庆祝派对→参与活动→获取身份装扮",
    "distinctive": "个人/双人关系纪念日转化成房内庆祝玩法。",
    "rules": "生日与周年均提示可赢徽章、头像框、车辆。",
    "evidence_strength": "B",
    "evidence_refs": [
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 10577,
        "text": "It will be your birthday in %1$s days. Come and create your own birthday party. You can win badges, avatar frames, and vehicles!"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 11990,
        "text": "Thanks for staying with %3$s! It will be our %2$s anniversary in %1$s days. Wanna join our anniversary celebration? You can win badges, avatar frames, and vehicles!"
      },
      {
        "file": "analysis/feature-expanded-resources.json",
        "source": "resources.arsc",
        "pool_offset": 12,
        "string_index": 12012,
        "text": "The birthday party held by %1$s"
      }
    ],
    "unknowns": [
      "活动触发条件、奖励任务、邀请权限、时间窗未知。",
      "是否在目标地区/账号开启、真实后台裁决与付费权限未经运行验证。"
    ],
    "replica_scope": "日历提醒和派对流程概念原型；任务不能当恢复规则。",
    "replica_effort": "中",
    "readiness": "需补证据",
    "demo_status": "未实现",
    "title": "生日与关系周年派对奖励",
    "actions": [
      {
        "id": "a0",
        "label": "选择关系周年"
      },
      {
        "id": "a1",
        "label": "创建庆祝派对"
      },
      {
        "id": "a2",
        "label": "阿红响应邀请"
      },
      {
        "id": "a3",
        "label": "推进到纪念日"
      },
      {
        "id": "a4",
        "label": "完成本地庆祝任务"
      },
      {
        "id": "a5",
        "label": "领取概念装扮"
      }
    ],
    "reconstruction_choice": "2日提醒、双人响应与庆祝任务全部设计补齐；仅徽章/头像框/车辆候选类别有文案。"
  }
];
const configs = {
  "YOH01": {
    "state": {
      "phase": "可挑战",
      "hour": 0,
      "cooldownUntil": 0,
      "contribution": [
        100,
        80
      ],
      "transfer": 0
    }
  },
  "YOH02": {
    "state": {
      "wealth": 5,
      "role": "成员",
      "member": false,
      "day": 0,
      "lastCall": -1,
      "reminders": 0,
      "taskDone": false,
      "familyXP": 0
    }
  },
  "YOH03": {
    "state": {
      "phase": "配置",
      "role": "Guest",
      "duration": 7,
      "value": [
        0,
        0
      ],
      "guardValue": 0,
      "chest": false,
      "winner": null
    }
  },
  "YOH04": {
    "state": {
      "phase": "无关系",
      "tokens": 300,
      "escrow": 0,
      "day": 0,
      "expiry": 0,
      "type": null,
      "guardValue": 0,
      "freeCall": false
    }
  },
  "YOH05": {
    "state": {
      "phase": "选心",
      "blue": null,
      "red": null,
      "giftHint": false,
      "matched": false,
      "seat": [
        "阿蓝",
        "阿红"
      ]
    }
  },
  "YOH06": {
    "state": {
      "phase": "报名",
      "players": [
        {
          "name": "阿蓝",
          "score": 0,
          "alive": true
        },
        {
          "name": "阿红",
          "score": 0,
          "alive": true
        },
        {
          "name": "阿绿",
          "score": 0,
          "alive": true
        }
      ],
      "round": 0,
      "seconds": 10,
      "winner": null
    }
  },
  "YOH07": {
    "state": {
      "phase": "PK",
      "coins": 2000,
      "team": [
        0,
        0
      ],
      "personal": 0,
      "memberTeam": 0,
      "weapon": 1,
      "rocket": 0,
      "rocketClaimed": false,
      "ranked": false,
      "winner": null
    }
  },
  "YOH08": {
    "state": {
      "gameCoins": 15,
      "coins": 50,
      "selected": "指定游戏1",
      "receipt": [],
      "phase": "选择"
    }
  },
  "YOH09": {
    "state": {
      "member": false,
      "level": 1,
      "seat": null,
      "envelopeClaimed": false,
      "giftSent": false
    }
  },
  "YOH10": {
    "state": {
      "vip": 0,
      "inRoom": false,
      "mystery": false,
      "trialUsed": false,
      "publicView": {
        "name": "阿蓝",
        "country": "EG",
        "online": "今天",
        "charm": 100
      }
    }
  },
  "YOH11": {
    "state": {
      "noble": 0,
      "vip": 0,
      "capabilities": [],
      "giftUsed": false,
      "avatar": "静态",
      "cover": "静态"
    }
  },
  "YOH12": {
    "state": {
      "day": 0,
      "eventDate": 2,
      "kind": "生日",
      "phase": "提醒",
      "guests": [],
      "designReward": null
    }
  }
};
const handlers = {"YOH01": (s,a)=>{if(a==='邀请同一家族'){need(s.phase==='可挑战'&&s.hour>=s.cooldownUntil,'拒绝后24小时冷却');s.phase='邀请';}
else if(a==='对方拒绝'){need(s.phase==='邀请','没有邀请');s.phase='可挑战';s.cooldownUntil=s.hour+24;}
else if(a==='推进24小时')s.hour+=24;
else if(a==='对方接受'){need(s.phase==='邀请','没有邀请');s.phase='挑战';}
else if(a==='阿蓝家族贡献50'){need(s.phase==='挑战','挑战未开始');s.contribution[0]+=50;}
else if(a==='挑战结束'){need(s.phase==='挑战','不得重复结算');s.hour+=2;let w=s.contribution[0]>=s.contribution[1]?0:1,l=1-w;s.transfer=Math.floor(s.contribution[l]*.2);s.contribution[l]-=s.transfer;s.contribution[w]+=s.transfer;s.phase='已结算';}},
"YOH02": (s,a)=>{if(a==='财富达到10')s.wealth=10;
else if(a==='申请加入家族'){need(s.wealth>=10&&!s.member,'财富门槛10或已加入');s.application=true;}
else if(a==='管理员批准'){need(s.application,'无申请');s.member=true;s.role='管理员';s.application=false;}
else if(a==='全族召集'){need(s.role==='管理员'&&s.lastCall!==s.day,'仅管理员每日一次');s.lastCall=s.day;}
else if(a==='每日提醒'){need(s.member&&s.reminders<2,'需成员，每日2次补齐');s.reminders++;}
else if(a==='完成成长任务'){need(s.member&&!s.taskDone,'只能完成一次');s.taskDone=true;s.familyXP+=10;}
else if(a==='下一日'){s.day++;s.reminders=0;s.taskDone=false;}},
"YOH03": (s,a)=>{if(a==='拍卖师配置7天守护'){need(s.phase==='配置','已开拍');s.phase='竞拍';}
else if(a==='切换竞拍成员')s.role='成员';else if(a==='切换host')s.role='host';
else if(a.startsWith('阿')){need(s.phase==='竞拍'&&s.role==='成员','Guests和host不能竞拍');s.value[a.includes('阿蓝')?0:1]+=a.includes('100')?100:200;if(s.value.reduce((x,y)=>x+y)>=300)s.chest=true;}
else if(a==='结束竞拍'){need(s.phase==='竞拍'&&s.value.some(x=>x>0),'无有效竞价');s.winner=s.value[0]>=s.value[1]?'阿蓝':'阿红';s.guardValue=Math.max(...s.value);s.phase='已建立守护';}},
"YOH04": (s,a)=>{if(a==='发送7天守护代币'){need(s.phase==='无关系'&&s.tokens>=100,'状态/代币不足');s.tokens-=100;s.escrow=100;s.phase='待同意';}
else if(a==='接受守护'){need(s.phase==='待同意','无邀请');s.guardValue=s.escrow;s.escrow=0;s.type='守护';s.expiry=s.day+7;s.phase='生效';s.freeCall=true;}
else if(a==='拒绝退代币'||a==='邀请超时退代币'){need(s.phase==='待同意','无可退款邀请');s.tokens+=s.escrow;s.escrow=0;s.phase='无关系';}
else if(a==='续期7天'){need(s.phase==='生效'&&s.tokens>=100,'未生效或代币不足');s.tokens-=100;s.expiry+=7;s.guardValue+=100;}
else if(a==='替换30天Couple'){need(s.phase==='生效','需关系');s.type='Couple';s.expiry=s.day+30;s.guardValue=100;s.freeCall=false;}
else if(a==='达到Couple Lv3'){need(s.type==='Couple'&&s.phase==='生效','需Couple');s.freeCall=true;}
else if(a==='推进30天'){s.day+=30;if(s.day>=s.expiry){s.phase='无关系';s.guardValue=0;s.freeCall=false;s.type=null;}}},
"YOH05": (s,a)=>{if(a==='阿蓝亮心阿红'){need(s.phase==='选心','回合结束');s.blue='阿红';}
else if(a==='阿红亮心阿蓝'){need(s.phase==='选心','回合结束');s.red='阿蓝';}
else if(a==='阿红不亮心'){need(s.phase==='选心','回合结束');s.red='无';}
else if(a==='礼物概率提示')s.giftHint=true;
else if(a==='公布互选'){need(s.phase==='选心'&&s.blue!==null&&s.red!==null,'双方选择后公布');s.matched=s.blue==='阿红'&&s.red==='阿蓝';s.phase=s.matched?'配对成功':'未成功留席';}
else if(a==='配对后离席'){need(s.matched&&s.phase==='配对成功','未互选不得强制配对');s.seat=[];s.phase='双人游戏引导';}},
"YOH06": (s,a)=>{if(a==='房主设置10秒开局'){need(s.phase==='报名'&&s.players.filter(p=>p.alive).length>=2,'至少2人');s.phase='回合';}
else if(a==='赠阿蓝2钻'||a==='赠阿红1钻'){need(s.phase==='回合','不在回合');let p=s.players.find(p=>p.name===(a.includes('阿蓝')?'阿蓝':'阿红'));need(p.alive,'已淘汰无法计分');p.score+=a.includes('2')?2:1;}
else if(a==='换座位'){s.players.reverse();}
else if(a==='阿蓝退出'){let p=s.players.find(p=>p.name==='阿蓝');p.alive=false;p.exited=true;}
else if(a==='中途加入'){need(s.phase==='报名','中途不可加入/回归');}
else if(a==='倒计时射击'){need(s.phase==='回合','已结束');s.round++;let alive=s.players.filter(p=>p.alive),min=Math.min(...alive.map(p=>p.score));alive.filter(p=>p.score===min).forEach(p=>p.alive=false);let remain=s.players.filter(p=>p.alive);if(remain.length<=1){s.phase='已结束';s.winner=remain[0]?.name??'全员同分淘汰';}}},
"YOH07": (s,a)=>{if(a==='送礼1005金币蓝队'||a==='送礼5金币当前队'){need(s.phase==='PK','已结束');let c=a.includes('1005')?1005:5;need(s.coins>=c,'币不足');s.coins-=c;let d=c/5;s.team[s.memberTeam]+=d;s.personal+=d;s.weapon=1+Math.floor(s.team[s.memberTeam]/50);}
else if(a==='切换到红队清分'){need(s.phase==='PK','已结束');s.team[s.memberTeam]-=s.personal;s.personal=0;s.memberTeam=1;s.weapon=1;}
else if(a==='给独立火箭加燃料')s.rocket+=1;
else if(a==='领取火箭等级奖励'){need(s.rocket>=2&&!s.rocketClaimed,'需2燃料且只领一次');s.rocketClaimed=true;}
else if(a==='结束团队PK'){need(s.phase==='PK','不可重复结束');s.winner=s.team[0]>=s.team[1]?'蓝队':'红队';s.ranked=s.personal>0&&s.team[s.memberTeam]>200;s.phase='已结算';}},
"YOH08": (s,a)=>{if(a.startsWith('选择')){s.selected=a.slice(2);s.phase='选择';}
else if(a==='消费20币'){need(s.phase==='选择','订单已支付');need(s.selected.startsWith('指定游戏'),'游戏币只适用目录9类入口');need(s.gameCoins+s.coins>=20,'余额不足');let g=Math.min(s.gameCoins,20);s.gameCoins-=g;s.coins-=20-g;s.receipt.push({game:s.selected,gameCoins:g,coins:20-g});s.phase='已消费';}
else if(a==='完成游戏入口实验'){need(s.phase==='已消费','先支付模拟订单');s.phase='已完成';}},
"YOH09": (s,a)=>{if(a==='加入Room Club'){need(!s.member,'已加入');s.member=true;}
else if(a==='完成任务升到3级'){need(s.member,'需会员');s.level=3;}
else if(a==='使用专属席位'){need(s.member&&s.seat===null,'仅会员且席位空');s.seat='阿蓝';}
else if(a==='领取会员红包'){need(s.member&&!s.envelopeClaimed,'仅会员，一次领取');s.envelopeClaimed=true;}
else if(a==='送3级专属礼物'){need(s.member&&s.level>=3,'Club LV3门禁');s.giftSent=true;}
else if(a==='退出Club'){need(s.member,'未加入');s.member=false;s.seat=null;}},
"YOH10": (s,a)=>{if(a==='模拟VIP达到3级')s.vip=3;
else if(a==='切换Mystery身份'){need(!s.inRoom&&s.vip>=3,'仅房外及本地VIP3门槛');s.mystery=!s.mystery;s.publicView.name=s.mystery?'Mystery #7':'阿蓝';}
else if(a==='进入房间'){need(!s.inRoom,'已在房');s.inRoom=true;}
else if(a==='离开房间')s.inRoom=false;
else if(a==='使用关系试用卡'){need(!s.mystery&&!s.trialUsed,'匿名不能用关系试用卡');s.trialUsed=true;}
else if(a==='隐藏国家在线魅力'){s.publicView.country='Unknown';s.publicView.online='Yesterday';s.publicView.charm=0;}},
"YOH11": (s,a)=>{if(a==='Noble达到10')s.noble=10;else if(a==='Noble达到13')s.noble=13;else if(a==='VIP达到9')s.vip=9;else if(a==='VIP达到12')s.vip=12;
else if(a==='送低阶贵族礼物'){need(s.noble>=3,'贵族向下兼容，示例要求3');s.giftUsed=true;}
else if(a==='设置GIF头像'){need(s.vip>=9||s.noble>=13,'VIP9或Noble13');s.avatar='GIF视觉占位';}
else if(a==='设置动态封面'){need(s.vip>=12,'VIP12');s.cover='动态视觉占位';}
else if(a==='展示入房欢迎图'){need(s.noble>=10,'Noble10');s.capabilities.push('欢迎图');}},
"YOH12": (s,a)=>{if(a==='选择关系周年'){need(s.phase==='提醒','已创建');s.kind='关系周年';}
else if(a==='创建庆祝派对'){need(s.phase==='提醒','只能创建一次');s.phase='待纪念日';}
else if(a==='阿红响应邀请'){need(s.phase==='待纪念日'&&!s.guests.includes('阿红'),'邀请状态');s.guests.push('阿红');}
else if(a==='推进到纪念日'){s.day=2;if(s.phase==='待纪念日')s.phase='庆祝';}
else if(a==='完成本地庆祝任务'){need(s.phase==='庆祝'&&s.guests.length>0,'需庆祝和响应者');s.phase='概念任务完成';}
else if(a==='领取概念装扮'){need(s.phase==='概念任务完成','只领一次');s.designReward='概念头像框（非恢复奖励）';s.phase='已完成';}}};
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
