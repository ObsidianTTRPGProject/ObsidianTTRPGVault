---
cssclass: json5e-monster
tags:
- compendium/src/pota
- monster/size/medium
- monster/type/humanoid/elf
aliases: ["Aerisi Kalinoth"]
statblock: true
"name": "Aerisi Kalinoth"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "8"
- !!int "16"
- !!int "12"
- !!int "17"
- !!int "10"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "3"
  "History": !!int "6"
  "Arcana": !!int "6"
"damage_resistances": "lightning"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Auran, Common, Elvish"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Aerisi is a 12th-level spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 14, +6 to hit with spell attacks). Aerisi has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [gust](/compendium/spells/gust-xge.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [message](/compendium/spells/message.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [ray of frost](/compendium/spells/ray-of-frost.md),\
    \ [shocking grasp](/compendium/spells/shocking-grasp.md)\n\n1st level (4 1st-level\
    \ slots): [charm person](/compendium/spells/charm-person.md), [feather fall](/compendium/spells/feather-fall.md),\
    \ [mage armor](/compendium/spells/mage-armor.md), [thunderwave](/compendium/spells/thunderwave.md)\n\
    \n2nd level (3 2nd-level slots): [dust devil](/compendium/spells/dust-devil-xge.md),\
    \ [gust of wind](/compendium/spells/gust-of-wind.md), [invisibility](/compendium/spells/invisibility.md)\n\
    \n3rd level (3 3rd-level slots): [fly](/compendium/spells/fly.md), [gaseous\
    \ form](/compendium/spells/gaseous-form.md), [lightning bolt](/compendium/spells/lightning-bolt.md)\n\
    \n4th level (3 4th-level slots): [ice storm](/compendium/spells/ice-storm.md),\
    \ [storm sphere](/compendium/spells/storm-sphere-xge.md)\n\n5th level (2 5th-level\
    \ slots): [cloudkill](/compendium/spells/cloudkill.md), [seeming](/compendium/spells/seeming.md)\
    \ (cast each day)\n\n6th level (1 6th-level slots): [chain lightning](/compendium/spells/chain-lightning.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Aerisi has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put her to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Aerisi drops to 0 hit points, her body disappears in a howling whirlwind\
    \ that disperses quickly and harmlessly. Anything she is wearing or carrying is\
    \ left behind."
  "name": "Howling Defeat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Aerisi fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 9 (1d6 + 6) piercing damage, or 10 (1d8 + 6) piercing\
    \ damage if used with two hands to make a melee attack, plus 3 (1d6) lightning\
    \ damage."
  "name": "Windvane"
"source":
- "PotA"
name: Aerisi Kalinoth
image: "[[Aerisi Kalinoth.png]]"
---

# Aerisi Kalinoth

```statblock
"name": "Aerisi Kalinoth"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "8"
- !!int "16"
- !!int "12"
- !!int "17"
- !!int "10"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "3"
  "History": !!int "6"
  "Arcana": !!int "6"
"damage_resistances": "lightning"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Auran, Common, Elvish"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Aerisi is a 12th-level spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 14, +6 to hit with spell attacks). Aerisi has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [gust](/compendium/spells/gust-xge.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [message](/compendium/spells/message.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [ray of frost](/compendium/spells/ray-of-frost.md),\
    \ [shocking grasp](/compendium/spells/shocking-grasp.md)\n\n1st level (4 1st-level\
    \ slots): [charm person](/compendium/spells/charm-person.md), [feather fall](/compendium/spells/feather-fall.md),\
    \ [mage armor](/compendium/spells/mage-armor.md), [thunderwave](/compendium/spells/thunderwave.md)\n\
    \n2nd level (3 2nd-level slots): [dust devil](/compendium/spells/dust-devil-xge.md),\
    \ [gust of wind](/compendium/spells/gust-of-wind.md), [invisibility](/compendium/spells/invisibility.md)\n\
    \n3rd level (3 3rd-level slots): [fly](/compendium/spells/fly.md), [gaseous\
    \ form](/compendium/spells/gaseous-form.md), [lightning bolt](/compendium/spells/lightning-bolt.md)\n\
    \n4th level (3 4th-level slots): [ice storm](/compendium/spells/ice-storm.md),\
    \ [storm sphere](/compendium/spells/storm-sphere-xge.md)\n\n5th level (2 5th-level\
    \ slots): [cloudkill](/compendium/spells/cloudkill.md), [seeming](/compendium/spells/seeming.md)\
    \ (cast each day)\n\n6th level (1 6th-level slots): [chain lightning](/compendium/spells/chain-lightning.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Aerisi has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put her to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Aerisi drops to 0 hit points, her body disappears in a howling whirlwind\
    \ that disperses quickly and harmlessly. Anything she is wearing or carrying is\
    \ left behind."
  "name": "Howling Defeat"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Aerisi fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 9 (1d6 + 6) piercing damage, or 10 (1d8 + 6) piercing\
    \ damage if used with two hands to make a melee attack, plus 3 (1d6) lightning\
    \ damage."
  "name": "Windvane"
"source":
- "PotA"
"image": "[[Aerisi Kalinoth.png]]"
```
^statblock

*Source: Princes of the Apocalypse p. 192*

## Description

Aerisi Kalinoth is the air prophet of the Elder Elemental Eye and leader of the Cult of the Howling Hatred. Tall and slender, with dark hair and (illusory) feathered wings that gently fan the air, Aerisi Kalinoth speaks to her people in a whisper that belies her violent temper, which reveals itself whenever she is denied.

Aerisi was a sheltered moon elf princess named Dara Algwynenn Kalinoth who grew up in a remote Faerie realm. Her parents had wished to protect her from the harsh realities of the world, but they only succeeded in spoiling her. When they tried to discipline their wilful daughter, she used the power of elemental air against them. Soon after, her dreams led her to the ancient dwarven ruins where the spear Windvane awaited her.

Dara changed her name to Aerisi and pretended to be an avariel (winged elf) princess like the ones from her storybooks. Then Aerisi used her talents for enchantment magic to sway mortals into joining her cult. She has convinced all her followers that she is in fact an avariel, and believes it herself even though she must cast [seeming](/compendium/spells/seeming.md) each day to "reveal" her wings.

Aerisi is prone to deluded flights of fancy and impulsive decadence. She sees herself as a beautiful, fierce, and just ruler who wields elemental power because she deserves it.

**In the Air Node.** When danger threatens the Temple of Howling Hatred, Aerisi retreats to the Howling Caves, the air node. Within this node, Aerisi gains one additional use of her Legendary Resistance trait.