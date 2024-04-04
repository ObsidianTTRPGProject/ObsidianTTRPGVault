---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
- ttrpg-cli/monster/type/humanoid/shapechanger
statblock: inline
aliases: ["Wereboar"]
---
# [Wereboar](3-Mechanics\CLI\bestiary\humanoid/wereboar.md)
*Source: Monster Manual p. 209. Available in the SRD.*  

```statblock
"name": "Wereboar"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Neutral Evil"
"ac": !!int "10"
"ac_class": "11 from natural armor in boar or hybrid form"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "17"
- !!int "10"
- !!int "15"
- !!int "10"
- !!int "11"
- !!int "8"
"speed": "30 ft. (40 ft. in boar form)"
"skillsaves":
  "Perception": !!int "2"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "passive Perception 12"
"languages": "Common (can't speak in boar form)"
"cr": "4"
"traits":
- "desc": "The wereboar can use its action to polymorph into a boar-humanoid hybrid\
    \ or into a boar, or back into its true form, which is humanoid. Its statistics,\
    \ other than its AC, are the same in each form. Any equipment it is wearing or\
    \ carrying isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
- "desc": "If the wereboar moves at least 15 feet straight toward a target and then\
    \ hits it with its tusks on the same turn, the target takes an extra dice:2d6|text(7)\
    \ (2d6) slashing damage. If the target is a creature, it must succeed on a DC\
    \ 13 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Charge (Boar or Hybrid Form Only)"
- "desc": "If the wereboar takes 14 damage or less that would reduce it to 0 hit points,\
    \ it is reduced to 1 hit point instead."
  "name": "Relentless (Recharges after a Short or Long Rest)"
"actions":
- "desc": "The wereboar makes two attacks, only one of which can be with its tusks."
  "name": "Multiattack (Humanoid or Hybrid Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 3|text(10) (2d6 + 3) bludgeoning damage."
  "name": "Maul (Humanoid or Hybrid Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 3|text(10) (2d6 + 3) slashing damage. If the target is\
    \ a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed\
    \ with wereboar lycanthropy."
  "name": "Tusks (Boar or Hybrid Form Only)"
"source":
- "MM"
- "ToA"
- "DC"
- "DIP"
- "BGDIA"
- "IMR"
- "EGW"
- "TCE"
- "CM"
- "BMT"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/wereboar.webp"
```
^statblock

## Environment

grassland, forest, hill