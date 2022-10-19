---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/large
- monster/type/dragon
aliases: ["Young Deep Dragon"]
statblock: true
"name": "Young Deep Dragon"
"size": "Large"
"type": "dragon"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"stats":
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "walk 40 ft., burrow 20 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "4"
  "Wisdom": !!int "5"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "5"
  "Persuasion": !!int "6"
"damage_resistances": "poison, psychic"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "blindsight 30 ft., darkvision 150 ft., passive Perception 15"
"languages": "Common, Draconic, Undercommon"
"cr": "5"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 9 (1d10\
    \ + 4) piercing damage plus 3 (1d6) poison damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a cloud of spores in a 30-foot cone. Each creature in\
    \ that area must make a DC 14 Wisdom saving throw. On a failed save, the creature\
    \ takes 22 (4d10) psychic damage, and it is [frightened](/rules/conditions.md#frightened)\
    \ of the dragon for 1 minute. On a successful save, the creature takes half as\
    \ much damage with no additional effects. A [frightened](/rules/conditions.md#frightened)\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Nightmare Breath (Recharge 5-6)"
"source":
- "FTD"
name: Young Deep Dragon
image: "[[Young Deep Dragon.png]]"
---

# Young Deep Dragon

```statblock
"name": "Young Deep Dragon"
"size": "Large"
"type": "dragon"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"stats":
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "walk 40 ft., burrow 20 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "4"
  "Wisdom": !!int "5"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "5"
  "Persuasion": !!int "6"
"damage_resistances": "poison, psychic"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "blindsight 30 ft., darkvision 150 ft., passive Perception 15"
"languages": "Common, Draconic, Undercommon"
"cr": "5"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 9 (1d10\
    \ + 4) piercing damage plus 3 (1d6) poison damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a cloud of spores in a 30-foot cone. Each creature in\
    \ that area must make a DC 14 Wisdom saving throw. On a failed save, the creature\
    \ takes 22 (4d10) psychic damage, and it is [frightened](/rules/conditions.md#frightened)\
    \ of the dragon for 1 minute. On a successful save, the creature takes half as\
    \ much damage with no additional effects. A [frightened](/rules/conditions.md#frightened)\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Nightmare Breath (Recharge 5-6)"
"source":
- "FTD"
"image": "[[Young Deep Dragon.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 175*

## Description

Making their lairs in the depths of the Underdark, deep dragons are nightmarish cousins of chromatic dragons. The warped magical energy of their subterranean realm gives them the ability to exhale magical spores that instill fear and scar the mind.

Deep dragons' black-and-gray hide is smooth like a salamander's, and their eyes are pale. As they age, their spore breath causes fungi to bloom across their skin, especially around the head and neck. Their wings are attached to their front legs and can fold in close to the body, allowing deep dragons to easily maneuver through relatively narrow tunnels.

Deep dragons often hoard secrets, delighting in knowledge of far-off lands. Many seek out new insights and tricks that they can use against other denizens of the Underdark, preferring social manipulation and crafty dealmaking to exerting themselves in combat. Deep dragons look down on any creature that isn't useful to them, though they are willing to bargain for knowledge they lack.

**Creating a Deep Dragon.** Use the Deep Dragon Personality Traits and Deep Dragon Ideals tables to inspire your portrayal of distinctive deep dragon characters, and use the Deep Dragon Spellcasting table to help select spells for a spellcasting dragon.

**Deep Dragon Personality Traits.** | dice: d8 | Trait |
|----------|-------|
| 1 | I will not risk injury at the hands of weaker creatures—especially while I can turn them against one another and have them fight in my stead. |
| 2 | It is difficult for anyone not of dragonkind to penetrate the twisting labyrinth of my thoughts. |
| 3 | I might disagree with other dragons, but we are superior beings and should not lower ourselves to direct conflict. |
| 4 | I have no interest in going to the surface world. It's where one sends one's servants. |
| 5 | While the petty squabbles of other creatures bore and irritate me, I might hear out those who demonstrate an appreciation for the finer things in life by bringing me delicacies like clams or aboleth flesh. |
| 6 | I might be willing to exert myself to take out a mind flayer. Those disgusting creatures must be stopped. |
| 7 | I dream of seeing the deepest places in the ocean. |
| 8 | I find I rather enjoy the company of people—as long as they remain unaware of my true nature. |
^trait

**Deep Dragon Ideals.** | dice: d6 | Ideal |
|----------|-------|
| 1 | Understanding. True power comes from the ability to discern other creatures' motivations better than they can discern yours. (Any) |
| 2 | Kindred. All dragons are kin to one another, and we would all do well to prioritize that kinship. (Any) |
| 3 | Mystery. I appreciate a question I cannot answer, so I strive to be an enigma for other creatures. (Any) |
| 4 | Adaptability. Whether taking on a new form, making new allies, or trying a new strategy, flexibility keeps one youthful. (Chaotic) |
| 5 | Superiority. Weaker creatures cannot be trusted, so I constantly remind my servants of my power. (Evil) |
| 6 | Patience. All creatures might teach me something, and I'm willing to wait and find out what that might be rather than acting in haste. (Good) |
^ideal

**Deep Dragon Spellcasting.** | Age | Spell Save Dc | Spells Known |
|-----|---------------|--------------|
| Young | 14 | command, dissonant whispers, faerie fire |
^age-spell-save-dc-spells-known

**Deep Dragon Adventures.** The Deep Dragon Adventure Hooks table offers suggestions for stories and adventures involving deep dragons.

**Deep Dragon Adventure Hooks.** | dice: d8 | Adventure Hook |
|----------|----------------|
| 1 | Unfamiliar drow adventurers have been prowling a city's streets at night and have been overheard talking about the dragon they serve. |
| 2 | Svirfneblin hire the characters to deliver tribute to their deep dragon neighbor. |
| 3 | A disguised deep dragon offers access to rare artifacts—to a party who is willing to partner up on a seafood shipping business. |
| 4 | A talented young ranger is kidnapped by a deep dragon who wants a hunting partner. |
| 5 | A friendly young copper dragon seeks an entourage, hoping to impress the deep dragon holding the copper dragon's inheritance in trust. |
| 6 | A deep dragon wants to know if rumors of a sea monster in an Underdark lake are true, so the dragon hires adventurers to investigate. |
| 7 | Two Underdark settlements are about to go to war, having been carefully manipulated by a deep dragon. A desperate ruler offers a reward to anyone who can uncover the true cause of the hostility. |
| 8 | A deep dragon wants someone to manufacture a scenario that will get the dragon out of an old commitment to protect a city. |
^adventure-hook

**Connected Creatures.** Deep dragons appreciate the company of other dragons. Although they view most other species as inferior to dragonkind, having worth only as servants or tools, the rare individuals who impress them can sometimes earn respect as partners—albeit junior ones.

**Young Deep Dragon Connections.** | dice: d6 | Connected Creatures |
|----------|---------------------|
| 1 | A young deep dragon has captured a number of kuo-toa and has decided to try them out as servants instead of eating them. |
| 2 | A young deep dragon maintains the guise of a handsome Humanoid artist so as to maintain an adoring cult of drow and duergar admirers. |
| 3 | A rather snooty bone naga serves as a young deep dragon's loyal butler, as it did for the dragon's parent. |
| 4 | A young deep dragon has organized a society of hobgoblin explorers, whose members seek out new places in the Underdark for the dragon to visit. |
| 5 | A doppelganger mimics a young deep dragon's Humanoid form while committing a string of murders, hoping to turn local Underdark settlements against the dragon. |
| 6 | Despite repeated mind flayer attacks, a young deep dragon refuses to leave the cave where the dragon's best friend—an adventurer who won the dragon's respect and affection—lingers as a ghost. |
^connected-creatures