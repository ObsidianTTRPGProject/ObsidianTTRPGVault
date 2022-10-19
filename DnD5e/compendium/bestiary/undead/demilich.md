---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/tiny
- monster/type/undead
aliases: ["Demilich"]
statblock: true
"name": "Demilich"
"size": "Tiny"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "20"
"hp": !!int "80"
"hit_dice": "32d4"
"stats":
- !!int "1"
- !!int "20"
- !!int "10"
- !!int "20"
- !!int "17"
- !!int "20"
"speed": "walk 0 ft., fly 30 ft. (hover)"
"saves":
  "Charisma": !!int "11"
  "Wisdom": !!int "9"
  "Intelligence": !!int "11"
  "Constitution": !!int "6"
"damage_resistances": "bludgeoning, piercing, slashing from magic weapons"
"damage_immunities": "necrotic; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"condition_immunities": "charmed, deafened, exhaustion, frightened, paralyzed, petrified,\
  \ poisoned, prone, stunned"
"senses": "truesight 120 ft., passive Perception 13"
"languages": ""
"cr": "18"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the demilich is subjected to an effect that allows it to make a saving\
    \ throw to take only half damage, it instead takes no damage if it succeeds on\
    \ the saving throw, and only half damage if it fails."
  "name": "Avoidance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the demilich fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demilich is immune to effects that turn undead."
  "name": "Turn Immunity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demilich emits a bloodcurdling howl. Each creature within 30 feet of\
    \ the demilich that can hear the howl must succeed on a DC 15 Constitution saving\
    \ throw or drop to 0 hit points. On a successful save, the creature is [frightened](/rules/conditions.md#frightened)\
    \ until the end of its next turn."
  "name": "Howl (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demilich targets up to three creatures that it can see within 10 feet\
    \ of it. Each target must succeed on a DC 19 Constitution saving throw or take\
    \ 21 (6d6) necrotic damage, and the demilich regains hit points equal to the total\
    \ damage dealt to all targets."
  "name": "Life Drain"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demilich flies up to half its flying speed."
  "name": "Flight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demilich magically swirls its dusty remains. Each creature within 10\
    \ feet of the demilich, including around a corner, must succeed on a DC 15 Constitution\
    \ saving throw or be [blinded](/rules/conditions.md#blinded) until the end of\
    \ the demilich's next turn. A creature that succeeds on the saving throw is immune\
    \ to this effect until the end of the demilich's next turn."
  "name": "Cloud of Dust"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature with in 30 feet of the demilich must make a DC 15 Constitution\
    \ saving throw. On a failed save, the creature's hit point maximum is magically\
    \ reduced by 10 (3d6). If a creature's hit point maximum is reduced to 0 by this\
    \ effect, the creature dies. A creature's hit point maximum can be restored with\
    \ the  [greater restoration](/compendium/spells/greater-restoration.md) spell\
    \ or similar magic."
  "name": "Energy Drain (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demilich targets one creature it can see within 30 feet of it. The\
    \ target must succeed on a DC 15 Wisdom saving throw or be magically cursed. Until\
    \ the curse ends, the target has disadvantage on attack rolls and saving throws.\
    \ The target can repeat the saving throw at the end of each of its turns, ending\
    \ the curse on a success."
  "name": "Vile Curse (Costs 3 Actions)"
"source":
- "MM"
- "TftYP"
- "WDMM"
- "GoS"
- "EGW"
- "IDRotF"
- "JttRC"
name: Demilich
image: "[[Demilich.png]]"
---

# Demilich

```statblock
"name": "Demilich"
"size": "Tiny"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "20"
"hp": !!int "80"
"hit_dice": "32d4"
"stats":
- !!int "1"
- !!int "20"
- !!int "10"
- !!int "20"
- !!int "17"
- !!int "20"
"speed": "walk 0 ft., fly 30 ft. (hover)"
"saves":
  "Charisma": !!int "11"
  "Wisdom": !!int "9"
  "Intelligence": !!int "11"
  "Constitution": !!int "6"
"damage_resistances": "bludgeoning, piercing, slashing from magic weapons"
"damage_immunities": "necrotic; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"condition_immunities": "charmed, deafened, exhaustion, frightened, paralyzed, petrified,\
  \ poisoned, prone, stunned"
"senses": "truesight 120 ft., passive Perception 13"
"languages": ""
"cr": "18"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the demilich is subjected to an effect that allows it to make a saving\
    \ throw to take only half damage, it instead takes no damage if it succeeds on\
    \ the saving throw, and only half damage if it fails."
  "name": "Avoidance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the demilich fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demilich is immune to effects that turn undead."
  "name": "Turn Immunity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demilich emits a bloodcurdling howl. Each creature within 30 feet of\
    \ the demilich that can hear the howl must succeed on a DC 15 Constitution saving\
    \ throw or drop to 0 hit points. On a successful save, the creature is [frightened](/rules/conditions.md#frightened)\
    \ until the end of its next turn."
  "name": "Howl (Recharge 5-6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demilich targets up to three creatures that it can see within 10 feet\
    \ of it. Each target must succeed on a DC 19 Constitution saving throw or take\
    \ 21 (6d6) necrotic damage, and the demilich regains hit points equal to the total\
    \ damage dealt to all targets."
  "name": "Life Drain"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demilich flies up to half its flying speed."
  "name": "Flight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demilich magically swirls its dusty remains. Each creature within 10\
    \ feet of the demilich, including around a corner, must succeed on a DC 15 Constitution\
    \ saving throw or be [blinded](/rules/conditions.md#blinded) until the end of\
    \ the demilich's next turn. A creature that succeeds on the saving throw is immune\
    \ to this effect until the end of the demilich's next turn."
  "name": "Cloud of Dust"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature with in 30 feet of the demilich must make a DC 15 Constitution\
    \ saving throw. On a failed save, the creature's hit point maximum is magically\
    \ reduced by 10 (3d6). If a creature's hit point maximum is reduced to 0 by this\
    \ effect, the creature dies. A creature's hit point maximum can be restored with\
    \ the  [greater restoration](/compendium/spells/greater-restoration.md) spell\
    \ or similar magic."
  "name": "Energy Drain (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The demilich targets one creature it can see within 30 feet of it. The\
    \ target must succeed on a DC 15 Wisdom saving throw or be magically cursed. Until\
    \ the curse ends, the target has disadvantage on attack rolls and saving throws.\
    \ The target can repeat the saving throw at the end of each of its turns, ending\
    \ the curse on a success."
  "name": "Vile Curse (Costs 3 Actions)"
"source":
- "MM"
- "TftYP"
- "WDMM"
- "GoS"
- "EGW"
- "IDRotF"
- "JttRC"
"image": "[[Demilich.png]]"
```
^statblock

*Source: Monster Manual p. 48, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Journeys through the Radiant Citadel*

## Description

The immortality granted to a lich lasts only as long as it feeds mortal souls to its phylactery. If it falters or fails in that task, its bones turn to dust until only its skull remains. This "demilich" contains only a fragment of the lich's malevolent life force-just enough so that if it is disturbed, these remains rise into the air and assume a wraith-like form. The skull then emits a terrifying howl that can slay the weak-hearted and leave others trembling with fear. Left alone, it sinks back down and returns to the empty peace of its existence.

Few liches seek to become demiliches, for it means an end to the existence they hoped to preserve by becoming undead. However, time can erode the lich's reason and memory, causing it to retreat into its ancient tomb and forget to feed on souls. The spells it once knew fade from its mind, and it no longer channels the arcane energy it wielded as a lich. However, even as a mere skull it remains a deadly and vexing enemy.

**Enduring Existence.** Even after a lich is reduced to a demilich state, its phylactery survives. As long as its phylactery is intact, the demilich can't be permanently destroyed. Its skull reforms after 1d10 days, restoring the creature to its wretched state. If it has the presence of mind to do so, a demilich can reclaim its former power by feeding just one soul to its phylactery. Doing so restores the demilich to lich form, reconstituting its undead body.

**Undead Nature.** A demilich doesn't require air, food, drink, or sleep. So great is a demilich's will to survive that it always has the maximum number of hit points for its Hit Dice, instead of average hit points.

**A Demilich's Lair.** A demilich hides its earthly remains and treasures in a labyrinthine tomb guarded by monsters and traps. At the heart of this labyrinth rests the demilich's skull and the dust from its other bones. In its crypt, a demilich has access to lair actions and additional uses for its legendary actions. Its whole lair also has unique traits. A demilich in its lair has a challenge rating of 20 (24,500 XP).

**Acererak and His Disciples.** The transformation into a demilich isn't a bitter end for all liches that experience it. Made as a conscious choice, the path of the demilich becomes the next step in a dark evolution. The lich Acererak-a powerful wizard and demonologist and the infamous master of the Tomb of Horrors-anticipated his own transformation, preparing for it by setting enchanted gemstones into his skull's eye sockets and teeth. Each of these soul gems possessed the power to capture the souls on which his phylactery would feed.

Acererak abandoned his physical body, accepting that it would molder and dissolve to dust while he traveled the planes as a disembodied consciousness. If the skull that was his last physical remains was ever disturbed, its gems would claim the souls of the insolent intruders to his tomb, magically transferring them to his phylactery.

Liches who follow Acererak's path believe that by becoming free of their bodies, they can continue their quest for power beyond the mortal world. As their patron did, they secure their remains within well-guarded vaults, using soul gems to maintain their phylacteries and destroy the adventurers who disturb their lairs.

Acererak or another demilich like him has a challenge rating of 21 (33,000 XP), or 23 (50,000 XP) in its lair, and gains the following additional action option.

**Trap Soul.**  The demilich targets one creature that it can see within 30 feet of it. The target must make a DC 19 Charisma saving throw. On a failed save, the target's soul is magically trapped inside one of the demilich's gems. While the soul is trapped, the target's body and all the equipment it is carrying cease to exist. On a successful save, the target takes 24 (7d6) necrotic damage, and if this damage reduces the target to 0 hit points, its soul is trapped as if it failed the saving throw. A soul trapped in a gem for 24 hours is devoured and ceases to exist.

If the demilich drops to 0 hit points, it is destroyed and turns to powder, leaving behind its gems. Crushing a gem releases any soul trapped within, at which point the target's body re-forms in an unoccupied space nearest to the gem and in the same state as when it was trapped.