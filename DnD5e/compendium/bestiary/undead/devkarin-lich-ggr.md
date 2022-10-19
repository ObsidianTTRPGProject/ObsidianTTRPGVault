---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/undead
aliases: ["Devkarin Lich"]
statblock: true
"name": "Devkarin Lich"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "97"
"hit_dice": "15d8 + 30"
"stats":
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "19"
- !!int "16"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "8"
  "Intelligence": !!int "9"
  "Constitution": !!int "7"
"skillsaves":
  "Insight": !!int "8"
  "Perception": !!int "8"
  "Arcana": !!int "14"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "truesight 120 ft., passive Perception 18"
"languages": "Common, Elvish, Kraul"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich is a 14th-level Golgari spellcaster. Its spellcasting ability\
    \ is Intelligence (spell save DC 17, +9 to hit with spell attacks). The lich has\
    \ the following wizard spells prepared:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [chill touch](/compendium/spells/chill-touch.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [poison spray](/compendium/spells/poison-spray.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1st level (4 1st-level slots): [chromatic orb](/compendium/spells/chromatic-orb.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [ray of sickness](/compendium/spells/ray-of-sickness.md)\n\
    \n2nd level (3 2nd-level slots): [Melf's acid arrow](/compendium/spells/melfs-acid-arrow.md),\
    \ [ray of enfeeblement](/compendium/spells/ray-of-enfeeblement.md), [spider climb](/compendium/spells/spider-climb.md),\
    \ [web](/compendium/spells/web.md)\n\n3rd level (3 3rd-level slots): [animate\
    \ dead](/compendium/spells/animate-dead.md), [bestow curse](/compendium/spells/bestow-curse.md),\
    \ [fear](/compendium/spells/fear.md), [vampiric touch](/compendium/spells/vampiric-touch.md)\n\
    \n4th level (3 4th-level slots): [blight](/compendium/spells/blight.md), [Evard's\
    \ black tentacles](/compendium/spells/evards-black-tentacles.md)\n\n5th level\
    \ (2 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md), [insect\
    \ plague](/compendium/spells/insect-plague.md)\n\n6th level (1 6th-level slots):\
    \ [circle of death](/compendium/spells/circle-of-death.md), [create undead](/compendium/spells/create-undead.md)\n\
    \n7th level (1 7th-level slots): [finger of death](/compendium/spells/finger-of-death.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the lich fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich regains 10 hit points at the start of its turn. If the lich takes\
    \ fire or radiant damage, this trait doesn't function at the start of the lich's\
    \ next turn. The lich dies only if it starts its turn with 0 hit points and doesn't\
    \ regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich has advantage on saving throws against any effect that turns undead."
  "name": "Turn Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the lich to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the lich drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +9 to hit, reach 5 ft., one creature. Hit: 14 (4d6)\
    \ poison damage, and the target must succeed on a DC 17 Constitution saving throw\
    \ or be [poisoned](/rules/conditions.md#poisoned) for 1 minute. The [poisoned](/rules/conditions.md#poisoned)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Noxious Touch"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich casts one of its cantrips."
  "name": "Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich uses Noxious Touch."
  "name": "Noxious Touch (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature within 30 feet of the lich must make a DC 17 Constitution\
    \ saving throw, taking 21 (6d6) necrotic damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Disrupt Life (Costs 3 Actions)"
"source":
- "GGR"
name: Devkarin Lich
image: "[[Devkarin Lich.png]]"
---

# Devkarin Lich

```statblock
"name": "Devkarin Lich"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "97"
"hit_dice": "15d8 + 30"
"stats":
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "19"
- !!int "16"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "8"
  "Intelligence": !!int "9"
  "Constitution": !!int "7"
"skillsaves":
  "Insight": !!int "8"
  "Perception": !!int "8"
  "Arcana": !!int "14"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "truesight 120 ft., passive Perception 18"
"languages": "Common, Elvish, Kraul"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich is a 14th-level Golgari spellcaster. Its spellcasting ability\
    \ is Intelligence (spell save DC 17, +9 to hit with spell attacks). The lich has\
    \ the following wizard spells prepared:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [chill touch](/compendium/spells/chill-touch.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [poison spray](/compendium/spells/poison-spray.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1st level (4 1st-level slots): [chromatic orb](/compendium/spells/chromatic-orb.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [ray of sickness](/compendium/spells/ray-of-sickness.md)\n\
    \n2nd level (3 2nd-level slots): [Melf's acid arrow](/compendium/spells/melfs-acid-arrow.md),\
    \ [ray of enfeeblement](/compendium/spells/ray-of-enfeeblement.md), [spider climb](/compendium/spells/spider-climb.md),\
    \ [web](/compendium/spells/web.md)\n\n3rd level (3 3rd-level slots): [animate\
    \ dead](/compendium/spells/animate-dead.md), [bestow curse](/compendium/spells/bestow-curse.md),\
    \ [fear](/compendium/spells/fear.md), [vampiric touch](/compendium/spells/vampiric-touch.md)\n\
    \n4th level (3 4th-level slots): [blight](/compendium/spells/blight.md), [Evard's\
    \ black tentacles](/compendium/spells/evards-black-tentacles.md)\n\n5th level\
    \ (2 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md), [insect\
    \ plague](/compendium/spells/insect-plague.md)\n\n6th level (1 6th-level slots):\
    \ [circle of death](/compendium/spells/circle-of-death.md), [create undead](/compendium/spells/create-undead.md)\n\
    \n7th level (1 7th-level slots): [finger of death](/compendium/spells/finger-of-death.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the lich fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich regains 10 hit points at the start of its turn. If the lich takes\
    \ fire or radiant damage, this trait doesn't function at the start of the lich's\
    \ next turn. The lich dies only if it starts its turn with 0 hit points and doesn't\
    \ regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich has advantage on saving throws against any effect that turns undead."
  "name": "Turn Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If damage reduces the lich to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the lich drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +9 to hit, reach 5 ft., one creature. Hit: 14 (4d6)\
    \ poison damage, and the target must succeed on a DC 17 Constitution saving throw\
    \ or be [poisoned](/rules/conditions.md#poisoned) for 1 minute. The [poisoned](/rules/conditions.md#poisoned)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Noxious Touch"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich casts one of its cantrips."
  "name": "Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The lich uses Noxious Touch."
  "name": "Noxious Touch (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature within 30 feet of the lich must make a DC 17 Constitution\
    \ saving throw, taking 21 (6d6) necrotic damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Disrupt Life (Costs 3 Actions)"
"source":
- "GGR"
"image": "[[Devkarin Lich.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 198*

## Description

Powerful spellcasters of the Devkarin elves, steeped in Golgari magic, can transcend death to become liches. For them, life and death don't merely chase each other in an inevitable cycle; the two can intersect, and at that nexus the liches find immense power, which commands the awe, envy, and fear of other Golgari.

Unlike the shambling zombies they command, liches retain their memories, their personalities, and especially their ambition. They also retain the grace and stature of living elves, but their bodies are in a constant state of slow decay. Various forms of fungus grow in and over the rotting flesh to hold the body together.

**Undead Nature.** The lich doesn't require air, food, drink, or sleep.