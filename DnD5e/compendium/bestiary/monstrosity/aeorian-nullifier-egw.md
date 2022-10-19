---
cssclass: json5e-monster
tags:
- compendium/src/egw
- monster/size/large
- monster/type/monstrosity
aliases: ["Aeorian Nullifier"]
statblock: true
"name": "Aeorian Nullifier"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "180"
"hit_dice": "19d10 + 76"
"stats":
- !!int "19"
- !!int "14"
- !!int "18"
- !!int "7"
- !!int "14"
- !!int "18"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "6"
"skillsaves":
  "Perception": !!int "6"
  "Survival": !!int "6"
"damage_immunities": "necrotic, radiant"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "understands Draconic but can't speak"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nullifier's innate spellcasting ability is Charisma (spell save DC\
    \ 16). It can innately cast the following spells, requiring no material components:\n\
    \nAt will: [counterspell](/compendium/spells/counterspell.md) (see \"Reactions\"\
    \ below), [detect magic](/compendium/spells/detect-magic.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [see invisibility](/compendium/spells/see-invisibility.md)\n\n1/day: [antimagic\
    \ field](/compendium/spells/antimagic-field.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nullifier's mouths gnash incoherently while it can see any enemies.\
    \ Each creature that starts its turn within 20 feet of the nullifier and can hear\
    \ it must make a DC 16 Wisdom saving throw. Unless the save succeeds, the creature\
    \ rolls a d8 to determine what it does during the current turn:\n\n1-4: The creature\
    \ is [stunned](/rules/conditions.md#stunned) until the end of the turn.\n\n5-6:\
    \ The creature is [frightened](/rules/conditions.md#frightened) until the end\
    \ of the turn and uses its movement to get as far as possible from the nullifier.\n\
    \n7-8: The creature doesn't move, and it uses its action to make one melee attack\
    \ against a random creature (other than itself) if one is within reach. It otherwise\
    \ does nothing."
  "name": "Horrid Gnashing"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nullifier has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nullifier makes three attacks: one with its bites and two with its\
    \ claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 17 (2d12\
    \ + 4) piercing damage plus 11 (2d10) force damage."
  "name": "Bites"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage plus 11 (2d10) force damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16) if it's a creature. The nullifier has two claws, each of which\
    \ can grapple one creature."
  "name": "Claws"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nullifier attempts to interrupt a creature that it can see within 60\
    \ feet in the process of casting a spell. If the creature is casting a spell of\
    \ 3rd level or lower, its spell fails and has no effect. If it is casting a spell\
    \ of 4th level or higher, the nullifier makes a Charisma check with a DC equal\
    \ to 10 + the spell's level. On a success, the creature's spell fails and has\
    \ no effect."
  "name": "Counterspell"
"source":
- "EGW"
name: Aeorian Nullifier
image: "[[Aeorian Nullifier.png]]"
---

# Aeorian Nullifier

```statblock
"name": "Aeorian Nullifier"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "180"
"hit_dice": "19d10 + 76"
"stats":
- !!int "19"
- !!int "14"
- !!int "18"
- !!int "7"
- !!int "14"
- !!int "18"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "6"
"skillsaves":
  "Perception": !!int "6"
  "Survival": !!int "6"
"damage_immunities": "necrotic, radiant"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "understands Draconic but can't speak"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nullifier's innate spellcasting ability is Charisma (spell save DC\
    \ 16). It can innately cast the following spells, requiring no material components:\n\
    \nAt will: [counterspell](/compendium/spells/counterspell.md) (see \"Reactions\"\
    \ below), [detect magic](/compendium/spells/detect-magic.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [see invisibility](/compendium/spells/see-invisibility.md)\n\n1/day: [antimagic\
    \ field](/compendium/spells/antimagic-field.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nullifier's mouths gnash incoherently while it can see any enemies.\
    \ Each creature that starts its turn within 20 feet of the nullifier and can hear\
    \ it must make a DC 16 Wisdom saving throw. Unless the save succeeds, the creature\
    \ rolls a d8 to determine what it does during the current turn:\n\n1-4: The creature\
    \ is [stunned](/rules/conditions.md#stunned) until the end of the turn.\n\n5-6:\
    \ The creature is [frightened](/rules/conditions.md#frightened) until the end\
    \ of the turn and uses its movement to get as far as possible from the nullifier.\n\
    \n7-8: The creature doesn't move, and it uses its action to make one melee attack\
    \ against a random creature (other than itself) if one is within reach. It otherwise\
    \ does nothing."
  "name": "Horrid Gnashing"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nullifier has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nullifier makes three attacks: one with its bites and two with its\
    \ claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 17 (2d12\
    \ + 4) piercing damage plus 11 (2d10) force damage."
  "name": "Bites"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage plus 11 (2d10) force damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 16) if it's a creature. The nullifier has two claws, each of which\
    \ can grapple one creature."
  "name": "Claws"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nullifier attempts to interrupt a creature that it can see within 60\
    \ feet in the process of casting a spell. If the creature is casting a spell of\
    \ 3rd level or lower, its spell fails and has no effect. If it is casting a spell\
    \ of 4th level or higher, the nullifier makes a Charisma check with a DC equal\
    \ to 10 + the spell's level. On a success, the creature's spell fails and has\
    \ no effect."
  "name": "Counterspell"
"source":
- "EGW"
"image": "[[Aeorian Nullifier.png]]"
```
^statblock

*Source: Explorer's Guide to Wildemount p. 283*

## Description

Nullifiers are the bane of all magic users, with their physical forms and innate powers shaped specifically to resist and cancel magical effects. Against other foes, a nullifier is no less fearsome for the grotesque mouths filled with razor-sharp teeth that cover its torso—and which set up a cacophony of gnashing that can drive other creatures mad.

Brought to life by mages in the flying city of Aeor during the Age of Arcanum, Aeorian hunters were created to take on angels, demons, devils, fey, and the gods themselves. When Aeor crashed into Eiselcross, many of these magically mutated monstrosities survived, and they now stalk Aeor's ruins and the islands' icy wastes.

**Created by Experimentation.** Aeorian hunters were created through arcane experimentation on beasts and humanoids—both captives and volunteers. These experiments resulted in monstrosities with brightly colored flesh and the power to resist and destroy Aeor's enemies. It is theorized that the mages of Aeor must have possessed some means of controlling their monstrous soldiers, but no such device has yet been found in the wastes of Eiselcross. Draconic was the language used by these mages to train and bind the Aeorian hunters, and the hunters retain an understanding of this language even though they can't speak it.

**Madness through Immortality.** Aeorian hunters do not age. As such, the lust for violence their creators instilled in their minds has grown ravenous after centuries without war. Most immediately attack any creature they see.

**Never Harm Another Hunter.** Though they crave violence, Aeorian hunters have never been seen attacking each other. Most scholars believe that Aeor's mages must have enchanted this behavior into them, given the cost in gold and magic required to create each hunter. Some adventurers in Eiselcross boast about sneaking past Aeorian hunters using disguises or illusions to mimic a hunter's form, but these are most likely tall tales.

**Ageless Memories.** Each Aeorian hunter has perfect recall of every experience since the moment of its creation. Their limited intellects and desire for violence prevent them from effectively communicating, but each hunter holds a wealth of knowledge—often including the location of rare Aeorian relics—inside its mind.

**Perfect Soldiers.** Aeorian hunters don't require food or drink.