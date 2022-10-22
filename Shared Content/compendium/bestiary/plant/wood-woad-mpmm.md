---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/plant
- monster/environment/forest
aliases: ["Wood Woad"]
statblock: true
"name": "Wood Woad"
"size": "Medium"
"type": "plant"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"stats":
- !!int "18"
- !!int "12"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "8"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Athletics": !!int "7"
  "Stealth": !!int "4"
  "Perception": !!int "4"
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Sylvan"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood woad has advantage on Dexterity ([Stealth](/rules/skills.md#Stealth))\
    \ checks it makes in any terrain with ample obscuring vegetation."
  "name": "Plant Camouflage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood woad regains 10 hit points at the start of its turn if it is in\
    \ contact with the ground. If the wood woad takes fire damage, this trait doesn't\
    \ function at the start of the wood woad's next turn. The wood woad dies only\
    \ if it starts its turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once on each of its turns, the wood woad can use 10 feet of its movement\
    \ to step magically into one living tree within 5 feet of it and emerge from a\
    \ second living tree within 60 feet of it that it can see, appearing in an unoccupied\
    \ space within 5 feet of the second tree. Both trees must be Large or bigger."
  "name": "Tree Stride"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood woad makes two Club attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. +14 (4d4 + 4)\
    \ force damage."
  "name": "Club"
"source":
- "MPMM"
- "VGM"
name: Wood Woad
image: "[[Wood Woad.png]]"
---

# Wood Woad

```statblock
"name": "Wood Woad"
"size": "Medium"
"type": "plant"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"stats":
- !!int "18"
- !!int "12"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "8"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Athletics": !!int "7"
  "Stealth": !!int "4"
  "Perception": !!int "4"
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Sylvan"
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood woad has advantage on Dexterity ([Stealth](/rules/skills.md#Stealth))\
    \ checks it makes in any terrain with ample obscuring vegetation."
  "name": "Plant Camouflage"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood woad regains 10 hit points at the start of its turn if it is in\
    \ contact with the ground. If the wood woad takes fire damage, this trait doesn't\
    \ function at the start of the wood woad's next turn. The wood woad dies only\
    \ if it starts its turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Once on each of its turns, the wood woad can use 10 feet of its movement\
    \ to step magically into one living tree within 5 feet of it and emerge from a\
    \ second living tree within 60 feet of it that it can see, appearing in an unoccupied\
    \ space within 5 feet of the second tree. Both trees must be Large or bigger."
  "name": "Tree Stride"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The wood woad makes two Club attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. +14 (4d4 + 4)\
    \ force damage."
  "name": "Club"
"source":
- "MPMM"
- "VGM"
"image": "[[Wood Woad.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 266, Volo's Guide to Monsters p. 198*

## Description

A wood woad is a powerful bipedal Plant invested with the soul of someone who gave up life to become an everlasting guardian.

The ritual to create a wood woad is a primeval secret passed down through generations of forest-dwelling societies and druid circles. Performing the ritual isn't necessarily an evil act if the victim-to-be is a willing sacrifice.

In the ritual, a living person's chest is pierced and the heart removed. A seed is pushed into the heart, which is then placed in a tree. Any hollow or crook will do, but often a special cavity is carved out of the trunk. The tree is bathed and watered with the blood of the sacrificed victim, and the body is buried among the tree's roots. After three days, a sprout emerges from the ground at the base of the tree and swiftly grows into a bipedal form.

This new body, armored in tough bark and bearing a gnarled club and shield, is at once ready to perform its duty. The one who performed the ritual sets the wood woad to its task, and the creature follows those orders unceasingly.

A wood woad has a hole where its heart would be, just as does the body of its former self, buried in the earth. Those who become wood woads trade their free will and all sense of sentiment for supernatural strength and a deathless duty. They exist only to protect woodlands and the people who tend them. A wood woad's face is void and expressionless, except for the motes of light that swim about in its eye sockets. Wood woads speak little, and when not called on to take action, they root themselves in the earth and silently take sustenance from it.

Like trees, wood woads need only sunlight, air, and nutrients from the earth to go on living. Because they are undying, some wood woads outlive their original purpose. The site a wood woad guards might lose its power or significance over time, or those whom it was assigned to guard might die. If it is freed from its specific duties, a wood woad might roam to find another place of natural beauty or fey influence to watch over.

Wood woads are drawn to creatures that have close ties to nature and that protect and respect the land, such as [druids](/compendium/bestiary/humanoid/druid.md) and [treants](/compendium/bestiary/plant/treant.md). Some treants have wood woad servants by virtue of age-old pacts with druids or Fey that performed the rituals, while others acquire the services of freed wood woads that find renewed purpose in serving a kindred guardian.

## Environment

forest