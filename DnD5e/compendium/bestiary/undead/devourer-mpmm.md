---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/large
- monster/type/undead
- monster/environment/underdark
aliases: ["Devourer"]
statblock: true
"name": "Devourer"
"size": "Large"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "189"
"hit_dice": "18d10 + 90"
"stats":
- !!int "20"
- !!int "12"
- !!int "20"
- !!int "13"
- !!int "10"
- !!int "16"
"speed": "walk 30 ft."
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Abyssal, telepathy 120 ft."
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A devourer doesn't require air, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The devourer makes two Claw attacks and can use either Imprison Soul or\
    \ Soul Rend, if available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage plus 21 (6d6) necrotic damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The devourer chooses a living Humanoid with 0 hit points that it can see\
    \ within 30 feet of it. That creature is teleported inside the devourer's ribcage\
    \ and imprisoned there. While imprisoned in this way, the creature is [restrained](/rules/conditions.md#restrained)\
    \ and has disadvantage on death saving throws. If the creature dies while imprisoned,\
    \ the devourer regains 25 hit points and immediately recharges Soul Rend. Additionally,\
    \ at the start of its next turn, the devourer regurgitates the slain creature\
    \ as a bonus action, and the creature becomes an undead. If the victim had 2 or\
    \ fewer Hit Dice, it becomes a [zombie](/compendium/bestiary/undead/zombie.md).\
    \ If it had 3 to 5 Hit Dice, it becomes a [ghoul](/compendium/bestiary/undead/ghoul.md).\
    \ Otherwise, it becomes a [wight](/compendium/bestiary/undead/wight.md). A devourer\
    \ can imprison only one creature at a time."
  "name": "Imprison Soul"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The devourer creates a vortex of life-draining energy in a 20-foot radius\
    \ centered on itself. Each creature in that area must make a DC 18 Constitution\
    \ saving throw, taking 44 (8d10) necrotic damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Soul Rend (Recharge 6)"
"source":
- "MPMM"
- "VGM"
name: Devourer
image: "[[Devourer.png]]"
---

# Devourer

```statblock
"name": "Devourer"
"size": "Large"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "189"
"hit_dice": "18d10 + 90"
"stats":
- !!int "20"
- !!int "12"
- !!int "20"
- !!int "13"
- !!int "10"
- !!int "16"
"speed": "walk 30 ft."
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Abyssal, telepathy 120 ft."
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A devourer doesn't require air, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The devourer makes two Claw attacks and can use either Imprison Soul or\
    \ Soul Rend, if available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage plus 21 (6d6) necrotic damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The devourer chooses a living Humanoid with 0 hit points that it can see\
    \ within 30 feet of it. That creature is teleported inside the devourer's ribcage\
    \ and imprisoned there. While imprisoned in this way, the creature is [restrained](/rules/conditions.md#restrained)\
    \ and has disadvantage on death saving throws. If the creature dies while imprisoned,\
    \ the devourer regains 25 hit points and immediately recharges Soul Rend. Additionally,\
    \ at the start of its next turn, the devourer regurgitates the slain creature\
    \ as a bonus action, and the creature becomes an undead. If the victim had 2 or\
    \ fewer Hit Dice, it becomes a [zombie](/compendium/bestiary/undead/zombie.md).\
    \ If it had 3 to 5 Hit Dice, it becomes a [ghoul](/compendium/bestiary/undead/ghoul.md).\
    \ Otherwise, it becomes a [wight](/compendium/bestiary/undead/wight.md). A devourer\
    \ can imprison only one creature at a time."
  "name": "Imprison Soul"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The devourer creates a vortex of life-draining energy in a 20-foot radius\
    \ centered on itself. Each creature in that area must make a DC 18 Constitution\
    \ saving throw, taking 44 (8d10) necrotic damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Soul Rend (Recharge 6)"
"source":
- "MPMM"
- "VGM"
"image": "[[Devourer.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 93, Volo's Guide to Monsters p. 138*

## Description

Of all the abominations unleashed by [Orcus](/compendium/bestiary/npc/orcus-mpmm.md), devourers are among the most feared. These tall, mummy-like Undead wander the planes, consuming souls and spreading Orcus's creed of replacing all life with everlasting death.

A lesser demon that proves itself to Orcus might be granted the privilege of becoming a devourer. The Prince of Undeath transforms such a demon into an 8-foot-tall, desiccated biped with a hollowed-out ribcage, then fills the new creature with a hunger for souls. Orcus grants each new devourer the essence of a less fortunate demon to power the devourer's first foray into the planes. Most devourers remain in the Abyss or on the Astral or Ethereal Plane, pursuing Orcus's schemes and interests in those realms. When Orcus sends devourers to the Material Plane, he often sets them on a mission to create, control, and lead a plague of Undead. [Skeletons](/compendium/bestiary/undead/skeleton.md), [zombies](/compendium/bestiary/undead/zombie.md), [ghouls](/compendium/bestiary/undead/ghoul.md), [ghasts](/compendium/bestiary/undead/ghast.md), and [shadows](/compendium/bestiary/undead/shadow.md) are particularly attracted to the presence of a devourer.

Devourers hunt Humanoids with the intent of consuming them body and soul. After a devourer brings a target to the brink of death, it pulls the victim's body in and traps the creature within its own ribcage. As the victim tries to stave off death (usually without success), the devourer tortures its soul with telepathic noise. When the victim expires, it undergoes a horrible transformation, springing forth from the devourer's body to begin its new existence as an Undead servitor of the monster that spawned it.

## Environment

underdark