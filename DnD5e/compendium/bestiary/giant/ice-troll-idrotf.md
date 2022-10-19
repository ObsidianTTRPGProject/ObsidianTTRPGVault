---
cssclass: json5e-monster
tags:
- compendium/src/idrotf
- monster/size/large
- monster/type/giant
aliases: ["Ice Troll"]
statblock: true
"name": "Ice Troll"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "115"
"hit_dice": "10d10 + 60"
"stats":
- !!int "18"
- !!int "8"
- !!int "22"
- !!int "7"
- !!int "9"
- !!int "7"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "2"
"damage_immunities": "cold"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Giant"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While it's alive, the troll generates an aura of bitter cold that fills\
    \ the area within 10 feet of it. At the start of the troll's turn, all nonmagical\
    \ flames in the aura are extinguished. Any creature that starts its turn within\
    \ 10 feet of the troll takes 10 (3d6) cold damage."
  "name": "Cold Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ice troll has advantage on Wisdom (Perception) checks that rely on\
    \ smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ice troll regains 10 hit points at the start of its turn. If the troll\
    \ takes acid or fire damage, this trait doesn't function at the start of the troll's\
    \ next turn. The ice troll dies only if it starts its turn with 0 hit points and\
    \ doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The troll makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage plus 9 (2d8) cold damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage plus 9 (2d8) cold damage. If the target takes any of the\
    \ cold damage, the target must succeed on a DC 15 Constitution saving throw or\
    \ have disadvantage on its attack rolls until the end of its next turn."
  "name": "Claw"
"source":
- "IDRotF"
name: Ice Troll
image: "[[Ice Troll.png]]"
---

# Ice Troll

```statblock
"name": "Ice Troll"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "115"
"hit_dice": "10d10 + 60"
"stats":
- !!int "18"
- !!int "8"
- !!int "22"
- !!int "7"
- !!int "9"
- !!int "7"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "2"
"damage_immunities": "cold"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Giant"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While it's alive, the troll generates an aura of bitter cold that fills\
    \ the area within 10 feet of it. At the start of the troll's turn, all nonmagical\
    \ flames in the aura are extinguished. Any creature that starts its turn within\
    \ 10 feet of the troll takes 10 (3d6) cold damage."
  "name": "Cold Aura"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ice troll has advantage on Wisdom (Perception) checks that rely on\
    \ smell."
  "name": "Keen Smell"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The ice troll regains 10 hit points at the start of its turn. If the troll\
    \ takes acid or fire damage, this trait doesn't function at the start of the troll's\
    \ next turn. The ice troll dies only if it starts its turn with 0 hit points and\
    \ doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The troll makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage plus 9 (2d8) cold damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage plus 9 (2d8) cold damage. If the target takes any of the\
    \ cold damage, the target must succeed on a DC 15 Constitution saving throw or\
    \ have disadvantage on its attack rolls until the end of its next turn."
  "name": "Claw"
"source":
- "IDRotF"
"image": "[[Ice Troll.png]]"
```
^statblock

*Source: Icewind Dale: Rime of the Frostmaiden p. 295*

## Description

Ice trolls have all the meanness and hunger of common trolls. Their hearts radiate extreme cold, to the detriment of other nearby creatures.

**Ice Troll Hearts.** An ice troll's heart remains cold even after the troll's destruction. As long as the troll can't regenerate, its heart can be safely removed from its remains, handled, and kept. An ice troll's heart, once removed, becomes a harmless Tiny object with AC 13, 4 hit points, and immunity to all damage except fire damage. For the next 24 hours, the heart has the following magical properties:

- A creature that eats the heart gains the ability to regenerate for the next 24 hours, regaining 5 hit points at the start of each of its turns. If the creature takes acid or fire damage, this trait doesn't function at the start of its next turn. The creature dies only if it starts its turn with 0 hit points and doesn't regenerate.
- If buried in the ground under a foot or more of earth, the heart melts away and summons a blizzard like that created by the [control weather](/compendium/spells/control-weather.md) spell. It takes 10 minutes for the heart to melt and the blizzard to form. The blizzard lasts for 8 hours.
- A hag or similar creature can perform a ritual that turns the heart into a magical talisman that acts like a patch of brown mold (see "Brown Mold" in the "Dungeon Master's Guide"). This effect lasts until the heart is destroyed.
- A creature proficient with alchemist's supplies can squeeze enough residual fluid out of the heart to mix with other alchemical ingredients, creating one [potion of resistance (cold)](/compendium/items/potion-of-cold-resistance.md). It takes 1 hour to create this potion.