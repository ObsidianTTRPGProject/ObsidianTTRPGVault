---
cssclass: json5e-monster
tags:
- compendium/src/hotdq
- monster/size/medium
- monster/type/humanoid/bullywug
aliases: ["Pharblex Spattergoo"]
statblock: true
"name": "Pharblex Spattergoo"
"size": "Medium"
"type": "humanoid"
"subtype": "bullywug"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "59"
"hit_dice": "7d8 + 28"
"stats":
- !!int "15"
- !!int "12"
- !!int "18"
- !!int "11"
- !!int "16"
- !!int "7"
"speed": "walk 20 ft., swim 40 ft."
"saves":
  "Strength": !!int "4"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "3"
  "Religion": !!int "2"
  "Perception": !!int "5"
"senses": "passive Perception 15"
"languages": "Common, Bullywug"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pharblex is a 6th-level spellcaster that uses Wisdom as his spellcasting\
    \ ability (spell save DC 13, +5 to hit with spell attacks). Pharblex has the following\
    \ spells prepared from the druid spell list:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [guidance](/compendium/spells/guidance.md), [poison spray](/compendium/spells/poison-spray.md)\n\
    \n1st level (4 1st-level slots): [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [entangle](/compendium/spells/entangle.md), [healing word](/compendium/spells/healing-word.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)\n\n2nd level (3 2nd-level\
    \ slots): [barkskin](/compendium/spells/barkskin.md), [beast sense](/compendium/spells/beast-sense.md),\
    \ [spike growth](/compendium/spells/spike-growth.md)\n\n3rd level (3 3rd-level\
    \ slots): [plant growth](/compendium/spells/plant-growth.md), [water walk](/compendium/spells/water-walk.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pharblex can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once per turn, when Pharblex hits with a melee attack, he can expend a\
    \ use of this trait to deal an extra 9 (2d8) poison damage."
  "name": "Poison Strike (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As part of his movement and without a running start, Pharblex can long\
    \ jump up to 20 feet and high jump up to 10 feet."
  "name": "Standing Leap"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pharblex has advantage on Dexterity ([Stealth](/rules/skills.md#Stealth))\
    \ checks made to hide in swampy terrain."
  "name": "Swamp Camouflage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pharblex attacks twice. Once with his bite and once with his spear."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit. reach 5 ft. or ranged 20/60\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage."
  "name": "Spear"
"source":
- "HotDQ"
- "ToD"
name: Pharblex Spattergoo
image: "[[Pharblex Spattergoo.png]]"
---

# Pharblex Spattergoo

```statblock
"name": "Pharblex Spattergoo"
"size": "Medium"
"type": "humanoid"
"subtype": "bullywug"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "59"
"hit_dice": "7d8 + 28"
"stats":
- !!int "15"
- !!int "12"
- !!int "18"
- !!int "11"
- !!int "16"
- !!int "7"
"speed": "walk 20 ft., swim 40 ft."
"saves":
  "Strength": !!int "4"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "3"
  "Religion": !!int "2"
  "Perception": !!int "5"
"senses": "passive Perception 15"
"languages": "Common, Bullywug"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pharblex is a 6th-level spellcaster that uses Wisdom as his spellcasting\
    \ ability (spell save DC 13, +5 to hit with spell attacks). Pharblex has the following\
    \ spells prepared from the druid spell list:\n\nCantrips (at will): [druidcraft](/compendium/spells/druidcraft.md),\
    \ [guidance](/compendium/spells/guidance.md), [poison spray](/compendium/spells/poison-spray.md)\n\
    \n1st level (4 1st-level slots): [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [entangle](/compendium/spells/entangle.md), [healing word](/compendium/spells/healing-word.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)\n\n2nd level (3 2nd-level\
    \ slots): [barkskin](/compendium/spells/barkskin.md), [beast sense](/compendium/spells/beast-sense.md),\
    \ [spike growth](/compendium/spells/spike-growth.md)\n\n3rd level (3 3rd-level\
    \ slots): [plant growth](/compendium/spells/plant-growth.md), [water walk](/compendium/spells/water-walk.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pharblex can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once per turn, when Pharblex hits with a melee attack, he can expend a\
    \ use of this trait to deal an extra 9 (2d8) poison damage."
  "name": "Poison Strike (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As part of his movement and without a running start, Pharblex can long\
    \ jump up to 20 feet and high jump up to 10 feet."
  "name": "Standing Leap"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pharblex has advantage on Dexterity ([Stealth](/rules/skills.md#Stealth))\
    \ checks made to hide in swampy terrain."
  "name": "Swamp Camouflage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Pharblex attacks twice. Once with his bite and once with his spear."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit. reach 5 ft. or ranged 20/60\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage."
  "name": "Spear"
"source":
- "HotDQ"
- "ToD"
"image": "[[Pharblex Spattergoo.png]]"
```
^statblock

*Source: Hoard of the Dragon Queen p. 91, Tyranny of Dragons p. 187*