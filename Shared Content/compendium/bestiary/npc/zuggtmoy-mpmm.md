---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/large
- monster/type/fiend/demon
aliases: ["Zuggtmoy"]
statblock: true
"name": "Zuggtmoy"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "304"
"hit_dice": "32d10 + 128"
"stats":
- !!int "22"
- !!int "15"
- !!int "18"
- !!int "20"
- !!int "19"
- !!int "24"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "11"
  "Constitution": !!int "11"
"skillsaves":
  "Perception": !!int "11"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "all, telepathy 120 ft."
"cr": "23"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zuggtmoy casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 22):\n\nAt will:\
    \ [detect magic](/compendium/spells/detect-magic.md), [locate animals or plants](/compendium/spells/locate-animals-or-plants.md)\n\
    \n1/day each: [etherealness](/compendium/spells/etherealness.md), [teleport](/compendium/spells/teleport.md)\n\
    \n3/day each: [dispel magic](/compendium/spells/dispel-magic.md), [entangle](/compendium/spells/entangle.md),\
    \ [plant growth](/compendium/spells/plant-growth.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Zuggtmoy fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zuggtmoy has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zuggtmoy makes three Pseudopod attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: ++13 to hit, reach 10 ft., one target. Hit: 15 (2d8\
    \ + 6) force damage plus 9 (2d8) poison damage."
  "name": "Pseudopod"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius\
    \ sphere centered on her, and it lingers for 1 minute. Any creature in the cloud\
    \ when it appears, or that enters it later, must make a DC 19 Constitution saving\
    \ throw. On a successful save, the creature can't be infected by these spores\
    \ for 24 hours. On a failed save, the creature is infected with a disease called\
    \ the spores of Zuggtmoy, which lasts until the creature is cured of the disease\
    \ or dies. While infected in this way, the creature can't be reinfected, and it\
    \ must repeat the saving throw at the end of every 24 hours, ending the infection\
    \ on a success. On a failure, the infected creature's body is slowly taken over\
    \ by fungal growth, and after three such failed saves, the creature dies and is\
    \ reanimated as a [spore servant](/compendium/bestiary/plant/quaggoth-spore-servant.md)\
    \ if it's a type of creature that can be."
  "name": "Infestation Spores (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius\
    \ sphere centered on her, and it lingers for 1 minute. Humanoids and Beasts in\
    \ the cloud when it appears, or that enter it later, must make a DC 19 Wisdom\
    \ saving throw. On a successful save, a creature can't be infected by these spores\
    \ for 24 hours. On a failed save, the creature is infected with a disease called\
    \ the influence of Zuggtmoy for 24 hours. While infected in this way, the creature\
    \ is [charmed](/rules/conditions.md#charmed) by her and can't be reinfected by\
    \ these spores."
  "name": "Mind Control Spores (Recharge 5-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Zuggtmoy is hit by an attack roll, one creature within 10 feet of\
    \ her that is [charmed](/rules/conditions.md#charmed) by her is hit by the attack\
    \ instead."
  "name": "Protective Thrall"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zuggtmoy makes one Pseudopod attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature [charmed](/rules/conditions.md#charmed) by Zuggtmoy that she\
    \ can see must use its reaction, if a available, to move up to its speed as she\
    \ directs or to make one weapon attack against a target that she designates."
  "name": "Exert Will"
"source":
- "MPMM"
- "MTF"
name: Zuggtmoy
image: "[[Zuggtmoy.png]]"
---

# Zuggtmoy

```statblock
"name": "Zuggtmoy"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "304"
"hit_dice": "32d10 + 128"
"stats":
- !!int "22"
- !!int "15"
- !!int "18"
- !!int "20"
- !!int "19"
- !!int "24"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "11"
  "Constitution": !!int "11"
"skillsaves":
  "Perception": !!int "11"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "all, telepathy 120 ft."
"cr": "23"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zuggtmoy casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 22):\n\nAt will:\
    \ [detect magic](/compendium/spells/detect-magic.md), [locate animals or plants](/compendium/spells/locate-animals-or-plants.md)\n\
    \n1/day each: [etherealness](/compendium/spells/etherealness.md), [teleport](/compendium/spells/teleport.md)\n\
    \n3/day each: [dispel magic](/compendium/spells/dispel-magic.md), [entangle](/compendium/spells/entangle.md),\
    \ [plant growth](/compendium/spells/plant-growth.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Zuggtmoy fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zuggtmoy has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zuggtmoy makes three Pseudopod attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: ++13 to hit, reach 10 ft., one target. Hit: 15 (2d8\
    \ + 6) force damage plus 9 (2d8) poison damage."
  "name": "Pseudopod"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius\
    \ sphere centered on her, and it lingers for 1 minute. Any creature in the cloud\
    \ when it appears, or that enters it later, must make a DC 19 Constitution saving\
    \ throw. On a successful save, the creature can't be infected by these spores\
    \ for 24 hours. On a failed save, the creature is infected with a disease called\
    \ the spores of Zuggtmoy, which lasts until the creature is cured of the disease\
    \ or dies. While infected in this way, the creature can't be reinfected, and it\
    \ must repeat the saving throw at the end of every 24 hours, ending the infection\
    \ on a success. On a failure, the infected creature's body is slowly taken over\
    \ by fungal growth, and after three such failed saves, the creature dies and is\
    \ reanimated as a [spore servant](/compendium/bestiary/plant/quaggoth-spore-servant.md)\
    \ if it's a type of creature that can be."
  "name": "Infestation Spores (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius\
    \ sphere centered on her, and it lingers for 1 minute. Humanoids and Beasts in\
    \ the cloud when it appears, or that enter it later, must make a DC 19 Wisdom\
    \ saving throw. On a successful save, a creature can't be infected by these spores\
    \ for 24 hours. On a failed save, the creature is infected with a disease called\
    \ the influence of Zuggtmoy for 24 hours. While infected in this way, the creature\
    \ is [charmed](/rules/conditions.md#charmed) by her and can't be reinfected by\
    \ these spores."
  "name": "Mind Control Spores (Recharge 5-6)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Zuggtmoy is hit by an attack roll, one creature within 10 feet of\
    \ her that is [charmed](/rules/conditions.md#charmed) by her is hit by the attack\
    \ instead."
  "name": "Protective Thrall"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Zuggtmoy makes one Pseudopod attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One creature [charmed](/rules/conditions.md#charmed) by Zuggtmoy that she\
    \ can see must use its reaction, if a available, to move up to its speed as she\
    \ directs or to make one weapon attack against a target that she designates."
  "name": "Exert Will"
"source":
- "MPMM"
- "MTF"
"image": "[[Zuggtmoy.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 281, Mordenkainen's Tome of Foes p. 157*

## Description

The Demon Queen of Fungi, Lady of Rot and Decay, Zuggtmoy is an alien creature whose only desire is to infect the living with spores, transforming them into her mindless servants and, eventually, into decomposing hosts for the mushrooms, molds, and other fungi that she spawns.

Utterly inhuman, Zuggtmoy can mold her fungoid form into an approximation of a humanoid shape, including the skeletal-thin figure depicted in grimoires and ancient art, draped and veiled in mycelia and lichen. Indeed, much of her appearance and manner, and that of her servants, is a soulless mockery of mortal life and its many facets.

Zuggtmoy's cultists often follow her unwittingly. Most are fungi—infected to some degree, whether through inhaling her mind-controlling spores or being transformed to the point where flesh and fungus become one. Such cultists are fungal extensions of the Demon Queen's will.

Their devotion might begin with the seemingly harmless promises offered by exotic spores and mushrooms, but quickly consumes them, body and soul.

**Cultists of Zuggtmoy.** > [!note]
> See the Cult of Zuggtmoy

**Zuggtmoy's Lair.** Zuggtmoy's principal lair is her palace on Shedaklah. It consists of two dozen mushrooms of pale yellow and rancid brown. These massive fungi are some of the largest in existence. They are surrounded by a field of acidic puffballs and poisonous vapors. The mushrooms themselves are all interconnected by bridges of shelf-fungi, and countless chambers have been hollowed out from within their rubbery, fibrous stalks.