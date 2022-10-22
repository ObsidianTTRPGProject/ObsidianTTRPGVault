---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/gargantuan
- monster/type/dragon/metallic
aliases: ["Silver Greatwyrm"]
statblock: true
"name": "Silver Greatwyrm"
"size": "Gargantuan"
"type": "dragon"
"subtype": "metallic"
"alignment": "Lawful Good"
"ac": !!int "22"
"hp": !!int "565"
"hit_dice": "29d20 + 261"
"stats":
- !!int "30"
- !!int "16"
- !!int "29"
- !!int "21"
- !!int "22"
- !!int "30"
"speed": "walk 60 ft., burrow 60 ft., fly 120 ft., swim 60 ft."
"saves":
  "Charisma": !!int "18"
  "Dexterity": !!int "11"
  "Wisdom": !!int "14"
  "Intelligence": !!int "13"
  "Constitution": !!int "17"
"skillsaves":
  "Insight": !!int "14"
  "Perception": !!int "22"
  "Persuasion": !!int "18"
"damage_immunities": "cold"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 32"
"languages": "Common, Draconic"
"cr": "28"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the greatwyrm fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (4/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the greatwyrm would be reduced to 0 hit points, its current hit point\
    \ total instead resets to 450 hit points, it recharges its Breath Weapon, and\
    \ it regains any expended uses of Legendary Resistance. Additionally, the greatwyrm\
    \ can now use the options in the \"Mythic Actions\" section for 1 hour. Award\
    \ a party an additional 120,000 XP (240,000 XP total) for defeating the greatwyrm\
    \ after its Metallic Awakening activates."
  "name": "Metallic Awakening (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The greatwyrm doesn't require food or drink."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The greatwyrm makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +18 to hit, reach 15 ft., one target. Hit: 21 (2d10\
    \ + 10) piercing damage plus 13 (2d12) force damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +18 to hit, reach 10 ft., one target. Hit: 19 (2d8\
    \ + 10) slashing damage. If the target is a Huge or smaller creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 20) and is [restrained](/rules/conditions.md#restrained) until this\
    \ grapple ends. The greatwyrm can have only one creature [grappled](/rules/conditions.md#grappled)\
    \ in this way at a time."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +18 to hit, reach 20 ft., one target. Hit: 21 (2d10\
    \ + 10) bludgeoning damage. If the target is a creature, it must succeed on a\
    \ DC 26 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The greatwyrm uses one of the following breath weapons:\n\n- Elemental\
    \ Breath. The greatwyrm exhales elemental energy in a 300-foot cone. Each creature\
    \ in that area must make a DC 25 Dexterity saving throw, taking 84 (13d12) cold\
    \ damage on a failed save, or half as much damage on a successful one.\n- Sapping\
    \ Breath. The greatwyrm exhales gas in a 300-foot cone. Each creature in that\
    \ area must make a DC 25 Constitution saving throw. On a failed save, the creature\
    \ falls [unconscious](/rules/conditions.md#unconscious) for 1 minute. On a successful\
    \ save, the creature has disadvantage on attack rolls and saving throws until\
    \ the end of the greatwyrm's next turn. An [unconscious](/rules/conditions.md#unconscious)\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Breath Weapon (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The greatwyrm magically transforms into any creature that is Medium or\
    \ Small, while retaining its game statistics (other than its size). This transformation\
    \ ends if the dragon is reduced to 0 hit points or uses its action to end it."
  "name": "Change Shape"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The greatwyrm makes one Claw or Tail attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The greatwyrm beats its wings. Each creature within 30 feet of it must\
    \ succeed on a DC 26 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). The greatwyrm can\
    \ then fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "FTD"
name: Silver Greatwyrm
image: "[[Silver Greatwyrm.png]]"
---

# Silver Greatwyrm

```statblock
"name": "Silver Greatwyrm"
"size": "Gargantuan"
"type": "dragon"
"subtype": "metallic"
"alignment": "Lawful Good"
"ac": !!int "22"
"hp": !!int "565"
"hit_dice": "29d20 + 261"
"stats":
- !!int "30"
- !!int "16"
- !!int "29"
- !!int "21"
- !!int "22"
- !!int "30"
"speed": "walk 60 ft., burrow 60 ft., fly 120 ft., swim 60 ft."
"saves":
  "Charisma": !!int "18"
  "Dexterity": !!int "11"
  "Wisdom": !!int "14"
  "Intelligence": !!int "13"
  "Constitution": !!int "17"
"skillsaves":
  "Insight": !!int "14"
  "Perception": !!int "22"
  "Persuasion": !!int "18"
"damage_immunities": "cold"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 32"
"languages": "Common, Draconic"
"cr": "28"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the greatwyrm fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (4/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the greatwyrm would be reduced to 0 hit points, its current hit point\
    \ total instead resets to 450 hit points, it recharges its Breath Weapon, and\
    \ it regains any expended uses of Legendary Resistance. Additionally, the greatwyrm\
    \ can now use the options in the \"Mythic Actions\" section for 1 hour. Award\
    \ a party an additional 120,000 XP (240,000 XP total) for defeating the greatwyrm\
    \ after its Metallic Awakening activates."
  "name": "Metallic Awakening (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The greatwyrm doesn't require food or drink."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The greatwyrm makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +18 to hit, reach 15 ft., one target. Hit: 21 (2d10\
    \ + 10) piercing damage plus 13 (2d12) force damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +18 to hit, reach 10 ft., one target. Hit: 19 (2d8\
    \ + 10) slashing damage. If the target is a Huge or smaller creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 20) and is [restrained](/rules/conditions.md#restrained) until this\
    \ grapple ends. The greatwyrm can have only one creature [grappled](/rules/conditions.md#grappled)\
    \ in this way at a time."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +18 to hit, reach 20 ft., one target. Hit: 21 (2d10\
    \ + 10) bludgeoning damage. If the target is a creature, it must succeed on a\
    \ DC 26 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The greatwyrm uses one of the following breath weapons:\n\n- Elemental\
    \ Breath. The greatwyrm exhales elemental energy in a 300-foot cone. Each creature\
    \ in that area must make a DC 25 Dexterity saving throw, taking 84 (13d12) cold\
    \ damage on a failed save, or half as much damage on a successful one.\n- Sapping\
    \ Breath. The greatwyrm exhales gas in a 300-foot cone. Each creature in that\
    \ area must make a DC 25 Constitution saving throw. On a failed save, the creature\
    \ falls [unconscious](/rules/conditions.md#unconscious) for 1 minute. On a successful\
    \ save, the creature has disadvantage on attack rolls and saving throws until\
    \ the end of the greatwyrm's next turn. An [unconscious](/rules/conditions.md#unconscious)\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Breath Weapon (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The greatwyrm magically transforms into any creature that is Medium or\
    \ Small, while retaining its game statistics (other than its size). This transformation\
    \ ends if the dragon is reduced to 0 hit points or uses its action to end it."
  "name": "Change Shape"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The greatwyrm makes one Claw or Tail attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The greatwyrm beats its wings. Each creature within 30 feet of it must\
    \ succeed on a DC 26 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). The greatwyrm can\
    \ then fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "FTD"
"image": "[[Silver Greatwyrm.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 208*

## Description

Some of the oldest and wisest metallic dragons undergo a miraculous metamorphosis to become greatwyrms. This transformation is often wrought by Bahamut, who takes pride in elevating his worthiest children to a status approaching his own greatness.

A metallic greatwyrm's transformation often involves fusing the consciousness, the magic, and sometimes even the physical forms of multiple echoes of the same dragon across the worlds of the Material Plane. Several of the dragons identified as dragon gods—including Aasterinian (described in the "Brass Dragons "section of chapter 5), Lendys, and Tamara—are metallic greatwyrms who have combined the essences of multiple forms to achieve this godlike status.

Metallic greatwyrms are among the largest creatures in the multiverse, overshadowing most other dragons. Mighty elemental forces swirl around them in response to their wishes, and their breath weapons can sap the strength from armies—or lay waste to whole regions.

> [!quote] Justice and Mercy
> 
> Lendys and Tamara are both silver greatwyrms, but they could not be more different from each other.
> 
> Lendys is renowned as an impartial judge who is equally ready to serve as jury and executioner when dragons commit grave injustices against dragonkind. He is lawful neutral, and he is said to be incapable of mercy or forgiveness.
> 
> Tamara, by contrast, embodies the ideal of mercy. She heals the sick, tends the injured, and delivers a peaceful departure to dragons nearing the end of their natural lives. She has a particular loathing for dracoliches and other draconic Undead.
^justice-and-mercy