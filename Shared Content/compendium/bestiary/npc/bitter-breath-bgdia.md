---
cssclass: json5e-monster
tags:
- compendium/src/bgdia
- monster/size/large
- monster/type/fiend/devil
aliases: ["Bitter Breath"]
statblock: true
"name": "Bitter Breath"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "178"
"hit_dice": "17d10 + 85"
"stats":
- !!int "22"
- !!int "17"
- !!int "21"
- !!int "12"
- !!int "16"
- !!int "17"
"speed": "walk 20 ft."
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "7"
  "Wisdom": !!int "7"
  "Strength": !!int "10"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Infernal, telepathy 120 ft."
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede Bitter Breath's darkvision."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bitter Breath has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bitter Breath makes three melee attacks: two with its fork and one with\
    \ its tail. It can use Hurl Flame in place of any melee attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (2d8\
    \ + 6) piercing damage."
  "name": "Fork"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 10 (1d8\
    \ + 6) piercing damage. If the target is a creature other than an undead or a\
    \ construct, it must succeed on a DC 17 Constitution saving throw or lose 10 (3d6)\
    \ hit points at the start of each of its turns due to an infernal wound. Each\
    \ time Bitter Breath hits the wounded target with this attack, the damage dealt\
    \ by the wound increases by 10 (3d6). Any creature can take an action to stanch\
    \ the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes\
    \ if the target receives magical healing."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 150 ft., one target. Hit: 14 (4d6)\
    \ fire damage. If the target is a flammable object that isn't being worn or carried,\
    \ it also catches fire."
  "name": "Hurl Flame"
"source":
- "BGDIA"
name: Bitter Breath
image: "[[Bitter Breath.png]]"
---

# Bitter Breath

```statblock
"name": "Bitter Breath"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "178"
"hit_dice": "17d10 + 85"
"stats":
- !!int "22"
- !!int "17"
- !!int "21"
- !!int "12"
- !!int "16"
- !!int "17"
"speed": "walk 20 ft."
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "7"
  "Wisdom": !!int "7"
  "Strength": !!int "10"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Infernal, telepathy 120 ft."
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede Bitter Breath's darkvision."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bitter Breath has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Bitter Breath makes three melee attacks: two with its fork and one with\
    \ its tail. It can use Hurl Flame in place of any melee attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (2d8\
    \ + 6) piercing damage."
  "name": "Fork"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 10 (1d8\
    \ + 6) piercing damage. If the target is a creature other than an undead or a\
    \ construct, it must succeed on a DC 17 Constitution saving throw or lose 10 (3d6)\
    \ hit points at the start of each of its turns due to an infernal wound. Each\
    \ time Bitter Breath hits the wounded target with this attack, the damage dealt\
    \ by the wound increases by 10 (3d6). Any creature can take an action to stanch\
    \ the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes\
    \ if the target receives magical healing."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 150 ft., one target. Hit: 14 (4d6)\
    \ fire damage. If the target is a flammable object that isn't being worn or carried,\
    \ it also catches fire."
  "name": "Hurl Flame"
"source":
- "BGDIA"
"image": "[[Bitter Breath.png]]"
```
^statblock

*Source: Baldur's Gate: Descent Into Avernus p. 90*