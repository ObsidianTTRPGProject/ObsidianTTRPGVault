---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/large
- monster/type/beast
aliases: ["Sword Spider"]
statblock: true
"name": "Sword Spider"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "16"
- !!int "16"
- !!int "14"
- !!int "6"
- !!int "12"
- !!int "4"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "7"
"senses": "tremorsense 60 ft., passive Perception 11"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sword spider can climb difficult surfaces, including upside down on\
    \ ceilings, without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in contact with a web, the sword spider knows the exact location\
    \ of any other creature in contact with the same web."
  "name": "Web Sense"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sword spider ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sword spider makes two foreleg attacks and one bite attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage, and the target must make a DC 12 Constitution saving throw,\
    \ taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful\
    \ one. If the poison damage reduces the target to 0 hit points, the target is\
    \ stable but [poisoned](/rules/conditions.md#poisoned) for 1 hour, even after\
    \ regaining hit points, and is [paralyzed](/rules/conditions.md#paralyzed) while\
    \ [poisoned](/rules/conditions.md#poisoned) in this way."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Foreleg"
"source":
- "MaBJoV"
name: Sword Spider
image: "[[Sword Spider.png]]"
---

# Sword Spider

```statblock
"name": "Sword Spider"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "16"
- !!int "16"
- !!int "14"
- !!int "6"
- !!int "12"
- !!int "4"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "7"
"senses": "tremorsense 60 ft., passive Perception 11"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sword spider can climb difficult surfaces, including upside down on\
    \ ceilings, without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in contact with a web, the sword spider knows the exact location\
    \ of any other creature in contact with the same web."
  "name": "Web Sense"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sword spider ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The sword spider makes two foreleg attacks and one bite attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage, and the target must make a DC 12 Constitution saving throw,\
    \ taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful\
    \ one. If the poison damage reduces the target to 0 hit points, the target is\
    \ stable but [poisoned](/rules/conditions.md#poisoned) for 1 hour, even after\
    \ regaining hit points, and is [paralyzed](/rules/conditions.md#paralyzed) while\
    \ [poisoned](/rules/conditions.md#poisoned) in this way."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Foreleg"
"source":
- "MaBJoV"
"image": "[[Sword Spider.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 151*

## Description

Sword spiders are a type of giant arachnid that stalk the forests and caverns of Faerûn, walking on legs that resemble razor-sharp blades. These solitary predators move incredibly fast and with great stealth for their large size. The sword spider's sleek, 12-foot-long body is encased in a durable black exoskeleton covered in fine dark hairs. Although their eyesight is poor, sword spiders locate their prey using [tremorsense|MM](/rules/senses.md#tremorsense|MM) to feel for minute vibrations in the ground.

**Natural Weapons.** All eight legs of a sword spider end in thick chitinous plates with serrated ridges. However, its primary weapons are its front two legs, which look like a pair of massive curved swords. Its victims are impaled upon these limbs and brought close enough for the spider to deliver its poisonous bite. Once slain, its prey is then chopped up into manageable morsels that can be fed into its cavernous maw lined with multiple rows of crooked fangs.

**Death From Above.** Rather than trapping its food within a pre-constructed web, sword spiders prefer to wait for prey high up in tree branches and on cavern walls. (Despite their large frames, sword spiders retain the ability to cling to most surfaces, making them adept climbers.) Once it spots its prey, the spider sprays the creature with a restraining web and drops down with all eight of its lethal legs extended to impale its meal. When hunting in areas not conducive to this strategy, sword spiders instead stalk and chase their prey like big cats and are able to leap forward up to 30 feet, lashing out with their forelimbs.

**Deep Spiders.** Sword spiders are native to the jungles of Mhair on the Chultan Peninsula in southwest Faerûn. Drow traders brought them to the Underdark where they were bred for use in battle under the control of Lolthite priestesses. These variants are called deep spiders and many have since escaped their pens and, with the ability to tolerate a wide range of climates, adapted quickly to their new subterranean homes. These creatures soon spread throughout the Underdark with many finding their way to the surface.