---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/undead/shapechanger
- monster/environment/urban
aliases: ["Vampire Warrior"]
statblock: true
"name": "Vampire Warrior"
"size": "Medium"
"type": "undead"
"subtype": "shapechanger"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"stats":
- !!int "18"
- !!int "18"
- !!int "18"
- !!int "17"
- !!int "15"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "9"
  "Wisdom": !!int "7"
"skillsaves":
  "Stealth": !!int "9"
  "Perception": !!int "7"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "the languages it knew in life"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the vampire isn't in sunlight or running water, it can use its action\
    \ to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true\
    \ form.\n\nWhile in bat form, the vampire can't speak, its walking speed is 5\
    \ feet, and it has a flying speed of 30 feet. Its statistics, other than its size\
    \ and speed, are unchanged. Anything it is wearing transforms with it, but nothing\
    \ it is carrying does. It reverts to its true form if it dies.\n\nWhile in mist\
    \ form, the vampire can't take any actions, speak, or manipulate objects. It is\
    \ weightless, has a flying speed of 20 feet, can hover, and can enter a hostile\
    \ creature's space and stop there. In addition, if air can pass through a space,\
    \ the mist can do so without squeezing, and it can't pass through water. It has\
    \ advantage on Strength, Dexterity, and Constitution saving throws, and it is\
    \ immune to all nonmagical damage, except the damage it takes from sunlight."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the vampire fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When it drops to 0 hit points outside its resting place, the vampire transforms\
    \ into a cloud of mist (as in the Shapechanger trait) instead of falling [unconscious](/rules/conditions.md#unconscious),\
    \ provided that it isn't in sunlight or running water. If it can't transform,\
    \ it is destroyed.\n\nWhile it has 0 hit points in mist form, it can't revert\
    \ to its vampire form, and it must reach its resting place within 2 hours or be\
    \ destroyed. Once in its resting place, it reverts to its vampire form. It is\
    \ then [paralyzed](/rules/conditions.md#paralyzed) until it regains at least 1\
    \ hit point. After spending 1 hour in its resting place with 0 hit points, it\
    \ regains 1 hit point."
  "name": "Misty Escape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire regains 20 hit points at the start of its turn if it has at\
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
    \ by Running Water._ The vampire takes 20 acid damage if it ends its turn in running\
    \ water.\n\n_Stake to the Heart._ If a piercing weapon made of wood is driven\
    \ into the vampire's heart while the vampire is [incapacitated](/rules/conditions.md#incapacitated)\
    \ in its resting place, the vampire is [paralyzed](/rules/conditions.md#paralyzed)\
    \ until the stake is removed.\n\n_Sunlight Hypersensitivity._ The vampire takes\
    \ 20 radiant damage when it starts its turn in sunlight. While in sunlight, it\
    \ has disadvantage on attack rolls and ability checks."
  "name": "Vampire Weaknesses"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire makes two greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire makes two attacks, only one of which can be a bite attack."
  "name": "Multiattack (Vampire Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8 (1d8\
    \ + 4) bludgeoning damage. Instead of dealing damage, the vampire can grapple\
    \ the target (escape DC 18)."
  "name": "Unarmed Strike (Vampire Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or\
    \ a creature that is [grappled](/rules/conditions.md#grappled) by the vampire,\
    \ [incapacitated](/rules/conditions.md#incapacitated), or [restrained](/rules/conditions.md#restrained).\
    \ Hit: 7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's\
    \ hit point maximum is reduced by an amount equal to the necrotic damage taken,\
    \ and the vampire regains hit points equal to that amount. The reduction lasts\
    \ until the target finishes a long rest. The target dies if this effect reduces\
    \ its hit point maximum to 0. A humanoid slain in this way and then buried in\
    \ the ground rises the following night as a [vampire spawn](/compendium/bestiary/undead/vampire-spawn.md)\
    \ under the vampire's control."
  "name": "Bite (Bat or Vampire Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire targets one humanoid it can see within 30 feet of it. If the\
    \ target can see the vampire, the target must succeed on a DC 17 Wisdom saving\
    \ throw against this magic or be [charmed](/rules/conditions.md#charmed) by the\
    \ vampire. The [charmed](/rules/conditions.md#charmed) target regards the vampire\
    \ as a trusted friend to be heeded and protected. Although the target isn't under\
    \ the vampire's control, it takes the vampire's requests or actions in the most\
    \ favorable way it can, and it is a willing target for the vampire's bite attack.\n\
    \nEach time the vampire or the vampire's companions do anything harmful to the\
    \ target, it can repeat the saving throw, ending the effect on itself on a success.\
    \ Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on\
    \ a different plane of existence than the target, or takes a bonus action to end\
    \ the effect."
  "name": "Charm"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire magically calls 2d4 swarms of [bats](/compendium/bestiary/beast/swarm-of-bats.md)\
    \ or [rats](/compendium/bestiary/beast/swarm-of-rats.md), provided that the sun\
    \ isn't up. While outdoors, the vampire can call 3d6 [wolves](/compendium/bestiary/beast/wolf.md)\
    \ instead. The called creatures arrive in 1d4 rounds, acting as allies of the\
    \ vampire and obeying its spoken commands. The beasts remain for 1 hour, until\
    \ the vampire dies, or until the vampire dismisses them as a bonus action."
  "name": "Children of the Night (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire moves up to its speed without provoking opportunity attacks."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire makes one unarmed strike."
  "name": "Unarmed Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire makes one bite attack."
  "name": "Bite (Costs 2 Actions)"
"source":
- "MM"
name: Vampire Warrior
image: "[[Vampire Warrior.png]]"
---

# Vampire Warrior

```statblock
"name": "Vampire Warrior"
"size": "Medium"
"type": "undead"
"subtype": "shapechanger"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"stats":
- !!int "18"
- !!int "18"
- !!int "18"
- !!int "17"
- !!int "15"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "9"
  "Wisdom": !!int "7"
"skillsaves":
  "Stealth": !!int "9"
  "Perception": !!int "7"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "the languages it knew in life"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the vampire isn't in sunlight or running water, it can use its action\
    \ to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true\
    \ form.\n\nWhile in bat form, the vampire can't speak, its walking speed is 5\
    \ feet, and it has a flying speed of 30 feet. Its statistics, other than its size\
    \ and speed, are unchanged. Anything it is wearing transforms with it, but nothing\
    \ it is carrying does. It reverts to its true form if it dies.\n\nWhile in mist\
    \ form, the vampire can't take any actions, speak, or manipulate objects. It is\
    \ weightless, has a flying speed of 20 feet, can hover, and can enter a hostile\
    \ creature's space and stop there. In addition, if air can pass through a space,\
    \ the mist can do so without squeezing, and it can't pass through water. It has\
    \ advantage on Strength, Dexterity, and Constitution saving throws, and it is\
    \ immune to all nonmagical damage, except the damage it takes from sunlight."
  "name": "Shapechanger"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the vampire fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When it drops to 0 hit points outside its resting place, the vampire transforms\
    \ into a cloud of mist (as in the Shapechanger trait) instead of falling [unconscious](/rules/conditions.md#unconscious),\
    \ provided that it isn't in sunlight or running water. If it can't transform,\
    \ it is destroyed.\n\nWhile it has 0 hit points in mist form, it can't revert\
    \ to its vampire form, and it must reach its resting place within 2 hours or be\
    \ destroyed. Once in its resting place, it reverts to its vampire form. It is\
    \ then [paralyzed](/rules/conditions.md#paralyzed) until it regains at least 1\
    \ hit point. After spending 1 hour in its resting place with 0 hit points, it\
    \ regains 1 hit point."
  "name": "Misty Escape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire regains 20 hit points at the start of its turn if it has at\
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
    \ by Running Water._ The vampire takes 20 acid damage if it ends its turn in running\
    \ water.\n\n_Stake to the Heart._ If a piercing weapon made of wood is driven\
    \ into the vampire's heart while the vampire is [incapacitated](/rules/conditions.md#incapacitated)\
    \ in its resting place, the vampire is [paralyzed](/rules/conditions.md#paralyzed)\
    \ until the stake is removed.\n\n_Sunlight Hypersensitivity._ The vampire takes\
    \ 20 radiant damage when it starts its turn in sunlight. While in sunlight, it\
    \ has disadvantage on attack rolls and ability checks."
  "name": "Vampire Weaknesses"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire makes two greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire makes two attacks, only one of which can be a bite attack."
  "name": "Multiattack (Vampire Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8 (1d8\
    \ + 4) bludgeoning damage. Instead of dealing damage, the vampire can grapple\
    \ the target (escape DC 18)."
  "name": "Unarmed Strike (Vampire Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or\
    \ a creature that is [grappled](/rules/conditions.md#grappled) by the vampire,\
    \ [incapacitated](/rules/conditions.md#incapacitated), or [restrained](/rules/conditions.md#restrained).\
    \ Hit: 7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's\
    \ hit point maximum is reduced by an amount equal to the necrotic damage taken,\
    \ and the vampire regains hit points equal to that amount. The reduction lasts\
    \ until the target finishes a long rest. The target dies if this effect reduces\
    \ its hit point maximum to 0. A humanoid slain in this way and then buried in\
    \ the ground rises the following night as a [vampire spawn](/compendium/bestiary/undead/vampire-spawn.md)\
    \ under the vampire's control."
  "name": "Bite (Bat or Vampire Form Only)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire targets one humanoid it can see within 30 feet of it. If the\
    \ target can see the vampire, the target must succeed on a DC 17 Wisdom saving\
    \ throw against this magic or be [charmed](/rules/conditions.md#charmed) by the\
    \ vampire. The [charmed](/rules/conditions.md#charmed) target regards the vampire\
    \ as a trusted friend to be heeded and protected. Although the target isn't under\
    \ the vampire's control, it takes the vampire's requests or actions in the most\
    \ favorable way it can, and it is a willing target for the vampire's bite attack.\n\
    \nEach time the vampire or the vampire's companions do anything harmful to the\
    \ target, it can repeat the saving throw, ending the effect on itself on a success.\
    \ Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on\
    \ a different plane of existence than the target, or takes a bonus action to end\
    \ the effect."
  "name": "Charm"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire magically calls 2d4 swarms of [bats](/compendium/bestiary/beast/swarm-of-bats.md)\
    \ or [rats](/compendium/bestiary/beast/swarm-of-rats.md), provided that the sun\
    \ isn't up. While outdoors, the vampire can call 3d6 [wolves](/compendium/bestiary/beast/wolf.md)\
    \ instead. The called creatures arrive in 1d4 rounds, acting as allies of the\
    \ vampire and obeying its spoken commands. The beasts remain for 1 hour, until\
    \ the vampire dies, or until the vampire dismisses them as a bonus action."
  "name": "Children of the Night (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire moves up to its speed without provoking opportunity attacks."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire makes one unarmed strike."
  "name": "Unarmed Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The vampire makes one bite attack."
  "name": "Bite (Costs 2 Actions)"
"source":
- "MM"
"image": "[[Vampire Warrior.png]]"
```
^statblock

*Source: Monster Manual p. 298*

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

urban