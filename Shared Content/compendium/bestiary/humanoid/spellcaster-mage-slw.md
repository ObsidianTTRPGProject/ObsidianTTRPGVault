---
cssclass: json5e-monster
tags:
- compendium/src/slw
- monster/size/medium
- monster/type/humanoid
aliases: ["Spellcaster (Mage)"]
statblock: true
"name": "Spellcaster (Mage)"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "36"
"hit_dice": "8d8"
"stats":
- !!int "10"
- !!int "12"
- !!int "10"
- !!int "16"
- !!int "14"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "5"
"skillsaves":
  "Investigation": !!int "6"
  "Religion": !!int "6"
  "Arcana": !!int "6"
"senses": "passive Perception 12"
"languages": "Common, plus one of your choice"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spellcaster's spellcasting ability is Intelligence (spell save DC 14,\
    \ +6 to hit with spell attacks). The spellcaster has following wizard spells prepared:\n\
    \nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md), [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md)\n\
    \n1st level (4 1st-level slots): [burning hands](/compendium/spells/burning-hands.md),\
    \ [shield](/compendium/spells/shield.md), [sleep](/compendium/spells/sleep.md)\n\
    \n2nd level (3 2nd-level slots): [flaming sphere](/compendium/spells/flaming-sphere.md),\
    \ [invisibility](/compendium/spells/invisibility.md)\n\n3rd level (3 3rd-level\
    \ slots): [fireball](/compendium/spells/fireball.md), [fly](/compendium/spells/fly.md)\n\
    \n4th level (1 4th-level slots): [wall of fire](/compendium/spells/wall-of-fire.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spellcaster can add its spellcasting ability modifier to the damage\
    \ it deals with any cantrip."
  "name": "Potent Cantrip"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage, or 4 (1d8) bludgeoning damage if used with two hands."
  "name": "Quarterstaff"
"source":
- "SLW"
name: Spellcaster (Mage)
image: "[[Spellcaster (Mage).png]]"
---

# Spellcaster (Mage)

```statblock
"name": "Spellcaster (Mage)"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "36"
"hit_dice": "8d8"
"stats":
- !!int "10"
- !!int "12"
- !!int "10"
- !!int "16"
- !!int "14"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "5"
"skillsaves":
  "Investigation": !!int "6"
  "Religion": !!int "6"
  "Arcana": !!int "6"
"senses": "passive Perception 12"
"languages": "Common, plus one of your choice"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spellcaster's spellcasting ability is Intelligence (spell save DC 14,\
    \ +6 to hit with spell attacks). The spellcaster has following wizard spells prepared:\n\
    \nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md), [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md)\n\
    \n1st level (4 1st-level slots): [burning hands](/compendium/spells/burning-hands.md),\
    \ [shield](/compendium/spells/shield.md), [sleep](/compendium/spells/sleep.md)\n\
    \n2nd level (3 2nd-level slots): [flaming sphere](/compendium/spells/flaming-sphere.md),\
    \ [invisibility](/compendium/spells/invisibility.md)\n\n3rd level (3 3rd-level\
    \ slots): [fireball](/compendium/spells/fireball.md), [fly](/compendium/spells/fly.md)\n\
    \n4th level (1 4th-level slots): [wall of fire](/compendium/spells/wall-of-fire.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spellcaster can add its spellcasting ability modifier to the damage\
    \ it deals with any cantrip."
  "name": "Potent Cantrip"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage, or 4 (1d8) bludgeoning damage if used with two hands."
  "name": "Quarterstaff"
"source":
- "SLW"
"image": "[[Spellcaster (Mage).png]]"
```
^statblock

*Source: Storm Lord's Wrath*