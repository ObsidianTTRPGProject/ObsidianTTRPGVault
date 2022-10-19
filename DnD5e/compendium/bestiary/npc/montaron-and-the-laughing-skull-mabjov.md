---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/small
- monster/type/humanoid/halfling
aliases: ["Montaron and the Laughing Skull"]
statblock: true
"name": "Montaron and the Laughing Skull"
"size": "Small"
"type": "humanoid"
"subtype": "halfling"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "91"
"hit_dice": "14d6 + 42"
"stats":
- !!int "12"
- !!int "20"
- !!int "16"
- !!int "13"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "9"
  "Intelligence": !!int "5"
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "13"
  "Perception": !!int "4"
  "Acrobatics": !!int "9"
"damage_resistances": "poison"
"senses": "passive Perception 14"
"languages": "Common, Halfling, Thieves' cant"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "During his first turn, Montaron has advantage on attack rolls against any\
    \ creature that hasn't taken a turn. Any hit Montaron scores against a surprised\
    \ creature is a critical hit."
  "name": "Assassinate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Montaron is subjected to an effect that allows him to make a Dexterity\
    \ saving throw to take only half damage, Montaron instead takes no damage if he\
    \ succeeds on the saving throw, and only half damage if he fails."
  "name": "Evasion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Montaron can move through the space of any creature that is of a size larger\
    \ than his."
  "name": "Nimbleness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Montaron deals an extra 21 (6d6) damage when he hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ ft. of an ally of Montaron that isn't incapacitated and Montaron doesn't have\
    \ disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Montaron possesses a [bag of holding](/compendium/items/bag-of-holding.md).\
    \ He keeps the [demilich](/compendium/bestiary/undead/demilich.md), Xzar, in the\
    \ bag. He also possesses a portable hole, which he uses to aid in robberies. As\
    \ a bonus action, Montaron can place his portable hole in his bag of holding.\
    \ This instantly destroys both items and opens a gate to the Astral Plane. Montaron\
    \ and any creature within 10 feet of him is sucked through the gate to a random\
    \ location on the Astral Plane. The gate then closes."
  "name": "Special Items"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Montaron makes two shortsword attacks and uses the ability Unleash the\
    \ Demilich if available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 8 (1d6\
    \ + 5) piercing damage, and the target must make a DC 15 Constitution saving throw,\
    \ taking 24 (7d6) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, range 80/320 ft., one target. Hit: 9\
    \ (1d8 + 5) piercing damage, and the target must make a DC 15 Constitution saving\
    \ throw, taking 24 (7d6) poison damage on a failed save, or half as much damage\
    \ on a successful one."
  "name": "Light Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Montaron reaches inside his bag of holding and releases Xzar. Xzar is a\
    \ demilich and appears within 5 ft. of Montaron. Xzar rolls for his own initiative.\
    \ Xzar cannot use lair actions or legendary actions. He has a CR of 14."
  "name": "Unleash the Demilich"
"source":
- "MaBJoV"
name: Montaron and the Laughing Skull
image: "[[Montaron and the Laughing Skull.png]]"
---

# Montaron and the Laughing Skull

```statblock
"name": "Montaron and the Laughing Skull"
"size": "Small"
"type": "humanoid"
"subtype": "halfling"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "91"
"hit_dice": "14d6 + 42"
"stats":
- !!int "12"
- !!int "20"
- !!int "16"
- !!int "13"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "9"
  "Intelligence": !!int "5"
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "13"
  "Perception": !!int "4"
  "Acrobatics": !!int "9"
"damage_resistances": "poison"
"senses": "passive Perception 14"
"languages": "Common, Halfling, Thieves' cant"
"cr": "11"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "During his first turn, Montaron has advantage on attack rolls against any\
    \ creature that hasn't taken a turn. Any hit Montaron scores against a surprised\
    \ creature is a critical hit."
  "name": "Assassinate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Montaron is subjected to an effect that allows him to make a Dexterity\
    \ saving throw to take only half damage, Montaron instead takes no damage if he\
    \ succeeds on the saving throw, and only half damage if he fails."
  "name": "Evasion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Montaron can move through the space of any creature that is of a size larger\
    \ than his."
  "name": "Nimbleness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Montaron deals an extra 21 (6d6) damage when he hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ ft. of an ally of Montaron that isn't incapacitated and Montaron doesn't have\
    \ disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Montaron possesses a [bag of holding](/compendium/items/bag-of-holding.md).\
    \ He keeps the [demilich](/compendium/bestiary/undead/demilich.md), Xzar, in the\
    \ bag. He also possesses a portable hole, which he uses to aid in robberies. As\
    \ a bonus action, Montaron can place his portable hole in his bag of holding.\
    \ This instantly destroys both items and opens a gate to the Astral Plane. Montaron\
    \ and any creature within 10 feet of him is sucked through the gate to a random\
    \ location on the Astral Plane. The gate then closes."
  "name": "Special Items"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Montaron makes two shortsword attacks and uses the ability Unleash the\
    \ Demilich if available."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 8 (1d6\
    \ + 5) piercing damage, and the target must make a DC 15 Constitution saving throw,\
    \ taking 24 (7d6) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +9 to hit, range 80/320 ft., one target. Hit: 9\
    \ (1d8 + 5) piercing damage, and the target must make a DC 15 Constitution saving\
    \ throw, taking 24 (7d6) poison damage on a failed save, or half as much damage\
    \ on a successful one."
  "name": "Light Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Montaron reaches inside his bag of holding and releases Xzar. Xzar is a\
    \ demilich and appears within 5 ft. of Montaron. Xzar rolls for his own initiative.\
    \ Xzar cannot use lair actions or legendary actions. He has a CR of 14."
  "name": "Unleash the Demilich"
"source":
- "MaBJoV"
"image": "[[Montaron and the Laughing Skull.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 86*

## Description

Possibly the most ornery halfling in all of Toril, Montaron is aggressive, bloodthirsty, and absolutely ruthless. He puts his natural nimbleness to use as a skilled assassin working for the Shadow Thieves. He used to work for a rival criminal organization known as the Zhentarim until he was killed during a mission. He despises his old organization, but not nearly as much as he does socalled "goody-goodies." He was eventually brought back to life by the Shadow Thieves because of his relationship with his old partner, a necromancer named Xzar.

Xzar was already known for his erratic and bizarre behavior before he decided to attempt the magical ritual that would turn him into a lich. While successful at achieving this goal, once he embraced undeath he quickly descended into insanity. Xzar lost track of his phylactery and thus didn't feed it the souls required to fuel his undead state. Several decades later his body had crumbled to dust and Xzar had devolved into a demilich.

Montaron was brought back by the Shadow Thieves to utilize the demilich. The halfling keeps Xzar's skull in a bag of holding, only bringing it out during a mission. When Xzar is active, he will sometimes affectionately refer to the halfling as "Monty". Most of the time he will just berate Montaron for being an insufferable idiot.

Montaron is motivated by two things: amassing coin and finding outlets for his hot temper. He secretly despises his old partner Xzar, but knows that the demilich makes him a much more effective assassin.

**Montaron as a Contact.** Montaron is the primary contact for members of the Shadow Thieves at low levels. Montaron has access to fences in all of the major cities of the Sword Coast. He can exchange magic items of equal value for a small cost.

**Items Available from Montaron**

| Magic Item | Required Trade | Cost |
|------------|----------------|------|
| Armor, +1 of your choice | Armor +1 | 200 gp |
| Ring of jumping, ring of mind shielding, ring of swimming, ring of warmth, ring of water walking | Uncommon magic ring | 100 gp |
| Ring of evasion, ring of feather falling, ring of free action, ring of protection, ring of x-ray vision | Rare magic ring | 300 gp |
| Rod of rulership, staff of the adder, staff of charming, staff of the python, staff of swarming insects | Rare magic rod or staff | 500 gp |
| Wand of magic detection, wand of magic missiles, wand of secrets, wand of web | Uncommon magic wand | 150 gp |
| Wand of binding, wand of enemy detection, wand of fear, wand of paralysis, wand of wonder | Rare magic wand | 300 gp |
| Weapon, +1 of your choice | Weapon +1 | 100 gp |
^items-available-from-montaron