---
cssclass: json5e-monster
tags:
- compendium/src/sdw
- monster/size/medium
- monster/type/humanoid
aliases: ["Spellcaster (Mage)"]
statblock: true
"name": "Spellcaster (Mage)"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "45"
"hit_dice": "10d8"
"stats":
- !!int "10"
- !!int "12"
- !!int "10"
- !!int "18"
- !!int "14"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
"skillsaves":
  "Investigation": !!int "8"
  "Religion": !!int "8"
  "Arcana": !!int "8"
"senses": "passive Perception 12"
"languages": "Common, plus one of your choice"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spellcaster's spellcasting ability is Intelligence (spell save DC 16,\
    \ +8 to hit with spell attacks). The spellcaster has following wizard spells prepared:\n\
    \nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md), [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md)\n\
    \n1st level (4 1st-level slots): [burning hands](/compendium/spells/burning-hands.md),\
    \ [shield](/compendium/spells/shield.md), [sleep](/compendium/spells/sleep.md)\n\
    \n2nd level (3 2nd-level slots): [flaming sphere](/compendium/spells/flaming-sphere.md),\
    \ [invisibility](/compendium/spells/invisibility.md)\n\n3rd level (3 3rd-level\
    \ slots): [fireball](/compendium/spells/fireball.md), [fly](/compendium/spells/fly.md)\n\
    \n4th level (3 4th-level slots): [polymorph](/compendium/spells/polymorph.md),\
    \ [wall of fire](/compendium/spells/wall-of-fire.md)\n\n5th level (1 5th-level\
    \ slots): [cone of cold](/compendium/spells/cone-of-cold.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spellcaster can add its spellcasting ability modifier to the damage\
    \ it deals with any cantrip."
  "name": "Potent Cantrip"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage, or 4 (1d8) bludgeoning damage if used with two hands."
  "name": "Quarterstaff"
"source":
- "SDW"
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
"hp": !!int "45"
"hit_dice": "10d8"
"stats":
- !!int "10"
- !!int "12"
- !!int "10"
- !!int "18"
- !!int "14"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
"skillsaves":
  "Investigation": !!int "8"
  "Religion": !!int "8"
  "Arcana": !!int "8"
"senses": "passive Perception 12"
"languages": "Common, plus one of your choice"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spellcaster's spellcasting ability is Intelligence (spell save DC 16,\
    \ +8 to hit with spell attacks). The spellcaster has following wizard spells prepared:\n\
    \nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md), [light](/compendium/spells/light.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md)\n\
    \n1st level (4 1st-level slots): [burning hands](/compendium/spells/burning-hands.md),\
    \ [shield](/compendium/spells/shield.md), [sleep](/compendium/spells/sleep.md)\n\
    \n2nd level (3 2nd-level slots): [flaming sphere](/compendium/spells/flaming-sphere.md),\
    \ [invisibility](/compendium/spells/invisibility.md)\n\n3rd level (3 3rd-level\
    \ slots): [fireball](/compendium/spells/fireball.md), [fly](/compendium/spells/fly.md)\n\
    \n4th level (3 4th-level slots): [polymorph](/compendium/spells/polymorph.md),\
    \ [wall of fire](/compendium/spells/wall-of-fire.md)\n\n5th level (1 5th-level\
    \ slots): [cone of cold](/compendium/spells/cone-of-cold.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spellcaster can add its spellcasting ability modifier to the damage\
    \ it deals with any cantrip."
  "name": "Potent Cantrip"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage, or 4 (1d8) bludgeoning damage if used with two hands."
  "name": "Quarterstaff"
"source":
- "SDW"
"image": "[[Spellcaster (Mage).png]]"
```
^statblock

*Source: Sleeping Dragon's Wake*