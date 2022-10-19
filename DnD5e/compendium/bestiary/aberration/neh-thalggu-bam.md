---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/large
- monster/type/aberration
aliases: ["Neh-thalggu"]
statblock: true
"name": "Neh-thalggu"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "95"
"hit_dice": "10d10 + 40"
"stats":
- !!int "15"
- !!int "8"
- !!int "18"
- !!int "12"
- !!int "11"
- !!int "7"
"speed": "walk 40 ft."
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Deep Speech; see also Brain Dump"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neh-thalggu casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 11). It must\
    \ have consumed the requisite number of brains to cast the spell, as indicated:\n\
    \n1/day each: [arms of Hadar](/compendium/spells/arms-of-hadar.md) (1 brain),\
    \ [detect magic](/compendium/spells/detect-magic.md) (2 brains), [magic missile](/compendium/spells/magic-missile.md)\
    \ (3 brains), [Tenser's floating disk](/compendium/spells/tensers-floating-disk.md)\
    \ (4 brains), [darkness](/compendium/spells/darkness.md) (5 brains), [hold person](/compendium/spells/hold-person.md)\
    \ (6 brains), [invisibility](/compendium/spells/invisibility.md) (7 brains), [spider\
    \ climb](/compendium/spells/spider-climb.md) (8 brains), [fear](/compendium/spells/fear.md)\
    \ (9 brains), [hypnotic pattern](/compendium/spells/hypnotic-pattern.md) (10 brains),\
    \ [major image](/compendium/spells/major-image.md) (11 brains), [stinking cloud](/compendium/spells/stinking-cloud.md)\
    \ (12 brains)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the neh-thalggu consumes a brain, it gains the magical ability\
    \ to speak and understand languages known by the brain's previous owner."
  "name": "Brain Dump"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neh-thalggu doesn't require air."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neh-thalggu makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 11 (2d8\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one [incapacitated](/rules/conditions.md#incapacitated)\
    \ Humanoid. Hit: 35 (10d6) piercing damage. If this damage reduces the target\
    \ to 0 hit points, the neh-thalggu kills the target by extracting and consuming\
    \ its brain."
  "name": "Extract Brain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neh-thalggu magically emits psychic energy at one Humanoid it can see\
    \ within 10 feet of itself. The target must make a DC 14 Wisdom saving throw.\
    \ On a failed save, the target takes 9 (2d8) psychic damage and is [incapacitated](/rules/conditions.md#incapacitated)\
    \ until the end of its next turn. On a successful save, the target takes half\
    \ as much damage and isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Mind Blast (Recharge 5-6)"
"source":
- "BAM"
- "LoX"
name: Neh-thalggu
image: "[[Neh-thalggu.png]]"
---

# Neh-thalggu

```statblock
"name": "Neh-thalggu"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "95"
"hit_dice": "10d10 + 40"
"stats":
- !!int "15"
- !!int "8"
- !!int "18"
- !!int "12"
- !!int "11"
- !!int "7"
"speed": "walk 40 ft."
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Deep Speech; see also Brain Dump"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neh-thalggu casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 11). It must\
    \ have consumed the requisite number of brains to cast the spell, as indicated:\n\
    \n1/day each: [arms of Hadar](/compendium/spells/arms-of-hadar.md) (1 brain),\
    \ [detect magic](/compendium/spells/detect-magic.md) (2 brains), [magic missile](/compendium/spells/magic-missile.md)\
    \ (3 brains), [Tenser's floating disk](/compendium/spells/tensers-floating-disk.md)\
    \ (4 brains), [darkness](/compendium/spells/darkness.md) (5 brains), [hold person](/compendium/spells/hold-person.md)\
    \ (6 brains), [invisibility](/compendium/spells/invisibility.md) (7 brains), [spider\
    \ climb](/compendium/spells/spider-climb.md) (8 brains), [fear](/compendium/spells/fear.md)\
    \ (9 brains), [hypnotic pattern](/compendium/spells/hypnotic-pattern.md) (10 brains),\
    \ [major image](/compendium/spells/major-image.md) (11 brains), [stinking cloud](/compendium/spells/stinking-cloud.md)\
    \ (12 brains)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the neh-thalggu consumes a brain, it gains the magical ability\
    \ to speak and understand languages known by the brain's previous owner."
  "name": "Brain Dump"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neh-thalggu doesn't require air."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neh-thalggu makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 11 (2d8\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one [incapacitated](/rules/conditions.md#incapacitated)\
    \ Humanoid. Hit: 35 (10d6) piercing damage. If this damage reduces the target\
    \ to 0 hit points, the neh-thalggu kills the target by extracting and consuming\
    \ its brain."
  "name": "Extract Brain"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The neh-thalggu magically emits psychic energy at one Humanoid it can see\
    \ within 10 feet of itself. The target must make a DC 14 Wisdom saving throw.\
    \ On a failed save, the target takes 9 (2d8) psychic damage and is [incapacitated](/rules/conditions.md#incapacitated)\
    \ until the end of its next turn. On a successful save, the target takes half\
    \ as much damage and isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Mind Blast (Recharge 5-6)"
"source":
- "BAM"
- "LoX"
"image": "[[Neh-thalggu.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 39, Light of Xaryxis*

## Description

Known throughout the multiverse as brain collectors, neh-thalggu consume the brains of Humanoids and use them as receptacles to enhance their magical abilities.

Neh-thalggu are born in the nightmarish Far Realm, but they spread across the Astral Plane and find their way onto the various worlds of the Material Plane, where brains are much more abundant. A neh-thalggu has a bulbous body and six legs resembling those of a crustacean. Four bulging eyes and a tooth-filled maw dominate its hideous visage. Behind and above these features, one or more lumps protrude from its body, each one containing a brain the neh-thalggu has consumed.

After a neh-thalggu kills a victim, it uses its pincers to cut open the victim's head and remove the brain. It then swallows the brain whole. The collected brain is stored inside one of several pockets in the neh-thalggu's head. Once it has collected twelve brains in this fashion, it is overcome by an urge to return to the Far Realm and begins devoting all its energy to finding a way home.

In an encounter with a neh-thalggu, roll a d12 to determine how many brains it has already collected.