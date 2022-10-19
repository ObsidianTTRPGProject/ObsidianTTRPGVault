---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/medium
- monster/type/dragon/gem
aliases: ["Sapphire Dragon Wyrmling"]
statblock: true
"name": "Sapphire Dragon Wyrmling"
"size": "Medium"
"type": "dragon"
"subtype": "gem"
"alignment": "Lawful Neutral"
"ac": !!int "16"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "17"
- !!int "14"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "14"
"speed": "walk 30 ft., burrow 15 ft., climb 30 ft., fly 60 ft."
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "4"
  "Wisdom": !!int "3"
  "Constitution": !!int "5"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
  "History": !!int "4"
  "Persuasion": !!int "6"
"damage_resistances": "lightning, thunder"
"condition_immunities": "frightened"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 15"
"languages": "Draconic, telepathy 120 ft."
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability:\n\n1/day each: [alarm](/compendium/spells/alarm.md),\
    \ [Tenser's floating disk](/compendium/spells/tensers-floating-disk.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can burrow through solid rock at half its burrowing speed and\
    \ can leave a 5-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10\
    \ + 3) piercing damage plus 3 (1d6) thunder damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a pulse of high-pitched, nearly inaudible sound in a\
    \ 15-foot cone. Each creature in that area must make a DC 13 Constitution saving\
    \ throw. On a failed save, the creature takes 22 (4d10) thunder damage and is\
    \ [incapacitated](/rules/conditions.md#incapacitated) until the end of its next\
    \ turn. On a successful save, the creature takes half as much damage and isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Debilitating Breath (Recharge 5-6)"
"source":
- "FTD"
name: Sapphire Dragon Wyrmling
image: "[[Sapphire Dragon Wyrmling.png]]"
---

# Sapphire Dragon Wyrmling

```statblock
"name": "Sapphire Dragon Wyrmling"
"size": "Medium"
"type": "dragon"
"subtype": "gem"
"alignment": "Lawful Neutral"
"ac": !!int "16"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "17"
- !!int "14"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "14"
"speed": "walk 30 ft., burrow 15 ft., climb 30 ft., fly 60 ft."
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "4"
  "Wisdom": !!int "3"
  "Constitution": !!int "5"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
  "History": !!int "4"
  "Persuasion": !!int "6"
"damage_resistances": "lightning, thunder"
"condition_immunities": "frightened"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 15"
"languages": "Draconic, telepathy 120 ft."
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability:\n\n1/day each: [alarm](/compendium/spells/alarm.md),\
    \ [Tenser's floating disk](/compendium/spells/tensers-floating-disk.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can burrow through solid rock at half its burrowing speed and\
    \ can leave a 5-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10\
    \ + 3) piercing damage plus 3 (1d6) thunder damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a pulse of high-pitched, nearly inaudible sound in a\
    \ 15-foot cone. Each creature in that area must make a DC 13 Constitution saving\
    \ throw. On a failed save, the creature takes 22 (4d10) thunder damage and is\
    \ [incapacitated](/rules/conditions.md#incapacitated) until the end of its next\
    \ turn. On a successful save, the creature takes half as much damage and isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Debilitating Breath (Recharge 5-6)"
"source":
- "FTD"
"image": "[[Sapphire Dragon Wyrmling.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 216*

## Description

The thunderous clash of conflict is part of the very nature of sapphire dragons. Militant and territorial, they defend their lairs fiercely, ambushing intruders and plotting assaults against their rivals. The sonic pulse of their breath weapon sows weakness, leaving the victims unable to fight back.

**Luminous Blue.** Sapphire dragons' scales and wing membranes show varied shades of blue, ranging from the light tones of a spring sky to the rich, crystalline azure of sapphire gems and compressed glacial ice. In the light, the scales glitter and shine like luminous starbursts. The dragons' psionic nature is evident in the horn and bone structures of their bodies. Their tail barbs and horn tips are all separate pieces, but they float in place, held aloft by psychic energy while the dragons live. These levitating horns and spines shift slightly with the dragons' moods, bobbing in amusement or flaring with anger.

**Art of War.** The warlike sapphire dragons devise strategies and ambushes based on their ability to maneuver underground. A sapphire dragon often refrains from striking immediately, preferring to assess intruders first in order to devise the most advantageous approach to dealing with them.

Sapphire dragons watch for signs of Aberrations and other creatures corrupted by the Far Realm. They frequently ally with emerald dragons, drawing on their kin's knowledge of occult phenomena to track the influence of the Far Realm. Armed with that knowledge, sapphire dragons stamp out alien influence before it spreads.

People who dwell or delve deep beneath the earth can easily find themselves at odds with a sapphire dragon if they cross into the dragon's territory. But sapphire dragons sometimes forge peaceful relationships with rock gnomes or deep gnomes, relying on these folk to help protect the territory surrounding their lairs.

**Martial Hoards.** Sapphire dragons' favorite prizes are weapons and armor, records of military history and tactics, and magic items that protect against psychic damage or mental intrusion. The centerpiece of a sapphire dragon's hoard is usually a cataloged, orderly collection of war gear, which can contain ancient relics of immense power.

**Creating a Sapphire Dragon.** Use the Sapphire Dragon Personality Traits and Sapphire Dragon Ideals tables to inspire your portrayal of distinctive sapphire dragon characters.

**Sapphire Dragon Personality Traits.** | dice: d8 | Trait |
|----------|-------|
| 1 | I often fixate on specific historical battles or wars and won't rest until my hoard contains that conflict's most significant artifacts. |
| 2 | I am constantly aware of a call from beyond this world. I must prepare to answer that call by amassing powerful arms and armor. |
| 3 | I secretly look forward to adventurers trying to infiltrate my lair. How else could I try out new defenses? |
| 4 | Give me a storied helmet or scimitar over a pile of gold any day. |
| 5 | No creature can outsmart my defenses—if they do, they obviously cheated. |
| 6 | Any creature that can hold their own against me must teach me how—whether they want to or not. |
| 7 | I cannot resist a game of dragonchess—which, I will have you know, my ancestors probably invented. |
| 8 | The sight of blood makes me queasy. |
^trait

**Sapphire Dragon Ideals.** | dice: d6 | Ideal |
|----------|-------|
| 1 | Solitude. A stranger is just an intruder I haven't dealt with yet. (Neutral) |
| 2 | Preservation. Most creatures cannot be trusted to properly safeguard historically significant artifacts. I can. (Lawful) |
| 3 | Knowledge. The stories surrounding every piece in my collection are as important as the treasures themselves. (Any) |
| 4 | Order. An organized hoard makes me happy—and you don't want to see me unhappy. (Lawful) |
| 5 | Preparation. Justice and righteousness do not guarantee victory. Planning and tactics do. (Lawful) |
| 6 | Companionship. Sure, my hoard brings me great joy. But the real treasures are the guests who stop by to see it. (Good) |
^ideal

**Sapphire Dragon Adventures.** The Sapphire Dragon Adventure Hooks table offers suggestions for stories and adventures involving sapphire dragons.

**Sapphire Dragon Adventure Hooks.** | dice: d8 | Adventure Hook |
|----------|----------------|
| 1 | Posing as an avatar of an evil earth elemental-god, a sapphire dragon serves as general to a fanatical cult—and claims the spoils of the cult's victories. |
| 2 | A sapphire dragon is bound by an ancient pact to advise a monarchy on matters of defense—until someone bests the dragon's security measures. |
| 3 | A sapphire dragon seeks adventurers to lead into battle against the mind flayers that usurped the dragon's lair. |
| 4 | Powerful infernal creatures have opened a portal in the middle of a city square. The key to closing the portal is a mythical holy weapon that happens to be the pride and joy of a sapphire dragon's hoard. |
| 5 | A sapphire dragon threatens to sink a town into the Underdark unless the authorities find and turn over a thief who stole from the dragon. |
| 6 | A village is beset by swarms of giant spiders drawn to the area when a sapphire dragon took up residence nearby. Ridding the village of the spiders means tampering with the dragon's food supply. |
| 7 | A sapphire dragon invites warriors to vie for the honor of studying military tactics under the dragon. The front-runner is an infamous bandit leader who will undoubtedly terrorize the area if they win. |
| 8 | A sapphire dragon's lair is so well protected that its inner defenses have never been tested. The dragon spreads rumors of the treasures within to attract adventurers who can put the traps to the test. |
^adventure-hook

**Connected Creatures.** Sapphire dragons are generally solitary creatures. On the rare occasion that one forms nonhostile relationships with other beings, it is almost always to bolster the defenses of the dragon's lair and hoard.

**Sapphire Dragon Wyrmling Connections.** | dice: d6 | Connected Creatures |
|----------|---------------------|
| 1 | After being robbed by gnomes who had pledged to protect the hoard, a sapphire dragon wyrmling installs new guardians that have no interest in material riches: gelatinous cubes and ochre jellies. |
| 2 | A band of minotaurs in service to Baphomet has captured a sapphire dragon wyrmling to learn from the wyrmling's strategies. |
| 3 | Two sapphire dragon wyrmlings vie for the same territory. Their primary battle tactic involves luring grells into each other's lairs. |
| 4 | A group of Lolth-worshiping drow warriors were sent to kill a sapphire dragon wyrmling who has been making meals of their goddess's holy spiders. |
| 5 | A sapphire dragon wyrmling is on the verge of starvation after incorrectly identifying a nearby phase spider nest as an easy food source. |
| 6 | A sapphire dragon wyrmling's hoard contains a cursed item, which has attracted specters and wraiths to the area around the dragon's lair. |
^connected-creatures