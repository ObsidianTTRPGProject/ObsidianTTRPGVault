---
cssclass: json5e-monster
tags:
- compendium/src/wdmm
- monster/size/medium
- monster/type/undead
aliases: ["Dezmyr Shadowdusk"]
statblock: true
"name": "Dezmyr Shadowdusk"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "20"
"hp": !!int "180"
"hit_dice": "19d8 + 95"
"stats":
- !!int "20"
- !!int "11"
- !!int "20"
- !!int "12"
- !!int "16"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "10"
  "Dexterity": !!int "6"
  "Wisdom": !!int "9"
"damage_immunities": "necrotic, poison"
"condition_immunities": "exhaustion, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Abyssal, Common"
"cr": "17"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dezmyr is a 19th-level spellcaster. Her spellcasting ability is Charisma\
    \ (spell save DC 18, +10 to hit with spell attacks). She has the following paladin\
    \ spells prepared:\n\n1st level (4 1st-level slots): [command](/compendium/spells/command.md),\
    \ [compelled duel](/compendium/spells/compelled-duel.md), [searing smite](/compendium/spells/searing-smite.md)\n\
    \n2nd level (3 2nd-level slots): [hold person](/compendium/spells/hold-person.md),\
    \ [magic weapon](/compendium/spells/magic-weapon.md)\n\n3rd level (3 3rd-level\
    \ slots): [dispel magic](/compendium/spells/dispel-magic.md), [elemental weapon](/compendium/spells/elemental-weapon.md)\n\
    \n4th level (3 4th-level slots): [locate creature](/compendium/spells/locate-creature.md),\
    \ [staggering smite](/compendium/spells/staggering-smite.md)\n\n5th level (2\
    \ 5th-level slots): [destructive wave](/compendium/spells/destructive-wave.md)\
    \ (necrotic)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action on her turn, Dezmyr can warp reality, undoing damage\
    \ dealt to herself or another creature that she can see within 20 feet of her.\
    \ The beneficiary of this warped reality instantly regains 10 hit points."
  "name": "Warp Reality"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dezmyr has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Unless Dezmyr is [incapacitated](/rules/conditions.md#incapacitated), it\
    \ and undead creatures of its choice within 60 feet of it have advantage on saving\
    \ throws against features that turn undead."
  "name": "Marshal Undead"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dezmyr makes three longsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) slashing damage, or 10 (1d10 + 5) slashing damage if used with two hands,\
    \ plus 18 (4d8) necrotic damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dezmyr hurls a magical ball of fire that explodes at a point it can see\
    \ within 120 feet of it. Each creature in a 20-foot-radius sphere centered on\
    \ that point must make a DC 18 Dexterity saving throw. The sphere spreads around\
    \ corners. A creature takes 35 (10d6) fire damage and 35 (10d6) necrotic damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Hellfire Orb (1/Day)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dezmyr adds 6 to its AC against one melee attack that would hit it. To\
    \ do so, Dezmyr must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "WDMM"
name: Dezmyr Shadowdusk
image: "[[Dezmyr Shadowdusk.png]]"
---

# Dezmyr Shadowdusk

```statblock
"name": "Dezmyr Shadowdusk"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "20"
"hp": !!int "180"
"hit_dice": "19d8 + 95"
"stats":
- !!int "20"
- !!int "11"
- !!int "20"
- !!int "12"
- !!int "16"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "10"
  "Dexterity": !!int "6"
  "Wisdom": !!int "9"
"damage_immunities": "necrotic, poison"
"condition_immunities": "exhaustion, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Abyssal, Common"
"cr": "17"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dezmyr is a 19th-level spellcaster. Her spellcasting ability is Charisma\
    \ (spell save DC 18, +10 to hit with spell attacks). She has the following paladin\
    \ spells prepared:\n\n1st level (4 1st-level slots): [command](/compendium/spells/command.md),\
    \ [compelled duel](/compendium/spells/compelled-duel.md), [searing smite](/compendium/spells/searing-smite.md)\n\
    \n2nd level (3 2nd-level slots): [hold person](/compendium/spells/hold-person.md),\
    \ [magic weapon](/compendium/spells/magic-weapon.md)\n\n3rd level (3 3rd-level\
    \ slots): [dispel magic](/compendium/spells/dispel-magic.md), [elemental weapon](/compendium/spells/elemental-weapon.md)\n\
    \n4th level (3 4th-level slots): [locate creature](/compendium/spells/locate-creature.md),\
    \ [staggering smite](/compendium/spells/staggering-smite.md)\n\n5th level (2\
    \ 5th-level slots): [destructive wave](/compendium/spells/destructive-wave.md)\
    \ (necrotic)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action on her turn, Dezmyr can warp reality, undoing damage\
    \ dealt to herself or another creature that she can see within 20 feet of her.\
    \ The beneficiary of this warped reality instantly regains 10 hit points."
  "name": "Warp Reality"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dezmyr has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Unless Dezmyr is [incapacitated](/rules/conditions.md#incapacitated), it\
    \ and undead creatures of its choice within 60 feet of it have advantage on saving\
    \ throws against features that turn undead."
  "name": "Marshal Undead"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dezmyr makes three longsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) slashing damage, or 10 (1d10 + 5) slashing damage if used with two hands,\
    \ plus 18 (4d8) necrotic damage."
  "name": "Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dezmyr hurls a magical ball of fire that explodes at a point it can see\
    \ within 120 feet of it. Each creature in a 20-foot-radius sphere centered on\
    \ that point must make a DC 18 Dexterity saving throw. The sphere spreads around\
    \ corners. A creature takes 35 (10d6) fire damage and 35 (10d6) necrotic damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Hellfire Orb (1/Day)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Dezmyr adds 6 to its AC against one melee attack that would hit it. To\
    \ do so, Dezmyr must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "WDMM"
"image": "[[Dezmyr Shadowdusk.png]]"
```
^statblock

*Source: Waterdeep: Dungeon of the Mad Mage p. 287*