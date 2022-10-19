---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/large
- monster/type/fiend/devil
aliases: ["Hutijin"]
statblock: true
"name": "Hutijin"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "200"
"hit_dice": "16d10 + 112"
"stats":
- !!int "27"
- !!int "15"
- !!int "25"
- !!int "23"
- !!int "19"
- !!int "25"
"speed": "walk 30 ft., fly 60 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "11"
  "Constitution": !!int "14"
"skillsaves":
  "Intimidation": !!int "14"
  "Perception": !!int "11"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "all, telepathy 120 ft."
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hutijin casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 22):\n\nAt will:\
    \ [alter self](/compendium/spells/alter-self.md) (can become Medium when changing\
    \ his appearance), [detect magic](/compendium/spells/detect-magic.md), [hold monster](/compendium/spells/hold-monster.md),\
    \ [invisibility](/compendium/spells/invisibility.md) (self only), [lightning bolt](/compendium/spells/lightning-bolt.md),\
    \ [suggestion](/compendium/spells/suggestion.md), [wall of fire](/compendium/spells/wall-of-fire.md)\n\
    \n3/day: [dispel magic](/compendium/spells/dispel-magic.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature within 30 feet of Hutijin that isn't a devil makes saving\
    \ throws with disadvantage."
  "name": "Infernal Despair"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Hutijin fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hutijin has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hutijin regains 20 hit points at the start of his turn. If he takes radiant\
    \ damage, this trait doesn't function at the start of his next turn. Hutijin dies\
    \ only if he starts his turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hutijin makes one Bite attack, one Claw attack, one Mace attack, and one\
    \ Tail attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 15 (2d6\
    \ + 8) fire damage. The target must succeed on a DC 22 Constitution saving throw\
    \ or become [poisoned](/rules/conditions.md#poisoned). While [poisoned](/rules/conditions.md#poisoned)\
    \ in this way, the target can't regain hit points, and it takes 10 (3d6) poison\
    \ damage at the start of each of its turns. The [poisoned](/rules/conditions.md#poisoned)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 17 (2d8\
    \ + 8) cold damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 15 (2d6\
    \ + 8) force damage."
  "name": "Mace"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 19 (2d10\
    \ + 8) thunder damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hutijin teleports, along with any equipment he is wearing and carrying,\
    \ up to 120 feet to an unoccupied space he can see."
  "name": "Teleport"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to taking damage, Hutijin utters a dreadful word of power.\
    \ Each creature within 30 feet of him that isn't a devil must succeed on a DC\
    \ 22 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ of him for 1 minute. A creature can repeat the saving throw at the end of each\
    \ of its turns, ending the effect on itself on a success. A creature that saves\
    \ against this effect is immune to his Fearful Voice for 24 hours."
  "name": "Fearful Voice (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hutijin makes one Claw, Mace, or Tail attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hutijin uses Teleport."
  "name": "Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hutijin releases lightning in a 30-foot radius, blocked only by total cover.\
    \ All other creatures in that area must each make a DC 22 Dexterity saving throw,\
    \ taking 18 (4d8) lightning damage on a failed save, or half as much damage on\
    \ a successful one."
  "name": "Lightning Storm (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
name: Hutijin
image: "[[Hutijin.png]]"
---

# Hutijin

```statblock
"name": "Hutijin"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "200"
"hit_dice": "16d10 + 112"
"stats":
- !!int "27"
- !!int "15"
- !!int "25"
- !!int "23"
- !!int "19"
- !!int "25"
"speed": "walk 30 ft., fly 60 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "11"
  "Constitution": !!int "14"
"skillsaves":
  "Intimidation": !!int "14"
  "Perception": !!int "11"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "all, telepathy 120 ft."
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hutijin casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 22):\n\nAt will:\
    \ [alter self](/compendium/spells/alter-self.md) (can become Medium when changing\
    \ his appearance), [detect magic](/compendium/spells/detect-magic.md), [hold monster](/compendium/spells/hold-monster.md),\
    \ [invisibility](/compendium/spells/invisibility.md) (self only), [lightning bolt](/compendium/spells/lightning-bolt.md),\
    \ [suggestion](/compendium/spells/suggestion.md), [wall of fire](/compendium/spells/wall-of-fire.md)\n\
    \n3/day: [dispel magic](/compendium/spells/dispel-magic.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature within 30 feet of Hutijin that isn't a devil makes saving\
    \ throws with disadvantage."
  "name": "Infernal Despair"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Hutijin fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hutijin has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hutijin regains 20 hit points at the start of his turn. If he takes radiant\
    \ damage, this trait doesn't function at the start of his next turn. Hutijin dies\
    \ only if he starts his turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hutijin makes one Bite attack, one Claw attack, one Mace attack, and one\
    \ Tail attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 15 (2d6\
    \ + 8) fire damage. The target must succeed on a DC 22 Constitution saving throw\
    \ or become [poisoned](/rules/conditions.md#poisoned). While [poisoned](/rules/conditions.md#poisoned)\
    \ in this way, the target can't regain hit points, and it takes 10 (3d6) poison\
    \ damage at the start of each of its turns. The [poisoned](/rules/conditions.md#poisoned)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 17 (2d8\
    \ + 8) cold damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 15 (2d6\
    \ + 8) force damage."
  "name": "Mace"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 19 (2d10\
    \ + 8) thunder damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hutijin teleports, along with any equipment he is wearing and carrying,\
    \ up to 120 feet to an unoccupied space he can see."
  "name": "Teleport"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to taking damage, Hutijin utters a dreadful word of power.\
    \ Each creature within 30 feet of him that isn't a devil must succeed on a DC\
    \ 22 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ of him for 1 minute. A creature can repeat the saving throw at the end of each\
    \ of its turns, ending the effect on itself on a success. A creature that saves\
    \ against this effect is immune to his Fearful Voice for 24 hours."
  "name": "Fearful Voice (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hutijin makes one Claw, Mace, or Tail attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hutijin uses Teleport."
  "name": "Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hutijin releases lightning in a 30-foot radius, blocked only by total cover.\
    \ All other creatures in that area must each make a DC 22 Dexterity saving throw,\
    \ taking 18 (4d8) lightning damage on a failed save, or half as much damage on\
    \ a successful one."
  "name": "Lightning Storm (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "[[Hutijin.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 157, Mordenkainen's Tome of Foes p. 175*

## Description

Politics in the Nine Hells are anything but predictable. Alliances form all the time, but most wind up unraveling due to treachery. Nevertheless, for all their backbiting and betrayal, devils do occasionally display loyalty, offering unwavering service to their masters. One such example is Hutijin, a duke of Cania and loyal servant of Mephistopheles.

Across the Hells, Hutijin's name fills lesser devils with fear and loathing, for this duke commands two companies of [pit fiends](/compendium/bestiary/fiend/pit-fiend.md). With such soldiers under his command, Hutijin can easily crush any rival who gets in his way while also defending Mephistopheles against armies seeking to contest his dominion. Hutijin has amassed enough power to challenge the lord of Cania, but he has never wavered in his support for his master—suggesting, perhaps, that Mephistopheles has some hold over him.

Outside the Nine Hells, Hutijin is a relatively obscure figure, known only to the most learned infernal scholars. He has no cults of his own, and his servants are few in number. The reason is simple: Hutijin hates mortals. When summoned from the Hells, he repays the instigator with a long and agonizing death.

Mephistopheles forbids Hutijin from making too many forays into the Material Plane, since the duke's absence leaves him vulnerable to his rivals. Other archdevils know how much Hutijin despises mortals and have secretly disseminated the means to call him from the Nine Hells in the hope of distracting the archdevil long enough for them to assail Mephistopheles. Hutijin sends devils into the Material Plane to eradicate mention of his name and destroy those who have learned of him, but the summonings still occur. When called from his post, he negotiates as quickly as he can, usually closing a deal with little cost to the summoner. However, once the deal has been fulfilled, Hutijin repays the interruption with death.