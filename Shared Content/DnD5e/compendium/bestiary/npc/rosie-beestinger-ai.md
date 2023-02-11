---
cssclass: json5e-monster
tags:
- compendium/src/ai
- monster/size/small
- monster/type/humanoid/halfling
aliases: ["Rosie Beestinger"]
statblock: true
"name": "Rosie Beestinger"
"size": "Small"
"type": "humanoid"
"subtype": "halfling"
"alignment": "Chaotic Good"
"ac": !!int "15"
"hp": !!int "45"
"hit_dice": "10d6 + 10"
"stats":
- !!int "8"
- !!int "16"
- !!int "12"
- !!int "12"
- !!int "14"
- !!int "14"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "5"
  "Strength": !!int "1"
"skillsaves":
  "Intimidation": !!int "4"
  "Stealth": !!int "5"
  "History": !!int "3"
  "Acrobatics": !!int "5"
"senses": "passive Perception 12"
"languages": "Common, Draconic, Elvish, Halfling"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rosie's innate spellcasting ability is Wisdom (spell save DC 12). She can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [minor illusion](/compendium/spells/minor-illusion.md), [sacred flame](/compendium/spells/sacred-flame.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1/day each: [command](/compendium/spells/command.md),\
    \ [darkness](/compendium/spells/darkness.md), [darkvision](/compendium/spells/darkvision.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md), [silence](/compendium/spells/silence.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rosie has advantage on saving throws against being [frightened](/rules/conditions.md#frightened)."
  "name": "Brave"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rosie can move through the space of any creature that is of a size larger\
    \ than hers."
  "name": "Halfling Nimbleness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Rosie is subjected to an effect that allows her to make a Dexterity\
    \ saving throw to take only half damage, she instead takes no damage if she succeeds\
    \ on the saving throw, and only half damage if she fails. She can't use this trait\
    \ if she's [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Evasion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Rosie is in dim light or darkness, she can use a bonus action to teleport\
    \ 60 feet to an unoccupied space she can see that is also in dim light or darkness.\
    \ She then has advantage on the first melee attack she makes before the end of\
    \ the turn."
  "name": "Shadow Step"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rosie makes three attacks, then makes two unarmed strike attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage if used with two\
    \ hands."
  "name": "Staff of the Master (+1 Quarterstaff)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) bludgeoning damage. Rosie's unarmed strikes are magical."
  "name": "Unarmed Strike"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to being hit by a ranged weapon attack, Rosie deflects the\
    \ missile. The damage she takes from the attack is reduced by 1d10 + 9. If the\
    \ damage is reduced to 0, she catches the missile if it's small enough to hold\
    \ in one hand and she has a hand free."
  "name": "Deflect Missiles"
"source":
- "AI"
name: Rosie Beestinger
image: "[[Rosie Beestinger.png]]"
---

# Rosie Beestinger

```statblock
"name": "Rosie Beestinger"
"size": "Small"
"type": "humanoid"
"subtype": "halfling"
"alignment": "Chaotic Good"
"ac": !!int "15"
"hp": !!int "45"
"hit_dice": "10d6 + 10"
"stats":
- !!int "8"
- !!int "16"
- !!int "12"
- !!int "12"
- !!int "14"
- !!int "14"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "5"
  "Strength": !!int "1"
"skillsaves":
  "Intimidation": !!int "4"
  "Stealth": !!int "5"
  "History": !!int "3"
  "Acrobatics": !!int "5"
"senses": "passive Perception 12"
"languages": "Common, Draconic, Elvish, Halfling"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rosie's innate spellcasting ability is Wisdom (spell save DC 12). She can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [minor illusion](/compendium/spells/minor-illusion.md), [sacred flame](/compendium/spells/sacred-flame.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1/day each: [command](/compendium/spells/command.md),\
    \ [darkness](/compendium/spells/darkness.md), [darkvision](/compendium/spells/darkvision.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md), [silence](/compendium/spells/silence.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rosie has advantage on saving throws against being [frightened](/rules/conditions.md#frightened)."
  "name": "Brave"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rosie can move through the space of any creature that is of a size larger\
    \ than hers."
  "name": "Halfling Nimbleness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Rosie is subjected to an effect that allows her to make a Dexterity\
    \ saving throw to take only half damage, she instead takes no damage if she succeeds\
    \ on the saving throw, and only half damage if she fails. She can't use this trait\
    \ if she's [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Evasion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Rosie is in dim light or darkness, she can use a bonus action to teleport\
    \ 60 feet to an unoccupied space she can see that is also in dim light or darkness.\
    \ She then has advantage on the first melee attack she makes before the end of\
    \ the turn."
  "name": "Shadow Step"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rosie makes three attacks, then makes two unarmed strike attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage if used with two\
    \ hands."
  "name": "Staff of the Master (+1 Quarterstaff)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) bludgeoning damage. Rosie's unarmed strikes are magical."
  "name": "Unarmed Strike"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to being hit by a ranged weapon attack, Rosie deflects the\
    \ missile. The damage she takes from the attack is reduced by 1d10 + 9. If the\
    \ damage is reduced to 0, she catches the missile if it's small enough to hold\
    \ in one hand and she has a hand free."
  "name": "Deflect Missiles"
"source":
- "AI"
"image": "[[Rosie Beestinger.png]]"
```
^statblock

*Source: Acquisitions Incorporated p. 203*

## Description

> [!quote]-  
> 
> Well, I have this jar of eyeballs...

Weighing in at just under 30 pounds and with a grandmotherly demeanor befitting her advanced age, Rosie Beestinger is easily mistaken for someone on the wrong side of the "aggressor/victim" relationship. But this is a mix-up that few people make more than once. Patient and studious, Rosie has schooled more than one malcontent with what the halfling refers to as "the sauce"-a whirlwind of kicks and punches to one or the other haunches that can inspire even the toughest half-orc to sprint toward anyplace Rosie isn't. As an increasing number of folk hear the tales of her prowess, the "C" Team cartographer's fame among her fellow halflings has become nothing short of legendary. Still, this adoration might be augmented by the sheer number of halflings related to Rosie. She has a daunting number of natural and adopted children, many of whom have followed their mother along the adventuring career track.

Rosie's goals have always been more complex than merely seeking after adventure. She has long sought for ultimate meaning in the stars, and to seek justification for her belief that her bonds to her expansive family are reflected in the endless movements and intricate patterns of the sky. However, the Beestinger clan has a less metaphysical reputation in the eyes of many people, as constantly swirling rumors attempt to connect the family to various and nefarious halfling criminal enter prises. Naturally, Rosie knows nothing about any of that. Sure, her nickname is "Grandmother Night," but that probably doesn't mean anything.