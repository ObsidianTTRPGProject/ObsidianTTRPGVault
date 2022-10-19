---
cssclass: json5e-monster
tags:
- compendium/src/mabjov
- monster/size/medium
- monster/type/humanoid/half-orc
aliases: ["Nauk"]
statblock: true
"name": "Nauk"
"size": "Medium"
"type": "humanoid"
"subtype": "half-orc"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "127"
"hit_dice": "15d8 + 60"
"stats":
- !!int "20"
- !!int "12"
- !!int "18"
- !!int "10"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Strength": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Intimidation": !!int "10"
  "Persuasion": !!int "6"
"senses": "passive Perception 11"
"languages": "Common, Goblin, Orc, Undercommon"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Nauk is reduced to 0 hit points but not killed outright, he can drop\
    \ to 1 hit point instead. He can't use this feature again for 24 hours"
  "name": "Relentless"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Nauk uses the Imbibe Potion action more than once in an hour, roll\
    \ 1d4 for what happens:\n\n- 1. The potion works normally.\n- 2. The potion works\
    \ normally. In addition, Nauk turns [invisible](/rules/conditions.md#invisible)\
    \ for 1 minute or until Nauk attacks or casts a spell.\n- 3. The potion has no\
    \ effect.\n- 4. Instead of the normal effect, the potion causes fire to explode\
    \ out of Nauk's mouth in a 15 ft. cone. Nauk and any creature in the cone take\
    \ 21 (6d6) fire damage."
  "name": "Potion Mishap"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nauk wears adamantine plate armor. He wields a +1 maul and a heavy crossbow\
    \ +1 which is already factored into his stats. He has 2 [potions of resistance—\
    cold](/compendium/items/potion-of-cold-resistance.md), 2 [potions of resistance—\
    fire](/compendium/items/potion-of-fire-resistance.md), 2 [potions of resistance—\
    lightning](/compendium/items/potion-of-lightning-resistance.md). He has 2 [potions\
    \ of heroism](/compendium/items/potion-of-heroism.md) and 4 [potions of superior\
    \ healing](/compendium/items/potion-of-superior-healing.md)."
  "name": "Special Items"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nauk makes three melee attacks. Nauk may substitute one of those attacks\
    \ for the Imbibe Potion action."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one creature. Hit: 13 (2d6\
    \ + 6) bludgeoning damage."
  "name": "Maul, +1"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, ranged 100/400 ft., one target. Hit:\
    \ 7 (1d10 + 2) piercing damage."
  "name": "Heavy Crossbow, +1"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nauk drinks a potion from the following list:\n\n- Potion of heroism: Nauk\
    \ gains 10 temporary hit points for 1 hour. For the same duration, Nauk is under\
    \ the effect of the [bless](/compendium/spells/bless.md) spell (no concentration\
    \ required).\n- Potion of resistance: Nauk gains resistance from one damage type\
    \ for 1 hour. Nauk chooses from one of these damage types: cold, fire, lightning.\n\
    - Potion of superior healing: Nauk regains 28 hit points."
  "name": "Imbibe Potion"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nauk adds 4 to his AC against one melee attack that would hit him. To do\
    \ so, Nauk must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MaBJoV"
name: Nauk
image: "[[Nauk.png]]"
---

# Nauk

```statblock
"name": "Nauk"
"size": "Medium"
"type": "humanoid"
"subtype": "half-orc"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "127"
"hit_dice": "15d8 + 60"
"stats":
- !!int "20"
- !!int "12"
- !!int "18"
- !!int "10"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Strength": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Intimidation": !!int "10"
  "Persuasion": !!int "6"
"senses": "passive Perception 11"
"languages": "Common, Goblin, Orc, Undercommon"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Nauk is reduced to 0 hit points but not killed outright, he can drop\
    \ to 1 hit point instead. He can't use this feature again for 24 hours"
  "name": "Relentless"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Nauk uses the Imbibe Potion action more than once in an hour, roll\
    \ 1d4 for what happens:\n\n- 1. The potion works normally.\n- 2. The potion works\
    \ normally. In addition, Nauk turns [invisible](/rules/conditions.md#invisible)\
    \ for 1 minute or until Nauk attacks or casts a spell.\n- 3. The potion has no\
    \ effect.\n- 4. Instead of the normal effect, the potion causes fire to explode\
    \ out of Nauk's mouth in a 15 ft. cone. Nauk and any creature in the cone take\
    \ 21 (6d6) fire damage."
  "name": "Potion Mishap"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nauk wears adamantine plate armor. He wields a +1 maul and a heavy crossbow\
    \ +1 which is already factored into his stats. He has 2 [potions of resistance—\
    cold](/compendium/items/potion-of-cold-resistance.md), 2 [potions of resistance—\
    fire](/compendium/items/potion-of-fire-resistance.md), 2 [potions of resistance—\
    lightning](/compendium/items/potion-of-lightning-resistance.md). He has 2 [potions\
    \ of heroism](/compendium/items/potion-of-heroism.md) and 4 [potions of superior\
    \ healing](/compendium/items/potion-of-superior-healing.md)."
  "name": "Special Items"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nauk makes three melee attacks. Nauk may substitute one of those attacks\
    \ for the Imbibe Potion action."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one creature. Hit: 13 (2d6\
    \ + 6) bludgeoning damage."
  "name": "Maul, +1"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, ranged 100/400 ft., one target. Hit:\
    \ 7 (1d10 + 2) piercing damage."
  "name": "Heavy Crossbow, +1"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nauk drinks a potion from the following list:\n\n- Potion of heroism: Nauk\
    \ gains 10 temporary hit points for 1 hour. For the same duration, Nauk is under\
    \ the effect of the [bless](/compendium/spells/bless.md) spell (no concentration\
    \ required).\n- Potion of resistance: Nauk gains resistance from one damage type\
    \ for 1 hour. Nauk chooses from one of these damage types: cold, fire, lightning.\n\
    - Potion of superior healing: Nauk regains 28 hit points."
  "name": "Imbibe Potion"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Nauk adds 4 to his AC against one melee attack that would hit him. To do\
    \ so, Nauk must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MaBJoV"
"image": "[[Nauk.png]]"
```
^statblock

*Source: Minsc and Boo's Journal of Villainy p. 54*

## Description

Nauk is a half-orc warrior and senior member of the Flaming Fist in Baldur's Gate. He is also one of Faerûn's most notorious arms dealers. Nauk feeds the flames of civil strife in other nations, usually by providing assassins, mercenaries or magic. When outright war breaks out, the Flaming Fist is ready to offer their services for a hefty profit.

Nauk is one of the most well-connected members of the Flaming Fist. He has contacts and friends in almost every nation and city state in western Faerûn. Some of these come from his younger years as an adventurer, while others have been made through his arms deals.

Nauk is not above getting his hands dirty and has earned his nickname—the Bag Man. Sometimes his customers renege on a deal or are unable to pay for the services that he has provided. When this happens, Nauk enjoys making an object lesson out of the poor fool. Depending on who needs to be punished, Nauk either shows up with a small band of the Flaming Fist's hardest veterans or with a small army. No matter who he arrives with, Nauk always takes the lead.

Nauk dresses in full battle gear, even when just sitting down for a discussion with a possible client. This is because what he wears and wields are examples of what he can provide to a potential customer. This includes adamantine plate armor, multiple enchanted weapons and a dozen potions and other minor magic items. If he needs to convince a client of the effectiveness of what he has to sell, he will offer to fight the best warrior they can send at him.

**Nauk as a Contact.** Nauk is the primary contact for members of the Flaming Fist at low levels. Magic items can be purchased from Nauk. He specializes in selling potions.

**Potions Available from Nauk**

| Potions | Required Level | Cost |
|---------|----------------|------|
| Potion of healing | 1 | 40 gp |
| Potion of climbing | 1 | 40 gp |
| Potion of healing—greater | 3 | 250 gp |
| Potion of fire breath | 3 | 250 gp |
| Potion of resistance | 3 | 250 gp |
| Potion of hill giant strength | 3 | 250 gp |
| Potion of water breathing | 3 | 200 gp |
| Potion of frost giant strength | 5 | 750 gp |
| Potion of heroism | 5 | 750 gp |
^potions-available-from-nauk