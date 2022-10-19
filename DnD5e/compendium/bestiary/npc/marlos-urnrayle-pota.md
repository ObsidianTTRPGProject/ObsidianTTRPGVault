---
cssclass: json5e-monster
tags:
- compendium/src/pota
- monster/size/medium
- monster/type/monstrosity
aliases: ["Marlos Urnrayle"]
statblock: true
"name": "Marlos Urnrayle"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "17"
- !!int "11"
- !!int "18"
- !!int "12"
- !!int "13"
- !!int "17"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "6"
  "Perception": !!int "4"
  "Arcana": !!int "4"
"damage_resistances": "acid"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 14"
"languages": "Common, Terran"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Marlos drops to 0 hit points, his body transforms into mud and collapses\
    \ into a pool. Anything he is wearing or carrying is left behind."
  "name": "Earthen Defeat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Marlos can move in difficult terrain composed of anything made from earth\
    \ or stone as if it were normal terrain. He can move through solid earth and rock\
    \ as if it were difficult terrain. If he ends his turn there, he is shunted into\
    \ the nearest space he last occupied."
  "name": "Earth Passage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Marlos fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature that can see Marlos's eyes starts its turn within 30 feet\
    \ of him, Marlos can force it to make a DC 14 Constitution saving throw if Marlos\
    \ isn't [incapacitated](/rules/conditions.md#incapacitated) and can see the creature.\
    \ If the saving throw fails by 5 or more, the creature is instantly [petrified](/rules/conditions.md#petrified).\
    \ Otherwise, a creature that fails the save begins to turn to stone and is [restrained](/rules/conditions.md#restrained).\
    \ The [restrained](/rules/conditions.md#restrained) creature must repeat the saving\
    \ throw at the end of its next turn, becoming [petrified](/rules/conditions.md#petrified)\
    \ on a failure or ending the effect on a success. The petrification lasts until\
    \ the creature is freed by the [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell or other magic.\n\nUnless surprised, a creature can avert its eyes to\
    \ avoid the saving throw at the start of its turn. If the creature does so, it\
    \ can't see Marlos until the start of its next turn, when it can decide to avert\
    \ its eyes again. If the creature looks at Marlos in the meantime, it must immediately\
    \ make the save.\n\nIf Marlos sees himself reflected on a polished surface within\
    \ 30 feet of him and in an area of bright light, Marlos is, due to his curse,\
    \ affected by his own gaze."
  "name": "Petrifying Gaze"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Marlos makes three melee attacks, one with his snake hair and two with\
    \ [Ironfang](/compendium/items/ironfang-pota.md)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage plus 14 (4d6) poison damage."
  "name": "Snake Hair"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage plus 4 (1d8) thunder damage."
  "name": "Ironfang"
"source":
- "PotA"
name: Marlos Urnrayle
image: "[[Marlos Urnrayle.png]]"
---

# Marlos Urnrayle

```statblock
"name": "Marlos Urnrayle"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "17"
- !!int "11"
- !!int "18"
- !!int "12"
- !!int "13"
- !!int "17"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "6"
  "Perception": !!int "4"
  "Arcana": !!int "4"
"damage_resistances": "acid"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 14"
"languages": "Common, Terran"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Marlos drops to 0 hit points, his body transforms into mud and collapses\
    \ into a pool. Anything he is wearing or carrying is left behind."
  "name": "Earthen Defeat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Marlos can move in difficult terrain composed of anything made from earth\
    \ or stone as if it were normal terrain. He can move through solid earth and rock\
    \ as if it were difficult terrain. If he ends his turn there, he is shunted into\
    \ the nearest space he last occupied."
  "name": "Earth Passage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Marlos fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature that can see Marlos's eyes starts its turn within 30 feet\
    \ of him, Marlos can force it to make a DC 14 Constitution saving throw if Marlos\
    \ isn't [incapacitated](/rules/conditions.md#incapacitated) and can see the creature.\
    \ If the saving throw fails by 5 or more, the creature is instantly [petrified](/rules/conditions.md#petrified).\
    \ Otherwise, a creature that fails the save begins to turn to stone and is [restrained](/rules/conditions.md#restrained).\
    \ The [restrained](/rules/conditions.md#restrained) creature must repeat the saving\
    \ throw at the end of its next turn, becoming [petrified](/rules/conditions.md#petrified)\
    \ on a failure or ending the effect on a success. The petrification lasts until\
    \ the creature is freed by the [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell or other magic.\n\nUnless surprised, a creature can avert its eyes to\
    \ avoid the saving throw at the start of its turn. If the creature does so, it\
    \ can't see Marlos until the start of its next turn, when it can decide to avert\
    \ its eyes again. If the creature looks at Marlos in the meantime, it must immediately\
    \ make the save.\n\nIf Marlos sees himself reflected on a polished surface within\
    \ 30 feet of him and in an area of bright light, Marlos is, due to his curse,\
    \ affected by his own gaze."
  "name": "Petrifying Gaze"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Marlos makes three melee attacks, one with his snake hair and two with\
    \ [Ironfang](/compendium/items/ironfang-pota.md)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage plus 14 (4d6) poison damage."
  "name": "Snake Hair"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage plus 4 (1d8) thunder damage."
  "name": "Ironfang"
"source":
- "PotA"
"image": "[[Marlos Urnrayle.png]]"
```
^statblock

*Source: Princes of the Apocalypse p. 199*

## Description

Marlos Urnrayle is the earth prophet of Elemental Evil and the leader of the Black Earth cult in the Sumber Hills. He is a medusa of unusual power who was once a vain and cruel human nobleman. Marlos delights in petrifying his foes, especially those of great physical beauty, and smashing the remains to rubble.

Marlos wields the magical war pick Ironfang, which he found in the Fane of the Eye after being drawn to the spot by a vision. Because of his medusa curse and his possession of the elemental weapon, the other Black Earth cultists believe that he stands high in Ogrémoch's favor and are fanatically loyal to him.

**In the Earth Node.** When the Temple of Black Earth is threatened, Marlos Urnrayle retreats to the Black Geode, the earth node. Within this node, Marlos gains one additional use of his Legendary Resistance trait.