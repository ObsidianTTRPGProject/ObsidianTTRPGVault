---
cssclass: json5e-monster
tags:
- compendium/src/skt
- monster/size/gargantuan
- monster/type/dragon
aliases: ["Klauth"]
statblock: true
"name": "Klauth"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "22"
"hp": !!int "546"
"hit_dice": "28d20 + 252"
"stats":
- !!int "30"
- !!int "10"
- !!int "29"
- !!int "18"
- !!int "15"
- !!int "23"
"speed": "walk 40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "14"
  "Dexterity": !!int "8"
  "Wisdom": !!int "10"
  "Constitution": !!int "17"
"skillsaves":
  "Stealth": !!int "8"
  "Perception": !!int "16"
"damage_immunities": "fire"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 26"
"languages": "Common, Draconic"
"cr": "25"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Klauth casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 22):\n\nAt will:\
    \ [comprehend languages](/compendium/spells/comprehend-languages.md), [detect\
    \ magic](/compendium/spells/detect-magic.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1/day each: [banishment](/compendium/spells/banishment.md), [cloudkill](/compendium/spells/cloudkill.md),\
    \ [disintegrate](/compendium/spells/disintegrate.md), [etherealness](/compendium/spells/etherealness.md),\
    \ [find the path](/compendium/spells/find-the-path.md) (cast as 1 action), [greater\
    \ invisibility](/compendium/spells/greater-invisibility.md), [haste](/compendium/spells/haste.md),\
    \ [locate object](/compendium/spells/locate-object.md), [mass suggestion](/compendium/spells/mass-suggestion.md),\
    \ [mirage arcane](/compendium/spells/mirage-arcane.md) (cast as 1 action), [prismatic\
    \ spray](/compendium/spells/prismatic-spray.md)\n\n2/day each: [darkness](/compendium/spells/darkness.md),\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [ice storm](/compendium/spells/ice-storm.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Klauth fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Klauth is carrying two wands, he can use an action to expend 1 charge\
    \ from each wand, triggering the effects of both wands simultaneously."
  "name": "Dual Wand Wielder"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Klauth carries a [wand of fireballs](/compendium/items/wand-of-fireballs.md)\
    \ and a [wand of lightning bolts](/compendium/items/wand-of-lightning-bolts.md),\
    \ and he wears a [ring of cold resistance](/compendium/items/ring-of-cold-resistance.md)."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Klauth can use his Frightful Presence. He then makes three attacks: one\
    \ with his bite and two with his claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10\
    \ + 10) piercing damage plus 14 (4d6) fire damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6\
    \ + 10) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8\
    \ + 10) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Klauth's choice that is within 120 feet of Klauth and\
    \ aware of him must succeed on a DC 21 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Klauth's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Klauth exhales fire in a 90-foot cone. Each creature in that area must\
    \ make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Klauth makes a Wisdom ([Perception](/rules/skills.md#Perception)) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Klauth makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Klauth beats his wings. Each creature within 15 feet of Klauth must succeed\
    \ on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and\
    \ be knocked [prone](/rules/conditions.md#prone). Klauth can then fly up to half\
    \ his flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "SKT"
name: Klauth
image: "[[Klauth.png]]"
---

# Klauth

```statblock
"name": "Klauth"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "22"
"hp": !!int "546"
"hit_dice": "28d20 + 252"
"stats":
- !!int "30"
- !!int "10"
- !!int "29"
- !!int "18"
- !!int "15"
- !!int "23"
"speed": "walk 40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "14"
  "Dexterity": !!int "8"
  "Wisdom": !!int "10"
  "Constitution": !!int "17"
"skillsaves":
  "Stealth": !!int "8"
  "Perception": !!int "16"
"damage_immunities": "fire"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 26"
"languages": "Common, Draconic"
"cr": "25"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Klauth casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 22):\n\nAt will:\
    \ [comprehend languages](/compendium/spells/comprehend-languages.md), [detect\
    \ magic](/compendium/spells/detect-magic.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [minor illusion](/compendium/spells/minor-illusion.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1/day each: [banishment](/compendium/spells/banishment.md), [cloudkill](/compendium/spells/cloudkill.md),\
    \ [disintegrate](/compendium/spells/disintegrate.md), [etherealness](/compendium/spells/etherealness.md),\
    \ [find the path](/compendium/spells/find-the-path.md) (cast as 1 action), [greater\
    \ invisibility](/compendium/spells/greater-invisibility.md), [haste](/compendium/spells/haste.md),\
    \ [locate object](/compendium/spells/locate-object.md), [mass suggestion](/compendium/spells/mass-suggestion.md),\
    \ [mirage arcane](/compendium/spells/mirage-arcane.md) (cast as 1 action), [prismatic\
    \ spray](/compendium/spells/prismatic-spray.md)\n\n2/day each: [darkness](/compendium/spells/darkness.md),\
    \ [detect thoughts](/compendium/spells/detect-thoughts.md), [ice storm](/compendium/spells/ice-storm.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Klauth fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Klauth is carrying two wands, he can use an action to expend 1 charge\
    \ from each wand, triggering the effects of both wands simultaneously."
  "name": "Dual Wand Wielder"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Klauth carries a [wand of fireballs](/compendium/items/wand-of-fireballs.md)\
    \ and a [wand of lightning bolts](/compendium/items/wand-of-lightning-bolts.md),\
    \ and he wears a [ring of cold resistance](/compendium/items/ring-of-cold-resistance.md)."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Klauth can use his Frightful Presence. He then makes three attacks: one\
    \ with his bite and two with his claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10\
    \ + 10) piercing damage plus 14 (4d6) fire damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6\
    \ + 10) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8\
    \ + 10) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Klauth's choice that is within 120 feet of Klauth and\
    \ aware of him must succeed on a DC 21 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Klauth's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Klauth exhales fire in a 90-foot cone. Each creature in that area must\
    \ make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Klauth makes a Wisdom ([Perception](/rules/skills.md#Perception)) check."
  "name": "Detect"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Klauth makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Klauth beats his wings. Each creature within 15 feet of Klauth must succeed\
    \ on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and\
    \ be knocked [prone](/rules/conditions.md#prone). Klauth can then fly up to half\
    \ his flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "SKT"
"image": "[[Klauth.png]]"
```
^statblock

*Source: Storm King's Thunder p. 95*

## Description

The most covetous of the true dragons, red dragons tirelessly seek to increase their treasure hoards. They are exceptionally vain, even for dragons, and their conceit is reflected in their proud bearing and their disdain for other creatures. The odor of sulfur and pumice surrounds a red dragon, whose swept-back horns and spinal frill define its silhouette. Its beaked snout vents smoke at all times, and its eyes dance with flame when it is angry. Its wings are the longest of any chromatic dragon, and have a blue-black tint along the trailing edge that resembles metal burned blue by fire.

The scales of a red dragon wyrmling are a bright glossy scarlet, turning a dull, deeper red and becoming as thick and strong as metal as the dragon ages. Its pupils also fade as it ages, and the oldest red dragons have eyes that resemble molten lava orbs.

**Mountain Masters.** Red dragons prefer mountainous terrain, badlands, and any other locale where they can perch high and survey their domain. Their preference for mountains brings them into conflict with the hill-dwelling copper dragons from time to time.

**Arrogant Tyrants.** Red dragons fly into destructive rages and act on impulse when angered. They are so ferocious and vengeful that they are regarded as the archetypical evil dragon by many cultures.

No other dragon comes close to the arrogance of the red dragon. These creatures see themselves as kings and emperors, and view the rest of dragonkind as inferior. Believing that they are chosen by Tiamat to rule in her name, red dragons consider the world and every creature in it as theirs to command.

**Status and Slaves.** Red dragons are fiercely territorial and isolationist. However, they yearn to know about events in the wider world, and they make use of lesser creatures as informants, messengers, and spies. They are most interested in news about other red dragons, with which they compete constantly for status.

When it requires servants, a red dragon demands fealty from chaotic evil humanoids. If allegiance isn't forthcoming, it slaughters a tribe's leaders and claims lordship over the survivors. Creatures serving a red dragon live in constant terror of being roasted and eaten for displeasing it. They spend most of their time fawning over the creature in an attempt to stay alive.

**Obsessive Collectors.** Red dragons value wealth above all else, and their treasure hoards are legendary.They covet anything of monetary value, and can often judge the worth of a bauble to within a copper piece at a glance. A red dragon has a special affection for treasure claimed from powerful enemies it has slain, exhibiting that treasure to prove its superiority.

A red dragon knows the value and provenance of every item in its hoard, along with each item's exact location. It might notice the absence of a single coin, igniting its rage as it tracks down and slays the thief without mercy. If the thief can't be found, the dragon goes on a rampage, laying waste to towns and villages in an attempt to sate its wrath.

**A Red Dragon's Lair.** Red dragons lair in high mountains or hills, dwelling in caverns under snow-capped peaks, or within the deep halls of abandoned mines and dwarven strongholds. Caves with volcanic or geothermal activity are the most highly prized red dragon lairs, creating hazards that hinder intruders and letting searing heat and volcanic gases wash over a dragon as it sleeps. With its hoard well protected deep within the lair, a red dragon spends as much of its time outside the mountain as in it. For a red dragon, the great heights of the world are the throne from which it can look out to survey all it controls-and the wider world it seeks to control.

Throughout the lair complex, servants erect monuments to the dragon's power, telling the grim story of its life, the enemies it has slain, and the nations it has conquered.

**Dragons.** True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.

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

**Chromatic Dragons.** The black, blue, green, red, and white dragons represent the evil side of dragonkind. Aggressive, gluttonous, and vain, chromatic dragons are dark sages and powerful tyrants feared by all creatures-including each other.

**Driven by Greed.** Chromatic dragons lust after treasure, and this greed colors their every scheme and plot. They believe that the world's wealth belongs to them by right, and a chromatic dragon seizes that wealth without regard for the humanoids and other creatures that have "stolen" it. With its piles of coins, gleaming gems, and magic items, a dragon's hoard is the stuff of legend. However, chromatic dragons have no interest in commerce, amassing wealth for no other reason than to have it.

**Creatures of Ego.** Chromatic dragons are united by their sense of superiority, believing themselves the most powerful and worthy of all mortal creatures. When they interact with other creatures, it is only to further their own interests. They believe in their innate right to rule, and this belief is the cornerstone of every chromatic dragon's personality and worldview. Trying to humble a chromatic dragon is like trying to convince the wind to stop blowing. To these creatures, humanoids are animals, fit to serve as prey or beasts of burden, and wholly unworthy of respect.

**Dangerous Lairs.** A dragon's lair serves as the seat of its power and a vault for its treasure. With its innate toughness and tolerance for severe environmental effects, a dragon selects or builds a lair not for shelter but for defense, favoring multiple entrances and exits, and security for its hoard.

Most chromatic dragon lairs are hidden in dangerous and remote locations to prevent all but the most audacious mortals from reaching them. A black dragon might lair in the heart of a vast swamp, while a red dragon might claim the caldera of an active volcano. In addition to the natural defenses of their lairs, powerful chromatic dragons use magical guardians, traps, and subservient creatures to protect their treasures.

**Queen of Evil Dragons.** Tiamat the Dragon Queen is the chief deity of evil dragonkind. She dwells on Avernus, the first layer of the Nine Hells. As a lesser god, Tiamat has the power to grant spells to her worshipers, though she is loath to share her power. She epitomizes the avarice of evil dragons, believing that the multiverse and all its treasures will one day be hers and hers alone.

Tiamat is a gigantic dragon whose five heads reflect the forms of the chromatic dragons that worship her-black, blue, green, red, and white. She is a terror on the battlefield, capable of annihilating whole armies with her five breath weapons, her formidable spellcasting, and her fearsome claws.

Tiamat's most hated enemy is Bahamut the Platinum Dragon, with whom she shares control of the faith of dragonkind. She also holds a special enmity for Asmodeus, who long ago stripped her of the rule of Avernus and who continues to curb the Dragon Queen's power.