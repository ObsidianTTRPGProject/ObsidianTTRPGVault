---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/aberration
aliases: ["Red Slaad"]
statblock: true
"name": "Red Slaad"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"stats":
- !!int "16"
- !!int "12"
- !!int "16"
- !!int "6"
- !!int "6"
- !!int "7"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "1"
"damage_resistances": "acid, cold, fire, lightning, thunder"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Slaad, telepathy 60 ft."
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The slaad has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The slaad regains 10 hit points at the start of its turn if it has at least\
    \ 1 hit point."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The slaad makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (2d4\
    \ + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage. If the target is a humanoid, it must succeed on a DC 14\
    \ Constitution saving throw or be infected with a disease—a minuscule slaad egg.\n\
    \nA humanoid host can carry only one slaad egg to term at a time. Over three months,\
    \ the egg moves to the chest cavity, gestates, and forms a [slaad tadpole](/compendium/bestiary/aberration/slaad-tadpole.md).\
    \ In the 24-hour period before giving birth, the host starts to feel unwell, its\
    \ speed is halved, and it has disadvantage on attack rolls, ability checks, and\
    \ saving throws. At birth, the tadpole chews its way through vital organs and\
    \ out of the host's chest in 1 round, killing the host in the process.\n\nIf the\
    \ disease is cured before the tadpole's emergence, the unborn slaad is disintegrated."
  "name": "Claw"
"source":
- "MM"
- "WDH"
- "GoS"
- "IDRotF"
name: Red Slaad
image: "[[Red Slaad.png]]"
---

# Red Slaad

```statblock
"name": "Red Slaad"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"stats":
- !!int "16"
- !!int "12"
- !!int "16"
- !!int "6"
- !!int "6"
- !!int "7"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "1"
"damage_resistances": "acid, cold, fire, lightning, thunder"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Slaad, telepathy 60 ft."
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The slaad has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The slaad regains 10 hit points at the start of its turn if it has at least\
    \ 1 hit point."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The slaad makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (2d4\
    \ + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage. If the target is a humanoid, it must succeed on a DC 14\
    \ Constitution saving throw or be infected with a disease—a minuscule slaad egg.\n\
    \nA humanoid host can carry only one slaad egg to term at a time. Over three months,\
    \ the egg moves to the chest cavity, gestates, and forms a [slaad tadpole](/compendium/bestiary/aberration/slaad-tadpole.md).\
    \ In the 24-hour period before giving birth, the host starts to feel unwell, its\
    \ speed is halved, and it has disadvantage on attack rolls, ability checks, and\
    \ saving throws. At birth, the tadpole chews its way through vital organs and\
    \ out of the host's chest in 1 round, killing the host in the process.\n\nIf the\
    \ disease is cured before the tadpole's emergence, the unborn slaad is disintegrated."
  "name": "Claw"
"source":
- "MM"
- "WDH"
- "GoS"
- "IDRotF"
"image": "[[Red Slaad.png]]"
```
^statblock

*Source: Monster Manual p. 276, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Icewind Dale: Rime of the Frostmaiden*

## Description

When a red slaad claws a humanoid creature, it can inject an egg from a gland under one of its claws. The egg works its way into its host and gestates, eventually forming a slaad tadpole. Such a tadpole then eats its way out of the host's body, feeds on the host's remains, and then seeks any other fresh meat it can find. The tadpole transforms into a fully grown blue slaad-or green slaad if the host had the ability to cast 3rd level spells or higher-within 2d12 hours.

**Slaadi.** In the Ever-Changing Chaos of Limbo, bits of forest and meadow, ruined castles, and isolated islands drift through a tumult of fire, water, earth, and wind. The foremost inhabitants of this inhospitable plane are the toad-like slaadi. Slaadi are undisciplined and have no formal hierarchy, although weaker slaadi obey stronger ones under threat of annihilation.

**The Spawning Stone.**  Long ago, Primus, overlord of the modrons, created a gigantic, geometrically complex stone imbued with the power of law. He then cast it adrift in Limbo, believing that the stone would bring order to the chaos of that plane and halt the spread of chaos to other planes. As the stone's power grew, it became possible for creatures with ordered minds, such as modrons and githzerai, to create enclaves in Limbo. However, Primus's creation had an unforeseen side effect: the chaotic energy absorbed by the stone spawned the horrors that came to be known as slaadi. Sages refer to Primus's massive creation as the Spawning Stone for this reason.

The slaadi wiped out every last modron enclave in Limbo. As creatures of utter chaos, slaadi loathe modrons and attack them on sight. Nonetheless, Primus stands by his creation and either doesn't perceive the slaadi as threats or chooses to ignore them.

> [!quote] Variant: Slaad Control Gems
> 
> As a slaad emerges from the Spawning Stone, the stone magically implants a fragment of itself in the slaad's brain. This fragment takes the form of a magic gem roughly the size and shape of a human child's fist. The gem is the same color as the slaad. Another creature can use magic to draw forth a slaad's gem and use it to subjugate the slaad. The slaad must obey whoever possesses its gem. If a slaad's gem is destroyed, the slaad can no longer be controlled in this way.
> 
> A slaad born from something other than the Spawning Stone has no gem in its brain, but it gains one if it ever comes into contact with the Spawning Stone. Slaadi on Limbo are attracted to the Spawning Stone, so most end up with a gem. A slaad with a control gem in its brain has the following additional trait.
> 
> **Control Gem.** Implanted in the slaad's brain is a magic control gem. The slaad must obey whoever possesses the gem and is immune to being [charmed](/rules/conditions.md#charmed) while so controlled.
> 
> Certain spells can be used to acquire the gem. If the slaad fails its saving throw against imprisonment, the spell can transfer the gem to the spellcaster's open hand, instead of imprisoning the slaad. A [wish](/compendium/spells/wish.md) spell, if cast in the slaad's presence, can be worded to acquire the gem.
> 
> A [greater restoration](/compendium/spells/greater-restoration.md) spell cast on the slaad destroys the gem without harming the slaad.
> 
> Someone who is proficient in Wisdom ([Medicine](/rules/skills.md#Medicine)) can remove the gem from an [incapacitated](/rules/conditions.md#incapacitated) slaad. Each try requires 1 minute of uninterrupted work and a successful DC 20 Wisdom ([Medicine](/rules/skills.md#Medicine)) check. Each failed attempt deals 22 (4d10) psychic damage to the slaad.
^variant-slaad-control-gems

**Birth and Transformation.**  Slaadi have horrific cycles of reproduction. Slaadi reproduce either by implanting humanoid hosts with eggs or by infecting them with a transformative disease called chaos phage. Each color of slaad reproduces or transforms in a different way, with red slaadi spawning blue and green slaadi, and blue slaadi spawning red and green. Each green slaad undergoes a lifelong cycle of transformation into the more powerful gray and death slaadi. With each transformation, the slaad retains its memories.

**Shapechangers.**  Some slaadi can transform into the humanoid creatures from which they were originally spawned. These slaadi return to the Material Plane to sow discord in the guise of their former selves.