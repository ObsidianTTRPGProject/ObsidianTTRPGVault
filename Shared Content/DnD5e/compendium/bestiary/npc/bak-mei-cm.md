---
cssclass: json5e-monster
tags:
- compendium/src/cm
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Bak Mei"]
statblock: true
"name": "Bak Mei"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "102"
"hit_dice": "12d8 + 48"
"stats":
- !!int "10"
- !!int "18"
- !!int "18"
- !!int "13"
- !!int "17"
- !!int "16"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "9"
  "Wisdom": !!int "8"
  "Intelligence": !!int "6"
  "Strength": !!int "5"
  "Constitution": !!int "9"
"skillsaves":
  "Medicine": !!int "8"
  "Athletics": !!int "5"
  "Stealth": !!int "9"
  "Religion": !!int "6"
  "Acrobatics": !!int "9"
"damage_resistances": "poison, thunder"
"condition_immunities": "charmed, frightened, paralyzed"
"senses": "passive Perception 13"
"languages": "Auran, Common"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Bak Mei fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bak Mei carries a [staff of striking](/compendium/items/staff-of-striking.md)\
    \ with 10 charges."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Bak Mei is wearing no armor and wielding no shield, his AC includes\
    \ his Wisdom modifier."
  "name": "Unarmored Defense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bak Mei attacks three times: twice with Thunder Strike and once with his\
    \ staff of striking."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 15 (2d10\
    \ + 4) thunder damage, and if the target is a creature, it must succeed on a DC\
    \ 17 Constitution saving throw or be [deafened](/rules/conditions.md#deafened)\
    \ and [stunned](/rules/conditions.md#stunned) until the start of Bak Mei's next\
    \ turn."
  "name": "Thunder Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage, or 4 (1d8) bludgeoning damage when used with two hands,\
    \ and Bak Mei can expend up to 3 of the staff's charges. For each expended charge,\
    \ the target takes an extra 1d6 force damage."
  "name": "Staff of Striking"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bak Mei regains 2d8 + 4 hit points, and all levels of [exhaustion](/rules/conditions.md#exhaustion)\
    \ end on him."
  "name": "Heal Self (Recharges after a Long Rest)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bak Mei takes the Disengage or Hide action."
  "name": "Nimble Escape"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to being hit by a ranged weapon attack, Bak Mei deflects the\
    \ missile. The damage he takes from the attack is reduced by 1d10 + 12. If the\
    \ damage is reduced to 0, Bak Mei catches the missile if it's small enough to\
    \ hold in one hand and Bak Mei has a hand free."
  "name": "Deflect Missile"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bak Mei moves up to 20 feet. This movement does not provoke opportunity\
    \ attacks."
  "name": "Crane Dance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bak Mei uses Thunder Strike."
  "name": "Thunder Strike (Costs 2 Actions)"
"source":
- "CM"
name: Bak Mei
image: "[[Bak Mei.png]]"
---

# Bak Mei

```statblock
"name": "Bak Mei"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "102"
"hit_dice": "12d8 + 48"
"stats":
- !!int "10"
- !!int "18"
- !!int "18"
- !!int "13"
- !!int "17"
- !!int "16"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "9"
  "Wisdom": !!int "8"
  "Intelligence": !!int "6"
  "Strength": !!int "5"
  "Constitution": !!int "9"
"skillsaves":
  "Medicine": !!int "8"
  "Athletics": !!int "5"
  "Stealth": !!int "9"
  "Religion": !!int "6"
  "Acrobatics": !!int "9"
"damage_resistances": "poison, thunder"
"condition_immunities": "charmed, frightened, paralyzed"
"senses": "passive Perception 13"
"languages": "Auran, Common"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Bak Mei fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bak Mei carries a [staff of striking](/compendium/items/staff-of-striking.md)\
    \ with 10 charges."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Bak Mei is wearing no armor and wielding no shield, his AC includes\
    \ his Wisdom modifier."
  "name": "Unarmored Defense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bak Mei attacks three times: twice with Thunder Strike and once with his\
    \ staff of striking."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 15 (2d10\
    \ + 4) thunder damage, and if the target is a creature, it must succeed on a DC\
    \ 17 Constitution saving throw or be [deafened](/rules/conditions.md#deafened)\
    \ and [stunned](/rules/conditions.md#stunned) until the start of Bak Mei's next\
    \ turn."
  "name": "Thunder Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage, or 4 (1d8) bludgeoning damage when used with two hands,\
    \ and Bak Mei can expend up to 3 of the staff's charges. For each expended charge,\
    \ the target takes an extra 1d6 force damage."
  "name": "Staff of Striking"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bak Mei regains 2d8 + 4 hit points, and all levels of [exhaustion](/rules/conditions.md#exhaustion)\
    \ end on him."
  "name": "Heal Self (Recharges after a Long Rest)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bak Mei takes the Disengage or Hide action."
  "name": "Nimble Escape"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to being hit by a ranged weapon attack, Bak Mei deflects the\
    \ missile. The damage he takes from the attack is reduced by 1d10 + 12. If the\
    \ damage is reduced to 0, Bak Mei catches the missile if it's small enough to\
    \ hold in one hand and Bak Mei has a hand free."
  "name": "Deflect Missile"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bak Mei moves up to 20 feet. This movement does not provoke opportunity\
    \ attacks."
  "name": "Crane Dance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bak Mei uses Thunder Strike."
  "name": "Thunder Strike (Costs 2 Actions)"
"source":
- "CM"
"image": "[[Bak Mei.png]]"
```
^statblock

*Source: Candlekeep Mysteries p. 168*

## Description

Bak Mei was once an agile and skilled Shou monk famous for upholding justice and helping the needy in his distant homeland to the east of Faerûn. As he grew older, learned more about the world, and began to feel the weight of old age, his worldview changed dramatically. Motivated by his growing fear of death, Bak Mei became obsessed with living an unending life. He began collecting texts on the subject, consulting with practitioners of the necromantic arts, and seeking audiences with dark forces.

The abbots of his temple confronted Bak Mei about his radical pursuits and demanded that he cease his activities. In response, he tried to stage a revolt at the temple, a traitorous action that resulted in the excommunication of Bak Mei and his followers, who christened themselves the Order of the Immortal Lotus. The small group eventually settled in the forest near Baldur's Gate, where they recruit new members. Under Bak Mei's cruel tutelage and eccentric training methods, the order has grown in power and numbers, living in seclusion while he planned his revenge on his former superiors.

Bak Mei is notorious among the monks of Faerûn. Some see him as a vagabond, exiled from his order for traitorous acts and disregard for tradition. Others see him as a radical seeker of knowledge.

Bak Mei is an old man with a long white beard and bushy eyebrows. Like the other members of his order, Bak Mei is clad in snow-white robes secured by a black sash over a form-fitting black shirt and trousers.