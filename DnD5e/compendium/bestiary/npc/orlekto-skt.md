---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/huge
- monster/type/giant
- monster/environment/coastal
- monster/environment/underwater
aliases: ["Orlekto"]
statblock: true
"name": "Orlekto"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "230"
"hit_dice": "20d12 + 100"
"stats":
- !!int "29"
- !!int "14"
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "18"
"speed": "walk 50 ft., swim 50 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
  "Strength": !!int "14"
  "Constitution": !!int "10"
"skillsaves":
  "Athletics": !!int "14"
  "Deception": !!int "14"
  "Perception": !!int "9"
"damage_resistances": "cold"
"damage_immunities": "lightning, thunder"
"senses": "passive Perception 19"
"languages": "Common, Giant"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Orlekto casts one of the following spells, requiring no material spell\
    \ components and using Charisma as the spellcasting ability (spell save DC 17):\n\
    \nAt will: [detect magic](/compendium/spells/detect-magic.md), [levitate](/compendium/spells/levitate.md),\
    \ [light](/compendium/spells/light.md)\n\n1/day each: [control weather](/compendium/spells/control-weather.md)\
    \ (cast as 1 action), [water breathing](/compendium/spells/water-breathing.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Orlekto is in love with Princess Mirran and wants to see her become Queen\
    \ of the Wyrmskull Throne. (If Mirran is dead, Orlekto aims to avenge her.) If\
    \ the opportunity to eliminate Hekaton or Serissa presents itself, Orlekto seizes\
    \ it. Until then, he conceals his treacherous nature.\n\nIdeal: \"Storm giants\
    \ should rule the world. Weak leaders have let dragons and others steal what the\
    \ gods gave to us!\"\n\nBond: \"I serve Princess Mirran and her alone.\"\n\nFlaw:\
    \ \"For Mirran's love or my revenge, I'd betray my king and my honor.\""
  "name": "Roleplaying Information"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Orlekto can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Orlekto makes two greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 30 (6d6\
    \ + 9) slashing damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +14 to hit, range 60/240 ft., one target. Hit:\
    \ 35 (4d12 + 9) bludgeoning damage."
  "name": "Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Orlekto hurls a magical lightning bolt at a point it can see within 500\
    \ feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity\
    \ saving throw, taking 54 (12d8) lightning damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Lightning Strike (Recharge 5-6)"
"source":
- "SKT"
name: Orlekto
image: "[[Orlekto.png]]"
---

# Orlekto

```statblock
"name": "Orlekto"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "230"
"hit_dice": "20d12 + 100"
"stats":
- !!int "29"
- !!int "14"
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "18"
"speed": "walk 50 ft., swim 50 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
  "Strength": !!int "14"
  "Constitution": !!int "10"
"skillsaves":
  "Athletics": !!int "14"
  "Deception": !!int "14"
  "Perception": !!int "9"
"damage_resistances": "cold"
"damage_immunities": "lightning, thunder"
"senses": "passive Perception 19"
"languages": "Common, Giant"
"cr": "13"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Orlekto casts one of the following spells, requiring no material spell\
    \ components and using Charisma as the spellcasting ability (spell save DC 17):\n\
    \nAt will: [detect magic](/compendium/spells/detect-magic.md), [levitate](/compendium/spells/levitate.md),\
    \ [light](/compendium/spells/light.md)\n\n1/day each: [control weather](/compendium/spells/control-weather.md)\
    \ (cast as 1 action), [water breathing](/compendium/spells/water-breathing.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Orlekto is in love with Princess Mirran and wants to see her become Queen\
    \ of the Wyrmskull Throne. (If Mirran is dead, Orlekto aims to avenge her.) If\
    \ the opportunity to eliminate Hekaton or Serissa presents itself, Orlekto seizes\
    \ it. Until then, he conceals his treacherous nature.\n\nIdeal: \"Storm giants\
    \ should rule the world. Weak leaders have let dragons and others steal what the\
    \ gods gave to us!\"\n\nBond: \"I serve Princess Mirran and her alone.\"\n\nFlaw:\
    \ \"For Mirran's love or my revenge, I'd betray my king and my honor.\""
  "name": "Roleplaying Information"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Orlekto can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Orlekto makes two greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 30 (6d6\
    \ + 9) slashing damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +14 to hit, range 60/240 ft., one target. Hit:\
    \ 35 (4d12 + 9) bludgeoning damage."
  "name": "Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Orlekto hurls a magical lightning bolt at a point it can see within 500\
    \ feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity\
    \ saving throw, taking 54 (12d8) lightning damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Lightning Strike (Recharge 5-6)"
"source":
- "SKT"
"image": "[[Orlekto.png]]"
```
^statblock

*Source: Storm King's Thunder p. 256*

## Environment

coastal, underwater