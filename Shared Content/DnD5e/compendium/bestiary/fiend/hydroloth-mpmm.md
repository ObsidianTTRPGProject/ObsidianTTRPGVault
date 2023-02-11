---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/fiend/yugoloth
aliases: ["Hydroloth"]
statblock: true
"name": "Hydroloth"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "12"
- !!int "21"
- !!int "16"
- !!int "19"
- !!int "10"
- !!int "14"
"speed": "walk 20 ft., swim 40 ft."
"skillsaves":
  "Insight": !!int "4"
  "Perception": !!int "4"
"damage_vulnerabilities": "fire"
"damage_resistances": "cold; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "poisoned"
"senses": "blindsight 60 ft., darkvision 60 ft., passive Perception 14"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydroloth casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 16):\n\nAt will: [darkness](/compendium/spells/darkness.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [invisibility](/compendium/spells/invisibility.md)\
    \ (self only)\n\n3/day each: [control water](/compendium/spells/control-water.md),\
    \ [crown of madness](/compendium/spells/crown-of-madness.md), [fear](/compendium/spells/fear.md),\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydroloth can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydroloth has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydroloth is immune to the waters of the River Styx, as well as any\
    \ effect that would steal or modify its memories or detect or read its thoughts."
  "name": "Secure Memory"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While submerged in liquid, the hydroloth has advantage on attack rolls."
  "name": "Watery Advantage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydroloth makes two Bite or Claw attacks. It can replace one attack\
    \ with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 16 (2d10\
    \ + 5) force damage plus 9 (2d10) psychic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target.  Hit: 14 (2d8\
    \ + 5) force damage plus 9 (2d10) psychic damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydroloth targets one creature it can see within 60 feet of it. The\
    \ target takes 14 (4d6) psychic damage, and it must make a DC 16 Intelligence\
    \ saving throw. On a successful save, the target becomes immune to this hydroloth's\
    \ Steal Memory for 24 hours. On a failed save, the target loses all proficiencies;\
    \ it can't cast spells; it can't understand language; and if its Intelligence\
    \ and Charisma scores are higher than 5, they become 5. Each time the target finishes\
    \ a long rest, it can repeat the saving throw, ending the effect on itself on\
    \ a success. A [greater restoration](/compendium/spells/greater-restoration.md)\
    \ or [remove curse](/compendium/spells/remove-curse.md) spell cast on the target\
    \ ends this effect early."
  "name": "Steal Memory (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydroloth teleports, along with any equipment it is wearing or carrying,\
    \ up to 60 feet to an unoccupied space it can see."
  "name": "Teleport"
"source":
- "MPMM"
- "MTF"
name: Hydroloth
image: "[[Hydroloth.png]]"
---

# Hydroloth

```statblock
"name": "Hydroloth"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "12"
- !!int "21"
- !!int "16"
- !!int "19"
- !!int "10"
- !!int "14"
"speed": "walk 20 ft., swim 40 ft."
"skillsaves":
  "Insight": !!int "4"
  "Perception": !!int "4"
"damage_vulnerabilities": "fire"
"damage_resistances": "cold; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "poisoned"
"senses": "blindsight 60 ft., darkvision 60 ft., passive Perception 14"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydroloth casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 16):\n\nAt will: [darkness](/compendium/spells/darkness.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [invisibility](/compendium/spells/invisibility.md)\
    \ (self only)\n\n3/day each: [control water](/compendium/spells/control-water.md),\
    \ [crown of madness](/compendium/spells/crown-of-madness.md), [fear](/compendium/spells/fear.md),\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydroloth can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydroloth has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydroloth is immune to the waters of the River Styx, as well as any\
    \ effect that would steal or modify its memories or detect or read its thoughts."
  "name": "Secure Memory"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While submerged in liquid, the hydroloth has advantage on attack rolls."
  "name": "Watery Advantage"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydroloth makes two Bite or Claw attacks. It can replace one attack\
    \ with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 16 (2d10\
    \ + 5) force damage plus 9 (2d10) psychic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target.  Hit: 14 (2d8\
    \ + 5) force damage plus 9 (2d10) psychic damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydroloth targets one creature it can see within 60 feet of it. The\
    \ target takes 14 (4d6) psychic damage, and it must make a DC 16 Intelligence\
    \ saving throw. On a successful save, the target becomes immune to this hydroloth's\
    \ Steal Memory for 24 hours. On a failed save, the target loses all proficiencies;\
    \ it can't cast spells; it can't understand language; and if its Intelligence\
    \ and Charisma scores are higher than 5, they become 5. Each time the target finishes\
    \ a long rest, it can repeat the saving throw, ending the effect on itself on\
    \ a success. A [greater restoration](/compendium/spells/greater-restoration.md)\
    \ or [remove curse](/compendium/spells/remove-curse.md) spell cast on the target\
    \ ends this effect early."
  "name": "Steal Memory (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The hydroloth teleports, along with any equipment it is wearing or carrying,\
    \ up to 60 feet to an unoccupied space it can see."
  "name": "Teleport"
"source":
- "MPMM"
- "MTF"
"image": "[[Hydroloth.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 158, Mordenkainen's Tome of Foes p. 249*

## Description

Like the thought-stealing waters of the River Styx they inhabit, hydroloths filch the memories of creatures they attack, stealing away thoughts for delivery to whatever master they happen to serve. Hydroloths also savor finding lost things, especially those that have been swallowed up in the deeps.

For amphibious assaults or underwater conflicts, hydroloths have no equal among yugoloths. They sometimes hire themselves out to attack and scuttle ships and raid coastal settlements.