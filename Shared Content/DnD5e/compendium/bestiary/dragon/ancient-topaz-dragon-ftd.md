---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/gargantuan
- monster/type/dragon/gem
aliases: ["Ancient Topaz Dragon"]
statblock: true
"name": "Ancient Topaz Dragon"
"size": "Gargantuan"
"type": "dragon"
"subtype": "gem"
"alignment": "Chaotic Neutral"
"ac": !!int "20"
"hp": !!int "280"
"hit_dice": "17d20 + 102"
"stats":
- !!int "23"
- !!int "12"
- !!int "23"
- !!int "20"
- !!int "19"
- !!int "20"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "7"
  "Wisdom": !!int "10"
  "Constitution": !!int "12"
"skillsaves":
  "Intimidation": !!int "17"
  "Stealth": !!int "7"
  "Perception": !!int "16"
"damage_resistances": "cold, necrotic"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 26"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "20"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 19):\n\n1/day\
    \ each: [antilife shell](/compendium/spells/antilife-shell.md), [bane](/compendium/spells/bane.md),\
    \ [control water](/compendium/spells/control-water.md), [create or destroy water](/compendium/spells/create-or-destroy-water.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can breathe both air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can cast [fabricate](/compendium/spells/fabricate.md), requiring\
    \ no spell components and using Intelligence as the spellcasting ability."
  "name": "Fabricate (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage plus 10 (3d6) necrotic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales yellowish necrotic energy in a 90-foot cone. Each creature\
    \ in that area must make a DC 20 Constitution saving throw. On a failed save,\
    \ the creature takes 49 (14d6) necrotic damage and is weakened until the end of\
    \ its next turn. A weakened creature has disadvantage on Strength-based ability\
    \ checks and Strength saving throws, and the creature's weapon attacks that rely\
    \ on Strength deal half damage. On a successful save, the creature takes half\
    \ as much damage and isn't weakened."
  "name": "Desiccating Breath (Recharge 5-6)"
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
  "desc": "The dragon targets a creature or an object not being worn or carried that\
    \ it can see within 60 feet of it. The target must succeed on a DC 19 Constitution\
    \ saving throw or take 40 (9d8) necrotic damage. If this damage reduces the target\
    \ to 0 hit points, it crumbles to dust."
  "name": "Essential Reduction (Costs 3 Actions)"
"source":
- "FTD"
name: Ancient Topaz Dragon
image: "[[Ancient Topaz Dragon.png]]"
---

# Ancient Topaz Dragon

```statblock
"name": "Ancient Topaz Dragon"
"size": "Gargantuan"
"type": "dragon"
"subtype": "gem"
"alignment": "Chaotic Neutral"
"ac": !!int "20"
"hp": !!int "280"
"hit_dice": "17d20 + 102"
"stats":
- !!int "23"
- !!int "12"
- !!int "23"
- !!int "20"
- !!int "19"
- !!int "20"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "7"
  "Wisdom": !!int "10"
  "Constitution": !!int "12"
"skillsaves":
  "Intimidation": !!int "17"
  "Stealth": !!int "7"
  "Perception": !!int "16"
"damage_resistances": "cold, necrotic"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 26"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "20"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 19):\n\n1/day\
    \ each: [antilife shell](/compendium/spells/antilife-shell.md), [bane](/compendium/spells/bane.md),\
    \ [control water](/compendium/spells/control-water.md), [create or destroy water](/compendium/spells/create-or-destroy-water.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can breathe both air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can cast [fabricate](/compendium/spells/fabricate.md), requiring\
    \ no spell components and using Intelligence as the spellcasting ability."
  "name": "Fabricate (1/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage plus 10 (3d6) necrotic damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales yellowish necrotic energy in a 90-foot cone. Each creature\
    \ in that area must make a DC 20 Constitution saving throw. On a failed save,\
    \ the creature takes 49 (14d6) necrotic damage and is weakened until the end of\
    \ its next turn. A weakened creature has disadvantage on Strength-based ability\
    \ checks and Strength saving throws, and the creature's weapon attacks that rely\
    \ on Strength deal half damage. On a successful save, the creature takes half\
    \ as much damage and isn't weakened."
  "name": "Desiccating Breath (Recharge 5-6)"
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
  "desc": "The dragon targets a creature or an object not being worn or carried that\
    \ it can see within 60 feet of it. The target must succeed on a DC 19 Constitution\
    \ saving throw or take 40 (9d8) necrotic damage. If this damage reduces the target\
    \ to 0 hit points, it crumbles to dust."
  "name": "Essential Reduction (Costs 3 Actions)"
"source":
- "FTD"
"image": "[[Ancient Topaz Dragon.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 220*

## Description

Decay and despair are bound up in the nature of topaz dragons, thanks to the necrotic energy of the Negative Plane that suffuses them. Their psionic power manifests the fundamental entropic principle that mortal beings and their creations are ultimately doomed to death and decomposition, and the dragons' demeanor is typically morbid and curmudgeonly as a result.

**Gleaming Gold.** Upon hatching, topaz dragon wyrmlings' scales are dull yellow-orange and have a cloudy or filmy look. As they age, their scales harden and clarify, becoming translucent and faceted, and ranging from bright yellow to rich amber in color. Their bodies are wider at the haunches, tapering in a wedge shape toward the head, and their wings are shaped to propel them through both air and water. A topaz dragon's psionic power manifests visibly in the gem-like spines that run in a ridge from the crown of the head to the tip of the tail. These spines hover above a living topaz dragon's back, dancing and shifting with the dragon's mood.

**Embodiment of Decay.** While generally not malicious, topaz dragons embody decay. They view destruction as a natural means of clearing the way for new creation and growth, much as a forest fire clears dead wood, replenishes the soil, and allows the forest to regrow even healthier than before. To this end, topaz dragons use their power to reduce crumbling structures and diseased plants to dust, clearing the way for new growth and construction.

Despite being competent swimmers and making their lairs on seacoasts and in brackish marshes, topaz dragons hate the water. Unfortunately, their favorite food is giant squid, so these dragons have ample opportunity to complain bitterly about being wet after diving deep into the ocean in search of prey.

Topaz dragons often come into conflict with bronze dragons when their coastal territories overlap, and they can nurture an inexplicably intense hatred of these metallic dragons. They can also draw the ire of druids and other nature protectors who don't understand the dragons' proclivity for destroying large swaths of countryside. Beyond that, topaz dragons dislike company and grow irritated when disturbed. But anyone who can endure their abrasive demeanor, caustic observations, and morbid interests can form a lasting bond with a powerful ally.

**Entropic Hoards.** Topaz dragons prize information on destruction and creation, whether abstract or dedicated to practical applications. They are fascinated by magic that creates objects from nothing, animates Undead, destroys matter, or manipulates negative energy. And they are particularly intrigued by Undead, sometimes keeping them in their hoards as curios.

**A Topaz Dragon's Lair.** Topaz dragons dwell where the sea meets the land, favoring sites where the constant action of the waves and tides is slowly reducing the land to gravel. They make their lairs in caves set into sea cliffs, or beneath salt marshes where fresh water and sea water mingle, constantly grappling with their dislike of water to use flooded tunnels as secure entrances into their homes. They keep the interior chambers of their lairs meticulously dry.

The challenge rating of a legendary topaz dragon increases by 1 when it's encountered in its lair.