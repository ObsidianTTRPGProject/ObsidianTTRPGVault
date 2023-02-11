---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/huge
- monster/type/monstrosity
aliases: ["Hoard Mimic"]
statblock: true
"name": "Hoard Mimic"
"size": "Huge"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "123"
"hit_dice": "13d12 + 39"
"stats":
- !!int "21"
- !!int "12"
- !!int "17"
- !!int "10"
- !!int "16"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "6"
  "Persuasion": !!int "3"
"condition_immunities": "prone"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the mimic is motionless at the start of combat, it has advantage on\
    \ its initiative roll. Moreover, if a creature hasn't observed the mimic move\
    \ or act, that creature must succeed on a DC 18 Intelligence (Investigation) check\
    \ to discern that the mimic is animate."
  "name": "False Appearance (Hoard Form Only)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mimic makes one Bite attack and two Pseudopod attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 16 (2d10\
    \ + 5) piercing damage plus 7 (2d6) acid damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 12 (2d6\
    \ + 5) bludgeoning damage, and the mimic adheres to the target. A creature adhered\
    \ to the mimic is also [grappled](/rules/conditions.md#grappled) by it (escape\
    \ DC 16). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ Ability checks made to escape this grapple have disadvantage."
  "name": "Pseudopod"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mimic sprays a fine mist of acid in a 30-foot cone. Each creature in\
    \ that area must make a DC 14 Dexterity saving throw. On a failed save, the creature\
    \ takes 27 (6d8) acid damage and is [blinded](/rules/conditions.md#blinded) until\
    \ the end of its next turn. On a successful save, the creature takes half as much\
    \ damage and isn't [blinded](/rules/conditions.md#blinded)."
  "name": "Caustic Mist (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mimic transforms into a hoard or back into its true, amorphous form.\
    \ Its statistics are the same in each form. Any equipment it is wearing or carrying\
    \ isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
"source":
- "FTD"
name: Hoard Mimic
image: "[[Hoard Mimic.png]]"
---

# Hoard Mimic

```statblock
"name": "Hoard Mimic"
"size": "Huge"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "123"
"hit_dice": "13d12 + 39"
"stats":
- !!int "21"
- !!int "12"
- !!int "17"
- !!int "10"
- !!int "16"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "6"
  "Persuasion": !!int "3"
"condition_immunities": "prone"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the mimic is motionless at the start of combat, it has advantage on\
    \ its initiative roll. Moreover, if a creature hasn't observed the mimic move\
    \ or act, that creature must succeed on a DC 18 Intelligence (Investigation) check\
    \ to discern that the mimic is animate."
  "name": "False Appearance (Hoard Form Only)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mimic makes one Bite attack and two Pseudopod attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 16 (2d10\
    \ + 5) piercing damage plus 7 (2d6) acid damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 12 (2d6\
    \ + 5) bludgeoning damage, and the mimic adheres to the target. A creature adhered\
    \ to the mimic is also [grappled](/rules/conditions.md#grappled) by it (escape\
    \ DC 16). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ Ability checks made to escape this grapple have disadvantage."
  "name": "Pseudopod"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mimic sprays a fine mist of acid in a 30-foot cone. Each creature in\
    \ that area must make a DC 14 Dexterity saving throw. On a failed save, the creature\
    \ takes 27 (6d8) acid damage and is [blinded](/rules/conditions.md#blinded) until\
    \ the end of its next turn. On a successful save, the creature takes half as much\
    \ damage and isn't [blinded](/rules/conditions.md#blinded)."
  "name": "Caustic Mist (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The mimic transforms into a hoard or back into its true, amorphous form.\
    \ Its statistics are the same in each form. Any equipment it is wearing or carrying\
    \ isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
"source":
- "FTD"
"image": "[[Hoard Mimic.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 204*

## Description

Kin to the common mimic described in the _Monster Manual_, hoard mimics are among the oldest and most cunning of their kind. A hoard mimic's massive, amorphous form and shape-shifting prowess allow it to take on the semblance of a vast trove of treasures, not just a single object. Like smaller mimics, hoard mimics exude adhesive goo to trap prey. They can also vent a fine, caustic mist from their pores that burns and blinds creatures caught in it.

Hoard mimics are so named because many enter into partnerships with dragons, each one serving as a false hoard in a dragon's lair to draw unwitting intruders away from the real riches—and into the mimic's maw. If faced with unexpectedly fierce opposition, though, a hoard mimic might offer information about the true hoard in exchange for its life.