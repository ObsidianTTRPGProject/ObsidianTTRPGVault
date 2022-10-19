---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid/elf
- monster/environment/underdark
- monster/environment/urban
aliases: ["Shadar-kai Soul Monger"]
statblock: true
"name": "Shadar-kai Soul Monger"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "136"
"hit_dice": "21d8 + 42"
"stats":
- !!int "8"
- !!int "17"
- !!int "14"
- !!int "19"
- !!int "15"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "7"
  "Wisdom": !!int "7"
"skillsaves":
  "Perception": !!int "7"
"damage_immunities": "necrotic, psychic"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "Common, Elvish"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadar-kai casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 16):\n\n1/day each: [bestow curse](/compendium/spells/bestow-curse.md),\
    \ [finger of death](/compendium/spells/finger-of-death.md), [gaseous form](/compendium/spells/gaseous-form.md),\
    \ [seeming](/compendium/spells/seeming.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadar-kai has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put it to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadar-kai has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When it reduces a creature to 0 hit points, the shadar-kai can gain temporary\
    \ hit points equal to half the creature's hit point maximum. While the shadar-kai\
    \ has temporary hit points from this trait, it has advantage on attack rolls."
  "name": "Soul Thirst"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any Beast or Humanoid (except an elf) that starts its turn within 5 feet\
    \ of the shadar-kai has its speed reduced by 20 feet until the start of that creature's\
    \ next turn."
  "name": "Weight of Ages"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadar-kai makes two Shadow Dagger attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 13 (4d4 + 3) piercing damage plus 19 (3d12) necrotic damage,\
    \ and the target has disadvantage on saving throws until the end of the shadar-kai's\
    \ next turn. Hit or Miss: The dagger magically returns to the shadar-kai's hand\
    \ immediately after a ranged attack."
  "name": "Shadow Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadar-kai emits weariness in a 60-foot cube. Each creature in that\
    \ area must make a DC 16 Constitution saving throw. On a failed save, a creature\
    \ takes 45 (10d8) psychic damage and suffers 1 level of [exhaustion](/rules/conditions.md#exhaustion).\
    \ On a successful save, it takes half as much damage and doesn't gain a level\
    \ of [exhaustion](/rules/conditions.md#exhaustion)."
  "name": "Wave of Weariness (Recharge 4-6)"
"source":
- "MPMM"
- "MTF"
name: Shadar-kai Soul Monger
image: "[[Shadar-kai Soul Monger.png]]"
---

# Shadar-kai Soul Monger

```statblock
"name": "Shadar-kai Soul Monger"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "136"
"hit_dice": "21d8 + 42"
"stats":
- !!int "8"
- !!int "17"
- !!int "14"
- !!int "19"
- !!int "15"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "7"
  "Wisdom": !!int "7"
"skillsaves":
  "Perception": !!int "7"
"damage_immunities": "necrotic, psychic"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "Common, Elvish"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadar-kai casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 16):\n\n1/day each: [bestow curse](/compendium/spells/bestow-curse.md),\
    \ [finger of death](/compendium/spells/finger-of-death.md), [gaseous form](/compendium/spells/gaseous-form.md),\
    \ [seeming](/compendium/spells/seeming.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadar-kai has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put it to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadar-kai has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When it reduces a creature to 0 hit points, the shadar-kai can gain temporary\
    \ hit points equal to half the creature's hit point maximum. While the shadar-kai\
    \ has temporary hit points from this trait, it has advantage on attack rolls."
  "name": "Soul Thirst"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any Beast or Humanoid (except an elf) that starts its turn within 5 feet\
    \ of the shadar-kai has its speed reduced by 20 feet until the start of that creature's\
    \ next turn."
  "name": "Weight of Ages"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadar-kai makes two Shadow Dagger attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 13 (4d4 + 3) piercing damage plus 19 (3d12) necrotic damage,\
    \ and the target has disadvantage on saving throws until the end of the shadar-kai's\
    \ next turn. Hit or Miss: The dagger magically returns to the shadar-kai's hand\
    \ immediately after a ranged attack."
  "name": "Shadow Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The shadar-kai emits weariness in a 60-foot cube. Each creature in that\
    \ area must make a DC 16 Constitution saving throw. On a failed save, a creature\
    \ takes 45 (10d8) psychic damage and suffers 1 level of [exhaustion](/rules/conditions.md#exhaustion).\
    \ On a successful save, it takes half as much damage and doesn't gain a level\
    \ of [exhaustion](/rules/conditions.md#exhaustion)."
  "name": "Wave of Weariness (Recharge 4-6)"
"source":
- "MPMM"
- "MTF"
"image": "[[Shadar-kai Soul Monger.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 214, Mordenkainen's Tome of Foes p. 226*

## Description

Wracked with despair over the loss of memories of a brighter time, soul mongers crave the vitality of others. The aching void within a soul monger radiates outward, manifesting as an unbearable weight that drains the vigor of anyone unfortunate enough to be in their presence. Those who have escaped the onslaught of a soul monger can hardly shake the memory of the sound they make—the moan of a tortured soul, lost in a bottomless well of tragedy.

**Shadar-kai.** In the gloom of the Shadowfell live shadar-kai, elves whose ancestors served the Raven Queen, a god of death and memory. They were brought to that realm in ages past, so long ago that they're now adapted to its cheerless environment, both physically and mentally.

Eons of exposure to the influence of the Shadowfell has left shadar-kai often joyless and mournful. In that realm, they have pale hair, wrinkled gray skin, and swollen joints that give them a corpselike aspect. They appear more youthful while on other planes, but their skin always retains a deathly ashen hue. When in the Shadowfell, they detest mirrors and avoid keeping things that remind them of their age.

Shadar-kai of the Raven Queen watch over both the Shadowfell and the Material Plane, scouting out choice souls and tragedies that might please their deity. They are rumored to be able to coax worldly events along tragic paths for her amusement. The Raven Queen is famously cryptic even to her most devoted followers, however; their efforts are rewarded only with vague omens they interpret as best they can.

**Fortress of Memories.** The shadar-kai who are most devoted to the Raven Queen serve her at the Fortress of Memories, her twisted castle in the Shadowfell. The fortress is a mournful place, filled with incessant echoes of the past. Flocks of ravens that act as the Raven Queen's eyes and ears darken the skies around it when they emerge from within, bearing her cryptic messages and omens far and wide across the multiverse.

Within the fortress are items that the Raven Queen finds irresistible: objects invested with deep feelings of sorrow, longing, or remorse. These items are brought to her as gifts from the shadar-kai, and include furniture, clocks, mirrors, jewels, and toys. Ghostly visions of people, places, and pets also appear in the fortress. Any of these things can spontaneously appear about her lair, every object and apparition being a metaphoric representation of some story—great or small—that was saturated with raw emotion.

Shadar-kai encountered outside the Shadowfell are often on quests to find the most sorrow-touched items they can find to bring back to their queen's gloomy castle.

## Environment

underdark, urban