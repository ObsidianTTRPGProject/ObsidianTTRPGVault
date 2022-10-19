---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/aberration
- monster/environment/mountain
- monster/environment/swamp
- monster/environment/urban
aliases: ["Star Spawn Seer"]
statblock: true
"name": "Star Spawn Seer"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "153"
"hit_dice": "18d8 + 72"
"stats":
- !!int "14"
- !!int "12"
- !!int "18"
- !!int "22"
- !!int "19"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "6"
  "Wisdom": !!int "9"
  "Intelligence": !!int "11"
"skillsaves":
  "Perception": !!int "9"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "psychic"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 60 ft., passive Perception 19"
"languages": "Common, Deep Speech, Undercommon"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The seer can move through other creatures and objects as if they were difficult\
    \ terrain, and its movement doesn't provoke opportunity attack||opportunity attacks.\n\
    \nEach creature it moves through takes 5 (1d10) psychic damage; no creature can\
    \ take this damage more than once per turn.\n\nThe seer takes 5 (1d10) force damage\
    \ if it ends its turn inside an object."
  "name": "Out-Of-Phase Movement"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The seer makes two Comet Staff or Psychic Orb attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 10 (1d8\
    \ + 6) bludgeoning damage plus 18 (4d8) psychic damage, and if the target is a\
    \ creature, it must succeed on a DC 19 Constitution saving throw or be [incapacitated](/rules/conditions.md#incapacitated)\
    \ until the end of its next turn."
  "name": "Comet Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +11 to hit, range 120 feet, one creature. Hit: 27\
    \ (5d10) psychic damage."
  "name": "Psychic Orb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The seer warps space around one creature it can see within 30 feet of it.\
    \ That creature must make a DC 19 Wisdom saving throw. On a failed save, the target,\
    \ along with any equipment it is wearing or carrying, is teleported up to 60 feet\
    \ to an unoccupied space the seer can see, and then each creature within 10 feet\
    \ of the target's original space takes 39 (6d12) psychic damage. On a successful\
    \ save, the target takes 19 (3d12) psychic damage and isn't teleported."
  "name": "Collapse Distance (Recharge 6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the seer would be hit by an attack roll, it teleports, along with\
    \ any equipment it is wearing or carrying, exchanging positions with another star\
    \ spawn it can see within 60 feet of it. The other star spawn is hit by the attack\
    \ instead."
  "name": "Bend Space"
"source":
- "MPMM"
- "MTF"
name: Star Spawn Seer
image: "[[Star Spawn Seer.png]]"
---

# Star Spawn Seer

```statblock
"name": "Star Spawn Seer"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "153"
"hit_dice": "18d8 + 72"
"stats":
- !!int "14"
- !!int "12"
- !!int "18"
- !!int "22"
- !!int "19"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "6"
  "Wisdom": !!int "9"
  "Intelligence": !!int "11"
"skillsaves":
  "Perception": !!int "9"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "psychic"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 60 ft., passive Perception 19"
"languages": "Common, Deep Speech, Undercommon"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The seer can move through other creatures and objects as if they were difficult\
    \ terrain, and its movement doesn't provoke opportunity attack||opportunity attacks.\n\
    \nEach creature it moves through takes 5 (1d10) psychic damage; no creature can\
    \ take this damage more than once per turn.\n\nThe seer takes 5 (1d10) force damage\
    \ if it ends its turn inside an object."
  "name": "Out-Of-Phase Movement"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The seer makes two Comet Staff or Psychic Orb attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 10 (1d8\
    \ + 6) bludgeoning damage plus 18 (4d8) psychic damage, and if the target is a\
    \ creature, it must succeed on a DC 19 Constitution saving throw or be [incapacitated](/rules/conditions.md#incapacitated)\
    \ until the end of its next turn."
  "name": "Comet Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +11 to hit, range 120 feet, one creature. Hit: 27\
    \ (5d10) psychic damage."
  "name": "Psychic Orb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The seer warps space around one creature it can see within 30 feet of it.\
    \ That creature must make a DC 19 Wisdom saving throw. On a failed save, the target,\
    \ along with any equipment it is wearing or carrying, is teleported up to 60 feet\
    \ to an unoccupied space the seer can see, and then each creature within 10 feet\
    \ of the target's original space takes 39 (6d12) psychic damage. On a successful\
    \ save, the target takes 19 (3d12) psychic damage and isn't teleported."
  "name": "Collapse Distance (Recharge 6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the seer would be hit by an attack roll, it teleports, along with\
    \ any equipment it is wearing or carrying, exchanging positions with another star\
    \ spawn it can see within 60 feet of it. The other star spawn is hit by the attack\
    \ instead."
  "name": "Bend Space"
"source":
- "MPMM"
- "MTF"
"image": "[[Star Spawn Seer.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 230, Mordenkainen's Tome of Foes p. 236*

## Description

A star spawn seer is most often encountered as the leader of a cult dedicated to one or more Elder Evils. Usually, the seer is the only cult member that grasps the full extent of the horror the cult is venerating. The seer's goal is to tap into vast energy sources and perform the dire rites that will extend a bridge between the Material Plane and the squirming chaos of an Elder Evil's realm.

An entity that appears as a star spawn seer in the Material Plane usually arrives disembodied. When a warlock or other spellcaster establishes communication with it, the seer-entity takes control of the mortal, transforming it into a star spawn seer. Whoever the mortal once was largely vanishes beneath the mass of tumorous skin than builds up in strange whorls all over the seer's body. The mortal's hands become bulky, flipper-like appendages able to grasp the seer's strange staff formed of a blend of flesh, bone, and star stuff.

A star spawn seer is almost always accompanied by one or more star spawn hulks (also in this book). Not only is a hulk a powerful combatant, but when a seer deals psychic damage to a hulk, the hulk isn't hurt, and the effect ricochets off and expands to assault other creatures.

**Star Spawn.** > [!quote]- A quote from Mordenkainen  
> 
> Stars don't spawn these creatures.
> 
> Such beautiful lights shouldn't be blamed for such balefulness.

The Material Plane represents only one small part of the multiverse. Beyond the best-known planes of existence lie realms alien to mortal life. Some are so hostile that even a moment's contact is enough to break a mortal's mind. Yet beings do exist that are native to these realms: entities that are ever hungering, searching, warring, and sometimes dreaming. These Elder Evils are far older than most of the mortal peoples and always inimical to such creatures' minds.

However much they might desire to enter and dominate the Material Plane, the Elder Evils are unable or unwilling to leave their realms. Some are imprisoned in their dimensions by external forces, some are inextricably bound to their home realities, and others simply can't find any way out.

The creatures known as star spawn are the heralds, servants, and soldiers of the Elder Evils, capable of taking on forms that can journey to the Material Plane. They arrive most often in the wake of a comet—or perhaps this phenomenon merely signals that star spawn are in the vicinity and available for communication. When the signs are right, cultists gather together, read aloud their blasphemous texts, and conduct the mind-searing rituals that guide star spawn into the world.

**Elder Evil Blessings.** Disciples of certain Elder Evils can bestow supernatural gifts on those who serve that cult, including star spawn. The following powers are unique to specific cults; typically a creature has only one.

- Cult of Atropus, the World Born Dead
- Cult of Borem, of the Lake of Boiling Mud
- Cult of Haask, the Voice of Hargut
- Cult of Tharizdun, the Chained God
- Cult of Tyranthraxus, the Flamed One

## Environment

mountain, swamp, urban