---
cssclass: json5e-monster
tags:
- compendium/src/wbtw
- monster/size/tiny
- monster/type/fey
aliases: ["Brigganock"]
statblock: true
"name": "Brigganock"
"size": "Tiny"
"type": "fey"
"alignment": "Neutral Good"
"ac": !!int "12"
"hp": !!int "9"
"hit_dice": "2d4 + 4"
"stats":
- !!int "4"
- !!int "15"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "13"
"speed": "walk 15 ft."
"saves":
  "Dexterity": !!int "4"
  "Constitution": !!int "4"
"condition_immunities": "exhaustion"
"senses": "passive Perception 10"
"languages": "Common, Sylvan"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The brigganock casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 11):\n\
    \nAt will: [minor illusion](/compendium/spells/minor-illusion.md), [spare\
    \ the dying](/compendium/spells/spare-the-dying.md)\n\n1/day each: [animal\
    \ friendship](/compendium/spells/animal-friendship.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [meld into stone](/compendium/spells/meld-into-stone.md), [silence](/compendium/spells/silence.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The brigganock has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put it to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The brigganock is accompanied by an insubstantial, invulnerable ball of\
    \ light that contains its soul. The brigganock can't turn off the light or control\
    \ its brightness. The soul light sheds bright light in a 10-foot radius and dim\
    \ light for an additional 10 feet. If the brigganock dies, its soul light fades\
    \ away."
  "name": "Soul Light"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Using a pickaxe or similar tool, a brigganock can burrow through solid\
    \ rock at a speed of 5 feet, leaving a 6-inch-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Pickaxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The brigganock accelerates the passage of time around itself, enabling\
    \ it to accomplish up to 1 hour of work in a matter of seconds. This work can't\
    \ affect any creature other than the brigganock, or any object being worn or carried\
    \ by another creature, and the activity must take place within a 10-foot cube.\
    \ For example, the brigganock could use this action to rapidly carve a pumpkin,\
    \ cook and eat dinner, move a pile of stones, or tie a dozen knots in a length\
    \ of rope."
  "name": "Time Lapse (Recharges after a Short or Long Rest)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The brigganock moves its soul light up to 30 feet in any direction to an\
    \ unoccupied space it can see. At the end of the current turn, the light returns\
    \ to the brigganock."
  "name": "Move Soul Light"
"source":
- "WBtW"
name: Brigganock
image: "[[Brigganock.png]]"
---

# Brigganock

```statblock
"name": "Brigganock"
"size": "Tiny"
"type": "fey"
"alignment": "Neutral Good"
"ac": !!int "12"
"hp": !!int "9"
"hit_dice": "2d4 + 4"
"stats":
- !!int "4"
- !!int "15"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "13"
"speed": "walk 15 ft."
"saves":
  "Dexterity": !!int "4"
  "Constitution": !!int "4"
"condition_immunities": "exhaustion"
"senses": "passive Perception 10"
"languages": "Common, Sylvan"
"cr": "1/8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The brigganock casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 11):\n\
    \nAt will: [minor illusion](/compendium/spells/minor-illusion.md), [spare\
    \ the dying](/compendium/spells/spare-the-dying.md)\n\n1/day each: [animal\
    \ friendship](/compendium/spells/animal-friendship.md), [faerie fire](/compendium/spells/faerie-fire.md),\
    \ [meld into stone](/compendium/spells/meld-into-stone.md), [silence](/compendium/spells/silence.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The brigganock has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put it to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The brigganock is accompanied by an insubstantial, invulnerable ball of\
    \ light that contains its soul. The brigganock can't turn off the light or control\
    \ its brightness. The soul light sheds bright light in a 10-foot radius and dim\
    \ light for an additional 10 feet. If the brigganock dies, its soul light fades\
    \ away."
  "name": "Soul Light"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Using a pickaxe or similar tool, a brigganock can burrow through solid\
    \ rock at a speed of 5 feet, leaving a 6-inch-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Pickaxe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The brigganock accelerates the passage of time around itself, enabling\
    \ it to accomplish up to 1 hour of work in a matter of seconds. This work can't\
    \ affect any creature other than the brigganock, or any object being worn or carried\
    \ by another creature, and the activity must take place within a 10-foot cube.\
    \ For example, the brigganock could use this action to rapidly carve a pumpkin,\
    \ cook and eat dinner, move a pile of stones, or tie a dozen knots in a length\
    \ of rope."
  "name": "Time Lapse (Recharges after a Short or Long Rest)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The brigganock moves its soul light up to 30 feet in any direction to an\
    \ unoccupied space it can see. At the end of the current turn, the light returns\
    \ to the brigganock."
  "name": "Move Soul Light"
"source":
- "WBtW"
"image": "[[Brigganock.png]]"
```
^statblock

*Source: The Wild Beyond the Witchlight p. 230*

## Description

Brigganocks are frantic, mouse-sized creatures that live in mines. Whenever a mortal makes a nonmagical wish, perhaps while blowing out the candles on a birthday cake or tossing a coin down a well, an echo of that wish becomes lodged in a stone buried deep in the earth of the Feywild. Brigganocks seek out these wish stones, discarding the ones that contain wishes of ill intent and keeping those that hold good wishes. Brigganocks refine wish stones into gems and use them to decorate their architecture and crafts, or they trade them to other Fey for food and favors. A more powerful Fey creature can use a wish stone to scry on the maker of the wish, empower a supernatural charm, or provide the spark needed to create an animated object. Other uses are possible as well.

A brigganock's soul lives outside its body, manifesting as a bulb of pale light that floats alongside it and helps the brigganock see in the dark. Brigganocks have minor spellcasting abilities that help them survive. They also have the ability to manipulate time, allowing them to accomplish hour-long tasks in a matter of seconds, though a brigganock must rest between these bursts of temporal acceleration.

Brigganocks like to nibble on cheese, lettuce, and other soft foods. They eat quite a lot for creatures of their size and never turn down a good meal.