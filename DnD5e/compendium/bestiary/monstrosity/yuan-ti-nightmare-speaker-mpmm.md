---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/monstrosity/warlock
- monster/environment/desert
- monster/environment/forest
- monster/environment/underdark
aliases: ["Yuan-ti Nightmare Speaker"]
statblock: true
"name": "Yuan-ti Nightmare Speaker"
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
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal, Common, Draconic"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 13):\n\nAt will:\
    \ [animal friendship](/compendium/spells/animal-friendship.md) (snakes only),\
    \ [mage hand](/compendium/spells/mage-hand.md), [message](/compendium/spells/message.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n2/day each:\
    \ [darkness](/compendium/spells/darkness.md), [fear](/compendium/spells/fear.md)\n\
    \n3/day: [suggestion](/compendium/spells/suggestion.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede the yuan-ti's [darkvision](/rules/senses.md#darkvision)."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti makes one Constrict attack and one Scimitar attack, or it makes\
    \ two Spectral Fangs attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 14) if it is a Large or smaller creature. Until this grapple ends,\
    \ the target is [restrained](/rules/conditions.md#restrained). The yuan-ti can\
    \ constrict only one creature at a time."
  "name": "Constrict"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Scimitar (Yuan-ti Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 120 ft., one target. Hit: 16 (3d8\
    \ + 3) necrotic damage."
  "name": "Spectral Fangs"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti taps into the nightmares of one creature it can see within\
    \ 60 feet of it and creates an illusory, immobile manifestation of the creature's\
    \ deepest fears, visible only to that creature.\n\nThe target must make a DC 13\
    \ Intelligence saving throw. On a failed save, the target takes 22 (4d10) psychic\
    \ damage and is [frightened](/rules/conditions.md#frightened) of the manifestation,\
    \ believing it to be real. The yuan-ti must concentrate to maintain the illusion\
    \ (as if concentrating on a spell), which lasts for up to 1 minute and can't be\
    \ harmed. The target can repeat the saving throw at the end of each of its turns,\
    \ ending the illusion on a success or taking 11 (2d10) psychic damage on a failure."
  "name": "Invoke Nightmare (Recharges after a Short or Long Rest)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti transforms into a Medium snake or back into its true form.\
    \ Its statistics are the same in each form. Any equipment it is wearing or carrying\
    \ isn't transformed. If it dies, it stays in its current form."
  "name": "Change Shape"
"source":
- "MPMM"
- "VGM"
name: Yuan-ti Nightmare Speaker
image: "[[Yuan-ti Nightmare Speaker.png]]"
---

# Yuan-ti Nightmare Speaker

```statblock
"name": "Yuan-ti Nightmare Speaker"
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
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal, Common, Draconic"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 13):\n\nAt will:\
    \ [animal friendship](/compendium/spells/animal-friendship.md) (snakes only),\
    \ [mage hand](/compendium/spells/mage-hand.md), [message](/compendium/spells/message.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n2/day each:\
    \ [darkness](/compendium/spells/darkness.md), [fear](/compendium/spells/fear.md)\n\
    \n3/day: [suggestion](/compendium/spells/suggestion.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical darkness doesn't impede the yuan-ti's [darkvision](/rules/senses.md#darkvision)."
  "name": "Devil's Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti makes one Constrict attack and one Scimitar attack, or it makes\
    \ two Spectral Fangs attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 14) if it is a Large or smaller creature. Until this grapple ends,\
    \ the target is [restrained](/rules/conditions.md#restrained). The yuan-ti can\
    \ constrict only one creature at a time."
  "name": "Constrict"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Scimitar (Yuan-ti Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +5 to hit, range 120 ft., one target. Hit: 16 (3d8\
    \ + 3) necrotic damage."
  "name": "Spectral Fangs"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti taps into the nightmares of one creature it can see within\
    \ 60 feet of it and creates an illusory, immobile manifestation of the creature's\
    \ deepest fears, visible only to that creature.\n\nThe target must make a DC 13\
    \ Intelligence saving throw. On a failed save, the target takes 22 (4d10) psychic\
    \ damage and is [frightened](/rules/conditions.md#frightened) of the manifestation,\
    \ believing it to be real. The yuan-ti must concentrate to maintain the illusion\
    \ (as if concentrating on a spell), which lasts for up to 1 minute and can't be\
    \ harmed. The target can repeat the saving throw at the end of each of its turns,\
    \ ending the illusion on a success or taking 11 (2d10) psychic damage on a failure."
  "name": "Invoke Nightmare (Recharges after a Short or Long Rest)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The yuan-ti transforms into a Medium snake or back into its true form.\
    \ Its statistics are the same in each form. Any equipment it is wearing or carrying\
    \ isn't transformed. If it dies, it stays in its current form."
  "name": "Change Shape"
"source":
- "MPMM"
- "VGM"
"image": "[[Yuan-ti Nightmare Speaker.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 275, Volo's Guide to Monsters p. 205*

## Description

Nightmare speakers are yuan-ti malison priests who make a pact with the Dendar the Night Serpent to feed their deity the fears and nightmares of their victims in exchange for power in the mortal world. These priests receive nightmarish visions from Dendar that they interpret as prophecies, and they then use their magic and influence to make these visions come true.

Nightmare speakers revel in torturing others, keeping their victims in a constant state of fear and dread. They prefer to terrify rather than kill their opponents. They manipulate communities for the purpose of acquiring more victims and enjoy the company of Undead.

## Environment

desert, forest, underdark