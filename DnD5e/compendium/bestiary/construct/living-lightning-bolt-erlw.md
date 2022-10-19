---
cssclass: json5e-monster
tags:
- compendium/src/erlw
- monster/size/large
- monster/type/construct
aliases: ["Living Lightning Bolt"]
statblock: true
"name": "Living Lightning Bolt"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "57"
"hit_dice": "6d10 + 24"
"stats":
- !!int "10"
- !!int "15"
- !!int "18"
- !!int "3"
- !!int "10"
- !!int "6"
"speed": "walk 25 ft., fly 25 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "lightning"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, grappled,\
  \ poisoned, prone"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The living spell can move through a space as narrow as 1 inch wide without\
    \ squeezing."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The living spell has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The living spell makes two Magical Strike attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +7 to hit, reach 10 ft., one target. Hit: 21 (5d6\
    \ + 4) lightning damage."
  "name": "Magical Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The living spell unleashes a stroke of lightning in a line 100 feet long\
    \ and 5 feet wide. Each creature in the line must make a DC 15 Dexterity saving\
    \ throw, taking 28 (8d6) lightning damage on a failed save, or half as much damage\
    \ on a successful one."
  "name": "Spell Mimicry (Recharge 5-6)"
"source":
- "ERLW"
name: Living Lightning Bolt
image: "[[Living Lightning Bolt.png]]"
---

# Living Lightning Bolt

```statblock
"name": "Living Lightning Bolt"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "57"
"hit_dice": "6d10 + 24"
"stats":
- !!int "10"
- !!int "15"
- !!int "18"
- !!int "3"
- !!int "10"
- !!int "6"
"speed": "walk 25 ft., fly 25 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "lightning"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, grappled,\
  \ poisoned, prone"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The living spell can move through a space as narrow as 1 inch wide without\
    \ squeezing."
  "name": "Amorphous"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The living spell has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The living spell makes two Magical Strike attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +7 to hit, reach 10 ft., one target. Hit: 21 (5d6\
    \ + 4) lightning damage."
  "name": "Magical Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The living spell unleashes a stroke of lightning in a line 100 feet long\
    \ and 5 feet wide. Each creature in the line must make a DC 15 Dexterity saving\
    \ throw, taking 28 (8d6) lightning damage on a failed save, or half as much damage\
    \ on a successful one."
  "name": "Spell Mimicry (Recharge 5-6)"
"source":
- "ERLW"
"image": "[[Living Lightning Bolt.png]]"
```
^statblock

*Source: Eberron: Rising from the Last War p. 299*

## Description

**Constructed Nature.** A living spell doesn't require air, food, drink, or sleep.

Of all the anomalies that emerged from the magical cataclysm that created the Mournland, the appearance of living spells might be the most mysterious. In some unknown fashion, the magical energy unleashed during the Last War caused spell effects to take on sentience. A living spell appears much like a normal spell effect, except that its magical energy endures indefinitely.

Living spells haunt the Mournland and other areas blasted by the Last War, somehow subsisting on ambient magical energy as they writhe and across the landscape. Though they have no need for sustenance, they attack any creatures they come into contact with, lashing out indiscriminately with their corrupted magic.

**Customizing a Living Spell.** Living spells come in many varieties; the stat blocks here are three examples. Living spells most often manifest from evocation and conjuration spells. To make a living spell from a different spell, choose a damage-dealing evocation or conjuration spell from the wizard spell list of up to 5th level. Then consult the Living Spell Customization table to see which stat block to customize, based on the chosen spell's level.

**Living Spell Customization**

| Spell Level | Stat Block to Customize |
|-------------|-------------------------|
| 1–2 | Living burning hands |
| 3–4 | Living lightning bolt |
| 5 | Living cloudkill |
^living-spell-customization

Now make the following changes to that stat block:

**Damage Immunity**. Replace the living spell's damage immunity with immunity to the type (or types) of damage dealt by the chosen spell.

**Magical Strike**. Replace the damage that Magical Strike deals with one type of damage dealt by the chosen spell.

**Spell Mimicry**. Replace the effect of Spell Mimicry with the effect of the chosen spell. If that spell requires a saving throw, use spell save DC from the replaced spell, and if the spell involves an attack roll, use the attack bonus from the living spell's Magical Strike.

For example, if you turn [fireball](/compendium/spells/fireball.md) (a 3rd-level spell) into a living spell, customize the [living lightning bolt](/compendium/bestiary/construct/living-lightning-bolt-erlw.md). The living fireball has immunity to fire damage, instead of lightning damage; deals fire damage with its Magical Strike; and replicates [fireball](/compendium/spells/fireball.md) with Spell Mimicry.