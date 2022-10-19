---
cssclass: json5e-monster
tags:
- compendium/src/wdh
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Manshoon"]
statblock: true
"name": "Manshoon"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "126"
"hit_dice": "23d8 + 23"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "23"
- !!int "15"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "4"
  "Wisdom": !!int "9"
  "Intelligence": !!int "13"
  "Strength": !!int "2"
  "Constitution": !!int "3"
"skillsaves":
  "History": !!int "11"
  "Arcana": !!int "11"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Draconic, Goblin, Infernal, Orc, Undercommon"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Manshoon is an 18th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 21, +15 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [mage armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [mirror image](/compendium/spells/mirror-image.md),\
    \ [misty step](/compendium/spells/misty-step.md)\n\n3rd level (3 3rd-level slots):\
    \ [counterspell](/compendium/spells/counterspell.md), [lightning bolt](/compendium/spells/lightning-bolt.md),\
    \ [sending](/compendium/spells/sending.md)\n\n4th level (3 4th-level slots):\
    \ [fire shield](/compendium/spells/fire-shield.md), [greater invisibility](/compendium/spells/greater-invisibility.md),\
    \ [polymorph](/compendium/spells/polymorph.md)\n\n5th level (3 5th-level slots):\
    \ [Bigby's hand](/compendium/spells/bigbys-hand.md), [scrying](/compendium/spells/scrying.md),\
    \ [wall of force](/compendium/spells/wall-of-force.md)\n\n6th level (1 6th-level\
    \ slots): [flesh to stone](/compendium/spells/flesh-to-stone.md), [globe of\
    \ invulnerability](/compendium/spells/globe-of-invulnerability.md)\n\n7th level\
    \ (1 7th-level slots): [finger of death](/compendium/spells/finger-of-death.md),\
    \ [simulacrum](/compendium/spells/simulacrum.md)\n\n8th level (1 8th-level slots):\
    \ [feeblemind](/compendium/spells/feeblemind.md), [mind blank](/compendium/spells/mind-blank.md)\n\
    \n9th level (1 9th-level slots): [imprisonment](/compendium/spells/imprisonment.md),\
    \ [power word kill](/compendium/spells/power-word-kill.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Manshoon wears a black [robe of the archmagi](/compendium/items/robe-of-the-archmagi.md)\
    \ and wields a [staff of power](/compendium/items/staff-of-power.md) (both accounted\
    \ for in his statistics). Roll 2d10 to determine how many charges the staff has\
    \ remaining."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While wearing his robe of the archmagi, Manshoon has advantage on saving\
    \ throws against spells and other magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) bludgeoning damage."
  "name": "Metal Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage when used with two\
    \ hands. Manshoon can expend 1 of the staff's charges to deal an extra 3 (1d6)\
    \ force damage on a hit."
  "name": "Staff of Power"
"source":
- "WDH"
name: Manshoon
image: "[[Manshoon.png]]"
---

# Manshoon

```statblock
"name": "Manshoon"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "126"
"hit_dice": "23d8 + 23"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "23"
- !!int "15"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "4"
  "Wisdom": !!int "9"
  "Intelligence": !!int "13"
  "Strength": !!int "2"
  "Constitution": !!int "3"
"skillsaves":
  "History": !!int "11"
  "Arcana": !!int "11"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Draconic, Goblin, Infernal, Orc, Undercommon"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Manshoon is an 18th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 21, +15 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [mage armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [mirror image](/compendium/spells/mirror-image.md),\
    \ [misty step](/compendium/spells/misty-step.md)\n\n3rd level (3 3rd-level slots):\
    \ [counterspell](/compendium/spells/counterspell.md), [lightning bolt](/compendium/spells/lightning-bolt.md),\
    \ [sending](/compendium/spells/sending.md)\n\n4th level (3 4th-level slots):\
    \ [fire shield](/compendium/spells/fire-shield.md), [greater invisibility](/compendium/spells/greater-invisibility.md),\
    \ [polymorph](/compendium/spells/polymorph.md)\n\n5th level (3 5th-level slots):\
    \ [Bigby's hand](/compendium/spells/bigbys-hand.md), [scrying](/compendium/spells/scrying.md),\
    \ [wall of force](/compendium/spells/wall-of-force.md)\n\n6th level (1 6th-level\
    \ slots): [flesh to stone](/compendium/spells/flesh-to-stone.md), [globe of\
    \ invulnerability](/compendium/spells/globe-of-invulnerability.md)\n\n7th level\
    \ (1 7th-level slots): [finger of death](/compendium/spells/finger-of-death.md),\
    \ [simulacrum](/compendium/spells/simulacrum.md)\n\n8th level (1 8th-level slots):\
    \ [feeblemind](/compendium/spells/feeblemind.md), [mind blank](/compendium/spells/mind-blank.md)\n\
    \n9th level (1 9th-level slots): [imprisonment](/compendium/spells/imprisonment.md),\
    \ [power word kill](/compendium/spells/power-word-kill.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Manshoon wears a black [robe of the archmagi](/compendium/items/robe-of-the-archmagi.md)\
    \ and wields a [staff of power](/compendium/items/staff-of-power.md) (both accounted\
    \ for in his statistics). Roll 2d10 to determine how many charges the staff has\
    \ remaining."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While wearing his robe of the archmagi, Manshoon has advantage on saving\
    \ throws against spells and other magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) bludgeoning damage."
  "name": "Metal Fist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage when used with two\
    \ hands. Manshoon can expend 1 of the staff's charges to deal an extra 3 (1d6)\
    \ force damage on a hit."
  "name": "Staff of Power"
"source":
- "WDH"
"image": "[[Manshoon.png]]"
```
^statblock

*Source: Waterdeep: Dragon Heist p. 209*

## Description

Referred to in this adventure simply as "Manshoon," this clone of the ancient archwizard infiltrated Waterdeep years ago and has been hiding out in Kolat Towers ever since, in the city's Southern Ward.

The original Manshoon was one of the founders of the Zhentarim. Evil to the core, he made enemies all across Faerûn, including other powerful spellcasters such as Khelben Arunsun and Elminster. Fearing that he might be destroyed by his foes, Manshoon magically crafted several clones-but a mishap caused all of them to be awakened at once, whereupon they tried to destroy one another in a series of conflicts that came to be known as the Manshoon Wars.

Now the original Manshoon is dead, and it's widely believed that all his clones were destroyed as well. In fact, at least three are still alive. The one presently in Waterdeep escaped death by hiding out in Undermountain, where he eventually ran afoul of Halaster Blackcloak. After a brief spell duel, Halaster captured Manshoon and amputated his left arm at the elbow for reasons unknown. Manshoon escaped imprisonment and fled Undermountain, taking refuge in the city above. Attempts to magically regenerate his severed limb failed, forcing him to craft an artificial arm and hand for himself.

Manshoon took control of Kolat Towers, a crumbling residence in the Southern Ward that was abandoned years ago by the two wizards who built it. The edifice is surrounded by a magical barrier that has the properties of a wall of force. Manshoon rarely leaves the towers and uses a teleportation circle when he must do so, and thus is never seen entering or leaving.

Manshoon aims to rule Waterdeep and replace the City Watch with Black Network mercenaries that are loyal to him alone. By bribing and blackmailing the Masked Lords, he hopes to oust Laeral Silverhand as Open Lord and take her place, kill the Blackstaff, reduce the Masked Lords to mere vassals, and declare himself the Wizard-King of Waterdeep. Once the city is firmly in his clutches, Manshoon will then turn his attention toward Undermountain, destroy Halaster once and for all, and claim the dungeon's riches.

**Manshoon Simulacrum.** Manshoon uses the [simulacrum](/compendium/spells/simulacrum.md) spell to create a magical duplicate of himself as needed. He has customized the spell to increase his simulacrum's hit points at the expense of its spellcasting ability.

Manshoon can have only one simulacrum at any given time, and he uses it as a subordinate to command his Zhentarim minions in the field. If his simulacrum is destroyed, Manshoon creates another. Each simulacrum has the statistics of Manshoon, with these changes:

- The simulacrum has no special equipment. Consequently, it has AC 12 and lacks the Magic Resistance trait and the Staff of Power action option.
- It loses all spell slots of 6th level and higher.
- It has a challenge rating of 8 (3,900 XP).