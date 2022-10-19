---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/huge
- monster/type/undead
- monster/environment/desert
aliases: ["Adult Blue Dracolich"]
statblock: true
"name": "Adult Blue Dracolich"
"size": "Huge"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "225"
"hit_dice": "18d12 + 108"
"stats":
- !!int "25"
- !!int "10"
- !!int "23"
- !!int "16"
- !!int "15"
- !!int "19"
"speed": "walk 40 ft., burrow 30 ft., fly 80 ft."
"saves":
  "Charisma": !!int "10"
  "Dexterity": !!int "6"
  "Wisdom": !!int "8"
  "Constitution": !!int "12"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "14"
"damage_resistances": "necrotic"
"damage_immunities": "lightning, poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 24"
"languages": "Common, Draconic"
"cr": "17"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dracolich fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dracolich has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dracolich can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 18 (2d10\
    \ + 7) piercing damage plus 5 (1d10) lightning damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 14 (2d6\
    \ + 7) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 16 (2d8\
    \ + 7) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the dracolich's choice that is within 120 feet of the\
    \ dracolich and aware of it must succeed on a DC 18 Wisdom saving throw or become\
    \ [frightened](/rules/conditions.md#frightened) for 1 minute. A creature can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success. If a creature's saving throw is successful or the effect ends\
    \ for it, the creature is immune to the dracolich's Frightful Presence for the\
    \ next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dracolich exhales lightning in a 90-foot line that is 5 feet wide.\
    \ Each creature in that line must make a DC 20 Dexterity saving throw, taking\
    \ 66 (12d10) lightning damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Lightning Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dracolich makes a Wisdom ([Perception](/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dracolich makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dracolich beats its tattered wings. Each creature within 10 feet of\
    \ the dracolich must succeed on a DC 21 Dexterity saving throw or take 14 (2d6\
    \ + 7) bludgeoning damage and be knocked [prone](/rules/conditions.md#prone).\
    \ After beating its wings this way, the dracolich can fly up to half its flying\
    \ speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "MM"
- "WDMM"
- "CM"
- "JttRC"
name: Adult Blue Dracolich
image: "[[Adult Blue Dracolich.png]]"
---

# Adult Blue Dracolich

```statblock
"name": "Adult Blue Dracolich"
"size": "Huge"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "225"
"hit_dice": "18d12 + 108"
"stats":
- !!int "25"
- !!int "10"
- !!int "23"
- !!int "16"
- !!int "15"
- !!int "19"
"speed": "walk 40 ft., burrow 30 ft., fly 80 ft."
"saves":
  "Charisma": !!int "10"
  "Dexterity": !!int "6"
  "Wisdom": !!int "8"
  "Constitution": !!int "12"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "14"
"damage_resistances": "necrotic"
"damage_immunities": "lightning, poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 24"
"languages": "Common, Draconic"
"cr": "17"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dracolich fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dracolich has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dracolich can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 18 (2d10\
    \ + 7) piercing damage plus 5 (1d10) lightning damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 14 (2d6\
    \ + 7) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 16 (2d8\
    \ + 7) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the dracolich's choice that is within 120 feet of the\
    \ dracolich and aware of it must succeed on a DC 18 Wisdom saving throw or become\
    \ [frightened](/rules/conditions.md#frightened) for 1 minute. A creature can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success. If a creature's saving throw is successful or the effect ends\
    \ for it, the creature is immune to the dracolich's Frightful Presence for the\
    \ next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dracolich exhales lightning in a 90-foot line that is 5 feet wide.\
    \ Each creature in that line must make a DC 20 Dexterity saving throw, taking\
    \ 66 (12d10) lightning damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Lightning Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dracolich makes a Wisdom ([Perception](/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dracolich makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dracolich beats its tattered wings. Each creature within 10 feet of\
    \ the dracolich must succeed on a DC 21 Dexterity saving throw or take 14 (2d6\
    \ + 7) bludgeoning damage and be knocked [prone](/rules/conditions.md#prone).\
    \ After beating its wings this way, the dracolich can fly up to half its flying\
    \ speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "MM"
- "WDMM"
- "CM"
- "JttRC"
"image": "[[Adult Blue Dracolich.png]]"
```
^statblock

*Source: Monster Manual p. 84, Waterdeep: Dungeon of the Mad Mage, Candlekeep Mysteries, Journeys through the Radiant Citadel*

## Description

Even as long-lived as they are, all dragons must eventually die. This thought doesn't sit well with many dragons, some of which allow themselves to be transformed by necromantic energy and ancient rituals into powerful undead dracoliches. Only the most narcissistic dragons choose this path, knowing that by doing so, they sever all ties to their kin and the dragon gods.

**Beyond Death.** A dracolich retains its shape and size upon transforming, its skin and scales drawing tight to its bones or sloughing away to leave a skeletal form behind. Its eyes appear as glowing points of light floating in shadowy sockets, hinting at the malevolence of its undead mind.

Though many dragons pursue vain goals of destruction and dominance, dracoliches are more nefarious than the most evil dragons, driven to rule over all. A dracolich is a fiendishly intelligent tyrant that crafts complex webs of foul schemes, attracting servants motivated by greed and a lust for power. Acting from the shadows and actively plotting to keep its existence a secret, a dracolich is a cunning and challenging foe.

**Dracolich Phylacteries.** Creating a dracolich requires the cooperation of the dragon and a group of mages or cultists that can perform the proper ritual. During the ritual, the dragon consumes a toxic brew that slays it instantly. The attendant spellcasters then ensnare its spirit and transfer it to a special gemstone that functions like a lich's phylactery. As the dragon's flesh rots away, the spirit inside the gem returns to animate the dragon's bones.

If a dracolich's physical form is ever destroyed, its spirit returns to the gem as long as the two are on the same plane. If the gem comes into contact with another dragon's corpse, the dracolich's spirit can take possession of that corpse to become a new dracolich. If the dracolich's spirit gem is taken to another plane, the dracolich's spirit has nowhere to go when its undead body is destroyed and simply passes into the afterlife.

**Dracolich Template.** Only an ancient or adult true dragon can be transformed into a dracolich. Younger dragons that attempt to undergo the transformation die, as do other creatures that aren't true dragons but possess the dragon type, such as pseudodragons and wyverns. A shadow dragon can't be transformed into a dracolich, for it has already lost too much of its physical form.

When a dragon becomes a dracolich, it retains its statistics except as described below. The dragon loses any trait, such as Amphibious, that assumes a living physiology. The dracolich might retain or lose any or all of its lair actions or inherit new ones, as the DM sees fit.

**Type.**  The dracolich's type changes from dragon to undead, and it no longer requires air, food, drink, or sleep.

**Damage Resistance.**  The dracolich has resistance to necrotic damage.

**Damage Immunities.**  The dracolich has immunity to poison. It also retains any immunities it had prior to becoming a dracolich.

**Condition Immunities.**  The dracolich can't be [charmed](/rules/conditions.md#charmed), [frightened](/rules/conditions.md#frightened), [paralyzed](/rules/conditions.md#paralyzed), or [poisoned](/rules/conditions.md#poisoned). It also doesn't suffer from [exhaustion](/rules/conditions.md#exhaustion).

**Magic Resistance.**  The dracolich has advantage on saving throws against spells and other magical effects.

## Environment

desert