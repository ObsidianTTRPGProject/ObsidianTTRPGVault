---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/medium
- monster/type/humanoid/kuo-toa
- monster/environment/underdark
aliases: ["Kuo-toa"]
statblock: true
"name": "Kuo-toa"
"size": "Medium"
"type": "humanoid"
"subtype": "kuo-toa"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "18"
"hit_dice": "4d8"
"stats":
- !!int "13"
- !!int "10"
- !!int "11"
- !!int "11"
- !!int "10"
- !!int "8"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Undercommon"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kuo-toa can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kuo-toa can sense the presence of any creature within 30 feet of it\
    \ that is [invisible](/rules/conditions.md#invisible) or on the Ethereal Plane.\
    \ It can pinpoint such a creature that is moving."
  "name": "Otherworldly Perception"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kuo-toa has advantage on ability checks and saving throws made to escape\
    \ a grapple."
  "name": "Slippery"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage\
    \ if used with two hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 5/15 ft., one Large or smaller\
    \ creature. Hit: The target is [restrained](/rules/conditions.md#restrained).\
    \ A creature can use its action to make a DC 10 Strength check to free itself\
    \ or another creature in a net, ending the effect on a success. Dealing 5 slashing\
    \ damage to the net (AC 10) frees the target without harming it and destroys the\
    \ net."
  "name": "Net"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature misses the kuo-toa with a melee weapon attack, the kuo-toa\
    \ uses its sticky shield to catch the weapon. The attacker must succeed on a DC\
    \ 11 Strength saving throw, or the weapon becomes stuck to the kuo-toa's shield.\
    \ If the weapon's wielder can't or won't let go of the weapon, the wielder is\
    \ [grappled](/rules/conditions.md#grappled) while the weapon is stuck. While stuck,\
    \ the weapon can't be used. A creature can pull the weapon free by taking an action\
    \ to make a DC 11 Strength check and succeeding."
  "name": "Sticky Shield"
"source":
- "MM"
- "PotA"
- "TftYP"
- "WDH"
- "WDMM"
- "GoS"
- "EGW"
name: Kuo-toa
image: "[[Kuo-toa.png]]"
---

# Kuo-toa

```statblock
"name": "Kuo-toa"
"size": "Medium"
"type": "humanoid"
"subtype": "kuo-toa"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "18"
"hit_dice": "4d8"
"stats":
- !!int "13"
- !!int "10"
- !!int "11"
- !!int "11"
- !!int "10"
- !!int "8"
"speed": "walk 30 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Undercommon"
"cr": "1/4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kuo-toa can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kuo-toa can sense the presence of any creature within 30 feet of it\
    \ that is [invisible](/rules/conditions.md#invisible) or on the Ethereal Plane.\
    \ It can pinpoint such a creature that is moving."
  "name": "Otherworldly Perception"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The kuo-toa has advantage on ability checks and saving throws made to escape\
    \ a grapple."
  "name": "Slippery"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/rules/skills.md#Perception)) checks that rely on\
    \ sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage\
    \ if used with two hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +3 to hit, range 5/15 ft., one Large or smaller\
    \ creature. Hit: The target is [restrained](/rules/conditions.md#restrained).\
    \ A creature can use its action to make a DC 10 Strength check to free itself\
    \ or another creature in a net, ending the effect on a success. Dealing 5 slashing\
    \ damage to the net (AC 10) frees the target without harming it and destroys the\
    \ net."
  "name": "Net"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature misses the kuo-toa with a melee weapon attack, the kuo-toa\
    \ uses its sticky shield to catch the weapon. The attacker must succeed on a DC\
    \ 11 Strength saving throw, or the weapon becomes stuck to the kuo-toa's shield.\
    \ If the weapon's wielder can't or won't let go of the weapon, the wielder is\
    \ [grappled](/rules/conditions.md#grappled) while the weapon is stuck. While stuck,\
    \ the weapon can't be used. A creature can pull the weapon free by taking an action\
    \ to make a DC 11 Strength check and succeeding."
  "name": "Sticky Shield"
"source":
- "MM"
- "PotA"
- "TftYP"
- "WDH"
- "WDMM"
- "GoS"
- "EGW"
"image": "[[Kuo-toa.png]]"
```
^statblock

*Source: Monster Manual p. 199, Princes of the Apocalypse, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Explorer's Guide to Wildemount*

## Description

Kuo-toa are degenerate fishlike humanoids that once inhabited the shores and islands of the surface world. Long ago humans and their ilk drove the kuo-toa underground, where they dwell in madness and everlasting night. Kuo-toa can no longer abide daylight.

**Mad Slaves.** At the height of the illithid empire, the mind flayers captured kuo-toa by the thousands and forced them into bondage. The kuo-toa were simple creatures, never meant to endure the oppressive mental force the illithids unleashed against them. By the time the mind flayers abandoned them, the prolonged psychic subjugation endured by the kuo-toa had driven them mad.

Their minds shattered beyond repair, the kuo-toa adopted a religious fervor, inventing gods to protect them against threats. Most notable of these threats are the drow, which have slain the kuo-toa on sight since the days when the two races first met.

**God Makers.** Kuo-toa worship gods of their own insane creation, but if enough kuo-toa believe that a god is real, the energy of their collective subconscious can cause that god to manifest as a physical entity. The form a kuo-toa god takes depends on the inspiration for its divine image, and is usually random or nonsensical.

One of the most revered gods of the kuo-toa is Blibdoolpoolp the Sea Mother, who takes the form of a female human with a crayfish head, a crayfish's claws, and an articulated shell covering her shoulders. Blibdoolpoolp was likely invented by a kuo-toa that improved on a broken human statue by adding the limbs and head of a crustacean. In sudden awe of its handiwork, it then named the resulting form a god.

Kuo-toa that cross paths with an aboleth often find themselves worshiping it as a god, their madness blinding them to the fact that the aboleth is merely using them for its own nefarious ends.

**Theocratic Rulers.** Kuo-toa archpriests are surrounded by fanatical devotees of their faith. The archpriest of a kuo-toa domain demands that all its subjects worship a specific god. An archpriest's mad belief in its god is so fervent that it manifests the powers of a high cleric. The archpriest can also bestow spells to devout underlings called whips. One or more of these whips are also the archpriest's children, and their primary role in kuo-toan society is to fight to the death to claim the throne when the archpriest dies. If a whip displeases the archpriest, the archpriest can strip it of its spellcasting ability, if not its life.

The archpriest's decrees are enforced by monitors, devout kuo-toa that act as the archpriest's eyes and ears. Monitors are deadly hand-to-hand combatants, and lesser kuo-toa live in fear of them.

Kuo-toa Gear. Many weapons of the kuo-toa are designed to capture rather than kill. Nets are common, though some carry pincer staffs (also called mancatchers) designed to trap and immobilize foes. Kuo-toa warriors also treat their shields with a sticky goo that catches incoming weapons.

In general, kuo-toa don't like the weight of armor on their slippery bodies and rely on their natural rubbery hides for protection. However, they like to wear jewelry made from scavenged bones, shells, pearls, gems, and carapace fragments.

> [!quote] Variant: Kuo-toa Monitor
> 
> A kuo-toa monitor has a challenge rating of 3 (700 XP). It has the same statistics as a kuo-toa whip except that it adds its Wisdom modifier to its Armor Class (AC 13), loses the Spellcaster trait, and replaces the whip's action options with the following action options.
> 
> **Multiattack.**  The kuo-toa makes one bite attack and two unarmed strikes.
> 
> **Bite.**  Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.
> 
> **Unarmed Strike.**  Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage + 3 (1d6) lightning damage, and the target can't take reactions until the end of the kuo-toa's next turn.
^variant-kuo-toa-monitor

## Environment

underdark