---
cssclass: json5e-monster
tags:
- compendium/src/esk
- monster/size/medium
- monster/type/humanoid
aliases: ["Spellcaster"]
statblock: true
"name": "Spellcaster"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "10"
- !!int "12"
- !!int "10"
- !!int "15"
- !!int "14"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
"skillsaves":
  "Investigation": !!int "4"
  "Religion": !!int "4"
  "Arcana": !!int "4"
"senses": "passive Perception 12"
"languages": "Common, plus one of your choice"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spellcaster's spellcasting ability is Wisdom (spell save DC 12, +4\
    \ to hit with spell attacks). The spellcaster has following cleric spells prepared:\n\
    \nCantrips (at will): [guidance](/compendium/spells/guidance.md), [sacred\
    \ flame](/compendium/spells/sacred-flame.md)\n\n1st level (2 1st-level slots):\
    \ [cure wounds](/compendium/spells/cure-wounds.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spellcaster's spellcasting ability is Intelligence (spell save DC 12,\
    \ +4 to hit with spell attacks). The spellcaster has following wizard spells prepared:\n\
    \nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md), [light](/compendium/spells/light.md)\n\
    \n1st level (2 1st-level slots): [sleep](/compendium/spells/sleep.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Choose a role for the spellcaster: healer or mage. Your choice determines\
    \ which Spellcasting trait to use below."
  "name": "Magical Role"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage, or 4 (1d8) bludgeoning damage if used with two hands."
  "name": "Quarterstaff"
"source":
- "ESK"
name: Spellcaster
image: "[[Spellcaster.png]]"
---

# Spellcaster

```statblock
"name": "Spellcaster"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "10"
- !!int "12"
- !!int "10"
- !!int "15"
- !!int "14"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
"skillsaves":
  "Investigation": !!int "4"
  "Religion": !!int "4"
  "Arcana": !!int "4"
"senses": "passive Perception 12"
"languages": "Common, plus one of your choice"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spellcaster's spellcasting ability is Wisdom (spell save DC 12, +4\
    \ to hit with spell attacks). The spellcaster has following cleric spells prepared:\n\
    \nCantrips (at will): [guidance](/compendium/spells/guidance.md), [sacred\
    \ flame](/compendium/spells/sacred-flame.md)\n\n1st level (2 1st-level slots):\
    \ [cure wounds](/compendium/spells/cure-wounds.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spellcaster's spellcasting ability is Intelligence (spell save DC 12,\
    \ +4 to hit with spell attacks). The spellcaster has following wizard spells prepared:\n\
    \nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md), [light](/compendium/spells/light.md)\n\
    \n1st level (2 1st-level slots): [sleep](/compendium/spells/sleep.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Choose a role for the spellcaster: healer or mage. Your choice determines\
    \ which Spellcasting trait to use below."
  "name": "Magical Role"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage, or 4 (1d8) bludgeoning damage if used with two hands."
  "name": "Quarterstaff"
"source":
- "ESK"
"image": "[[Spellcaster.png]]"
```
^statblock

*Source: Essentials Kit p. 63*