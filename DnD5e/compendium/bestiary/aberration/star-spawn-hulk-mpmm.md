---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/large
- monster/type/aberration
aliases: ["Star Spawn Hulk"]
statblock: true
"name": "Star Spawn Hulk"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "136"
"hit_dice": "13d10 + 65"
"stats":
- !!int "20"
- !!int "8"
- !!int "21"
- !!int "7"
- !!int "12"
- !!int "9"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "3"
  "Wisdom": !!int "5"
"skillsaves":
  "Perception": !!int "5"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Deep Speech"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the hulk takes psychic damage, each creature within 10 feet of the hulk\
    \ takes that damage instead; the hulk takes none of the damage. In addition, the\
    \ hulk's thoughts and location can't be discerned by magic."
  "name": "Psychic Mirror"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hulk makes two Slam attacks. If both attacks hit the same target, the\
    \ target also takes 9 (2d8) psychic damage and must succeed on a DC 17 Constitution\
    \ saving throw or be [stunned](/rules/conditions.md#stunned) until the end of\
    \ the target's next turn."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 14 (2d8\
    \ + 5) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hulk makes a separate Slam attack against each creature within 10 feet\
    \ of it. Each creature that is hit must also succeed on a DC 17 Dexterity saving\
    \ throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Reaping Arms (Recharge 5-6)"
"source":
- "MPMM"
- "MTF"
name: Star Spawn Hulk
image: "[[Star Spawn Hulk.png]]"
---

# Star Spawn Hulk

```statblock
"name": "Star Spawn Hulk"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "136"
"hit_dice": "13d10 + 65"
"stats":
- !!int "20"
- !!int "8"
- !!int "21"
- !!int "7"
- !!int "12"
- !!int "9"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "3"
  "Wisdom": !!int "5"
"skillsaves":
  "Perception": !!int "5"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Deep Speech"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the hulk takes psychic damage, each creature within 10 feet of the hulk\
    \ takes that damage instead; the hulk takes none of the damage. In addition, the\
    \ hulk's thoughts and location can't be discerned by magic."
  "name": "Psychic Mirror"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hulk makes two Slam attacks. If both attacks hit the same target, the\
    \ target also takes 9 (2d8) psychic damage and must succeed on a DC 17 Constitution\
    \ saving throw or be [stunned](/rules/conditions.md#stunned) until the end of\
    \ the target's next turn."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 14 (2d8\
    \ + 5) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hulk makes a separate Slam attack against each creature within 10 feet\
    \ of it. Each creature that is hit must also succeed on a DC 17 Dexterity saving\
    \ throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Reaping Arms (Recharge 5-6)"
"source":
- "MPMM"
- "MTF"
"image": "[[Star Spawn Hulk.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 227, Mordenkainen's Tome of Foes p. 234*

## Description

The hulk is one of the largest of the known star spawn, with glistening, translucent skin. Pale and seemingly lidless eyes glare balefully from a face distorted by too many teeth and too little nose. Hulks are seldom encountered without a commanding star spawn seer (also in this book) nearby. A hulk appears to have little will of its own and is driven to protect its master.

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