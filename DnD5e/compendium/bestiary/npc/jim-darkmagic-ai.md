---
cssclass: json5e-monster
tags:
- compendium/src/ai
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Jim Darkmagic"]
statblock: true
"name": "Jim Darkmagic"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "8"
- !!int "14"
- !!int "10"
- !!int "18"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "7"
"skillsaves":
  "Animal Handling": !!int "4"
  "History": !!int "7"
  "Performance": !!int "5"
  "Acrobatics": !!int "5"
  "Arcana": !!int "7"
"senses": "passive Perception 11"
"languages": "Common"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jim is a 9th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 15, +7 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [friends](/compendium/spells/friends.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1st level (4 1st-level slots): [disguise self](/compendium/spells/disguise-self.md),\
    \ [Jim's magic missile](/compendium/spells/jims-magic-missile-ai.md), [mage armor](/compendium/spells/mage-armor.md)\n\
    \n2nd level (3 2nd-level slots): [invisibility](/compendium/spells/invisibility.md),\
    \ [Jim's glowing coin](/compendium/spells/jims-glowing-coin-ai.md)\n\n3rd level\
    \ (3 3rd-level slots): [incite greed](/compendium/spells/incite-greed-ai.md),\
    \ [fireball](/compendium/spells/fireball.md)\n\n4th level (3 4th-level slots):\
    \ [conjure minor elementals](/compendium/spells/conjure-minor-elementals.md),\
    \ [polymorph](/compendium/spells/polymorph.md)\n\n5th level (1 5th-level slots):\
    \ [mislead](/compendium/spells/mislead.md)\nNew spell introduced in chapter 3"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jim carries a [wand of wonder](/compendium/items/wand-of-wonder.md)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Jim teleports up to 30 feet to a space he can see. The\
    \ space must be unoccupied or occupied by a willing Small or Medium creature.\
    \ If the latter, Jim and the willing creature both teleport, swapping places."
  "name": "Benign Transportation (Recharges after Jim Casts a Conjuration Spell of\
    \ 1st Level or Higher)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jim conjures an inanimate object, no larger than 3 feet on a side and no\
    \ more than 10 pounds, in his hand or on the ground in an unoccupied space he\
    \ can see within 10 feet of him. The object is visibly magical, radiating dim\
    \ light out to 5 feet. It disappears if it takes any damage, after 1 hour, or\
    \ when Jim uses this feature again."
  "name": "Minor Conjuration"
"source":
- "AI"
name: Jim Darkmagic
image: "[[Jim Darkmagic.png]]"
---

# Jim Darkmagic

```statblock
"name": "Jim Darkmagic"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "8"
- !!int "14"
- !!int "10"
- !!int "18"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "7"
"skillsaves":
  "Animal Handling": !!int "4"
  "History": !!int "7"
  "Performance": !!int "5"
  "Acrobatics": !!int "5"
  "Arcana": !!int "7"
"senses": "passive Perception 11"
"languages": "Common"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jim is a 9th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 15, +7 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [friends](/compendium/spells/friends.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1st level (4 1st-level slots): [disguise self](/compendium/spells/disguise-self.md),\
    \ [Jim's magic missile](/compendium/spells/jims-magic-missile-ai.md), [mage armor](/compendium/spells/mage-armor.md)\n\
    \n2nd level (3 2nd-level slots): [invisibility](/compendium/spells/invisibility.md),\
    \ [Jim's glowing coin](/compendium/spells/jims-glowing-coin-ai.md)\n\n3rd level\
    \ (3 3rd-level slots): [incite greed](/compendium/spells/incite-greed-ai.md),\
    \ [fireball](/compendium/spells/fireball.md)\n\n4th level (3 4th-level slots):\
    \ [conjure minor elementals](/compendium/spells/conjure-minor-elementals.md),\
    \ [polymorph](/compendium/spells/polymorph.md)\n\n5th level (1 5th-level slots):\
    \ [mislead](/compendium/spells/mislead.md)\nNew spell introduced in chapter 3"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jim carries a [wand of wonder](/compendium/items/wand-of-wonder.md)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, Jim teleports up to 30 feet to a space he can see. The\
    \ space must be unoccupied or occupied by a willing Small or Medium creature.\
    \ If the latter, Jim and the willing creature both teleport, swapping places."
  "name": "Benign Transportation (Recharges after Jim Casts a Conjuration Spell of\
    \ 1st Level or Higher)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Jim conjures an inanimate object, no larger than 3 feet on a side and no\
    \ more than 10 pounds, in his hand or on the ground in an unoccupied space he\
    \ can see within 10 feet of him. The object is visibly magical, radiating dim\
    \ light out to 5 feet. It disappears if it takes any damage, after 1 hour, or\
    \ when Jim uses this feature again."
  "name": "Minor Conjuration"
"source":
- "AI"
"image": "[[Jim Darkmagic.png]]"
```
^statblock

*Source: Acquisitions Incorporated p. 197*

## Description

> [!quote]-  
> 
> Have a magical day!

James Winifred Darkmagic III is the scion of a mysterious, multiplanar wizarding family. Jim's arcane pedigree has long preceded him, incorporating equally healthy amounts of magical training and innate eldritch prowess. However, despite a natural talent that could have allowed him to make a name for himself as a court wizard, or perhaps "that strange old man in the village," Jim's original penchant was not for the magic of scroll or spell, but for the stage.

As an entertainer and purveyor of the "Jim Darkmagic Experience," the legendary mage can often be found in markets and town squares, performing feats of mundane legerdemain. The renown he has earned for these feats is nearly equaled by the reputation that follows him as chief arcanist (and occasional arsonist) for Acquisitions Incorporated. And although his skills as an adventurer and real wizard remain highly sought after, Jim looks forward to a well-earned retirement, at which point he hopes to become a "real wizard"-by which he means a fake wizard-full time.