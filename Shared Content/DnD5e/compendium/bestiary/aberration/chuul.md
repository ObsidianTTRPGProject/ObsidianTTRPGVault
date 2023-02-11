---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/aberration
- monster/environment/underdark
aliases: ["Chuul"]
statblock: true
"name": "Chuul"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"stats":
- !!int "19"
- !!int "10"
- !!int "16"
- !!int "5"
- !!int "11"
- !!int "5"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "understands Deep Speech but can't speak"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chuul can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chuul senses magic within 120 feet of it at will. This trait otherwise\
    \ works like the [detect magic](/compendium/spells/detect-magic.md) spell but\
    \ isn't itself magical."
  "name": "Sense Magic"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chuul makes two pincer attacks. If the chuul is grappling a creature,\
    \ the chuul can also use its tentacles once."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage. The target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have\
    \ two other creatures [grappled](/rules/conditions.md#grappled)."
  "name": "Pincer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature [grappled](/rules/conditions.md#grappled) by the chuul must\
    \ succeed on a DC 13 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. Until this poison ends, the target is [paralyzed](/rules/conditions.md#paralyzed).\
    \ The target can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Tentacles"
"source":
- "MM"
- "PotA"
- "RoT"
- "WDMM"
- "GoS"
- "CRCotN"
name: Chuul
image: "[[Chuul.png]]"
---

# Chuul

```statblock
"name": "Chuul"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"stats":
- !!int "19"
- !!int "10"
- !!int "16"
- !!int "5"
- !!int "11"
- !!int "5"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "understands Deep Speech but can't speak"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chuul can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chuul senses magic within 120 feet of it at will. This trait otherwise\
    \ works like the [detect magic](/compendium/spells/detect-magic.md) spell but\
    \ isn't itself magical."
  "name": "Sense Magic"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chuul makes two pincer attacks. If the chuul is grappling a creature,\
    \ the chuul can also use its tentacles once."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage. The target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have\
    \ two other creatures [grappled](/rules/conditions.md#grappled)."
  "name": "Pincer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature [grappled](/rules/conditions.md#grappled) by the chuul must\
    \ succeed on a DC 13 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. Until this poison ends, the target is [paralyzed](/rules/conditions.md#paralyzed).\
    \ The target can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Tentacles"
"source":
- "MM"
- "PotA"
- "RoT"
- "WDMM"
- "GoS"
- "CRCotN"
"image": "[[Chuul.png]]"
```
^statblock

*Source: Monster Manual p. 40, Princes of the Apocalypse, The Rise of Tiamat, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Critical Role: Call of the Netherdeep*

## Description

Survivors of the ancient aboleth empire, chuuls are crustaceans the aboleths modified and endowed with sentience. They follow the ingrained directives of their creators, as they have done since the dawn of time.

**Primeval Relics.** In the primeval ages, aboleths ruled a vast empire that spanned the oceans of the world. In those days, the aboleths used mighty magic and bent the minds of the nascent creatures of the mortal realm. However, they were bound to the water and could not enforce their will beyond it without servants. Therefore, they created chuuls.

Perfectly obedient, the chuuls collected sentient creatures and magic at the aboleths' command. Chuuls were designed to endure the ages of the world, growing in size and strength as the eons passed. When the aboleths' empire crumbled with the rise of the gods, the chuuls were cast adrift. However, these creatures continue to do what they did for the aboleths, slowly collecting humanoids, gathering treasure, amassing magic, and consolidating power.

**Tireless Guardians.** Chuul still guard the ruins of the ancient aboleth empire. They linger in silent observance of eons-old commands. Rumors and ancient maps sometimes lure treasure seekers to these ruins, but the reward for their boldness is death.

Whatever riches that the explorers bring with them adds to the hoard guarded by the chuuls. Chuuls can sense magic at a distance. This sense couples with an innate drive that leads them to slay explorers, take their gear, and bury it in secret locales aboleths dictated eons ago.

**Waiting Servants.** Although the aboleths' ancient empire fell long ago, the psychic bonds between them and their created servants remain intact. Chuuls that come into contact with aboleths immediately assume their old roles. Such chuuls redirect their compulsions to the service of the aboleths' sinister purposes.

## Environment

underdark