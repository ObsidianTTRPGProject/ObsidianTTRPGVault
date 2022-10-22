---
cssclass: json5e-monster
tags:
- compendium/src/mff
- monster/size/medium
- monster/type/humanoid/blindheim
aliases: ["Blindheim"]
statblock: true
"name": "Blindheim"
"size": "Medium"
"type": "humanoid"
"subtype": "blindheim"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "13"
- !!int "16"
- !!int "15"
- !!int "8"
- !!int "10"
- !!int "9"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "3"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "Undercommon"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While its eyes are open, a blindheim projects bright light in a 60-foot\
    \ cone and dim light for an additional 60 feet. It sets the orientation of this\
    \ cone at the end of each of its turns. All creatures that can see the blindheim\
    \ have disadvantage on attack rolls while in the area of bright light and within\
    \ 15 feet of the blindheim. Creatures with the Sunlight Sensitivity trait that\
    \ can see the blindheim have disadvantage on attack rolls anywhere in the area\
    \ of bright light."
  "name": "Radiant Eyes"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Radiant energy erupts from the blindheim's eyes in a 15-foot cone. Each\
    \ creature in that area must succeed on a DC 12 Constitution saving throw or take\
    \ 7 (2d6) radiant damage and be [blinded](/rules/conditions.md#blinded) until\
    \ the end of the blindheim's next turn. Creatures with the Sunlight Sensitivity\
    \ trait have disadvantage on this saving throw."
  "name": "Radiant Blast"
"source":
- "MFF"
name: Blindheim
image: "[[Blindheim.png]]"
---

# Blindheim

```statblock
"name": "Blindheim"
"size": "Medium"
"type": "humanoid"
"subtype": "blindheim"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "13"
- !!int "16"
- !!int "15"
- !!int "8"
- !!int "10"
- !!int "9"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "3"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "Undercommon"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While its eyes are open, a blindheim projects bright light in a 60-foot\
    \ cone and dim light for an additional 60 feet. It sets the orientation of this\
    \ cone at the end of each of its turns. All creatures that can see the blindheim\
    \ have disadvantage on attack rolls while in the area of bright light and within\
    \ 15 feet of the blindheim. Creatures with the Sunlight Sensitivity trait that\
    \ can see the blindheim have disadvantage on attack rolls anywhere in the area\
    \ of bright light."
  "name": "Radiant Eyes"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Radiant energy erupts from the blindheim's eyes in a 15-foot cone. Each\
    \ creature in that area must succeed on a DC 12 Constitution saving throw or take\
    \ 7 (2d6) radiant damage and be [blinded](/rules/conditions.md#blinded) until\
    \ the end of the blindheim's next turn. Creatures with the Sunlight Sensitivity\
    \ trait have disadvantage on this saving throw."
  "name": "Radiant Blast"
"source":
- "MFF"
"image": "[[Blindheim.png]]"
```
^statblock

*Source: Mordenkainen's Fiendish Folio p. 5*

## Description

These frog-like humanoids have the ability to project intense, blinding light from their eyes. Dwelling on the fringes of the Underdark, blindheims are opportunistic ambushers who can be swayed into service with payment of fresh food and metal weapons. A blindheim's radiant eyes make these creatures a unique source of light in the Underdark depths, and are bright enough to hinder creatures that suffer in the presence of bright light—or to destroy their foes.

**Searing Eyes.** A blindheim projects searing light in a cone from its leering, bulging eyes. The intensity of this light is equivalent to natural sunlight, and can disturb or disrupt many creatures acclimated to the lightless depths. If a blindheim chooses to focus its gaze, this energy can even char flesh and bone.

**Opportunistic Mercenaries.** Blindheims have a fascination with tales and objects from the surface world, particularly plants and other natural items. They gather in the depths of the Underdark near routes used by merchants and other brave travelers. They typically make a cautious approach to stronger creatures, speaking in halting, croaking Undercommon to offer their services in return for fresh food, metal weapons, and trinkets from the surface world. But when they have superior numbers or engage creatures that appear weak, blindheims will often ambush to take what they want.

**Strange Outcasts.** The blindheims speak of an ancient era when their folk dwelled upon the surface. According to their tales, their ancestors stole a piece of the sun, then fled to the Underdark before devouring it and gaining the ability to project radiant energy from their eyes.

Blindheims fear that some day the sun will venture underground and have its revenge upon them. When dealing with surface dwellers, they insist that visitors swear to never tell the sun about them, and ask endless questions about the sun's actions, its anger, and its attitudes. But surface folk who attempt to soothe the blindheims' fears often cause these creatures great offense. In the minds of the blindheims, the sun could not possibly have forgotten their great and heroic theft, and anything said to dispel the belief that they remain infamous and feared by all folk of the surface rouses their anger.

**Pitiable Slaves.** Some Underdark creatures, particularly the drow and kuo-toa, raid blindheim settlements in search of slaves. Although the light from these creatures' eyes is a formidable threat to these raiders, a captured blindheim is a useful living weapon.