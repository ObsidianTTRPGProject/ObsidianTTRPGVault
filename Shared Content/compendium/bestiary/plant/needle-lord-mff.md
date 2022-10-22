---
cssclass: json5e-monster
tags:
- compendium/src/mff
- monster/size/large
- monster/type/plant
aliases: ["Needle Lord"]
statblock: true
"name": "Needle Lord"
"size": "Large"
"type": "plant"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "18"
- !!int "11"
- !!int "14"
- !!int "11"
- !!int "15"
- !!int "12"
"speed": "walk 40 ft."
"skillsaves":
  "Athletics": !!int "6"
  "Stealth": !!int "2"
  "Perception": !!int "4"
"condition_immunities": "blinded, deafened, exhaustion"
"senses": "blindsight 30 ft., passive Perception 14"
"languages": "Sylvan"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each time a creature makes a melee attack against a needle lord, it takes\
    \ 2 piercing damage. A creature can choose to make an attack with disadvantage\
    \ to avoid this damage."
  "name": "Needle Defense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nettle lord makes 2 raking vine attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The needle lord makes up to 1d6 needle attacks, but it cannot attack the\
    \ same target more than twice during its turn."
  "name": "Needle Volley"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 14). Until this grapple ends, the target takes 11 piercing damage\
    \ at the start of each of its turns. The needle lord has two raking vines, each\
    \ of which can grapple only one target."
  "name": "Raking Vine"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +2 to hit, range 60 ft., one target. Hit: 2 (1d4)\
    \ piercing damage."
  "name": "Needle"
"source":
- "MFF"
name: Needle Lord
image: "[[Needle Lord.png]]"
---

# Needle Lord

```statblock
"name": "Needle Lord"
"size": "Large"
"type": "plant"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "18"
- !!int "11"
- !!int "14"
- !!int "11"
- !!int "15"
- !!int "12"
"speed": "walk 40 ft."
"skillsaves":
  "Athletics": !!int "6"
  "Stealth": !!int "2"
  "Perception": !!int "4"
"condition_immunities": "blinded, deafened, exhaustion"
"senses": "blindsight 30 ft., passive Perception 14"
"languages": "Sylvan"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each time a creature makes a melee attack against a needle lord, it takes\
    \ 2 piercing damage. A creature can choose to make an attack with disadvantage\
    \ to avoid this damage."
  "name": "Needle Defense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The nettle lord makes 2 raking vine attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The needle lord makes up to 1d6 needle attacks, but it cannot attack the\
    \ same target more than twice during its turn."
  "name": "Needle Volley"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6\
    \ + 4) piercing damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 14). Until this grapple ends, the target takes 11 piercing damage\
    \ at the start of each of its turns. The needle lord has two raking vines, each\
    \ of which can grapple only one target."
  "name": "Raking Vine"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +2 to hit, range 60 ft., one target. Hit: 2 (1d4)\
    \ piercing damage."
  "name": "Needle"
"source":
- "MFF"
"image": "[[Needle Lord.png]]"
```
^statblock

*Source: Mordenkainen's Fiendish Folio p. 16*

## Description

A wise ranger knows that the sight of a needle spawn is an ill omen, for it heralds the rise of a dreaded needle lord and a war for the soul of a forest.

**Roving Corpses.** Needle spawn are created by needle lords—hulking plant creatures that hail from fey domains wracked by wanton violence. When a needle lord enters a worldly forest, it spreads seed pods wherever it roams. A pod remains dormant until a humanoid dies near it or a humanoid corpse is dragged close by, whereupon the pod burrows into the corpse's decaying flesh and sprouts ropey vines covered in long, sharp needles. The vines wrap around the corpse to animate it, causing it to rise and lurch about like a zombie.

**Invasive Species.** When a great battle is fought in a fey woodland, the plants of the wood sometimes take on the thirst for violence and conquest that propels the fey to war. These plants become needle lords—ogre-shaped masses of thorny vines covered with long, cruel needles that pierce flesh.

A needle lord fancies itself a conquering general, wandering in search of a forest to conquer and claim. When it sets its sights on a forest, it first focuses on spreading the seed pods that give rise to its needle spawn vassals. It then prowls the wood in search of weak or defenseless humanoids to kill, converting their corpses into needle spawn to begin growing its army.

**Unnatural Ally.** A needle lord is an implacable foe. Driven only by a desire to conquer and rule, it wages endless war with its army of mobile dead against all creatures it views as a threat to its domination. It might even forge treaties with hobgoblins, kobolds, and other creatures willing to obey it, but it sees any alliance that casts it as a lesser partner as only a temporary measure. The needle lord betrays any allies at the first opportunity, as it believes that only one creature can claim dominion over a forest.