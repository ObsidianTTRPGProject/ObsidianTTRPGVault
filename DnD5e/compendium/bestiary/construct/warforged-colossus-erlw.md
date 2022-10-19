---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/gargantuan
- monster/type/construct
aliases: ["Warforged Colossus"]
statblock: true
"name": "Warforged Colossus"
"size": "Gargantuan"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "23"
"hp": !!int "410"
"hit_dice": "20d20 + 200"
"stats":
- !!int "30"
- !!int "11"
- !!int "30"
- !!int "3"
- !!int "11"
- !!int "8"
"speed": "walk 60 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "8"
  "Intelligence": !!int "4"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, exhaustion, frightened, incapacitated, paralyzed,\
  \ petrified, poisoned, stunned"
"senses": "truesight 150 ft., passive Perception 10"
"languages": "understands Common but can't speak"
"cr": "25"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The colossus is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the colossus fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The colossus has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The colossus deals double damage to objects and structures."
  "name": "Siege Monster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any enemy outside the colossus that starts its turn within 30 feet of it\
    \ must succeed on a DC 26 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ until the start of the enemy's next turn. If the enemy's saving throw is successful,\
    \ it is immune to this colossus's Towering Terror for the next 24 hours."
  "name": "Towering Terror"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The colossus makes three attacks—one with its slam and two with its eldritch\
    \ turrets—and then uses Stomp."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +18 to hit, reach 20 ft., one target. Hit: 29 (3d12\
    \ + 10) bludgeoning damage, and the colossus can push the target up to 20 feet\
    \ away from it."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +18 to hit, range 300 ft., one target. Hit: 18 (4d8)\
    \ force damage, and if the target is a creature, it is knocked [prone](/rules/conditions.md#prone)."
  "name": "Eldritch Turret"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The colossus stomps one of its feet at a point on the ground within 20\
    \ feet of it. Any creature in a 20-foot-radius, 20-foot-high cylinder centered\
    \ on this point must succeed on a DC 26 Dexterity saving throw or take 33 (6d10)\
    \ bludgeoning damage and fall [prone](/rules/conditions.md#prone). Until the colossus\
    \ uses its Stomp again or moves, the creature is [restrained](/rules/conditions.md#restrained).\
    \ While [restrained](/rules/conditions.md#restrained) in this way, the creature\
    \ (or another creature within 5 feet of it) can use its action to make a DC 26\
    \ Strength check. On a success, the creature relocates to an unoccupied space\
    \ of its choice within 5 feet of the colossus and is no longer [restrained](/rules/conditions.md#restrained).\n\
    \nStructures, as well as nonmagical objects that are neither being worn nor carried,\
    \ take the same amount of damage if they are in the cylinder (no save)."
  "name": "Stomp"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The colossus fires a beam of light in a 150-foot line that is 10 feet wide.\
    \ Each creature in the line must make a DC 26 Dexterity saving throw, taking 60\
    \ (11d10) radiant damage on a failed save, or half as much damage on a successful\
    \ one. A creature reduced to 0 hit points by this beam is disintegrated, leaving\
    \ behind anything it was wearing or carrying."
  "name": "Incinerating Beam (Recharge 5-6)"
"source":
- "ERLW"
name: Warforged Colossus
image: "[[Warforged Colossus.png]]"
---

# Warforged Colossus

```statblock
"name": "Warforged Colossus"
"size": "Gargantuan"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "23"
"hp": !!int "410"
"hit_dice": "20d20 + 200"
"stats":
- !!int "30"
- !!int "11"
- !!int "30"
- !!int "3"
- !!int "11"
- !!int "8"
"speed": "walk 60 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "8"
  "Intelligence": !!int "4"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, exhaustion, frightened, incapacitated, paralyzed,\
  \ petrified, poisoned, stunned"
"senses": "truesight 150 ft., passive Perception 10"
"languages": "understands Common but can't speak"
"cr": "25"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The colossus is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the colossus fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The colossus has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The colossus deals double damage to objects and structures."
  "name": "Siege Monster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any enemy outside the colossus that starts its turn within 30 feet of it\
    \ must succeed on a DC 26 Wisdom saving throw or be [frightened](/rules/conditions.md#frightened)\
    \ until the start of the enemy's next turn. If the enemy's saving throw is successful,\
    \ it is immune to this colossus's Towering Terror for the next 24 hours."
  "name": "Towering Terror"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The colossus makes three attacks—one with its slam and two with its eldritch\
    \ turrets—and then uses Stomp."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +18 to hit, reach 20 ft., one target. Hit: 29 (3d12\
    \ + 10) bludgeoning damage, and the colossus can push the target up to 20 feet\
    \ away from it."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +18 to hit, range 300 ft., one target. Hit: 18 (4d8)\
    \ force damage, and if the target is a creature, it is knocked [prone](/rules/conditions.md#prone)."
  "name": "Eldritch Turret"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The colossus stomps one of its feet at a point on the ground within 20\
    \ feet of it. Any creature in a 20-foot-radius, 20-foot-high cylinder centered\
    \ on this point must succeed on a DC 26 Dexterity saving throw or take 33 (6d10)\
    \ bludgeoning damage and fall [prone](/rules/conditions.md#prone). Until the colossus\
    \ uses its Stomp again or moves, the creature is [restrained](/rules/conditions.md#restrained).\
    \ While [restrained](/rules/conditions.md#restrained) in this way, the creature\
    \ (or another creature within 5 feet of it) can use its action to make a DC 26\
    \ Strength check. On a success, the creature relocates to an unoccupied space\
    \ of its choice within 5 feet of the colossus and is no longer [restrained](/rules/conditions.md#restrained).\n\
    \nStructures, as well as nonmagical objects that are neither being worn nor carried,\
    \ take the same amount of damage if they are in the cylinder (no save)."
  "name": "Stomp"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The colossus fires a beam of light in a 150-foot line that is 10 feet wide.\
    \ Each creature in the line must make a DC 26 Dexterity saving throw, taking 60\
    \ (11d10) radiant damage on a failed save, or half as much damage on a successful\
    \ one. A creature reduced to 0 hit points by this beam is disintegrated, leaving\
    \ behind anything it was wearing or carrying."
  "name": "Incinerating Beam (Recharge 5-6)"
"source":
- "ERLW"
"image": "[[Warforged Colossus.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 314*

## Description

In the final days of the Last War, House Cannith unleashed its mightiest creations: the warforged colossi. These enormous mechanical warriors thundered across Cyre, crushing everything in their paths and leaving ruin behind them. Meant to end the war decisively, the colossi pulverized hundreds of soldiers beneath their feet and incinerated whole legions with beams of fiery light that shot from their mouths. This rampage was cut short on the Day of Mourning. The arcane cataclysm that engulfed Cyre destroyed most of the warforged colossi, causing them to collapse into lifeless heaps.

**Colossal Survivors.** Some warforged colossi survived the Day of Mourning more or less intact and are thought to only be in stasis, waiting to be awakened. Cannith artificers are eager to track them down and determine whether they can be awakened or, at the very least, salvaged for _docents_ and other magic items. Here are locations where operational warforged colossi are rumored to dwell:

- "Arkus" (Colossus WX-11) lies [prone](/rules/conditions.md#prone) at the bottom of the Glowing Chasm in the northern part of the Mournland, with one of its arms torn off.
- "Artorok" (Colossus WX-73) sits at the bottom of Lake Cyre amid the scaffolding of a sunken House Cannith workshop, flooded but otherwise intact.
- "Hanamar" (Colossus WX-42) stands at the bottom of Kraken Bay, near the coast of Valenar, buried up to its knees in sand and flooded, but it is otherwise intact.
- "Karrnslayer" (Colossus WX-31) lost its legs but crawls through the Mournland, using its arms to drag its great bulk across the ground. It is always [prone](/rules/conditions.md#prone) and can't use its Stomp action, but makes three extra turret attacks when it takes the Multiattack action option.
- "Landro" (Colossus WX-33) is partially phased into a mountainside on the border of Cyre and Breland, but still explorable and potentially salvageable.
- "Norr" (Colossus WX-5) is slumped amid the ruins of Metrol, the former capital of Cyre.
- "Tymber" (Colossus WX-12) squats in the Crawling Swamp, in the northwest corner of the Shadow Marches. How it got there, no one knows.

**Hollow Structure.** Although it can operate without a crew, a warforged colossus is built to carry wizards, artificers, magewrights, and elite troops. For this reason, these constructs are largely hollow on the inside, with tunnels, ladders, storage areas, and observation decks.

A colossus might be filled with monsters and secrets, in addition to the corpses of those who died inside it. In chapter 4, map 4.8 illustrates an inactive warforged colossus, and the text that accompanies it explains how the colossus might serve as an adventure location.