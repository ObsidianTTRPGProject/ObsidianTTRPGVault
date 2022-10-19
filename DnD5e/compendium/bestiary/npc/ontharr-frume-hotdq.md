---
cssclass: json5e-monster
tags:
- compendium/src/hotdq
- monster/size/medium
- monster/type/humanoid/human
- monster/environment/desert
- monster/environment/urban
aliases: ["Ontharr Frume"]
statblock: true
"name": "Ontharr Frume"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "16"
- !!int "10"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "5"
  "Religion": !!int "4"
"senses": "passive Perception 13"
"languages": "any two languages"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The priest is a 9th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 15, +7 to hit with spell attacks). It has the following cleric\
    \ spells prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md),\
    \ [mending](/compendium/spells/mending.md), [sacred flame](/compendium/spells/sacred-flame.md),\
    \ [spare the dying](/compendium/spells/spare-the-dying.md)\n\n1st level (4 1st-level\
    \ slots): [divine favor](/compendium/spells/divine-favor.md), [guiding bolt](/compendium/spells/guiding-bolt.md),\
    \ [healing word](/compendium/spells/healing-word.md), [shield of faith](/compendium/spells/shield-of-faith.md)\n\
    \n2nd level (3 2nd-level slots): [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [magic weapon](/compendium/spells/magic-weapon.md), [prayer of healing](/compendium/spells/prayer-of-healing.md),\
    \ [silence](/compendium/spells/silence.md), [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\
    \n3rd level (3 3rd-level slots): [beacon of hope](/compendium/spells/beacon-of-hope.md),\
    \ [crusader's mantle](/compendium/spells/crusaders-mantle.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [revivify](/compendium/spells/revivify.md), [spirit guardians](/compendium/spells/spirit-guardians.md),\
    \ [water walk](/compendium/spells/water-walk.md)\n\n4th level (3 4th-level slots):\
    \ [banishment](/compendium/spells/banishment.md), [freedom of movement](/compendium/spells/freedom-of-movement.md),\
    \ [guardian of faith](/compendium/spells/guardian-of-faith.md), [stoneskin](/compendium/spells/stoneskin.md)\n\
    \n5th level (1 5th-level slots): [flame strike](/compendium/spells/flame-strike.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md), [hold monster](/compendium/spells/hold-monster.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ontharr Frume is presented in Hoard of the Dragon Queen and The Rise of\
    \ Tiamat as a lawful good, human paladin of Torm. The [war priest](/compendium/bestiary/humanoid/war-priest-mpmm.md)\
    \ stat block from \"Volo's Guide to Monsters\" has been provided here for ease\
    \ of use."
  "name": "5etools Note"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The priest makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage."
  "name": "Maul"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The priest grants a +10 bonus to an attack roll made by itself or another\
    \ creature within 30 feet of it. The priest can make this choice after the roll\
    \ is made but before it hits or misses."
  "name": "Guided Strike (Recharges after a Short or Long Rest)"
"source":
- "HotDQ"
name: Ontharr Frume
image: "[[Ontharr Frume.png]]"
---

# Ontharr Frume

```statblock
"name": "Ontharr Frume"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "16"
- !!int "10"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "5"
  "Religion": !!int "4"
"senses": "passive Perception 13"
"languages": "any two languages"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The priest is a 9th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 15, +7 to hit with spell attacks). It has the following cleric\
    \ spells prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md),\
    \ [mending](/compendium/spells/mending.md), [sacred flame](/compendium/spells/sacred-flame.md),\
    \ [spare the dying](/compendium/spells/spare-the-dying.md)\n\n1st level (4 1st-level\
    \ slots): [divine favor](/compendium/spells/divine-favor.md), [guiding bolt](/compendium/spells/guiding-bolt.md),\
    \ [healing word](/compendium/spells/healing-word.md), [shield of faith](/compendium/spells/shield-of-faith.md)\n\
    \n2nd level (3 2nd-level slots): [lesser restoration](/compendium/spells/lesser-restoration.md),\
    \ [magic weapon](/compendium/spells/magic-weapon.md), [prayer of healing](/compendium/spells/prayer-of-healing.md),\
    \ [silence](/compendium/spells/silence.md), [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\
    \n3rd level (3 3rd-level slots): [beacon of hope](/compendium/spells/beacon-of-hope.md),\
    \ [crusader's mantle](/compendium/spells/crusaders-mantle.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [revivify](/compendium/spells/revivify.md), [spirit guardians](/compendium/spells/spirit-guardians.md),\
    \ [water walk](/compendium/spells/water-walk.md)\n\n4th level (3 4th-level slots):\
    \ [banishment](/compendium/spells/banishment.md), [freedom of movement](/compendium/spells/freedom-of-movement.md),\
    \ [guardian of faith](/compendium/spells/guardian-of-faith.md), [stoneskin](/compendium/spells/stoneskin.md)\n\
    \n5th level (1 5th-level slots): [flame strike](/compendium/spells/flame-strike.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md), [hold monster](/compendium/spells/hold-monster.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ontharr Frume is presented in Hoard of the Dragon Queen and The Rise of\
    \ Tiamat as a lawful good, human paladin of Torm. The [war priest](/compendium/bestiary/humanoid/war-priest-mpmm.md)\
    \ stat block from \"Volo's Guide to Monsters\" has been provided here for ease\
    \ of use."
  "name": "5etools Note"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The priest makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage."
  "name": "Maul"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The priest grants a +10 bonus to an attack roll made by itself or another\
    \ creature within 30 feet of it. The priest can make this choice after the roll\
    \ is made but before it hits or misses."
  "name": "Guided Strike (Recharges after a Short or Long Rest)"
"source":
- "HotDQ"
"image": "[[Ontharr Frume.png]]"
```
^statblock

*Source: Hoard of the Dragon Queen p. 28*

## Environment

desert, urban