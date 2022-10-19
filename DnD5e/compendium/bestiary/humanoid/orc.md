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
aliases: ["Orc"]
statblock: true
"name": "Orc"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "15"
"hit_dice": "2d8 + 6"
"stats":
- !!int "16"
- !!int "12"
- !!int "16"
- !!int "7"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Intimidation": !!int "2"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Orc"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the orc can move up to its speed toward a hostile creature\
    \ that it can see."
  "name": "Aggressive"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12\
    \ + 3) slashing damage."
  "name": "Greataxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage."
  "name": "Javelin"
"source":
- "MM"
- "HotDQ"
- "LMoP"
- "PotA"
- "SKT"
- "TftYP"
- "ToA"
- "GoS"
- "DIP"
- "ERLW"
- "RMBRE"
- "EGW"
- "IDRotF"
- "CRCotN"
name: Orc
image: "[[Orc.png]]"
---

# Orc

```statblock
"name": "Orc"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "15"
"hit_dice": "2d8 + 6"
"stats":
- !!int "16"
- !!int "12"
- !!int "16"
- !!int "7"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Intimidation": !!int "2"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Orc"
"cr": "1/2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the orc can move up to its speed toward a hostile creature\
    \ that it can see."
  "name": "Aggressive"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12\
    \ + 3) slashing damage."
  "name": "Greataxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage."
  "name": "Javelin"
"source":
- "MM"
- "HotDQ"
- "LMoP"
- "PotA"
- "SKT"
- "TftYP"
- "ToA"
- "GoS"
- "DIP"
- "ERLW"
- "RMBRE"
- "EGW"
- "IDRotF"
- "CRCotN"
"image": "[[Orc.png]]"
```
^statblock

*Source: Monster Manual p. 246, Hoard of the Dragon Queen, Lost Mine of Phandelver, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Ghosts of Saltmarsh, Dragon of Icespire Peak, Eberron: Rising from the Last War, The Lost Dungeon of Rickedness: Big Rick Energy, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Critical Role: Call of the Netherdeep*

## Description

Orcs are savage raiders and pillagers with stooped postures, low foreheads, and piggish faces with prominent lower canines that resemble tusks.

**Gruumsh One-Eye.**  Orcs worship Gruumsh, the mightiest of the orc deities and their creator. The orcs believe that in ancient days, the gods gathered to divide the world among their followers. When Gruumsh claimed the mountains, he learned they had been taken by the dwarves. He laid claim to the forests, but those had been settled by the elves. Each place that Gruumsh wanted had already been claimed. The other gods laughed at Gruumsh, but he responded with a furious bellow. Grasping his mighty spear, he laid waste to the mountains, set the forests aflame, and carved great furrows in the fields. Such was the role of the orcs, he proclaimed, to take and destroy all that the other races would deny them. To this day, the orcs wage an endless war on humans, elves, dwarves, and other folk.

Orcs hold a particular hatred for elves. The elven god Corellon Larethian half-blinded Gruumsh with a well-placed arrow to the orc god's eye. Since then, the orcs have taken particular joy in slaughtering elves. Turning his injury into a baleful gift, Gruumsh grants divine might to any champion who willingly plucks out one of its eyes in his honor.

**Tribes like Plagues.** Orcs gather in tribes that exert their dominance and satisfy their bloodlust by plundering villages, devouring or driving off roaming herds, and slaying any humanoids that stand against them. After savaging a settlement, orcs pick it clean of wealth and items usable in their own lands. They set the remains of villages and camps ablaze, then retreat whence they came, their bloodlust satisfied.

**Ranging Scavengers.** Their lust for slaughter demands that orcs dwell always within striking distance of new targets. As such, they seldom settle permanently, instead converting ruins, cavern complexes, and defeated foes' villages into fortified camps and strongholds. Orcs build only for defense, making no innovation or improvement to their lairs beyond mounting the severed body parts of their victims on spiked stockade walls or pikes jutting up from moats and trenches.

When an existing territory is depleted of food, an orc tribe divides into roving bands that scout for choice hunting grounds. When each party returns, it brings back trophies and news of targets ripe for attack, the richest of which is chosen. The tribe then sets out en masse to carve a bloody path to its new territory.

On rare occasions, a tribe's leader chooses to hold onto a particularly defensible lair for decades. The orcs of such a tribe must range far across the countryside to sate their appetites.

**Leadership and Might.** Orc tribes are mostly patriarchal, flaunting such vivid or grotesque titles as Many-Arrows, Screaming Eye, and Elf Ripper. Occasionally, a powerful war chief unites scattered orc tribes into a single rampaging horde, which runs roughshod over other orc tribes and humanoid settlements from a position of overwhelming strength.

Strength and power are the greatest of orcish virtues, and orcs embrace all manner of mighty creatures in their tribes. Rejecting notions of racial purity, they proudly welcome ogres, trolls, half-orcs, and orogs into their ranks. As well, orcs respect and fear the size and power of evil giants, and often serve them as guards and soldiers.

**Orc Crossbreeds.** Luthic, the orc goddess of fertility and wife of Gruumsh, demands that orcs procreate often and indiscriminately so that orc hordes swell generation after generation. The orcs' drive to reproduce runs stronger than any other humanoid race, and they readily crossbreed with other races. When an orc procreates with a non-orc humanoid of similar size and stature (such as a human or a dwarf), the resulting child is either an orc or a half-orc. When an orc produces young with an ogre, the child is a half-ogre of intimidating strength and brutish features called an ogrillon.

## Environment

underdark, mountain, grassland, forest, swamp, hill, arctic