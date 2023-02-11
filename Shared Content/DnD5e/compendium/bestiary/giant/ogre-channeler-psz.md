---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/large
- monster/type/giant
- monster/environment/forest
- monster/environment/urban
aliases: ["Ogre Channeler"]
statblock: true
"name": "Ogre Channeler"
"size": "Large"
"type": "giant"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "110"
"hit_dice": "13d10 + 39"
"stats":
- !!int "19"
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "12"
- !!int "15"
"speed": "walk 30 ft., fly 30 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "3"
  "Wisdom": !!int "4"
  "Constitution": !!int "6"
"skillsaves":
  "Deception": !!int "8"
  "Perception": !!int "4"
  "Arcana": !!int "5"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Giant"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ogre's innate spellcasting ability is Charisma (spell save DC 13).\
    \ The ogre can innately cast the following spells, requiring no material components:\n\
    \nAt will: [darkness](/compendium/spells/darkness.md), [invisibility](/compendium/spells/invisibility.md)\n\
    \n1/day each: [charm person](/compendium/spells/charm-person.md), [cone of\
    \ cold](/compendium/spells/cone-of-cold.md), [gaseous form](/compendium/spells/gaseous-form.md),\
    \ [sleep](/compendium/spells/sleep.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ogre's weapon attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ogre regains 10 hit points at the start of its turn if it has at least\
    \ 1 hit point."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ogre makes two attacks, either with its claws or its glaive."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage."
  "name": "Claw (Oni Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10\
    \ + 4) slashing damage, or 9 (1d10 + 4) slashing damage in Small or Medium form."
  "name": "Glaive"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ogre magically polymorphs into a Small or Medium humanoid, into a Large\
    \ giant, or back into its true form. Other than its size, its statistics are the\
    \ same in each form. The only equipment that is transformed is its glaive, which\
    \ shrinks so that it can be wielded in humanoid form. If the ogre dies, it reverts\
    \ to its true form, and its glaive reverts to its normal size."
  "name": "Change Shape"
"source":
- "PSZ"
name: Ogre Channeler
image: "[[Ogre Channeler.png]]"
---

# Ogre Channeler

```statblock
"name": "Ogre Channeler"
"size": "Large"
"type": "giant"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "110"
"hit_dice": "13d10 + 39"
"stats":
- !!int "19"
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "12"
- !!int "15"
"speed": "walk 30 ft., fly 30 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "3"
  "Wisdom": !!int "4"
  "Constitution": !!int "6"
"skillsaves":
  "Deception": !!int "8"
  "Perception": !!int "4"
  "Arcana": !!int "5"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Giant"
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ogre's innate spellcasting ability is Charisma (spell save DC 13).\
    \ The ogre can innately cast the following spells, requiring no material components:\n\
    \nAt will: [darkness](/compendium/spells/darkness.md), [invisibility](/compendium/spells/invisibility.md)\n\
    \n1/day each: [charm person](/compendium/spells/charm-person.md), [cone of\
    \ cold](/compendium/spells/cone-of-cold.md), [gaseous form](/compendium/spells/gaseous-form.md),\
    \ [sleep](/compendium/spells/sleep.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ogre's weapon attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ogre regains 10 hit points at the start of its turn if it has at least\
    \ 1 hit point."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ogre makes two attacks, either with its claws or its glaive."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage."
  "name": "Claw (Oni Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10\
    \ + 4) slashing damage, or 9 (1d10 + 4) slashing damage in Small or Medium form."
  "name": "Glaive"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ogre magically polymorphs into a Small or Medium humanoid, into a Large\
    \ giant, or back into its true form. Other than its size, its statistics are the\
    \ same in each form. The only equipment that is transformed is its glaive, which\
    \ shrinks so that it can be wielded in humanoid form. If the ogre dies, it reverts\
    \ to its true form, and its glaive reverts to its normal size."
  "name": "Change Shape"
"source":
- "PSZ"
"image": "[[Ogre Channeler.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 31*

## Environment

forest, urban