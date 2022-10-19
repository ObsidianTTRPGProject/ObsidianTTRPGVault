---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/huge
- monster/type/dragon/gem
aliases: ["Adult Sapphire Dragon"]
statblock: true
"name": "Adult Sapphire Dragon"
"size": "Huge"
"type": "dragon"
"subtype": "gem"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"hp": !!int "225"
"hit_dice": "18d12 + 108"
"stats":
- !!int "23"
- !!int "14"
- !!int "22"
- !!int "18"
- !!int "17"
- !!int "18"
"speed": "walk 40 ft., burrow 30 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "7"
  "Wisdom": !!int "8"
  "Constitution": !!int "11"
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "13"
  "History": !!int "9"
  "Persuasion": !!int "14"
"damage_resistances": "lightning, thunder"
"condition_immunities": "frightened"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 17):\n\n1/day\
    \ each: [dissonant whispers](/compendium/spells/dissonant-whispers.md), [hold\
    \ monster](/compendium/spells/hold-monster.md), [meld into stone](/compendium/spells/meld-into-stone.md),\
    \ [telekinesis](/compendium/spells/telekinesis.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can burrow through solid rock at half its burrowing speed and\
    \ can leave a 10-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage plus 5 (1d10) thunder damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 10 (1d8\
    \ + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a pulse of high-pitched, nearly inaudible sound in a\
    \ 60-foot cone. Each creature in that area must make a DC 19 Constitution saving\
    \ throw. On a failed save, the creature takes 44 (8d10) thunder damage and is\
    \ [incapacitated](/rules/conditions.md#incapacitated) until the end of its next\
    \ turn. On a successful save, the creature takes half as much damage and isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Debilitating Breath (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon magically transforms into any creature that is Medium or Small,\
    \ while retaining its game statistics (other than its size). This transformation\
    \ ends if the dragon is reduced to 0 hit points or uses a bonus action to end\
    \ it."
  "name": "Change Shape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon magically teleports to an unoccupied space it can see within\
    \ 60 feet of it."
  "name": "Psychic Step"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Claw attack."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon uses Psychic Step or Spellcasting."
  "name": "Psionics (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon chooses one Small or smaller object that isn't being worn or\
    \ carried that it can see within 60 feet of it, and it magically hurls the object\
    \ at a creature it can see within 60 feet of the object. The target must succeed\
    \ on a DC 17 Dexterity saving throw or take 31 (9d6) bludgeoning damage."
  "name": "Telekinetic Fling (Costs 3 Actions)"
"source":
- "FTD"
name: Adult Sapphire Dragon
image: "[[Adult Sapphire Dragon.png]]"
---

# Adult Sapphire Dragon

```statblock
"name": "Adult Sapphire Dragon"
"size": "Huge"
"type": "dragon"
"subtype": "gem"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"hp": !!int "225"
"hit_dice": "18d12 + 108"
"stats":
- !!int "23"
- !!int "14"
- !!int "22"
- !!int "18"
- !!int "17"
- !!int "18"
"speed": "walk 40 ft., burrow 30 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "7"
  "Wisdom": !!int "8"
  "Constitution": !!int "11"
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "13"
  "History": !!int "9"
  "Persuasion": !!int "14"
"damage_resistances": "lightning, thunder"
"condition_immunities": "frightened"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 17):\n\n1/day\
    \ each: [dissonant whispers](/compendium/spells/dissonant-whispers.md), [hold\
    \ monster](/compendium/spells/hold-monster.md), [meld into stone](/compendium/spells/meld-into-stone.md),\
    \ [telekinesis](/compendium/spells/telekinesis.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can burrow through solid rock at half its burrowing speed and\
    \ can leave a 10-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage plus 5 (1d10) thunder damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 10 (1d8\
    \ + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a pulse of high-pitched, nearly inaudible sound in a\
    \ 60-foot cone. Each creature in that area must make a DC 19 Constitution saving\
    \ throw. On a failed save, the creature takes 44 (8d10) thunder damage and is\
    \ [incapacitated](/rules/conditions.md#incapacitated) until the end of its next\
    \ turn. On a successful save, the creature takes half as much damage and isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Debilitating Breath (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon magically transforms into any creature that is Medium or Small,\
    \ while retaining its game statistics (other than its size). This transformation\
    \ ends if the dragon is reduced to 0 hit points or uses a bonus action to end\
    \ it."
  "name": "Change Shape"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon magically teleports to an unoccupied space it can see within\
    \ 60 feet of it."
  "name": "Psychic Step"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Claw attack."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon uses Psychic Step or Spellcasting."
  "name": "Psionics (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon chooses one Small or smaller object that isn't being worn or\
    \ carried that it can see within 60 feet of it, and it magically hurls the object\
    \ at a creature it can see within 60 feet of the object. The target must succeed\
    \ on a DC 17 Dexterity saving throw or take 31 (9d6) bludgeoning damage."
  "name": "Telekinetic Fling (Costs 3 Actions)"
"source":
- "FTD"
"image": "[[Adult Sapphire Dragon.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 215*

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

**Adult Sapphire Dragon Connections.** | dice: d8 | Connected Creatures |
|----------|---------------------|
| 1 | An adult sapphire dragon lives adjacent to active purple worm tunnels, hoping the threat of the worm will deter treasure hunters. |
| 2 | An adult sapphire dragon employs a dao to help shape and defend the dragon's lair, and the dao maintains a portal to the Elemental Plane of Earth there. |
| 3 | An adult sapphire dragon regularly confers with a plane-hopping archmage regarding the dragon's ongoing dreams of other worlds and other lives. |
| 4 | A drow priestess of Lolth and several yochlol demons have been ordered by their goddess to deal with the adult sapphire dragon who has been hunting her holy spiders. |
| 5 | A forgetful and nearsighted adult sapphire dragon believes a blue dragon wyrmling is actually the sapphire wyrmling who left home months before. |
| 6 | An adult sapphire dragon and a squadron of githyanki have joined forces to locate and destroy a mind flayer colony. |
| 7 | A group of stone giants believes a young sapphire dragon to be an emissary of their god, Skoraeus Stonebones. The dragon considers the notion ridiculous but loves having an audience who will listen to lectures on military history without complaint. |
| 8 | An adult sapphire dragon and an aboleth psychically face off for control of an area of the Underdark. The constant bombardment of psychic forces has begun to affect the local fauna in strange ways. |
^connected-creatures

**Sapphire Dragon Lairs.** Sapphire dragons make their lairs in enormous caverns and complex tunnel systems. As they grow older, they continually renovate their lairs, using their tunneling abilities and command over stone.

Sapphire dragons eventually create dizzying honeycombs of hidden passages, deceptively thin walls, and secret chambers that allow them to traverse the entire lair without ever being seen by intruders. The best-defended sapphire dragon lairs have no easily accessible entrances or exits at all, and trespassers who do find their way inside must then contend with a maze of corridors, dead ends, and steep inclines.

**Sapphire Dragon Lair Features.** The sapphire dragon lair shown in map 5.12 is a series of natural tunnels and chambers the dragon has adapted to serve as a lair. The lair has few natural entrances, so whole sections are inaccessible without excavation or magic, as the dragon can simply open doorways in walls whenever necessary.

The lair has the following features:

- **Disguised Entrances.** An otherwise unremarkable cave (shown at the top of the map) provides the main access to the lair by way of two sections of relatively thin crystal walls. The dragon can use a lair action to open or close passages through these walls throughout the lair.
- **Cobweb-Choked Tunnels.** Adventurers who manage to access the other side of the cave's crystal walls discover a network of dark, cobweb-choked tunnels extending deep into the earth, set with natural steps and shelves throughout. The dragon spends little time in this part of the lair, visiting only when the spiders there need tending—or when the dragon needs a snack.
- **Underground River.** A river flows along the right and bottom edges of the map, providing the dragon with fresh water and an alternative entrance. Originating on the surface, the river descends through narrow tunnels that eventually lead to the Underdark.
- **Hoard Caverns.** The bulk of the lair, filling most of the lower half of the map, comprises chambers the dragon uses to host guests and visitors. These caverns hold the bulk of the dragon's hoard, particularly art objects that are impressive but not irreplaceable.
- **Sleeping Chamber.** At the heart of the lair, protected behind more thin crystal walls, the largest cavern serves as the dragon's sleeping chamber. A raised section studded with sapphire crystals offers a vantage from which the dragon can keep an eye on the chamber's access points. The dragon's most valuable treasures are stored here and in adjoining caves, and the walls of this central chamber are covered in art depicting various battles—many of which the dragon took part in.

**A Sapphire Dragon's Lair.** Sapphire dragons make their homes in extensive cave systems. As they grow older, they make increasingly complex renovations to their lairs, using their inherent magic and natural tunneling abilities to great effect. Eventually, a sapphire dragon's lair is a dizzying honeycomb of hidden passages, deceptively thin walls, and secret chambers that allow the dragon to travel from one end to the other unseen by intruders. The most secure lairs might feature no accessible entrances or exits at all, with the dragon relying on tunneling or shaping stone to come and go.

The challenge rating of a legendary sapphire dragon increases by 1 when it's encountered in its lair.