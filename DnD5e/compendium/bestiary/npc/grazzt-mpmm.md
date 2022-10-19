---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/large
- monster/type/fiend/demon
aliases: ["Graz'zt"]
statblock: true
"name": "Graz'zt"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "20"
"hp": !!int "346"
"hit_dice": "33d10 + 165"
"stats":
- !!int "22"
- !!int "15"
- !!int "21"
- !!int "23"
- !!int "21"
- !!int "26"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "12"
  "Constitution": !!int "12"
"skillsaves":
  "Deception": !!int "15"
  "Perception": !!int "12"
  "Persuasion": !!int "15"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 22"
"languages": "all, telepathy 120 ft."
"cr": "24"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Graz'zt casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 23):\n\nAt will:\
    \ [charm person](/compendium/spells/charm-person.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md)\n\n1/day each: [dominate\
    \ monster](/compendium/spells/dominate-monster.md), [greater invisibility](/compendium/spells/greater-invisibility.md)\n\
    \n3/day each: [darkness](/compendium/spells/darkness.md), [dominate person](/compendium/spells/dominate-person.md),\
    \ [telekinesis](/compendium/spells/telekinesis.md), [teleport](/compendium/spells/teleport.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Graz'zt fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Graz'zt has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Graz'zt makes two Wave of Sorrow attacks. He can replace one attack with\
    \ a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 20 (4d6\
    \ + 6) force damage plus 14 (4d6) acid damage."
  "name": "Wave of Sorrow (Greatsword)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Graz'zt teleports, along with any equipment he is wearing or carrying,\
    \ up to 120 feet to an unoccupied space he can see."
  "name": "Teleport"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Graz'zt transforms into a form that resembles a Medium Humanoid or back\
    \ into his true form. Aside from his size, his statistics are the same in each\
    \ form. Any equipment he is wearing or carrying isn't transformed."
  "name": "Change Shape"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Graz'zt tries to interrupt a spell he sees a creature casting within 60\
    \ feet of him. If the spell is 3rd level or lower, the spell fails and has no\
    \ effect. If the spell is 4th level or higher, Graz'zt makes a Charisma check\
    \ against a DC of 10 + the spell's level. On a success, the spell fails and has\
    \ no effect."
  "name": "Negate Spell (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Graz'zt uses Spellcasting or Teleport."
  "name": "Abyssal Magic"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Graz'zt makes one Wave of Sorrow attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature [charmed](/rules/conditions.md#charmed) by Graz'zt that Graz'zt\
    \ can see must use its reaction to move up to its speed as Graz'zt directs."
  "name": "Dance, My Puppet!"
"source":
- "MPMM"
- "MTF"
name: Graz'zt
image: "[[Graz'zt.png]]"
---

# Graz'zt

```statblock
"name": "Graz'zt"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "20"
"hp": !!int "346"
"hit_dice": "33d10 + 165"
"stats":
- !!int "22"
- !!int "15"
- !!int "21"
- !!int "23"
- !!int "21"
- !!int "26"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "12"
  "Constitution": !!int "12"
"skillsaves":
  "Deception": !!int "15"
  "Perception": !!int "12"
  "Persuasion": !!int "15"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 22"
"languages": "all, telepathy 120 ft."
"cr": "24"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Graz'zt casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 23):\n\nAt will:\
    \ [charm person](/compendium/spells/charm-person.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md)\n\n1/day each: [dominate\
    \ monster](/compendium/spells/dominate-monster.md), [greater invisibility](/compendium/spells/greater-invisibility.md)\n\
    \n3/day each: [darkness](/compendium/spells/darkness.md), [dominate person](/compendium/spells/dominate-person.md),\
    \ [telekinesis](/compendium/spells/telekinesis.md), [teleport](/compendium/spells/teleport.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Graz'zt fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Graz'zt has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Graz'zt makes two Wave of Sorrow attacks. He can replace one attack with\
    \ a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 20 (4d6\
    \ + 6) force damage plus 14 (4d6) acid damage."
  "name": "Wave of Sorrow (Greatsword)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Graz'zt teleports, along with any equipment he is wearing or carrying,\
    \ up to 120 feet to an unoccupied space he can see."
  "name": "Teleport"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Graz'zt transforms into a form that resembles a Medium Humanoid or back\
    \ into his true form. Aside from his size, his statistics are the same in each\
    \ form. Any equipment he is wearing or carrying isn't transformed."
  "name": "Change Shape"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Graz'zt tries to interrupt a spell he sees a creature casting within 60\
    \ feet of him. If the spell is 3rd level or lower, the spell fails and has no\
    \ effect. If the spell is 4th level or higher, Graz'zt makes a Charisma check\
    \ against a DC of 10 + the spell's level. On a success, the spell fails and has\
    \ no effect."
  "name": "Negate Spell (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Graz'zt uses Spellcasting or Teleport."
  "name": "Abyssal Magic"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Graz'zt makes one Wave of Sorrow attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature [charmed](/rules/conditions.md#charmed) by Graz'zt that Graz'zt\
    \ can see must use its reaction to move up to its speed as Graz'zt directs."
  "name": "Dance, My Puppet!"
"source":
- "MPMM"
- "MTF"
"image": "[[Graz'zt.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 148, Mordenkainen's Tome of Foes p. 149*

## Description

The appearance of this demon lord is a warning that not all that is beautiful is good. Every plane and curve of his nine-foot-tall body, every glance of his burning eyes, promises a mixture of pleasure and pain. Graz'zt can transform himself at will, appearing in any humanlike form that pleases him or his onlookers, all equally tempting in their own ways. In every form, though, a subtle wrongness pervades his beauty, from the cruel cast of his features to the six fingers on each hand and six toes on each foot.

Graz'zt surrounds himself with the finest of things and the most attractive of servants, and he adorns himself in silks and leathers both striking and disturbing in their workmanship. His lair and those of his cultists are pleasure palaces where nothing is forbidden save moderation and kindness.

Cults devoted to him are secret societies of indulgence, often using their debauchery to subjugate others through blackmail, addiction, and manipulation. They wear alabaster masks with ecstatic expressions and ostentatious dress and body ornamentation to their secret assignations.

Although he prefers charm and subtle manipulation, Graz'zt is capable of terrible violence when provoked. He wields the greatsword Angdrelve, also called Wave of Sorrow, whose wavy, razor-edged blade drips acid at his command.

**Cultists of Graz'zt.** > [!note]
> See the Cult of Graz'zt

**Graz'zt's Lair.** Graz'zt's principal lair is his Argent Palace, a grandiose structure in the city of Zelatar, found within his abyssal domain of Azzatar. Graz'zt's demonic influence radiates outward in a tangible ripple, warping reality around him. Given enough time in a single location, Graz'zt can twist it with his power.

Graz'zt's lair is a den of ostentation and hedonism. It is adorned with finery and decorations so decadent that even the wealthiest of mortals would blush at the excess. Within Graz'zt's lairs, devotees and subjects alike are forced to slake Graz'zt's thirst for pageantry.