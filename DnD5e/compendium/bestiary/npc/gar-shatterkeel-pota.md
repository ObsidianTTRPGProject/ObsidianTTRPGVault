---
cssclass: json5e-monster
tags:
- compendium/src/pota
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Gar Shatterkeel"]
statblock: true
"name": "Gar Shatterkeel"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "97"
"hit_dice": "15d8 + 45"
"stats":
- !!int "15"
- !!int "15"
- !!int "16"
- !!int "12"
- !!int "18"
- !!int "13"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Nature": !!int "9"
  "Survival": !!int "8"
"damage_resistances": "cold"
"senses": "passive Perception 14"
"languages": "Aquan, Common"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar is a 9th-level spellcaster. His spellcasting ability is Wisdom (spell\
    \ save DC 16, +8 to hit with spell attacks). He has the following druid spells\
    \ prepared:\n\nCantrips (at will): [mending](/compendium/spells/mending.md),\
    \ [resistance](/compendium/spells/resistance.md), [shape water](/compendium/spells/shape-water-xge.md)\n\
    \n1st level (4 1st-level slots): [create or destroy water](/compendium/spells/create-or-destroy-water.md),\
    \ [cure wounds](/compendium/spells/cure-wounds.md), [fog cloud](/compendium/spells/fog-cloud.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)\n\n2nd level (3 2nd-level\
    \ slots): [darkvision](/compendium/spells/darkvision.md), [hold person](/compendium/spells/hold-person.md),\
    \ [protection from poison](/compendium/spells/protection-from-poison.md)\n\n3rd\
    \ level (3 3rd-level slots): [call lightning](/compendium/spells/call-lightning.md),\
    \ [sleet storm](/compendium/spells/sleet-storm.md), [tidal wave](/compendium/spells/tidal-wave-xge.md)\n\
    \n4th level (3 4th-level slots): [control water](/compendium/spells/control-water.md),\
    \ [ice storm](/compendium/spells/ice-storm.md)\n\n5th level (1 5th-level slots):\
    \ [scrying](/compendium/spells/scrying.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Gar fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar can stand and move on liquid surfaces as if they were solid ground."
  "name": "Water Walk"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Gar drops to 0 hit points, his body collapses into a pool of inky\
    \ water that rapidly disperses. Anything he was wearing or carrying is left behind."
  "name": "Watery Fall"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar makes two melee attacks, one with his claw and one with [Drown](/compendium/items/drown-pota.md)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 13). Until the grapple ends, Gar can't attack other creatures with\
    \ his claw."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage plus 4 (1d8) cold damage."
  "name": "Drown"
"source":
- "PotA"
name: Gar Shatterkeel
image: "[[Gar Shatterkeel.png]]"
---

# Gar Shatterkeel

```statblock
"name": "Gar Shatterkeel"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "97"
"hit_dice": "15d8 + 45"
"stats":
- !!int "15"
- !!int "15"
- !!int "16"
- !!int "12"
- !!int "18"
- !!int "13"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Nature": !!int "9"
  "Survival": !!int "8"
"damage_resistances": "cold"
"senses": "passive Perception 14"
"languages": "Aquan, Common"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar is a 9th-level spellcaster. His spellcasting ability is Wisdom (spell\
    \ save DC 16, +8 to hit with spell attacks). He has the following druid spells\
    \ prepared:\n\nCantrips (at will): [mending](/compendium/spells/mending.md),\
    \ [resistance](/compendium/spells/resistance.md), [shape water](/compendium/spells/shape-water-xge.md)\n\
    \n1st level (4 1st-level slots): [create or destroy water](/compendium/spells/create-or-destroy-water.md),\
    \ [cure wounds](/compendium/spells/cure-wounds.md), [fog cloud](/compendium/spells/fog-cloud.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md)\n\n2nd level (3 2nd-level\
    \ slots): [darkvision](/compendium/spells/darkvision.md), [hold person](/compendium/spells/hold-person.md),\
    \ [protection from poison](/compendium/spells/protection-from-poison.md)\n\n3rd\
    \ level (3 3rd-level slots): [call lightning](/compendium/spells/call-lightning.md),\
    \ [sleet storm](/compendium/spells/sleet-storm.md), [tidal wave](/compendium/spells/tidal-wave-xge.md)\n\
    \n4th level (3 4th-level slots): [control water](/compendium/spells/control-water.md),\
    \ [ice storm](/compendium/spells/ice-storm.md)\n\n5th level (1 5th-level slots):\
    \ [scrying](/compendium/spells/scrying.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Gar fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar can stand and move on liquid surfaces as if they were solid ground."
  "name": "Water Walk"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Gar drops to 0 hit points, his body collapses into a pool of inky\
    \ water that rapidly disperses. Anything he was wearing or carrying is left behind."
  "name": "Watery Fall"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Gar makes two melee attacks, one with his claw and one with [Drown](/compendium/items/drown-pota.md)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 13). Until the grapple ends, Gar can't attack other creatures with\
    \ his claw."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage plus 4 (1d8) cold damage."
  "name": "Drown"
"source":
- "PotA"
"image": "[[Gar Shatterkeel.png]]"
```
^statblock

*Source: Princes of the Apocalypse p. 208*

## Description

Gar Shatterkeel is the water prophet of Elemental Evil and the dour leader of the Crushing Wave cult. He is embittered by a life of suffering at the hands of others. Pirates killed his family when he was young, he was forced into servitude aboard a merchant ship, and then another band of pirates left him to die at sea, where he lost his arm to a shark. Gar sees the elemental power of water as the only thing of value in his life and has gathered others who feel as he does.

Gar bears the elemental weapon Drown. His missing arm has been replaced by an artificial limb in the shape of a crab's claw. As the leader of Olhydra's cult, he wields her innate magic. Other Crushing Wave cultists sense her power in him and follow him out of fear.

**In the Water Node.** When it becomes clear that the Temple of the Crushing Wave is no longer secure, Gar retreats to the Plunging Torrents, the water node. Within this node, Gar gains one additional use of his Legendary Resistance trait.