---
cssclass: json5e-monster
tags:
- compendium/src/wbtw
- monster/size/large
- monster/type/monstrosity
aliases: ["Envy"]
statblock: true
"name": "Envy"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "19"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "20"
- !!int "11"
- !!int "18"
- !!int "2"
- !!int "12"
- !!int "7"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "4"
"condition_immunities": "petrified"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Sylvan"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Envy moves at least 20 feet straight toward a creature and then hits\
    \ it with a bite attack on the same turn, that target must succeed on a DC 16\
    \ Strength saving throw or be knocked [prone](/rules/conditions.md#prone). If\
    \ the target is [prone](/rules/conditions.md#prone), Envy can make one attack\
    \ with its claws against it as a bonus action."
  "name": "Trampling Charge"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 18 (2d12\
    \ + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10\
    \ + 5) bludgeoning damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Envy exhales petrifying gas in a 30-foot cone. Each creature in that area\
    \ must succeed on a DC 13 Constitution saving throw. On a failed save, a target\
    \ begins to turn to stone and is [restrained](/rules/conditions.md#restrained).\
    \ The [restrained](/rules/conditions.md#restrained) target must repeat the saving\
    \ throw at the end of its next turn. On a success, the effect ends on the target.\
    \ On a failure, the target is [petrified](/rules/conditions.md#petrified) until\
    \ freed by the [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell or other magic."
  "name": "Petrifying Breath (Recharge 5-6)"
"source":
- "WBtW"
name: Envy
image: "[[Envy.png]]"
---

# Envy

```statblock
"name": "Envy"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "19"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "20"
- !!int "11"
- !!int "18"
- !!int "2"
- !!int "12"
- !!int "7"
"speed": "walk 40 ft."
"skillsaves":
  "Perception": !!int "4"
"condition_immunities": "petrified"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Sylvan"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Envy moves at least 20 feet straight toward a creature and then hits\
    \ it with a bite attack on the same turn, that target must succeed on a DC 16\
    \ Strength saving throw or be knocked [prone](/rules/conditions.md#prone). If\
    \ the target is [prone](/rules/conditions.md#prone), Envy can make one attack\
    \ with its claws against it as a bonus action."
  "name": "Trampling Charge"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 18 (2d12\
    \ + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10\
    \ + 5) bludgeoning damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Envy exhales petrifying gas in a 30-foot cone. Each creature in that area\
    \ must succeed on a DC 13 Constitution saving throw. On a failed save, a target\
    \ begins to turn to stone and is [restrained](/rules/conditions.md#restrained).\
    \ The [restrained](/rules/conditions.md#restrained) target must repeat the saving\
    \ throw at the end of its next turn. On a success, the effect ends on the target.\
    \ On a failure, the target is [petrified](/rules/conditions.md#petrified) until\
    \ freed by the [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell or other magic."
  "name": "Petrifying Breath (Recharge 5-6)"
"source":
- "WBtW"
"image": "[[Envy.png]]"
```
^statblock

*Source: The Wild Beyond the Witchlight p. 178*

## Description

The iron lion, Envy, is one of two guardians that Zybilna created to watch over her garden in her absence. When Zybilna became frozen in time, her guardians appeared from their respective demiplanes to perform their duty.

The iron lion speaks Common and Sylvan, referring to itself using the pronouns "we" and "us."

Envy dislikes its counterpart, Wrath (see area P10), but the two are prevented by Zybilna's magic from harming one another. When the characters first grace the iron lion with their presence, it demands their obeisance and commands them to kneel before it. If the characters do as Envy commands, the lion is pleased and allows them to remain in its presence. Characters who fail to show it deference are instructed to leave the tower at once, and the lion attacks those who refuse.