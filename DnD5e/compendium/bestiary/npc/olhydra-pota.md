---
cssclass: json5e-monster
tags:
- compendium/src/pota
- monster/size/huge
- monster/type/elemental
aliases: ["Olhydra"]
statblock: true
"name": "Olhydra"
"size": "Huge"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "324"
"hit_dice": "24d12 + 168"
"stats":
- !!int "21"
- !!int "22"
- !!int "24"
- !!int "17"
- !!int "18"
- !!int "23"
"speed": "walk 50 ft., swim 100 ft."
"saves":
  "Wisdom": !!int "10"
  "Strength": !!int "11"
  "Constitution": !!int "13"
"damage_resistances": "lightning; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "acid, cold, poison"
"condition_immunities": "charmed, frightened, paralyzed, petrified, poisoned, prone,\
  \ restrained"
"senses": "blindsight 120 ft., passive Perception 14"
"languages": "Aquan"
"cr": "18"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Olhydra's innate spellcasting ability is Charisma (spell save DC 20, +12\
    \ to hit with spell attacks). She can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [wall of ice](/compendium/spells/wall-of-ice.md)\n\
    \n1/day: [storm of vengeance](/compendium/spells/storm-of-vengeance.md)\n\n\
    3/day: [ice storm](/compendium/spells/ice-storm.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Olhydra's slam attacks are treated as magical for the purpose of bypassing\
    \ resistance and immunity to nonmagical attacks."
  "name": "Empowered Attacks"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Olhydra fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Olhydra has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Olhydra can enter a hostile creature's space and stop there. She can move\
    \ through a space as narrow as 1 inch wide without squeezing."
  "name": "Water Form"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Olhydra makes two slam attacks or two water jet attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 21 (3d10\
    \ + 5) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 19). Olhydra can grapple up to four targets. When Olhydra moves,\
    \ all creatures she is grappling move with her."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +12 to hit, range 120 ft., one target. Hit: 21\
    \ (6d6) bludgeoning damage, and the target is knocked [prone](/rules/conditions.md#prone)\
    \ if it fails a DC 19 Strength saving throw."
  "name": "Water Jet"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Olhydra summons up to three [water elementals](/compendium/bestiary/elemental/water-elemental.md)\
    \ and loses 30 hit points for each elemental she summons. Summoned elementals\
    \ have maximum hit points, appear within 100 feet of Olhydra, and disappear if\
    \ Olhydra is reduced to 0 hit points."
  "name": "Summon Elementals (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature that Olhydra is grappling is crushed for 21 (3d10 + 5) bludgeoning\
    \ damage."
  "name": "Crush"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Olhydra releases one creature she is grappling by flinging the creature\
    \ up to 60 feet away from her, in a direction of her choice. If the flung creature\
    \ comes into contact with a solid surface, such as a wall or floor, the creature\
    \ takes 1d6 bludgeoning damage for every 10 feet it was flung."
  "name": "Fling (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Olhydra transforms her watery body into acid. This effect lasts until Olhydra's\
    \ next turn. Any creature that comes into contact with Olhydra or hits her with\
    \ a melee attack while standing within 5 feet of her takes 11 (2d10) acid damage.\
    \ Any creature [grappled](/rules/conditions.md#grappled) by Olhydra takes 22 (4d10)\
    \ acid damage at the start of its turn."
  "name": "Water to Acid (Costs 3 Actions)"
"source":
- "PotA"
name: Olhydra
image: "[[Olhydra.png]]"
---

# Olhydra

```statblock
"name": "Olhydra"
"size": "Huge"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "324"
"hit_dice": "24d12 + 168"
"stats":
- !!int "21"
- !!int "22"
- !!int "24"
- !!int "17"
- !!int "18"
- !!int "23"
"speed": "walk 50 ft., swim 100 ft."
"saves":
  "Wisdom": !!int "10"
  "Strength": !!int "11"
  "Constitution": !!int "13"
"damage_resistances": "lightning; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "acid, cold, poison"
"condition_immunities": "charmed, frightened, paralyzed, petrified, poisoned, prone,\
  \ restrained"
"senses": "blindsight 120 ft., passive Perception 14"
"languages": "Aquan"
"cr": "18"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Olhydra's innate spellcasting ability is Charisma (spell save DC 20, +12\
    \ to hit with spell attacks). She can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [wall of ice](/compendium/spells/wall-of-ice.md)\n\
    \n1/day: [storm of vengeance](/compendium/spells/storm-of-vengeance.md)\n\n\
    3/day: [ice storm](/compendium/spells/ice-storm.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Olhydra's slam attacks are treated as magical for the purpose of bypassing\
    \ resistance and immunity to nonmagical attacks."
  "name": "Empowered Attacks"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Olhydra fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Olhydra has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Olhydra can enter a hostile creature's space and stop there. She can move\
    \ through a space as narrow as 1 inch wide without squeezing."
  "name": "Water Form"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Olhydra makes two slam attacks or two water jet attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 21 (3d10\
    \ + 5) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 19). Olhydra can grapple up to four targets. When Olhydra moves,\
    \ all creatures she is grappling move with her."
  "name": "Slam"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +12 to hit, range 120 ft., one target. Hit: 21\
    \ (6d6) bludgeoning damage, and the target is knocked [prone](/rules/conditions.md#prone)\
    \ if it fails a DC 19 Strength saving throw."
  "name": "Water Jet"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Olhydra summons up to three [water elementals](/compendium/bestiary/elemental/water-elemental.md)\
    \ and loses 30 hit points for each elemental she summons. Summoned elementals\
    \ have maximum hit points, appear within 100 feet of Olhydra, and disappear if\
    \ Olhydra is reduced to 0 hit points."
  "name": "Summon Elementals (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature that Olhydra is grappling is crushed for 21 (3d10 + 5) bludgeoning\
    \ damage."
  "name": "Crush"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Olhydra releases one creature she is grappling by flinging the creature\
    \ up to 60 feet away from her, in a direction of her choice. If the flung creature\
    \ comes into contact with a solid surface, such as a wall or floor, the creature\
    \ takes 1d6 bludgeoning damage for every 10 feet it was flung."
  "name": "Fling (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Olhydra transforms her watery body into acid. This effect lasts until Olhydra's\
    \ next turn. Any creature that comes into contact with Olhydra or hits her with\
    \ a melee attack while standing within 5 feet of her takes 11 (2d10) acid damage.\
    \ Any creature [grappled](/rules/conditions.md#grappled) by Olhydra takes 22 (4d10)\
    \ acid damage at the start of its turn."
  "name": "Water to Acid (Costs 3 Actions)"
"source":
- "PotA"
"image": "[[Olhydra.png]]"
```
^statblock

*Source: Princes of the Apocalypse p. 218*

## Description

Olhydra is the Princess of Evil Water. Sometimes known as the Crushing Wave, the Dark Tide, or the Well of Endless Anguish, she takes the form of a great wave, 20 feet high and 15 feet wide, with opalescent eyes. She prefers to remain in or near large bodies of water-seas, lakes, rivers, or sometimes great subterranean pools. When she needs to, she can surge onto dry land, moving much like a wave rushing up onto the shore, but only great anger or desperation would drive Olhydra to move more than a few hundred feet from her native element.

Olhydra surges forth tirelessly and relentlessly. She delights in creating dangerous and destructive manifestations of elemental water, especially maelstroms and floods. She is eager to assert her power by smashing any vessel that dares to venture into her realm, and lays waste to villages or towns established within her reach. Olhydra erodes that which she can't batter and drown; she is patient, retreating in the face of adversity only to return stronger than before.

Of all the Princes of Elemental Evil, Olhydra is the one most interested in mortals. She recognizes that pirates and raiders who redden the waters with mortal blood (and occasionally send treasure-laden ships into her clutches) are agents of her hateful outlook, whether they know it or not. Consequently, Olhydra sometimes spares the worst sort of seafarers from her wrath, patiently waiting for the day when they deliver others into her power.

**Olhydra's Lair.** The Princess of Evil Water is native to the Elemental Plane of Water, where she can be found in the black depths of vast seas or enthroned among jagged reefs. Olhydra waits for the chance to enter the Material Plane through elemental water nodes or when called by the proper rituals. Whether she is in her elemental domain or temporarily occupying a water node, Olhydra commands the waters around her and can shape them to her will.