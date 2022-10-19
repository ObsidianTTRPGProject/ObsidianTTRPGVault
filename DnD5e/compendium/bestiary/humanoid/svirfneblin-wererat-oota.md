---
cssclass: json5e-monster
tags:
- compendium/src/oota
- monster/size/small
- monster/type/humanoid/gnome
- monster/environment/forest
- monster/environment/urban
aliases: ["Svirfneblin Wererat"]
statblock: true
"name": "Svirfneblin Wererat"
"size": "Small"
"type": "humanoid"
"subtype": "gnome"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "10"
- !!int "15"
- !!int "12"
- !!int "11"
- !!int "10"
- !!int "8"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "darkvision 60 ft. (rat form only), darkvision 120 ft., passive Perception\
  \ 12"
"languages": "Common (can't speak in rat form), Gnomish, Terran, Undercommon"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The svirfneblin wererat's innate spellcasting ability is Intelligence (spell\
    \ save DC 10). The svirfneblin wererat can innately cast the following spells,\
    \ requiring no material components:\n\nAt will: [nondetection](/compendium/spells/nondetection.md)\
    \ (self only)\n\n1/day each: [blindness/deafness](/compendium/spells/blindness-deafness.md),\
    \ [blur](/compendium/spells/blur.md), [disguise self](/compendium/spells/disguise-self.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wererat can use its action to polymorph into a rat-humanoid hybrid\
    \ or into a giant rat, or back into its true form, which is humanoid. Its statistics,\
    \ other than its size, are the same in each form. Any equipment it is wearing\
    \ or carrying isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wererat has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The svirfneblin wererat has advantage on all Intelligence, Wisdom, and\
    \ Charisma saving throws against magic."
  "name": "Gnome Cunning"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wererat makes two attacks, only one of which can be a bite."
  "name": "Multiattack (Humanoid or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 11\
    \ Constitution saving throw or be cursed with wererat lycanthropy."
  "name": "Bite (Rat or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword (Humanoid or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Hand Crossbow (Humanoid or Hybrid Form Only)"
"source":
- "OotA"
name: Svirfneblin Wererat
image: "[[Svirfneblin Wererat.png]]"
---

# Svirfneblin Wererat

```statblock
"name": "Svirfneblin Wererat"
"size": "Small"
"type": "humanoid"
"subtype": "gnome"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "10"
- !!int "15"
- !!int "12"
- !!int "11"
- !!int "10"
- !!int "8"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "darkvision 60 ft. (rat form only), darkvision 120 ft., passive Perception\
  \ 12"
"languages": "Common (can't speak in rat form), Gnomish, Terran, Undercommon"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The svirfneblin wererat's innate spellcasting ability is Intelligence (spell\
    \ save DC 10). The svirfneblin wererat can innately cast the following spells,\
    \ requiring no material components:\n\nAt will: [nondetection](/compendium/spells/nondetection.md)\
    \ (self only)\n\n1/day each: [blindness/deafness](/compendium/spells/blindness-deafness.md),\
    \ [blur](/compendium/spells/blur.md), [disguise self](/compendium/spells/disguise-self.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wererat can use its action to polymorph into a rat-humanoid hybrid\
    \ or into a giant rat, or back into its true form, which is humanoid. Its statistics,\
    \ other than its size, are the same in each form. Any equipment it is wearing\
    \ or carrying isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wererat has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The svirfneblin wererat has advantage on all Intelligence, Wisdom, and\
    \ Charisma saving throws against magic."
  "name": "Gnome Cunning"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wererat makes two attacks, only one of which can be a bite."
  "name": "Multiattack (Humanoid or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 11\
    \ Constitution saving throw or be cursed with wererat lycanthropy."
  "name": "Bite (Rat or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword (Humanoid or Hybrid Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Hand Crossbow (Humanoid or Hybrid Form Only)"
"source":
- "OotA"
"image": "[[Svirfneblin Wererat.png]]"
```
^statblock

*Source: Out of the Abyss p. 97*

## Environment

forest, urban