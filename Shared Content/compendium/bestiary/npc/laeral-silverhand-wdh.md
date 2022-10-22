---
cssclass: json5e-monster
tags:
- compendium/src/wdh
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Laeral Silverhand"]
statblock: true
"name": "Laeral Silverhand"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Good"
"ac": !!int "18"
"hp": !!int "228"
"hit_dice": "24d8 + 120"
"stats":
- !!int "13"
- !!int "17"
- !!int "20"
- !!int "20"
- !!int "20"
- !!int "19"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "11"
  "Intelligence": !!int "11"
"skillsaves":
  "Insight": !!int "11"
  "Perception": !!int "11"
  "History": !!int "17"
  "Arcana": !!int "17"
  "Persuasion": !!int "10"
"damage_resistances": "fire"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "truesight 60 ft., passive Perception 21"
"languages": "Common, Draconic, Dwarvish, Elvish, Giant, Infernal"
"cr": "17"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Laeral is a 19th-level spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 21, +13 to hit with spell attacks). Laeral has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [ray of frost](/compendium/spells/ray-of-frost.md)\n\
    \n1st level: [detect magic](/compendium/spells/detect-magic.md), [disguise\
    \ self](/compendium/spells/disguise-self.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level: [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [invisibility](/compendium/spells/invisibility.md), [misty step](/compendium/spells/misty-step.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [fly](/compendium/spells/fly.md), [sending](/compendium/spells/sending.md),\
    \ [tongues](/compendium/spells/tongues.md)\n\n4th level (3 4th-level slots):\
    \ [banishment](/compendium/spells/banishment.md), [greater invisibility](/compendium/spells/greater-invisibility.md),\
    \ [Otiluke's resilient sphere](/compendium/spells/otilukes-resilient-sphere.md)\n\
    \n5th level (3 5th-level slots): [cone of cold](/compendium/spells/cone-of-cold.md),\
    \ [geas](/compendium/spells/geas.md), [Rary's telepathic bond](/compendium/spells/rarys-telepathic-bond.md)\n\
    \n6th level (2 6th-level slots): [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md),\
    \ [mass suggestion](/compendium/spells/mass-suggestion.md)\n\n7th level (1 7th-level\
    \ slots): [prismatic spray](/compendium/spells/prismatic-spray.md), [teleport](/compendium/spells/teleport.md)\n\
    \n8th level (1 8th-level slots): [feeblemind](/compendium/spells/feeblemind.md),\
    \ [power word stun](/compendium/spells/power-word-stun.md)\n\n9th level (1 9th-level\
    \ slots): [time stop](/compendium/spells/time-stop.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Laeral wears a white [robe of the archmagi](/compendium/items/robe-of-the-archmagi.md)\
    \ (accounted for in her statistics). She wields a flame tongue longsword."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While wearing her robe of the archmagi, Laeral has advantage on saving\
    \ throws against spells and other magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Laeral makes three attacks with her silver hair and flame tongue, in any\
    \ combination. She can cast one of her cantrips or 1st-level spells before or\
    \ after making these attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 7 (2d6)\
    \ force damage, and the target must succeed on a DC 19 Constitution saving throw\
    \ or be [paralyzed](/rules/conditions.md#paralyzed) for 1 minute. The target can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself on a success."
  "name": "Silver Hair"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) slashing damage plus 7 (2d6) fire damage, or 6 (1d10 + 1) slashing damage\
    \ plus 7 (2d6) fire damage when used with two hands."
  "name": "Flame Tongue"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical, heatless, silver fire harmlessly erupts from Laeral and surrounds\
    \ her until she is [incapacitated](/rules/conditions.md#incapacitated) or until\
    \ she uses an action to quench it. She gains one of the following benefits of\
    \ her choice, which lasts until the silver fire ends:\n\n- She can breathe underwater.\n\
    - She can survive without food and water.\n- She is immune to magic that would\
    \ ascertain her thoughts, truthfulness, alignment, or creature type.\n- She gains\
    \ resistance to cold damage, and she is unharmed by temperatures as low as -50\
    \ degrees Fahrenheit.\n\nWhile the silver fire is present, she has the following\
    \ additional action options:\n\n- Cast the [cure wounds](/compendium/spells/cure-wounds.md)\
    \ spell. The target regains 1d8 + 5 hit points. After Laeral takes this action,\
    \ roll a d6. On a roll of 1, the silver fire disappears.\n- Cast the [revivify](/compendium/spells/revivify.md)\
    \ spell without material components. After Laeral takes this action, roll a d6.\
    \ On a roll of 1-2, the silver fire disappears.\n- Release a 60-foot line of silver\
    \ fire that is 5 feet wide or a 30-foot cone of silver fire. Objects in the area\
    \ that aren't being worn or carried take 26 (4d12) fire damage. Each creature\
    \ in the area must succeed on a DC 21 Dexterity saving throw, taking 26 (4d12)\
    \ fire damage on a failed save, or half as much damage on a successful one. After\
    \ Laeral takes this action, roll a d6. On a roll of 1-3, the silver fire disappears."
  "name": "Spellfire (Recharges after a Long Rest)"
"source":
- "WDH"
name: Laeral Silverhand
image: "[[Laeral Silverhand.png]]"
---

# Laeral Silverhand

```statblock
"name": "Laeral Silverhand"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Good"
"ac": !!int "18"
"hp": !!int "228"
"hit_dice": "24d8 + 120"
"stats":
- !!int "13"
- !!int "17"
- !!int "20"
- !!int "20"
- !!int "20"
- !!int "19"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "11"
  "Intelligence": !!int "11"
"skillsaves":
  "Insight": !!int "11"
  "Perception": !!int "11"
  "History": !!int "17"
  "Arcana": !!int "17"
  "Persuasion": !!int "10"
"damage_resistances": "fire"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "truesight 60 ft., passive Perception 21"
"languages": "Common, Draconic, Dwarvish, Elvish, Giant, Infernal"
"cr": "17"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Laeral is a 19th-level spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 21, +13 to hit with spell attacks). Laeral has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [ray of frost](/compendium/spells/ray-of-frost.md)\n\
    \n1st level: [detect magic](/compendium/spells/detect-magic.md), [disguise\
    \ self](/compendium/spells/disguise-self.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level: [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [invisibility](/compendium/spells/invisibility.md), [misty step](/compendium/spells/misty-step.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [fly](/compendium/spells/fly.md), [sending](/compendium/spells/sending.md),\
    \ [tongues](/compendium/spells/tongues.md)\n\n4th level (3 4th-level slots):\
    \ [banishment](/compendium/spells/banishment.md), [greater invisibility](/compendium/spells/greater-invisibility.md),\
    \ [Otiluke's resilient sphere](/compendium/spells/otilukes-resilient-sphere.md)\n\
    \n5th level (3 5th-level slots): [cone of cold](/compendium/spells/cone-of-cold.md),\
    \ [geas](/compendium/spells/geas.md), [Rary's telepathic bond](/compendium/spells/rarys-telepathic-bond.md)\n\
    \n6th level (2 6th-level slots): [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md),\
    \ [mass suggestion](/compendium/spells/mass-suggestion.md)\n\n7th level (1 7th-level\
    \ slots): [prismatic spray](/compendium/spells/prismatic-spray.md), [teleport](/compendium/spells/teleport.md)\n\
    \n8th level (1 8th-level slots): [feeblemind](/compendium/spells/feeblemind.md),\
    \ [power word stun](/compendium/spells/power-word-stun.md)\n\n9th level (1 9th-level\
    \ slots): [time stop](/compendium/spells/time-stop.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Laeral wears a white [robe of the archmagi](/compendium/items/robe-of-the-archmagi.md)\
    \ (accounted for in her statistics). She wields a flame tongue longsword."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While wearing her robe of the archmagi, Laeral has advantage on saving\
    \ throws against spells and other magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Laeral makes three attacks with her silver hair and flame tongue, in any\
    \ combination. She can cast one of her cantrips or 1st-level spells before or\
    \ after making these attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 7 (2d6)\
    \ force damage, and the target must succeed on a DC 19 Constitution saving throw\
    \ or be [paralyzed](/rules/conditions.md#paralyzed) for 1 minute. The target can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself on a success."
  "name": "Silver Hair"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) slashing damage plus 7 (2d6) fire damage, or 6 (1d10 + 1) slashing damage\
    \ plus 7 (2d6) fire damage when used with two hands."
  "name": "Flame Tongue"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical, heatless, silver fire harmlessly erupts from Laeral and surrounds\
    \ her until she is [incapacitated](/rules/conditions.md#incapacitated) or until\
    \ she uses an action to quench it. She gains one of the following benefits of\
    \ her choice, which lasts until the silver fire ends:\n\n- She can breathe underwater.\n\
    - She can survive without food and water.\n- She is immune to magic that would\
    \ ascertain her thoughts, truthfulness, alignment, or creature type.\n- She gains\
    \ resistance to cold damage, and she is unharmed by temperatures as low as -50\
    \ degrees Fahrenheit.\n\nWhile the silver fire is present, she has the following\
    \ additional action options:\n\n- Cast the [cure wounds](/compendium/spells/cure-wounds.md)\
    \ spell. The target regains 1d8 + 5 hit points. After Laeral takes this action,\
    \ roll a d6. On a roll of 1, the silver fire disappears.\n- Cast the [revivify](/compendium/spells/revivify.md)\
    \ spell without material components. After Laeral takes this action, roll a d6.\
    \ On a roll of 1-2, the silver fire disappears.\n- Release a 60-foot line of silver\
    \ fire that is 5 feet wide or a 30-foot cone of silver fire. Objects in the area\
    \ that aren't being worn or carried take 26 (4d12) fire damage. Each creature\
    \ in the area must succeed on a DC 21 Dexterity saving throw, taking 26 (4d12)\
    \ fire damage on a failed save, or half as much damage on a successful one. After\
    \ Laeral takes this action, roll a d6. On a roll of 1-3, the silver fire disappears."
  "name": "Spellfire (Recharges after a Long Rest)"
"source":
- "WDH"
"image": "[[Laeral Silverhand.png]]"
```
^statblock

*Source: Waterdeep: Dragon Heist p. 207*

## Description

Anamanué Laeral Silverhand was born in the Year of the Cowl (765 DR), the fifth of seven daughters of the goddess Mystra. Each of the Seven Sisters is a powerful and ageless beauty with a penchant for arcane magic.

Long ago, Laeral ruled a kingdom called Stornanter and held the title of Witch-Queen of the North. After that, she led a band of adventurers called the Nine. She met and married Khelben Arunsun, who would later become the Blackstaff, the Lord Mage of Waterdeep. After Khelben died, Laeral retired from public life. She resurfaced after the Spellplague and the Sundering, weakened by Mystra's death, rebirth, and withdrawal from the world.

Laeral's magic isn't as great as it once was, though she does her utmost to hide this fact. Only Elminster, her trusted friend and advisor, knows the extent of her decline. Despite her diminished abilities, Laeral remains a formidable, clear-headed wizard with plenty of magic at her disposal.

A few years ago, Dagult Neverember was ousted as Open Lord of Waterdeep. Laeral reluctantly stepped into the vacancy at the request of the Masked Lords, and has served as Waterdeep's Open Lord ever since. Initially overwhelmed by the demands of the nobles and guildmasters, she has settled nicely into her new role. She uses her magic sparingly and relies on trusted advisors and deputies. As time allows, she likes to venture outside the Palace of Waterdeep in disguise, just to clear her head or check up on old friends (and enemies).

Laeral's relationship with Vajra Safahr, the current Blackstaff, has its challenges. For one thing, Laeral is much older, much wiser, and much more powerful than Vajra, whom she views as an insecure child. In addition, Vajra wields the Blackstaff, which has Khelben Arunsun's soul and the souls of all the other Blackstaffs bound inside it. Laeral covets the staff, because it contains all that's left of her husband. Not surprisingly, the two mages avoid each other as much as possible.

In times of great need, Laeral can command Vajra to unleash Force Grey. Until that order is given, Force Grey isn't allowed to conduct operations in Waterdeep, though Laeral's spies tell her that Vajra has secretly activated members of the elite order and sent them on a number of unauthorized missions. Laeral is reluctant to confront Vajra on the matter, and rationalizes her inaction by framing it as a test of Vajra's competence.