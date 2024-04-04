---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Shield Guardian"]
---
# [Shield Guardian](3-Mechanics\CLI\bestiary\construct/shield-guardian.md)
*Source: Monster Manual p. 271. Available in the SRD.*  

```statblock
"name": "Shield Guardian"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"stats":
- !!int "18"
- !!int "8"
- !!int "18"
- !!int "7"
- !!int "10"
- !!int "3"
"speed": "30 ft."
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 10"
"languages": "understands commands given in any language but can't speak"
"cr": "7"
"traits":
- "desc": "The shield guardian is magically bound to an amulet. As long as the guardian\
    \ and its amulet are on the same plane of existence, the amulet's wearer can telepathically\
    \ call the guardian to travel to it, and the guardian knows the distance and direction\
    \ to the amulet. If the guardian is within 60 feet of the amulet's wearer, half\
    \ of any damage the wearer takes (rounded up) is transferred to the guardian."
  "name": "Bound"
- "desc": "The shield guardian regains 10 hit points at the start of its turn if it\
    \ has at least 1 hit point."
  "name": "Regeneration"
- "desc": "A spellcaster who wears the shield guardian's amulet can cause the guardian\
    \ to store one spell of 4th level or lower. To do so, the wearer must cast the\
    \ spell on the guardian. The spell has no effect but is stored within the guardian.\
    \ When commanded to do so by the wearer or when a situation arises that was predefined\
    \ by the spellcaster, the guardian casts the stored spell with any parameters\
    \ set by the original caster, requiring no components. When the spell is cast\
    \ or a new spell is stored, any previously stored spell is lost."
  "name": "Spell Storing"
"actions":
- "desc": "The guardian makes two fist attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d6 + 4|text(11) (2d6 + 4) bludgeoning damage."
  "name": "Fist"
"reactions":
- "desc": "When a creature makes an attack against the wearer of the guardian's amulet,\
    \ the guardian grants a +2 bonus to the wearer's AC if the guardian is within\
    \ 5 feet of the wearer."
  "name": "Shield"
"source":
- "MM"
- "CoS"
- "PotA"
- "SKT"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "BGDIA"
- "IDRotF"
- "CRCotN"
- "KftGV"
- "PaBTSO"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/construct/token/shield-guardian.webp"
```
^statblock

## Environment

urban