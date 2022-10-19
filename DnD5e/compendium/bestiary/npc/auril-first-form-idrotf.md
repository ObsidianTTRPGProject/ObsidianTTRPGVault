---
cssclass: json5e-monster
tags:
- compendium/src/idrotf
- monster/size/medium
- monster/type/monstrosity
aliases: ["Auril (First Form)"]
statblock: true
"name": "Auril (First Form)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "95"
"hit_dice": "10d8 + 50"
"stats":
- !!int "14"
- !!int "16"
- !!int "21"
- !!int "24"
- !!int "26"
- !!int "28"
"speed": "walk 30 ft., fly 60 ft."
"saves":
  "Wisdom": !!int "12"
  "Constitution": !!int "9"
"skillsaves":
  "Intimidation": !!int "13"
  "Deception": !!int "13"
  "Insight": !!int "12"
  "Perception": !!int "16"
"damage_vulnerabilities": "radiant"
"damage_immunities": "cold, poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned,\
  \ stunned"
"senses": "darkvision 120 ft., truesight 120 ft., passive Perception 26"
"languages": "all, telepathy 1000 ft."
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril's innate spellcasting ability is Charisma (spell save DC 21, +13\
    \ to hit with spell attacks). She can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [chromatic orb](/compendium/spells/chromatic-orb.md)\
    \ (cold orb only; see \"Actions\" below), [detect magic](/compendium/spells/detect-magic.md),\
    \ [misty step](/compendium/spells/misty-step.md)\n\n2/day each: [control weather](/compendium/spells/control-weather.md),\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [ice storm](/compendium/spells/ice-storm.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril can't be surprised and can't be changed into another form against\
    \ her will."
  "name": "Divine Being"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Auril drops to 0 hit points, her body turns to slush and melts away.\
    \ Auril instantly reappears in her [second form](/compendium/bestiary/npc/auril-second-form-idrotf.md),\
    \ in an unoccupied space within 60 feet of where her first form disappeared. Her\
    \ initiative count doesn't change."
  "name": "Divine Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Auril fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (2/Day in This Form)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril attacks twice with her talons."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage plus 3 (1d6) cold damage."
  "name": "Talons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +13 to hit, reach 5 ft., one creature. Hit: 13 (3d8)\
    \ cold damage, and the target can't take reactions until the start of its next\
    \ turn."
  "name": "Touch of Frost"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +13 to hit, range 90 ft., one creature. Hit: 13\
    \ (3d8) cold damage."
  "name": "Chromatic Orb"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril attacks once with her talons."
  "name": "Talons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril teleports to an unoccupied space she can see within 30 feet of her."
  "name": "Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril uses Touch of Frost."
  "name": "Touch of Frost (Costs 2 Actions)"
"source":
- "IDRotF"
name: Auril (First Form)
image: "[[Auril (First Form).png]]"
---

# Auril (First Form)

```statblock
"name": "Auril (First Form)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "95"
"hit_dice": "10d8 + 50"
"stats":
- !!int "14"
- !!int "16"
- !!int "21"
- !!int "24"
- !!int "26"
- !!int "28"
"speed": "walk 30 ft., fly 60 ft."
"saves":
  "Wisdom": !!int "12"
  "Constitution": !!int "9"
"skillsaves":
  "Intimidation": !!int "13"
  "Deception": !!int "13"
  "Insight": !!int "12"
  "Perception": !!int "16"
"damage_vulnerabilities": "radiant"
"damage_immunities": "cold, poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned,\
  \ stunned"
"senses": "darkvision 120 ft., truesight 120 ft., passive Perception 26"
"languages": "all, telepathy 1000 ft."
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril's innate spellcasting ability is Charisma (spell save DC 21, +13\
    \ to hit with spell attacks). She can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [chromatic orb](/compendium/spells/chromatic-orb.md)\
    \ (cold orb only; see \"Actions\" below), [detect magic](/compendium/spells/detect-magic.md),\
    \ [misty step](/compendium/spells/misty-step.md)\n\n2/day each: [control weather](/compendium/spells/control-weather.md),\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [ice storm](/compendium/spells/ice-storm.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril can't be surprised and can't be changed into another form against\
    \ her will."
  "name": "Divine Being"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Auril drops to 0 hit points, her body turns to slush and melts away.\
    \ Auril instantly reappears in her [second form](/compendium/bestiary/npc/auril-second-form-idrotf.md),\
    \ in an unoccupied space within 60 feet of where her first form disappeared. Her\
    \ initiative count doesn't change."
  "name": "Divine Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Auril fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (2/Day in This Form)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril attacks twice with her talons."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage plus 3 (1d6) cold damage."
  "name": "Talons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +13 to hit, reach 5 ft., one creature. Hit: 13 (3d8)\
    \ cold damage, and the target can't take reactions until the start of its next\
    \ turn."
  "name": "Touch of Frost"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +13 to hit, range 90 ft., one creature. Hit: 13\
    \ (3d8) cold damage."
  "name": "Chromatic Orb"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril attacks once with her talons."
  "name": "Talons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril teleports to an unoccupied space she can see within 30 feet of her."
  "name": "Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril uses Touch of Frost."
  "name": "Touch of Frost (Costs 2 Actions)"
"source":
- "IDRotF"
"image": "[[Auril (First Form).png]]"
```
^statblock

*Source: Icewind Dale: Rime of the Frostmaiden p. 275*

## Description

In her first form, Auril appears as a hunched, 7-foot-tall biped with the head of a snowy owl, black talons, cloven hooves, and grayish-white wolf fur covering her body from the neck down. Protruding from her feathery owl's head is a pair of curved goat horns. A cloak and cowl made of pristine white snow conceals much of her tripartite form, which her worshipers refer to as the Cold Crone. This cloak can transform into a pair of owl's wings when Auril sees fit.

**Auril the Frostmaiden.** Auril the Frostmaiden is a neutral evil lesser god of cold indifference who embodies winter's cruelty. (For information on what defines a lesser god, see the ""Divine Rank"" sidebar in the "Dungeon Master's Guide".) Auril's beloved ice grasps all things in her clutches, preserving them against the ravages of time. She hoards beauty in all forms, from art objects and flowers to skilled artisans and their wondrous works, freezing them in magical ice for her pleasure alone.

Auril was aligned with the gods Talos, Umberlee, and Malar. Together they wrought terrible destruction, inspiring fear that compelled tribute to hold their power at bay. Umberlee, queen of the wrathful sea, grew to despise the enduring nature of the ice and snow Auril created. Umberlee seethed when Auril's frigid cold transformed her chaotic, unpredictable tides into rigid, motionless sheets of ice. Umberlee brought Talos and Malar into an alliance against Auril, who retreated to the coldest corner of Toril to escape their fury.

After a world-shaking event known as the Sundering, most of the gods withdrew from Toril, leaving mortals to govern their own fates without the gods' meddling, but the Frostmaiden could not stay away for long. Auril returned to her icy realm in the far north and, after a time, plunged it into frigid darkness using her magic.

Casting such great magic night after night while also granting spells to her devoted followers leaves Auril weak and vulnerable. In her self-inflicted weakened state, Auril is inclined to be cautious and avoid contact with other creatures that can harm her.

Auril's worshipers know better than to disturb her self-imposed isolation. Terrible blizzards have cut off Icewind Dale from the rest of the world, and a shroud of mist conceals her island in the Sea of Moving Ice.

**Roleplaying Auril.** Portraying a deity, even a lesser god such as Auril the Frostmaiden, can be daunting. For roleplaying purposes, the following suggestions might prove helpful:

- So long as she has mortal worshipers, Auril can't truly die (although the characters can rid the world of her for a time). Thus, she has no reason to capitulate to mortals' demands. As the embodiment of winter's cruelty, she is incapable of showing mercy or compassion. Play her as a supremely cold and unfeeling entity.
- Have Auril speak only when necessary. The less she talks, the less risk you have of unintentionally demystifying her in the eyes of your players. Let her actions, not her words, define her.
- Lesser gods in the D&D multiverse are extremely powerful and arrogant, but also fallible and blind to their own flaws. It's appropriate for Auril to act as though she's invincible while underestimating her mortal enemies, even in her current weakened state.

**Lair Actions.** Auril dwells on Solstice, a frozen island hidden among the titanic icebergs in the Sea of Moving Ice. Few creatures know of this island, let alone how to reach it. See chapter 5 for information about the regional effects that encompass the island.

While she's on the island, the Frostmaiden can take one of the following lair actions on initiative count 20 (losing initiative ties):

- Auril instantly knows the locations and health of all other creatures on the island. She knows how much damage each of these creatures has taken, how many levels of [exhaustion](/rules/conditions.md#exhaustion) they have, and what conditions are affecting them currently.
- Auril instantly teleports to any location on the island. If the space she chooses as her destination is already occupied, Auril appears in the closest unoccupied space to it instead.
- Auril telepathically communicates with any number of creatures at once, provided they're all on the island. This effect lasts until Auril stops concentrating on it (as if concentrating on a spell) or until she leaves the island or uses a different lair action.

**Auril's Three Forms.** In her current weakened state, Auril can assume three different forms. To destroy her, heroes must reduce each of her forms to 0 hit points one after another. After she's defeated in her third and final form, Auril dies. As long as she has mortal followers who worship her, however, Auril is reborn at full strength during the next winter solstice, with divine power far beyond what is reflected in the stat blocks presented here.

After finishing a long rest, Auril regains any of her forms that were destroyed, provided at least one form survives. When she transitions from one form to another, she loses all the traits and actions of the old form and gains those of the new form.

A stat block is given for each of Auril's three forms. These descriptions do not reflect Auril at full power, but rather Auril as she is encountered in this adventure.