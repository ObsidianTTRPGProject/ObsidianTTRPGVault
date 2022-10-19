---
cssclass: json5e-monster
tags:
- compendium/src/mot
- monster/size/gargantuan
- monster/type/monstrosity/titan
aliases: ["Tromokratis"]
statblock: true
"name": "Tromokratis"
"size": "Gargantuan"
"type": "monstrosity"
"subtype": "titan"
"alignment": "Any alignment"
"ac": !!int "22"
"hp": !!int "409"
"hit_dice": "21d20 + 189"
"stats":
- !!int "30"
- !!int "11"
- !!int "29"
- !!int "22"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft., swim 80 ft."
"saves":
  "Wisdom": !!int "8"
  "Intelligence": !!int "14"
"damage_resistances": "cold, lightning, thunder"
"damage_immunities": "fire; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, frightened, paralyzed, restrained"
"senses": "blindsight 120 ft., passive Perception 10"
"languages": ""
"cr": "26"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tromokratis can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Tromokratis is reduced to 0 hit points, it doesn't die or fall [unconscious](/rules/conditions.md#unconscious).\
    \ Instead, the damage creates cracks in its carapace, revealing its hearts. Tromokratis\
    \ has four hearts: two on its chest, one on its back, and one at the base of its\
    \ tail. A heart has an AC of 22 and 100 hit points. It is immune to bludgeoning,\
    \ piercing, and slashing damage from nonmagical attacks, and it is immune to all\
    \ conditions. If it is forced to make a saving throw, treat its ability scores\
    \ as 10 (+0). If it finishes a short or long rest, the carapace heals, any destroyed\
    \ hearts regenerate, and the hearts are covered again. Tromokratis dies when all\
    \ the hearts are destroyed."
  "name": "Hearts of the Kraken (Mythic Trait; Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Tromokratis fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tromokratis's weapon attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tromokratis deals double damage to objects and structures."
  "name": "Siege Monster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tromokratis has advantage on saving throws against spells, and any creature\
    \ that makes a spell attack against Tromokratis has disadvantage on the attack\
    \ roll."
  "name": "Spell-Resistant Carapace"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tromokratis makes three attacks: one with its pincer, one with its tail,\
    \ and one with its tentacle grasp."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +18 to hit, reach 20 ft., one target. Hit: 20 (3d6\
    \ + 10) bludgeoning damage, and if the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 26). Until the grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and Tromokratis can't use this attack on anyone else."
  "name": "Pincer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +18 to hit, reach 20 ft., one target. Hit: 23 (3d8\
    \ + 10) bludgeoning damage, and if the target is a creature, it is knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +18 to hit, reach 20 ft., one creature. Hit: 20\
    \ (3d6 + 10) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 26). If the target doesn't escape by the end of its next turn, Tromokratis\
    \ throws the target up to 60 feet in a straight line. The target lands [prone](/rules/conditions.md#prone)\
    \ and takes 21 (6d6) bludgeoning damage."
  "name": "Tentacle Grasp"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +18 to hit, reach 5 ft., one target. Hit: 29 (3d12\
    \ + 10) piercing damage. If the target is a Large or smaller creature [grappled](/rules/conditions.md#grappled)\
    \ by Tromokratis, that creature is swallowed, and the grapple ends. While swallowed,\
    \ the creature is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside Tromokratis, and\
    \ it takes 42 (12d6) acid damage at the start of each of Tromokratis's turns.\
    \ If Tromokratis takes 50 damage or more on a single turn from a creature inside\
    \ it, Tromokratis must succeed on a DC 20 Constitution saving throw at the end\
    \ of that turn or regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in a space within 10 feet of Tromokratis. If Tromokratis dies, a swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse by using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tromokratis moves up to half its speed."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tromokratis makes one tail attack."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tromokratis makes one bite attack."
  "name": "Bite (Costs 3 Actions)"
"source":
- "MOT"
name: Tromokratis
image: "[[Tromokratis.png]]"
---

# Tromokratis

```statblock
"name": "Tromokratis"
"size": "Gargantuan"
"type": "monstrosity"
"subtype": "titan"
"alignment": "Any alignment"
"ac": !!int "22"
"hp": !!int "409"
"hit_dice": "21d20 + 189"
"stats":
- !!int "30"
- !!int "11"
- !!int "29"
- !!int "22"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft., swim 80 ft."
"saves":
  "Wisdom": !!int "8"
  "Intelligence": !!int "14"
"damage_resistances": "cold, lightning, thunder"
"damage_immunities": "fire; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, frightened, paralyzed, restrained"
"senses": "blindsight 120 ft., passive Perception 10"
"languages": ""
"cr": "26"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tromokratis can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Tromokratis is reduced to 0 hit points, it doesn't die or fall [unconscious](/rules/conditions.md#unconscious).\
    \ Instead, the damage creates cracks in its carapace, revealing its hearts. Tromokratis\
    \ has four hearts: two on its chest, one on its back, and one at the base of its\
    \ tail. A heart has an AC of 22 and 100 hit points. It is immune to bludgeoning,\
    \ piercing, and slashing damage from nonmagical attacks, and it is immune to all\
    \ conditions. If it is forced to make a saving throw, treat its ability scores\
    \ as 10 (+0). If it finishes a short or long rest, the carapace heals, any destroyed\
    \ hearts regenerate, and the hearts are covered again. Tromokratis dies when all\
    \ the hearts are destroyed."
  "name": "Hearts of the Kraken (Mythic Trait; Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Tromokratis fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tromokratis's weapon attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tromokratis deals double damage to objects and structures."
  "name": "Siege Monster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tromokratis has advantage on saving throws against spells, and any creature\
    \ that makes a spell attack against Tromokratis has disadvantage on the attack\
    \ roll."
  "name": "Spell-Resistant Carapace"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tromokratis makes three attacks: one with its pincer, one with its tail,\
    \ and one with its tentacle grasp."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +18 to hit, reach 20 ft., one target. Hit: 20 (3d6\
    \ + 10) bludgeoning damage, and if the target is a creature, it is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 26). Until the grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and Tromokratis can't use this attack on anyone else."
  "name": "Pincer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +18 to hit, reach 20 ft., one target. Hit: 23 (3d8\
    \ + 10) bludgeoning damage, and if the target is a creature, it is knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +18 to hit, reach 20 ft., one creature. Hit: 20\
    \ (3d6 + 10) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 26). If the target doesn't escape by the end of its next turn, Tromokratis\
    \ throws the target up to 60 feet in a straight line. The target lands [prone](/rules/conditions.md#prone)\
    \ and takes 21 (6d6) bludgeoning damage."
  "name": "Tentacle Grasp"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +18 to hit, reach 5 ft., one target. Hit: 29 (3d12\
    \ + 10) piercing damage. If the target is a Large or smaller creature [grappled](/rules/conditions.md#grappled)\
    \ by Tromokratis, that creature is swallowed, and the grapple ends. While swallowed,\
    \ the creature is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside Tromokratis, and\
    \ it takes 42 (12d6) acid damage at the start of each of Tromokratis's turns.\
    \ If Tromokratis takes 50 damage or more on a single turn from a creature inside\
    \ it, Tromokratis must succeed on a DC 20 Constitution saving throw at the end\
    \ of that turn or regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in a space within 10 feet of Tromokratis. If Tromokratis dies, a swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse by using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tromokratis moves up to half its speed."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tromokratis makes one tail attack."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tromokratis makes one bite attack."
  "name": "Bite (Costs 3 Actions)"
"source":
- "MOT"
"image": "[[Tromokratis.png]]"
```
^statblock

*Source: Mythic Odysseys of Theros p. 254*

## Description

Most krakens roam the seas, shattering hulls and scattering fleets, but the kraken Tromokratis notoriously vents its wrath on coastal settlements. Whether it acts at the command of the god Thassa or to sate its own hunger, Tromokratis numbers among the most feared threats in the sea, having no fixed lair and wandering where it will. In recent memory, the massive menace rose from the waves to topple the Pyrgnos, Meletis's great repository of scholarly knowledge. Since that day, the polis keeps a watch specifically for Tromokratis.