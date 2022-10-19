---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/monstrosity
- monster/environment/underdark
aliases: ["Spirit Naga"]
statblock: true
"name": "Spirit Naga"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "18"
- !!int "17"
- !!int "14"
- !!int "16"
- !!int "15"
- !!int "16"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "6"
  "Wisdom": !!int "5"
  "Constitution": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "charmed, poisoned"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Abyssal, Common"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naga is a 10th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 14, +6 to hit with spell attacks), and it needs only verbal components\
    \ to cast its spells. It has the following wizard spells prepared:\n\nCantrips\
    \ (at will): [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md)\n\n1st level (4 1st-level\
    \ slots): [charm person](/compendium/spells/charm-person.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [sleep](/compendium/spells/sleep.md)\n\n2nd level (3 2nd-level slots): [detect\
    \ thoughts](/compendium/spells/detect-thoughts.md), [hold person](/compendium/spells/hold-person.md)\n\
    \n3rd level (3 3rd-level slots): [lightning bolt](/compendium/spells/lightning-bolt.md),\
    \ [water breathing](/compendium/spells/water-breathing.md)\n\n4th level (3 4th-level\
    \ slots): [blight](/compendium/spells/blight.md), [dimension door](/compendium/spells/dimension-door.md)\n\
    \n5th level (2 5th-level slots): [dominate person](/compendium/spells/dominate-person.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If it dies, the naga returns to life in 1d6 days and regains all its hit\
    \ points. Only a [wish](/compendium/spells/wish.md) spell can prevent this trait\
    \ from functioning."
  "name": "Rejuvenation"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 7 (1d6\
    \ + 4) piercing damage, and the target must make a DC 13 Constitution saving throw,\
    \ taking 31 (7d8) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Bite"
"source":
- "MM"
- "TftYP"
- "WDMM"
- "GoS"
- "EGW"
- "MOT"
- "JttRC"
name: Spirit Naga
image: "[[Spirit Naga.png]]"
---

# Spirit Naga

```statblock
"name": "Spirit Naga"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "18"
- !!int "17"
- !!int "14"
- !!int "16"
- !!int "15"
- !!int "16"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "6"
  "Wisdom": !!int "5"
  "Constitution": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "charmed, poisoned"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Abyssal, Common"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The naga is a 10th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 14, +6 to hit with spell attacks), and it needs only verbal components\
    \ to cast its spells. It has the following wizard spells prepared:\n\nCantrips\
    \ (at will): [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md)\n\n1st level (4 1st-level\
    \ slots): [charm person](/compendium/spells/charm-person.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [sleep](/compendium/spells/sleep.md)\n\n2nd level (3 2nd-level slots): [detect\
    \ thoughts](/compendium/spells/detect-thoughts.md), [hold person](/compendium/spells/hold-person.md)\n\
    \n3rd level (3 3rd-level slots): [lightning bolt](/compendium/spells/lightning-bolt.md),\
    \ [water breathing](/compendium/spells/water-breathing.md)\n\n4th level (3 4th-level\
    \ slots): [blight](/compendium/spells/blight.md), [dimension door](/compendium/spells/dimension-door.md)\n\
    \n5th level (2 5th-level slots): [dominate person](/compendium/spells/dominate-person.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If it dies, the naga returns to life in 1d6 days and regains all its hit\
    \ points. Only a [wish](/compendium/spells/wish.md) spell can prevent this trait\
    \ from functioning."
  "name": "Rejuvenation"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 7 (1d6\
    \ + 4) piercing damage, and the target must make a DC 13 Constitution saving throw,\
    \ taking 31 (7d8) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Bite"
"source":
- "MM"
- "TftYP"
- "WDMM"
- "GoS"
- "EGW"
- "MOT"
- "JttRC"
"image": "[[Spirit Naga.png]]"
```
^statblock

*Source: Monster Manual p. 234, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Journeys through the Radiant Citadel*

## Description

Spirit nagas live in gloom and spitefulness, constantly plotting vengeance against creatures that have wronged them-or that they believe have wronged them. Lairing in dismal caverns and ruins, they devote their time to developing new spells and enslaving the mortals with which they surround themselves. A spirit naga likes to charm its foes, drawing them close so that it can sink its poisonous fangs into their flesh.

**Nagas.** Nagas are intelligent serpents that inhabit the ruins of the past, amassing arcane treasures and knowledge.

The first nagas were created as immortal guardians by a humanoid race long lost to history. When this race died out, the nagas deemed themselves the rightful inheritors of their masters' treasures and magical lore. Industrious and driven, nagas occasionally venture out from their lairs to track down magic items or rare spellbooks.

Nagas never feel the ravages of time or succumb to sickness. Even if it is struck down, a naga's immortal spirit reforms in a new body in a matter of days, ready to continue its eternal work.

**Benevolent Dictators and Brutal Tyrants.**  A naga rules its domain with absolute authority. Whether it rules with compassion or by terrorizing its subjects, the naga believes itself the master of all other creatures that inhabit its domain.

**Rivalry.**  Nagas have a long-standing enmity with the yuan-ti, with each race seeing itself as the epitome of serpentine evolution. Though cooperation between them is rare, nagas and yuan-ti sometimes set aside their differences to work toward common objectives. However, yuan-ti always chafe under a naga's authority.

**Immortal Nature.**  A naga doesn't require air, food, drink, or sleep.

## Environment

underdark