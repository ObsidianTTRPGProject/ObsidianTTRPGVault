---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/humanoid/dwarf
- monster/environment/mountain
- monster/environment/underdark
aliases: ["Duergar Soulblade"]
statblock: true
"name": "Duergar Soulblade"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "27"
"hit_dice": "6d8"
"stats":
- !!int "16"
- !!int "16"
- !!int "10"
- !!int "11"
- !!int "10"
- !!int "12"
"speed": "walk 25 ft."
"damage_resistances": "poison"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Dwarvish, Undercommon"
"cr": "1"
"traits":
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
  "desc": "Melee Spell Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) force damage, or 13 (3d6 + 3) force damage while under the effect of Enlarge."
  "name": "Soulblade"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The duergar magically turns [invisible](/rules/conditions.md#invisible)\
    \ for up to 1 hour or until it attacks, it forces a creature to make a saving\
    \ throw, or its concentration is broken (as if concentrating on a spell). Any\
    \ equipment the duergar wears or carries is [invisible](/rules/conditions.md#invisible)\
    \ with it."
  "name": "Invisibility (Recharges after a Short or Long Rest)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For 1 minute, the duergar magically increases in size, along with anything\
    \ it is wearing or carrying. While enlarged, the duergar is Large, doubles its\
    \ damage dice on Strength-based weapon attacks (included in the attacks), and\
    \ makes Strength checks and Strength saving throws with advantage. If the duergar\
    \ lacks the room to become Large, it attains the maximum size possible in the\
    \ space available."
  "name": "Enlarge (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "MTF"
name: Duergar Soulblade
image: "[[Duergar Soulblade.png]]"
---

# Duergar Soulblade

```statblock
"name": "Duergar Soulblade"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "27"
"hit_dice": "6d8"
"stats":
- !!int "16"
- !!int "16"
- !!int "10"
- !!int "11"
- !!int "10"
- !!int "12"
"speed": "walk 25 ft."
"damage_resistances": "poison"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Dwarvish, Undercommon"
"cr": "1"
"traits":
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
  "desc": "Melee Spell Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) force damage, or 13 (3d6 + 3) force damage while under the effect of Enlarge."
  "name": "Soulblade"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The duergar magically turns [invisible](/rules/conditions.md#invisible)\
    \ for up to 1 hour or until it attacks, it forces a creature to make a saving\
    \ throw, or its concentration is broken (as if concentrating on a spell). Any\
    \ equipment the duergar wears or carries is [invisible](/rules/conditions.md#invisible)\
    \ with it."
  "name": "Invisibility (Recharges after a Short or Long Rest)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "For 1 minute, the duergar magically increases in size, along with anything\
    \ it is wearing or carrying. While enlarged, the duergar is Large, doubles its\
    \ damage dice on Strength-based weapon attacks (included in the attacks), and\
    \ makes Strength checks and Strength saving throws with advantage. If the duergar\
    \ lacks the room to become Large, it attains the maximum size possible in the\
    \ space available."
  "name": "Enlarge (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "MTF"
"image": "[[Duergar Soulblade.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 109, Mordenkainen's Tome of Foes p. 190*

## Description

Soulblades are duergar combatants whose mastery of psionics allows them to manifest blades of psychic energy to slice apart their foes.

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