---
cssclass: json5e-monster
tags:
- compendium/src/lr
- monster/size/medium
- monster/type/humanoid
aliases: ["Gar Shatterkeel"]
statblock: true
"name": "Gar Shatterkeel"
"size": "Medium"
"type": "humanoid"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"stats":
- !!int "16"
- !!int "16"
- !!int "18"
- !!int "12"
- !!int "20"
- !!int "14"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Nature": !!int "11"
  "Perception": !!int "10"
  "Survival": !!int "10"
"damage_resistances": "cold"
"senses": "passive Perception 20"
"languages": "Aquan, Common"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar is a 13th-level spellcaster. His spellcasting ability is Wisdom (spell\
    \ save DC 18, +10 to hit with spell attacks). He has the following druid spells\
    \ prepared:\n\nCantrips (at will): [frostbite](/compendium/spells/frostbite-xge.md),\
    \ [mending](/compendium/spells/mending.md), [resistance](/compendium/spells/resistance.md),\
    \ [shape water](/compendium/spells/shape-water-xge.md), [thunderclap](/compendium/spells/thunderclap-xge.md)\n\
    \n1st level (4 1st-level slots): [create or destroy water](/compendium/spells/create-or-destroy-water.md),\
    \ [charm person](/compendium/spells/charm-person.md), [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)\n\n2nd level (3 2nd-level\
    \ slots): [darkvision](/compendium/spells/darkvision.md), [hold person](/compendium/spells/hold-person.md),\
    \ [mirror image](/compendium/spells/mirror-image.md), [misty step](/compendium/spells/misty-step.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md), [protection\
    \ from poison](/compendium/spells/protection-from-poison.md)\n\n3rd level (3\
    \ 3rd-level slots): [conjure animals](/compendium/spells/conjure-animals.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [tidal wave](/compendium/spells/tidal-wave-xge.md),\
    \ [water breathing](/compendium/spells/water-breathing.md), [water walk](/compendium/spells/water-walk.md)\n\
    \n4th level (3 4th-level slots): [charm monster](/compendium/spells/charm-monster-xge.md),\
    \ [control water](/compendium/spells/control-water.md), [dominate beast](/compendium/spells/dominate-beast.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md), [watery sphere](/compendium/spells/watery-sphere-xge.md)\n\
    \n5th level (2 5th-level slots): [conjure elemental](/compendium/spells/conjure-elemental.md),\
    \ [maelstrom](/compendium/spells/maelstrom-xge.md), [scrying](/compendium/spells/scrying.md),\
    \ [tree stride](/compendium/spells/tree-stride.md)\n\n6th level (1 6th-level\
    \ slots): [heal](/compendium/spells/heal.md)\n\n7th level (1 7th-level slots):\
    \ [plane shift](/compendium/spells/plane-shift.md)\nCircle spells don't count\
    \ against spells prepared."
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Gar fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar can stand and move on liquid surfaces as if they were solid ground."
  "name": "Water Walk"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Gar drops to 0 hit points, his body collapses into a pool of inky\
    \ water that rapidly disperses. Except for [Wave](/compendium/items/wave.md) and\
    \ his claw, anything he was wearing or carrying is left behind."
  "name": "Watery Fall"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar makes two melee attacks, one with his claw and one with [Wave](/compendium/items/wave.md)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16). Until the grapple ends, Gar can't attack other creatures with\
    \ his claw."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +11 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 9 (1d6 + 6) piercing damage or 10 (1d8 + 6) piercing damage\
    \ when used with two hands. If Gar scores a critical hit with this weapon, the\
    \ target takes extra necrotic damage equal to half its hit point maximum."
  "name": "Wave"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Power ripples out in a 60-foot radius sphere from a point within range\
    \ (150 ft.) as the will of Umberlee affects all in her watery embrace. Each creature\
    \ in that area must succeed on a DC 18 Constitution saving throw. On a failed\
    \ save, the creature can't use reactions, its speed is halved, and it can't make\
    \ more than one attack on its turn. In addition, the creature can use either an\
    \ action or a bonus action on its turn, but not both. These effects last for 1\
    \ minute. The creature can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself with a successful save. This only affects targets\
    \ that are submerged or floating in water. Gar Shatterkeel and any undead serving\
    \ him are immune to this effect."
  "name": "Umberlee's Wake (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar moves up to his speed without provoking opportunity attacks."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar makes one attack with his claw."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar makes one attack with [Wave](/compendium/items/wave.md) with advantage."
  "name": "Wave (Costs 2 Actions)"
"source":
- "LR"
name: Gar Shatterkeel
image: "[[Gar Shatterkeel.png]]"
---

# Gar Shatterkeel

```statblock
"name": "Gar Shatterkeel"
"size": "Medium"
"type": "humanoid"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"stats":
- !!int "16"
- !!int "16"
- !!int "18"
- !!int "12"
- !!int "20"
- !!int "14"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Nature": !!int "11"
  "Perception": !!int "10"
  "Survival": !!int "10"
"damage_resistances": "cold"
"senses": "passive Perception 20"
"languages": "Aquan, Common"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar is a 13th-level spellcaster. His spellcasting ability is Wisdom (spell\
    \ save DC 18, +10 to hit with spell attacks). He has the following druid spells\
    \ prepared:\n\nCantrips (at will): [frostbite](/compendium/spells/frostbite-xge.md),\
    \ [mending](/compendium/spells/mending.md), [resistance](/compendium/spells/resistance.md),\
    \ [shape water](/compendium/spells/shape-water-xge.md), [thunderclap](/compendium/spells/thunderclap-xge.md)\n\
    \n1st level (4 1st-level slots): [create or destroy water](/compendium/spells/create-or-destroy-water.md),\
    \ [charm person](/compendium/spells/charm-person.md), [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)\n\n2nd level (3 2nd-level\
    \ slots): [darkvision](/compendium/spells/darkvision.md), [hold person](/compendium/spells/hold-person.md),\
    \ [mirror image](/compendium/spells/mirror-image.md), [misty step](/compendium/spells/misty-step.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md), [protection\
    \ from poison](/compendium/spells/protection-from-poison.md)\n\n3rd level (3\
    \ 3rd-level slots): [conjure animals](/compendium/spells/conjure-animals.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [tidal wave](/compendium/spells/tidal-wave-xge.md),\
    \ [water breathing](/compendium/spells/water-breathing.md), [water walk](/compendium/spells/water-walk.md)\n\
    \n4th level (3 4th-level slots): [charm monster](/compendium/spells/charm-monster-xge.md),\
    \ [control water](/compendium/spells/control-water.md), [dominate beast](/compendium/spells/dominate-beast.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md), [watery sphere](/compendium/spells/watery-sphere-xge.md)\n\
    \n5th level (2 5th-level slots): [conjure elemental](/compendium/spells/conjure-elemental.md),\
    \ [maelstrom](/compendium/spells/maelstrom-xge.md), [scrying](/compendium/spells/scrying.md),\
    \ [tree stride](/compendium/spells/tree-stride.md)\n\n6th level (1 6th-level\
    \ slots): [heal](/compendium/spells/heal.md)\n\n7th level (1 7th-level slots):\
    \ [plane shift](/compendium/spells/plane-shift.md)\nCircle spells don't count\
    \ against spells prepared."
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Gar fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar can stand and move on liquid surfaces as if they were solid ground."
  "name": "Water Walk"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Gar drops to 0 hit points, his body collapses into a pool of inky\
    \ water that rapidly disperses. Except for [Wave](/compendium/items/wave.md) and\
    \ his claw, anything he was wearing or carrying is left behind."
  "name": "Watery Fall"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar makes two melee attacks, one with his claw and one with [Wave](/compendium/items/wave.md)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16). Until the grapple ends, Gar can't attack other creatures with\
    \ his claw."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +11 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 9 (1d6 + 6) piercing damage or 10 (1d8 + 6) piercing damage\
    \ when used with two hands. If Gar scores a critical hit with this weapon, the\
    \ target takes extra necrotic damage equal to half its hit point maximum."
  "name": "Wave"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Power ripples out in a 60-foot radius sphere from a point within range\
    \ (150 ft.) as the will of Umberlee affects all in her watery embrace. Each creature\
    \ in that area must succeed on a DC 18 Constitution saving throw. On a failed\
    \ save, the creature can't use reactions, its speed is halved, and it can't make\
    \ more than one attack on its turn. In addition, the creature can use either an\
    \ action or a bonus action on its turn, but not both. These effects last for 1\
    \ minute. The creature can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself with a successful save. This only affects targets\
    \ that are submerged or floating in water. Gar Shatterkeel and any undead serving\
    \ him are immune to this effect."
  "name": "Umberlee's Wake (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar moves up to his speed without provoking opportunity attacks."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar makes one attack with his claw."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar makes one attack with [Wave](/compendium/items/wave.md) with advantage."
  "name": "Wave (Costs 2 Actions)"
"source":
- "LR"
"image": "[[Gar Shatterkeel.png]]"
```
^statblock

*Source: Locathah Rising p. 18*