---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/undead
- monster/environment/underdark
- monster/environment/urban
aliases: ["Vampire Spawn"]
statblock: true
"name": "Vampire Spawn"
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
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire regains 10 hit points at the start of its turn if it has at\
    \ least 1 hit point and isn't in sunlight or running water. If the vampire takes\
    \ radiant damage or damage from holy water, this trait doesn't function at the\
    \ start of the vampire's next turn."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire has the following flaws:\n\n_Forbiddance._ The vampire can't\
    \ enter a residence without an invitation from one of the occupants.\n\n_Harmed\
    \ by Running Water._ The vampire takes 20 acid damage when it ends its turn in\
    \ running water.\n\n_Stake to the Heart._ The vampire is destroyed if a piercing\
    \ weapon made of wood is driven into its heart while it is [incapacitated](/rules/conditions.md#incapacitated)\
    \ in its resting place.\n\n_Sunlight Hypersensitivity._ The vampire takes 20 radiant\
    \ damage when it starts its turn in sunlight. While in sunlight, it has disadvantage\
    \ on attack rolls and ability checks."
  "name": "Vampire Weaknesses"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire makes two attacks, only one of which can be a bite attack."
  "name": "Multiattack"
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
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (2d4\
    \ + 3) slashing damage. Instead of dealing damage, the vampire can grapple the\
    \ target (escape DC 13)."
  "name": "Claws"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "PotA"
- "RoT"
- "TftYP"
- "WDMM"
- "GoS"
- "DIP"
- "SLW"
- "EGW"
- "TCE"
name: Vampire Spawn
image: "[[Vampire Spawn.png]]"
---

# Vampire Spawn

```statblock
"name": "Vampire Spawn"
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
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire regains 10 hit points at the start of its turn if it has at\
    \ least 1 hit point and isn't in sunlight or running water. If the vampire takes\
    \ radiant damage or damage from holy water, this trait doesn't function at the\
    \ start of the vampire's next turn."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire has the following flaws:\n\n_Forbiddance._ The vampire can't\
    \ enter a residence without an invitation from one of the occupants.\n\n_Harmed\
    \ by Running Water._ The vampire takes 20 acid damage when it ends its turn in\
    \ running water.\n\n_Stake to the Heart._ The vampire is destroyed if a piercing\
    \ weapon made of wood is driven into its heart while it is [incapacitated](/rules/conditions.md#incapacitated)\
    \ in its resting place.\n\n_Sunlight Hypersensitivity._ The vampire takes 20 radiant\
    \ damage when it starts its turn in sunlight. While in sunlight, it has disadvantage\
    \ on attack rolls and ability checks."
  "name": "Vampire Weaknesses"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire makes two attacks, only one of which can be a bite attack."
  "name": "Multiattack"
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
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (2d4\
    \ + 3) slashing damage. Instead of dealing damage, the vampire can grapple the\
    \ target (escape DC 13)."
  "name": "Claws"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "PotA"
- "RoT"
- "TftYP"
- "WDMM"
- "GoS"
- "DIP"
- "SLW"
- "EGW"
- "TCE"
"image": "[[Vampire Spawn.png]]"
```
^statblock

*Source: Monster Manual p. 298, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, The Rise of Tiamat, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Dragon of Icespire Peak, Storm Lord's Wrath, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything*

## Description

Awakened to an endless night, vampires hunger for the life they have lost and sate that hunger by drinking the blood of the living. Vampires abhor sunlight, for its touch burns them. They never cast shadows or reflections, and any vampire wishing to move unnoticed among the living keeps to the darkness and far from reflective surfaces.

**Dark Desires.** Whether or not a vampire retains any memories from its former life, its emotional attachments wither as once-pure feelings become twisted by undeath. Love turns into hungry obsession, while friendship becomes bitter jealousy. In place of emotion, vampires pursue physical symbols of what they crave, so that a vampire seeking love might fixate on a young beauty. A child might become an object of fascination for a vampire obsessed with youth and potential. Others surround themselves with art, books, or sinister items such as torture devices or trophies from creatures they have killed.

**Born from Death.** Most of a vampire's victims become vampire spawn-ravenous creatures with a vampire's hunger for blood, but under the control of the vampire that created them. If a true vampire allows a spawn to draw blood from its own body, the spawn transforms into a true vampire no longer under its master's control. Few vampires are willing to relinquish their control in this manner. Vampire spawn become free-willed when their creator dies.

**Chained to the Grave.** Every vampire remains bound to its coffin, crypt, or grave site, where it must rest by day. If a vampire didn't receive a formal burial, it must lie beneath a foot of earth at the place of its transition to undeath. A vampire can move its place of burial by transporting its coffin or a significant amount of grave dirt to another location. Some vampires set up multiple resting places this way.

**Undead Nature.** Neither a vampire nor a vampire spawn requires air.

**A Vampire's Lair.** A vampire chooses a grand yet defensible location for its lair, such as a castle, fortified manor, or walled abbey. It hides its coffin in an underground crypt or vault guarded by vampire spawn or other loyal creatures of the night.

> [!quote] Player Characters as Vampires
> 
> The game statistics of a player character transformed into a vampire spawn and then a vampire don't change, except that the character's Strength, Dexterity, and Constitution scores become 18 if they aren't higher. In addition, the character gains the vampire's damage resistances, [darkvision](/rules/senses.md#darkvision), traits, and actions. Attack and damage rolls for the vampire's attacks are based on Strength.
> 
> The save DC for Charm is 8 + the vampire's proficiency bonus + the vampire's Charisma modifier. The character's alignment becomes lawful evil, and the DM might take control of the character until the vampirism is reversed with a [wish](/compendium/spells/wish.md) spell or the character is killed and brought back to life.
^player-characters-as-vampires

> [!quote] Strahd von Zarovich
> 
> A brilliant thinker and capable warrior in life, Strahd von Zarovich fought in countless battles for his people. When war and killing finally stripped him of his youth and strength, he settled in the remote valley of Barovia and built a castle on a towering pinnacle, from which he could survey his lands. His brother Sergei came to live with him in Castle Ravenloft, becoming Strahd's adviser and constant companion.
> 
> In his brother, Strahd saw everything he had lost. Sergei was handsome and young, while Strahd had become old and scarred. Resentment colored their relationship, eventually turning into hatred. Strahd's beloved, Tatyana, spurned him for Sergei, whom she pledged to marry.
> 
> In a desperate attempt to win Tatyana's heart, Strahd forged a pact with dark powers that made him immortal. At the wedding of Sergei and Tatyana, he confronted his brother and killed him. Tatyana fled and flung herself from Ravenloft's walls. Strahd's guards, seeing him for a monster, shot him with arrows. But he did not die. He became a vampire-the first vampire, according to many sages.
> 
> In the centuries since his transformation, Strahd's lust for life and youth have only grown. He broods in his dark castle, cursing the living for stealing away what he lost, and never admitting his hand in the tragedy he created.
^strahd-von-zarovich

## Environment

underdark, urban