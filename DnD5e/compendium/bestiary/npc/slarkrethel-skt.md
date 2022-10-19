---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/gargantuan
- monster/type/monstrosity/titan
aliases: ["Slarkrethel"]
statblock: true
"name": "Slarkrethel"
"size": "Gargantuan"
"type": "monstrosity"
"subtype": "titan"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "472"
"hit_dice": "27d20 + 189"
"stats":
- !!int "30"
- !!int "11"
- !!int "25"
- !!int "22"
- !!int "18"
- !!int "20"
"speed": "walk 20 ft., swim 60 ft."
"saves":
  "Dexterity": !!int "8"
  "Wisdom": !!int "12"
  "Intelligence": !!int "14"
  "Strength": !!int "18"
  "Constitution": !!int "15"
"damage_immunities": "lightning; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "frightened, paralyzed"
"senses": "truesight 120 ft., passive Perception 14"
"languages": "understands Abyssal, Celestial, Infernal, and Primordial but can't speak,\
  \ telepathy 120 ft."
"cr": "25"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Slarkrethel casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 22):\n\nAt\
    \ will: [detect magic](/compendium/spells/detect-magic.md), [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [sending](/compendium/spells/sending.md)\n\n1/day each: [arcane eye](/compendium/spells/arcane-eye.md),\
    \ [chain lightning](/compendium/spells/chain-lightning.md), [feeblemind](/compendium/spells/feeblemind.md),\
    \ [foresight](/compendium/spells/foresight.md), [locate creature](/compendium/spells/locate-creature.md),\
    \ [mass suggestion](/compendium/spells/mass-suggestion.md), [nondetection](/compendium/spells/nondetection.md),\
    \ [power word kill](/compendium/spells/power-word-kill.md), [scrying](/compendium/spells/scrying.md)\
    \ (cast as 1 action), [sequester](/compendium/spells/sequester.md), [telekinesis](/compendium/spells/telekinesis.md),\
    \ [teleport](/compendium/spells/teleport.md)\n\n2/day each: [control weather](/compendium/spells/control-weather.md)\
    \ (cast as 1 action), [fly](/compendium/spells/fly.md), [ice storm](/compendium/spells/ice-storm.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Slarkrethel fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Slarkrethel can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Slarkrethel ignores difficult terrain, and magical effects can't reduce\
    \ its speed or cause it to be [restrained](/rules/conditions.md#restrained). It\
    \ can spend 5 feet of movement to escape from nonmagical restraints or being [grappled](/rules/conditions.md#grappled)."
  "name": "Freedom of Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Slarkrethel deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Slarkrethel makes three tentacle attacks, each of which it can replace\
    \ with one use of Fling."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 5 ft., one target. Hit: 23 (3d8\
    \ + 10) piercing damage. If the target is a Large or smaller creature [grappled](/rules/conditions.md#grappled)\
    \ by Slarkrethel, that creature is swallowed, and the grapple ends. While swallowed,\
    \ the creature is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside Slarkrethel, and\
    \ it takes 42 (12d6) acid damage at the start of each of Slarkrethel's turns.\
    \ If Slarkrethel takes 50 damage or more on a single turn from a creature inside\
    \ it, Slarkrethel must succeed on a DC 25 Constitution saving throw at the end\
    \ of that turn or regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in a space within 10 feet of Slarkrethel. If Slarkrethel dies, a swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 30 ft., one target. Hit: 20 (3d6\
    \ + 10) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 18). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ Slarkrethel has ten tentacles, each of which can grapple one target."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One Large or smaller object held or creature [grappled](/rules/conditions.md#grappled)\
    \ by Slarkrethel is thrown up to 60 feet in a random direction and knocked [prone](/rules/conditions.md#prone).\
    \ If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning\
    \ damage for every 10 feet it was thrown. If the target is thrown at another creature,\
    \ that creature must succeed on a DC 18 Dexterity saving throw or take the same\
    \ damage and be knocked [prone](/rules/conditions.md#prone)."
  "name": "Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Slarkrethel magically creates three bolts of lightning, each of which can\
    \ strike a target Slarkrethel can see within 120 feet of it. A target must make\
    \ a DC 23 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Lightning Storm"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Slarkrethel makes one tentacle attack or uses its Fling."
  "name": "Tentacle Attack or Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Slarkrethel uses Lightning Storm."
  "name": "Lightning Storm (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While underwater, Slarkrethel expels an ink cloud in a 60-foot radius.\
    \ The cloud spreads around corners, and that area is heavily obscured to creatures\
    \ other than Slarkrethel. Each creature other than Slarkrethel that ends its turn\
    \ there must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison\
    \ damage on a failed save, or half as much damage on a successful one. A strong\
    \ current disperses the cloud, which otherwise disappears at the end of Slarkrethel's\
    \ next turn."
  "name": "Ink Cloud (Costs 3 Actions)"
"source":
- "SKT"
name: Slarkrethel
image: "[[Slarkrethel.png]]"
---

# Slarkrethel

```statblock
"name": "Slarkrethel"
"size": "Gargantuan"
"type": "monstrosity"
"subtype": "titan"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "472"
"hit_dice": "27d20 + 189"
"stats":
- !!int "30"
- !!int "11"
- !!int "25"
- !!int "22"
- !!int "18"
- !!int "20"
"speed": "walk 20 ft., swim 60 ft."
"saves":
  "Dexterity": !!int "8"
  "Wisdom": !!int "12"
  "Intelligence": !!int "14"
  "Strength": !!int "18"
  "Constitution": !!int "15"
"damage_immunities": "lightning; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "frightened, paralyzed"
"senses": "truesight 120 ft., passive Perception 14"
"languages": "understands Abyssal, Celestial, Infernal, and Primordial but can't speak,\
  \ telepathy 120 ft."
"cr": "25"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Slarkrethel casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 22):\n\nAt\
    \ will: [detect magic](/compendium/spells/detect-magic.md), [detect thoughts](/compendium/spells/detect-thoughts.md),\
    \ [sending](/compendium/spells/sending.md)\n\n1/day each: [arcane eye](/compendium/spells/arcane-eye.md),\
    \ [chain lightning](/compendium/spells/chain-lightning.md), [feeblemind](/compendium/spells/feeblemind.md),\
    \ [foresight](/compendium/spells/foresight.md), [locate creature](/compendium/spells/locate-creature.md),\
    \ [mass suggestion](/compendium/spells/mass-suggestion.md), [nondetection](/compendium/spells/nondetection.md),\
    \ [power word kill](/compendium/spells/power-word-kill.md), [scrying](/compendium/spells/scrying.md)\
    \ (cast as 1 action), [sequester](/compendium/spells/sequester.md), [telekinesis](/compendium/spells/telekinesis.md),\
    \ [teleport](/compendium/spells/teleport.md)\n\n2/day each: [control weather](/compendium/spells/control-weather.md)\
    \ (cast as 1 action), [fly](/compendium/spells/fly.md), [ice storm](/compendium/spells/ice-storm.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Slarkrethel fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Slarkrethel can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Slarkrethel ignores difficult terrain, and magical effects can't reduce\
    \ its speed or cause it to be [restrained](/rules/conditions.md#restrained). It\
    \ can spend 5 feet of movement to escape from nonmagical restraints or being [grappled](/rules/conditions.md#grappled)."
  "name": "Freedom of Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Slarkrethel deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Slarkrethel makes three tentacle attacks, each of which it can replace\
    \ with one use of Fling."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 5 ft., one target. Hit: 23 (3d8\
    \ + 10) piercing damage. If the target is a Large or smaller creature [grappled](/rules/conditions.md#grappled)\
    \ by Slarkrethel, that creature is swallowed, and the grapple ends. While swallowed,\
    \ the creature is [blinded](/rules/conditions.md#blinded) and [restrained](/rules/conditions.md#restrained),\
    \ it has total cover against attacks and other effects outside Slarkrethel, and\
    \ it takes 42 (12d6) acid damage at the start of each of Slarkrethel's turns.\
    \ If Slarkrethel takes 50 damage or more on a single turn from a creature inside\
    \ it, Slarkrethel must succeed on a DC 25 Constitution saving throw at the end\
    \ of that turn or regurgitate all swallowed creatures, which fall [prone](/rules/conditions.md#prone)\
    \ in a space within 10 feet of Slarkrethel. If Slarkrethel dies, a swallowed creature\
    \ is no longer [restrained](/rules/conditions.md#restrained) by it and can escape\
    \ from the corpse using 15 feet of movement, exiting [prone](/rules/conditions.md#prone)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 30 ft., one target. Hit: 20 (3d6\
    \ + 10) bludgeoning damage, and the target is [grappled](/rules/conditions.md#grappled)\
    \ (escape DC 18). Until this grapple ends, the target is [restrained](/rules/conditions.md#restrained).\
    \ Slarkrethel has ten tentacles, each of which can grapple one target."
  "name": "Tentacle"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One Large or smaller object held or creature [grappled](/rules/conditions.md#grappled)\
    \ by Slarkrethel is thrown up to 60 feet in a random direction and knocked [prone](/rules/conditions.md#prone).\
    \ If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning\
    \ damage for every 10 feet it was thrown. If the target is thrown at another creature,\
    \ that creature must succeed on a DC 18 Dexterity saving throw or take the same\
    \ damage and be knocked [prone](/rules/conditions.md#prone)."
  "name": "Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Slarkrethel magically creates three bolts of lightning, each of which can\
    \ strike a target Slarkrethel can see within 120 feet of it. A target must make\
    \ a DC 23 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Lightning Storm"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Slarkrethel makes one tentacle attack or uses its Fling."
  "name": "Tentacle Attack or Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Slarkrethel uses Lightning Storm."
  "name": "Lightning Storm (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While underwater, Slarkrethel expels an ink cloud in a 60-foot radius.\
    \ The cloud spreads around corners, and that area is heavily obscured to creatures\
    \ other than Slarkrethel. Each creature other than Slarkrethel that ends its turn\
    \ there must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison\
    \ damage on a failed save, or half as much damage on a successful one. A strong\
    \ current disperses the cloud, which otherwise disappears at the end of Slarkrethel's\
    \ next turn."
  "name": "Ink Cloud (Costs 3 Actions)"
"source":
- "SKT"
"image": "[[Slarkrethel.png]]"
```
^statblock

*Source: Storm King's Thunder p. 224*

## Description

Beneath the waves, the kraken sleeps for untold ages, awaiting some fell sign or calling. Land-born mortals who sail the open sea forget the reasons their ancestors dreaded the ocean, even as the races of the deep ignore strange gaps in their histories when their civilizations nearly vanished after the appearance of the tentacled horror.

**Leviathans of Legend.** At the beginning of time, krakens served as fierce warriors of the gods. When the gods' wars ended, the krakens shrugged free of their servitude, never again to be bound by other beings. Whole nations quake in fear when the kraken emerges from its dark demesne, and even in the middle of the deepest oceans, storms rise or abate according to its will. The kraken is a primeval force that obliterates the greatest achievements of civilization as if they were castles in the sand. Its devastating attacks can destroy ocean trade and halt communication between coastal cities.

An ominous darkness presages a kraken's attack, and a cloud of inky poison colors the water around it. Galleons and warships vanish when its tentacles uncoil from the deep, the kraken breaking their masts like kindling before drawing down ships and crew. Not even landlocked surface dwellers are safe from a kraken's wrath. Krakens can breathe air as easily as water, and some crawl up rivers to nest in freshwater lakes, destroying cities and towns along the way. Adventurers tell of these monsters lairing in the ruins of lakeside citadels, their tentacles twined around leaning towers of disintegrating stone.

**Mortal Foes.** Some krakens are virtual gods, with cults and minions spread across sea and land. Others are allied with Olhydra, the evil Princess of Elemental Water, and use her cultists to enforce their will on land and sea. A kraken pleased with its worshipers can becalm rough seas and bring a bounteous harvest of fish to the faithful. However, the devious mind of a kraken is ancient beyond reckoning, and is ultimately bent to the ruination of all things.

**A Kraken's Lair.** A kraken lives in dark depths, usually a sunken rift or a cavern filled with detritus, treasure, and wrecked ships.