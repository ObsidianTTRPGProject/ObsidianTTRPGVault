---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/huge
- monster/type/undead
aliases: ["Ooze Master"]
statblock: true
"name": "Ooze Master"
"size": "Huge"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "9"
"hp": !!int "138"
"hit_dice": "12d12 + 60"
"stats":
- !!int "16"
- !!int "1"
- !!int "20"
- !!int "17"
- !!int "10"
- !!int "16"
"speed": "walk 30 ft., climb 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "7"
"skillsaves":
  "Insight": !!int "4"
  "Arcana": !!int "7"
"damage_resistances": "lightning; necrotic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "acid, cold, poison"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ poisoned, prone"
"senses": "blindsight 120 ft., passive Perception 10"
"languages": "Common, Primordial, Thayan"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Ooze Master is a 9th-level spellcaster. Its spellcasting ability is\
    \ Intelligence (spell save DC 15, +7 to hit with spell attacks). It has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [friends](/compendium/spells/friends.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [poison spray](/compendium/spells/poison-spray.md)\n\n1st level (4 1st-level\
    \ slots): [charm person](/compendium/spells/charm-person.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [ray of sickness](/compendium/spells/ray-of-sickness.md)\n\
    \n2nd level (3 2nd-level slots): [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [Melf's acid arrow](/compendium/spells/melfs-acid-arrow.md), [suggestion](/compendium/spells/suggestion.md)\n\
    \n3rd level (3 3rd-level slots): [fear](/compendium/spells/fear.md), [slow](/compendium/spells/slow.md),\
    \ [stinking cloud](/compendium/spells/stinking-cloud.md)\n\n4th level (3 4th-level\
    \ slots): [confusion](/compendium/spells/confusion.md), [Evard's black tentacles](/compendium/spells/evards-black-tentacles.md)\n\
    \n5th level (1 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature that touches the Ooze Master or hits it with a melee attack\
    \ while within 5 feet of it takes 9 (2d8) acid damage. Any nonmagical weapon that\
    \ hits the Ooze Master corrodes. After dealing damage, the weapon takes a permanent\
    \ and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon\
    \ is destroyed. Nonmagical ammunition that hits the Ooze Master is destroyed after\
    \ dealing damage.\n\nThe Ooze Master can eat through 2-inch-thick, nonmagical\
    \ wood or metal in 1 round."
  "name": "Corrosive Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the Ooze Master casts a spell with a casting time of 1 action, it\
    \ can make one pseudopod attack as a bonus action."
  "name": "Instinctive Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Ooze Master can climb difficult surfaces, including upside down on\
    \ ceilings, without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 13 (3d6\
    \ + 3) bludgeoning damage plus 10 (3d6) acid damage."
  "name": "Pseudopod"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a creature the Ooze Master can see makes an attack roll against it while\
    \ within 30 feet of it, the Ooze Master can use a reaction to divert the attack\
    \ if another creature is within the attack's range. The attacker must make a DC\
    \ 15 Wisdom saving throw. On a failed save, the attacker targets the creature\
    \ that is closest to it, not including itself or the Ooze Master. If multiple\
    \ creatures are closest, the attacker chooses which one to target. On a successful\
    \ save, the attacker is immune to this Instinctive Charm for 24 hours. Creatures\
    \ that can't be [charmed](/rules/conditions.md#charmed) are immune to this effect."
  "name": "Instinctive Charm"
"source":
- "TftYP"
name: Ooze Master
image: "[[Ooze Master.png]]"
---

# Ooze Master

```statblock
"name": "Ooze Master"
"size": "Huge"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "9"
"hp": !!int "138"
"hit_dice": "12d12 + 60"
"stats":
- !!int "16"
- !!int "1"
- !!int "20"
- !!int "17"
- !!int "10"
- !!int "16"
"speed": "walk 30 ft., climb 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "7"
"skillsaves":
  "Insight": !!int "4"
  "Arcana": !!int "7"
"damage_resistances": "lightning; necrotic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "acid, cold, poison"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ poisoned, prone"
"senses": "blindsight 120 ft., passive Perception 10"
"languages": "Common, Primordial, Thayan"
"cr": "10"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Ooze Master is a 9th-level spellcaster. Its spellcasting ability is\
    \ Intelligence (spell save DC 15, +7 to hit with spell attacks). It has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [acid splash](/compendium/spells/acid-splash.md),\
    \ [friends](/compendium/spells/friends.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [poison spray](/compendium/spells/poison-spray.md)\n\n1st level (4 1st-level\
    \ slots): [charm person](/compendium/spells/charm-person.md), [detect magic](/compendium/spells/detect-magic.md),\
    \ [magic missile](/compendium/spells/magic-missile.md), [ray of sickness](/compendium/spells/ray-of-sickness.md)\n\
    \n2nd level (3 2nd-level slots): [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [Melf's acid arrow](/compendium/spells/melfs-acid-arrow.md), [suggestion](/compendium/spells/suggestion.md)\n\
    \n3rd level (3 3rd-level slots): [fear](/compendium/spells/fear.md), [slow](/compendium/spells/slow.md),\
    \ [stinking cloud](/compendium/spells/stinking-cloud.md)\n\n4th level (3 4th-level\
    \ slots): [confusion](/compendium/spells/confusion.md), [Evard's black tentacles](/compendium/spells/evards-black-tentacles.md)\n\
    \n5th level (1 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "A creature that touches the Ooze Master or hits it with a melee attack\
    \ while within 5 feet of it takes 9 (2d8) acid damage. Any nonmagical weapon that\
    \ hits the Ooze Master corrodes. After dealing damage, the weapon takes a permanent\
    \ and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon\
    \ is destroyed. Nonmagical ammunition that hits the Ooze Master is destroyed after\
    \ dealing damage.\n\nThe Ooze Master can eat through 2-inch-thick, nonmagical\
    \ wood or metal in 1 round."
  "name": "Corrosive Form"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the Ooze Master casts a spell with a casting time of 1 action, it\
    \ can make one pseudopod attack as a bonus action."
  "name": "Instinctive Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Ooze Master can climb difficult surfaces, including upside down on\
    \ ceilings, without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 13 (3d6\
    \ + 3) bludgeoning damage plus 10 (3d6) acid damage."
  "name": "Pseudopod"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If a creature the Ooze Master can see makes an attack roll against it while\
    \ within 30 feet of it, the Ooze Master can use a reaction to divert the attack\
    \ if another creature is within the attack's range. The attacker must make a DC\
    \ 15 Wisdom saving throw. On a failed save, the attacker targets the creature\
    \ that is closest to it, not including itself or the Ooze Master. If multiple\
    \ creatures are closest, the attacker chooses which one to target. On a successful\
    \ save, the attacker is immune to this Instinctive Charm for 24 hours. Creatures\
    \ that can't be [charmed](/rules/conditions.md#charmed) are immune to this effect."
  "name": "Instinctive Charm"
"source":
- "TftYP"
"image": "[[Ooze Master.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 241*