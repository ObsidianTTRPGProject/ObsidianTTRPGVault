---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/medium
- monster/type/undead
aliases: ["Skeleton Lord"]
statblock: true
"name": "Skeleton Lord"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "20"
- !!int "14"
- !!int "18"
- !!int "18"
- !!int "12"
- !!int "12"
"speed": "walk 30 ft."
"damage_vulnerabilities": "bludgeoning from magical attacks"
"damage_resistances": "cold, necrotic"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "all the languages it knew in life"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature hostile to the skeleton lord that starts its turn within 20\
    \ feet of the skeleton lord must make a DC 17 Wisdom saving throw, unless the\
    \ skeleton lord is [incapacitated](/rules/conditions.md#incapacitated). On a failed\
    \ save, the creature is [frightened](/rules/conditions.md#frightened) until the\
    \ start of its next turn. If a creature's saving throw is successful, then the\
    \ creature is immune to the skeleton lord's Fear Aura for the next 24 hours."
  "name": "Fear Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skeleton lord has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skeleton lord's weapon attacks are magical and have a +3 bonus to attack\
    \ and damage rolls (included in the attack)."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skeleton lord makes three greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 16 (2d6\
    \ + 9) slashing damage."
  "name": "Greatsword"
"source":
- "MaBJoV"
name: Skeleton Lord
image: "[[Skeleton Lord.png]]"
---

# Skeleton Lord

```statblock
"name": "Skeleton Lord"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "20"
- !!int "14"
- !!int "18"
- !!int "18"
- !!int "12"
- !!int "12"
"speed": "walk 30 ft."
"damage_vulnerabilities": "bludgeoning from magical attacks"
"damage_resistances": "cold, necrotic"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "all the languages it knew in life"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Any creature hostile to the skeleton lord that starts its turn within 20\
    \ feet of the skeleton lord must make a DC 17 Wisdom saving throw, unless the\
    \ skeleton lord is [incapacitated](/rules/conditions.md#incapacitated). On a failed\
    \ save, the creature is [frightened](/rules/conditions.md#frightened) until the\
    \ start of its next turn. If a creature's saving throw is successful, then the\
    \ creature is immune to the skeleton lord's Fear Aura for the next 24 hours."
  "name": "Fear Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skeleton lord has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skeleton lord's weapon attacks are magical and have a +3 bonus to attack\
    \ and damage rolls (included in the attack)."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The skeleton lord makes three greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 16 (2d6\
    \ + 9) slashing damage."
  "name": "Greatsword"
"source":
- "MaBJoV"
"image": "[[Skeleton Lord.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 149*

## Description

> [!quote]- A quote from MINSC & BOO!  
> 
> Walking skeletons are a sure sign that some EVIL wizard is getting up to no good. Minsc is quite certain that skeletons should be sleeping in their graves-not ambulating around as if in search of midnight snacks! And now you say they have crowns and platemail and magic swords?! Are there no depths to which evil will not sink? And what does evil find down there, anyway? Boo would like to know!

Held together by necromantic energy, skeleton warriors are distinguished by their high intelligence and considerable battle prowess. All skeleton warriors retain the ability to understand languages they knew in life and most are capable of speech, standing in stark contrast to the mindless and far more common skeletons faced by most adventurers. Only the most skilled necromancers are able to raise a skeleton warrior, which are prized for use as bodyguards and sentinels. Necromancers must use the remains of powerful warriors in order to create a skeleton warrior. Even if a mage succeeds in their task, however, the creatures are difficult to control unless the mage has the golden circlet that contains the undead warrior's soul. Like other skeletons, skeleton warriors are resistant to most forms of damage but vulnerable to bludgeoning; blunt trauma is required to knock dry bones out of place. In addition, skeleton warriors are highly resistant to magical effects.

**Battle Beyond Death.** Skeleton warriors are created from the remains of great fighters and retain their skills in undeath. Many are former adventurers or prominent lords who died in battle. Skeleton warriors wield fearsome two-handed greatswords and wear heavy, often ornate, armor that has tarnished with age.

**Undead Commanders.** Skeleton warriors are typically solitary guardians and do not usually associate with other undead unless under the active control of a necromancer. In such cases, a skeleton warrior may lead a detachment of more dim-witted skeletons, directing them to use tactics normally out of reach.

**Skeleton Lords.** Some skeleton warriors are created using the remains and souls of powerful lords such as kings or other nobility. These skeleton warriors are more powerful than others of their kind and radiate an aura of cold and fear that can chill the heart of even the bravest champion.

**Soul Circlets.** When a skeleton warrior is created, its soul is trapped within a magical gold circlet, which is used to control the creature. This artifact is what binds a skeleton warrior to the Prime Material plane. Skeleton warriors are driven to recover their circlets and most that succeed choose to destroy the items, ending their ghoulish existence.

> [!quote] Controlling Skeleton Warriors
> 
> Someone wearing a skeleton warrior or skeleton lord's golden circlet can use an action to take control of the undead creature if it is within 100 ft. There is no saving throw allowed against this control. This control is complete and allows the wearer of the golden circlet to issue commands through a telepathic link. The skeleton warrior or lord will do its best to obey simple commands such as "attack that creature" or "move over there". If the skeleton warrior or lord does not receive any orders it will defend itself as best as it is able.
^controlling-skeleton-warriors