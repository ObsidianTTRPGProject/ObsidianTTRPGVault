---
cssclass: json5e-monster
tags:
- compendium/src/rot
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Galvan"]
statblock: true
"name": "Galvan"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "110"
"hit_dice": "17d8 + 34"
"stats":
- !!int "11"
- !!int "18"
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "7"
"damage_resistances": "acid, cold, fire, lightning, poison"
"damage_immunities": "lightning"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Draconic, Infernal"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Galvan is not presented in an encounter in The Rise of Tiamat, the\
    \ [dragonsoul](/compendium/bestiary/humanoid/dragonsoul-rot.md) stat block has\
    \ been provided here for ease of use, with optional alterations for the [Blue\
    \ Dragon Mask](/compendium/items/blue-dragon-mask-rotos.md)."
  "name": "5etools Note"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galvan has the [Blue Dragon Mask](/compendium/items/blue-dragon-mask-rotos.md)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While wearing no armor and wearing the Blue Dragon Mask, Galvan adds his\
    \ Charisma bonus to her AC (included)."
  "name": "Draconic Majesty"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Galvan deals lightning damage to a creature while wearing the Blue Dragon\
    \ Mask, that creature can't take reactions until its next turn."
  "name": "Lingering Shock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Galvan fails a saving throw while wearing the Blue Dragon Mask, he can\
    \ choose to succeed instead."
  "name": "Legendary Resistance (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galvan has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened). While Galvan can see a dragon\
    \ or higher-ranking Cult of the Dragon cultist friendly to it, Galvan ignores\
    \ the effects of being [charmed](/rules/conditions.md#charmed) or [frightened](/rules/conditions.md#frightened)."
  "name": "Dragon Fanatic"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once per turn, if Galvan makes a weapon attack with advantage on the attack\
    \ roll and hits, the target takes an extra 10 (3d6) damage."
  "name": "Fanatic Advantage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galvan can use a bonus action to gain a flying speed of 30 feet until the\
    \ end of its turn."
  "name": "Limited Flight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galvan has advantage on an attack roll against a creature if at least one\
    \ of Galvan's allies is within 5 feet of the creature and the ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galvan attacks twice with its shortsword."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage plus 10 (3d6) damage of the type to which Galvan has resistance."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 90 ft., one target. Hit: 27 (6d8)\
    \ damage of the type to which Galvan has damage resistance."
  "name": "Orb of Dragon's Breath (3/Day)"
"source":
- "RoT"
name: Galvan
image: "[[Galvan.png]]"
---

# Galvan

```statblock
"name": "Galvan"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "110"
"hit_dice": "17d8 + 34"
"stats":
- !!int "11"
- !!int "18"
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "7"
"damage_resistances": "acid, cold, fire, lightning, poison"
"damage_immunities": "lightning"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Draconic, Infernal"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Galvan is not presented in an encounter in The Rise of Tiamat, the\
    \ [dragonsoul](/compendium/bestiary/humanoid/dragonsoul-rot.md) stat block has\
    \ been provided here for ease of use, with optional alterations for the [Blue\
    \ Dragon Mask](/compendium/items/blue-dragon-mask-rotos.md)."
  "name": "5etools Note"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galvan has the [Blue Dragon Mask](/compendium/items/blue-dragon-mask-rotos.md)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While wearing no armor and wearing the Blue Dragon Mask, Galvan adds his\
    \ Charisma bonus to her AC (included)."
  "name": "Draconic Majesty"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Galvan deals lightning damage to a creature while wearing the Blue Dragon\
    \ Mask, that creature can't take reactions until its next turn."
  "name": "Lingering Shock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Galvan fails a saving throw while wearing the Blue Dragon Mask, he can\
    \ choose to succeed instead."
  "name": "Legendary Resistance (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galvan has advantage on saving throws against being [charmed](/rules/conditions.md#charmed)\
    \ or [frightened](/rules/conditions.md#frightened). While Galvan can see a dragon\
    \ or higher-ranking Cult of the Dragon cultist friendly to it, Galvan ignores\
    \ the effects of being [charmed](/rules/conditions.md#charmed) or [frightened](/rules/conditions.md#frightened)."
  "name": "Dragon Fanatic"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once per turn, if Galvan makes a weapon attack with advantage on the attack\
    \ roll and hits, the target takes an extra 10 (3d6) damage."
  "name": "Fanatic Advantage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galvan can use a bonus action to gain a flying speed of 30 feet until the\
    \ end of its turn."
  "name": "Limited Flight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galvan has advantage on an attack roll against a creature if at least one\
    \ of Galvan's allies is within 5 feet of the creature and the ally isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Galvan attacks twice with its shortsword."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage plus 10 (3d6) damage of the type to which Galvan has resistance."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 90 ft., one target. Hit: 27 (6d8)\
    \ damage of the type to which Galvan has damage resistance."
  "name": "Orb of Dragon's Breath (3/Day)"
"source":
- "RoT"
"image": "[[Galvan.png]]"
```
^statblock

*Source: The Rise of Tiamat p. 9*