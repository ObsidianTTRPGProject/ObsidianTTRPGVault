---
cssclass: json5e-monster
tags:
- compendium/src/idrotf
- monster/size/small
- monster/type/elemental
aliases: ["Auril (Third Form)"]
statblock: true
"name": "Auril (Third Form)"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "19"
"hp": !!int "136"
"hit_dice": "16d6 + 80"
"stats":
- !!int "1"
- !!int "12"
- !!int "21"
- !!int "24"
- !!int "26"
- !!int "28"
"speed": "walk 0 ft., fly 30 ft. (hover)"
"saves":
  "Wisdom": !!int "12"
  "Constitution": !!int "9"
"skillsaves":
  "Intimidation": !!int "13"
  "Deception": !!int "13"
  "Insight": !!int "12"
  "Perception": !!int "16"
"damage_vulnerabilities": "thunder"
"damage_immunities": "cold, poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned,\
  \ prone, stunned"
"senses": "blindsight 120 ft. (blind beyond this radius), truesight 120 ft., passive\
  \ Perception 26"
"languages": "all, telepathy 1,000 ft."
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril can't be surprised and can't be changed into another form against\
    \ her will."
  "name": "Divine Being"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Auril drops to 0 hit points, her crystalline form shatters and her\
    \ divine spark vanishes. She is dead until the next winter solstice, when she\
    \ reappears at full health in a cold, remote location of her choosing."
  "name": "Divine Resurrection"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "So long as Auril has at least 1 hit point in this form, each creature within\
    \ 10 feet of her takes 10 cold damage at the start of each of her turns."
  "name": "Frigid Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Auril fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (1/Day in This Form)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril uses Polar Ray twice."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +13 to hit, range 120 ft., one target. Hit: 14 (4d6)\
    \ cold damage."
  "name": "Polar Ray"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril creates a magical blizzard in a 30-foot-radius sphere centered on\
    \ herself. The area within the sphere is heavily obscured, and the sphere moves\
    \ with Auril. The effect lasts until Auril drops to 0 hit points in this form,\
    \ until she chooses to end the effect (no action required), or until her concentration\
    \ is broken (as if concentrating on a spell)."
  "name": "Blizzard Veil"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril uses Polar Ray."
  "name": "Polar Ray"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril's Frigid Aura deals an extra 10 cold damage until the end of her\
    \ next turn."
  "name": "Intensify Aura (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril's form flares with a blue light. Each creature that can see Auril\
    \ and is within 10 feet of her must succeed on a DC 17 Wisdom saving throw or\
    \ be [blinded](/rules/conditions.md#blinded) by Auril's magical gleam for 1 minute.\
    \ The [blinded](/rules/conditions.md#blinded) creature can repeat the saving throw\
    \ at the end of each of its turns, ending the effect on itself on a success."
  "name": "Blinding Gleam (Costs 2 Actions)"
"source":
- "IDRotF"
name: Auril (Third Form)
image: "[[Auril (Third Form).png]]"
---

# Auril (Third Form)

```statblock
"name": "Auril (Third Form)"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "19"
"hp": !!int "136"
"hit_dice": "16d6 + 80"
"stats":
- !!int "1"
- !!int "12"
- !!int "21"
- !!int "24"
- !!int "26"
- !!int "28"
"speed": "walk 0 ft., fly 30 ft. (hover)"
"saves":
  "Wisdom": !!int "12"
  "Constitution": !!int "9"
"skillsaves":
  "Intimidation": !!int "13"
  "Deception": !!int "13"
  "Insight": !!int "12"
  "Perception": !!int "16"
"damage_vulnerabilities": "thunder"
"damage_immunities": "cold, poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned,\
  \ prone, stunned"
"senses": "blindsight 120 ft. (blind beyond this radius), truesight 120 ft., passive\
  \ Perception 26"
"languages": "all, telepathy 1,000 ft."
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril can't be surprised and can't be changed into another form against\
    \ her will."
  "name": "Divine Being"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Auril drops to 0 hit points, her crystalline form shatters and her\
    \ divine spark vanishes. She is dead until the next winter solstice, when she\
    \ reappears at full health in a cold, remote location of her choosing."
  "name": "Divine Resurrection"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "So long as Auril has at least 1 hit point in this form, each creature within\
    \ 10 feet of her takes 10 cold damage at the start of each of her turns."
  "name": "Frigid Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Auril fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (1/Day in This Form)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril uses Polar Ray twice."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +13 to hit, range 120 ft., one target. Hit: 14 (4d6)\
    \ cold damage."
  "name": "Polar Ray"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril creates a magical blizzard in a 30-foot-radius sphere centered on\
    \ herself. The area within the sphere is heavily obscured, and the sphere moves\
    \ with Auril. The effect lasts until Auril drops to 0 hit points in this form,\
    \ until she chooses to end the effect (no action required), or until her concentration\
    \ is broken (as if concentrating on a spell)."
  "name": "Blizzard Veil"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril uses Polar Ray."
  "name": "Polar Ray"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril's Frigid Aura deals an extra 10 cold damage until the end of her\
    \ next turn."
  "name": "Intensify Aura (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Auril's form flares with a blue light. Each creature that can see Auril\
    \ and is within 10 feet of her must succeed on a DC 17 Wisdom saving throw or\
    \ be [blinded](/rules/conditions.md#blinded) by Auril's magical gleam for 1 minute.\
    \ The [blinded](/rules/conditions.md#blinded) creature can repeat the saving throw\
    \ at the end of each of its turns, ending the effect on itself on a success."
  "name": "Blinding Gleam (Costs 2 Actions)"
"source":
- "IDRotF"
"image": "[[Auril (Third Form).png]]"
```
^statblock

*Source: Icewind Dale: Rime of the Frostmaiden p. 278*

## Description

Auril's third form, called Winter's Womb or the Queen of Frozen Tears by her most ardent followers, is a 3-foot-diameter ice diamond containing the god's divine spark. The diamond has facets and a sharp point at the bottom. It hovers in the air, radiating intense cold all around it. When Auril speaks, her voice seems to emanate from the heart of the diamond.

If Auril is killed in her third and final form, she is dead until the next winter solstice. While she is dead, her mortal worshipers lose their god-granted spells and abilities.

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