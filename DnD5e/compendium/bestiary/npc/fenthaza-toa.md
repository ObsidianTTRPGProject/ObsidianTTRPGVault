---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/monstrosity/shapechanger
- monster/type/monstrosity/yuan-ti
- monster/environment/underdark
- monster/environment/forest
- monster/environment/desert
aliases: ["Fenthaza"]
statblock: true
"name": "Fenthaza"
"size": "Medium"
"type": "monstrosity"
"subtype": "shapechanger, yuan-ti"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "14"
- !!int "12"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "3"
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft. (penetrates magical darkness), passive Perception 11"
"languages": "Abyssal, Common, Draconic"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fenthaza's innate spellcasting ability is Charisma (spell save DC 13).\
    \ Fenthaza can innately cast the following spells, requiring no material components:\n\
    \nAt will: [animal friendship](/compendium/spells/animal-friendship.md) (snakes\
    \ only)\n\n3/day: [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fenthaza is a 6th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 13, +5 to hit with spell attacks). It regains its expended spell\
    \ slots when it finishes a short or long rest. It knows the following warlock\
    \ spells:\n\nCantrips (at will): [chill touch](/compendium/spells/chill-touch.md),\
    \ [eldritch blast](/compendium/spells/eldritch-blast.md) (range 300 ft., +3 bonus\
    \ to each damage roll), [mage hand](/compendium/spells/mage-hand.md), [message](/compendium/spells/message.md),\
    \ [poison spray](/compendium/spells/poison-spray.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1st-3rd level (2 3rd-level slots): [arms of Hadar](/compendium/spells/arms-of-hadar.md),\
    \ [darkness](/compendium/spells/darkness.md), [fear](/compendium/spells/fear.md),\
    \ [hex](/compendium/spells/hex.md), [hold person](/compendium/spells/hold-person.md),\
    \ [hunger of Hadar](/compendium/spells/hunger-of-hadar.md), [witch bolt](/compendium/spells/witch-bolt.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fenthaza can use its action to polymorph into a Medium snake or back into\
    \ its true form. Its statistics are the same in each form. Any equipment it is\
    \ wearing or carrying isn't transformed. If it dies, it stays in its current form."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The first time Fenthaza hits with a melee attack on its turn, it can deal\
    \ an extra 16 (3d10) necrotic damage to the target."
  "name": "Death Fangs (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fenthaza has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fenthaza makes one constrict attack and one scimitar attack."
  "name": "Multiattack (Yuan-ti Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 14) if it is a Large or smaller creature. Until this grapple ends,\
    \ the target is [restrained](/rules/conditions.md#restrained), and Fenthaza can't\
    \ constrict another target."
  "name": "Constrict"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Scimitar (Yuan-ti Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fenthaza taps into the nightmares of a creature it can see within 60 feet\
    \ of it and creates an illusory, immobile manifestation of the creature's deepest\
    \ fears, visible only to that creature. The target must make a DC 13 Intelligence\
    \ saving throw. On a failed save, the target takes 11 (2d10) psychic damage and\
    \ is [frightened](/rules/conditions.md#frightened) of the manifestation, believing\
    \ it to be real. Fenthaza must concentrate to maintain the illusion (as if concentrating\
    \ on a spell), which lasts for up to 1 minute and can't be harmed. The target\
    \ can repeat the saving throw at the end of each of its turns, ending the illusion\
    \ on a success, or taking 11 (2d10) psychic damage on a failure."
  "name": "Invoke Nightmare (Recharges after a Short or Long Rest)"
"source":
- "ToA"
name: Fenthaza
image: "[[Fenthaza.png]]"
---

# Fenthaza

```statblock
"name": "Fenthaza"
"size": "Medium"
"type": "monstrosity"
"subtype": "shapechanger, yuan-ti"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "14"
- !!int "12"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "3"
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft. (penetrates magical darkness), passive Perception 11"
"languages": "Abyssal, Common, Draconic"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fenthaza's innate spellcasting ability is Charisma (spell save DC 13).\
    \ Fenthaza can innately cast the following spells, requiring no material components:\n\
    \nAt will: [animal friendship](/compendium/spells/animal-friendship.md) (snakes\
    \ only)\n\n3/day: [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fenthaza is a 6th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 13, +5 to hit with spell attacks). It regains its expended spell\
    \ slots when it finishes a short or long rest. It knows the following warlock\
    \ spells:\n\nCantrips (at will): [chill touch](/compendium/spells/chill-touch.md),\
    \ [eldritch blast](/compendium/spells/eldritch-blast.md) (range 300 ft., +3 bonus\
    \ to each damage roll), [mage hand](/compendium/spells/mage-hand.md), [message](/compendium/spells/message.md),\
    \ [poison spray](/compendium/spells/poison-spray.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1st-3rd level (2 3rd-level slots): [arms of Hadar](/compendium/spells/arms-of-hadar.md),\
    \ [darkness](/compendium/spells/darkness.md), [fear](/compendium/spells/fear.md),\
    \ [hex](/compendium/spells/hex.md), [hold person](/compendium/spells/hold-person.md),\
    \ [hunger of Hadar](/compendium/spells/hunger-of-hadar.md), [witch bolt](/compendium/spells/witch-bolt.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fenthaza can use its action to polymorph into a Medium snake or back into\
    \ its true form. Its statistics are the same in each form. Any equipment it is\
    \ wearing or carrying isn't transformed. If it dies, it stays in its current form."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The first time Fenthaza hits with a melee attack on its turn, it can deal\
    \ an extra 16 (3d10) necrotic damage to the target."
  "name": "Death Fangs (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fenthaza has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fenthaza makes one constrict attack and one scimitar attack."
  "name": "Multiattack (Yuan-ti Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 14) if it is a Large or smaller creature. Until this grapple ends,\
    \ the target is [restrained](/rules/conditions.md#restrained), and Fenthaza can't\
    \ constrict another target."
  "name": "Constrict"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Scimitar (Yuan-ti Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Fenthaza taps into the nightmares of a creature it can see within 60 feet\
    \ of it and creates an illusory, immobile manifestation of the creature's deepest\
    \ fears, visible only to that creature. The target must make a DC 13 Intelligence\
    \ saving throw. On a failed save, the target takes 11 (2d10) psychic damage and\
    \ is [frightened](/rules/conditions.md#frightened) of the manifestation, believing\
    \ it to be real. Fenthaza must concentrate to maintain the illusion (as if concentrating\
    \ on a spell), which lasts for up to 1 minute and can't be harmed. The target\
    \ can repeat the saving throw at the end of each of its turns, ending the illusion\
    \ on a success, or taking 11 (2d10) psychic damage on a failure."
  "name": "Invoke Nightmare (Recharges after a Short or Long Rest)"
"source":
- "ToA"
"image": "[[Fenthaza.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 113*

## Environment

underdark, forest, desert