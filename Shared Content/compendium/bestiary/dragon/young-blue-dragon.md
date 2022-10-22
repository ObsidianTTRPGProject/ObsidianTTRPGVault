---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/dragon
- monster/environment/desert
- monster/environment/coastal
aliases: ["Young Blue Dragon"]
statblock: true
"name": "Young Blue Dragon"
"size": "Large"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "152"
"hit_dice": "16d10 + 64"
"stats":
- !!int "21"
- !!int "10"
- !!int "19"
- !!int "14"
- !!int "13"
- !!int "17"
"speed": "walk 40 ft., burrow 20 ft., fly 80 ft."
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "4"
  "Wisdom": !!int "5"
  "Constitution": !!int "8"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "9"
"damage_immunities": "lightning"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 19"
"languages": "Common, Draconic"
"cr": "9"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10\
    \ + 5) piercing damage plus 5 (1d10) lightning damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each\
    \ creature in that line must make a DC 16 Dexterity saving throw, taking 55 (10d10)\
    \ lightning damage on a failed save, or half as much damage on a successful one."
  "name": "Lightning Breath (Recharge 5-6)"
"source":
- "MM"
- "CoS"
- "RoT"
- "WDMM"
- "BGDIA"
- "MOT"
name: Young Blue Dragon
image: "[[Young Blue Dragon.png]]"
---

# Young Blue Dragon

```statblock
"name": "Young Blue Dragon"
"size": "Large"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "152"
"hit_dice": "16d10 + 64"
"stats":
- !!int "21"
- !!int "10"
- !!int "19"
- !!int "14"
- !!int "13"
- !!int "17"
"speed": "walk 40 ft., burrow 20 ft., fly 80 ft."
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "4"
  "Wisdom": !!int "5"
  "Constitution": !!int "8"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "9"
"damage_immunities": "lightning"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 19"
"languages": "Common, Draconic"
"cr": "9"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10\
    \ + 5) piercing damage plus 5 (1d10) lightning damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each\
    \ creature in that line must make a DC 16 Dexterity saving throw, taking 55 (10d10)\
    \ lightning damage on a failed save, or half as much damage on a successful one."
  "name": "Lightning Breath (Recharge 5-6)"
"source":
- "MM"
- "CoS"
- "RoT"
- "WDMM"
- "BGDIA"
- "MOT"
"image": "[[Young Blue Dragon.png]]"
```
^statblock

*Source: Monster Manual p. 91, Curse of Strahd, The Rise of Tiamat, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Mythic Odysseys of Theros*

## Description

Vain and territorial, blue dragons soar through the skies over deserts, preying on caravans and plundering herds and settlements in the verdant lands beyond the desert's reach. These dragons can also be found in dry steppes, searing badlands, and rocky coasts. They guard their territories against all potential competitors, especially brass dragons.

A blue dragon is recognized by its dramatic frilled ears and the massive ridged horn atop its blunt head. Rows of spikes extend back from its nostrils to line its brow, and cluster on its jutting lower jaw.

A blue dragon's scales vary in color from an iridescent azure to a deep indigo, polished to a glossy finish by the desert sands. As the dragon ages, its scales become thicker and harder, and its hide hums and crackles with static electricity. These effects intensify when the dragon is angry or about to attack, giving off an odor of ozone and dusty air.

**Vain and Deadly.** A blue dragon will not stand for any remark or insinuation that it is weak or inferior, taking great pleasure in lording its power over humanoids and other lesser creatures.

A blue dragon is a patient and methodical combatant. When fighting on its own terms, it turns combat into an extended affair of hours or even days, attacking from a distance with volleys of lightning, then flying well out of harm's reach as it waits to attack again.

**Desert Predators.** Though they sometimes eat cacti and other desert plants to sate their great hunger, blue dragons are carnivores. They prefer to dine on herd animals, cooking those creatures with their lightning breath before gorging themselves. Their dining habits make blue dragons an enormous threat to desert caravans and nomadic tribes, which become convenient collections of food and treasure to a dragon's eye.

When it hunts, a blue dragon buries itself in the desert sand so that only the horn on its nose pokes above the surface, appearing to be an outcropping of stone. When prey draws near, the dragon rises up, sand pouring from its wings like an avalanche as it attacks.

**Overlords and Minions.** Blue dragons covet valuable and talented creatures whose service reinforces their sense of superiority. Bards, sages, artists, wizards, and assassins can become valuable agents for a blue dragon, which rewards loyal service handsomely.

A blue dragon keeps its lair secret and well protected, and even its most trusted servants are rarely allowed within. It encourages ankhegs, giant scorpions, and other creatures of the desert to dwell near its lair for additional security. Older blue dragons sometimes attract air elementals and other creatures to serve them.

**Hoarders of Gems.** Though blue dragons collect anything that looks valuable, they are especially fond of gems. Considering blue to be the most noble and beautiful of colors, they covet sapphires, favoring jewelery and magic items adorned with those gems.

A blue dragon buries its most valuable treasures deep in the sand, while scattering a few less valuable trinkets in plainer sight over hidden sinkholes to punish and eliminate would-be thieves.

**A Blue Dragon's Lair.** Blue dragons make their lairs in barren places, using their lightning breath and their burrowing ability to carve out crystallized caverns and tunnels beneath the sands.

Thunderstorms rage around a legendary blue dragon's lair, and narrow tubes lined with glassy sand ventilate the lair, all the while avoiding the deadly sinkholes that are the dragon's first line of defense.

A blue dragon will collapse the caverns that make up its lair if that lair is invaded. The dragon then burrows out, leaving its attackers to be crushed and suffocated. When it returns later, it collects its possessions-along with the wealth of the dead intruders.

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

desert, coastal