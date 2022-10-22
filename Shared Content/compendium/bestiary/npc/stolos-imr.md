---
cssclass: json5e-monster
tags:
- compendium/src/imr
- monster/size/medium
- monster/type/humanoid/any-race
- monster/environment/desert
- monster/environment/hill
- monster/environment/mountain
- monster/environment/underdark
- monster/environment/urban
aliases: ["Stolos"]
statblock: true
"name": "Stolos"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "9"
- !!int "14"
- !!int "15"
- !!int "12"
- !!int "12"
- !!int "18"
"speed": "walk 30 ft., fly 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "4"
"skillsaves":
  "History": !!int "4"
  "Arcana": !!int "4"
"damage_resistances": "psychic"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any two languages, telepathy 30 ft."
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Stolos's innate spellcasting ability is Charisma. It can innately cast\
    \ the following spells (spell save DC 15), requiring no material components:\n\
    \nAt will: [detect magic](/compendium/spells/detect-magic.md), [jump](/compendium/spells/jump.md),\
    \ [levitate](/compendium/spells/levitate.md), [mage armor](/compendium/spells/mage-armor.md)\
    \ (self only), [speak with dead](/compendium/spells/speak-with-dead.md)\n\n1/day\
    \ each: [arcane gate](/compendium/spells/arcane-gate.md), [true seeing](/compendium/spells/true-seeing.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Stolos is a 14th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 15, +7 to hit with spell attacks). It regains its expended spell\
    \ slots when it finishes a short or long rest. It knows the following warlock\
    \ spells:\n\nCantrips (at will): [chill touch](/compendium/spells/chill-touch.md),\
    \ [eldritch blast](/compendium/spells/eldritch-blast.md), [guidance](/compendium/spells/guidance.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st-5th level (3 5th-level slots): [armor of Agathys](/compendium/spells/armor-of-agathys.md),\
    \ [arms of Hadar](/compendium/spells/arms-of-hadar.md), [crown of madness](/compendium/spells/crown-of-madness.md),\
    \ [clairvoyance](/compendium/spells/clairvoyance.md), [contact other plane](/compendium/spells/contact-other-plane.md),\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [dimension door](/compendium/spells/dimension-door.md),\
    \ [dissonant whispers](/compendium/spells/dissonant-whispers.md), [dominate beast](/compendium/spells/dominate-beast.md),\
    \ [telekinesis](/compendium/spells/telekinesis.md), [vampiric touch](/compendium/spells/vampiric-touch.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of each of Stolos's turns, each creature of its choice within\
    \ 5 feet of it must succeed on a DC 15 Wisdom saving throw or take 10 (3d6) psychic\
    \ damage, provided that Stolos isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Whispering Aura"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6\
    \ + 1) slashing damage."
  "name": "Talons"
"source":
- "IMR"
name: Stolos
image: "[[Stolos.png]]"
---

# Stolos

```statblock
"name": "Stolos"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "9"
- !!int "14"
- !!int "15"
- !!int "12"
- !!int "12"
- !!int "18"
"speed": "walk 30 ft., fly 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "4"
"skillsaves":
  "History": !!int "4"
  "Arcana": !!int "4"
"damage_resistances": "psychic"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any two languages, telepathy 30 ft."
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Stolos's innate spellcasting ability is Charisma. It can innately cast\
    \ the following spells (spell save DC 15), requiring no material components:\n\
    \nAt will: [detect magic](/compendium/spells/detect-magic.md), [jump](/compendium/spells/jump.md),\
    \ [levitate](/compendium/spells/levitate.md), [mage armor](/compendium/spells/mage-armor.md)\
    \ (self only), [speak with dead](/compendium/spells/speak-with-dead.md)\n\n1/day\
    \ each: [arcane gate](/compendium/spells/arcane-gate.md), [true seeing](/compendium/spells/true-seeing.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Stolos is a 14th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 15, +7 to hit with spell attacks). It regains its expended spell\
    \ slots when it finishes a short or long rest. It knows the following warlock\
    \ spells:\n\nCantrips (at will): [chill touch](/compendium/spells/chill-touch.md),\
    \ [eldritch blast](/compendium/spells/eldritch-blast.md), [guidance](/compendium/spells/guidance.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st-5th level (3 5th-level slots): [armor of Agathys](/compendium/spells/armor-of-agathys.md),\
    \ [arms of Hadar](/compendium/spells/arms-of-hadar.md), [crown of madness](/compendium/spells/crown-of-madness.md),\
    \ [clairvoyance](/compendium/spells/clairvoyance.md), [contact other plane](/compendium/spells/contact-other-plane.md),\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [dimension door](/compendium/spells/dimension-door.md),\
    \ [dissonant whispers](/compendium/spells/dissonant-whispers.md), [dominate beast](/compendium/spells/dominate-beast.md),\
    \ [telekinesis](/compendium/spells/telekinesis.md), [vampiric touch](/compendium/spells/vampiric-touch.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "At the start of each of Stolos's turns, each creature of its choice within\
    \ 5 feet of it must succeed on a DC 15 Wisdom saving throw or take 10 (3d6) psychic\
    \ damage, provided that Stolos isn't [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Whispering Aura"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6\
    \ + 1) slashing damage."
  "name": "Talons"
"source":
- "IMR"
"image": "[[Stolos.png]]"
```
^statblock

*Source: Infernal Machine Rebuild p. 33*

## Environment

desert, hill, mountain, underdark, urban