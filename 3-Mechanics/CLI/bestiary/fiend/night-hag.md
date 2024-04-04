---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
aliases: ["Night Hag"]
---
# [Night Hag](3-Mechanics\CLI\bestiary\fiend/night-hag.md)
*Source: Monster Manual p. 178. Available in the SRD.*  

```statblock
"name": "Night Hag"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "16"
- !!int "14"
- !!int "16"
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "5"
  "Insight": !!int "5"
  "Perception": !!int "5"
"damage_resistances": "cold; fire; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Abyssal, Common, Infernal, Primordial"
"cr": "5"
"traits":
- "desc": "The hag's innate spellcasting ability is Charisma (spell save DC 14, dice:\
    \ d20+6 (+6) to hit with spell attacks). She can innately cast the following\
    \ spells, requiring no material components:\n\nAt will: [detect magic](/3-Mechanics/CLI/spells/detect-magic.md),\
    \ [magic missile](/3-Mechanics/CLI/spells/magic-missile.md)\n\n2/day each:\
    \ [plane shift](/3-Mechanics/CLI/spells/plane-shift.md) (self only), [ray of enfeeblement](/3-Mechanics/CLI/spells/ray-of-enfeeblement.md),\
    \ [sleep](/3-Mechanics/CLI/spells/sleep.md)"
  "name": "innate"
- "desc": "The hag has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "A night hag carries two very rare magic items that she must craft for herself.\
    \ If either object is lost, the night hag will go to great lengths to retrieve\
    \ it, as creating a new tool takes time and effort.\n\nHeartstone: This lustrous\
    \ black gem allows a night hag to become ethereal while it is in her possession.\
    \ The touch of a heartstone also cures any disease. Crafting a heartstone takes\
    \ 30 days.\n\nSoul Bag: When an evil humanoid dies as a result of a night hag's\
    \ Nightmare Haunting, the hag catches the soul in this black sack made of stitched\
    \ flesh. A soul bag can hold only one evil soul at a time, and only the night\
    \ hag who crafted the bag can catch a soul with it. Crafting a soul bag takes\
    \ 7 days and a humanoid sacrifice (whose flesh is used to make the bag)."
  "name": "Night Hag Items"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d8 + 4|text(13) (2d8 + 4) slashing damage."
  "name": "Claws (Hag Form Only)"
- "desc": "The hag magically polymorphs into a Small or Medium female humanoid, or\
    \ back into her true form. Her statistics are the same in each form. Any equipment\
    \ she is wearing or carrying isn't transformed. She reverts to her true form if\
    \ she dies."
  "name": "Change Shape"
- "desc": "The hag magically enters the Ethereal Plane from the Material Plane, or\
    \ vice versa. To do so, the hag must have a heartstone in her possession."
  "name": "Etherealness"
- "desc": "While on the Ethereal Plane, the hag magically touches a sleeping humanoid\
    \ on the Material Plane. A [protection from evil and good](/3-Mechanics/CLI/spells/protection-from-evil-and-good.md)\
    \ spell cast on the target prevents this contact, as does a magic circle. As long\
    \ as the contact persists, the target has dreadful visions. If these visions last\
    \ for at least 1 hour, the target gains no benefit from its rest, and its hit\
    \ point maximum is reduced by dice:1d10|text(5) (1d10). If this effect reduces\
    \ the target's hit point maximum to 0, the target dies, and if the target was\
    \ evil, its soul is trapped in the hag's soul bag. The reduction to the target's\
    \ hit point maximum lasts until removed by the  [greater restoration](/3-Mechanics/CLI/spells/greater-restoration.md)\
    \ spell or similar magic."
  "name": "Nightmare Haunting (1/Day)"
"source":
- "MM"
- "CoS"
- "ToA"
- "WDMM"
- "GoS"
- "BGDIA"
- "EGW"
- "MOT"
- "IDRotF"
- "TCE"
- "CM"
- "JttRC"
- "KftGV"
- "SatO"
- "ToFW"
- "BMT"
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/night-hag.webp"
```
^statblock