---
cssclass: json5e-monster
tags:
- compendium/src/ggr
- monster/size/medium
- monster/type/celestial
aliases: ["Deathpact Angel"]
statblock: true
"name": "Deathpact Angel"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "175"
"hit_dice": "27d8 + 54"
"stats":
- !!int "16"
- !!int "18"
- !!int "14"
- !!int "19"
- !!int "20"
- !!int "23"
"speed": "walk 30 ft., fly 90 ft."
"saves":
  "Charisma": !!int "11"
  "Wisdom": !!int "10"
  "Intelligence": !!int "9"
"skillsaves":
  "Intimidation": !!int "11"
  "Insight": !!int "10"
  "Perception": !!int "10"
  "Persuasion": !!int "11"
"damage_resistances": "necrotic; radiant; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "truesight 120 ft., passive Perception 20"
"languages": "all"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel's innate spellcasting ability is Charisma (spell save DC 19,\
    \ +11 to hit with spell attacks). The angel can innately cast the following spells,\
    \ requiring no material components:\n\nAt will: [command](/compendium/spells/command.md)\
    \ (as a 2nd-level spell), [detect evil and good](/compendium/spells/detect-evil-and-good.md)\n\
    \n1/day: [raise dead](/compendium/spells/raise-dead.md)\n\n3/day each:\
    \ [charm person](/compendium/spells/charm-person.md) (as a 5th-level spell), [darkness](/compendium/spells/darkness.md),\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the angel targets a creature [charmed](/rules/conditions.md#charmed)\
    \ by it that it can see within 30 feet of it. The angel deals 11 (2d10) necrotic\
    \ damage to the target, and the angel gains temporary hit points equal to the\
    \ damage dealt."
  "name": "Exploitation of the Debtors"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel doesn't provoke an opportunity attack when it flies out of an\
    \ enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel makes two attacks with its scythe. It can substitute Chains of\
    \ Obligation for one of these attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 9 (2d4\
    \ + 4) slashing damage plus 27 (6d8) necrotic damage."
  "name": "Scythe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel targets one creature [charmed](/rules/conditions.md#charmed)\
    \ by it that it can see within 90 feet of it. The target must succeed on a DC\
    \ 19 Charisma saving throw or become [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute or until it takes any damage."
  "name": "Chains of Obligation"
"source":
- "GGR"
name: Deathpact Angel
image: "[[Deathpact Angel.png]]"
---

# Deathpact Angel

```statblock
"name": "Deathpact Angel"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "175"
"hit_dice": "27d8 + 54"
"stats":
- !!int "16"
- !!int "18"
- !!int "14"
- !!int "19"
- !!int "20"
- !!int "23"
"speed": "walk 30 ft., fly 90 ft."
"saves":
  "Charisma": !!int "11"
  "Wisdom": !!int "10"
  "Intelligence": !!int "9"
"skillsaves":
  "Intimidation": !!int "11"
  "Insight": !!int "10"
  "Perception": !!int "10"
  "Persuasion": !!int "11"
"damage_resistances": "necrotic; radiant; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "truesight 120 ft., passive Perception 20"
"languages": "all"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel's innate spellcasting ability is Charisma (spell save DC 19,\
    \ +11 to hit with spell attacks). The angel can innately cast the following spells,\
    \ requiring no material components:\n\nAt will: [command](/compendium/spells/command.md)\
    \ (as a 2nd-level spell), [detect evil and good](/compendium/spells/detect-evil-and-good.md)\n\
    \n1/day: [raise dead](/compendium/spells/raise-dead.md)\n\n3/day each:\
    \ [charm person](/compendium/spells/charm-person.md) (as a 5th-level spell), [darkness](/compendium/spells/darkness.md),\
    \ [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As a bonus action, the angel targets a creature [charmed](/rules/conditions.md#charmed)\
    \ by it that it can see within 30 feet of it. The angel deals 11 (2d10) necrotic\
    \ damage to the target, and the angel gains temporary hit points equal to the\
    \ damage dealt."
  "name": "Exploitation of the Debtors"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel doesn't provoke an opportunity attack when it flies out of an\
    \ enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel makes two attacks with its scythe. It can substitute Chains of\
    \ Obligation for one of these attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 9 (2d4\
    \ + 4) slashing damage plus 27 (6d8) necrotic damage."
  "name": "Scythe"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The angel targets one creature [charmed](/rules/conditions.md#charmed)\
    \ by it that it can see within 90 feet of it. The target must succeed on a DC\
    \ 19 Charisma saving throw or become [paralyzed](/rules/conditions.md#paralyzed)\
    \ for 1 minute or until it takes any damage."
  "name": "Chains of Obligation"
"source":
- "GGR"
"image": "[[Deathpact Angel.png]]"
```
^statblock

*Source: Guildmasters' Guide to Ravnica p. 192*

## Description

Deathpact angels dwell in the grandest of Orzhov cathedrals, where they surround themselves with wealth and wretched vassals that are utterly in their thrall.

**Gift Givers.** Posing as a beneficent god, a deathpact angel attracts petitioners who beg the angel for blessings: wealth, prestige, health, revenge, and the like. Imagining itself generous and merciful, the angel usually tries to grant the petitioners what they seek by using its abilities, drawing from its hoard of riches, or extorting favors from other members of the guild. True to the spirit of the Orzhov, though, the angel doesn't bestow these gifts out of kindness, but for the sake of gaining fanatical followers who owe it life debts.

**Debt and Indenture.** Those who receive favors from a deathpact angel incur a debt that they carry with fervent devotion. They regularly bring trinkets and offerings to the angel, no longer asking or expecting anything in return, and even willingly offer up their mortal lives for their angelic patron. Even after death, these debtors continue to serve the angel and the Orzhov Syndicate as indentured spirits (described later in this chapter).

Debts Paid

**Orzhov Angels.** Few angels find anything appealing in the corruption and decadence embodied by the Orzhov Syndicate, since such a society is fundamentally antithetical to their natures, but disillusionment can seduce even immortal beings. When cynicism takes root in an angel's heart, when questions undermine devotion to the cause of justice, when strength becomes a tool to lord over the weak, the Orzhov Syndicate is there to welcome the angel with open arms, offering status, respect, and power.

Orzhov angels might claim positions as executioners, commanders, or power brokers, but more often they carve out their own place in the guild, standing apart from the otherwise rigid hierarchy of the Orzhov.