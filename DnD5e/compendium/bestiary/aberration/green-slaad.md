---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/aberration/shapechanger
aliases: ["Green Slaad"]
statblock: true
"name": "Green Slaad"
"size": "Large"
"type": "aberration"
"subtype": "shapechanger"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"hp": !!int "127"
"hit_dice": "15d10 + 45"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "11"
- !!int "8"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "2"
  "Arcana": !!int "3"
"damage_resistances": "acid, cold, fire, lightning, thunder"
"senses": "blindsight 30 ft., darkvision 60 ft., passive Perception 12"
"languages": "Slaad, telepathy 60 ft."
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The slaad's innate spellcasting ability is Charisma (spell save DC 12).\
    \ The slaad can innately cast the following spells, requiring no material components:\n\
    \nAt will: [detect magic](/compendium/spells/detect-magic.md), [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [mage hand](/compendium/spells/mage-hand.md)\n\n1/day: [fireball](/compendium/spells/fireball.md)\n\
    \n2/day each: [fear](/compendium/spells/fear.md), [invisibility](/compendium/spells/invisibility.md)\
    \ (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The slaad can use its action to polymorph into a Small or Medium humanoid,\
    \ or back into its true form. Its statistics, other than its size, are the same\
    \ in each form. Any equipment it is wearing or carrying isn't transformed. It\
    \ reverts to its true form if it dies."
  "name": "Shapechanger"
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
  "desc": "The slaad makes three attacks: one with its bite and two with its claws\
    \ or staff. Alternatively, it uses its Hurl Flame twice."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage."
  "name": "Bite (Slaad Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) slashing damage."
  "name": "Claw (Slaad Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage."
  "name": "Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +4 to hit, range 60 ft., one target. Hit: 10 (3d6)\
    \ fire damage. The fire ignites flammable objects that aren't being worn or carried."
  "name": "Hurl Flame"
"source":
- "MM"
- "WDMM"
- "IDRotF"
name: Green Slaad
image: "[[Green Slaad.png]]"
---

# Green Slaad

```statblock
"name": "Green Slaad"
"size": "Large"
"type": "aberration"
"subtype": "shapechanger"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"hp": !!int "127"
"hit_dice": "15d10 + 45"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "11"
- !!int "8"
- !!int "12"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "2"
  "Arcana": !!int "3"
"damage_resistances": "acid, cold, fire, lightning, thunder"
"senses": "blindsight 30 ft., darkvision 60 ft., passive Perception 12"
"languages": "Slaad, telepathy 60 ft."
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The slaad's innate spellcasting ability is Charisma (spell save DC 12).\
    \ The slaad can innately cast the following spells, requiring no material components:\n\
    \nAt will: [detect magic](/compendium/spells/detect-magic.md), [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [mage hand](/compendium/spells/mage-hand.md)\n\n1/day: [fireball](/compendium/spells/fireball.md)\n\
    \n2/day each: [fear](/compendium/spells/fear.md), [invisibility](/compendium/spells/invisibility.md)\
    \ (self only)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The slaad can use its action to polymorph into a Small or Medium humanoid,\
    \ or back into its true form. Its statistics, other than its size, are the same\
    \ in each form. Any equipment it is wearing or carrying isn't transformed. It\
    \ reverts to its true form if it dies."
  "name": "Shapechanger"
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
  "desc": "The slaad makes three attacks: one with its bite and two with its claws\
    \ or staff. Alternatively, it uses its Hurl Flame twice."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage."
  "name": "Bite (Slaad Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) slashing damage."
  "name": "Claw (Slaad Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage."
  "name": "Staff"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +4 to hit, range 60 ft., one target. Hit: 10 (3d6)\
    \ fire damage. The fire ignites flammable objects that aren't being worn or carried."
  "name": "Hurl Flame"
"source":
- "MM"
- "WDMM"
- "IDRotF"
"image": "[[Green Slaad.png]]"
```
^statblock

*Source: Monster Manual p. 277, Waterdeep: Dungeon of the Mad Mage, Icewind Dale: Rime of the Frostmaiden*

## Description

Green slaadi are surprisingly intelligent and possess innate spellcasting ability. A green slaad can change its shape to appear as a humanoid. If it was born of a humanoid host, the slaad usually adopts its host's form.

At some unpredictable point in its existence, a green slaad unlocks the means to magically, instantly, and permanently transform itself into a gray slaad. Unlocking this knowledge can take years, even decades.

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