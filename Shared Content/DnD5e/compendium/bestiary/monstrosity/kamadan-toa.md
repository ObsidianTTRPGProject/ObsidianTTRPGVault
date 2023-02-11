---
cssclass: json5e-monster
tags:
- compendium/src/toa
- monster/size/large
- monster/type/monstrosity
aliases: ["Kamadan"]
statblock: true
"name": "Kamadan"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "67"
"hit_dice": "9d10 + 18"
"stats":
- !!int "16"
- !!int "16"
- !!int "14"
- !!int "3"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kamadan has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the kamadan moves at least 20 feet straight toward a creature and then\
    \ hits it with a claw attack on the same turn that target must succeed on a DC\
    \ 13 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is knocked [prone](/rules/conditions.md#prone), the kamadan can\
    \ make two attacks—one with its bite and one with its snakes—against it as a bonus\
    \ action."
  "name": "Pounce"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kamadan makes two attacks: one with its bite or claw and one with its\
    \ snakes."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6\
    \ + 3) piercing damage, and the target must make a DC 12 Constitution saving throw,\
    \ taking 21 (6d6) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Snakes"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kamadan exhales sleep gas in a 30-foot cone. Each creature in that\
    \ area must succeed on a DC 12 Constitution saving throw or fall [unconscious](/rules/conditions.md#unconscious)\
    \ for 10 minutes. This effect ends for a creature if it takes damage or someone\
    \ uses an action to wake it."
  "name": "Sleep Breath (Recharges after a Short or Long Rest)"
"source":
- "ToA"
name: Kamadan
image: "[[Kamadan.png]]"
---

# Kamadan

```statblock
"name": "Kamadan"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "67"
"hit_dice": "9d10 + 18"
"stats":
- !!int "16"
- !!int "16"
- !!int "14"
- !!int "3"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kamadan has advantage on Wisdom ([Perception](/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the kamadan moves at least 20 feet straight toward a creature and then\
    \ hits it with a claw attack on the same turn that target must succeed on a DC\
    \ 13 Strength saving throw or be knocked [prone](/rules/conditions.md#prone).\
    \ If the target is knocked [prone](/rules/conditions.md#prone), the kamadan can\
    \ make two attacks—one with its bite and one with its snakes—against it as a bonus\
    \ action."
  "name": "Pounce"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kamadan makes two attacks: one with its bite or claw and one with its\
    \ snakes."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6\
    \ + 3) piercing damage, and the target must make a DC 12 Constitution saving throw,\
    \ taking 21 (6d6) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Snakes"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kamadan exhales sleep gas in a 30-foot cone. Each creature in that\
    \ area must succeed on a DC 12 Constitution saving throw or fall [unconscious](/rules/conditions.md#unconscious)\
    \ for 10 minutes. This effect ends for a creature if it takes damage or someone\
    \ uses an action to wake it."
  "name": "Sleep Breath (Recharges after a Short or Long Rest)"
"source":
- "ToA"
"image": "[[Kamadan.png]]"
```
^statblock

*Source: Tomb of Annihilation p. 225*

## Description

A kamadan (pronounced KAM-ah-dan) is a feline predator that resembles a leopard with six snakes sprouting from its shoulders. Although it bears a passing resemblance to a displacer beast, the two creatures are unrelated (though some sages claim otherwise).

Kamadans typically hunt alone or in mated pairs. They can exhale clouds of sleep gas, which they typically do before entering melee combat. If a kamadan has both conscious and unconscious enemies within striking range, it tries to kill the conscious enemies first before finishing off any sleeping foes.