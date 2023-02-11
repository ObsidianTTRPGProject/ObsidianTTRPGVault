---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/huge
- monster/type/dragon
- monster/environment/coastal
aliases: ["Umbraxakar"]
statblock: true
"name": "Umbraxakar"
"size": "Huge"
"type": "dragon"
"alignment": "Neutral Evil"
"ac": !!int "19"
"hp": !!int "212"
"hit_dice": "17d12 + 102"
"stats":
- !!int "25"
- !!int "10"
- !!int "23"
- !!int "16"
- !!int "15"
- !!int "19"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "5"
  "Wisdom": !!int "7"
  "Constitution": !!int "11"
"skillsaves":
  "Stealth": !!int "10"
  "Insight": !!int "7"
  "Perception": !!int "12"
"damage_resistances": "necrotic"
"damage_immunities": "lightning"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22"
"languages": "Common, Draconic"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can breathe air and water."
  "name": "Amphibious"
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
  "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10\
    \ + 7) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6\
    \ + 7) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8\
    \ + 7) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 17 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon uses one of the following breath weapons.\n\n- Necrotic Breath.\
    \ The dragon exhales necrotic in a 90-foot line that is 5 feet wide. Each creature\
    \ in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) necrotic\
    \ damage on a failed save, or half as much damage on a successful one.\n- Repulsion\
    \ Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature\
    \ in that area must succeed on a DC 19 Strength saving throw. On a failed save,\
    \ the creature is pushed 60 feet away from the dragon."
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
  "desc": "The dragon beats its wings. Each creature within 10 feet of the dragon\
    \ must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). The dragon can then\
    \ fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "WDMM"
name: Umbraxakar
image: "[[Umbraxakar.png]]"
---

# Umbraxakar

```statblock
"name": "Umbraxakar"
"size": "Huge"
"type": "dragon"
"alignment": "Neutral Evil"
"ac": !!int "19"
"hp": !!int "212"
"hit_dice": "17d12 + 102"
"stats":
- !!int "25"
- !!int "10"
- !!int "23"
- !!int "16"
- !!int "15"
- !!int "19"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "5"
  "Wisdom": !!int "7"
  "Constitution": !!int "11"
"skillsaves":
  "Stealth": !!int "10"
  "Insight": !!int "7"
  "Perception": !!int "12"
"damage_resistances": "necrotic"
"damage_immunities": "lightning"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22"
"languages": "Common, Draconic"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can breathe air and water."
  "name": "Amphibious"
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
  "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10\
    \ + 7) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6\
    \ + 7) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8\
    \ + 7) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 17 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon uses one of the following breath weapons.\n\n- Necrotic Breath.\
    \ The dragon exhales necrotic in a 90-foot line that is 5 feet wide. Each creature\
    \ in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) necrotic\
    \ damage on a failed save, or half as much damage on a successful one.\n- Repulsion\
    \ Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature\
    \ in that area must succeed on a DC 19 Strength saving throw. On a failed save,\
    \ the creature is pushed 60 feet away from the dragon."
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
  "desc": "The dragon beats its wings. Each creature within 10 feet of the dragon\
    \ must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). The dragon can then\
    \ fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "WDMM"
"image": "[[Umbraxakar.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 241*

## Environment

coastal