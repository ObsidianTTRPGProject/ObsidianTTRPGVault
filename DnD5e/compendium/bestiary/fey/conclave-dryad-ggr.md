---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/fey
aliases: ["Conclave Dryad"]
statblock: true
"name": "Conclave Dryad"
"size": "Medium"
"type": "fey"
"alignment": "Lawful Good"
"ac": !!int "16"
"hp": !!int "143"
"hit_dice": "22d8 + 44"
"stats":
- !!int "12"
- !!int "19"
- !!int "14"
- !!int "19"
- !!int "20"
- !!int "21"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
  "Intelligence": !!int "8"
"skillsaves":
  "Nature": !!int "8"
  "Perception": !!int "9"
  "Arcana": !!int "8"
"senses": "darkvision 60 ft., passive Perception 19"
"languages": "Common, Elvish, Sylvan"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dryad's innate spellcasting ability is Charisma (spell save DC 17).\
    \ The dryad can innately cast the following spells, requiring no material components:\n\
    \nAt will: [druidcraft](/compendium/spells/druidcraft.md)\n\n1/day each:\
    \ [moonbeam](/compendium/spells/moonbeam.md), [grasping vine](/compendium/spells/grasping-vine.md),\
    \ [wall of thorns](/compendium/spells/wall-of-thorns.md)\n\n3/day each: [dispel\
    \ magic](/compendium/spells/dispel-magic.md), [entangle](/compendium/spells/entangle.md),\
    \ [plant growth](/compendium/spells/plant-growth.md), [spike growth](/compendium/spells/spike-growth.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dryad has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dryad can communicate with beasts and plants as if they and the dryad\
    \ shared a language."
  "name": "Speak with Beasts and Plants"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dryad makes three attacks, using its vine staff, its longbow, or both."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 17 Dexterity saving throw or become [restrained](/rules/conditions.md#restrained)\
    \ by twisting vines for 1 minute. A target [restrained](/rules/conditions.md#restrained)\
    \ in this way can use an action to make a DC 17 Strength (Athletics) or Dexterity\
    \ (Acrobatics) check, ending the effect on itself on a success."
  "name": "Vine Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +8 to hit, range 150/600 ft., one target. Hit:\
    \ 8 (1d8 + 4) piercing damage."
  "name": "Longbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dryad magically summons a mount, which appears in an unoccupied space\
    \ within 60 feet of the dryad. The mount remains for 8 hours, until it or the\
    \ dryad dies, or until the dryad dismisses it as an action. The mount uses the\
    \ stat block of an [elk](/compendium/bestiary/beast/elk.md) (see the Monster Manual)\
    \ with these changes: it is a plant instead of a beast, it has an Intelligence\
    \ of 6, and it understands Sylvan but can't speak. While within 1 mile of the\
    \ mount, the dryad can communicate with it telepathically."
  "name": "Summon Mount (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dryad targets one magic item it can see within 120 feet of it. If the\
    \ magic item isn't an artifact, its magical properties are suppressed for 10 minutes,\
    \ until the dryad is [incapacitated](/rules/conditions.md#incapacitated) or dies,\
    \ or until the dryad uses a bonus action to end the effect."
  "name": "Suppress Magic (Recharge 5-6)"
"source":
- "GGR"
name: Conclave Dryad
image: "[[Conclave Dryad.png]]"
---

# Conclave Dryad

```statblock
"name": "Conclave Dryad"
"size": "Medium"
"type": "fey"
"alignment": "Lawful Good"
"ac": !!int "16"
"hp": !!int "143"
"hit_dice": "22d8 + 44"
"stats":
- !!int "12"
- !!int "19"
- !!int "14"
- !!int "19"
- !!int "20"
- !!int "21"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
  "Intelligence": !!int "8"
"skillsaves":
  "Nature": !!int "8"
  "Perception": !!int "9"
  "Arcana": !!int "8"
"senses": "darkvision 60 ft., passive Perception 19"
"languages": "Common, Elvish, Sylvan"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dryad's innate spellcasting ability is Charisma (spell save DC 17).\
    \ The dryad can innately cast the following spells, requiring no material components:\n\
    \nAt will: [druidcraft](/compendium/spells/druidcraft.md)\n\n1/day each:\
    \ [moonbeam](/compendium/spells/moonbeam.md), [grasping vine](/compendium/spells/grasping-vine.md),\
    \ [wall of thorns](/compendium/spells/wall-of-thorns.md)\n\n3/day each: [dispel\
    \ magic](/compendium/spells/dispel-magic.md), [entangle](/compendium/spells/entangle.md),\
    \ [plant growth](/compendium/spells/plant-growth.md), [spike growth](/compendium/spells/spike-growth.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dryad has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dryad can communicate with beasts and plants as if they and the dryad\
    \ shared a language."
  "name": "Speak with Beasts and Plants"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dryad makes three attacks, using its vine staff, its longbow, or both."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 17 Dexterity saving throw or become [restrained](/rules/conditions.md#restrained)\
    \ by twisting vines for 1 minute. A target [restrained](/rules/conditions.md#restrained)\
    \ in this way can use an action to make a DC 17 Strength (Athletics) or Dexterity\
    \ (Acrobatics) check, ending the effect on itself on a success."
  "name": "Vine Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +8 to hit, range 150/600 ft., one target. Hit:\
    \ 8 (1d8 + 4) piercing damage."
  "name": "Longbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dryad magically summons a mount, which appears in an unoccupied space\
    \ within 60 feet of the dryad. The mount remains for 8 hours, until it or the\
    \ dryad dies, or until the dryad dismisses it as an action. The mount uses the\
    \ stat block of an [elk](/compendium/bestiary/beast/elk.md) (see the Monster Manual)\
    \ with these changes: it is a plant instead of a beast, it has an Intelligence\
    \ of 6, and it understands Sylvan but can't speak. While within 1 mile of the\
    \ mount, the dryad can communicate with it telepathically."
  "name": "Summon Mount (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dryad targets one magic item it can see within 120 feet of it. If the\
    \ magic item isn't an artifact, its magical properties are suppressed for 10 minutes,\
    \ until the dryad is [incapacitated](/rules/conditions.md#incapacitated) or dies,\
    \ or until the dryad uses a bonus action to end the effect."
  "name": "Suppress Magic (Recharge 5-6)"
"source":
- "GGR"
"image": "[[Conclave Dryad.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 194*

## Description

The lush forests that once grew on Ravnica are gone, but the dryads remain, striving to bring the sprawling city and the verdant green of nature into harmony. Dryads believe that their efforts are the will of Mat'Selesnya, the soul of the world, and they spread their teachings through every Selesnya enclave.

Thanks to their attunement to Mat'Selesnya, dryads serve as visionaries and spiritual intermediaries for the Selesnya Conclave. They hold positions of great respect as spiritual leaders, and also share their vision of harmonious construction as architects, working with stonemasons and woodshapers to create Selesnya enclaves.

**Summoned Mount.** When leading its guild into battle, a dryad rides a magically summoned creature woven of living branches, vines, and grasses and imbued with a fey spirit.