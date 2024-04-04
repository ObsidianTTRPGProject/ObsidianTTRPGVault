---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
aliases: ["Rakshasa"]
---
# [Rakshasa](3-Mechanics\CLI\bestiary\fiend/rakshasa.md)
*Source: Monster Manual p. 257. Available in the SRD.*  

```statblock
"name": "Rakshasa"
"size": "Medium"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "110"
"hit_dice": "13d8 + 52"
"stats":
- !!int "14"
- !!int "17"
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "20"
"speed": "40 ft."
"skillsaves":
  "Deception": !!int "10"
  "Insight": !!int "8"
"damage_vulnerabilities": "piercing from magic weapons wielded by good creatures"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Infernal"
"cr": "13"
"traits":
- "desc": "The rakshasa's innate spellcasting ability is Charisma (spell save DC 18,\
    \ dice: d20+10 (+10) to hit with spell attacks). The rakshasa can innately\
    \ cast the following spells, requiring no material components:\n\nAt will:\
    \ [detect thoughts](/3-Mechanics/CLI/spells/detect-thoughts.md), [disguise self](/3-Mechanics/CLI/spells/disguise-self.md),\
    \ [mage hand](/3-Mechanics/CLI/spells/mage-hand.md), [minor illusion](/3-Mechanics/CLI/spells/minor-illusion.md)\n\
    \n1/day each: [dominate person](/3-Mechanics/CLI/spells/dominate-person.md),\
    \ [fly](/3-Mechanics/CLI/spells/fly.md), [plane shift](/3-Mechanics/CLI/spells/plane-shift.md),\
    \ [true seeing](/3-Mechanics/CLI/spells/true-seeing.md)\n\n3/day each: [charm\
    \ person](/3-Mechanics/CLI/spells/charm-person.md), [detect magic](/3-Mechanics/CLI/spells/detect-magic.md),\
    \ [invisibility](/3-Mechanics/CLI/spells/invisibility.md), [major image](/3-Mechanics/CLI/spells/major-image.md),\
    \ [suggestion](/3-Mechanics/CLI/spells/suggestion.md)"
  "name": "innate"
- "desc": "The rakshasa can't be affected or detected by spells of 6th level or lower\
    \ unless it wishes to be. It has advantage on saving throws against all other\
    \ spells and magical effects."
  "name": "Limited Magic Immunity"
"actions":
- "desc": "The rakshasa makes two claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 2|text(9) (2d6 + 2) slashing damage, and the target is\
    \ cursed if it is a creature. The magical curse takes effect whenever the target\
    \ takes a short or long rest, filling the target's thoughts with horrible images\
    \ and dreams. The cursed target gains no benefit from finishing a short or long\
    \ rest. The curse lasts until it is lifted by a [remove curse](/3-Mechanics/CLI/spells/remove-curse.md)\
    \ spell or similar magic."
  "name": "Claw"
"source":
- "MM"
- "TftYP"
- "WDMM"
- "GoS"
- "ERLW"
- "TCE"
- "CM"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/rakshasa.webp"
```
^statblock

## Environment

urban