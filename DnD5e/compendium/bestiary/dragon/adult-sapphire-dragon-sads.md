---
cssclass: json5e-monster
tags:
- compendium/src/sads
- monster/size/huge
- monster/type/dragon
aliases: ["Adult Sapphire Dragon"]
statblock: true
"name": "Adult Sapphire Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Lawful Neutral"
"ac": !!int "19"
"hp": !!int "207"
"hit_dice": "18d12 + 60"
"stats":
- !!int "23"
- !!int "16"
- !!int "21"
- !!int "18"
- !!int "17"
- !!int "18"
"speed": "walk 40 ft., climb 40 ft., fly 80 ft., burrow 40 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "8"
  "Wisdom": !!int "8"
  "Constitution": !!int "10"
"skillsaves":
  "Stealth": !!int "8"
  "Perception": !!int "13"
  "History": !!int "9"
  "Persuasion": !!int "14"
"damage_immunities": "thunder"
"condition_immunities": "frightened"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23"
"languages": "telepathy 120 ft., Common, Draconic"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon's innate spellcasting ability is Intelligence (spell save DC\
    \ 17). It can innately cast the following spells, requiring no components:\n\n\
    1/day each: [scrying](/compendium/spells/scrying.md), [telekinesis](/compendium/spells/telekinesis.md),\
    \ [teleportation circle](/compendium/spells/teleportation-circle.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can burrow through solid rock at half its burrow speed and can\
    \ choose to leave a 10-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can use its Frightful Presence. It then makes two melee attacks,\
    \ one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage plus 3 (1d6) thunder damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 19 (3d8\
    \ + 6) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 15 (2d8\
    \ + 6) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 17 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a pulse of high-pitched, nearly inaudible sound in a\
    \ 60-foot-cone. Each creature in that cone must make a DC 18 Constitution saving\
    \ throw. On a failed save, the creature takes 45 (13d6) thunder damage and is\
    \ [incapacitated](/rules/conditions.md#incapacitated) until the end of its next\
    \ turn. On a successful save, the creature takes half as much damage and isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Debilitating Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon chooses a Small or smaller object that isn't being worn or carried\
    \ that it can see within 60 feet of it, and magically hurls the object at a creature\
    \ it can see within 60 feet of the object. The target must succeed on a DC 17\
    \ Dexterity saving throw or take 15 (4d6) bludgeoning damage."
  "name": "Telekinetic Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon magically teleports to an unoccupied space it can see within\
    \ 30 feet of it."
  "name": "Teleport (Costs 2 Actions)"
"source":
- "SADS"
name: Adult Sapphire Dragon
image: "[[Adult Sapphire Dragon.png]]"
---

# Adult Sapphire Dragon

```statblock
"name": "Adult Sapphire Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Lawful Neutral"
"ac": !!int "19"
"hp": !!int "207"
"hit_dice": "18d12 + 60"
"stats":
- !!int "23"
- !!int "16"
- !!int "21"
- !!int "18"
- !!int "17"
- !!int "18"
"speed": "walk 40 ft., climb 40 ft., fly 80 ft., burrow 40 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "8"
  "Wisdom": !!int "8"
  "Constitution": !!int "10"
"skillsaves":
  "Stealth": !!int "8"
  "Perception": !!int "13"
  "History": !!int "9"
  "Persuasion": !!int "14"
"damage_immunities": "thunder"
"condition_immunities": "frightened"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23"
"languages": "telepathy 120 ft., Common, Draconic"
"cr": "15"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon's innate spellcasting ability is Intelligence (spell save DC\
    \ 17). It can innately cast the following spells, requiring no components:\n\n\
    1/day each: [scrying](/compendium/spells/scrying.md), [telekinesis](/compendium/spells/telekinesis.md),\
    \ [teleportation circle](/compendium/spells/teleportation-circle.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can burrow through solid rock at half its burrow speed and can\
    \ choose to leave a 10-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can use its Frightful Presence. It then makes two melee attacks,\
    \ one with its bite and one with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10\
    \ + 6) piercing damage plus 3 (1d6) thunder damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 19 (3d8\
    \ + 6) slashing damage."
  "name": "Claws"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 15 (2d8\
    \ + 6) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 17 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a pulse of high-pitched, nearly inaudible sound in a\
    \ 60-foot-cone. Each creature in that cone must make a DC 18 Constitution saving\
    \ throw. On a failed save, the creature takes 45 (13d6) thunder damage and is\
    \ [incapacitated](/rules/conditions.md#incapacitated) until the end of its next\
    \ turn. On a successful save, the creature takes half as much damage and isn't\
    \ [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Debilitating Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon chooses a Small or smaller object that isn't being worn or carried\
    \ that it can see within 60 feet of it, and magically hurls the object at a creature\
    \ it can see within 60 feet of the object. The target must succeed on a DC 17\
    \ Dexterity saving throw or take 15 (4d6) bludgeoning damage."
  "name": "Telekinetic Fling"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon magically teleports to an unoccupied space it can see within\
    \ 30 feet of it."
  "name": "Teleport (Costs 2 Actions)"
"source":
- "SADS"
"image": "[[Adult Sapphire Dragon.png]]"
```
^statblock

*Source: Sapphire Anniversary Dice Set p. 1*

## Description

The glittering sapphire dragons are the most territorial of all the gem dragons to a dangerous degree. They collect magical weapons and armor as the centerpieces of their hoards and vault them away in isolated caverns.

A sapphire dragon's psionic nature is evident in horn and bone structures of their body. Their tail barbs and horn tips are all separate pieces, but they float in places, held aloft by the dragon's psychic force while the dragon lives. These levitating horns and spines shift slightly with the dragon's mood, bobbing in amusement or flaring dangerously with anger. Its scales and wing membranes are varied shades of blue, ranging from the light tones of a spring sky, to the rich crystalline azure of sapphire gems and compressed glacial ice. In the light, many of their scales glitter and shine with luminous starburst images.

Unlike most dragons, hatchling sapphire dragons' scales are the rich shades of blue, and sparkling luster they will have for their entire lives.

**Cavern Dwellers.** Sapphire dragons dwell in massive caverns and tunnel networks deep within the earth. They sculpt and excavate secret passages and hidden blinds they can use to navigate their lair, and to stalk and ambush intruders. As the dragons grow older and more powerful, there might be no accessible entrance or exit. Those have been long sealed with natural-looking stone thanks to the dragon's command over its lair's substance.

Giant spiders are the favorite food of sapphire dragons, and the dragons take great delight in hunting the creatures in their subterranean homes.

**Martial and Territorial.** Sapphire dragons are militaristic and warlike, defending their territory with fervor seen in few other dragon kinds. They devise strategies and ambushes utilizing their natural abilities to maneuver underground, and when they reach a certain age, their magical command over the stone that comprises their lairs. Despite this, they don't strike immediately, instead preferring to watch and gauge intruders to devise the most advantageous approach.

**Rivals and Vassals.** Peoples that dwell and delve deep into the earth easily find themselves at odds with sapphire dragons, as a result, the dragons often despise both drow and dwarves in addition to their animosity toward aberrations.

Sapphire dragons sometimes form peaceful contact with communities of rock or deep homes, using their influence to shape the gnome settlements into militant groups that help protect the territory surrounding the dragon's lair.

**Hoarded Armory.** Gold and jewels, art and magical artifacts are as coveted by sapphire dragons as by any other kind, but they most highly prize magical weapons and armor, as well as written accounts of military history and tactics. The centerpiece of a sapphire's hoard is a catalogued, orderly collection of its accumulated war gear, often containing ancient relics of immense power.

**A Sapphire Dragon's Lair.** Sapphire dragons make their lairs in sprawling caverns and tunnels. As they grow older, the make extensive renovations and customization to their lairs thanks to their command over the stone's substance, and their natural tunneling abilities.

The dragons eventually create a dizzying honeycomb of hidden passages, thin walls, and secret chambers that allow them to traverse their entire lair unseen by intruders. There might be no easily accessible entrances or exists in the lair itself, without using magic or tunneling.

**Gem Dragons.** While the metallic dragons follow Bahamut and the chromatic ones owe fealty to Tiamat, the gem dragons are disciples of the enigmatic ruby dragon Sardior. Gem dragons include amethyst crystal, emerald, sapphire, and topaz dragons.

**Reclusive Sentinels.** Gem dragons set themselves apart from the affairs of other beings, even their own kind. They search out lairs far from established populations which they can tend in solitude, or so they can carefully cultivate a circle of servants or vassals to tend their interests in the surrounding region.

Gem dragons break their natural inclination to solitude to mate and protect their clutches of eggs, but rarely for any other reason.

**Charismatic and Suave.** Despite their isolationist tendencies, when gem dragons do interact with other creatures, they can be scintillating hosts and conversationalists. They have a way with making their guests feel at home and relaxed, such that the dragons can often convince a guest of ideas they would never ordinarily entertain.

**Powerful Minds.** Gem dragons are all inherently psionic creatures. They develop telepathic abilities shortly after hatching—sometimes even before—that grow in strength as they age. Some hone these mental powers further, manifesting powerful magical abilities through their minds.

These psychically adept dragons often find themselves at odds with aberrations, particularly mind flayers and aboleths. The gem dragons are skilled at at locating areas where the Far Realm intrudes upon the Material PLane and set themselves against the alien creatures spawned or twisted in such places.

**Sovereign of Gem Dragons.** Of all the gem dragons, the unique ruby dragon, Sardior, is the greatest. He is the king of the gem dragons, and dwells in a floating castle carved of ruby and red gold. His ruby citadel flies far above the surface of the world, always in the night sky. When glimpsed, it crosses the sky like a crimson star, invading the constellations wheeling slowly overhead.

Sardior is attended in his hold by a council of five, composed of witheringly powerful ancient dragons of each of the gem dragon kinds.