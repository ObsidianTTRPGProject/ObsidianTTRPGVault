---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/large
- monster/type/dragon
aliases: ["Draconic Spirit (6th-level Spell)"]
statblock: true
"name": "Draconic Spirit (6th-level Spell)"
"size": "Large"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "60"
"stats":
- !!int "19"
- !!int "14"
- !!int "17"
- !!int "10"
- !!int "14"
- !!int "14"
"speed": "walk 30 ft., fly 60 ft., swim 30 ft."
"damage_resistances": "acid, cold, fire, lightning, poison (Chromatic and Metallic\
  \ Only); force, necrotic, psychic, radiant, thunder (Gem Only)"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "blindsight 30 ft., darkvision 60 ft., passive Perception 12"
"languages": "Draconic, understands the languages you speak"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When you summon the dragon, choose one of its damage resistances. You have\
    \ resistance to the chosen damage type until the spell ends."
  "name": "Shared Resistances"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a number of Rend attacks equal to half the spell's level\
    \ (rounded down), and it uses Breath Weapon."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: your spell attack modifier to hit, reach 10 ft.,\
    \ one target. Hit: 1d6 + 4 + summonSpellLevel piercing damage."
  "name": "Rend"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales destructive energy in a 30-foot cone. Each creature\
    \ in that area must make a Dexterity saving throw against your spell save DC.\
    \ A creature takes 2d6 damage of a type this dragon has resistance to (your choice)\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Breath Weapon"
"source":
- "FTD"
name: Draconic Spirit (6th-level Spell)
image: "[[Draconic Spirit (6th-level Spell).png]]"
---

# Draconic Spirit (6th-level Spell)

```statblock
"name": "Draconic Spirit (6th-level Spell)"
"size": "Large"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "60"
"stats":
- !!int "19"
- !!int "14"
- !!int "17"
- !!int "10"
- !!int "14"
- !!int "14"
"speed": "walk 30 ft., fly 60 ft., swim 30 ft."
"damage_resistances": "acid, cold, fire, lightning, poison (Chromatic and Metallic\
  \ Only); force, necrotic, psychic, radiant, thunder (Gem Only)"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "blindsight 30 ft., darkvision 60 ft., passive Perception 12"
"languages": "Draconic, understands the languages you speak"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When you summon the dragon, choose one of its damage resistances. You have\
    \ resistance to the chosen damage type until the spell ends."
  "name": "Shared Resistances"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a number of Rend attacks equal to half the spell's level\
    \ (rounded down), and it uses Breath Weapon."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: your spell attack modifier to hit, reach 10 ft.,\
    \ one target. Hit: 1d6 + 4 + summonSpellLevel piercing damage."
  "name": "Rend"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales destructive energy in a 30-foot cone. Each creature\
    \ in that area must make a Dexterity saving throw against your spell save DC.\
    \ A creature takes 2d6 damage of a type this dragon has resistance to (your choice)\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Breath Weapon"
"source":
- "FTD"
"image": "[[Draconic Spirit (6th-level Spell).png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 21*