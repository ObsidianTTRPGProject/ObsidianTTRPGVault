---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/celestial
aliases: ["Archon of the Triumvirate"]
statblock: true
"name": "Archon of the Triumvirate"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"stats":
- !!int "20"
- !!int "15"
- !!int "19"
- !!int "15"
- !!int "21"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "10"
  "Constitution": !!int "9"
"skillsaves":
  "Insight": !!int "10"
  "Perception": !!int "10"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "darkvision 120 ft., passive Perception 20"
"languages": "all"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon's innate spellcasting ability is Wisdom (spell save DC 18, +10\
    \ to hit with spell attacks). The archon can innately cast the following spells,\
    \ requiring no material components:\n\nAt will: [calm emotions](/compendium/spells/calm-emotions.md),\
    \ [command](/compendium/spells/command.md), [compelled duel](/compendium/spells/compelled-duel.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the archon can target a creature it can see within 120\
    \ feet of it and determine which laws that creature has broken in the last 24\
    \ hours."
  "name": "Eye of the Law"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the archon isn't mounted, it can use a bonus action to magically teleport\
    \ onto the creature serving as its mount, provided the archon and its mount are\
    \ on the same plane of existence. When it teleports, the archon appears astride\
    \ the mount along with any equipment it is wearing or carrying. While mounted\
    \ and not [incapacitated](/rules/conditions.md#incapacitated), the archon can't\
    \ be surprised, and both it and its mount gain advantage on Dexterity saving throws.\
    \ If the archon is reduced to 0 hit points while riding its mount, the mount is\
    \ reduced to 0 hit points as well."
  "name": "Mount"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon makes two Hammer of Justice attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) bludgeoning damage plus 18 (4d8) force damage. If the target is a creature,\
    \ it must succeed on a DC 18 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Hammer of Justice"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the archon's choice that the archon can see within 120\
    \ feet of it must succeed on a DC 18 Wisdom saving throw, or else the target drops\
    \ any weapons it is holding, ends its concentration on any spells or other effects,\
    \ and becomes [charmed](/rules/conditions.md#charmed) by the archon for 1 minute.\
    \ The [charmed](/rules/conditions.md#charmed) creature can repeat the saving throw\
    \ at the end of each of its turns, ending the effect on itself on a success. If\
    \ a creature's saving throw is successful or the effect ends for it, the creature\
    \ is immune to the archon's Pacifying Presence for the next 24 hours."
  "name": "Pacifying Presence"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the archon isn't mounted, it magically teleports to its steed and mounts\
    \ it as long as the archon and its steed are on the same plane of existence."
  "name": "Rejoin Mount"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon makes a Hammer of Justice attack, and then its mount can use\
    \ its reaction to make a melee weapon attack."
  "name": "Smite (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon targets a creature it can see within 60 feet of it. The target\
    \ must succeed on a DC 18 Charisma saving throw or be magically teleported to\
    \ a harmless demiplane until the end of the archon's next turn, whereupon the\
    \ target reappears in the space it left or the nearest unoccupied space if that\
    \ space is occupied."
  "name": "Detention (Costs 3 Actions)"
"source":
- "GGR"
name: Archon of the Triumvirate
image: "[[Archon of the Triumvirate.png]]"
---

# Archon of the Triumvirate

```statblock
"name": "Archon of the Triumvirate"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"stats":
- !!int "20"
- !!int "15"
- !!int "19"
- !!int "15"
- !!int "21"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "10"
  "Constitution": !!int "9"
"skillsaves":
  "Insight": !!int "10"
  "Perception": !!int "10"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "darkvision 120 ft., passive Perception 20"
"languages": "all"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon's innate spellcasting ability is Wisdom (spell save DC 18, +10\
    \ to hit with spell attacks). The archon can innately cast the following spells,\
    \ requiring no material components:\n\nAt will: [calm emotions](/compendium/spells/calm-emotions.md),\
    \ [command](/compendium/spells/command.md), [compelled duel](/compendium/spells/compelled-duel.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the archon can target a creature it can see within 120\
    \ feet of it and determine which laws that creature has broken in the last 24\
    \ hours."
  "name": "Eye of the Law"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the archon isn't mounted, it can use a bonus action to magically teleport\
    \ onto the creature serving as its mount, provided the archon and its mount are\
    \ on the same plane of existence. When it teleports, the archon appears astride\
    \ the mount along with any equipment it is wearing or carrying. While mounted\
    \ and not [incapacitated](/rules/conditions.md#incapacitated), the archon can't\
    \ be surprised, and both it and its mount gain advantage on Dexterity saving throws.\
    \ If the archon is reduced to 0 hit points while riding its mount, the mount is\
    \ reduced to 0 hit points as well."
  "name": "Mount"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon makes two Hammer of Justice attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) bludgeoning damage plus 18 (4d8) force damage. If the target is a creature,\
    \ it must succeed on a DC 18 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Hammer of Justice"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the archon's choice that the archon can see within 120\
    \ feet of it must succeed on a DC 18 Wisdom saving throw, or else the target drops\
    \ any weapons it is holding, ends its concentration on any spells or other effects,\
    \ and becomes [charmed](/rules/conditions.md#charmed) by the archon for 1 minute.\
    \ The [charmed](/rules/conditions.md#charmed) creature can repeat the saving throw\
    \ at the end of each of its turns, ending the effect on itself on a success. If\
    \ a creature's saving throw is successful or the effect ends for it, the creature\
    \ is immune to the archon's Pacifying Presence for the next 24 hours."
  "name": "Pacifying Presence"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the archon isn't mounted, it magically teleports to its steed and mounts\
    \ it as long as the archon and its steed are on the same plane of existence."
  "name": "Rejoin Mount"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon makes a Hammer of Justice attack, and then its mount can use\
    \ its reaction to make a melee weapon attack."
  "name": "Smite (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The archon targets a creature it can see within 60 feet of it. The target\
    \ must succeed on a DC 18 Charisma saving throw or be magically teleported to\
    \ a harmless demiplane until the end of the archon's next turn, whereupon the\
    \ target reappears in the space it left or the nearest unoccupied space if that\
    \ space is occupied."
  "name": "Detention (Costs 3 Actions)"
"source":
- "GGR"
"image": "[[Archon of the Triumvirate.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 192*

## Description

Archons are enigmatic, supernatural embodiments of the harshest aspects of law and order. They espouse a rigid sense of justice and deal ruthless punishment to those who break the law. This nature often aligns them with the Azorius Senate, and they are commonly seen circling above the Azorius guildhall astride their winged felidar mounts, soaring alongside griffon-mounted hussars.

An archon appears as an armored humanoid figure, nearly always mounted. Its face is usually shadowed beneath a large hood; those who have seen beneath the hood describe a face of celestial beauty with a stern expression and blank white eyes.

**Eternal Riders.** The bond between an archon and its winged felidar mount is so close that the two are sometimes considered a single being, acting with a single mind. If an archon is ever thrown from its saddle, it can magically return to its place astride its mount in an instant.

**Immortal Nature.** An archon doesn't require food, drink, or sleep.