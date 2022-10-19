---
cssclass: json5e-monster
tags:
- compendium/src/psi
- monster/size/medium
- monster/type/undead
aliases: ["Vampire Neonate"]
statblock: true
"name": "Vampire Neonate"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "11"
- !!int "10"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "3"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks\
  \ not made with living wood weapons"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire regains 10 hit points at the start of its turn if it has at\
    \ least 1 hit point. If the vampire takes radiant damage or damage from holy water,\
    \ this trait doesn't function at the start of the vampire's next turn."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire makes two attacks, only one of which can be a bite attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (2d4\
    \ + 3) slashing damage. Instead of dealing damage, the vampire can grapple the\
    \ target (escape DC 13)."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one willing creature, or\
    \ a creature that is [grappled](/rules/conditions.md#grappled) by the vampire,\
    \ [incapacitated](/rules/conditions.md#incapacitated), or [restrained](/rules/conditions.md#restrained).\
    \ Hit: 6 (1d6 + 3) piercing damage plus 7 (2d6) necrotic damage. The target's\
    \ hit point maximum is reduced by an amount equal to the necrotic damage taken,\
    \ and the vampire regains hit points equal to that amount. The reduction lasts\
    \ until the target finishes a long rest. The target dies if this effect reduces\
    \ its hit point maximum to 0."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire obscures its form with mind-affecting magic that makes others\
    \ perceive it as a beautiful human of the same size and shape. The illusion ends\
    \ if the vampire takes a bonus action to end it or if the vampire dies. A creature\
    \ that can see the vampire can take an action to visually inspect it, ending the\
    \ mental effect on itself and seeing the vampire's true form with a successful\
    \ DC 20 Wisdom (Perception) check."
  "name": "Vampiric Glamer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire shrouds itself in a cloak of silence to a radius of 2 feet.\
    \ Within that radius, the effect is the same as the [silence](/compendium/spells/silence.md)\
    \ spell."
  "name": "Aura of Silence"
"source":
- "PSI"
name: Vampire Neonate
image: "[[Vampire Neonate.png]]"
---

# Vampire Neonate

```statblock
"name": "Vampire Neonate"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "11"
- !!int "10"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "3"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks\
  \ not made with living wood weapons"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire regains 10 hit points at the start of its turn if it has at\
    \ least 1 hit point. If the vampire takes radiant damage or damage from holy water,\
    \ this trait doesn't function at the start of the vampire's next turn."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire makes two attacks, only one of which can be a bite attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (2d4\
    \ + 3) slashing damage. Instead of dealing damage, the vampire can grapple the\
    \ target (escape DC 13)."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one willing creature, or\
    \ a creature that is [grappled](/rules/conditions.md#grappled) by the vampire,\
    \ [incapacitated](/rules/conditions.md#incapacitated), or [restrained](/rules/conditions.md#restrained).\
    \ Hit: 6 (1d6 + 3) piercing damage plus 7 (2d6) necrotic damage. The target's\
    \ hit point maximum is reduced by an amount equal to the necrotic damage taken,\
    \ and the vampire regains hit points equal to that amount. The reduction lasts\
    \ until the target finishes a long rest. The target dies if this effect reduces\
    \ its hit point maximum to 0."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire obscures its form with mind-affecting magic that makes others\
    \ perceive it as a beautiful human of the same size and shape. The illusion ends\
    \ if the vampire takes a bonus action to end it or if the vampire dies. A creature\
    \ that can see the vampire can take an action to visually inspect it, ending the\
    \ mental effect on itself and seeing the vampire's true form with a successful\
    \ DC 20 Wisdom (Perception) check."
  "name": "Vampiric Glamer"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire shrouds itself in a cloak of silence to a radius of 2 feet.\
    \ Within that radius, the effect is the same as the [silence](/compendium/spells/silence.md)\
    \ spell."
  "name": "Aura of Silence"
"source":
- "PSI"
"image": "[[Vampire Neonate.png]]"
```
^statblock

*Source: Plane Shift: Innistrad p. 17*