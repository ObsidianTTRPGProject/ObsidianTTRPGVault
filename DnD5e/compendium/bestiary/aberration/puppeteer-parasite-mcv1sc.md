---
cssclass: json5e-monster
tags:
- compendium/src/mcv1sc
- monster/size/tiny
- monster/type/aberration
aliases: ["Puppeteer Parasite"]
statblock: true
"name": "Puppeteer Parasite"
"size": "Tiny"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "71"
"hit_dice": "11d4 + 44"
"stats":
- !!int "2"
- !!int "15"
- !!int "18"
- !!int "16"
- !!int "10"
- !!int "3"
"speed": "walk 10 ft., fly 30 ft. (hover)"
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "2"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "4"
"damage_vulnerabilities": "radiant"
"damage_resistances": "fire, necrotic, poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": "telepathy 30 ft."
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The parasite doesn't require air or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 12 (3d6\
    \ + 2) necrotic damage, and the parasite attaches to the target. While attached,\
    \ the parasite can't make Cling attacks. The parasite can detach itself by spending\
    \ 5 feet of its movement. As an action, a creature within reach of the parasite\
    \ can try to detach it, doing so with a successful DC 14 Strength check."
  "name": "Cling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The parasite deals 12 (3d6 + 2) necrotic damage to one creature it is physically\
    \ attached to, provided that creature isn't a Construct or an Undead. The parasite\
    \ regains hit points equal to the damage taken."
  "name": "Consume Life"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The parasite casts the [suggestion](/compendium/spells/suggestion.md) spell,\
    \ requiring no spell components and using Intelligence as the spellcasting ability\
    \ (spell save DC 13)."
  "name": "Suggestion (Psionics; 1/Day)"
"source":
- "MCV1SC"
name: Puppeteer Parasite
image: "[[Puppeteer Parasite.png]]"
---

# Puppeteer Parasite

```statblock
"name": "Puppeteer Parasite"
"size": "Tiny"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "71"
"hit_dice": "11d4 + 44"
"stats":
- !!int "2"
- !!int "15"
- !!int "18"
- !!int "16"
- !!int "10"
- !!int "3"
"speed": "walk 10 ft., fly 30 ft. (hover)"
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "2"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "4"
"damage_vulnerabilities": "radiant"
"damage_resistances": "fire, necrotic, poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": "telepathy 30 ft."
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The parasite doesn't require air or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 12 (3d6\
    \ + 2) necrotic damage, and the parasite attaches to the target. While attached,\
    \ the parasite can't make Cling attacks. The parasite can detach itself by spending\
    \ 5 feet of its movement. As an action, a creature within reach of the parasite\
    \ can try to detach it, doing so with a successful DC 14 Strength check."
  "name": "Cling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The parasite deals 12 (3d6 + 2) necrotic damage to one creature it is physically\
    \ attached to, provided that creature isn't a Construct or an Undead. The parasite\
    \ regains hit points equal to the damage taken."
  "name": "Consume Life"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The parasite casts the [suggestion](/compendium/spells/suggestion.md) spell,\
    \ requiring no spell components and using Intelligence as the spellcasting ability\
    \ (spell save DC 13)."
  "name": "Suggestion (Psionics; 1/Day)"
"source":
- "MCV1SC"
"image": "[[Puppeteer Parasite.png]]"
```
^statblock

*Source: Monster Compendium Volume 1: Spelljammer Creatures p. 11*

## Description

A puppeteer parasite looks like a rubbery amoeba the size of a dinner plate. Its dorsal surface is soft and glossy, while its ventral surface is lined with bony hooks. The parasite uses its hooks to attach to a wall or ceiling until suitable prey passes nearby.

A parasite that comes in physical contact with a Humanoid uses its hooks to latch onto it. The parasite can then drain life energy from that creature or use it as transportation. The parasite can also impose its will on a nearby creature, forcing the creature to comply with its wishes. Puppeteer parasites like to use Humanoid thralls as bodyguards and transports.