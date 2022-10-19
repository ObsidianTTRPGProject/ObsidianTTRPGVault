---
cssclass: json5e-monster
tags:
- compendium/src/mff
- monster/size/huge
- monster/type/giant
aliases: ["Fog Giant"]
statblock: true
"name": "Fog Giant"
"size": "Huge"
"type": "giant"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "200"
"hit_dice": "16d12 + 96"
"stats":
- !!int "27"
- !!int "10"
- !!int "22"
- !!int "12"
- !!int "16"
- !!int "16"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "7"
  "Constitution": !!int "10"
"skillsaves":
  "Insight": !!int "7"
  "Perception": !!int "7"
  "Persuasion": !!int "7"
"senses": "passive Perception 17"
"languages": "Common, Giant"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant's innate spellcasting ability is Charisma. It can innately cast\
    \ the following spells, requiring no material components:\n\nAt will: [detect\
    \ magic](/compendium/spells/detect-magic.md), [fog cloud](/compendium/spells/fog-cloud.md),\
    \ [light](/compendium/spells/light.md)\n\n3/day each: [feather fall](/compendium/spells/feather-fall.md),\
    \ [misty step](/compendium/spells/misty-step.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "During its turn, the fog giant ignores the effects of [fog cloud](/compendium/spells/fog-cloud.md)\
    \ spells cast by it or other allied fog giants."
  "name": "Denizen of the Mist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant has advantage on Wisdom (Perception) checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant makes two greatsword attacks and casts [fog cloud](/compendium/spells/fog-cloud.md)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 29 (6d6\
    \ + 8) slashing damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit:\
    \ 30 (4d10 + 8) bludgeoning damage."
  "name": "Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fog giant shouts bloodcurdling threats at the creatures that serve\
    \ it. Each medium or smaller ally of the giant within 120 feet of it that can\
    \ see or hear it can use its reaction to make a melee attack."
  "name": "Petty Tyrant (Recharge 6)"
"source":
- "MFF"
name: Fog Giant
image: "[[Fog Giant.png]]"
---

# Fog Giant

```statblock
"name": "Fog Giant"
"size": "Huge"
"type": "giant"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "200"
"hit_dice": "16d12 + 96"
"stats":
- !!int "27"
- !!int "10"
- !!int "22"
- !!int "12"
- !!int "16"
- !!int "16"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "7"
  "Constitution": !!int "10"
"skillsaves":
  "Insight": !!int "7"
  "Perception": !!int "7"
  "Persuasion": !!int "7"
"senses": "passive Perception 17"
"languages": "Common, Giant"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant's innate spellcasting ability is Charisma. It can innately cast\
    \ the following spells, requiring no material components:\n\nAt will: [detect\
    \ magic](/compendium/spells/detect-magic.md), [fog cloud](/compendium/spells/fog-cloud.md),\
    \ [light](/compendium/spells/light.md)\n\n3/day each: [feather fall](/compendium/spells/feather-fall.md),\
    \ [misty step](/compendium/spells/misty-step.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "During its turn, the fog giant ignores the effects of [fog cloud](/compendium/spells/fog-cloud.md)\
    \ spells cast by it or other allied fog giants."
  "name": "Denizen of the Mist"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant has advantage on Wisdom (Perception) checks that rely on smell."
  "name": "Keen Smell"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The giant makes two greatsword attacks and casts [fog cloud](/compendium/spells/fog-cloud.md)."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 29 (6d6\
    \ + 8) slashing damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit:\
    \ 30 (4d10 + 8) bludgeoning damage."
  "name": "Rock"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The fog giant shouts bloodcurdling threats at the creatures that serve\
    \ it. Each medium or smaller ally of the giant within 120 feet of it that can\
    \ see or hear it can use its reaction to make a melee attack."
  "name": "Petty Tyrant (Recharge 6)"
"source":
- "MFF"
"image": "[[Fog Giant.png]]"
```
^statblock

*Source: Mordenkainen's Fiendish Folio p. 10*

## Description

The place of cloud giants in the ordning—the set of values and expectations that determines their rank in giant society—is driven by wealth. Those cloud giants foolish or unlucky enough to have their treasure plundered fall to the bottom of the ordning, becoming outcasts known as fog giants. Cut off from their proper place in society, they become raiders and marauders who seek to reclaim their treasure or start a new hoard—by any means possible.

**Beleaguered Moguls.** Though they live as ruthless raiders, fog giants remain tasteful and refined in their desires. They remember their former wealth and power with a bitter mix of longing, regret, and shame, seeking always to replace the grandest treasures they once possessed. Simple coins, gems, or trade goods do nothing to satisfy the giant's desires. Instead, they seek out grand works of art, wondrous jewelry, and beautiful sculptures.

**Reasonable Offers.** Fog giants are powerful warriors, but they prefer to use threats and intimidation to get their way. A fog giant seeks out news and rumors of treasures that appeal to its sense of refinement, then tracks down and treats owners of those treasures to a show of force. Kicking down the gate of a backwater duke's castle, slaying a dozen or more guards, then calling for parley is a typical fog giant strategy—followed by an offer to leave the duke alive in return for a treasure or two.

**Bandit Kings.** Forced to dwell in exile in the lands of the small folk, many fog giants develop an interest in those folk. Using a combination of threats and the promise of vast reward once they return to their proper station, a fog giant lures desperate criminals, cunning bandits, and other raiders into their service in the dismal wilds they inhabit. These giants prefer to work with ambitious humans, renegade elves, and greedy dwarves—all folk they see as properly civilized. They treat orcs, goblinoids, and other "barbarian" types as pesky vermin, best killed or driven away.

**Calculating Masters.** When a fog giant accumulates followers, it sets them to the task of rebuilding the giant's collection of wondrous, expensive treasures. Its favored servants are civilized folk who can mingle among the rich and refined. These agents take note of treasures that might interest the fog giant, who then plots heists, raids, and other stratagems to seize the chosen prize. A giant might undertake a carefully planned robbery, making extensive use of magic to cover their presence. Or it might engage in a brute-force raid that involves tearing off the roof of a merchant's home, seizing what they seek, and stalking away before the town watch can rally.

**Intricate Networks.** Clever, ambitious, and greedy, many fog giants build up whole networks of bandits, raiders, spies, and criminals. In some cases, such a network might grow large enough that minions in the lower ranks are ignorant of their leader's true nature. Fog giants who amass such organizations think of themselves as exiled nobles, and often take on such fanciful titles as Duke of Robbery, Baron of Bandits, or Lord of Larceny.