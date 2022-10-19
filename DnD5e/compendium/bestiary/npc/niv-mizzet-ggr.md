---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/gargantuan
- monster/type/dragon
aliases: ["Niv-Mizzet"]
statblock: true
"name": "Niv-Mizzet"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Chaotic Neutral"
"ac": !!int "22"
"hp": !!int "370"
"hit_dice": "19d20 + 171"
"stats":
- !!int "29"
- !!int "14"
- !!int "29"
- !!int "30"
- !!int "17"
- !!int "25"
"speed": "walk 40 ft., climb 30 ft., fly 80 ft."
"saves":
  "Wisdom": !!int "11"
  "Intelligence": !!int "18"
  "Constitution": !!int "17"
"skillsaves":
  "Insight": !!int "11"
  "Perception": !!int "11"
  "Arcana": !!int "18"
"damage_resistances": "cold, psychic, thunder"
"damage_immunities": "fire, lightning"
"condition_immunities": "charmed"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21"
"languages": "Common, Draconic"
"cr": "26"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Niv-Mizzet is a 20th-level Izzet spellcaster. His spellcasting ability\
    \ is Intelligence (spell save DC 26, +18 to hit with spell attacks). He has the\
    \ following wizard spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [light](/compendium/spells/light.md), [prestidigitation](/compendium/spells/prestidigitation.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [shield](/compendium/spells/shield.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md), [unseen servant](/compendium/spells/unseen-servant.md)\n\
    \n2nd level (3 2nd-level slots): [blur](/compendium/spells/blur.md), [enlarge/reduce](/compendium/spells/enlarge-reduce.md),\
    \ [flaming sphere](/compendium/spells/flaming-sphere.md), [hold person](/compendium/spells/hold-person.md),\
    \ [scorching ray](/compendium/spells/scorching-ray.md)\n\n3rd level (3 3rd-level\
    \ slots): [counterspell](/compendium/spells/counterspell.md), [fireball](/compendium/spells/fireball.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md), [slow](/compendium/spells/slow.md)\n\
    \n4th level (3 4th-level slots): [confusion](/compendium/spells/confusion.md),\
    \ [dimension door](/compendium/spells/dimension-door.md), [fabricate](/compendium/spells/fabricate.md)\n\
    \n5th level (2 5th-level slots): [conjure elemental](/compendium/spells/conjure-elemental.md),\
    \ [polymorph](/compendium/spells/polymorph.md), [wall of fire](/compendium/spells/wall-of-fire.md),\
    \ [wall of force](/compendium/spells/wall-of-force.md)\n\n6th level (1 6th-level\
    \ slots): [chain lightning](/compendium/spells/chain-lightning.md), [disintegrate](/compendium/spells/disintegrate.md),\
    \ [true seeing](/compendium/spells/true-seeing.md)\n\n7th level (1 7th-level\
    \ slots): [project image](/compendium/spells/project-image.md), [reverse gravity](/compendium/spells/reverse-gravity.md),\
    \ [teleport](/compendium/spells/teleport.md)\n\n8th level (1 8th-level slots):\
    \ [control weather](/compendium/spells/control-weather.md), [maze](/compendium/spells/maze.md),\
    \ [power word stun](/compendium/spells/power-word-stun.md)\n\n9th level (1 9th-level\
    \ slots): [prismatic wall](/compendium/spells/prismatic-wall.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Niv-Mizzet fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Niv-Mizzet can maintain concentration on two different spells at the same\
    \ time. In addition, he has advantage on saving throws to maintain concentration\
    \ on spells."
  "name": "Locus of the Firemind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Niv-Mizzet has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Niv-Mizzet casts a spell that deals damage, he can change the spell's\
    \ damage to cold, fire, force, lightning, or thunder."
  "name": "Master Chemister"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Niv-Mizzet makes three attacks: one with his bite and two with his claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 18 (2d8\
    \ + 9) piercing damage plus 14 (4d6) fire damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 14 (2d4\
    \ + 9) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 16 (2d6\
    \ + 9) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Niv-Mizzet exhales fire in a 90-foot cone. Each creature in that area must\
    \ make a DC 25 Dexterity saving throw, taking 91 (26d6) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Niv-Mizzet casts one of his cantrips."
  "name": "Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Niv-Mizzet makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Niv-Mizzet beats his wings. Each creature within 15 feet of him must succeed\
    \ on a DC 25 Dexterity saving throw or take 14 (2d4 + 9) bludgeoning damage and\
    \ be knocked [prone](/rules/conditions.md#prone). Niv-Mizzet can then fly up to\
    \ half his flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Niv-Mizzet regains a spell slot of 3rd level or lower."
  "name": "Dracogenius (Costs 3 Actions)"
"source":
- "GGR"
name: Niv-Mizzet
image: "[[Niv-Mizzet.png]]"
---

# Niv-Mizzet

```statblock
"name": "Niv-Mizzet"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Chaotic Neutral"
"ac": !!int "22"
"hp": !!int "370"
"hit_dice": "19d20 + 171"
"stats":
- !!int "29"
- !!int "14"
- !!int "29"
- !!int "30"
- !!int "17"
- !!int "25"
"speed": "walk 40 ft., climb 30 ft., fly 80 ft."
"saves":
  "Wisdom": !!int "11"
  "Intelligence": !!int "18"
  "Constitution": !!int "17"
"skillsaves":
  "Insight": !!int "11"
  "Perception": !!int "11"
  "Arcana": !!int "18"
"damage_resistances": "cold, psychic, thunder"
"damage_immunities": "fire, lightning"
"condition_immunities": "charmed"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21"
"languages": "Common, Draconic"
"cr": "26"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Niv-Mizzet is a 20th-level Izzet spellcaster. His spellcasting ability\
    \ is Intelligence (spell save DC 26, +18 to hit with spell attacks). He has the\
    \ following wizard spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [light](/compendium/spells/light.md), [prestidigitation](/compendium/spells/prestidigitation.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st level (4 1st-level slots): [detect magic](/compendium/spells/detect-magic.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [shield](/compendium/spells/shield.md),\
    \ [thunderwave](/compendium/spells/thunderwave.md), [unseen servant](/compendium/spells/unseen-servant.md)\n\
    \n2nd level (3 2nd-level slots): [blur](/compendium/spells/blur.md), [enlarge/reduce](/compendium/spells/enlarge-reduce.md),\
    \ [flaming sphere](/compendium/spells/flaming-sphere.md), [hold person](/compendium/spells/hold-person.md),\
    \ [scorching ray](/compendium/spells/scorching-ray.md)\n\n3rd level (3 3rd-level\
    \ slots): [counterspell](/compendium/spells/counterspell.md), [fireball](/compendium/spells/fireball.md),\
    \ [lightning bolt](/compendium/spells/lightning-bolt.md), [slow](/compendium/spells/slow.md)\n\
    \n4th level (3 4th-level slots): [confusion](/compendium/spells/confusion.md),\
    \ [dimension door](/compendium/spells/dimension-door.md), [fabricate](/compendium/spells/fabricate.md)\n\
    \n5th level (2 5th-level slots): [conjure elemental](/compendium/spells/conjure-elemental.md),\
    \ [polymorph](/compendium/spells/polymorph.md), [wall of fire](/compendium/spells/wall-of-fire.md),\
    \ [wall of force](/compendium/spells/wall-of-force.md)\n\n6th level (1 6th-level\
    \ slots): [chain lightning](/compendium/spells/chain-lightning.md), [disintegrate](/compendium/spells/disintegrate.md),\
    \ [true seeing](/compendium/spells/true-seeing.md)\n\n7th level (1 7th-level\
    \ slots): [project image](/compendium/spells/project-image.md), [reverse gravity](/compendium/spells/reverse-gravity.md),\
    \ [teleport](/compendium/spells/teleport.md)\n\n8th level (1 8th-level slots):\
    \ [control weather](/compendium/spells/control-weather.md), [maze](/compendium/spells/maze.md),\
    \ [power word stun](/compendium/spells/power-word-stun.md)\n\n9th level (1 9th-level\
    \ slots): [prismatic wall](/compendium/spells/prismatic-wall.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Niv-Mizzet fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Niv-Mizzet can maintain concentration on two different spells at the same\
    \ time. In addition, he has advantage on saving throws to maintain concentration\
    \ on spells."
  "name": "Locus of the Firemind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Niv-Mizzet has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Niv-Mizzet casts a spell that deals damage, he can change the spell's\
    \ damage to cold, fire, force, lightning, or thunder."
  "name": "Master Chemister"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Niv-Mizzet makes three attacks: one with his bite and two with his claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 18 (2d8\
    \ + 9) piercing damage plus 14 (4d6) fire damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 14 (2d4\
    \ + 9) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 16 (2d6\
    \ + 9) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Niv-Mizzet exhales fire in a 90-foot cone. Each creature in that area must\
    \ make a DC 25 Dexterity saving throw, taking 91 (26d6) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Niv-Mizzet casts one of his cantrips."
  "name": "Cantrip"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Niv-Mizzet makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Niv-Mizzet beats his wings. Each creature within 15 feet of him must succeed\
    \ on a DC 25 Dexterity saving throw or take 14 (2d4 + 9) bludgeoning damage and\
    \ be knocked [prone](/rules/conditions.md#prone). Niv-Mizzet can then fly up to\
    \ half his flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Niv-Mizzet regains a spell slot of 3rd level or lower."
  "name": "Dracogenius (Costs 3 Actions)"
"source":
- "GGR"
"image": "[[Niv-Mizzet.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 241*

## Description

Possessed of arrogance and vanity that matches his vast intellect and tremendous power, Niv-Mizzet is the ancient dragon who founded and continues to control the Izzet League. From his private laboratory at the top of the Izzet guildhall, Niv-Mizzet directs the research and experiments of his countless underlings. He coordinates a tremendous number of apparently unrelated projects, working toward some mysterious end.

There can be little doubt that this ancient dragon is one of the most intelligent beings on Ravnica and one of the world's most powerful spellcasters. He is just as acquisitive as any dragon, but his treasure is scientific and magical knowledge. His ambition is a looming threat in the minds of all the other guildmasters, but confronting him directly is almost unthinkable thanks to the combination of his awesome magical power and the sheer physical threat of a fire-breathing, swordtoothed dragon.