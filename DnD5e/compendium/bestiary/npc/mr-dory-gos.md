---
cssclass: json5e-monster
tags:
- compendium/src/gos
- monster/size/medium
- monster/type/aberration
aliases: ["Mr. Dory"]
statblock: true
"name": "Mr. Dory"
"size": "Medium"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "170"
"hit_dice": "20d8 + 80"
"stats":
- !!int "13"
- !!int "20"
- !!int "19"
- !!int "14"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Constitution": !!int "8"
"skillsaves":
  "Athletics": !!int "5"
  "Stealth": !!int "9"
  "Perception": !!int "6"
"damage_immunities": "necrotic"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "Abyssal, Common, Deep Speech, telepathy 60 ft."
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mr. Dory's innate spellcasting ability is Charisma (save DC 15, +7 to hit\
    \ with spell attacks). Mr. Dory can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [detect magic](/compendium/spells/detect-magic.md),\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [invisibility](/compendium/spells/invisibility.md)\
    \ (self only)\n\n1/day each: [cloudkill](/compendium/spells/cloudkill.md),\
    \ [etherealness](/compendium/spells/etherealness.md)\n\n2/day each: [fear](/compendium/spells/fear.md),\
    \ [fireball](/compendium/spells/fireball.md), [fly](/compendium/spells/fly.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mr. Dory has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mr. Dory takes 6 (1d12) acid damage at the end of every hour he goes without\
    \ exposure to water."
  "name": "Water Dependency"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mr. Dory makes three attacks with his rapier."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) piercing damage and 7 (2d6) necrotic damage."
  "name": "Rapier"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mr. Dory glares at a creature he can see within 30 feet of him. The target\
    \ must make a DC 15 Constitution saving throw. On a failed save, it takes 27 (5d10)\
    \ necrotic damage and 27 (5d10) poison damage and then gains vulnerability to\
    \ both necrotic and poison damage for 1 minute. On a successful save, it takes\
    \ half damage and does not gain the vulnerabilities."
  "name": "Eye of Corruption (Recharge 5-6)"
"source":
- "GoS"
name: Mr. Dory
image: "[[Mr. Dory.png]]"
---

# Mr. Dory

```statblock
"name": "Mr. Dory"
"size": "Medium"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "170"
"hit_dice": "20d8 + 80"
"stats":
- !!int "13"
- !!int "20"
- !!int "19"
- !!int "14"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Constitution": !!int "8"
"skillsaves":
  "Athletics": !!int "5"
  "Stealth": !!int "9"
  "Perception": !!int "6"
"damage_immunities": "necrotic"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "Abyssal, Common, Deep Speech, telepathy 60 ft."
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mr. Dory's innate spellcasting ability is Charisma (save DC 15, +7 to hit\
    \ with spell attacks). Mr. Dory can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [detect magic](/compendium/spells/detect-magic.md),\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [invisibility](/compendium/spells/invisibility.md)\
    \ (self only)\n\n1/day each: [cloudkill](/compendium/spells/cloudkill.md),\
    \ [etherealness](/compendium/spells/etherealness.md)\n\n2/day each: [fear](/compendium/spells/fear.md),\
    \ [fireball](/compendium/spells/fireball.md), [fly](/compendium/spells/fly.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mr. Dory has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mr. Dory takes 6 (1d12) acid damage at the end of every hour he goes without\
    \ exposure to water."
  "name": "Water Dependency"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mr. Dory makes three attacks with his rapier."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) piercing damage and 7 (2d6) necrotic damage."
  "name": "Rapier"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mr. Dory glares at a creature he can see within 30 feet of him. The target\
    \ must make a DC 15 Constitution saving throw. On a failed save, it takes 27 (5d10)\
    \ necrotic damage and 27 (5d10) poison damage and then gains vulnerability to\
    \ both necrotic and poison damage for 1 minute. On a successful save, it takes\
    \ half damage and does not gain the vulnerabilities."
  "name": "Eye of Corruption (Recharge 5-6)"
"source":
- "GoS"
"image": "[[Mr. Dory.png]]"
```
^statblock

*Source: Ghosts of Saltmarsh p. 246*

## Description

One of the four councillors who rule the Styes, Mr. Dory hides his cursed nature in plain sight. His rare, liquid-sensitive "skin condition" is actually a form of the same aboleth affliction that creates skum, though Dory's condition is not as severe, and he has managed to retain his free will.