---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid/dwarf
- monster/environment/mountain
- monster/environment/underdark
aliases: ["Duergar Kavalrachni"]
statblock: true
"name": "Duergar Kavalrachni"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "14"
- !!int "11"
- !!int "14"
- !!int "11"
- !!int "10"
- !!int "9"
"speed": "walk 25 ft."
"damage_resistances": "poison"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Dwarvish, Undercommon"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the duergar hits a target with a melee attack while mounted, the mount\
    \ can use its reaction to make one melee attack against the same target."
  "name": "Cavalry Training"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The duergar has advantage on saving throws against spells and the [charmed](/rules/conditions.md#charmed),\
    \ [paralyzed](/rules/conditions.md#paralyzed), and [poisoned](/rules/conditions.md#poisoned)\
    \ conditions."
  "name": "Duergar Resilience"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the duergar has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The duergar makes two War Pick attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) piercing damage plus 5 (2d4) poison damage."
  "name": "War Pick"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit:\
    \ 5 (1d10) piercing damage."
  "name": "Heavy Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The duergar magically turns [invisible](/rules/conditions.md#invisible)\
    \ for up to 1 hour or until it attacks, it forces a creature to make a saving\
    \ throw, or its concentration is broken (as if concentrating on a spell). Any\
    \ equipment the duergar wears or carries is [invisible](/rules/conditions.md#invisible)\
    \ with it. While the [invisible](/rules/conditions.md#invisible) duergar is mounted,\
    \ the mount is [invisible](/rules/conditions.md#invisible) as well. The invisibility\
    \ ends early on the mount immediately after it attacks."
  "name": "Shared Invisibility (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "MTF"
name: Duergar Kavalrachni
image: "[[Duergar Kavalrachni.png]]"
---

# Duergar Kavalrachni

```statblock
"name": "Duergar Kavalrachni"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "14"
- !!int "11"
- !!int "14"
- !!int "11"
- !!int "10"
- !!int "9"
"speed": "walk 25 ft."
"damage_resistances": "poison"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Dwarvish, Undercommon"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the duergar hits a target with a melee attack while mounted, the mount\
    \ can use its reaction to make one melee attack against the same target."
  "name": "Cavalry Training"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The duergar has advantage on saving throws against spells and the [charmed](/rules/conditions.md#charmed),\
    \ [paralyzed](/rules/conditions.md#paralyzed), and [poisoned](/rules/conditions.md#poisoned)\
    \ conditions."
  "name": "Duergar Resilience"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the duergar has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The duergar makes two War Pick attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) piercing damage plus 5 (2d4) poison damage."
  "name": "War Pick"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit:\
    \ 5 (1d10) piercing damage."
  "name": "Heavy Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The duergar magically turns [invisible](/rules/conditions.md#invisible)\
    \ for up to 1 hour or until it attacks, it forces a creature to make a saving\
    \ throw, or its concentration is broken (as if concentrating on a spell). Any\
    \ equipment the duergar wears or carries is [invisible](/rules/conditions.md#invisible)\
    \ with it. While the [invisible](/rules/conditions.md#invisible) duergar is mounted,\
    \ the mount is [invisible](/rules/conditions.md#invisible) as well. The invisibility\
    \ ends early on the mount immediately after it attacks."
  "name": "Shared Invisibility (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "MTF"
"image": "[[Duergar Kavalrachni.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 107, Mordenkainen's Tome of Foes p. 189*

## Description

Kavalrachni are duergar cavalry trained to fight while riding [female steeders](/compendium/bestiary/monstrosity/female-steeder-mpmm.md) (in this book) or other Underdark creatures as mounts.

**Duergar.** > [!quote]- A quote from Mordenkainen  
> 
> Duergar architecture is remarkable for its brutalist grandeur. It is not a style I would use for my towers—I prefer gold, gems, and tracery—but I admire the boldness of dwarven stonework.

> [!quote]- A quote from Mordenkainen  
> 
> The mental power that duergar wield was given to them by illithids. But why would illithids create servants who could turn invisible or grow to ogre size?
> 
> Most likely because those servants would excel at herding their masters' other minions. In retrospect, it seems arguable that duergar escaped bondage because their jailers had given them the keys.

Duergar are dwarves of the deep reaches of the Underdark and other sunless realms. Their personalities and abilities have been deeply impacted by their ancestors' captivity and torment by mind flayers; they were infused with powerful psionic abilities but also a profound gloom. In some, this strain of sorrow inspires works of grand but melancholic beauty, while in others, it manifests as rage.

Like many who dwell in the Underdark, duergar must constantly be on guard against the raids and plots of their neighbors. To this end, duergar warriors fulfill a variety of combat roles, often marrying their fury in battle with their psionic abilities or training dangerous Underdark creatures as mounts.

Denigrated by some as joyless, duergar are in fact deeply passionate in all that they do—even if that passion rarely manifests as mirth. They bring an emotional intensity to their lives, whether they're exploring neighboring tunnels, defending their homes, engaging with their families, or crafting bold new works. The bonds of friendship and kinship are strong, though navigating the inevitable outbursts of frustration and despair is not always easy. Similarly, duergar tend to be very community-minded—in the Underdark, all must cooperate to survive.

Among the duergar of the Forgotten Realms, creation is a fiercely passionate process. They tend to favor works that are sturdy and grand, but in a bare, stripped-down fashion that favors geometric forms. The strongholds they design are blocky and stark, and the weapons they forge are blatantly tools of violence. While others may decry their creations as cold and bare of ornamentation to the point of austerity, duergar see them as honoring the materials used and honest about their purpose.

## Environment

mountain, underdark