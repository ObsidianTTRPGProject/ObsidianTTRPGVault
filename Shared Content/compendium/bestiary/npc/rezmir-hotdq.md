---
cssclass: json5e-monster
tags:
- compendium/src/hotdq
- monster/size/medium
- monster/type/humanoid/half-black-dragon
aliases: ["Rezmir"]
statblock: true
"name": "Rezmir"
"size": "Medium"
"type": "humanoid"
"subtype": "half-black dragon"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "90"
"hit_dice": "12d8 + 36"
"stats":
- !!int "18"
- !!int "16"
- !!int "16"
- !!int "15"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "4"
"skillsaves":
  "Stealth": !!int "9"
  "Arcana": !!int "5"
"damage_immunities": "acid"
"condition_immunities": "charmed, frightened"
"senses": "blindsight 10 ft., darkvision 120 ft., passive Perception 11"
"languages": "Common, Draconic, Infernal, Giant, Netherese"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rezmir has the [Black Dragon Mask](/compendium/items/black-dragon-mask-hotdq.md),\
    \ [Hazirawn](/compendium/items/hazirawn-hotdq.md), and an [insignia of claws](/compendium/items/insignia-of-claws-hotdq.md)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rezmir can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once per turn, Rezmir can deal an extra 10 (3d6) damage when she hits with\
    \ a weapon attack, provided Rezmir has advantage on the attack roll."
  "name": "Dark Advantage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While wearing no armor and wearing the Black Dragon Mask, Rezmir adds her\
    \ Charisma bonus to her AC (included)."
  "name": "Draconic Majesty"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Rezmir is reduced to 0 hit points, her body disintegrates into a pile\
    \ of ash."
  "name": "Immolation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Rezmir fails a saving throw while wearing the Black Dragon Mask, she\
    \ can choose to succeed instead."
  "name": "Legendary Resistance (1/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage plus 7 (2d6) necrotic damage. If the target is a creature,\
    \ it can't regain hit points for 1 minute. The target can make a DC 15 Constitution\
    \ saving throw at the end of each of its turns, ending this effect early on a\
    \ success."
  "name": "Greatsword (Hazirawn)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +8 to hit, range 90 ft., one target. Hit: 18 (4d8)\
    \ acid damage."
  "name": "Caustic Bolt"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rezmir breathes acid in a 30-foot line that is 5 feet wide. Each creature\
    \ in the line must make a DC 14 Dexterity saving throw, taking 22 (5d8) acid damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Acid Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 15-foot radius of magical darkness extends from a point Rezmir can see\
    \ within 60 feet of her and spreads around corners. The darkness lasts as long\
    \ as Rezmir maintains concentration, up to 1 minute. A creature with darkvision\
    \ can't see through this darkness, and no natural light can illuminate it. If\
    \ any of the area overlaps with a area of light created by a spell of 2nd level\
    \ or lower, the spell creating the light is dispelled."
  "name": "Darkness (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rezmir makes one melee attack."
  "name": "Melee Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rezmir takes the Hide action."
  "name": "Hide"
"source":
- "HotDQ"
- "RoT"
- "ToD"
name: Rezmir
image: "[[Rezmir.png]]"
---

# Rezmir

```statblock
"name": "Rezmir"
"size": "Medium"
"type": "humanoid"
"subtype": "half-black dragon"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "90"
"hit_dice": "12d8 + 36"
"stats":
- !!int "18"
- !!int "16"
- !!int "16"
- !!int "15"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "4"
"skillsaves":
  "Stealth": !!int "9"
  "Arcana": !!int "5"
"damage_immunities": "acid"
"condition_immunities": "charmed, frightened"
"senses": "blindsight 10 ft., darkvision 120 ft., passive Perception 11"
"languages": "Common, Draconic, Infernal, Giant, Netherese"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rezmir has the [Black Dragon Mask](/compendium/items/black-dragon-mask-hotdq.md),\
    \ [Hazirawn](/compendium/items/hazirawn-hotdq.md), and an [insignia of claws](/compendium/items/insignia-of-claws-hotdq.md)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rezmir can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once per turn, Rezmir can deal an extra 10 (3d6) damage when she hits with\
    \ a weapon attack, provided Rezmir has advantage on the attack roll."
  "name": "Dark Advantage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While wearing no armor and wearing the Black Dragon Mask, Rezmir adds her\
    \ Charisma bonus to her AC (included)."
  "name": "Draconic Majesty"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Rezmir is reduced to 0 hit points, her body disintegrates into a pile\
    \ of ash."
  "name": "Immolation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Rezmir fails a saving throw while wearing the Black Dragon Mask, she\
    \ can choose to succeed instead."
  "name": "Legendary Resistance (1/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage plus 7 (2d6) necrotic damage. If the target is a creature,\
    \ it can't regain hit points for 1 minute. The target can make a DC 15 Constitution\
    \ saving throw at the end of each of its turns, ending this effect early on a\
    \ success."
  "name": "Greatsword (Hazirawn)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +8 to hit, range 90 ft., one target. Hit: 18 (4d8)\
    \ acid damage."
  "name": "Caustic Bolt"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rezmir breathes acid in a 30-foot line that is 5 feet wide. Each creature\
    \ in the line must make a DC 14 Dexterity saving throw, taking 22 (5d8) acid damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Acid Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A 15-foot radius of magical darkness extends from a point Rezmir can see\
    \ within 60 feet of her and spreads around corners. The darkness lasts as long\
    \ as Rezmir maintains concentration, up to 1 minute. A creature with darkvision\
    \ can't see through this darkness, and no natural light can illuminate it. If\
    \ any of the area overlaps with a area of light created by a spell of 2nd level\
    \ or lower, the spell creating the light is dispelled."
  "name": "Darkness (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rezmir makes one melee attack."
  "name": "Melee Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rezmir takes the Hide action."
  "name": "Hide"
"source":
- "HotDQ"
- "RoT"
- "ToD"
"image": "[[Rezmir.png]]"
```
^statblock

*Source: Hoard of the Dragon Queen p. 93, The Rise of Tiamat, Tyranny of Dragons p. 180*