---
cssclass: json5e-monster
tags:
- compendium/src/mot
- monster/size/medium
- monster/type/humanoid/triton
aliases: ["Triton Master of Waves"]
statblock: true
"name": "Triton Master of Waves"
"size": "Medium"
"type": "humanoid"
"subtype": "triton"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"stats":
- !!int "16"
- !!int "11"
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "19"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "3"
  "Intelligence": !!int "3"
"skillsaves":
  "Nature": !!int "6"
  "Athletics": !!int "6"
  "Survival": !!int "4"
"damage_resistances": "cold, fire"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Primordial"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The triton's spellcasting ability is Charisma (spell save DC 15, +7 to\
    \ hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [ray of frost](/compendium/spells/ray-of-frost.md)\
    \ (see \"Actions\" below)\n\n1/day each: [fog cloud](/compendium/spells/fog-cloud.md),\
    \ [gust of wind](/compendium/spells/gust-of-wind.md), [wind wall](/compendium/spells/wind-wall.md)\n\
    \n2/day: [cone of cold](/compendium/spells/cone-of-cold.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The triton can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the triton magically summons 1d4 [water weirds](/compendium/bestiary/elemental/water-weird.md).\
    \ The summoned weirds appear in unoccupied spaces in water within 60 feet of the\
    \ triton. The water weirds act immediately after the triton on the same initiative\
    \ count and fight until they're destroyed. They disappear if the triton dies."
  "name": "Summon Water Weird (Recharges after a Short or Long Rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The triton makes two attacks using Wave Touch and casts [ray of frost](/compendium/spells/ray-of-frost.md)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +7 to hit, reach 5 ft., one target. Hit: 22 (4d10)\
    \ cold damage."
  "name": "Wave Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 60 ft., one creature. Hit: 13 (3d8)\
    \ cold damage, and the target's speed is reduced by 10 feet until the start of\
    \ the triton's next turn."
  "name": "Ray of Frost (Cantrip)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature the triton can see targets the triton with an attack, the\
    \ triton gains 10 temporary hit points. If the attack hits and reduces the temporary\
    \ hit points to 0, each creature within 5 feet of the triton takes 9 (2d8) cold\
    \ damage."
  "name": "Frigid Shield"
"source":
- "MOT"
name: Triton Master of Waves
image: "[[Triton Master of Waves.png]]"
---

# Triton Master of Waves

```statblock
"name": "Triton Master of Waves"
"size": "Medium"
"type": "humanoid"
"subtype": "triton"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"stats":
- !!int "16"
- !!int "11"
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "19"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "3"
  "Intelligence": !!int "3"
"skillsaves":
  "Nature": !!int "6"
  "Athletics": !!int "6"
  "Survival": !!int "4"
"damage_resistances": "cold, fire"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Primordial"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The triton's spellcasting ability is Charisma (spell save DC 15, +7 to\
    \ hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [ray of frost](/compendium/spells/ray-of-frost.md)\
    \ (see \"Actions\" below)\n\n1/day each: [fog cloud](/compendium/spells/fog-cloud.md),\
    \ [gust of wind](/compendium/spells/gust-of-wind.md), [wind wall](/compendium/spells/wind-wall.md)\n\
    \n2/day: [cone of cold](/compendium/spells/cone-of-cold.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The triton can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the triton magically summons 1d4 [water weirds](/compendium/bestiary/elemental/water-weird.md).\
    \ The summoned weirds appear in unoccupied spaces in water within 60 feet of the\
    \ triton. The water weirds act immediately after the triton on the same initiative\
    \ count and fight until they're destroyed. They disappear if the triton dies."
  "name": "Summon Water Weird (Recharges after a Short or Long Rest)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The triton makes two attacks using Wave Touch and casts [ray of frost](/compendium/spells/ray-of-frost.md)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +7 to hit, reach 5 ft., one target. Hit: 22 (4d10)\
    \ cold damage."
  "name": "Wave Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 60 ft., one creature. Hit: 13 (3d8)\
    \ cold damage, and the target's speed is reduced by 10 feet until the start of\
    \ the triton's next turn."
  "name": "Ray of Frost (Cantrip)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature the triton can see targets the triton with an attack, the\
    \ triton gains 10 temporary hit points. If the attack hits and reduces the temporary\
    \ hit points to 0, each creature within 5 feet of the triton takes 9 (2d8) cold\
    \ damage."
  "name": "Frigid Shield"
"source":
- "MOT"
"image": "[[Triton Master of Waves.png]]"
```
^statblock

*Source: Mythic Odysseys of Theros p. 245*

## Description

Triton masters of waves sculpt storms and change the tides, bending the sea to their will. Drawing forth living currents and the icy cold of the deep, these mages make the ocean their ally, using it to defend their people or enact Thassa's wishes. While dire threats from the land might bring them to coastal shallows, most masters of waves keep to the ocean's depths.

Although many masters of waves resent land-dwellers and strike out at those who trespass upon their waters, most are devoted followers of the sea god. Those who share their faith or who bear earnest offerings to Thassa might defuse the tritons' ire—that is, if they survive the deadly winds and waves that typically herald these sea guardians' appearance.

Clever, far-ranging people of the sea, tritons live rich lives unknown to most land-dwelling individuals. While the waves separate most tritons from land-dwellers, occasionally the inhabitants of the surface and the deep come into conflict. In such cases, tritons prove skilled at sabotaging ocean-going vessels, employing water-based magic, and otherwise whipping up the fury of the sea. Few dare insult tritons in their home environment, but those who do and survive often learn that the tritons' wrath doesn't end at the shore.