---
cssclass: json5e-monster
tags:
- compendium/src/idrotf
- monster/size/large
- monster/type/elemental
aliases: ["Auril (Second Form)"]
statblock: true
"name": "Auril (Second Form)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "136"
"hit_dice": "13d10 + 65"
"stats":
- !!int "16"
- !!int "16"
- !!int "21"
- !!int "24"
- !!int "26"
- !!int "28"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "12"
  "Constitution": !!int "9"
"skillsaves":
  "Intimidation": !!int "13"
  "Deception": !!int "13"
  "Insight": !!int "12"
  "Perception": !!int "16"
"damage_vulnerabilities": "fire"
"damage_immunities": "cold, poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned,\
  \ stunned"
"senses": "darkvision 120 ft., truesight 120 ft., passive Perception 26"
"languages": "all, telepathy 1000 ft."
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril can't be surprised and can't be changed into another form against\
    \ her will."
  "name": "Divine Being"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Auril drops to 0 hit points, her body collapses into shards of ice,\
    \ whereupon Auril instantly reappears in her [third form](/compendium/bestiary/npc/auril-third-form-idrotf.md),\
    \ in an unoccupied space within 60 feet of where her second form was destroyed.\
    \ Her initiative count doesn't change."
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
  "desc": "Auril attacks twice with her ice morningstar or hurls three ice darts."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage plus 9 (2d8) cold damage."
  "name": "Ice Morningstar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +7 to hit, range 20/60 ft., one target. Hit: 5\
    \ (1d4 + 3) piercing damage plus 3 (1d6) cold damage."
  "name": "Ice Dart"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril causes a magical blast of cold air to erupt from her hand. Each creature\
    \ in a 60-foot cone must make a DC 21 Constitution saving throw, taking 36 (8d8)\
    \ cold damage on a failed save, or half as much damage on a successful one."
  "name": "Cone of Cold (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril breaks off an icicle from her body and hurls it into an unoccupied\
    \ space she can see within 20 feet of her, where it magically transforms into\
    \ an [ice mephit](/compendium/bestiary/elemental/ice-mephit.md) (see its entry\
    \ in the Monster Manual). The mephit acts immediately after Auril in the initiative\
    \ order and obeys her commands."
  "name": "Create Ice Mephit (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril magically creates a gem-sized ice crystal that hovers in a space\
    \ within 5 feet of her. Auril then targets a creature she can see within 60 feet\
    \ of the crystal. The target must succeed on a DC 21 Charisma saving throw or\
    \ become trapped in the crystal, which is immovable. If the saving throw succeeds,\
    \ the crystal shatters and nothing else happens. A creature trapped in the crystal\
    \ is [stunned](/rules/conditions.md#stunned), has total cover against attacks\
    \ and other effects outside the crystal, and takes 21 (6d6) cold damage at the\
    \ start of each of its turns. The creature can repeat the saving throw at the\
    \ end of each of its turns, freeing itself on a success. The creature is also\
    \ freed if the crystal is destroyed, which is a Tiny object with AC 18, 9 hit\
    \ points, and immunity to all damage except fire damage. The freed creature appears\
    \ in an unoccupied space of its choice within 30 feet of the shattered crystal."
  "name": "Ice Stasis (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril makes one weapon attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature within 30 feet of Auril takes 5 (2d4) piercing damage from\
    \ swirling ice, and nonmagical, open flames in that area are extinguished."
  "name": "Ice Flurry (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril uses Create Ice Mephit or causes one to ice mephit she can see within\
    \ 60 feet of her to explode and die. A mephit that dies in this way does not use\
    \ its Death Burst. Instead, each creature within 10 feet of the exploding mephit\
    \ must succeed on a DC 21 Dexterity saving throw, taking 13 (3d8) piercing damage\
    \ on a failed saving throw, and half as much damage on a successful one."
  "name": "Splinter (Costs 3 Actions)"
"source":
- "IDRotF"
name: Auril (Second Form)
image: "[[Auril (Second Form).png]]"
---

# Auril (Second Form)

```statblock
"name": "Auril (Second Form)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "136"
"hit_dice": "13d10 + 65"
"stats":
- !!int "16"
- !!int "16"
- !!int "21"
- !!int "24"
- !!int "26"
- !!int "28"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "12"
  "Constitution": !!int "9"
"skillsaves":
  "Intimidation": !!int "13"
  "Deception": !!int "13"
  "Insight": !!int "12"
  "Perception": !!int "16"
"damage_vulnerabilities": "fire"
"damage_immunities": "cold, poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned,\
  \ stunned"
"senses": "darkvision 120 ft., truesight 120 ft., passive Perception 26"
"languages": "all, telepathy 1000 ft."
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril can't be surprised and can't be changed into another form against\
    \ her will."
  "name": "Divine Being"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Auril drops to 0 hit points, her body collapses into shards of ice,\
    \ whereupon Auril instantly reappears in her [third form](/compendium/bestiary/npc/auril-third-form-idrotf.md),\
    \ in an unoccupied space within 60 feet of where her second form was destroyed.\
    \ Her initiative count doesn't change."
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
  "desc": "Auril attacks twice with her ice morningstar or hurls three ice darts."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage plus 9 (2d8) cold damage."
  "name": "Ice Morningstar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +7 to hit, range 20/60 ft., one target. Hit: 5\
    \ (1d4 + 3) piercing damage plus 3 (1d6) cold damage."
  "name": "Ice Dart"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril causes a magical blast of cold air to erupt from her hand. Each creature\
    \ in a 60-foot cone must make a DC 21 Constitution saving throw, taking 36 (8d8)\
    \ cold damage on a failed save, or half as much damage on a successful one."
  "name": "Cone of Cold (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril breaks off an icicle from her body and hurls it into an unoccupied\
    \ space she can see within 20 feet of her, where it magically transforms into\
    \ an [ice mephit](/compendium/bestiary/elemental/ice-mephit.md) (see its entry\
    \ in the Monster Manual). The mephit acts immediately after Auril in the initiative\
    \ order and obeys her commands."
  "name": "Create Ice Mephit (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril magically creates a gem-sized ice crystal that hovers in a space\
    \ within 5 feet of her. Auril then targets a creature she can see within 60 feet\
    \ of the crystal. The target must succeed on a DC 21 Charisma saving throw or\
    \ become trapped in the crystal, which is immovable. If the saving throw succeeds,\
    \ the crystal shatters and nothing else happens. A creature trapped in the crystal\
    \ is [stunned](/rules/conditions.md#stunned), has total cover against attacks\
    \ and other effects outside the crystal, and takes 21 (6d6) cold damage at the\
    \ start of each of its turns. The creature can repeat the saving throw at the\
    \ end of each of its turns, freeing itself on a success. The creature is also\
    \ freed if the crystal is destroyed, which is a Tiny object with AC 18, 9 hit\
    \ points, and immunity to all damage except fire damage. The freed creature appears\
    \ in an unoccupied space of its choice within 30 feet of the shattered crystal."
  "name": "Ice Stasis (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril makes one weapon attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature within 30 feet of Auril takes 5 (2d4) piercing damage from\
    \ swirling ice, and nonmagical, open flames in that area are extinguished."
  "name": "Ice Flurry (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril uses Create Ice Mephit or causes one to ice mephit she can see within\
    \ 60 feet of her to explode and die. A mephit that dies in this way does not use\
    \ its Death Burst. Instead, each creature within 10 feet of the exploding mephit\
    \ must succeed on a DC 21 Dexterity saving throw, taking 13 (3d8) piercing damage\
    \ on a failed saving throw, and half as much damage on a successful one."
  "name": "Splinter (Costs 3 Actions)"
"source":
- "IDRotF"
"image": "[[Auril (Second Form).png]]"
```
^statblock

*Source: Icewind Dale: Rime of the Frostmaiden p. 277*

## Description

Auril's second form, known to her worshipers as Lady Icekiss or the Brittle Maiden, is that of a 10-foot-tall woman of fearsome aspect made entirely of ice and frost. Her eyes burn with a cold blue light, and a thin cloak of mist forms around her. Blades of ice grow out of her body at odd angles, breaking off before they get too long. When she moves, her body crackles.

In this form, Auril creates weapons of ice with which to combat foes. These weapons are supernaturally resilient until Auril discards them, whereupon they break and melt like normal ice.

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