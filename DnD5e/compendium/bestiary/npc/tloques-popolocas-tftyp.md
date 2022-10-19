---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/undead
aliases: ["Tloques-Popolocas"]
statblock: true
"name": "Tloques-Popolocas"
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
  "desc": "Tloques can cast [hold person](/compendium/spells/hold-person.md) (DC 14)\
    \ at will, requiring no components, but his target must be able to see him.\n\n\
    At will: [hold person](/compendium/spells/hold-person.md)"
  "name": "innate"
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
  "desc": "The vampire has the following flaws:\n\n- Forbiddance. The vampire can't\
    \ enter a residence without an invitation from one of the occupants.\n- Harmed\
    \ by Running Water. The vampire takes 20 acid damage when it ends its turn in\
    \ running water.\n- Stake to the Heart. The vampire is destroyed if a piercing\
    \ weapon made of wood is driven into its heart while it is [incapacitated](/rules/conditions.md#incapacitated)\
    \ in its resting place.\n- Sunlight Hypersensitivity. The vampire takes 20 radiant\
    \ damage when it starts its turn in sunlight. While in sunlight, it has disadvantage\
    \ on attack rolls and ability checks."
  "name": "Vampire Weaknesses"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the vampire isn't in sunlight or running water, it can use its action\
    \ to Polymorph into a Tiny bat, or back into its true form.\n\nWhile in bat form,\
    \ the vampire can't speak, its walking speed is 5 feet, and it has a flying speed\
    \ of 30 feet. Its Statistics, other than its size and speed, are unchanged. Anything\
    \ it is wearing transforms with it, but nothing it is carrying does. It reverts\
    \ to its true form if it dies."
  "name": "Shapechanger"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire makes two attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (2d4\
    \ + 3) slashing damage. Instead of dealing damage, the vampire can grapple the\
    \ target, escape DC 13."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire magically calls 2d4 swarms of bats, provided that the sun isn't\
    \ up. The called creatures arrive in 1d4 rounds, acting as allies of the vampire\
    \ and obeying its spoken commands. The beasts remain for 1 hour, until the vampire\
    \ dies, or until the vampire dismisses them as a bonus action."
  "name": "Children of the Night (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) slashing damage."
  "name": "Tloques' Berserker Axe +2"
"source":
- "TftYP"
name: Tloques-Popolocas
image: "[[Tloques-Popolocas.png]]"
---

# Tloques-Popolocas

```statblock
"name": "Tloques-Popolocas"
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
  "desc": "Tloques can cast [hold person](/compendium/spells/hold-person.md) (DC 14)\
    \ at will, requiring no components, but his target must be able to see him.\n\n\
    At will: [hold person](/compendium/spells/hold-person.md)"
  "name": "innate"
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
  "desc": "The vampire has the following flaws:\n\n- Forbiddance. The vampire can't\
    \ enter a residence without an invitation from one of the occupants.\n- Harmed\
    \ by Running Water. The vampire takes 20 acid damage when it ends its turn in\
    \ running water.\n- Stake to the Heart. The vampire is destroyed if a piercing\
    \ weapon made of wood is driven into its heart while it is [incapacitated](/rules/conditions.md#incapacitated)\
    \ in its resting place.\n- Sunlight Hypersensitivity. The vampire takes 20 radiant\
    \ damage when it starts its turn in sunlight. While in sunlight, it has disadvantage\
    \ on attack rolls and ability checks."
  "name": "Vampire Weaknesses"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the vampire isn't in sunlight or running water, it can use its action\
    \ to Polymorph into a Tiny bat, or back into its true form.\n\nWhile in bat form,\
    \ the vampire can't speak, its walking speed is 5 feet, and it has a flying speed\
    \ of 30 feet. Its Statistics, other than its size and speed, are unchanged. Anything\
    \ it is wearing transforms with it, but nothing it is carrying does. It reverts\
    \ to its true form if it dies."
  "name": "Shapechanger"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire makes two attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (2d4\
    \ + 3) slashing damage. Instead of dealing damage, the vampire can grapple the\
    \ target, escape DC 13."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire magically calls 2d4 swarms of bats, provided that the sun isn't\
    \ up. The called creatures arrive in 1d4 rounds, acting as allies of the vampire\
    \ and obeying its spoken commands. The beasts remain for 1 hour, until the vampire\
    \ dies, or until the vampire dismisses them as a bonus action."
  "name": "Children of the Night (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) slashing damage."
  "name": "Tloques' Berserker Axe +2"
"source":
- "TftYP"
"image": "[[Tloques-Popolocas.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 68*

## Description

Awakened to an endless night, vampires hunger for the life they have lost and sate that hunger by drinking the blood of the living. Vampires abhor sunlight, for its touch burns them. They never cast shadows or reflections, and any vampire wishing to move unnoticed among the living keeps to the darkness and far from reflective surfaces.

**Dark Desires.** Whether or not a vampire retains any memories from its former life, its emotional attachments wither as once-pure feelings become twisted by undeath. Love turns into hungry obsession, while friendship becomes bitter jealousy. In place of emotion, vampires pursue physical symbols of what they crave, so that a vampire seeking love might fixate on a young beauty. A child might become an object of fascination for a vampire obsessed with youth and potential. Others surround themselves with art, books, or sinister items such as torture devices or trophies from creatures they have killed.

**Born from Death.**  Most of a vampire's victims become vampire spawn-ravenous creatures with a vampire's hunger for blood, but under the control of the vampire that created them. If a true vampire allows a spawn to draw blood from its own body, the spawn transforms into a true vampire no longer under its master's control. Few vampires are willing to relinquish their control in this manner. Vampire spawn become free-willed when their creator dies.

**Chained to the Grave.** Every vampire remains bound to its coffin, crypt, or grave site, where it must rest by day. If a vampire didn't receive a formal burial, it must lie beneath a foot of earth at the place of its transition to undeath. A vampire can move its place of burial by transporting its coffin or a significant amount of grave dirt to another location. Some vampires set up multiple resting places this way.

**Undead Nature.** Neither a vampire nor a vampire spawn requires air.

**A Vampire's Lair.** A vampire chooses a grand yet defensible location for its lair, such as a castle, fortified manor, or walled abbey. It hides its coffin in an underground crypt or vault guarded by vampire spawn or other loyal creatures of the night.

**Player Characters as Vampires.** The game statistics of a player character transformed into a vampire spawn and then a vampire don't change, except that the character's Strength, Dexterity, and Constitution scores become 18 if they aren't higher. In addition, the character gains the vampire's damage resistances, [darkvision](/rules/senses.md#darkvision), traits, and actions. Attack and damage rolls for the vampire's attacks are based on Strength.

The save DC for Charm is 8 + the vampire's proficiency bonus + the vampire's Charisma modifier. The character's alignment becomes lawful evil, and the DM might take control of the character until the vampirism is reversed with a [wish](/compendium/spells/wish.md) spell or the character is killed and brought back to life.

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