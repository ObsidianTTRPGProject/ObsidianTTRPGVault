---
cssclass: json5e-monster
tags:
- compendium/src/idrotf
- monster/size/tiny
- monster/type/elemental
aliases: ["Chwinga"]
statblock: true
"name": "Chwinga"
"size": "Tiny"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "5"
"hit_dice": "2d4"
"stats":
- !!int "1"
- !!int "20"
- !!int "10"
- !!int "14"
- !!int "16"
- !!int "16"
"speed": "walk 20 ft., climb 20 ft., swim 20 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "7"
  "Acrobatics": !!int "7"
"senses": "blindsight 60 ft., passive Perception 17"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chwinga's innate spellcasting ability is Wisdom. It can innately cast\
    \ the following spells, requiring no material or verbal components:\n\nAt will:\
    \ [druidcraft](/compendium/spells/druidcraft.md), [guidance](/compendium/spells/guidance.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md), [resistance](/compendium/spells/resistance.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chwinga doesn't require air, food, or drink. When it dies, it turns\
    \ into a handful of flower petals, a cloud of pollen, a stone statuette resembling\
    \ its former self, a tiny sphere of smooth stone, or a puddle of fresh water (your\
    \ choice)."
  "name": "Unusual Nature"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the chwinga is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, it instead takes no damage if it succeeds\
    \ on the saving throw, and only half damage if it fails."
  "name": "Evasion"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chwinga targets a humanoid it can see within 5 feet of it. The target\
    \ gains a supernatural charm of the DM's choice. See \"chapter 7\" of the Dungeon\
    \ Masters Guide for more information on supernatural charms."
  "name": "Magical Gift (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chwinga magically takes shelter inside a rock, a living plant, or a\
    \ natural source of fresh water in its space. The chwinga can't be targeted by\
    \ any attack, spell, or other effect while inside this shelter, and the shelter\
    \ doesn't impair the chwinga's blindsight. The chwinga can use its action to emerge\
    \ from a shelter. If its shelter is destroyed, the chwinga is forced out and appears\
    \ in the shelter's space, but is otherwise unharmed."
  "name": "Natural Shelter"
"source":
- "IDRotF"
name: Chwinga
image: "[[Chwinga.png]]"
---

# Chwinga

```statblock
"name": "Chwinga"
"size": "Tiny"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "5"
"hit_dice": "2d4"
"stats":
- !!int "1"
- !!int "20"
- !!int "10"
- !!int "14"
- !!int "16"
- !!int "16"
"speed": "walk 20 ft., climb 20 ft., swim 20 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "7"
  "Acrobatics": !!int "7"
"senses": "blindsight 60 ft., passive Perception 17"
"languages": ""
"cr": "0"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chwinga's innate spellcasting ability is Wisdom. It can innately cast\
    \ the following spells, requiring no material or verbal components:\n\nAt will:\
    \ [druidcraft](/compendium/spells/druidcraft.md), [guidance](/compendium/spells/guidance.md),\
    \ [pass without trace](/compendium/spells/pass-without-trace.md), [resistance](/compendium/spells/resistance.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chwinga doesn't require air, food, or drink. When it dies, it turns\
    \ into a handful of flower petals, a cloud of pollen, a stone statuette resembling\
    \ its former self, a tiny sphere of smooth stone, or a puddle of fresh water (your\
    \ choice)."
  "name": "Unusual Nature"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the chwinga is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, it instead takes no damage if it succeeds\
    \ on the saving throw, and only half damage if it fails."
  "name": "Evasion"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chwinga targets a humanoid it can see within 5 feet of it. The target\
    \ gains a supernatural charm of the DM's choice. See \"chapter 7\" of the Dungeon\
    \ Masters Guide for more information on supernatural charms."
  "name": "Magical Gift (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The chwinga magically takes shelter inside a rock, a living plant, or a\
    \ natural source of fresh water in its space. The chwinga can't be targeted by\
    \ any attack, spell, or other effect while inside this shelter, and the shelter\
    \ doesn't impair the chwinga's blindsight. The chwinga can use its action to emerge\
    \ from a shelter. If its shelter is destroyed, the chwinga is forced out and appears\
    \ in the shelter's space, but is otherwise unharmed."
  "name": "Natural Shelter"
"source":
- "IDRotF"
"image": "[[Chwinga.png]]"
```
^statblock

*Source: Icewind Dale: Rime of the Frostmaiden p. 282*

## Description

A chwinga is a tiny elemental spirit that lives in plants, rocks, and rivers far from civilization. Those found in cold climates also live in ice and snow. Painfully shy, chwingas prefer to move about unseen.

Chwingas resemble 6-inch-tall animated dolls with mask-like faces, spindly limbs, and wild hair. Their appearance is sometimes foreshadowed by gentle breezes, the sweet smell of flowers, dancing fireflies, or snowflakes. They don't have names and cannot speak.

**Humanoid Fascination.** Chwingas find the trappings of civilization fascinating. They puzzle over creatures that wear armor, carry weapons, use tools, and cook food. When a chwinga encounters one or more humanoids, its curiosity sometimes gets the better of it, and it follows them for a short time to observe them. If it takes a liking to a humanoid, a chwinga might use its cantrips to aid the creature, or it might bestow a magical gift before departing. The aspect that attracts a chwinga to a humanoid can take any form. In some cases, a chwinga might simply like the way a humanoid walks or the way it combs its hair. Other times, it might be smitten by a humanoid's ability to play music or to eat copious amounts of food.

**Chwingas in Icewind Dale.** Chwingas first appeared in the published adventure Tomb of Annihilation as creatures indigenous to the tropical peninsula of Chult. As spirits of the elements, however, they range far and wide. Large numbers of them came to Icewind Dale with immigrants from Chult and made new homes for themselves in and around Ten-Towns. Those that remained near civilization adopted the garb of their humanoid neighbors, creating miniature coats for themselves. They can sometimes be seen riding on arctic foxes or snowshoe hares. Others wandered into the tundra, changing their coloration to blend in with their surroundings.

Exposure to Auril's nightly aurora and the unnatural blizzards she creates can cause chwingas to behave unpredictably, even insanely.

**New Chwinga Charms.** This section describes several new charms that chwingas living in Icewind Dale or other cold regions can bestow using their Magical Gift action.

- Charm of Biting Cold
- Charm of Bounty
- Charm of Cold Resistance
- Charm of Snowball Strike
- Charm of the Ice Troll
- Charm of the Snow Walker
- Charm of the Traveler's Haven