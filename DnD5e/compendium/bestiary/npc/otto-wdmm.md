---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/large
- monster/type/dragon
- monster/environment/forest
aliases: ["Otto"]
statblock: true
"name": "Otto"
"size": "Large"
"type": "dragon"
"alignment": "Chaotic Good"
"ac": !!int "15"
"hp": !!int "104"
"hit_dice": "16d10 + 16"
"stats":
- !!int "18"
- !!int "20"
- !!int "13"
- !!int "14"
- !!int "12"
- !!int "16"
"speed": "walk 10 ft., fly 60 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "3"
  "Arcana": !!int "4"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Draconic, Sylvan"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon's innate spellcasting ability is Charisma (spell save DC 13).\
    \ It can innately cast a number of spells, requiring no material components:\n\
    \n1/day each: [color spray](/compendium/spells/color-spray.md), [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [hallucinatory terrain](/compendium/spells/hallucinatory-terrain.md), [mage\
    \ hand](/compendium/spells/mage-hand.md), [major image](/compendium/spells/major-image.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [mirror image](/compendium/spells/mirror-image.md),\
    \ [polymorph](/compendium/spells/polymorph.md), [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A faerie dragon's scales change hue as it ages, moving through all the\
    \ colors of the rainbow. All faerie dragons have innate spellcasting ability,\
    \ gaining new spells as they mature.\n\nRed—5 years or less\n\nOrange—6–10 years\n\
    \nYellow—11–20 years\n\nGreen—21–30 years\n\nBlue—31–40 years\n\nIndigo—41–50\
    \ years\n\nViolet—51 years or more\n\nA green or older faerie dragon's CR increases\
    \ to 2."
  "name": "The Colors of Age"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the dragon can magically turn [invisible](/rules/conditions.md#invisible)\
    \ until its concentration ends (as if concentrating on a spell). Any equipment\
    \ the dragon wears or carries is [invisible](/rules/conditions.md#invisible) with\
    \ it."
  "name": "Superior Invisibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Using telepathy, the dragon can magically communicate with any other faerie\
    \ dragon within 60 feet of it."
  "name": "Limited Telepathy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The faerie dragon has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 2d6 +\
    \ 4 piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a puff of euphoria gas at one creature within 5 feet\
    \ of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute,\
    \ the target can't take reactions and must roll a d6 at the start of each of its\
    \ turns to determine its behavior during the turn:\n\n1–4. The target takes no\
    \ action or bonus action and uses all of its movement to move in a random direction.\n\
    \n5–6. The target doesn't move, and the only thing it can do on its turn is make\
    \ a DC 11 Wisdom saving throw, ending the effect on itself on a success."
  "name": "Euphoria Breath (Recharge 5-6)"
"source":
- "WDMM"
name: Otto
image: "[[Otto.png]]"
---

# Otto

```statblock
"name": "Otto"
"size": "Large"
"type": "dragon"
"alignment": "Chaotic Good"
"ac": !!int "15"
"hp": !!int "104"
"hit_dice": "16d10 + 16"
"stats":
- !!int "18"
- !!int "20"
- !!int "13"
- !!int "14"
- !!int "12"
- !!int "16"
"speed": "walk 10 ft., fly 60 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "3"
  "Arcana": !!int "4"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Draconic, Sylvan"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon's innate spellcasting ability is Charisma (spell save DC 13).\
    \ It can innately cast a number of spells, requiring no material components:\n\
    \n1/day each: [color spray](/compendium/spells/color-spray.md), [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [hallucinatory terrain](/compendium/spells/hallucinatory-terrain.md), [mage\
    \ hand](/compendium/spells/mage-hand.md), [major image](/compendium/spells/major-image.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [mirror image](/compendium/spells/mirror-image.md),\
    \ [polymorph](/compendium/spells/polymorph.md), [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A faerie dragon's scales change hue as it ages, moving through all the\
    \ colors of the rainbow. All faerie dragons have innate spellcasting ability,\
    \ gaining new spells as they mature.\n\nRed—5 years or less\n\nOrange—6–10 years\n\
    \nYellow—11–20 years\n\nGreen—21–30 years\n\nBlue—31–40 years\n\nIndigo—41–50\
    \ years\n\nViolet—51 years or more\n\nA green or older faerie dragon's CR increases\
    \ to 2."
  "name": "The Colors of Age"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the dragon can magically turn [invisible](/rules/conditions.md#invisible)\
    \ until its concentration ends (as if concentrating on a spell). Any equipment\
    \ the dragon wears or carries is [invisible](/rules/conditions.md#invisible) with\
    \ it."
  "name": "Superior Invisibility"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Using telepathy, the dragon can magically communicate with any other faerie\
    \ dragon within 60 feet of it."
  "name": "Limited Telepathy"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The faerie dragon has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 2d6 +\
    \ 4 piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a puff of euphoria gas at one creature within 5 feet\
    \ of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute,\
    \ the target can't take reactions and must roll a d6 at the start of each of its\
    \ turns to determine its behavior during the turn:\n\n1–4. The target takes no\
    \ action or bonus action and uses all of its movement to move in a random direction.\n\
    \n5–6. The target doesn't move, and the only thing it can do on its turn is make\
    \ a DC 11 Wisdom saving throw, ending the effect on itself on a success."
  "name": "Euphoria Breath (Recharge 5-6)"
"source":
- "WDMM"
"image": "[[Otto.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 96*

## Environment

forest