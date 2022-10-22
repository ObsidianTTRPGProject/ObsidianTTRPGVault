---
cssclass: json5e-monster
tags:
- compendium/src/vrgr
- monster/size/medium
- monster/type/undead
aliases: ["Necrichor"]
statblock: true
"name": "Necrichor"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "8"
- !!int "15"
- !!int "17"
- !!int "17"
- !!int "13"
- !!int "10"
"speed": "walk 20 ft., climb 20 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
  "Constitution": !!int "6"
"skillsaves":
  "Arcana": !!int "9"
"damage_resistances": "acid, necrotic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, grappled,\
  \ paralyzed, poisoned, prone, restrained"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 11"
"languages": "any three languages, telepathy 120 ft."
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the necrichor fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Unless its lifeless remains are splashed with holy water or placed in a\
    \ vessel under the effects of the [hallow](/compendium/spells/hallow.md) spell,\
    \ the destroyed necrichor re-forms in 1d10 days, regaining all its hits points\
    \ and appearing in the place it died or in the nearest unoccupied space."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The necrichor can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The necrichor doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The necrichor makes two attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 5 (1d6\
    \ + 2) necrotic damage, and the target must succeed on a DC 14 Constitution saving\
    \ throw or be [paralyzed](/rules/conditions.md#paralyzed) until the start of the\
    \ necrichor's next turn."
  "name": "Pseudopod"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +6 to hit, range 120 ft., one creature. Hit: 12\
    \ (2d8 + 3) necrotic damage, and the target can't regain hit points until the\
    \ start of the necrichor's next turn."
  "name": "Necrotic Bolt"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The necrichor targets a creature it can see within 5 feet of it that is\
    \ missing any of its hit points. If the target isn't a Construct or an Undead,\
    \ it must succeed on a DC 14 Constitution saving throw or the necrichor enters\
    \ the target's space and attaches itself to the target for 1 minute. While attached,\
    \ the necrichor takes only half damage dealt to it (round down), and the target\
    \ takes the remaining damage. The necrichor can attach to only one creature at\
    \ a time.\n\nThe attached necrichor can telepathically control the target's move,\
    \ action, or both. When controlled this way, the target can take only the Attack\
    \ action (necrichor chooses the target) or the Dash action. The attached target\
    \ can repeat the saving throw at the end of each of its turns, detaching from\
    \ the necrichor and forcing it to move into the nearest unoccupied space on a\
    \ success."
  "name": "Blood Puppeteering (Recharge 6)"
"source":
- "VRGR"
name: Necrichor
image: "[[Necrichor.png]]"
---

# Necrichor

```statblock
"name": "Necrichor"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "8"
- !!int "15"
- !!int "17"
- !!int "17"
- !!int "13"
- !!int "10"
"speed": "walk 20 ft., climb 20 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
  "Constitution": !!int "6"
"skillsaves":
  "Arcana": !!int "9"
"damage_resistances": "acid, necrotic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, grappled,\
  \ paralyzed, poisoned, prone, restrained"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 11"
"languages": "any three languages, telepathy 120 ft."
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the necrichor fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Unless its lifeless remains are splashed with holy water or placed in a\
    \ vessel under the effects of the [hallow](/compendium/spells/hallow.md) spell,\
    \ the destroyed necrichor re-forms in 1d10 days, regaining all its hits points\
    \ and appearing in the place it died or in the nearest unoccupied space."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The necrichor can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The necrichor doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The necrichor makes two attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 5 (1d6\
    \ + 2) necrotic damage, and the target must succeed on a DC 14 Constitution saving\
    \ throw or be [paralyzed](/rules/conditions.md#paralyzed) until the start of the\
    \ necrichor's next turn."
  "name": "Pseudopod"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +6 to hit, range 120 ft., one creature. Hit: 12\
    \ (2d8 + 3) necrotic damage, and the target can't regain hit points until the\
    \ start of the necrichor's next turn."
  "name": "Necrotic Bolt"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The necrichor targets a creature it can see within 5 feet of it that is\
    \ missing any of its hit points. If the target isn't a Construct or an Undead,\
    \ it must succeed on a DC 14 Constitution saving throw or the necrichor enters\
    \ the target's space and attaches itself to the target for 1 minute. While attached,\
    \ the necrichor takes only half damage dealt to it (round down), and the target\
    \ takes the remaining damage. The necrichor can attach to only one creature at\
    \ a time.\n\nThe attached necrichor can telepathically control the target's move,\
    \ action, or both. When controlled this way, the target can take only the Attack\
    \ action (necrichor chooses the target) or the Dash action. The attached target\
    \ can repeat the saving throw at the end of each of its turns, detaching from\
    \ the necrichor and forcing it to move into the nearest unoccupied space on a\
    \ success."
  "name": "Blood Puppeteering (Recharge 6)"
"source":
- "VRGR"
"image": "[[Necrichor.png]]"
```
^statblock

*Source: Van Richten's Guide to Ravenloft p. 238*

## Description

A necrichor is a being of living blood, formed from the ichor of evil gods or the sludge in the crypts of failed liches. Despite the loss of a solid physical form, these foul creatures retain their terrible intellects and aspire to megalomaniacal goals—the first of which involves regaining a body. To do this, they seek servants to exact their will, coercing even the most stubborn potential minions by turning their own blood against them.

Necrichors prove exceptionally difficult to destroy, since they leave a trace of their essence within the veins of every creature they've controlled and can regenerate themselves from those creatures' blood. Unable to extinguish their horrific unlife, virtuous faiths and vigilant organizations (like the Order of the Guardians detailed in chapter 3) seal these viscous horrors in magically warded prisons. As ages pass, though, the knowledge of what these prisons contain and where some lie have been lost. And every imprisoned necrichor understands that its captivity might be lengthy, but time is of little consequence to the ageless.