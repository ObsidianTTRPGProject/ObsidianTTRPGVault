---
cssclass: json5e-monster
tags:
- compendium/src/vrgr
- monster/size/medium
- monster/type/humanoid
aliases: ["Priest of Osybus"]
statblock: true
"name": "Priest of Osybus"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"stats":
- !!int "10"
- !!int "14"
- !!int "16"
- !!int "18"
- !!int "17"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "3"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"condition_immunities": "frightened"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "any three languages"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the priest drops to 0 hit points, roll on the Boons of Undeath table\
    \ for the boon the priest receives. The priest dies if it receives a boon it already\
    \ has. If it receives a new boon, it revives at the start of its next turn with\
    \ half its hit points restored, and its creature type is now Undead.\n\nTo prevent\
    \ this revival, the Tattoo of Osybus on the priest's body must be destroyed. The\
    \ tattoo is invulnerable while the priest has at least 1 hit point. The tattoo\
    \ is otherwise an object with AC 15, and it is immune to poison and psychic damage.\
    \ It has 15 hit points, but it regains all its hit points at the end of every\
    \ combatant's turn."
  "name": "Tattoo of Osybus"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The priest attacks twice."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) piercing damage, and if the target is a creature, it is [paralyzed](/rules/conditions.md#paralyzed)\
    \ until the start of the priest's next turn. If this damage reduces a Medium or\
    \ smaller creature to 0 hit points, the creature dies, and its soul is trapped\
    \ in the priest's body, manifesting as a shadowy Soul Tattoo on the priest. The\
    \ soul is freed if the priest dies."
  "name": "Soul Blade"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 17 (3d8\
    \ + 4) necrotic damage, and the target can't regain hit points until the start\
    \ of the priest's next turn."
  "name": "Necrotic Bolt"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The priest touches one of the Soul Tattoos on its body. The tattoo vanishes\
    \ as the trapped soul manifests as a shadowy creature that appears in an unoccupied\
    \ space the priest can see within 30 feet of it. The creature has the size and\
    \ silhouette of its original body, but it otherwise uses the stat block of a shadow.\n\
    \nThe shadow obeys the priest's mental commands (no action required) and takes\
    \ its turn immediately after the priest. If the creature is within 5 feet of the\
    \ priest, it can turn back into a tattoo as an action, reappearing on the priest's\
    \ flesh and regaining all its hit points."
  "name": "Soul Tattoo (Recharge 5-6)"
"source":
- "VRGR"
name: Priest of Osybus
image: "[[Priest of Osybus.png]]"
---

# Priest of Osybus

```statblock
"name": "Priest of Osybus"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"stats":
- !!int "10"
- !!int "14"
- !!int "16"
- !!int "18"
- !!int "17"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "3"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"condition_immunities": "frightened"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "any three languages"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the priest drops to 0 hit points, roll on the Boons of Undeath table\
    \ for the boon the priest receives. The priest dies if it receives a boon it already\
    \ has. If it receives a new boon, it revives at the start of its next turn with\
    \ half its hit points restored, and its creature type is now Undead.\n\nTo prevent\
    \ this revival, the Tattoo of Osybus on the priest's body must be destroyed. The\
    \ tattoo is invulnerable while the priest has at least 1 hit point. The tattoo\
    \ is otherwise an object with AC 15, and it is immune to poison and psychic damage.\
    \ It has 15 hit points, but it regains all its hit points at the end of every\
    \ combatant's turn."
  "name": "Tattoo of Osybus"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The priest attacks twice."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) piercing damage, and if the target is a creature, it is [paralyzed](/rules/conditions.md#paralyzed)\
    \ until the start of the priest's next turn. If this damage reduces a Medium or\
    \ smaller creature to 0 hit points, the creature dies, and its soul is trapped\
    \ in the priest's body, manifesting as a shadowy Soul Tattoo on the priest. The\
    \ soul is freed if the priest dies."
  "name": "Soul Blade"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 17 (3d8\
    \ + 4) necrotic damage, and the target can't regain hit points until the start\
    \ of the priest's next turn."
  "name": "Necrotic Bolt"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The priest touches one of the Soul Tattoos on its body. The tattoo vanishes\
    \ as the trapped soul manifests as a shadowy creature that appears in an unoccupied\
    \ space the priest can see within 30 feet of it. The creature has the size and\
    \ silhouette of its original body, but it otherwise uses the stat block of a shadow.\n\
    \nThe shadow obeys the priest's mental commands (no action required) and takes\
    \ its turn immediately after the priest. If the creature is within 5 feet of the\
    \ priest, it can turn back into a tattoo as an action, reappearing on the priest's\
    \ flesh and regaining all its hit points."
  "name": "Soul Tattoo (Recharge 5-6)"
"source":
- "VRGR"
"image": "[[Priest of Osybus.png]]"
```
^statblock

*Source: Van Richten's Guide to Ravenloft p. 241*

## Description

Necromancers of deep evil, the priests of Osybus steal the souls of others to fuel the priests' malevolent magic. Using this soul power, each priest can defy death and become an undead creature, potentially cheating the grave over and over.

This unholy order of priests was founded centuries ago by Osybus, a mysterious figure of unfathomable ambition and evil. Osybus sought to use others' souls as springboards to his own immortality. He forged pacts with any entity that would give him more power and delved into any eldritch secret that would prolong his life. He became a devotee of the Dark Powers and tapped into their immortal malice to fuel his apotheosis.

As his power grew, he attracted disciples who also wished to defy life and death. He shared his dread secrets with them and demanded their worship. In time, his goal was achieved: he became a lich of almost godly power. Acknowledging the role that his disciples played in his ascension, Osybus gifted them with a trace of his power. Taking the form of a shadowy tattoo, this boon allows the priests to steal souls as their master did and to cheat death and become undead horrors.

The threat posed by Osybus and his disciples raised alarms far and wide. In response, the Ulmist Inquisition and the then-mortal Count Strahd von Zarovich faced the lich in battle. Their bravery would have been for naught if Osybus's disciples hadn't betrayed him. Fearing that their master would eventually consume their souls, the disciples aided Osybus's foes and destroyed his physical form. As he perished, he uttered a curse upon them—that their immortality would fail them when they least expected it and that he himself would become one of the Dark Powers. As a result of that curse, a priest of Osybus can't be certain that they will be reborn when they perish.

In an effort to rid themselves of this curse, they devoted themselves to the same Dark Powers with whom their master had communed. They were given a mission: provide a person of nobility and might to serve as an earthly vessel for these powers to enter the world and conquer it. If they succeeded, their immortality would be assured. A suitable vessel they did then find: Strahd von Zarovich. Working in shadows and through intermediaries, the priests whispered hatred to the count, and when his noble heart was corrupted, they were the ones who laid the path before him that led to the Amber Temple and his fall into vampirism.

But they were then betrayed. Osybus had not lied; he had himself become one of the Dark Powers, and he and the other Dark Powers had conjured up a misty prison to contain the newly immortal Strahd, thereby preventing the count from serving as the conquering force that the priests sought to loose upon the world; thus they were denied their reward of immortality.

To this day, the priests of Osybus seek to unleash Strahd from the mists, often using adventurers as their pawns. They also ironically bear their hated founder's name, for they know it is his original deathly gift that gives them their horrific powers.

**Boons of Undeath.** When a priest of Osybus drops to 0 hit points, the priest might revive with a benefit from the Boons of Undeath table. You can give a priest one or more of these boons of your choice before the priest faces adventurers. If you do so, the priest is Undead, rather than Humanoid, and a priest can receive each boon only once.

**Boons of Undeath**

| dice: d6 | Boon |
|----------|------|
| 1 |  |
| 2 |  |
| 3 |  |
| 4 |  |
| 5 |  |
| 6 |  |
^boons-of-undeath