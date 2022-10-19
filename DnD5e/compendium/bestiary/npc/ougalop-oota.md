---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/medium
- monster/type/humanoid/kuo-toa
- monster/environment/underdark
aliases: ["Ougalop"]
statblock: true
"name": "Ougalop"
"size": "Medium"
"type": "humanoid"
"subtype": "kuo-toa"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "18"
"hit_dice": "4d8"
"stats":
- !!int "13"
- !!int "10"
- !!int "11"
- !!int "11"
- !!int "10"
- !!int "8"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Undercommon"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ougalop can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ougalop can sense the presence of any creature within 30 feet of it that\
    \ is [invisible](/rules/conditions.md#invisible) or on the Ethereal Plane. It\
    \ can pinpoint such a creature that is moving."
  "name": "Otherworldly Perception"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ougalop has advantage on ability checks and saving throws made to escape\
    \ a grapple."
  "name": "Slippery"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Ougalop has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage\
    \ if used with two hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 5/15 ft., one Large or smaller\
    \ creature. Hit: The target is [restrained](/rules/conditions.md#restrained).\
    \ A creature can use its action to make a DC 10 Strength check to free itself\
    \ or another creature in a net, ending the effect on a success. Dealing 5 slashing\
    \ damage to the net (AC 10) frees the target without harming it and destroys the\
    \ net."
  "name": "Net"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature misses Ougalop with a melee weapon attack, Ougalop uses\
    \ its sticky shield to catch the weapon. The attacker must succeed on a DC 11\
    \ Strength saving throw, or the weapon becomes stuck to Ougalop's shield. If the\
    \ weapon's wielder can't or won't let go of the weapon, the wielder is [grappled](/rules/conditions.md#grappled)\
    \ while the weapon is stuck. While stuck, the weapon can't be used. A creature\
    \ can pull the weapon free by taking an action to make a DC 11 Strength check\
    \ and succeeding."
  "name": "Sticky Shield"
"source":
- "OotA"
name: Ougalop
image: "[[Ougalop.png]]"
---

# Ougalop

```statblock
"name": "Ougalop"
"size": "Medium"
"type": "humanoid"
"subtype": "kuo-toa"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "18"
"hit_dice": "4d8"
"stats":
- !!int "13"
- !!int "10"
- !!int "11"
- !!int "11"
- !!int "10"
- !!int "8"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Undercommon"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ougalop can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ougalop can sense the presence of any creature within 30 feet of it that\
    \ is [invisible](/rules/conditions.md#invisible) or on the Ethereal Plane. It\
    \ can pinpoint such a creature that is moving."
  "name": "Otherworldly Perception"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ougalop has advantage on ability checks and saving throws made to escape\
    \ a grapple."
  "name": "Slippery"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, Ougalop has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage\
    \ if used with two hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 5/15 ft., one Large or smaller\
    \ creature. Hit: The target is [restrained](/rules/conditions.md#restrained).\
    \ A creature can use its action to make a DC 10 Strength check to free itself\
    \ or another creature in a net, ending the effect on a success. Dealing 5 slashing\
    \ damage to the net (AC 10) frees the target without harming it and destroys the\
    \ net."
  "name": "Net"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature misses Ougalop with a melee weapon attack, Ougalop uses\
    \ its sticky shield to catch the weapon. The attacker must succeed on a DC 11\
    \ Strength saving throw, or the weapon becomes stuck to Ougalop's shield. If the\
    \ weapon's wielder can't or won't let go of the weapon, the wielder is [grappled](/rules/conditions.md#grappled)\
    \ while the weapon is stuck. While stuck, the weapon can't be used. A creature\
    \ can pull the weapon free by taking an action to make a DC 11 Strength check\
    \ and succeeding."
  "name": "Sticky Shield"
"source":
- "OotA"
"image": "[[Ougalop.png]]"
```
^statblock

*Source: Out of the Abyss p. 142*

## Environment

underdark