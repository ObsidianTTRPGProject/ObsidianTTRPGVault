---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/giant
statblock: inline
aliases: ["Oni"]
---
# [Oni](3-Mechanics\CLI\bestiary\giant/oni.md)
*Source: Monster Manual p. 239. Available in the SRD.*  

```statblock
"name": "Oni"
"size": "Large"
"type": "giant"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "[chain mail](/3-Mechanics/CLI/items/chain-mail.md)"
"hp": !!int "110"
"hit_dice": "13d10 + 39"
"stats":
- !!int "19"
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "12"
- !!int "15"
"speed": "30 ft., fly 30 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "3"
  "Wisdom": !!int "4"
  "Constitution": !!int "6"
"skillsaves":
  "Deception": !!int "8"
  "Perception": !!int "4"
  "Arcana": !!int "5"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Giant"
"cr": "7"
"traits":
- "desc": "The oni's innate spellcasting ability is Charisma (spell save DC 13). The\
    \ oni can innately cast the following spells, requiring no material components:\n\
    \nAt will: [darkness](/3-Mechanics/CLI/spells/darkness.md), [invisibility](/3-Mechanics/CLI/spells/invisibility.md)\n\
    \n1/day each: [charm person](/3-Mechanics/CLI/spells/charm-person.md), [cone\
    \ of cold](/3-Mechanics/CLI/spells/cone-of-cold.md), [gaseous form](/3-Mechanics/CLI/spells/gaseous-form.md),\
    \ [sleep](/3-Mechanics/CLI/spells/sleep.md)"
  "name": "innate"
- "desc": "The oni's weapon attacks are magical."
  "name": "Magic Weapons"
- "desc": "The oni regains 10 hit points at the start of its turn if it has at least\
    \ 1 hit point."
  "name": "Regeneration"
"actions":
- "desc": "The oni makes two attacks, either with its claws or its glaive."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d8 + 4|text(8) (1d8 + 4) slashing damage."
  "name": "Claw (Oni Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 10 ft., one target.\
    \ Hit: dice:2d10 + 4|text(15) (2d10 + 4) slashing damage, or dice:1d10\
    \ + 4|text(9) (1d10 + 4) slashing damage in Small or Medium form."
  "name": "Glaive"
- "desc": "The oni magically polymorphs into a Small or Medium humanoid, into a Large\
    \ giant, or back into its true form. Other than its size, its statistics are the\
    \ same in each form. The only equipment that is transformed is its glaive, which\
    \ shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts\
    \ to its true form, and its glaive reverts to its normal size."
  "name": "Change Shape"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "WDMM"
- "GoS"
- "ERLW"
- "EGW"
- "TCE"
- "WBtW"
- "JttRC"
- "KftGV"
- "PSZ"
- "ToFW"
"image": "/3-Mechanics/CLI/bestiary/giant/token/oni.webp"
```
^statblock

## Environment

forest, urban