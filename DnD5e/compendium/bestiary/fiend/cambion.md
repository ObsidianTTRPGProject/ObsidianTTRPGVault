---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/fiend
- monster/environment/urban
aliases: ["Cambion"]
statblock: true
"name": "Cambion"
"size": "Medium"
"type": "fiend"
"alignment": "Any Evil Alignment"
"ac": !!int "19"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "18"
- !!int "18"
- !!int "16"
- !!int "14"
- !!int "12"
- !!int "16"
"speed": "walk 30 ft., fly 60 ft."
"saves":
  "Charisma": !!int "6"
  "Intelligence": !!int "5"
  "Strength": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "6"
  "Deception": !!int "6"
  "Stealth": !!int "7"
  "Perception": !!int "4"
"damage_resistances": "cold; fire; lightning; poison; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Abyssal, Common, Infernal"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cambion's spellcasting ability is Charisma (spell save DC 14). The\
    \ cambion can innately cast the following spells, requiring no material components:\n\
    \n1/day: [plane shift](/compendium/spells/plane-shift.md) (self only)\n\n\
    3/day each: [alter self](/compendium/spells/alter-self.md), [command](/compendium/spells/command.md),\
    \ [detect magic](/compendium/spells/detect-magic.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The AC of the cambion includes its Charisma bonus."
  "name": "Fiendish Blessing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cambion makes two melee attacks or uses its Fire Ray twice."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage\
    \ if used with two hands to make a melee attack, plus 3 (1d6) fire damage."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 10 (3d6)\
    \ fire damage."
  "name": "Fire Ray"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One humanoid the cambion can see within 30 feet of it must succeed on a\
    \ DC 14 Wisdom saving throw or be magically [charmed](/rules/conditions.md#charmed)\
    \ for 1 day. The [charmed](/rules/conditions.md#charmed) target obeys the cambion's\
    \ spoken commands. If the target suffers any harm from the cambion or another\
    \ creature or receives a suicidal command from the cambion, the target can repeat\
    \ the saving throw, ending the effect on itself on a success. If a target's saving\
    \ throw is successful, or if the effect ends for it, the creature is immune to\
    \ the cambion's Fiendish Charm for the next 24 hours."
  "name": "Fiendish Charm"
"source":
- "MM"
- "SKT"
- "BGDIA"
- "CM"
name: Cambion
image: "[[Cambion.png]]"
---

# Cambion

```statblock
"name": "Cambion"
"size": "Medium"
"type": "fiend"
"alignment": "Any Evil Alignment"
"ac": !!int "19"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "18"
- !!int "18"
- !!int "16"
- !!int "14"
- !!int "12"
- !!int "16"
"speed": "walk 30 ft., fly 60 ft."
"saves":
  "Charisma": !!int "6"
  "Intelligence": !!int "5"
  "Strength": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "6"
  "Deception": !!int "6"
  "Stealth": !!int "7"
  "Perception": !!int "4"
"damage_resistances": "cold; fire; lightning; poison; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Abyssal, Common, Infernal"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cambion's spellcasting ability is Charisma (spell save DC 14). The\
    \ cambion can innately cast the following spells, requiring no material components:\n\
    \n1/day: [plane shift](/compendium/spells/plane-shift.md) (self only)\n\n\
    3/day each: [alter self](/compendium/spells/alter-self.md), [command](/compendium/spells/command.md),\
    \ [detect magic](/compendium/spells/detect-magic.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The AC of the cambion includes its Charisma bonus."
  "name": "Fiendish Blessing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cambion makes two melee attacks or uses its Fire Ray twice."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage\
    \ if used with two hands to make a melee attack, plus 3 (1d6) fire damage."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 10 (3d6)\
    \ fire damage."
  "name": "Fire Ray"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One humanoid the cambion can see within 30 feet of it must succeed on a\
    \ DC 14 Wisdom saving throw or be magically [charmed](/rules/conditions.md#charmed)\
    \ for 1 day. The [charmed](/rules/conditions.md#charmed) target obeys the cambion's\
    \ spoken commands. If the target suffers any harm from the cambion or another\
    \ creature or receives a suicidal command from the cambion, the target can repeat\
    \ the saving throw, ending the effect on itself on a success. If a target's saving\
    \ throw is successful, or if the effect ends for it, the creature is immune to\
    \ the cambion's Fiendish Charm for the next 24 hours."
  "name": "Fiendish Charm"
"source":
- "MM"
- "SKT"
- "BGDIA"
- "CM"
"image": "[[Cambion.png]]"
```
^statblock

*Source: Monster Manual p. 36, Storm King's Thunder, Baldur's Gate: Descent Into Avernus, Candlekeep Mysteries*

## Description

A cambion is the offspring of a fiend (usually a succubus or incubus) and a humanoid (usually a human). Cambions inherit aspects of both parents, but their horns, leathery wings, and sinewy tails are hallmarks of their otherworldly parentage.

**Born to Be Bad.** Cambions grow into ruthless adults whose wickedness and perversion horrifies even the most devoted mortal parent. Even as a youth, a cambion identifies its rightful place as an overlord of mortals. It might orchestrate uprisings in towns and cities, gathering gangs of humanoids and lesser devils to serve it.

**Pawns of the Mighty.** A cambion forced to serve its fiendish parent does so out of admiration and dread, but also with the expectation that it will one day rise to a place of prominence. Cambions raised in the Nine Hells serve as soldiers, envoys, and personal attendants to greater devils. In the Abyss, a cambion carries only as much authority as it can muster through sheer strength and force of will.

**Spawn of Graz'zt.** The demon lord Graz'zt is fond of procreating with humanoids who have made pacts with fiends, and he has sired many cambions who help him sow chaos across the multiverse. These cambions are characterized by charcoal-black skin, cloven hooves, six-fingered hands, and unearthly beauty.

## Environment

urban