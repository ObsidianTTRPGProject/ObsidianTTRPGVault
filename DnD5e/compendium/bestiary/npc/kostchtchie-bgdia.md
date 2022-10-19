---
cssclass: json5e-monster
tags:
- compendium/src/bgdia
- monster/size/large
- monster/type/fiend/demon
aliases: ["Kostchtchie"]
statblock: true
"name": "Kostchtchie"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "243"
"hit_dice": "18d10 + 144"
"stats":
- !!int "30"
- !!int "12"
- !!int "27"
- !!int "18"
- !!int "22"
- !!int "19"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "14"
  "Constitution": !!int "16"
"skillsaves":
  "Intimidation": !!int "12"
  "Perception": !!int "14"
  "Survival": !!int "14"
"damage_resistances": "fire, lightning"
"damage_immunities": "cold; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "Abyssal, Giant, telepathy 120 ft."
"cr": "25"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kostchtchie's innate spellcasting ability is Charisma (spell save DC 20).\
    \ He can innately cast the following spells, requiring no material components:\n\
    \nAt will: [command](/compendium/spells/command.md), [darkness](/compendium/spells/darkness.md)\n\
    \n1/day each: [dispel evil and good](/compendium/spells/dispel-evil-and-good.md),\
    \ [gate](/compendium/spells/gate.md), [harm](/compendium/spells/harm.md), [telekinesis](/compendium/spells/telekinesis.md),\
    \ [teleport](/compendium/spells/teleport.md), [wind walk](/compendium/spells/wind-walk.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Kostchtchie fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kostchtchie has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kostchtchie makes two melee attacks, only one of which can be a bite attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +18 to hit, reach 5 ft., one creature. Hit: 13 (1d6\
    \ + 10) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +18 to hit, reach 10 ft., one target. Hit: 19 (2d8\
    \ + 10) bludgeoning damage, or 21 (2d10 + 10) bludgeoning damage when used with\
    \ two hands, and the weapon emits a burst of cold that deals 10 (3d6) cold damage\
    \ to each creature within 30 feet of it."
  "name": "Matalotok (Warhammer)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kostchtchie makes one melee weapon attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kostchtchie moves up to his speed."
  "name": "Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kostchtchie curses one creature he can see within 60 feet of him. The cursed\
    \ creature gains vulnerability to all damage dealt by Kostchtchie until the end\
    \ of Kostchtchie's next turn."
  "name": "Curse (Costs 2 Actions)"
"source":
- "BGDIA"
name: Kostchtchie
image: "[[Kostchtchie.png]]"
---

# Kostchtchie

```statblock
"name": "Kostchtchie"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "243"
"hit_dice": "18d10 + 144"
"stats":
- !!int "30"
- !!int "12"
- !!int "27"
- !!int "18"
- !!int "22"
- !!int "19"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "14"
  "Constitution": !!int "16"
"skillsaves":
  "Intimidation": !!int "12"
  "Perception": !!int "14"
  "Survival": !!int "14"
"damage_resistances": "fire, lightning"
"damage_immunities": "cold; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "Abyssal, Giant, telepathy 120 ft."
"cr": "25"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kostchtchie's innate spellcasting ability is Charisma (spell save DC 20).\
    \ He can innately cast the following spells, requiring no material components:\n\
    \nAt will: [command](/compendium/spells/command.md), [darkness](/compendium/spells/darkness.md)\n\
    \n1/day each: [dispel evil and good](/compendium/spells/dispel-evil-and-good.md),\
    \ [gate](/compendium/spells/gate.md), [harm](/compendium/spells/harm.md), [telekinesis](/compendium/spells/telekinesis.md),\
    \ [teleport](/compendium/spells/teleport.md), [wind walk](/compendium/spells/wind-walk.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Kostchtchie fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kostchtchie has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kostchtchie makes two melee attacks, only one of which can be a bite attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +18 to hit, reach 5 ft., one creature. Hit: 13 (1d6\
    \ + 10) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +18 to hit, reach 10 ft., one target. Hit: 19 (2d8\
    \ + 10) bludgeoning damage, or 21 (2d10 + 10) bludgeoning damage when used with\
    \ two hands, and the weapon emits a burst of cold that deals 10 (3d6) cold damage\
    \ to each creature within 30 feet of it."
  "name": "Matalotok (Warhammer)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kostchtchie makes one melee weapon attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kostchtchie moves up to his speed."
  "name": "Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Kostchtchie curses one creature he can see within 60 feet of him. The cursed\
    \ creature gains vulnerability to all damage dealt by Kostchtchie until the end\
    \ of Kostchtchie's next turn."
  "name": "Curse (Costs 2 Actions)"
"source":
- "BGDIA"
"image": "[[Kostchtchie.png]]"
```
^statblock

*Source: Baldur's Gate: Descent Into Avernus p. 105*

## Description

The demon lord Kostchtchie resembles a squat hill giant with short, bandy legs and a grossly shaped head.

Frost giants who forsake their gods and turn to demon worship can summon Kostchtchie with bloody offerings left on altars of hewn ice. If the demon lord chooses to answer the giants' call, he hunts and fights alongside them for a time, infecting the frost giants with savage madness and bloodlust before disappearing back to the Abyss.