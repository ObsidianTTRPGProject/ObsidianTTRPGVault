---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/gargantuan
- monster/type/dragon
aliases: ["Ancient Dragon Turtle"]
statblock: true
"name": "Ancient Dragon Turtle"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "22"
"hp": !!int "409"
"hit_dice": "21d20 + 189"
"stats":
- !!int "28"
- !!int "12"
- !!int "29"
- !!int "14"
- !!int "19"
- !!int "15"
"speed": "walk 30 ft., swim 60 ft."
"saves":
  "Dexterity": !!int "8"
  "Wisdom": !!int "11"
  "Constitution": !!int "16"
"skillsaves":
  "Perception": !!int "11"
"damage_immunities": "cold, fire"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "Aquan, Draconic"
"cr": "24"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle can breathe air and water"
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon turtle would be reduced to 0 hit points, its current hit\
    \ point total instead resets to 350 hit points, and it recharges its Steam Breath.\
    \ Additionally, the dragon turtle can now use the options in the \"Mythic Actions\"\
    \ section for 1 hour. Award a party an additional 62,000 XP (124,000 XP total)\
    \ for defeating the dragon turtle after its Blessing of the Sea activates."
  "name": "Blessing of the Sea (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon turtle fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle doesn't require food or drink."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle makes one Bite or Tail attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 15 (1d12\
    \ + 9) piercing damage plus 13 (2d12) lightning damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 18 (2d8\
    \ + 9) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10\
    \ + 9) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 24 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle exhales steam in a 90-foot cone. Each creature in that\
    \ area must make a DC 24 Constitution saving throw, taking 67 (15d8) fire damage\
    \ on a failed save, or half as much damage on a successful one. Being underwater\
    \ doesn't grant resistance against this damage."
  "name": "Steam Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle makes one Claw or Tail attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle moves up to its speed. If the dragon turtle is swimming,\
    \ this movement doesn't provoke opportunity attacks."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle radiates intense heat. Until the start of the dragon\
    \ turtle's next turn, whenever a creature starts its turn within 20 feet of the\
    \ dragon turtle, that creature must succeed on a DC 24 Constitution saving throw\
    \ or take 40 (9d8) fire damage. Being underwater doesn't grant resistance against\
    \ this damage."
  "name": "Boiling Aura (Costs 3 Actions)"
"source":
- "FTD"
name: Ancient Dragon Turtle
image: "[[Ancient Dragon Turtle.png]]"
---

# Ancient Dragon Turtle

```statblock
"name": "Ancient Dragon Turtle"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "22"
"hp": !!int "409"
"hit_dice": "21d20 + 189"
"stats":
- !!int "28"
- !!int "12"
- !!int "29"
- !!int "14"
- !!int "19"
- !!int "15"
"speed": "walk 30 ft., swim 60 ft."
"saves":
  "Dexterity": !!int "8"
  "Wisdom": !!int "11"
  "Constitution": !!int "16"
"skillsaves":
  "Perception": !!int "11"
"damage_immunities": "cold, fire"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "Aquan, Draconic"
"cr": "24"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle can breathe air and water"
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon turtle would be reduced to 0 hit points, its current hit\
    \ point total instead resets to 350 hit points, and it recharges its Steam Breath.\
    \ Additionally, the dragon turtle can now use the options in the \"Mythic Actions\"\
    \ section for 1 hour. Award a party an additional 62,000 XP (124,000 XP total)\
    \ for defeating the dragon turtle after its Blessing of the Sea activates."
  "name": "Blessing of the Sea (Recharges after a Short or Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon turtle fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle doesn't require food or drink."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle makes one Bite or Tail attack and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 15 (1d12\
    \ + 9) piercing damage plus 13 (2d12) lightning damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 18 (2d8\
    \ + 9) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10\
    \ + 9) bludgeoning damage. If the target is a creature, it must succeed on a DC\
    \ 24 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle exhales steam in a 90-foot cone. Each creature in that\
    \ area must make a DC 24 Constitution saving throw, taking 67 (15d8) fire damage\
    \ on a failed save, or half as much damage on a successful one. Being underwater\
    \ doesn't grant resistance against this damage."
  "name": "Steam Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle makes one Claw or Tail attack."
  "name": "Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle moves up to its speed. If the dragon turtle is swimming,\
    \ this movement doesn't provoke opportunity attacks."
  "name": "Move"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon turtle radiates intense heat. Until the start of the dragon\
    \ turtle's next turn, whenever a creature starts its turn within 20 feet of the\
    \ dragon turtle, that creature must succeed on a DC 24 Constitution saving throw\
    \ or take 40 (9d8) fire damage. Being underwater doesn't grant resistance against\
    \ this damage."
  "name": "Boiling Aura (Costs 3 Actions)"
"source":
- "FTD"
"image": "[[Ancient Dragon Turtle.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 191*

## Description

Dragon turtles are mighty creatures whose inherent magic is intimately linked with the oceans of the Material Plane. The dragon turtle presented in the _Monster Manual_is a typical adult, at least a century old and boasting a valuable hoard. You can use the stat blocks in this section for older or younger dragon turtles. In addition, chapter 5 includes lair actions and regional effects that can be used for adult or ancient dragon turtles. An ancient dragon turtle is a mythic creature akin to a greatwyrm, combining the power of multiple echoes from across the worlds of the Material Plane. Such a creature can be as large as an island—and indeed, legends suggest that many unwitting sailors wrecked at sea have mistaken slumbering dragon turtles for solid ground.

Ancient dragon turtles might sleep for years or decades while floating along the surface of the ocean, enjoying the warmth of the sun and letting vegetation take root on their shells. An angry ancient dragon turtle is terrible to behold, radiating heat from the shell to boil the surrounding water—and any creatures in it. And even if an enemy wears down the dragon turtle's defenses, magical storms manifest to shield the dragon turtle and strike at foes.

**Creating a Dragon Turtle.** Use the Dragon Turtle Personality Traits and Dragon Turtle Ideals tables to inspire your portrayal of distinctive dragon turtle characters, and use the Dragon Turtle Spellcasting table to help select spells for a spellcasting dragon. (Though the _Monster Manual_doesn't explicitly include dragon turtles in the variant rules for making a dragon a spellcaster, you can apply those rules to these aquatic dragons.)

**Dragon Turtle Personality Traits.** | dice: d8 | Trait |
|----------|-------|
| 1 | I speak slowly and deliberately, pausing to reflect after (or sometimes in the middle of) each utterance. |
| 2 | I am more interested in the shiny baubles people carry than in anything they have to say. |
| 3 | I think of ships as kindred spirits and like to rub affectionately against their keels. |
| 4 | I like to show visitors the vastness of my domain, so they appreciate how insignificant they are. |
| 5 | I attack anyone I notice taking from the sea's bounty without offering something in return. |
| 6 | I think of sailors' songs as their "water speech" and try to converse with them by humming snippets of tunes I have overheard. |
| 7 | I swim alongside ships sailing through my domain, just out of arrow range, so they know I am watching. |
| 8 | I am fascinated by the politics of surface realms and talk endlessly with sailors and adventurers to stay current on the latest happenings on land. |
^trait

**Dragon Turtle Ideals.** | dice: d6 | Ideal |
|----------|-------|
| 1 | Endurance. We who dwell beneath the waves can weather all storms. (Any) |
| 2 | Indifference. What do I care for the fleeting concerns of those who crawl upon the land? (Any) |
| 3 | Curiosity. I want to know about everything that enters my domain, especially oddities from the surface world. (Any) |
| 4 | Supremacy. Creatures who refuse to recognize my rule over these waters suffer my displeasure. (Lawful or Evil) |
| 5 | Preservation. I am the ocean's steward, tending reefs and waters to ensure that they remain unspoiled. (Lawful) |
| 6 | Eradication. The peoples of the surface world were a mistake of creation. I will correct that error. (Evil) |
^ideal

**Dragon Turtle Spellcasting.** | Age | Spell Save Dc | Spells Known |
|-----|---------------|--------------|
| Ancient | 17 | control water, control weather,* fog cloud |
^age-spell-save-dc-spells-known

**Dragon Turtle Adventures.** The Dragon Turtle Adventure Hooks table offers suggestions for stories and adventures involving dragon turtles.

**Dragon Turtle Adventure Hooks.** | dice: d8 | Adventure Hook |
|----------|----------------|
| 1 | A ruthless shipping magnate has bribed a dragon turtle to attack competitors' vessels and drive them out of business. |
| 2 | A curious dragon turtle swam upriver from the sea and is now stuck beneath a bridge on a major trade road, terrifying travelers. |
| 3 | After an unwise attack from a whaling ship, a dragon turtle pursued the ship back to harbor and now attacks any ship that tries to leave. |
| 4 | The sea around a wizard's tower is too stormy for ships to sail through, but a resident dragon turtle might be convinced to ferry the characters across. |
| 5 | A royal bathhouse was renowned for its sauna, until the dragon turtle supplying the steam escaped and started rampaging through the palace. |
| 6 | A millennium ago, a fabled sword was buried at sea with its wielder. Now the sword must be found, and only a dragon turtle remembers where it is. |
| 7 | A dragon turtle has taken up residence in a subterranean lake, and the steam has been driving other creatures up out of their tunnels toward the surface. |
| 8 | A sea god has sent a dragon turtle to unleash devastation along a populated coast. |
^adventure-hook

**Connected Creatures.** Dragon turtles are stolid and slow to anger. This temperament, combined with their disinterest in moral quandaries, allows them to get along with—or at least abide—most creatures they encounter. They frequently enter symbiotic relationships with other sea creatures that can bring them food or treasure, and they sometimes agree to work for creatures who ply them with generous sums of wealth.

**Ancient Dragon Turtle Connections.** | dice: d4 | Connected Creatures |
|----------|---------------------|
| 1 | An ancient dragon turtle and an ancient gold dragon meet once a year to trade moves in a game of dragonchess that has been going on for centuries. |
| 2 | An ancient dragon turtle serves as counsel to an empyrean court, tempering the Celestials' passions with the dragon turtle's endless patience. |
| 3 | A [geas](/compendium/spells/geas.md) spell forces an ancient dragon turtle to carry a lich's tower. |
| 4 | An ancient dragon turtle is responsible for ensuring that a kraken is never woken from its slumber. |
^connected-creatures

**Dragon Turtle Lairs.** Dragon turtles make their lairs in underwater caves and coral reefs. Most such lairs are situated deep beneath the waves near the ocean's floor, though some dragon turtles prefer coastal lairs with easier access to settlements they can trade with—or prey upon. Particularly reclusive dragon turtles seek lairs in even more remote locales, including deep-sea trenches or underwater volcanoes.

Dragon turtles are largely unconcerned with the design of their lairs and seldom work to improve them. A dragon turtle's primary concern when selecting a lair is ensuring that the site is large enough to accommodate the creature's prodigious size as the centuries wear on. After that, proximity to shipping lanes and freedom from irksome neighbors take precedence.

**Dragon Turtle Lair Features.** The underwater caves inhabited by dragon turtles are structurally similar to the seaside caverns where bronze and topaz dragons lair. When constructing a dragon turtle's lair, you can simply take a coastal map and translate it to an underwater environment or use the map as-is if the dragon turtle is content to lair near the surface.

As an example, map 5.14 depicts a topaz dragon's lair in a seaside cavern, but it could be reimagined as a grotto in the side of a coral reef rising from a shelf on the ocean floor, with the following features:

- **Shelf Floor.** The sandy beaches represent the ocean floor at a depth of 100 feet, which is coated in a soft layer of fine sediment. The water around the lair is clear but dimly lit. The water's edge on the map represents the lip of the shelf, which descends to a dark plain twelve hundred feet below.
- **Coral Reef.** The rocky cliff side depicts the contours of a coral reef that rises 80 feet above the shelf. The exterior face of the reef is covered with stinging corals.
- **Reef Hollow.** The dragon turtle's lair lies in a hollow in the reef's interior that was bored out by a giant sea worm the dragon turtle killed. The original entrance at the level of the shelf floor ascends through a weed-choked tube that opens into the main chamber. Here, the dragon turtle nests in a recessed shelf along the back wall, where the creature can gaze down at the hoard scattered across the chamber floor. Although the lair is mostly flooded with seawater, a layer of breathable air is trapped in the top 3 feet of the main chamber.
- **Coral Shelf.** A secondary entrance grants access to a coral shelf 40 feet above the shelf floor and illuminates the lair for a few hours each day with a shaft of dim sunlight.