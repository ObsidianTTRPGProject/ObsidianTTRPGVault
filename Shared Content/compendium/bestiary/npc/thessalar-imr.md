---
cssclass: json5e-monster
tags:
- compendium/src/imr
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Thessalar"]
statblock: true
"name": "Thessalar"
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
  "Animal Handling": !!int "7"
  "Insight": !!int "7"
  "Arcana": !!int "8"
"damage_immunities": "acid, poison"
"condition_immunities": "poisoned"
"senses": "passive Perception 13"
"languages": "Common, Draconic, Elvish, Primordial"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thessalar is an 18th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 16, +8 to hit with spell attacks). He has the following artificer\
    \ spells prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md),\
    \ [mending](/compendium/spells/mending.md), [message](/compendium/spells/message.md),\
    \ [shocking grasp](/compendium/spells/shocking-grasp.md)\n\n1st level (4 1st-level\
    \ slots): [alarm](/compendium/spells/alarm.md), [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [identify](/compendium/spells/identify.md), [ray of sickness](/compendium/spells/ray-of-sickness.md)\n\
    \n2nd level (3 2nd-level slots): [invisibility](/compendium/spells/invisibility.md),\
    \ [Melf's acid arrow](/compendium/spells/melfs-acid-arrow.md), [web](/compendium/spells/web.md)\n\
    \n3rd level (3 3rd-level slots): [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [haste](/compendium/spells/haste.md), [stinking cloud](/compendium/spells/stinking-cloud.md)\n\
    \n4th level (3 4th-level slots): [blight](/compendium/spells/blight.md), [Mordenkainen's\
    \ faithful hound](/compendium/spells/mordenkainens-faithful-hound.md), [Otiluke's\
    \ resilient sphere](/compendium/spells/otilukes-resilient-sphere.md)\n\n5th\
    \ level (1 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thessalar wields a +1 dagger coated with [thessaltoxin poison](/compendium/items/thessaltoxin-imr.md)\
    \ (see appendix C)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thessalar is accompanied by his [Thessalar's homunculus](/compendium/bestiary/npc/thessalars-homunculus-imr.md).\
    \ If the [mending](/compendium/spells/mending.md) spell is cast on it, the homunculus\
    \ regains 2d6 hit points."
  "name": "Alchemical Homunculus"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any magic item that restores hit points and can be applied to a piercing\
    \ or slashing weapon (a potion, an ointment, and so forth) causes a hit with that\
    \ weapon to deal extra damage to Thessalar equal to the amount the item would\
    \ normally heal."
  "name": "Healing Toxicity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thessalar can cast [greater restoration](/compendium/spells/greater-restoration.md)\
    \ if he has access to [alchemical supplies](/compendium/items/alchemists-supplies.md)."
  "name": "Greater Restoration (1/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 3 (1d4 + 1) piercing damage, and the target must succeed\
    \ on a DC 15 Constitution saving throw. On a failed save, the target is affected\
    \ as if by the [polymorph](/compendium/spells/polymorph.md) spell, transforming\
    \ into a random beast or a creature it has seen within the last 24 hours (as chosen\
    \ by the DM). This effect lasts until the target finishes a long rest."
  "name": "Dagger"
"source":
- "IMR"
name: Thessalar
image: "[[Thessalar.png]]"
---

# Thessalar

```statblock
"name": "Thessalar"
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
  "Animal Handling": !!int "7"
  "Insight": !!int "7"
  "Arcana": !!int "8"
"damage_immunities": "acid, poison"
"condition_immunities": "poisoned"
"senses": "passive Perception 13"
"languages": "Common, Draconic, Elvish, Primordial"
"cr": "12"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thessalar is an 18th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 16, +8 to hit with spell attacks). He has the following artificer\
    \ spells prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md),\
    \ [mending](/compendium/spells/mending.md), [message](/compendium/spells/message.md),\
    \ [shocking grasp](/compendium/spells/shocking-grasp.md)\n\n1st level (4 1st-level\
    \ slots): [alarm](/compendium/spells/alarm.md), [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [identify](/compendium/spells/identify.md), [ray of sickness](/compendium/spells/ray-of-sickness.md)\n\
    \n2nd level (3 2nd-level slots): [invisibility](/compendium/spells/invisibility.md),\
    \ [Melf's acid arrow](/compendium/spells/melfs-acid-arrow.md), [web](/compendium/spells/web.md)\n\
    \n3rd level (3 3rd-level slots): [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [haste](/compendium/spells/haste.md), [stinking cloud](/compendium/spells/stinking-cloud.md)\n\
    \n4th level (3 4th-level slots): [blight](/compendium/spells/blight.md), [Mordenkainen's\
    \ faithful hound](/compendium/spells/mordenkainens-faithful-hound.md), [Otiluke's\
    \ resilient sphere](/compendium/spells/otilukes-resilient-sphere.md)\n\n5th\
    \ level (1 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thessalar wields a +1 dagger coated with [thessaltoxin poison](/compendium/items/thessaltoxin-imr.md)\
    \ (see appendix C)."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thessalar is accompanied by his [Thessalar's homunculus](/compendium/bestiary/npc/thessalars-homunculus-imr.md).\
    \ If the [mending](/compendium/spells/mending.md) spell is cast on it, the homunculus\
    \ regains 2d6 hit points."
  "name": "Alchemical Homunculus"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any magic item that restores hit points and can be applied to a piercing\
    \ or slashing weapon (a potion, an ointment, and so forth) causes a hit with that\
    \ weapon to deal extra damage to Thessalar equal to the amount the item would\
    \ normally heal."
  "name": "Healing Toxicity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Thessalar can cast [greater restoration](/compendium/spells/greater-restoration.md)\
    \ if he has access to [alchemical supplies](/compendium/items/alchemists-supplies.md)."
  "name": "Greater Restoration (1/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 3 (1d4 + 1) piercing damage, and the target must succeed\
    \ on a DC 15 Constitution saving throw. On a failed save, the target is affected\
    \ as if by the [polymorph](/compendium/spells/polymorph.md) spell, transforming\
    \ into a random beast or a creature it has seen within the last 24 hours (as chosen\
    \ by the DM). This effect lasts until the target finishes a long rest."
  "name": "Dagger"
"source":
- "IMR"
"image": "[[Thessalar.png]]"
```
^statblock

*Source: Infernal Machine Rebuild p. 57*

## Description

Thessalar was a master alchemist and creator of monsters, whose own blood was said to possess dire magical properties.

He is vainglorious, egotistical, and utterly ruthless in furthering his research. His career began as a priest in the service of Moloch, where he rose through the ranks before eventually taking over the temple as a working laboratory. Most of his experiments have involved the pursuit of new forms of life, resulting in such creatures as the thessalhydra and the owlbear. In recent years, he has also researched the prolonging of life—namely his own. Thessalar hopes that by becoming a lich, his research and experiments can continue indefinitely.

Over time, Thessalar has subjected himself to so many of his own experiments that his blood has taken on alchemical and magical properties. He regularly uses it as the basis for many of the reagents used throughout his labs.