---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/large
- monster/type/monstrosity
- monster/environment/desert
aliases: ["Tlincalli"]
statblock: true
"name": "Tlincalli"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "85"
"hit_dice": "10d10 + 30"
"stats":
- !!int "16"
- !!int "13"
- !!int "16"
- !!int "8"
- !!int "12"
- !!int "8"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "4"
  "Survival": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Tlincalli"
"cr": "5"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tlincalli makes one Longsword or Spiked Chain attack and one Sting\
    \ attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 11) if it is a Large or smaller creature. Until this grapple ends,\
    \ the target is [restrained](/rules/conditions.md#restrained), and the tlincalli\
    \ can't use the spiked chain against another target."
  "name": "Spiked Chain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 6 (1d6\
    \ + 3) piercing damage plus 14 (4d6) poison damage, and the target must succeed\
    \ on a DC 14 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. If it fails the saving throw by 5 or more, the target is also\
    \ [paralyzed](/rules/conditions.md#paralyzed) while [poisoned](/rules/conditions.md#poisoned).\
    \ The target can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Sting"
"source":
- "MPMM"
- "VGM"
name: Tlincalli
image: "[[Tlincalli.png]]"
---

# Tlincalli

```statblock
"name": "Tlincalli"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "85"
"hit_dice": "10d10 + 30"
"stats":
- !!int "16"
- !!int "13"
- !!int "16"
- !!int "8"
- !!int "12"
- !!int "8"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "4"
  "Survival": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Tlincalli"
"cr": "5"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The tlincalli makes one Longsword or Spiked Chain attack and one Sting\
    \ attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 11) if it is a Large or smaller creature. Until this grapple ends,\
    \ the target is [restrained](/rules/conditions.md#restrained), and the tlincalli\
    \ can't use the spiked chain against another target."
  "name": "Spiked Chain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 6 (1d6\
    \ + 3) piercing damage plus 14 (4d6) poison damage, and the target must succeed\
    \ on a DC 14 Constitution saving throw or be [poisoned](/rules/conditions.md#poisoned)\
    \ for 1 minute. If it fails the saving throw by 5 or more, the target is also\
    \ [paralyzed](/rules/conditions.md#paralyzed) while [poisoned](/rules/conditions.md#poisoned).\
    \ The target can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Sting"
"source":
- "MPMM"
- "VGM"
"image": "[[Tlincalli.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 242, Volo's Guide to Monsters p. 193*

## Description

Tlincallis, also called scorpion folk, are chitin-covered creatures with a humanlike upper body and the lower body of an enormous scorpion, complete with a stinger at the end of a long tail. These desert creatures range across arid lands, hunting at dawn and dusk. In the hours between, they wait out the day's heat or the night's cold by burying themselves in loose sand or earth or, if the terrain proves too inflexible, lurking in ruins or shallow caves.

Tlincallis stay in one place for only as long as the hunting is good in the immediate area, though they might visit the same way stations over and over during their wanderings. They also settle down temporarily whenever it's time to lay eggs and hatch a new brood of young.

These scorpion folk deposit their eggs in warm places out of direct sunlight, often amid a stand of cacti near their present encampment. The eggs are protected by hard shells coated in paralytic poison similar to that produced by their stingers. This poison leaves most would-be predators that dare to break an egg defenseless when the tlincalli parents come to investigate.

Tlincallis eat what they kill, whether their hunt nets desert animals or a caravan, but when they have new mouths to feed, they are careful to take some of their prey alive. After using their stingers to paralyze victims and their spiked chains to bind them, tlincallis take these captives back to their encampment and tie them to cacti or rock formations. When the sun sets, the newly hatched young emerge from the lair to eat the captives alive.

These predators see themselves as great hunters, and respect others with such skills. If a tlincalli encounters a more powerful hunter, such as a blue dragon, they carefully weigh whether to serve the superior hunter, move on, or fight to the death to remove it as competition.

Tlincallis rarely build cities, make clothing, or mine metals. Instead, they scavenge much of what they need or want. They do, however, melt down scavenged metal to forge crude weapons, armor, and tools.

## Environment

desert