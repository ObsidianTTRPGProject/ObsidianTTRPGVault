---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/gargantuan
- monster/type/dragon
- monster/environment/mountain
- monster/environment/urban
aliases: ["Karkethzerethzerus, the Sable Despoiler"]
statblock: true
"name": "Karkethzerethzerus, the Sable Despoiler"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Lawful Good"
"ac": !!int "22"
"hp": !!int "487"
"hit_dice": "25d20 + 225"
"stats":
- !!int "30"
- !!int "10"
- !!int "29"
- !!int "18"
- !!int "15"
- !!int "23"
"speed": "walk 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "13"
  "Dexterity": !!int "7"
  "Wisdom": !!int "9"
  "Constitution": !!int "16"
"skillsaves":
  "Stealth": !!int "14"
  "Perception": !!int "16"
  "History": !!int "11"
  "Arcana": !!int "11"
"damage_resistances": "necrotic"
"damage_immunities": "cold"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 26"
"languages": "Common, Draconic"
"cr": "23"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, the dragon has resistance to damage that\
    \ isn't force, psychic, or radiant."
  "name": "Living Shadow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, the dragon can take the Hide action as\
    \ a bonus action."
  "name": "Shadow Stealth"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the dragon has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10\
    \ + 10) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6\
    \ + 10) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8\
    \ + 10) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 21 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon uses one of the following breath weapons.\n\n- Necrotic Breath.\
    \ The dragon exhales an icy blast in a 90-foot cone. Each creature in that area\
    \ must make a DC 24 Constitution saving throw, taking 67 (15d8) necrotic damage\
    \ on a failed save, or half as much damage on a successful one.\n- Paralyzing\
    \ Breath. The dragon exhales paralyzing gas in a 90-foot cone. Each creature\
    \ in that area must succeed on a DC 24 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Breath Weapons (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge\
    \ rating no higher than its own, or back into its true form. It reverts to its\
    \ true form if it dies. Any equipment it is wearing or carrying is absorbed or\
    \ borne by the new form (the dragon's choice).\n\nIn a new form, the dragon retains\
    \ its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary\
    \ Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as\
    \ well as this action. Its statistics and capabilities are otherwise replaced\
    \ by those of the new form, except any class features or legendary actions of\
    \ that form."
  "name": "Change Shape"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a Wisdom ([Perception](/rules/skills.md#Perception)) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon beats its wings. Each creature within 15 feet of the dragon\
    \ must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). The dragon can then\
    \ fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "EGW"
name: Karkethzerethzerus, the Sable Despoiler
image: "[[Karkethzerethzerus, the Sable Despoiler.png]]"
---

# Karkethzerethzerus, the Sable Despoiler

```statblock
"name": "Karkethzerethzerus, the Sable Despoiler"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Lawful Good"
"ac": !!int "22"
"hp": !!int "487"
"hit_dice": "25d20 + 225"
"stats":
- !!int "30"
- !!int "10"
- !!int "29"
- !!int "18"
- !!int "15"
- !!int "23"
"speed": "walk 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "13"
  "Dexterity": !!int "7"
  "Wisdom": !!int "9"
  "Constitution": !!int "16"
"skillsaves":
  "Stealth": !!int "14"
  "Perception": !!int "16"
  "History": !!int "11"
  "Arcana": !!int "11"
"damage_resistances": "necrotic"
"damage_immunities": "cold"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 26"
"languages": "Common, Draconic"
"cr": "23"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, the dragon has resistance to damage that\
    \ isn't force, psychic, or radiant."
  "name": "Living Shadow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in dim light or darkness, the dragon can take the Hide action as\
    \ a bonus action."
  "name": "Shadow Stealth"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the dragon has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10\
    \ + 10) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6\
    \ + 10) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8\
    \ + 10) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 21 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon uses one of the following breath weapons.\n\n- Necrotic Breath.\
    \ The dragon exhales an icy blast in a 90-foot cone. Each creature in that area\
    \ must make a DC 24 Constitution saving throw, taking 67 (15d8) necrotic damage\
    \ on a failed save, or half as much damage on a successful one.\n- Paralyzing\
    \ Breath. The dragon exhales paralyzing gas in a 90-foot cone. Each creature\
    \ in that area must succeed on a DC 24 Constitution saving throw or be [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Breath Weapons (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge\
    \ rating no higher than its own, or back into its true form. It reverts to its\
    \ true form if it dies. Any equipment it is wearing or carrying is absorbed or\
    \ borne by the new form (the dragon's choice).\n\nIn a new form, the dragon retains\
    \ its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary\
    \ Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as\
    \ well as this action. Its statistics and capabilities are otherwise replaced\
    \ by those of the new form, except any class features or legendary actions of\
    \ that form."
  "name": "Change Shape"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a Wisdom ([Perception](/rules/skills.md#Perception)) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon beats its wings. Each creature within 15 feet of the dragon\
    \ must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). The dragon can then\
    \ fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "EGW"
"image": "[[Karkethzerethzerus, the Sable Despoiler.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 158*

## Environment

mountain, urban