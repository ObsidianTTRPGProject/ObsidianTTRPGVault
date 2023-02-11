---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/gargantuan
- monster/type/dragon
- monster/environment/forest
aliases: ["Ancient Green Dragon"]
statblock: true
"name": "Ancient Green Dragon"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "21"
"hp": !!int "385"
"hit_dice": "22d20 + 154"
"stats":
- !!int "27"
- !!int "12"
- !!int "25"
- !!int "20"
- !!int "17"
- !!int "19"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "8"
  "Wisdom": !!int "10"
  "Constitution": !!int "14"
"skillsaves":
  "Deception": !!int "11"
  "Stealth": !!int "8"
  "Insight": !!int "10"
  "Perception": !!int "17"
  "Persuasion": !!int "11"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27"
"languages": "Common, Draconic"
"cr": "22"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10\
    \ + 8) piercing damage plus 10 (3d6) poison damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 22 (4d6\
    \ + 8) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8\
    \ + 8) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 19 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that\
    \ area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Poison Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a Wisdom ([Perception](/rules/skills.md#Perception)) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon beats its wings. Each creature within 15 feet of the dragon\
    \ must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). The dragon can then\
    \ fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "MM"
- "SKT"
- "DIP"
name: Ancient Green Dragon
image: "[[Ancient Green Dragon.png]]"
---

# Ancient Green Dragon

```statblock
"name": "Ancient Green Dragon"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "21"
"hp": !!int "385"
"hit_dice": "22d20 + 154"
"stats":
- !!int "27"
- !!int "12"
- !!int "25"
- !!int "20"
- !!int "17"
- !!int "19"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "8"
  "Wisdom": !!int "10"
  "Constitution": !!int "14"
"skillsaves":
  "Deception": !!int "11"
  "Stealth": !!int "8"
  "Insight": !!int "10"
  "Perception": !!int "17"
  "Persuasion": !!int "11"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27"
"languages": "Common, Draconic"
"cr": "22"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10\
    \ + 8) piercing damage plus 10 (3d6) poison damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 22 (4d6\
    \ + 8) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8\
    \ + 8) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 19 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that\
    \ area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Poison Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a Wisdom ([Perception](/rules/skills.md#Perception)) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon beats its wings. Each creature within 15 feet of the dragon\
    \ must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning\
    \ damage and be knocked [prone](/rules/conditions.md#prone). The dragon can then\
    \ fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "MM"
- "SKT"
- "DIP"
"image": "[[Ancient Green Dragon.png]]"
```
^statblock

*Source: Monster Manual p. 93, Storm King's Thunder, Dragon of Icespire Peak*

## Description

The most cunning and treacherous of true dragons, green dragons use misdirection and trickery to get the upper hand against their enemies. Nasty tempered and thoroughly evil, they take special pleasure in subverting and corrupting the good-hearted. In the ancient forests they roam, green dragons demonstrate an aggression that is often less about territory than it is about gaining power and wealth with as little effort as possible.

A green dragon is recognized by its curved jawline and the crest that begins near its eyes and continues down its spine, reaching full height just behind the skull. A green dragon has no external ears, but bears leathery spiked plates that run down the sides of its neck.

A wyrmling green dragon's thin scales are a shade of green so dark as to appear nearly black. As a green dragon ages, its scales grow larger and lighter, turning shades of forest, emerald, and olive green to help it blend in with its wooded surroundings. Its wings have a dappled pattern, darker near the leading edges and lighter toward the trailing edges.

A green dragon's legs are longer in relation to its body than with any other dragon, enabling it to easily pass over underbrush and forest debris when it walks. With its equally long neck, an older green dragon can peer over the tops of trees without rearing up.

**Capricious Hunters.** A green dragon hunts by patrolling its forest territory from the air and the ground. It eats any creature it can see, and will consume shrubs and small trees when hungry enough, but its favorite prey is elves.

Green dragons are consummate liars and masters of double talk. They favor intimidation of lesser creatures, but employ more subtle manipulations when dealing with other dragons. A green dragon attacks animals and monsters with no provocation, especially when dealing with potential threats to its territory. When dealing with sentient creatures, a green dragon demonstrates a lust for power that rivals its draconic desire for treasure, and it is always on the lookout for creatures that can help it further its ambitions.

A green dragon stalks its victims as it plans its assault, sometimes shadowing creatures for days. If a target is weak, the dragon enjoys the terror its appearance evokes before it attacks. It never slays all its foes, preferring to use intimidation to establish control over survivors. It then learns what it can about other creatures' activities near its territory, and about any treasure to be found nearby. Green dragons occasionally release prisoners if they can be ransomed. Otherwise, a creature must prove its value to the dragon daily or die.

**Manipulative Schemers.** A wily and subtle creature, a green dragon bends other creatures to its will by assessing and playing off their deepest desires. Any creature foolish enough to attempt to subdue a green dragon eventually realizes that the creature is only pretending to serve while it assesses its would-be master.

When manipulating other creatures, green dragons are honey-tongued, smooth, and sophisticated. Among their own kind, they are loud, crass, and rude, especially when dealing with dragons of the same age and status.

**Conflict and Corruption.** Green dragons sometimes clash with other dragons over territory where forest crosses over into other terrain. A green dragon typically pretends to back down, only to wait and watch-sometimes for decades-for the chance to slay the other dragon, then claim its lair and hoard.

Green dragons accept the servitude of sentient creatures such as goblinoids, ettercaps, ettins, kobolds, orcs, and yuan-ti. They also delight in corrupting and bending elves to their will. A green dragon sometimes wracks its minions' minds with fear to the point of insanity, with the fog that spreads throughout its forest reflecting those minions' tortured dreams.

**Living Treasures.** A green dragon's favored treasures are the sentient creatures it bends to its will, including significant figures such as popular heroes, well-known sages, and renowned bards. Among material treasures, a green dragon favors emeralds, wood carvings, musical instruments, and sculptures of humanoid subjects.

**A Green Dragon's Lair.** The forest-loving green dragons sometimes compete for territory with black dragons in marshy woods and with white dragons in subarctic taiga. However, a forest controlled by a green dragon is easy to spot. A perpetual fog hangs in the air in a legendary green dragon's wood, carrying an acrid whiff of the creature's poison breath.

The moss-covered trees grow close together except where winding pathways trace their way like a maze into the heart of the forest. The light that reaches the forest floor carries an emerald green cast, and every sound seems muffled.

At the center of its forest, a green dragon chooses a cave in a sheer cliff or hillside for its lair, preferring an entrance hidden from prying eyes. Some seek out cave mouths concealed behind waterfalls, or partly submerged caverns that can be accessed through lakes or streams. Others conceal the entrances to their lairs with vegetation.

**Chromatic Dragons.** The black, blue, green, red, and white dragons represent the evil side of dragonkind. Aggressive, gluttonous, and vain, chromatic dragons are dark sages and powerful tyrants feared by all creatures-including each other.

**Driven by Greed.**  Chromatic dragons lust after treasure, and this greed colors their every scheme and plot. They believe that the world's wealth belongs to them by right, and a chromatic dragon seizes that wealth without regard for the humanoids and other creatures that have "stolen" it. With its piles of coins, gleaming gems, and magic items, a dragon's hoard is the stuff of legend. However, chromatic dragons have no interest in commerce, amassing wealth for no other reason than to have it.

**Creatures of Ego.** Chromatic dragons are united by their sense of superiority, believing themselves the most powerful and worthy of all mortal creatures. When they interact with other creatures, it is only to further their own interests. They believe in their innate right to rule, and this belief is the cornerstone of every chromatic dragon's personality and worldview. Trying to humble a chromatic dragon is like trying to convince the wind to stop blowing. To these creatures, humanoids are animals, fit to serve as prey or beasts of burden, and wholly unworthy of respect.

**Dangerous Lairs.** A dragon's lair serves as the seat of its power and a vault for its treasure. With its innate toughness and tolerance for severe environmental effects, a dragon selects or builds a lair not for shelter but for defense, favoring multiple entrances and exits, and security for its hoard.

Most chromatic dragon lairs are hidden in dangerous and remote locations to prevent all but the most audacious mortals from reaching them. A black dragon might lair in the heart of a vast swamp, while a red dragon might claim the caldera of an active volcano. In addition to the natural defenses of their lairs, powerful chromatic dragons use magical guardians, traps, and subservient creatures to protect their treasures.

**Queen of Evil Dragons.** Tiamat the Dragon Queen is the chief deity of evil dragonkind. She dwells on Avernus, the first layer of the Nine Hells. As a lesser god, Tiamat has the power to grant spells to her worshipers, though she is loath to share her power. She epitomizes the avarice of evil dragons, believing that the multiverse and all its treasures will one day be hers and hers alone.

Tiamat is a gigantic dragon whose five heads reflect the forms of the chromatic dragons that worship her-black, blue, green, red, and white. She is a terror on the battlefield, capable of annihilating whole armies with her five breath weapons, her formidable spellcasting, and her fearsome claws.

Tiamat's most hated enemy is Bahamut the Platinum Dragon, with whom she shares control of the faith of dragonkind. She also holds a special enmity for Asmodeus, who long ago stripped her of the rule of Avernus and who continues to curb the Dragon Queen's power.

True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.

Many creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.

Though their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.

True dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.

Dragon Age Categories

| Category | Size | Age Range |
|----------|------|-----------|
| Wyrmling | Medium | 5 years or less |
| Young | Large | 6–100 years |
| Adult | Huge | 101–800 years |
| Ancient | Gargantuan | 801 years or more |
^category-size-age-range

## Environment

forest