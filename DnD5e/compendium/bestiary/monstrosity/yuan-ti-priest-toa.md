---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/monstrosity/shapechanger
- monster/type/monstrosity/yuan-ti
- monster/environment/forest
- monster/environment/swamp
- monster/environment/desert
aliases: ["Yuan-ti Priest"]
statblock: true
"name": "Yuan-ti Priest"
"size": "Medium"
"type": "monstrosity"
"subtype": "shapechanger, yuan-ti"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "14"
- !!int "12"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Abyssal, Common, Draconic"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti's innate spellcasting ability is Charisma (spell save DC 13,\
    \ +5 to hit with spell attacks). The yuan-ti can innately cast the following spells,\
    \ requiring no material components:\n\nAt will: [animal friendship](/compendium/spells/animal-friendship.md)\
    \ (snakes only), [eldritch blast](/compendium/spells/eldritch-blast.md) (2 beams),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [poison spray](/compendium/spells/poison-spray.md)\n\
    \n3/day: [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti can use its action to polymorph into a Medium snake, or back\
    \ into its true form. Its statistics are the same in each form. Any equipment\
    \ it is wearing or carrying isn't transformed. It doesn't change form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti has one of the following types:\n\n- Type 1. Human body\
    \ with snake head\n- Type 2. Human head and body with snakes for arms\n- Type\
    \ 3. Human head and upper body with a serpentine lower body instead of legs"
  "name": "Malison Type"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti makes two ranged attacks or two melee attacks, but can constrict\
    \ only once."
  "name": "Multiattack (Yuan-ti Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4\
    \ + 3) piercing damage plus 7 (2d6) poison damage."
  "name": "Bite (Snake Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 13). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the yuan-ti can't constrict another target."
  "name": "Constrict"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Scimitar (Yuan-ti Form Only)"
"source":
- "ToA"
name: Yuan-ti Priest
image: "[[Yuan-ti Priest.png]]"
---

# Yuan-ti Priest

```statblock
"name": "Yuan-ti Priest"
"size": "Medium"
"type": "monstrosity"
"subtype": "shapechanger, yuan-ti"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "14"
- !!int "12"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Abyssal, Common, Draconic"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti's innate spellcasting ability is Charisma (spell save DC 13,\
    \ +5 to hit with spell attacks). The yuan-ti can innately cast the following spells,\
    \ requiring no material components:\n\nAt will: [animal friendship](/compendium/spells/animal-friendship.md)\
    \ (snakes only), [eldritch blast](/compendium/spells/eldritch-blast.md) (2 beams),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [poison spray](/compendium/spells/poison-spray.md)\n\
    \n3/day: [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti can use its action to polymorph into a Medium snake, or back\
    \ into its true form. Its statistics are the same in each form. Any equipment\
    \ it is wearing or carrying isn't transformed. It doesn't change form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti has one of the following types:\n\n- Type 1. Human body\
    \ with snake head\n- Type 2. Human head and body with snakes for arms\n- Type\
    \ 3. Human head and upper body with a serpentine lower body instead of legs"
  "name": "Malison Type"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti makes two ranged attacks or two melee attacks, but can constrict\
    \ only once."
  "name": "Multiattack (Yuan-ti Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4\
    \ + 3) piercing damage plus 7 (2d6) poison damage."
  "name": "Bite (Snake Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 13). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained),\
    \ and the yuan-ti can't constrict another target."
  "name": "Constrict"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Scimitar (Yuan-ti Form Only)"
"source":
- "ToA"
"image": "[[Yuan-ti Priest.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 118*

## Environment

forest, swamp, desert