---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/aberration
aliases: ["Blue Slaad"]
statblock: true
"name": "Blue Slaad"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "123"
"hit_dice": "13d10 + 52"
"stats":
- !!int "20"
- !!int "15"
- !!int "18"
- !!int "7"
- !!int "7"
- !!int "9"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "1"
"damage_resistances": "acid, cold, fire, lightning, thunder"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Slaad, telepathy 60 ft."
"cr": "7"
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
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage. If the target is a humanoid, it must succeed on a DC 15\
    \ Constitution saving throw or be infected with a disease called chaos phage.\
    \ While infected, the target can't regain hit points, and its hit point maximum\
    \ is reduced by 10 (3d6) every 24 hours. If the disease reduces the target's hit\
    \ point maximum to 0, the target instantly transforms into a [red slaad](/compendium/bestiary/aberration/red-slaad.md)\
    \ or, if it has the ability to cast spells of 3rd level or higher, a [green slaad](/compendium/bestiary/aberration/green-slaad.md).\
    \ Only a [wish](/compendium/spells/wish.md) spell can reverse the transformation."
  "name": "Claw"
"source":
- "MM"
- "WDMM"
- "IDRotF"
name: Blue Slaad
image: "[[Blue Slaad.png]]"
---

# Blue Slaad

```statblock
"name": "Blue Slaad"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "123"
"hit_dice": "13d10 + 52"
"stats":
- !!int "20"
- !!int "15"
- !!int "18"
- !!int "7"
- !!int "7"
- !!int "9"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "1"
"damage_resistances": "acid, cold, fire, lightning, thunder"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Slaad, telepathy 60 ft."
"cr": "7"
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
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage. If the target is a humanoid, it must succeed on a DC 15\
    \ Constitution saving throw or be infected with a disease called chaos phage.\
    \ While infected, the target can't regain hit points, and its hit point maximum\
    \ is reduced by 10 (3d6) every 24 hours. If the disease reduces the target's hit\
    \ point maximum to 0, the target instantly transforms into a [red slaad](/compendium/bestiary/aberration/red-slaad.md)\
    \ or, if it has the ability to cast spells of 3rd level or higher, a [green slaad](/compendium/bestiary/aberration/green-slaad.md).\
    \ Only a [wish](/compendium/spells/wish.md) spell can reverse the transformation."
  "name": "Claw"
"source":
- "MM"
- "WDMM"
- "IDRotF"
"image": "[[Blue Slaad.png]]"
```
^statblock

*Source: Monster Manual p. 276, Waterdeep: Dungeon of the Mad Mage, Icewind Dale: Rime of the Frostmaiden*

## Description

The bone hooks that protrude from the back of a blue slaad's hands inflict a terrible transformative disease on humanoids wounded by them. This infection, called chaos phage, transforms its victim into a fully grown red slaad—or green slaad if the host was a spellcaster able to cast 3rd level spells or higher.

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