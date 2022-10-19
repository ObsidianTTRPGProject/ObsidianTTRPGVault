---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/large
- monster/type/ooze
aliases: ["Dragonblood Ooze"]
statblock: true
"name": "Dragonblood Ooze"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"stats":
- !!int "18"
- !!int "6"
- !!int "17"
- !!int "2"
- !!int "12"
- !!int "10"
"speed": "walk 20 ft., climb 20 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "4"
"damage_resistances": "acid, cold, fire, lightning, poison"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, grappled,\
  \ prone, restrained"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 14"
"languages": "understands Draconic and the languages of its creator but can't speak"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ooze can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ooze can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ooze makes two Pseudopod attacks. The ooze can replace one Pseudopod\
    \ attack with its Slime Breath, if available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 9 (1d10\
    \ + 4) bludgeoning damage plus 14 (4d6) acid damage. If the target is a Large\
    \ or smaller creature, it is [grappled](/rules/conditions.md#grappled) (escape\
    \ DC 15). Until this grapple ends, the target takes 7 (2d6) acid damage at the\
    \ start of each of its turns."
  "name": "Pseudopod"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ooze expels a spray of its gelatinous mass in a 30-foot cone. Each\
    \ creature in that area must make a DC 14 Dexterity saving throw. On a failed\
    \ save, the creature takes 22 (4d10) acid damage and is pulled up to 30 feet straight\
    \ toward the ooze. On a successful save, the creature takes half as much damage\
    \ and isn't pulled."
  "name": "Slime Breath (Recharge 6)"
"source":
- "FTD"
name: Dragonblood Ooze
image: "[[Dragonblood Ooze.png]]"
---

# Dragonblood Ooze

```statblock
"name": "Dragonblood Ooze"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"stats":
- !!int "18"
- !!int "6"
- !!int "17"
- !!int "2"
- !!int "12"
- !!int "10"
"speed": "walk 20 ft., climb 20 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "4"
"damage_resistances": "acid, cold, fire, lightning, poison"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, grappled,\
  \ prone, restrained"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 14"
"languages": "understands Draconic and the languages of its creator but can't speak"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ooze can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ooze can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ooze makes two Pseudopod attacks. The ooze can replace one Pseudopod\
    \ attack with its Slime Breath, if available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 9 (1d10\
    \ + 4) bludgeoning damage plus 14 (4d6) acid damage. If the target is a Large\
    \ or smaller creature, it is [grappled](/rules/conditions.md#grappled) (escape\
    \ DC 15). Until this grapple ends, the target takes 7 (2d6) acid damage at the\
    \ start of each of its turns."
  "name": "Pseudopod"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ooze expels a spray of its gelatinous mass in a 30-foot cone. Each\
    \ creature in that area must make a DC 14 Dexterity saving throw. On a failed\
    \ save, the creature takes 22 (4d10) acid damage and is pulled up to 30 feet straight\
    \ toward the ooze. On a successful save, the creature takes half as much damage\
    \ and isn't pulled."
  "name": "Slime Breath (Recharge 6)"
"source":
- "FTD"
"image": "[[Dragonblood Ooze.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 182*

## Description

Magic-minded artisans have long incorporated parts of dragons' bodies into magic items, crafting dragon hide into armor and forging weapons from claws and teeth. Alchemists have found beneficial uses for dragon blood, but ill-advised experiments have also given rise to dragonblood oozes.

The congealed blood of a dragon given mobility and hunger, the ooze tries to shape itself into a draconic form. It cannot hold a coherent shape for long and soon collapses into an amorphous heap. Similarly, it tries to manifest a breath weapon but manages only to spew forth part of its own body that it then reels back in.