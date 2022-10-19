---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/small
- monster/type/humanoid/goblinoid
- monster/environment/underdark
- monster/environment/grassland
- monster/environment/forest
- monster/environment/hill
aliases: ["Goblin Boss"]
statblock: true
"name": "Goblin Boss"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "21"
"hit_dice": "6d6"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "10"
- !!int "8"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "6"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Common, Goblin"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The goblin can take the Disengage or Hide action as a bonus action on each\
    \ of its turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The goblin makes two attacks with its scimitar. The second attack has disadvantage."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 3 (1d6) piercing damage."
  "name": "Javelin"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature the goblin can see targets it with an attack, the goblin\
    \ chooses another goblin within 5 feet of it. The two goblins swap places, and\
    \ the chosen goblin becomes the target instead."
  "name": "Redirect Attack"
"source":
- "MM"
- "SKT"
- "ToA"
- "WDMM"
- "GoS"
- "BGDIA"
- "IDRotF"
- "TCE"
- "WBtW"
name: Goblin Boss
image: "[[Goblin Boss.png]]"
---

# Goblin Boss

```statblock
"name": "Goblin Boss"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "21"
"hit_dice": "6d6"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "10"
- !!int "8"
- !!int "10"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "6"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Common, Goblin"
"cr": "1"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The goblin can take the Disengage or Hide action as a bonus action on each\
    \ of its turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The goblin makes two attacks with its scimitar. The second attack has disadvantage."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 30/120\
    \ ft., one target. Hit: 3 (1d6) piercing damage."
  "name": "Javelin"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature the goblin can see targets it with an attack, the goblin\
    \ chooses another goblin within 5 feet of it. The two goblins swap places, and\
    \ the chosen goblin becomes the target instead."
  "name": "Redirect Attack"
"source":
- "MM"
- "SKT"
- "ToA"
- "WDMM"
- "GoS"
- "BGDIA"
- "IDRotF"
- "TCE"
- "WBtW"
"image": "[[Goblin Boss.png]]"
```
^statblock

*Source: Monster Manual p. 166, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, The Wild Beyond the Witchlight*

## Description

Goblins are small, black-hearted, selfish humanoids that lair in caves, abandoned mines, despoiled dungeons, and other dismal settings. Individually weak, goblins gather in large-sometimes overwhelming-numbers. They crave power and regularly abuse whatever authority they obtain.

**Goblinoids.** Goblins belong to a family of creatures called goblinoids. Their larger cousins, hobgoblins and bugbears, like to bully goblins into submission. Goblins are lazy and undisciplined, making them poor servants, laborers, and guards.

**Malicious Glee.** Motivated by greed and malice, goblins can't help but celebrate the few times they have the upper hand. They dance, caper with sheer joy when victory is theirs. Once their revels have ended, goblins delight in the torment of other creatures and embrace all manner of wickedness.

**Leaders and Followers.** Goblins are ruled by the strongest or smartest among them. A goblin boss might command a single lair, while a goblin king or queen (who is nothing more than a glorified goblin boss) rules hundreds of goblins, spread out among multiple lairs to ensure the tribe's survival. Goblin bosses are easily ousted, and many goblin tribes are taken over by hobgoblin warlords or bugbear chiefs.

**Challenging Lairs.** Goblins festoon their lairs with alarms designed to signal the arrival of intruders. Those lairs are also riddled with narrow tunnels and bolt-holes that human-sized creatures can't navigate, but which goblins can crawl through with ease, allowing them to flee or to circle around and surprise their enemies. Rat Keepers and Wolf Riders. Goblins have an affinity for rats and wolves, raising them to serve as companions and mounts, respectively. Like rats, goblins shun sunlight and sleep underground during the day. Like wolves, they are pack hunters, made bolder by their numbers. When they hunt from the backs of wolves, goblins use hit-and-run attacks.

**Worshipers of Maglubiyet.** Maglubiyet the Mighty One, the Lord of Depths and Darkness, is the greater god of goblinoids. Envisioned by most goblins as an eleven-foot-tall battle-scarred goblin with black skin and fire erupting from his eyes, he is worshiped not out of adoration but fear. Goblins believe that when they die in battle, their spirits join the ranks of Maglubiyet's army on the plane of Acheron. This is a "privilege" that most goblins dread, fearing the Mighty One's eternal tyranny even more than death.

## Environment

underdark, grassland, forest, hill