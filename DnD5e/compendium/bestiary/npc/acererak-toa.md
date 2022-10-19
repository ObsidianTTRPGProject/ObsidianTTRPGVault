---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/medium
- monster/type/undead
aliases: ["Acererak"]
statblock: true
"name": "Acererak"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "21"
"hp": !!int "285"
"hit_dice": "30d8 + 150"
"stats":
- !!int "13"
- !!int "16"
- !!int "20"
- !!int "27"
- !!int "21"
- !!int "20"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "12"
  "Intelligence": !!int "15"
  "Constitution": !!int "12"
"skillsaves":
  "Insight": !!int "12"
  "Perception": !!int "12"
  "History": !!int "22"
  "Arcana": !!int "22"
"damage_resistances": "cold, lightning"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned, stunned"
"senses": "truesight 120 ft., passive Perception 22"
"languages": "Abyssal, Common, Draconic, Dwarvish, Elvish, Giant, Infernal, Primordial,\
  \ Undercommon"
"cr": "23"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Acererak is a 20th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 23, +15 to hit with spell attacks). Acererak has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st level: [ray of sickness](/compendium/spells/ray-of-sickness.md), [shield](/compendium/spells/shield.md)\n\
    \n2nd level: [arcane lock](/compendium/spells/arcane-lock.md), [knock](/compendium/spells/knock.md)\n\
    \n3rd level: [animate dead](/compendium/spells/animate-dead.md), [counterspell](/compendium/spells/counterspell.md)\n\
    \n4th level (3 4th-level slots): [blight](/compendium/spells/blight.md), [ice\
    \ storm](/compendium/spells/ice-storm.md), [phantasmal killer](/compendium/spells/phantasmal-killer.md)\n\
    \n5th level (3 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md),\
    \ [hold monster](/compendium/spells/hold-monster.md), [wall of force](/compendium/spells/wall-of-force.md)\n\
    \n6th level (3 6th-level slots): [chain lightning](/compendium/spells/chain-lightning.md),\
    \ [circle of death](/compendium/spells/circle-of-death.md), [disintegrate](/compendium/spells/disintegrate.md)\n\
    \n7th level (3 7th-level slots): [finger of death](/compendium/spells/finger-of-death.md),\
    \ [plane shift](/compendium/spells/plane-shift.md), [teleport](/compendium/spells/teleport.md)\n\
    \n8th level (2 8th-level slots): [maze](/compendium/spells/maze.md), [mind\
    \ blank](/compendium/spells/mind-blank.md)\n\n9th level (2 9th-level slots):\
    \ [power word kill](/compendium/spells/power-word-kill.md), [time stop](/compendium/spells/time-stop.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Acererak carries the [Staff of the Forgotten One](/compendium/items/staff-of-the-forgotten-one-toa.md).\
    \ He wears a [Talisman of the Sphere](/compendium/items/talisman-of-the-sphere.md)\
    \ and has a [Sphere of Annihilation](/compendium/items/sphere-of-annihilation.md)\
    \ under his control."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Acererak fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Acererak's body turns to dust when he drops to 0 hit points, and his equipment\
    \ is left behind. Acererak gains a new body after 1d10 days, regaining all his\
    \ hit points and becoming active again. The new body appears within 5 feet of\
    \ Acererak's phylactery, the location of which is hidden."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Acererak has advantage on saving throws against any effect that turns undead."
  "name": "Turn Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +15 to hit, reach 5 ft., one creature. Hit: 10 (3d6)\
    \ cold damage, and the target must succeed on a DC 20 Constitution saving throw\
    \ or be [paralyzed](/rules/conditions.md#paralyzed) for 1 minute. The target can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself on a success."
  "name": "Paralyzing Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage plus 10 (3d6) necrotic damage, or 8 (1d8 + 4) bludgeoning\
    \ damage plus 10 (3d6) necrotic damage when used with two hands."
  "name": "Staff (+3 Quarterstaff)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While holding the Staff of the Forgotten One, Acererak expends 1 charge\
    \ from it and targets one creature he can see within 60 feet of him. The target\
    \ must succeed on a DC 23 Constitution saving throw or be cursed. Until the curse\
    \ is ended, the target can't regain hit points and has vulnerability to necrotic\
    \ damage. [Greater restoration](/compendium/spells/greater-restoration.md), [remove\
    \ curse](/compendium/spells/remove-curse.md), or similar magic ends the curse\
    \ on the target."
  "name": "Invoke Curse"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Acererak casts one of his at-will spells."
  "name": "At-Will Spell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Acererak uses Paralyzing Touch or makes one melee attack with his staff."
  "name": "Melee Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Acererak fixes his gaze on one creature he can see within 10 feet of him.\
    \ The target must succeed on a DC 20 Wisdom saving throw against this magic or\
    \ become [frightened](/rules/conditions.md#frightened) for 1 minute. The [frightened](/rules/conditions.md#frightened)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success. If a target's saving throw is successful or the\
    \ effect ends for it, the target its immune to Acererak's gaze for the next 24\
    \ hours."
  "name": "Frightening Gaze (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Acererak uses his [Talisman of the Sphere](/compendium/items/talisman-of-the-sphere.md)\
    \ to move the [Sphere of Annihilation](/compendium/items/sphere-of-annihilation.md)\
    \ under his control up to 90 feet."
  "name": "Talisman of the Sphere (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature within 20 feet of Acererak must make a DC 20 Constitution\
    \ saving throw against this magic, taking 42 (12d6) necrotic damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Disrupt Life (Costs 3 Actions)"
"source":
- "ToA"
name: Acererak
image: "[[Acererak.png]]"
---

# Acererak

```statblock
"name": "Acererak"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "21"
"hp": !!int "285"
"hit_dice": "30d8 + 150"
"stats":
- !!int "13"
- !!int "16"
- !!int "20"
- !!int "27"
- !!int "21"
- !!int "20"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "12"
  "Intelligence": !!int "15"
  "Constitution": !!int "12"
"skillsaves":
  "Insight": !!int "12"
  "Perception": !!int "12"
  "History": !!int "22"
  "Arcana": !!int "22"
"damage_resistances": "cold, lightning"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned, stunned"
"senses": "truesight 120 ft., passive Perception 22"
"languages": "Abyssal, Common, Draconic, Dwarvish, Elvish, Giant, Infernal, Primordial,\
  \ Undercommon"
"cr": "23"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Acererak is a 20th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 23, +15 to hit with spell attacks). Acererak has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [mage hand](/compendium/spells/mage-hand.md),\
    \ [ray of frost](/compendium/spells/ray-of-frost.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st level: [ray of sickness](/compendium/spells/ray-of-sickness.md), [shield](/compendium/spells/shield.md)\n\
    \n2nd level: [arcane lock](/compendium/spells/arcane-lock.md), [knock](/compendium/spells/knock.md)\n\
    \n3rd level: [animate dead](/compendium/spells/animate-dead.md), [counterspell](/compendium/spells/counterspell.md)\n\
    \n4th level (3 4th-level slots): [blight](/compendium/spells/blight.md), [ice\
    \ storm](/compendium/spells/ice-storm.md), [phantasmal killer](/compendium/spells/phantasmal-killer.md)\n\
    \n5th level (3 5th-level slots): [cloudkill](/compendium/spells/cloudkill.md),\
    \ [hold monster](/compendium/spells/hold-monster.md), [wall of force](/compendium/spells/wall-of-force.md)\n\
    \n6th level (3 6th-level slots): [chain lightning](/compendium/spells/chain-lightning.md),\
    \ [circle of death](/compendium/spells/circle-of-death.md), [disintegrate](/compendium/spells/disintegrate.md)\n\
    \n7th level (3 7th-level slots): [finger of death](/compendium/spells/finger-of-death.md),\
    \ [plane shift](/compendium/spells/plane-shift.md), [teleport](/compendium/spells/teleport.md)\n\
    \n8th level (2 8th-level slots): [maze](/compendium/spells/maze.md), [mind\
    \ blank](/compendium/spells/mind-blank.md)\n\n9th level (2 9th-level slots):\
    \ [power word kill](/compendium/spells/power-word-kill.md), [time stop](/compendium/spells/time-stop.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Acererak carries the [Staff of the Forgotten One](/compendium/items/staff-of-the-forgotten-one-toa.md).\
    \ He wears a [Talisman of the Sphere](/compendium/items/talisman-of-the-sphere.md)\
    \ and has a [Sphere of Annihilation](/compendium/items/sphere-of-annihilation.md)\
    \ under his control."
  "name": "Special Equipment"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Acererak fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Acererak's body turns to dust when he drops to 0 hit points, and his equipment\
    \ is left behind. Acererak gains a new body after 1d10 days, regaining all his\
    \ hit points and becoming active again. The new body appears within 5 feet of\
    \ Acererak's phylactery, the location of which is hidden."
  "name": "Rejuvenation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Acererak has advantage on saving throws against any effect that turns undead."
  "name": "Turn Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +15 to hit, reach 5 ft., one creature. Hit: 10 (3d6)\
    \ cold damage, and the target must succeed on a DC 20 Constitution saving throw\
    \ or be [paralyzed](/rules/conditions.md#paralyzed) for 1 minute. The target can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself on a success."
  "name": "Paralyzing Touch"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage plus 10 (3d6) necrotic damage, or 8 (1d8 + 4) bludgeoning\
    \ damage plus 10 (3d6) necrotic damage when used with two hands."
  "name": "Staff (+3 Quarterstaff)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While holding the Staff of the Forgotten One, Acererak expends 1 charge\
    \ from it and targets one creature he can see within 60 feet of him. The target\
    \ must succeed on a DC 23 Constitution saving throw or be cursed. Until the curse\
    \ is ended, the target can't regain hit points and has vulnerability to necrotic\
    \ damage. [Greater restoration](/compendium/spells/greater-restoration.md), [remove\
    \ curse](/compendium/spells/remove-curse.md), or similar magic ends the curse\
    \ on the target."
  "name": "Invoke Curse"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Acererak casts one of his at-will spells."
  "name": "At-Will Spell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Acererak uses Paralyzing Touch or makes one melee attack with his staff."
  "name": "Melee Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Acererak fixes his gaze on one creature he can see within 10 feet of him.\
    \ The target must succeed on a DC 20 Wisdom saving throw against this magic or\
    \ become [frightened](/rules/conditions.md#frightened) for 1 minute. The [frightened](/rules/conditions.md#frightened)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success. If a target's saving throw is successful or the\
    \ effect ends for it, the target its immune to Acererak's gaze for the next 24\
    \ hours."
  "name": "Frightening Gaze (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Acererak uses his [Talisman of the Sphere](/compendium/items/talisman-of-the-sphere.md)\
    \ to move the [Sphere of Annihilation](/compendium/items/sphere-of-annihilation.md)\
    \ under his control up to 90 feet."
  "name": "Talisman of the Sphere (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature within 20 feet of Acererak must make a DC 20 Constitution\
    \ saving throw against this magic, taking 42 (12d6) necrotic damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Disrupt Life (Costs 3 Actions)"
"source":
- "ToA"
"image": "[[Acererak.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 209*

## Description

Acererak is an archlich who travels between worlds and is known to take sick pleasure in devouring the souls of adventurers, whom he lures into trap-ridden dungeons where they suffer horrible deaths. One such dungeon lies under the lost city of Omu. This dungeon is called the Tomb of the Nine Gods, for Acererak slew nine false gods and sealed them within it. More recently, he built a necromantic device called the Soulmonger, then hid it in the heart of the tomb.

**Acererak's Traits.** **Ideal.** "Why be a god when I can be a creator of gods?"

**Bond.** "I build dungeons to trap and slay powerful adventurers. Their deaths and souls are my nourishment."

**Flaw.** "I underestimate the resolve of my enemies."