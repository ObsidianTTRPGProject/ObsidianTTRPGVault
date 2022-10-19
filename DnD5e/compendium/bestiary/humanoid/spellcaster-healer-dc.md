---
cssclass: json5e-monster
tags:
- compendium/src/dc
- monster/size/medium
- monster/type/humanoid
aliases: ["Spellcaster (Healer)"]
statblock: true
"name": "Spellcaster (Healer)"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "54"
"hit_dice": "12d8"
"stats":
- !!int "10"
- !!int "12"
- !!int "10"
- !!int "15"
- !!int "18"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "8"
"skillsaves":
  "Investigation": !!int "6"
  "Religion": !!int "6"
  "Arcana": !!int "6"
"senses": "passive Perception 14"
"languages": "Common, plus one of your choice"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spellcaster's spellcasting ability is Wisdom (spell save DC 16, +8\
    \ to hit with spell attacks). The spellcaster has following cleric spells prepared:\n\
    \nCantrips (at will): [guidance](/compendium/spells/guidance.md), [light](/compendium/spells/light.md),\
    \ [resistance](/compendium/spells/resistance.md), [sacred flame](/compendium/spells/sacred-flame.md),\
    \ [spare the dying](/compendium/spells/spare-the-dying.md)\n\n1st level (4 1st-level\
    \ slots): [bless](/compendium/spells/bless.md), [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [shield of faith](/compendium/spells/shield-of-faith.md)\n\n2nd level (3 2nd-level\
    \ slots): [aid](/compendium/spells/aid.md), [lesser restoration](/compendium/spells/lesser-restoration.md)\n\
    \n3rd level (3 3rd-level slots): [protection from energy](/compendium/spells/protection-from-energy.md),\
    \ [revivify](/compendium/spells/revivify.md)\n\n4th level (3 4th-level slots):\
    \ [banishment](/compendium/spells/banishment.md), [death ward](/compendium/spells/death-ward.md)\n\
    \n5th level (2 5th-level slots): [greater restoration](/compendium/spells/greater-restoration.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md)\n\n6th level (1\
    \ 6th-level slots): [heal](/compendium/spells/heal.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the spellcaster casts a spell of the evocation school by expending\
    \ a spell slot, the spellcaster can add its spellcasting ability modifier to the\
    \ spell's damage roll or healing roll, if any."
  "name": "Empowered Spells"
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
- "DC"
name: Spellcaster (Healer)
image: "[[Spellcaster (Healer).png]]"
---

# Spellcaster (Healer)

```statblock
"name": "Spellcaster (Healer)"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "54"
"hit_dice": "12d8"
"stats":
- !!int "10"
- !!int "12"
- !!int "10"
- !!int "15"
- !!int "18"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "8"
"skillsaves":
  "Investigation": !!int "6"
  "Religion": !!int "6"
  "Arcana": !!int "6"
"senses": "passive Perception 14"
"languages": "Common, plus one of your choice"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The spellcaster's spellcasting ability is Wisdom (spell save DC 16, +8\
    \ to hit with spell attacks). The spellcaster has following cleric spells prepared:\n\
    \nCantrips (at will): [guidance](/compendium/spells/guidance.md), [light](/compendium/spells/light.md),\
    \ [resistance](/compendium/spells/resistance.md), [sacred flame](/compendium/spells/sacred-flame.md),\
    \ [spare the dying](/compendium/spells/spare-the-dying.md)\n\n1st level (4 1st-level\
    \ slots): [bless](/compendium/spells/bless.md), [cure wounds](/compendium/spells/cure-wounds.md),\
    \ [shield of faith](/compendium/spells/shield-of-faith.md)\n\n2nd level (3 2nd-level\
    \ slots): [aid](/compendium/spells/aid.md), [lesser restoration](/compendium/spells/lesser-restoration.md)\n\
    \n3rd level (3 3rd-level slots): [protection from energy](/compendium/spells/protection-from-energy.md),\
    \ [revivify](/compendium/spells/revivify.md)\n\n4th level (3 4th-level slots):\
    \ [banishment](/compendium/spells/banishment.md), [death ward](/compendium/spells/death-ward.md)\n\
    \n5th level (2 5th-level slots): [greater restoration](/compendium/spells/greater-restoration.md),\
    \ [mass cure wounds](/compendium/spells/mass-cure-wounds.md)\n\n6th level (1\
    \ 6th-level slots): [heal](/compendium/spells/heal.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Whenever the spellcaster casts a spell of the evocation school by expending\
    \ a spell slot, the spellcaster can add its spellcasting ability modifier to the\
    \ spell's damage roll or healing roll, if any."
  "name": "Empowered Spells"
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
- "DC"
"image": "[[Spellcaster (Healer).png]]"
```
^statblock

*Source: Divine Contention*