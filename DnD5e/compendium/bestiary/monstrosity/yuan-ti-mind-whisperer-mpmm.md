---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/monstrosity/warlock
- monster/environment/desert
- monster/environment/forest
- monster/environment/underdark
aliases: ["Yuan-ti Mind Whisperer"]
statblock: true
"name": "Yuan-ti Mind Whisperer"
"size": "Medium"
"type": "monstrosity"
"subtype": "warlock"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "14"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "4"
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Abyssal, Common, Draconic"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 13):\n\nAt will:\
    \ [animal friendship](/compendium/spells/animal-friendship.md) (snakes only),\
    \ [message](/compendium/spells/message.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n2/day each:\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [hypnotic pattern](/compendium/spells/hypnotic-pattern.md)\n\
    \n3/day: [suggestion](/compendium/spells/suggestion.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede the yuan-ti's [darkvision](/rules/senses.md#darkvision)."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the yuan-ti reduces an enemy to 0 hit points, the yuan-ti gains 9\
    \ temporary hit points."
  "name": "Sseth's Blessing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti makes two Bite attacks and one Scimitar attack, or it makes\
    \ two Spectral Fangs attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage plus 7 (2d6) poison damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Scimitar (Yuan-ti Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 120 ft., one target. Hit: 16 (3d8\
    \ + 3) psychic damage."
  "name": "Spectral Fangs"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti transforms into a Medium snake or back into its true form.\
    \ Its statistics are the same in each form. Any equipment it is wearing or carrying\
    \ isn't transformed. If it dies, it stays in its current form."
  "name": "Change Shape"
"source":
- "MPMM"
- "VGM"
name: Yuan-ti Mind Whisperer
image: "[[Yuan-ti Mind Whisperer.png]]"
---

# Yuan-ti Mind Whisperer

```statblock
"name": "Yuan-ti Mind Whisperer"
"size": "Medium"
"type": "monstrosity"
"subtype": "warlock"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "14"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "4"
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Abyssal, Common, Draconic"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 13):\n\nAt will:\
    \ [animal friendship](/compendium/spells/animal-friendship.md) (snakes only),\
    \ [message](/compendium/spells/message.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n2/day each:\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [hypnotic pattern](/compendium/spells/hypnotic-pattern.md)\n\
    \n3/day: [suggestion](/compendium/spells/suggestion.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede the yuan-ti's [darkvision](/rules/senses.md#darkvision)."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the yuan-ti reduces an enemy to 0 hit points, the yuan-ti gains 9\
    \ temporary hit points."
  "name": "Sseth's Blessing"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti makes two Bite attacks and one Scimitar attack, or it makes\
    \ two Spectral Fangs attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage plus 7 (2d6) poison damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Scimitar (Yuan-ti Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 120 ft., one target. Hit: 16 (3d8\
    \ + 3) psychic damage."
  "name": "Spectral Fangs"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti transforms into a Medium snake or back into its true form.\
    \ Its statistics are the same in each form. Any equipment it is wearing or carrying\
    \ isn't transformed. If it dies, it stays in its current form."
  "name": "Change Shape"
"source":
- "MPMM"
- "VGM"
"image": "[[Yuan-ti Mind Whisperer.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 274, Volo's Guide to Monsters p. 204*

## Description

Mind whisperers are yuan-ti malison spellcasters who enter into a pact with the serpent god Sseth, the Sibilant Death. They use their abilities to convert others to their faith, increase their personal power, and befuddle the minds of their enemies.

Mind whisperers are elusive, manipulative, unpredictable, and willing to cheat or kill comrades and rivals alike if doing so benefits them. The worshipers of Sseth have their hands in many schemes, often plying the middle ground between two factions, and thus spend a lot of energy making sure none of their allies learn of their conflicting connections. Even among Sseth-worshiping communities, mind whisperers are known for being self-important, sneaky, and prone to flee at the first sign of trouble.

## Environment

desert, forest, underdark