---
cssclass: json5e-monster
tags:
- compendium/src/mff
- monster/size/medium
- monster/type/undead
aliases: ["Eye of Fear and Flame"]
statblock: true
"name": "Eye of Fear and Flame"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "16"
- !!int "14"
- !!int "18"
- !!int "18"
- !!int "17"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "7"
  "Strength": !!int "7"
  "Constitution": !!int "8"
"skillsaves":
  "Perception": !!int "7"
"damage_resistances": "necrotic, psychic"
"damage_immunities": "poison"
"condition_immunities": "blinded, charmed, exhaustion, frightened, paralyzed, poisoned,\
  \ stunned"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "Common, all languages known by any creature within 30 feet of it"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eye of fear and flame's innate spellcasting ability is Intelligence\
    \ (spell save DC 16). It can innately cast the following spells, requiring no\
    \ components:\n\nAt will: [detect evil and good](/compendium/spells/detect-evil-and-good.md),\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md)\n\n1/day each:\
    \ [etherealness](/compendium/spells/etherealness.md), [true seeing](/compendium/spells/true-seeing.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eye of fear and flame is immune to effects that turn undead."
  "name": "Turn Immunity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eye of fear and flame makes two claw attacks and uses its Gemstone\
    \ Eyes."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d12\
    \ + 3) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eye of fear and flame shoots one of the following magical eye rays,\
    \ choosing one target it can see within 90 feet of it.\n\n- Eye of Fear. The\
    \ target and up to four other creatures of the eye of fear and flame's choice\
    \ within 10 feet of the target must each succeed on a DC 16 Wisdom saving throw\
    \ or be [frightened](/rules/conditions.md#frightened) for 1 minute. An affected\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success.\n- Eye of Flame. The target must make\
    \ a DC 16 Dexterity saving throw. On a failed save, the target takes 44 (8d10)\
    \ fire damage, and if it is a creature or a flammable object, it ignites. On a\
    \ successful save, the target takes half as much damage and does not ignite. A\
    \ target that ignites takes 5 (1d10) fire damage at the start of each of its turns\
    \ until a creature takes an action to douse the fire."
  "name": "Gemstone Eyes"
"source":
- "MFF"
- "IMR"
name: Eye of Fear and Flame
image: "[[Eye of Fear and Flame.png]]"
---

# Eye of Fear and Flame

```statblock
"name": "Eye of Fear and Flame"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "16"
- !!int "14"
- !!int "18"
- !!int "18"
- !!int "17"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "7"
  "Strength": !!int "7"
  "Constitution": !!int "8"
"skillsaves":
  "Perception": !!int "7"
"damage_resistances": "necrotic, psychic"
"damage_immunities": "poison"
"condition_immunities": "blinded, charmed, exhaustion, frightened, paralyzed, poisoned,\
  \ stunned"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "Common, all languages known by any creature within 30 feet of it"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eye of fear and flame's innate spellcasting ability is Intelligence\
    \ (spell save DC 16). It can innately cast the following spells, requiring no\
    \ components:\n\nAt will: [detect evil and good](/compendium/spells/detect-evil-and-good.md),\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md)\n\n1/day each:\
    \ [etherealness](/compendium/spells/etherealness.md), [true seeing](/compendium/spells/true-seeing.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eye of fear and flame is immune to effects that turn undead."
  "name": "Turn Immunity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eye of fear and flame makes two claw attacks and uses its Gemstone\
    \ Eyes."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d12\
    \ + 3) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The eye of fear and flame shoots one of the following magical eye rays,\
    \ choosing one target it can see within 90 feet of it.\n\n- Eye of Fear. The\
    \ target and up to four other creatures of the eye of fear and flame's choice\
    \ within 10 feet of the target must each succeed on a DC 16 Wisdom saving throw\
    \ or be [frightened](/rules/conditions.md#frightened) for 1 minute. An affected\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success.\n- Eye of Flame. The target must make\
    \ a DC 16 Dexterity saving throw. On a failed save, the target takes 44 (8d10)\
    \ fire damage, and if it is a creature or a flammable object, it ignites. On a\
    \ successful save, the target takes half as much damage and does not ignite. A\
    \ target that ignites takes 5 (1d10) fire damage at the start of each of its turns\
    \ until a creature takes an action to douse the fire."
  "name": "Gemstone Eyes"
"source":
- "MFF"
- "IMR"
"image": "[[Eye of Fear and Flame.png]]"
```
^statblock

*Source: Mordenkainen's Fiendish Folio p. 8, Infernal Machine Rebuild*

## Description

An eye of fear and flame stalks the world of the living, commanding individuals to perform evil deeds of the undead's choosing or be destroyed. If its commands are not obeyed, an eye of fear and flame throws back its hood to reveal its skull—set with gems of red and black in each eye socket—then attacks.

**Spectral Visage.** An eye of fear and flame resembles a hooded, skeletal humanoid figure. The interior of its hood cannot be seen except as an opaque black void. Ominous tales speak of these creatures prowling city streets in the darkest nights and during times of unease and unrest. It is said that eyes of fear and flame were created by chaotic gods to foment the destruction of lawful creatures, or by lawful gods for the testing of their followers. Rumors state that only twenty of these creatures exist, but much of the truth about them remains unknown.

**Cruel Puppet Masters.** An eye of fear and flame often chooses to appear during times of uncertainty, such as after a group's devastating defeat or when an individual contemplates some momentous decision. The undead seeks to corrupt vulnerable individuals, especially those of lawful or good alignments, by setting tasks that test its targets' moral foundations. A paladin might be ordered to murder an innocent, with the argument that not doing so will result in some greater evil taking place. Ultimately, the success or failure of the task is of less interest to the eye of fear and flame than the instigation of the evil act—and the general spread of chaos and misery that comes with it.

**Mystic Gemstones.** An eye of fear and flame casts its magic powers through its gemstone eyes. In combat, it targets not only its opponents but also innocent bystanders, seeking to cause the greatest amount of confusion and destruction. If the creature is destroyed, these gems can be recovered, though they are treated as dangerous, cursed trophies akin to a demilich's soul gems. Still, they might be sold to certain discerning—and brazen—collectors.