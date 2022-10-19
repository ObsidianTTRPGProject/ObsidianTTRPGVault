---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/large
- monster/type/monstrosity
aliases: ["Muiral"]
statblock: true
"name": "Muiral"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "195"
"hit_dice": "23d10 + 69"
"stats":
- !!int "19"
- !!int "11"
- !!int "16"
- !!int "18"
- !!int "13"
- !!int "18"
"speed": "walk 50 ft."
"saves":
  "Intelligence": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Athletics": !!int "9"
  "Stealth": !!int "5"
  "Perception": !!int "6"
  "Arcana": !!int "9"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Common, Dwarvish, Elvish, Goblin, Undercommon"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Muiral is a 13th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 17, +9 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st level (4 1st-level slots): [expeditious retreat](/compendium/spells/expeditious-retreat.md),\
    \ [fog cloud](/compendium/spells/fog-cloud.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [darkness](/compendium/spells/darkness.md), [knock](/compendium/spells/knock.md),\
    \ [see invisibility](/compendium/spells/see-invisibility.md), [spider climb](/compendium/spells/spider-climb.md)\n\
    \n3rd level (3 3rd-level slots): [animate dead](/compendium/spells/animate-dead.md),\
    \ [counterspell](/compendium/spells/counterspell.md), [lightning bolt](/compendium/spells/lightning-bolt.md)\n\
    \n4th level (3 4th-level slots): [greater invisibility](/compendium/spells/greater-invisibility.md),\
    \ [polymorph](/compendium/spells/polymorph.md)\n\n5th level (2 5th-level slots):\
    \ [animate objects](/compendium/spells/animate-objects.md), [wall of force](/compendium/spells/wall-of-force.md)\n\
    \n6th level (1 6th-level slots): [create undead](/compendium/spells/create-undead.md),\
    \ [flesh to stone](/compendium/spells/flesh-to-stone.md)\n\n7th level (1 7th-level\
    \ slots): [finger of death](/compendium/spells/finger-of-death.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Muiral fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Muiral makes three attacks: two with his longsword and one with his sting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage, or 15 (2d10 + 4) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 9 (1d10\
    \ + 4) piercing damage. The target must make a DC 16 Constitution saving throw,\
    \ taking 27 (6d8) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Sting"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Muiral casts a cantrip."
  "name": "Cast Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Muiral makes one longsword attack that has a reach of 10 feet."
  "name": "Lunging Attack (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Muiral moves up to his speed without provoking opportunity attacks. Before\
    \ the move, he can make one longsword attack."
  "name": "Retreating Strike (Costs 3 Actions)"
"source":
- "WDMM"
name: Muiral
image: "[[Muiral.png]]"
---

# Muiral

```statblock
"name": "Muiral"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "195"
"hit_dice": "23d10 + 69"
"stats":
- !!int "19"
- !!int "11"
- !!int "16"
- !!int "18"
- !!int "13"
- !!int "18"
"speed": "walk 50 ft."
"saves":
  "Intelligence": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Athletics": !!int "9"
  "Stealth": !!int "5"
  "Perception": !!int "6"
  "Arcana": !!int "9"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Common, Dwarvish, Elvish, Goblin, Undercommon"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Muiral is a 13th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 17, +9 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st level (4 1st-level slots): [expeditious retreat](/compendium/spells/expeditious-retreat.md),\
    \ [fog cloud](/compendium/spells/fog-cloud.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [darkness](/compendium/spells/darkness.md), [knock](/compendium/spells/knock.md),\
    \ [see invisibility](/compendium/spells/see-invisibility.md), [spider climb](/compendium/spells/spider-climb.md)\n\
    \n3rd level (3 3rd-level slots): [animate dead](/compendium/spells/animate-dead.md),\
    \ [counterspell](/compendium/spells/counterspell.md), [lightning bolt](/compendium/spells/lightning-bolt.md)\n\
    \n4th level (3 4th-level slots): [greater invisibility](/compendium/spells/greater-invisibility.md),\
    \ [polymorph](/compendium/spells/polymorph.md)\n\n5th level (2 5th-level slots):\
    \ [animate objects](/compendium/spells/animate-objects.md), [wall of force](/compendium/spells/wall-of-force.md)\n\
    \n6th level (1 6th-level slots): [create undead](/compendium/spells/create-undead.md),\
    \ [flesh to stone](/compendium/spells/flesh-to-stone.md)\n\n7th level (1 7th-level\
    \ slots): [finger of death](/compendium/spells/finger-of-death.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Muiral fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Muiral makes three attacks: two with his longsword and one with his sting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage, or 15 (2d10 + 4) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 9 (1d10\
    \ + 4) piercing damage. The target must make a DC 16 Constitution saving throw,\
    \ taking 27 (6d8) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Sting"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Muiral casts a cantrip."
  "name": "Cast Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Muiral makes one longsword attack that has a reach of 10 feet."
  "name": "Lunging Attack (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Muiral moves up to his speed without provoking opportunity attacks. Before\
    \ the move, he can make one longsword attack."
  "name": "Retreating Strike (Costs 3 Actions)"
"source":
- "WDMM"
"image": "[[Muiral.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 314*

## Description

Muiral was an accomplished human warrior who long served as Halaster's bodyguard. His descent into madness began when he asked the Mad Mage to tutor him in the wizardly arts. Muiral learned enough magic to transform himself into a half-scorpion monstrosity, becoming known as Muiral the Misshapen. He then retired to the level of Undermountain that would later be called Muiral's Gauntlet, driving out and slaying its original drow denizens. Muiral now spends his days hunting adventurers and other interlopers for fun. Long years alone—and Halaster's influence—have rendered him utterly insane.