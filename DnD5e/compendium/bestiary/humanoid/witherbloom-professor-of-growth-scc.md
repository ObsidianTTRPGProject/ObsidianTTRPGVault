---
cssclass: json5e-monster
tags:
- compendium/src/scc
- monster/size/small-or-medium
- monster/type/humanoid/druid
aliases: ["Witherbloom Professor of Growth"]
statblock: true
"name": "Witherbloom Professor of Growth"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "druid"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "11"
- !!int "13"
- !!int "16"
- !!int "16"
- !!int "19"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "7"
  "Intelligence": !!int "6"
  "Constitution": !!int "6"
"skillsaves":
  "Medicine": !!int "7"
  "Nature": !!int "6"
  "Arcana": !!int "6"
  "Survival": !!int "7"
"damage_resistances": "poison"
"condition_immunities": "poisoned"
"senses": "passive Perception 14"
"languages": "Common plus any four languages"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor casts one of the following spells, requiring no material\
    \ components and using Wisdom as the spellcasting ability:\n\nAt will: [druidcraft](/compendium/spells/druidcraft.md),\
    \ [spare the dying](/compendium/spells/spare-the-dying.md)\n\n1/day each:\
    \ [greater restoration](/compendium/spells/greater-restoration.md), [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md), [pass without trace](/compendium/spells/pass-without-trace.md),\
    \ [plant growth](/compendium/spells/plant-growth.md), [revivify](/compendium/spells/revivify.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor makes two Verdant Lash attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +7 to hit, reach 30 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage plus 7 (2d6) poison damage, and the target must succeed\
    \ on a DC 15 Strength saving throw or be pulled up to 10 feet closer to the professor."
  "name": "Verdant Lash"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor magically summons a Groff. The groff appears in an unoccupied\
    \ space within 60 feet of the professor, acts as the professor's ally, and takes\
    \ its turns immediately after the professor's. The professor can communicate telepathically\
    \ with this groff while it remains. The groff remains for 10 minutes, until it\
    \ or the professor dies, or until the professor dismisses it as an action."
  "name": "Summon Nature's Avatar (Recharges after a Short or Long Rest)"
"source":
- "SCC"
name: Witherbloom Professor of Growth
image: "[[Witherbloom Professor of Growth.png]]"
---

# Witherbloom Professor of Growth

```statblock
"name": "Witherbloom Professor of Growth"
"size": "Small or Medium"
"type": "humanoid"
"subtype": "druid"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "11"
- !!int "13"
- !!int "16"
- !!int "16"
- !!int "19"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "7"
  "Intelligence": !!int "6"
  "Constitution": !!int "6"
"skillsaves":
  "Medicine": !!int "7"
  "Nature": !!int "6"
  "Arcana": !!int "6"
  "Survival": !!int "7"
"damage_resistances": "poison"
"condition_immunities": "poisoned"
"senses": "passive Perception 14"
"languages": "Common plus any four languages"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor casts one of the following spells, requiring no material\
    \ components and using Wisdom as the spellcasting ability:\n\nAt will: [druidcraft](/compendium/spells/druidcraft.md),\
    \ [spare the dying](/compendium/spells/spare-the-dying.md)\n\n1/day each:\
    \ [greater restoration](/compendium/spells/greater-restoration.md), [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md), [pass without trace](/compendium/spells/pass-without-trace.md),\
    \ [plant growth](/compendium/spells/plant-growth.md), [revivify](/compendium/spells/revivify.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor makes two Verdant Lash attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +7 to hit, reach 30 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage plus 7 (2d6) poison damage, and the target must succeed\
    \ on a DC 15 Strength saving throw or be pulled up to 10 feet closer to the professor."
  "name": "Verdant Lash"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The professor magically summons a Groff. The groff appears in an unoccupied\
    \ space within 60 feet of the professor, acts as the professor's ally, and takes\
    \ its turns immediately after the professor's. The professor can communicate telepathically\
    \ with this groff while it remains. The groff remains for 10 minutes, until it\
    \ or the professor dies, or until the professor dismisses it as an action."
  "name": "Summon Nature's Avatar (Recharges after a Short or Long Rest)"
"source":
- "SCC"
"image": "[[Witherbloom Professor of Growth.png]]"
```
^statblock

*Source: Strixhaven: A Curriculum of Chaos p. 223*

## Description

Professors of growth nurture the essence of nature through their magic. They brew infusions of plants, fungi, and insects or other minuscule creatures that thrum with the essence of life, using these infusions to fuel their magic instead of using traditional material components. In battle, they flood their allies with vital essence, healing wounds and soothing ailments. Their foes face the wrath of nature itself, from grasping plants and conjured poisonous vines to avatars of nature's wrath.

These professors teach their students to focus on the growth side of the natural cycle of life and death and to avoid wasting resources. They espouse the philosophy that a thriving system benefits all.

**Witherbloom Scholars.** Witherbloom College studies the magic inherent in the natural cycle of life and death. Witherbloom professors approach the philosophy from different directions, with one methodology focusing on decay and the other dealing with growth.