---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/gargantuan
- monster/type/dragon/metallic
aliases: ["Aspect of Bahamut"]
statblock: true
"name": "Aspect of Bahamut"
"size": "Gargantuan"
"type": "dragon"
"subtype": "metallic"
"alignment": "Lawful Good"
"ac": !!int "23"
"hp": !!int "585"
"hit_dice": "30d20 + 270"
"stats":
- !!int "30"
- !!int "18"
- !!int "29"
- !!int "25"
- !!int "28"
- !!int "30"
"speed": "walk 60 ft., burrow 60 ft., fly 120 ft., swim 60 ft."
"saves":
  "Charisma": !!int "19"
  "Wisdom": !!int "18"
  "Intelligence": !!int "16"
  "Constitution": !!int "18"
"skillsaves":
  "Insight": !!int "18"
  "Perception": !!int "18"
  "Persuasion": !!int "19"
"damage_immunities": "acid; cold; fire; lightning; radiant; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"condition_immunities": "charmed, deafened, frightened, paralyzed, stunned"
"senses": "truesight 120 ft., passive Perception 28"
"languages": "Common, Draconic"
"cr": "30"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the aspect would be reduced to 0 hit points, his current hit point total\
    \ instead resets to 500 hit points, he recharges his Breath Weapon, and he regains\
    \ any expended uses of Legendary Resistance. Additionally, the aspect can now\
    \ use the options in the \"Mythic Actions\" section for 1 hour. Award a party\
    \ an additional 155,000 XP (310,000 XP total) for defeating the aspect of Bahamut\
    \ after his Platinum Brilliance activates."
  "name": "Platinum Brilliance (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the aspect fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (5/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aspect makes one Bite attack, one Claw attack, and one Tail attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 23 (2d12\
    \ + 10) piercing damage plus 22 (4d10) force damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 21 (2d10\
    \ + 10) slashing damage. If the target is a Huge or smaller creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 20) and is [restrained](/rules/conditions.md#restrained) until this\
    \ grapple ends. The aspect can have only one creature [grappled](/rules/conditions.md#grappled)\
    \ this way at a time."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 23 (2d12\
    \ + 10) bludgeoning damage. If the target is a creature, it must succeed on a\
    \ DC 27 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aspect uses one of the following breath weapons:\n\n- Exalting Breath.\
    \ The aspect exhales the restoring winds of Mount Celestia in a 300-foot cone.\
    \ Each creature in that area of the aspect's choice regains 71 (13d10) hit points,\
    \ and each creature in that area of the aspect's choice that has been dead for\
    \ no longer than 1 hour is restored to life with all its hit points.\n- Platinum\
    \ Breath. The aspect exhales radiant platinum flames in a 300-foot cone. Each\
    \ creature in that area must make a DC 26 Dexterity saving throw, taking 66 (12d10)\
    \ radiant damage on a failed save, or half as much damage on a successful one."
  "name": "Breath Weapon (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aspect magically transforms into any Humanoid or Beast, while retaining\
    \ his game statistics (other than his size). This transformation ends if the aspect\
    \ is reduced to 0 hit points or if he uses a bonus action to end it."
  "name": "Change Shape"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aspect makes one Claw or Tail attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aspect makes one Bite attack. If the attack hits a creature, the target\
    \ must succeed on a DC 27 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ of the aspect until the end of the target's next turn."
  "name": "Furious Bite (Costs 2 Actions)"
"source":
- "FTD"
name: Aspect of Bahamut
image: "[[Aspect of Bahamut.png]]"
---

# Aspect of Bahamut

```statblock
"name": "Aspect of Bahamut"
"size": "Gargantuan"
"type": "dragon"
"subtype": "metallic"
"alignment": "Lawful Good"
"ac": !!int "23"
"hp": !!int "585"
"hit_dice": "30d20 + 270"
"stats":
- !!int "30"
- !!int "18"
- !!int "29"
- !!int "25"
- !!int "28"
- !!int "30"
"speed": "walk 60 ft., burrow 60 ft., fly 120 ft., swim 60 ft."
"saves":
  "Charisma": !!int "19"
  "Wisdom": !!int "18"
  "Intelligence": !!int "16"
  "Constitution": !!int "18"
"skillsaves":
  "Insight": !!int "18"
  "Perception": !!int "18"
  "Persuasion": !!int "19"
"damage_immunities": "acid; cold; fire; lightning; radiant; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"condition_immunities": "charmed, deafened, frightened, paralyzed, stunned"
"senses": "truesight 120 ft., passive Perception 28"
"languages": "Common, Draconic"
"cr": "30"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the aspect would be reduced to 0 hit points, his current hit point total\
    \ instead resets to 500 hit points, he recharges his Breath Weapon, and he regains\
    \ any expended uses of Legendary Resistance. Additionally, the aspect can now\
    \ use the options in the \"Mythic Actions\" section for 1 hour. Award a party\
    \ an additional 155,000 XP (310,000 XP total) for defeating the aspect of Bahamut\
    \ after his Platinum Brilliance activates."
  "name": "Platinum Brilliance (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the aspect fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (5/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aspect makes one Bite attack, one Claw attack, and one Tail attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 23 (2d12\
    \ + 10) piercing damage plus 22 (4d10) force damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 21 (2d10\
    \ + 10) slashing damage. If the target is a Huge or smaller creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 20) and is [restrained](/rules/conditions.md#restrained) until this\
    \ grapple ends. The aspect can have only one creature [grappled](/rules/conditions.md#grappled)\
    \ this way at a time."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 23 (2d12\
    \ + 10) bludgeoning damage. If the target is a creature, it must succeed on a\
    \ DC 27 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aspect uses one of the following breath weapons:\n\n- Exalting Breath.\
    \ The aspect exhales the restoring winds of Mount Celestia in a 300-foot cone.\
    \ Each creature in that area of the aspect's choice regains 71 (13d10) hit points,\
    \ and each creature in that area of the aspect's choice that has been dead for\
    \ no longer than 1 hour is restored to life with all its hit points.\n- Platinum\
    \ Breath. The aspect exhales radiant platinum flames in a 300-foot cone. Each\
    \ creature in that area must make a DC 26 Dexterity saving throw, taking 66 (12d10)\
    \ radiant damage on a failed save, or half as much damage on a successful one."
  "name": "Breath Weapon (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aspect magically transforms into any Humanoid or Beast, while retaining\
    \ his game statistics (other than his size). This transformation ends if the aspect\
    \ is reduced to 0 hit points or if he uses a bonus action to end it."
  "name": "Change Shape"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aspect makes one Claw or Tail attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The aspect makes one Bite attack. If the attack hits a creature, the target\
    \ must succeed on a DC 27 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ of the aspect until the end of the target's next turn."
  "name": "Furious Bite (Costs 2 Actions)"
"source":
- "FTD"
"image": "[[Aspect of Bahamut.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 165*

## Description

Known as the Platinum Dragon, Bahamut is the patron and progenitor of metallic dragons. Since fleeing the First World, he has made his home in the Seven Heavens of Mount Celestia and is often numbered among the gods of that plane. Adventurers and dragons alike pray to Bahamut to uphold honor and justice, or when they need courage to face a great threat. In the most dire situations, a powerful follower of Bahamut who makes a tremendous sacrifice—a vast hoard or even the follower's own life—might convince the god to send aid to the world in the form of a divine aspect. This aspect is a physical manifestation of the Platinum Dragon, carrying his memories and will—and a significant portion of his formidable strength.

Bahamut's aspect displays the full glory of the Platinum Dragon, towering over even ancient dragons. Covered in platinum scales, his physical features combine various elements of the five kinds of metallic dragons—according to some scholars, combining them in different ways with each manifestation of the aspect. But Bahamut is also fond of traveling the Material Plane in disguise, so his aspect might appear as a wizened old sage, a young monk, or a songbird. In any form, Bahamut's aspect is often accompanied by seven ancient gold dragons who favor disguising themselves as canaries.

In combat, Bahamut's enemies experience the full force of his justice, while his allies enjoy the full benefit of his mercy. His breath can wreak monumental destruction and work miraculous healing, and few things in the mortal world can cause him lasting harm.