---
cssclass: json5e-monster
tags:
- compendium/src/vrgr
- monster/size/medium
- monster/type/monstrosity
aliases: ["Strigoi"]
statblock: true
"name": "Strigoi"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"stats":
- !!int "17"
- !!int "14"
- !!int "16"
- !!int "11"
- !!int "17"
- !!int "10"
"speed": "walk 30 ft., fly 40 ft."
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "5"
  "Strength": !!int "5"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "5"
"damage_resistances": "necrotic"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Common"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The strigoi can magically command any [stirge](/compendium/bestiary/beast/stirge.md)\
    \ within 120 feet of it, using a limited form of telepathy."
  "name": "Stirge Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The strigoi makes one Claw attack and makes one Proboscis attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage plus 6 (1d12) acid damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 8 (1d10\
    \ + 3) piercing damage plus 10 (3d6) necrotic damage, and the strigoi regains\
    \ hit points equal to the amount of necrotic damage dealt. A creature reduced\
    \ to 0 hit points from this attack dies and leaves nothing behind except its skin\
    \ and its equipment."
  "name": "Proboscis"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The strigoi magically summons 1d4 + 2 [stirges](/compendium/bestiary/beast/stirge.md)\
    \ (see their entry in the Monster Manual) in unoccupied spaces it can see within\
    \ 30 feet of it. The stirges are under the strigoi's control and act immediately\
    \ after the strigoi in the initiative order. The stirges disappear after 1 hour,\
    \ when the strigoi dies, or when the strigoi dismisses them (no action required)."
  "name": "Ravenous Children (1/Day)"
"source":
- "VRGR"
name: Strigoi
image: "[[Strigoi.png]]"
---

# Strigoi

```statblock
"name": "Strigoi"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"stats":
- !!int "17"
- !!int "14"
- !!int "16"
- !!int "11"
- !!int "17"
- !!int "10"
"speed": "walk 30 ft., fly 40 ft."
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "5"
  "Strength": !!int "5"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "5"
"damage_resistances": "necrotic"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Common"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The strigoi can magically command any [stirge](/compendium/bestiary/beast/stirge.md)\
    \ within 120 feet of it, using a limited form of telepathy."
  "name": "Stirge Telepathy"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The strigoi makes one Claw attack and makes one Proboscis attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage plus 6 (1d12) acid damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 8 (1d10\
    \ + 3) piercing damage plus 10 (3d6) necrotic damage, and the strigoi regains\
    \ hit points equal to the amount of necrotic damage dealt. A creature reduced\
    \ to 0 hit points from this attack dies and leaves nothing behind except its skin\
    \ and its equipment."
  "name": "Proboscis"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The strigoi magically summons 1d4 + 2 [stirges](/compendium/bestiary/beast/stirge.md)\
    \ (see their entry in the Monster Manual) in unoccupied spaces it can see within\
    \ 30 feet of it. The stirges are under the strigoi's control and act immediately\
    \ after the strigoi in the initiative order. The stirges disappear after 1 hour,\
    \ when the strigoi dies, or when the strigoi dismisses them (no action required)."
  "name": "Ravenous Children (1/Day)"
"source":
- "VRGR"
"image": "[[Strigoi.png]]"
```
^statblock

*Source: Van Richten's Guide to Ravenloft p. 246*

## Description

The first strigoi were created by spellcasters who subjected swarms of stirges to transmutation spells. Other strigoi have emerged as the results of similar spellcraft, as the byproducts of outlandish scientific experiments, and from stirges draining well-fed vampires. When a strigoi arises, the unnatural creature is overwhelmed by instinctual hunger that drives it to undertake bloodthirsty rampages along with swarms of emboldened, bloodsucking pests.

Strigoi drain the blood, marrow, and soft tissues from their victims, leaving behind nothing but empty husks. Due to the horrifying nature of their deaths, those slain by strigoi occasionally reanimate as boneless.

Many strigoi seek ways to return to their former existence while being compelled to drain living victims. Others, though, embrace their new forms and mimic vampires. These would-be bloodsucker aristocrats create stirge courts amid scabrous husk-decorated villas and drain the life from any who balk at their grotesque gentility.