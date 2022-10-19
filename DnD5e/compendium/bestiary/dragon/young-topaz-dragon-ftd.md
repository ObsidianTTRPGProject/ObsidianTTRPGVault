---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/large
- monster/type/dragon/gem
aliases: ["Young Topaz Dragon"]
statblock: true
"name": "Young Topaz Dragon"
"size": "Large"
"type": "dragon"
"subtype": "gem"
"alignment": "Chaotic Neutral"
"ac": !!int "17"
"hp": !!int "127"
"hit_dice": "17d10 + 34"
"stats":
- !!int "17"
- !!int "12"
- !!int "15"
- !!int "16"
- !!int "15"
- !!int "16"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "4"
  "Wisdom": !!int "5"
  "Constitution": !!int "5"
"skillsaves":
  "Intimidation": !!int "9"
  "Stealth": !!int "4"
  "Perception": !!int "8"
"damage_resistances": "cold, necrotic"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 18"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 14):\n\n1/day\
    \ each: [bane](/compendium/spells/bane.md), [create or destroy water](/compendium/spells/create-or-destroy-water.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can breathe both air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (2d10\
    \ + 3) piercing damage plus 3 (1d6) necrotic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales yellowish necrotic energy in a 30-foot cone. Each creature\
    \ in that area must make a DC 13 Constitution saving throw. On a failed save,\
    \ the creature takes 28 (8d6) necrotic damage and is weakened until the end of\
    \ its next turn. A weakened creature has disadvantage on Strength-based ability\
    \ checks and Strength saving throws, and the creature's weapon attacks that rely\
    \ on Strength deal half damage. On a successful save, the creature takes half\
    \ as much damage and isn't weakened."
  "name": "Desiccating Breath (Recharge 5-6)"
"source":
- "FTD"
name: Young Topaz Dragon
image: "[[Young Topaz Dragon.png]]"
---

# Young Topaz Dragon

```statblock
"name": "Young Topaz Dragon"
"size": "Large"
"type": "dragon"
"subtype": "gem"
"alignment": "Chaotic Neutral"
"ac": !!int "17"
"hp": !!int "127"
"hit_dice": "17d10 + 34"
"stats":
- !!int "17"
- !!int "12"
- !!int "15"
- !!int "16"
- !!int "15"
- !!int "16"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "4"
  "Wisdom": !!int "5"
  "Constitution": !!int "5"
"skillsaves":
  "Intimidation": !!int "9"
  "Stealth": !!int "4"
  "Perception": !!int "8"
"damage_resistances": "cold, necrotic"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 18"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "7"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 14):\n\n1/day\
    \ each: [bane](/compendium/spells/bane.md), [create or destroy water](/compendium/spells/create-or-destroy-water.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can breathe both air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (2d10\
    \ + 3) piercing damage plus 3 (1d6) necrotic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales yellowish necrotic energy in a 30-foot cone. Each creature\
    \ in that area must make a DC 13 Constitution saving throw. On a failed save,\
    \ the creature takes 28 (8d6) necrotic damage and is weakened until the end of\
    \ its next turn. A weakened creature has disadvantage on Strength-based ability\
    \ checks and Strength saving throws, and the creature's weapon attacks that rely\
    \ on Strength deal half damage. On a successful save, the creature takes half\
    \ as much damage and isn't weakened."
  "name": "Desiccating Breath (Recharge 5-6)"
"source":
- "FTD"
"image": "[[Young Topaz Dragon.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 223*

## Description

Decay and despair are bound up in the nature of topaz dragons, thanks to the necrotic energy of the Negative Plane that suffuses them. Their psionic power manifests the fundamental entropic principle that mortal beings and their creations are ultimately doomed to death and decomposition, and the dragons' demeanor is typically morbid and curmudgeonly as a result.

**Gleaming Gold.** Upon hatching, topaz dragon wyrmlings' scales are dull yellow-orange and have a cloudy or filmy look. As they age, their scales harden and clarify, becoming translucent and faceted, and ranging from bright yellow to rich amber in color. Their bodies are wider at the haunches, tapering in a wedge shape toward the head, and their wings are shaped to propel them through both air and water. A topaz dragon's psionic power manifests visibly in the gem-like spines that run in a ridge from the crown of the head to the tip of the tail. These spines hover above a living topaz dragon's back, dancing and shifting with the dragon's mood.

**Embodiment of Decay.** While generally not malicious, topaz dragons embody decay. They view destruction as a natural means of clearing the way for new creation and growth, much as a forest fire clears dead wood, replenishes the soil, and allows the forest to regrow even healthier than before. To this end, topaz dragons use their power to reduce crumbling structures and diseased plants to dust, clearing the way for new growth and construction.

Despite being competent swimmers and making their lairs on seacoasts and in brackish marshes, topaz dragons hate the water. Unfortunately, their favorite food is giant squid, so these dragons have ample opportunity to complain bitterly about being wet after diving deep into the ocean in search of prey.

Topaz dragons often come into conflict with bronze dragons when their coastal territories overlap, and they can nurture an inexplicably intense hatred of these metallic dragons. They can also draw the ire of druids and other nature protectors who don't understand the dragons' proclivity for destroying large swaths of countryside. Beyond that, topaz dragons dislike company and grow irritated when disturbed. But anyone who can endure their abrasive demeanor, caustic observations, and morbid interests can form a lasting bond with a powerful ally.

**Entropic Hoards.** Topaz dragons prize information on destruction and creation, whether abstract or dedicated to practical applications. They are fascinated by magic that creates objects from nothing, animates Undead, destroys matter, or manipulates negative energy. And they are particularly intrigued by Undead, sometimes keeping them in their hoards as curios.

**Creating a Topaz Dragon.** Use the Topaz Dragon Personality Traits and Topaz Dragon Ideals tables to inspire your portrayal of distinctive topaz dragon characters.

**Topaz Dragon Personality Traits.** | dice: d8 | Trait |
|----------|-------|
| 1 | I seek no company other than my own, for no one else can compete with me. |
| 2 | If my offspring can't care for themselves, I'm not sure they're worthy of my attention. |
| 3 | The sea is beautiful and I love gazing upon it, but I abhor being wet. |
| 4 | Why should I risk damaging my splendid physique when I can fight with the power of my mind? |
| 5 | I am predictable only in my unpredictability. |
| 6 | It takes true artistry to maintain a warm, desert-like dwelling under the water. |
| 7 | I soothe myself to sleep by imagining the perfect insults for bronze dragons; while I wait to meet one, I hone them on other creatures. |
| 8 | I secretly enjoy conversing with lesser beings, although I usually do so only to find their weaknesses. |
^trait

**Topaz Dragon Ideals.** | dice: d6 | Ideal |
|----------|-------|
| 1 | Solitude. My own company obviates the need for others in my life, whether they are dragons or lesser creatures. (Any) |
| 2 | Change. Consistency is stagnation. (Chaotic) |
| 3 | Mental Superiority. I hone my mental powers so I can confuse, control, or kill any who annoy me. (Evil) |
| 4 | Territoriality. Any creature that comes into my territory has forfeited its right to be upset by anything I do to it. (Evil) |
| 5 | Wonder. Though I don't wish to spend time in it, my soul sings at the sight of the vast beauty of the ocean. (Good) |
| 6 | Code of Combat. I despise most other dragons, but I meet them face to face without resorting to the base trickery I use on lesser creatures. (Lawful) |
^ideal

**Topaz Dragon Adventures.** The Topaz Dragon Adventure Hooks table offers suggestions for stories and adventures involving topaz dragons.

**Topaz Dragon Adventure Hooks.** | dice: d8 | Adventure Hook |
|----------|----------------|
| 1 | A pirate ship is found floating on the open sea, the bodies of the crew completely desiccated. The only clue to what happened is a single topaz dragon scale on the deck. |
| 2 | A topaz dragon has claimed a stretch of coastline and ordered the residents of a seaside town to vacate the area or suffer the dragon's wrath. |
| 3 | A fishery that specializes in a type of eel favored by a local topaz dragon is "haunted," and shipments of the eel vanish every time the ghost appears. |
| 4 | Legends claim that a gauntlet imbued with divine power rests in a temple beneath the waves. Unfortunately, that temple is now the lair of an especially tricky topaz dragon. |
| 5 | A topaz dragon is injured and stranded far from the sea, but the dragon is too proud to ask for help getting home. |
| 6 | A topaz dragon is building a tableau of desiccated creatures and has grown obsessed with catching one treasure hunter who escaped the dragon's clutches. |
| 7 | A topaz dragon has developed a taste for merfolk, and the merfolk community near the dragon's lair is desperate for help. |
| 8 | A topaz dragon is intent on destroying the homes of all intelligent creatures in the dragon's territory, and desperate locals seek to find out what's behind the dragon's wrath. |
^adventure-hook

**Connected Creatures.** Topaz dragons rarely tolerate any company but their own, and they are usually indifferent at best even toward their own kind. Moreover, their unpredictability means that even if a creature proves itself useful to a topaz dragon, it shouldn't count on being safe from the dragon the next time they meet. Topaz dragons rarely go out of their way to fight other creatures, however, with the exception of bronze dragons, for whom they bear an inexplicably intense hatred.

**Young Topaz Dragon Connections.** | dice: d6 | Connected Creatures |
|----------|---------------------|
| 1 | A young topaz dragon engages in repeated aerial battles with a young gynosphinx to determine territory. Both of them are secretly starting to enjoy the bouts. |
| 2 | A young topaz dragon found and ate a dead sahuagin on the beach, unwittingly incurring the wrath of the sahuagin's community. |
| 3 | A flock of harpies enjoy taunting a young topaz dragon who has moved into their territory. The dragon adds a feather to a necklace for each harpy slain. |
| 4 | A curious water elemental supplies a young topaz dragon with aquatic delicacies so as to learn more about the dragon. |
| 5 | A young topaz dragon continually attempts to steal eggs from a roc nest, despite having nearly been killed by the roc parents multiple times. |
| 6 | A clan of winged kobolds consider a young topaz dragon their monarch, despite the dragon's complete lack of interest and growing annoyance toward them. |
^connected-creatures