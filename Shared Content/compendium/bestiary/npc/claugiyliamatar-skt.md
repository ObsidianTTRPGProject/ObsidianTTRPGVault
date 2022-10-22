---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/gargantuan
- monster/type/dragon
- monster/environment/forest
aliases: ["Claugiyliamatar"]
statblock: true
"name": "Claugiyliamatar"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "21"
"hp": !!int "385"
"hit_dice": "22d20 + 154"
"stats":
- !!int "27"
- !!int "12"
- !!int "25"
- !!int "20"
- !!int "17"
- !!int "19"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "8"
  "Wisdom": !!int "10"
  "Constitution": !!int "14"
"skillsaves":
  "Deception": !!int "11"
  "Stealth": !!int "8"
  "Insight": !!int "10"
  "Perception": !!int "17"
  "Persuasion": !!int "11"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27"
"languages": "Common, Draconic"
"cr": "22"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Claugiyliamatar casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 19):\n\
    \nAt will: [detect magic](/compendium/spells/detect-magic.md), [druidcraft](/compendium/spells/druidcraft.md),\
    \ [speak with animals](/compendium/spells/speak-with-animals.md)\n\n1/day each:\
    \ [blight](/compendium/spells/blight.md), [legend lore](/compendium/spells/legend-lore.md)\
    \ (cast as 1 action), [locate creature](/compendium/spells/locate-creature.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md), [protection\
    \ from energy](/compendium/spells/protection-from-energy.md), [true seeing](/compendium/spells/true-seeing.md)\n\
    \n2/day each: [animal messenger](/compendium/spells/animal-messenger.md),\
    \ [cure wounds](/compendium/spells/cure-wounds.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [entangle](/compendium/spells/entangle.md), [invisibility](/compendium/spells/invisibility.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10\
    \ + 8) piercing damage plus 10 (3d6) poison damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 22 (4d6\
    \ + 8) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8\
    \ + 8) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 19 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that\
    \ area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Poison Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a Wisdom ([Perception](/rules/skills.md#Perception)) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon beats its wings. Each creature within 15 feet of the dragon\
    \ must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). The dragon can then\
    \ fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "SKT"
- "DC"
- "SLW"
- "SDW"
name: Claugiyliamatar
image: "[[Claugiyliamatar.png]]"
---

# Claugiyliamatar

```statblock
"name": "Claugiyliamatar"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "21"
"hp": !!int "385"
"hit_dice": "22d20 + 154"
"stats":
- !!int "27"
- !!int "12"
- !!int "25"
- !!int "20"
- !!int "17"
- !!int "19"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "8"
  "Wisdom": !!int "10"
  "Constitution": !!int "14"
"skillsaves":
  "Deception": !!int "11"
  "Stealth": !!int "8"
  "Insight": !!int "10"
  "Perception": !!int "17"
  "Persuasion": !!int "11"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27"
"languages": "Common, Draconic"
"cr": "22"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Claugiyliamatar casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 19):\n\
    \nAt will: [detect magic](/compendium/spells/detect-magic.md), [druidcraft](/compendium/spells/druidcraft.md),\
    \ [speak with animals](/compendium/spells/speak-with-animals.md)\n\n1/day each:\
    \ [blight](/compendium/spells/blight.md), [legend lore](/compendium/spells/legend-lore.md)\
    \ (cast as 1 action), [locate creature](/compendium/spells/locate-creature.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md), [protection\
    \ from energy](/compendium/spells/protection-from-energy.md), [true seeing](/compendium/spells/true-seeing.md)\n\
    \n2/day each: [animal messenger](/compendium/spells/animal-messenger.md),\
    \ [cure wounds](/compendium/spells/cure-wounds.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [entangle](/compendium/spells/entangle.md), [invisibility](/compendium/spells/invisibility.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10\
    \ + 8) piercing damage plus 10 (3d6) poison damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 22 (4d6\
    \ + 8) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8\
    \ + 8) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 19 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that\
    \ area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Poison Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a Wisdom ([Perception](/rules/skills.md#Perception)) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon beats its wings. Each creature within 15 feet of the dragon\
    \ must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). The dragon can then\
    \ fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "SKT"
- "DC"
- "SLW"
- "SDW"
"image": "[[Claugiyliamatar.png]]"
```
^statblock

*Source: Storm King's Thunder p. 96, Divine Contention, Storm Lord's Wrath, Sleeping Dragon's Wake*

## Environment

forest