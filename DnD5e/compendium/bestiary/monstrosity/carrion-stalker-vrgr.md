---
cssclass: json5e-monster
tags:
- compendium/src/vrgr
- monster/size/tiny
- monster/type/monstrosity
aliases: ["Carrion Stalker"]
statblock: true
"name": "Carrion Stalker"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "35"
"hit_dice": "10d4 + 10"
"stats":
- !!int "6"
- !!int "16"
- !!int "12"
- !!int "2"
- !!int "13"
- !!int "6"
"speed": "walk 30 ft., burrow 30 ft."
"skillsaves":
  "Stealth": !!int "7"
"condition_immunities": "blinded"
"senses": "tremorsense 60 ft., passive Perception 11"
"languages": ""
"cr": "3"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The carrion stalker makes three Tentacle attacks. If it is attached to\
    \ a creature, it can replace one Tentacle attack with Larval Burst, if available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4\
    \ + 3) piercing damage, and the carrion stalker attaches to the target and pulls\
    \ itself into the target's space. While attached, the carrion stalker moves with\
    \ the target and has advantage on attack rolls against it.\n\nA creature can use\
    \ its action to try to detach the carrion stalker and force it to move into the\
    \ nearest unoccupied space, doing so with a successful DC 11 Strength check. On\
    \ its turn, the carrion stalker can detach itself from the target by using 5 feet\
    \ of movement. When it dies, the carrion stalker detaches from any creature it\
    \ is attached to."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The carrion stalker releases a burst of larvae in a 10-foot-radius sphere\
    \ centered on itself. Each creature in that area must succeed on a DC 13 Constitution\
    \ saving throw or be [poisoned](/rules/conditions.md#poisoned). A creature [poisoned](/rules/conditions.md#poisoned)\
    \ in this way takes 7 (2d6) poison damage at the start of each of its turns as\
    \ larvae infest its body. The creature can repeat the saving throw at the end\
    \ of each of its turns, ending the effect on itself on a success. Any effect that\
    \ cures disease or removes the [poisoned](/rules/conditions.md#poisoned) condition\
    \ instantly kills the larvae in the creature, ending the effect on it.\n\nIf a\
    \ creature is reduced to 0 hit points by the infestation, it dies. The larvae\
    \ remain in the corpse, and one survives to become a fully grown carrion stalker\
    \ in 1d4 weeks. Any effect that cures diseases or removes the [poisoned](/rules/conditions.md#poisoned)\
    \ condition that targets the corpse instantly kills the larvae."
  "name": "Larval Burst (1/Day)"
"source":
- "VRGR"
name: Carrion Stalker
image: "[[Carrion Stalker.png]]"
---

# Carrion Stalker

```statblock
"name": "Carrion Stalker"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "35"
"hit_dice": "10d4 + 10"
"stats":
- !!int "6"
- !!int "16"
- !!int "12"
- !!int "2"
- !!int "13"
- !!int "6"
"speed": "walk 30 ft., burrow 30 ft."
"skillsaves":
  "Stealth": !!int "7"
"condition_immunities": "blinded"
"senses": "tremorsense 60 ft., passive Perception 11"
"languages": ""
"cr": "3"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The carrion stalker makes three Tentacle attacks. If it is attached to\
    \ a creature, it can replace one Tentacle attack with Larval Burst, if available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4\
    \ + 3) piercing damage, and the carrion stalker attaches to the target and pulls\
    \ itself into the target's space. While attached, the carrion stalker moves with\
    \ the target and has advantage on attack rolls against it.\n\nA creature can use\
    \ its action to try to detach the carrion stalker and force it to move into the\
    \ nearest unoccupied space, doing so with a successful DC 11 Strength check. On\
    \ its turn, the carrion stalker can detach itself from the target by using 5 feet\
    \ of movement. When it dies, the carrion stalker detaches from any creature it\
    \ is attached to."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The carrion stalker releases a burst of larvae in a 10-foot-radius sphere\
    \ centered on itself. Each creature in that area must succeed on a DC 13 Constitution\
    \ saving throw or be [poisoned](/rules/conditions.md#poisoned). A creature [poisoned](/rules/conditions.md#poisoned)\
    \ in this way takes 7 (2d6) poison damage at the start of each of its turns as\
    \ larvae infest its body. The creature can repeat the saving throw at the end\
    \ of each of its turns, ending the effect on itself on a success. Any effect that\
    \ cures disease or removes the [poisoned](/rules/conditions.md#poisoned) condition\
    \ instantly kills the larvae in the creature, ending the effect on it.\n\nIf a\
    \ creature is reduced to 0 hit points by the infestation, it dies. The larvae\
    \ remain in the corpse, and one survives to become a fully grown carrion stalker\
    \ in 1d4 weeks. Any effect that cures diseases or removes the [poisoned](/rules/conditions.md#poisoned)\
    \ condition that targets the corpse instantly kills the larvae."
  "name": "Larval Burst (1/Day)"
"source":
- "VRGR"
"image": "[[Carrion Stalker.png]]"
```
^statblock

*Source: Van Richten's Guide to Ravenloft p. 230*

## Description

A carrion stalker begins life as a pale larva that infests a corpse. Over the course of weeks, this grub burrows, feeds, and grows, ultimately developing into a chitinous mass of pincers and tentacles. When an adult carrion stalker detects movement, it bursts from its corpse-cradle to attack, intent on implanting its young into the living and starting its species' life cycle anew.

More than one necromancer has animated a corpse infested with carrion stalker larvae. While this can prove shocking and deadly, some depraved spellcasters cultivate carrion stalkers within zombies. The embedded carrion stalkers ride along in their freshly animated conveyances, bursting forth once they detect living creatures nearby. This destroys the zombie, but unleashes a new horror.

Carrion stalkers also enjoy symbiotic relationships with carrion crawlers. Carrion crawlers won't devour bodies infested by carrion stalkers, but they often pick up stalker larvae as they root among filth. The crawlers then spread these grubs, potentially infecting whole sewers, graveyards, or battlefields with carrion stalkers. In return, carrion stalkers avoid preying on carrion crawlers.