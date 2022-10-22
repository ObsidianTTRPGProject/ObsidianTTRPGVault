---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/humanoid/orc
- monster/environment/underdark
- monster/environment/mountain
- monster/environment/grassland
- monster/environment/forest
- monster/environment/swamp
- monster/environment/hill
- monster/environment/arctic
aliases: ["Orc Eye of Gruumsh"]
statblock: true
"name": "Orc Eye of Gruumsh"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "16"
- !!int "12"
- !!int "17"
- !!int "9"
- !!int "13"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Intimidation": !!int "3"
  "Religion": !!int "1"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Orc"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The orc is a 3rd-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 11, +3 to hit with spell attacks). The orc has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [guidance](/compendium/spells/guidance.md),\
    \ [resistance](/compendium/spells/resistance.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [bless](/compendium/spells/bless.md), [command](/compendium/spells/command.md)\n\
    \n2nd level (2 2nd-level slots): [augury](/compendium/spells/augury.md), [spiritual\
    \ weapon](/compendium/spells/spiritual-weapon.md) (spear)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the orc can move up to its speed toward a hostile creature\
    \ that it can see."
  "name": "Aggressive"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The orc deals an extra 4 (1d8) damage when it hits with a weapon attack\
    \ (included in the attacks)."
  "name": "Gruumsh's Fury"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 11 (1d6 + 3 plus 1d8) piercing damage, or 12 (2d8 + 3)\
    \ piercing damage if used with two hands to make a melee attack."
  "name": "Spear"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "EGW"
- "IDRotF"
name: Orc Eye of Gruumsh
image: "[[Orc Eye of Gruumsh.png]]"
---

# Orc Eye of Gruumsh

```statblock
"name": "Orc Eye of Gruumsh"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "16"
- !!int "12"
- !!int "17"
- !!int "9"
- !!int "13"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Intimidation": !!int "3"
  "Religion": !!int "1"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Orc"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The orc is a 3rd-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 11, +3 to hit with spell attacks). The orc has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [guidance](/compendium/spells/guidance.md),\
    \ [resistance](/compendium/spells/resistance.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [bless](/compendium/spells/bless.md), [command](/compendium/spells/command.md)\n\
    \n2nd level (2 2nd-level slots): [augury](/compendium/spells/augury.md), [spiritual\
    \ weapon](/compendium/spells/spiritual-weapon.md) (spear)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the orc can move up to its speed toward a hostile creature\
    \ that it can see."
  "name": "Aggressive"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The orc deals an extra 4 (1d8) damage when it hits with a weapon attack\
    \ (included in the attacks)."
  "name": "Gruumsh's Fury"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 11 (1d6 + 3 plus 1d8) piercing damage, or 12 (2d8 + 3)\
    \ piercing damage if used with two hands to make a melee attack."
  "name": "Spear"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "EGW"
- "IDRotF"
"image": "[[Orc Eye of Gruumsh.png]]"
```
^statblock

*Source: Monster Manual p. 247, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden*

## Description

When an orc slays an elf in Gruumsh's name and offers the corpse of its foe as a sacrifice to the god of slaughter, an aspect of the god might appear. This aspect demands an additional sacrifice: one of the orc's eyes, symbolizing the loss Gruumsh suffered at the hands of his greatest enemy, Corellon Larethian.

If the orc plucks out one of its eyes, Gruumsh might grant the orc spellcasting ability and special favor, along with the right to call itself an Eye of Gruumsh. When not using their auguries to advise their war chiefs, these savage devotees of the god of slaughter hurl themselves into battle, their weapons stained with blood.

**Orcs.** Orcs are savage raiders and pillagers with stooped postures, low foreheads, and piggish faces with prominent lower canines that resemble tusks.

**Gruumsh One-Eye.**  Orcs worship Gruumsh, the mightiest of the orc deities and their creator. The orcs believe that in ancient days, the gods gathered to divide the world among their followers. When Gruumsh claimed the mountains, he learned they had been taken by the dwarves. He laid claim to the forests, but those had been settled by the elves. Each place that Gruumsh wanted had already been claimed. The other gods laughed at Gruumsh, but he responded with a furious bellow. Grasping his mighty spear, he laid waste to the mountains, set the forests aflame, and carved great furrows in the fields. Such was the role of the orcs, he proclaimed, to take and destroy all that the other races would deny them. To this day, the orcs wage an endless war on humans, elves, dwarves, and other folk.

Orcs hold a particular hatred for elves. The elven god Corellon Larethian half-blinded Gruumsh with a well-placed arrow to the orc god's eye. Since then, the orcs have taken particular joy in slaughtering elves. Turning his injury into a baleful gift, Gruumsh grants divine might to any champion who willingly plucks out one of its eyes in his honor.

**Tribes like Plagues.** Orcs gather in tribes that exert their dominance and satisfy their bloodlust by plundering villages, devouring or driving off roaming herds, and slaying any humanoids that stand against them. After savaging a settlement, orcs pick it clean of wealth and items usable in their own lands. They set the remains of villages and camps ablaze, then retreat whence they came, their bloodlust satisfied.

When an existing territory is depleted of food, an orc tribe divides into roving bands that scout for choice hunting grounds. When each party returns, it brings back trophies and news of targets ripe for attack, the richest of which is chosen. The tribe then sets out en masse to carve a bloody path to its new territory.

On rare occasions, a tribe's leader chooses to hold onto a particularly defensible lair for decades. The orcs of such a tribe must range far across the countryside to sate their appetites.

Strength and power are the greatest of orcish virtues, and orcs embrace all manner of mighty creatures in their tribes. Rejecting notions of racial purity, they proudly welcome ogres, trolls, half-orcs, and orogs into their ranks. As well, orcs respect and fear the size and power of evil giants, and often serve them as guards and soldiers.

**Ranging Scavengers.**  Their lust for slaughter demands that orcs dwell always within striking distance of new targets. As such, they seldom settle permanently, instead converting ruins, cavern complexes, and defeated foes' villages into fortified camps and strongholds. Orcs build only for defense, making no innovation or improvement to their lairs beyond mounting the severed body parts of their victims on spiked stockade walls or pikes jutting up from moats and trenches.

**Leadership and Might.**  Orc tribes are mostly patriarchal, flaunting such vivid or grotesque titles as Many-Arrows, Screaming Eye, and Elf Ripper. Occasionally, a powerful war chief unites scattered orc tribes into a single rampaging horde, which runs roughshod over other orc tribes and humanoid settlements from a position of overwhelming strength.

**Orc Crossbreeds.**  Luthic, the orc goddess of fertility and wife of Gruumsh, demands that orcs procreate often and indiscriminately so that orc hordes swell generation after generation. The orcs' drive to reproduce runs stronger than any other humanoid race, and they readily crossbreed with other races. When an orc procreates with a non-orc humanoid of similar size and stature (such as a human or a dwarf), the resulting child is either an orc or a half-orc. When an orc produces young with an ogre, the child is a half-ogre of intimidating strength and brutish features called an ogrillon.

## Environment

underdark, mountain, grassland, forest, swamp, hill, arctic