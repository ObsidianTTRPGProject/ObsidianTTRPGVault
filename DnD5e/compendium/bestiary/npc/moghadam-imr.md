---
cssclass: json5e-monster
tags:
- compendium/src/imr
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Moghadam"]
statblock: true
"name": "Moghadam"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "104"
"hit_dice": "19d8 + 19"
"stats":
- !!int "10"
- !!int "12"
- !!int "13"
- !!int "19"
- !!int "16"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
  "Intelligence": !!int "8"
  "Constitution": !!int "5"
"skillsaves":
  "Medicine": !!int "7"
  "Insight": !!int "7"
  "Arcana": !!int "8"
"senses": "passive Perception 13"
"languages": "Abyssal, Common, Dwarvish, Infernal, Undercommon"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moghadam is an 18th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 16, +8 to hit with spell attacks). He has the following artificer\
    \ spells prepared:\n\nCantrips (at will): [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [light](/compendium/spells/light.md), [message](/compendium/spells/message.md),\
    \ [shocking grasp](/compendium/spells/shocking-grasp.md)\n\n1st level (4 1st-level\
    \ slots): [comprehend languages](/compendium/spells/comprehend-languages.md),\
    \ [cure wounds](/compendium/spells/cure-wounds.md), [grease](/compendium/spells/grease.md),\
    \ [identify](/compendium/spells/identify.md)\n\n2nd level (3 2nd-level slots):\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [heat metal](/compendium/spells/heat-metal.md)\n\n3rd level (3 3rd-level slots):\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [flame arrows](/compendium/spells/flame-arrows-xge.md),\
    \ [hypnotic pattern](/compendium/spells/hypnotic-pattern.md)\n\n4th level (3\
    \ 4th-level slots): [fabricate](/compendium/spells/fabricate.md), [stone shape](/compendium/spells/stone-shape.md),\
    \ [stoneskin](/compendium/spells/stoneskin.md)\n\n5th level (1 5th-level slots):\
    \ [creation](/compendium/spells/creation.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moghadam wields [Ruinblade](/compendium/items/ruinblade-imr.md) (see appendix\
    \ C)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moghadam can manifest an artificial mind as a floating spectral image of\
    \ a [demilich](/compendium/bestiary/undead/demilich.md)'s jeweled skull. Moghadam\
    \ can communicate telepathically with this mind, send it up to 300 feet away from\
    \ him, and see and hear through it."
  "name": "Artificial Mind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moghadam can teleport himself into an unoccupied space next to his artificial\
    \ mind."
  "name": "Infoportation (1/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) slashing damage."
  "name": "Ruinblade"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While wielding [Ruinblade](/compendium/items/ruinblade-imr.md), Moghadam\
    \ can cast the [blight](/compendium/spells/blight.md) spell (DC 15)."
  "name": "Blight (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While wielding [Ruinblade](/compendium/items/ruinblade-imr.md), Moghadam\
    \ can cast the [disintegrate](/compendium/spells/disintegrate.md) spell against\
    \ any nonmagical object or creation of magical force."
  "name": "Disintegrate (1/7 Days)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moghadam overloads the thoughts of one creature within 5 feet of either\
    \ himself or his artificial mind. The target must succeed on a DC 16 Intelligence\
    \ saving throw or take 22 (4d8 + 4) psychic damage, and the next attack roll made\
    \ against the target before the end of Moghadam's next turn has advantage."
  "name": "Information Overload (Recharge 5-6)"
"source":
- "IMR"
name: Moghadam
image: "[[Moghadam.png]]"
---

# Moghadam

```statblock
"name": "Moghadam"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "104"
"hit_dice": "19d8 + 19"
"stats":
- !!int "10"
- !!int "12"
- !!int "13"
- !!int "19"
- !!int "16"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
  "Intelligence": !!int "8"
  "Constitution": !!int "5"
"skillsaves":
  "Medicine": !!int "7"
  "Insight": !!int "7"
  "Arcana": !!int "8"
"senses": "passive Perception 13"
"languages": "Abyssal, Common, Dwarvish, Infernal, Undercommon"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moghadam is an 18th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 16, +8 to hit with spell attacks). He has the following artificer\
    \ spells prepared:\n\nCantrips (at will): [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [light](/compendium/spells/light.md), [message](/compendium/spells/message.md),\
    \ [shocking grasp](/compendium/spells/shocking-grasp.md)\n\n1st level (4 1st-level\
    \ slots): [comprehend languages](/compendium/spells/comprehend-languages.md),\
    \ [cure wounds](/compendium/spells/cure-wounds.md), [grease](/compendium/spells/grease.md),\
    \ [identify](/compendium/spells/identify.md)\n\n2nd level (3 2nd-level slots):\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [heat metal](/compendium/spells/heat-metal.md)\n\n3rd level (3 3rd-level slots):\
    \ [dispel magic](/compendium/spells/dispel-magic.md), [flame arrows](/compendium/spells/flame-arrows-xge.md),\
    \ [hypnotic pattern](/compendium/spells/hypnotic-pattern.md)\n\n4th level (3\
    \ 4th-level slots): [fabricate](/compendium/spells/fabricate.md), [stone shape](/compendium/spells/stone-shape.md),\
    \ [stoneskin](/compendium/spells/stoneskin.md)\n\n5th level (1 5th-level slots):\
    \ [creation](/compendium/spells/creation.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moghadam wields [Ruinblade](/compendium/items/ruinblade-imr.md) (see appendix\
    \ C)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moghadam can manifest an artificial mind as a floating spectral image of\
    \ a [demilich](/compendium/bestiary/undead/demilich.md)'s jeweled skull. Moghadam\
    \ can communicate telepathically with this mind, send it up to 300 feet away from\
    \ him, and see and hear through it."
  "name": "Artificial Mind"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moghadam can teleport himself into an unoccupied space next to his artificial\
    \ mind."
  "name": "Infoportation (1/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d6\
    \ + 2) slashing damage."
  "name": "Ruinblade"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While wielding [Ruinblade](/compendium/items/ruinblade-imr.md), Moghadam\
    \ can cast the [blight](/compendium/spells/blight.md) spell (DC 15)."
  "name": "Blight (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While wielding [Ruinblade](/compendium/items/ruinblade-imr.md), Moghadam\
    \ can cast the [disintegrate](/compendium/spells/disintegrate.md) spell against\
    \ any nonmagical object or creation of magical force."
  "name": "Disintegrate (1/7 Days)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Moghadam overloads the thoughts of one creature within 5 feet of either\
    \ himself or his artificial mind. The target must succeed on a DC 16 Intelligence\
    \ saving throw or take 22 (4d8 + 4) psychic damage, and the next attack roll made\
    \ against the target before the end of Moghadam's next turn has advantage."
  "name": "Information Overload (Recharge 5-6)"
"source":
- "IMR"
"image": "[[Moghadam.png]]"
```
^statblock

*Source: Infernal Machine Rebuild p. 55*