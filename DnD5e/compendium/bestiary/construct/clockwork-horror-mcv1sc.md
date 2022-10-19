---
cssclass: json5e-monster
tags:
- compendium/src/mcv1sc
- monster/size/small
- monster/type/construct
aliases: ["Clockwork Horror"]
statblock: true
"name": "Clockwork Horror"
"size": "Small"
"type": "construct"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "60"
"hit_dice": "8d6 + 32"
"stats":
- !!int "14"
- !!int "14"
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft., climb 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Strength": !!int "4"
"skillsaves":
  "Perception": !!int "6"
"damage_immunities": "lightning, poison"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Thri-kreen, Ziklight"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If targeted by [dispel magic](/compendium/spells/dispel-magic.md), the\
    \ horror must succeed on a Constitution saving throw against the caster's spell\
    \ save DC or fall [unconscious](/rules/conditions.md#unconscious) for 1 minute\
    \ or until it takes any damage."
  "name": "Shutdown"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror makes one Bite attack and two Rotating Saw attacks, or it makes\
    \ two Lightning Jolt attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Rotating Saw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +4 to hit, range 120 ft., one target. Hit: 7 (1d10\
    \ + 2) lightning damage."
  "name": "Lightning Jolt"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror attaches to a spelljamming helm it can see within 5 feet of\
    \ itself and attunes to the helm instantly. If another creature is already attuned\
    \ to the helm, that creature's attunement to the helm ends when the horror's attunement\
    \ begins. The horror can operate the helm even though it isn't a spellcaster.\
    \ The horror can detach from the helm as a bonus action, which ends its attunement\
    \ to the helm."
  "name": "Spelljamming Helm Interface"
"source":
- "MCV1SC"
name: Clockwork Horror
image: "[[Clockwork Horror.png]]"
---

# Clockwork Horror

```statblock
"name": "Clockwork Horror"
"size": "Small"
"type": "construct"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "60"
"hit_dice": "8d6 + 32"
"stats":
- !!int "14"
- !!int "14"
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft., climb 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Strength": !!int "4"
"skillsaves":
  "Perception": !!int "6"
"damage_immunities": "lightning, poison"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Thri-kreen, Ziklight"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If targeted by [dispel magic](/compendium/spells/dispel-magic.md), the\
    \ horror must succeed on a Constitution saving throw against the caster's spell\
    \ save DC or fall [unconscious](/rules/conditions.md#unconscious) for 1 minute\
    \ or until it takes any damage."
  "name": "Shutdown"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror makes one Bite attack and two Rotating Saw attacks, or it makes\
    \ two Lightning Jolt attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
    \ + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage."
  "name": "Rotating Saw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +4 to hit, range 120 ft., one target. Hit: 7 (1d10\
    \ + 2) lightning damage."
  "name": "Lightning Jolt"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The horror attaches to a spelljamming helm it can see within 5 feet of\
    \ itself and attunes to the helm instantly. If another creature is already attuned\
    \ to the helm, that creature's attunement to the helm ends when the horror's attunement\
    \ begins. The horror can operate the helm even though it isn't a spellcaster.\
    \ The horror can detach from the helm as a bonus action, which ends its attunement\
    \ to the helm."
  "name": "Spelljamming Helm Interface"
"source":
- "MCV1SC"
"image": "[[Clockwork Horror.png]]"
```
^statblock

*Source: Monster Compendium Volume 1: Spelljammer Creatures p. 4*

## Description

Clockwork horrors are ruthless insectile automatons—eldritch machines encased in adamantine or some other precious metal. They roam Wildspace in commandeered spelljamming ships, gathering the precious metals and crystals they need to build more of their kind. Clockwork horrors have no goal beyond replication and will stop at nothing to create new clockwork horrors. The time it takes for a clockwork horror to build another of its kind, assuming it has the requisite materials, is approximately ten days.

The body of a clockwork horror is about two feet in diameter, but the legs give it an overall diameter of four feet. Embedded in the front of its head is a crystal that enables the clockwork horror to see.

Clockwork horrors communicate with each other by means of clicks, whirs, and similar mechanical sounds that imitate the Thri-kreen language perfectly, leading some to speculate the first clockwork horror was the brainchild of a thri-kreen artificer. A horror can also emit light from its crystal eye, issuing dot-and-dash messages to other creatures that can see the light. Creatures besides clockwork horrors can learn this blinking light code, which is called Ziklight.

When another creature gets in its way, a clockwork horror attacks that creature with its razor-sharp mandibles and two tiny rotating saws mounted at the tips of its forelimbs. A horror can also discharge bolts of lightning from a short lightning rod embedded in its body.

When a clockwork horror dies, the magic that created it consumes it over a period of 1 minute. Its metallic body and crystal eye degrade rapidly until nothing is left but a small heap of glittering dust.