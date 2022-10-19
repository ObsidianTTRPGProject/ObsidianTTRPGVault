---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/humanoid/any-race
- monster/environment/urban
aliases: ["Lahnis"]
statblock: true
"name": "Lahnis"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "9"
- !!int "14"
- !!int "12"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "7"
"skillsaves":
  "History": !!int "7"
  "Arcana": !!int "7"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lahnis is a 12th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 15, +7 to hit with spell attacks). Lahnis has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [light](/compendium/spells/light.md), [prestidigitation](/compendium/spells/prestidigitation.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md)\n\n1st level (4 1st-level\
    \ slots): [burning hands](/compendium/spells/burning-hands.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [magic missile](/compendium/spells/magic-missile.md)\n\n2nd level (3 2nd-level\
    \ slots): [mirror image](/compendium/spells/mirror-image.md), [misty step](/compendium/spells/misty-step.md),\
    \ [shatter](/compendium/spells/shatter.md)\n\n3rd level (3 3rd-level slots):\
    \ [counterspell](/compendium/spells/counterspell.md), [fireball](/compendium/spells/fireball.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md)\n\n4th level (3 4th-level\
    \ slots): [ice storm](/compendium/spells/ice-storm.md), [stoneskin](/compendium/spells/stoneskin.md)\n\
    \n5th level (2 5th-level slots): [Bigby's hand](/compendium/spells/bigbys-hand.md),\
    \ [cone of cold](/compendium/spells/cone-of-cold.md)\n\n6th level (1 6th-level\
    \ slots): [chain lightning](/compendium/spells/chain-lightning.md), [wall of\
    \ ice](/compendium/spells/wall-of-ice.md)\nEvocation spell"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Lahnis casts an evocation spell that forces other creatures it can\
    \ see to make a saving throw, it can choose a number of them equal to 1 + the\
    \ spell's level. These creatures automatically succeed on their saving throws\
    \ against the spell. If a successful save means a chosen creature would take half\
    \ damage from the spell, it instead takes no damage from it."
  "name": "Sculpt Spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two\
    \ hands."
  "name": "Quarterstaff"
"source":
- "TftYP"
name: Lahnis
image: "[[Lahnis.png]]"
---

# Lahnis

```statblock
"name": "Lahnis"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "9"
- !!int "14"
- !!int "12"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "7"
"skillsaves":
  "History": !!int "7"
  "Arcana": !!int "7"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Lahnis is a 12th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 15, +7 to hit with spell attacks). Lahnis has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [light](/compendium/spells/light.md), [prestidigitation](/compendium/spells/prestidigitation.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md)\n\n1st level (4 1st-level\
    \ slots): [burning hands](/compendium/spells/burning-hands.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [magic missile](/compendium/spells/magic-missile.md)\n\n2nd level (3 2nd-level\
    \ slots): [mirror image](/compendium/spells/mirror-image.md), [misty step](/compendium/spells/misty-step.md),\
    \ [shatter](/compendium/spells/shatter.md)\n\n3rd level (3 3rd-level slots):\
    \ [counterspell](/compendium/spells/counterspell.md), [fireball](/compendium/spells/fireball.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md)\n\n4th level (3 4th-level\
    \ slots): [ice storm](/compendium/spells/ice-storm.md), [stoneskin](/compendium/spells/stoneskin.md)\n\
    \n5th level (2 5th-level slots): [Bigby's hand](/compendium/spells/bigbys-hand.md),\
    \ [cone of cold](/compendium/spells/cone-of-cold.md)\n\n6th level (1 6th-level\
    \ slots): [chain lightning](/compendium/spells/chain-lightning.md), [wall of\
    \ ice](/compendium/spells/wall-of-ice.md)\nEvocation spell"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Lahnis casts an evocation spell that forces other creatures it can\
    \ see to make a saving throw, it can choose a number of them equal to 1 + the\
    \ spell's level. These creatures automatically succeed on their saving throws\
    \ against the spell. If a successful save means a chosen creature would take half\
    \ damage from the spell, it instead takes no damage from it."
  "name": "Sculpt Spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 2 (1d6\
    \ - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two\
    \ hands."
  "name": "Quarterstaff"
"source":
- "TftYP"
"image": "[[Lahnis.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 131*

## Environment

urban