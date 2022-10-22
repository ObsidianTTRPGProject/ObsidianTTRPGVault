---
cssclass: json5e-monster
tags:
- compendium/src/ai
- monster/size/medium
- monster/type/humanoid/half-elf
aliases: ["Omin Dran"]
statblock: true
"name": "Omin Dran"
"size": "Medium"
"type": "humanoid"
"subtype": "half-elf"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "16"
- !!int "8"
- !!int "14"
- !!int "11"
- !!int "18"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "7"
"skillsaves":
  "Medicine": !!int "7"
  "Intimidation": !!int "4"
  "Deception": !!int "4"
  "Insight": !!int "7"
  "Perception": !!int "7"
  "Persuasion": !!int "4"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "Common, Dwarvish, Elvish, Goblin"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Omin is a 9th-level spellcaster. His spellcasting ability is Wisdom (spell\
    \ save DC 15, +7 to hit with spell attacks). He has the following cleric spells\
    \ prepared:\n\nCantrips (at will): [guidance](/compendium/spells/guidance.md),\
    \ [sacred flame](/compendium/spells/sacred-flame.md), [spare the dying](/compendium/spells/spare-the-dying.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1st level (4 1st-level\
    \ slots): [bless](/compendium/spells/bless.md), [command](/compendium/spells/command.md),\
    \ [divine favor](/compendium/spells/divine-favor.md), [shield of faith](/compendium/spells/shield-of-faith.md)\n\
    \n2nd level (3 2nd-level slots): [enhance ability](/compendium/spells/enhance-ability.md),\
    \ [hold person](/compendium/spells/hold-person.md), [magic weapon](/compendium/spells/magic-weapon.md),\
    \ [silence](/compendium/spells/silence.md), [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\
    \n3rd level (3 3rd-level slots): [beacon of hope](/compendium/spells/beacon-of-hope.md),\
    \ [crusader's mantle](/compendium/spells/crusaders-mantle.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [mass healing word](/compendium/spells/mass-healing-word.md), [spirit guardians](/compendium/spells/spirit-guardians.md)\n\
    \n4th level (3 4th-level slots): [death ward](/compendium/spells/death-ward.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md), [locate creature](/compendium/spells/locate-creature.md),\
    \ [stoneskin](/compendium/spells/stoneskin.md)\n\n5th level (1 5th-level slots):\
    \ [dispel evil and good](/compendium/spells/dispel-evil-and-good.md), [flame strike](/compendium/spells/flame-strike.md),\
    \ [hold monster](/compendium/spells/hold-monster.md), [greater restoration](/compendium/spells/greater-restoration.md),\
    \ [legend lore](/compendium/spells/legend-lore.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once on each of his turns when he hits a creature with a weapon attack,\
    \ Omin can cause the attack to deal an extra 4 (1d8) damage of the same type dealt\
    \ by the weapon."
  "name": "Divine Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Omin has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put him to sleep."
  "name": "Fey Ancestry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Omin makes two attacks with his maul."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage."
  "name": "Maul"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature within 30 feet of Omin makes an attack roll, but before\
    \ learning whether it hits or misses, Omin can grant the creature a +10 bonus\
    \ to that roll."
  "name": "War God's Blessing (Recharges after a Short or Long Rest)"
"source":
- "AI"
name: Omin Dran
image: "[[Omin Dran.png]]"
---

# Omin Dran

```statblock
"name": "Omin Dran"
"size": "Medium"
"type": "humanoid"
"subtype": "half-elf"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "16"
- !!int "8"
- !!int "14"
- !!int "11"
- !!int "18"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "7"
"skillsaves":
  "Medicine": !!int "7"
  "Intimidation": !!int "4"
  "Deception": !!int "4"
  "Insight": !!int "7"
  "Perception": !!int "7"
  "Persuasion": !!int "4"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "Common, Dwarvish, Elvish, Goblin"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Omin is a 9th-level spellcaster. His spellcasting ability is Wisdom (spell\
    \ save DC 15, +7 to hit with spell attacks). He has the following cleric spells\
    \ prepared:\n\nCantrips (at will): [guidance](/compendium/spells/guidance.md),\
    \ [sacred flame](/compendium/spells/sacred-flame.md), [spare the dying](/compendium/spells/spare-the-dying.md),\
    \ [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\n1st level (4 1st-level\
    \ slots): [bless](/compendium/spells/bless.md), [command](/compendium/spells/command.md),\
    \ [divine favor](/compendium/spells/divine-favor.md), [shield of faith](/compendium/spells/shield-of-faith.md)\n\
    \n2nd level (3 2nd-level slots): [enhance ability](/compendium/spells/enhance-ability.md),\
    \ [hold person](/compendium/spells/hold-person.md), [magic weapon](/compendium/spells/magic-weapon.md),\
    \ [silence](/compendium/spells/silence.md), [spiritual weapon](/compendium/spells/spiritual-weapon.md)\n\
    \n3rd level (3 3rd-level slots): [beacon of hope](/compendium/spells/beacon-of-hope.md),\
    \ [crusader's mantle](/compendium/spells/crusaders-mantle.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [mass healing word](/compendium/spells/mass-healing-word.md), [spirit guardians](/compendium/spells/spirit-guardians.md)\n\
    \n4th level (3 4th-level slots): [death ward](/compendium/spells/death-ward.md),\
    \ [freedom of movement](/compendium/spells/freedom-of-movement.md), [locate creature](/compendium/spells/locate-creature.md),\
    \ [stoneskin](/compendium/spells/stoneskin.md)\n\n5th level (1 5th-level slots):\
    \ [dispel evil and good](/compendium/spells/dispel-evil-and-good.md), [flame strike](/compendium/spells/flame-strike.md),\
    \ [hold monster](/compendium/spells/hold-monster.md), [greater restoration](/compendium/spells/greater-restoration.md),\
    \ [legend lore](/compendium/spells/legend-lore.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once on each of his turns when he hits a creature with a weapon attack,\
    \ Omin can cause the attack to deal an extra 4 (1d8) damage of the same type dealt\
    \ by the weapon."
  "name": "Divine Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Omin has advantage on saving throws against being [charmed](/rules/conditions.md#charmed),\
    \ and magic can't put him to sleep."
  "name": "Fey Ancestry"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Omin makes two attacks with his maul."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage."
  "name": "Maul"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature within 30 feet of Omin makes an attack roll, but before\
    \ learning whether it hits or misses, Omin can grant the creature a +10 bonus\
    \ to that roll."
  "name": "War God's Blessing (Recharges after a Short or Long Rest)"
"source":
- "AI"
"image": "[[Omin Dran.png]]"
```
^statblock

*Source: Acquisitions Incorporated p. 196*

## Description

> [!quote]-  
> 
> My duty, first and foremost, is to my shareholders. And I am the only shareholder.

Ominifis Hereward Dran spent his formative years in the small waystop of Red Larch, where his mother, Prophetess, ran a popular inn and restaurant. In the brief periods of respite afforded by working the family business, Omin and his sisters, Auspicia and Portentia, were wont to wander the hills and trails around town, dreaming of adventure. But adventure of the wrong kind came calling for the trio one day, when an underground ruin they had often explored-actually a creature called the Wandering Crypt-took Auspicia from the world.

Omin Dran built the organization called Acquisitions Incorporated to facilitate and expand his quest to find his true sister, at least in part. For despite his unprecedented success in establishing the market for franchised adventuring across the Sword Coast and beyond, Omin's full measure eludes most people. He is known to be a worshiper of Tymora, ruthless in matters of business, feckless in matters of love, and hopeless in games of chance. Omin is also often accused of being one of the Masked Lords of Waterdeep, though this bit of fancy earns little more than a chuckle in response. And even if the rumor were true, Omin would never leverage such a position for greater financial gain and power. Because that would be wrong...