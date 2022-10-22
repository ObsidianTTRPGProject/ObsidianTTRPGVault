---
cssclass: json5e-monster
tags:
- compendium/src/mm
- monster/size/large
- monster/type/celestial
- monster/environment/forest
aliases: ["Unicorn"]
statblock: true
"name": "Unicorn"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "12"
"hp": !!int "67"
"hit_dice": "9d10 + 18"
"stats":
- !!int "18"
- !!int "14"
- !!int "15"
- !!int "11"
- !!int "17"
- !!int "16"
"speed": "walk 50 ft."
"damage_immunities": "poison"
"condition_immunities": "charmed, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Celestial, Elvish, Sylvan, telepathy 60 ft."
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The unicorn's innate spellcasting ability is Charisma (spell save DC 14).\
    \ The unicorn can innately cast the following spells, requiring no components:\n\
    \nAt will: [detect evil and good](/compendium/spells/detect-evil-and-good.md),\
    \ [druidcraft](/compendium/spells/druidcraft.md), [pass without trace](/compendium/spells/pass-without-trace.md)\n\
    \n1/day each: [calm emotions](/compendium/spells/calm-emotions.md), [dispel\
    \ evil and good](/compendium/spells/dispel-evil-and-good.md), [entangle](/compendium/spells/entangle.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the unicorn moves at least 20 feet straight toward a target and then\
    \ hits it with a horn attack on the same turn, the target takes an extra 9 (2d8)\
    \ piercing damage. If the target is a creature, it must succeed on a DC 15 Strength\
    \ saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The unicorn has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The unicorn's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The unicorn makes two attacks: one with its hooves and one with its horn."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage."
  "name": "Hooves"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage."
  "name": "Horn"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The unicorn touches another creature with its horn. The target magically\
    \ regains 11 (2d8 + 2) hit points. In addition, the touch removes all diseases\
    \ and neutralizes all poisons afflicting the target."
  "name": "Healing Touch (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The unicorn magically teleports itself and up to three willing creatures\
    \ it can see within 5 feet of it, along with any equipment they are wearing or\
    \ carrying, to a location the unicorn is familiar with, up to 1 mile away."
  "name": "Teleport (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The unicorn makes one attack with its hooves."
  "name": "Hooves"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The unicorn creates a shimmering, magical field around itself or another\
    \ creature it can see within 60 feet of it. The target gains a +2 bonus to AC\
    \ until the end of the unicorn's next turn."
  "name": "Shimmering Shield (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The unicorn magically regains 11 (2d8 + 2) hit points."
  "name": "Heal Self (Costs 3 Actions)"
"source":
- "MM"
- "GoS"
- "BGDIA"
- "IMR"
- "MOT"
- "TCE"
- "WBtW"
name: Unicorn
image: "[[Unicorn.png]]"
---

# Unicorn

```statblock
"name": "Unicorn"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "12"
"hp": !!int "67"
"hit_dice": "9d10 + 18"
"stats":
- !!int "18"
- !!int "14"
- !!int "15"
- !!int "11"
- !!int "17"
- !!int "16"
"speed": "walk 50 ft."
"damage_immunities": "poison"
"condition_immunities": "charmed, paralyzed, poisoned"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Celestial, Elvish, Sylvan, telepathy 60 ft."
"cr": "5"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The unicorn's innate spellcasting ability is Charisma (spell save DC 14).\
    \ The unicorn can innately cast the following spells, requiring no components:\n\
    \nAt will: [detect evil and good](/compendium/spells/detect-evil-and-good.md),\
    \ [druidcraft](/compendium/spells/druidcraft.md), [pass without trace](/compendium/spells/pass-without-trace.md)\n\
    \n1/day each: [calm emotions](/compendium/spells/calm-emotions.md), [dispel\
    \ evil and good](/compendium/spells/dispel-evil-and-good.md), [entangle](/compendium/spells/entangle.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the unicorn moves at least 20 feet straight toward a target and then\
    \ hits it with a horn attack on the same turn, the target takes an extra 9 (2d8)\
    \ piercing damage. If the target is a creature, it must succeed on a DC 15 Strength\
    \ saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Charge"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The unicorn has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The unicorn's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The unicorn makes two attacks: one with its hooves and one with its horn."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage."
  "name": "Hooves"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage."
  "name": "Horn"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The unicorn touches another creature with its horn. The target magically\
    \ regains 11 (2d8 + 2) hit points. In addition, the touch removes all diseases\
    \ and neutralizes all poisons afflicting the target."
  "name": "Healing Touch (3/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The unicorn magically teleports itself and up to three willing creatures\
    \ it can see within 5 feet of it, along with any equipment they are wearing or\
    \ carrying, to a location the unicorn is familiar with, up to 1 mile away."
  "name": "Teleport (1/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The unicorn makes one attack with its hooves."
  "name": "Hooves"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The unicorn creates a shimmering, magical field around itself or another\
    \ creature it can see within 60 feet of it. The target gains a +2 bonus to AC\
    \ until the end of the unicorn's next turn."
  "name": "Shimmering Shield (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The unicorn magically regains 11 (2d8 + 2) hit points."
  "name": "Heal Self (Costs 3 Actions)"
"source":
- "MM"
- "GoS"
- "BGDIA"
- "IMR"
- "MOT"
- "TCE"
- "WBtW"
"image": "[[Unicorn.png]]"
```
^statblock

*Source: Monster Manual p. 294, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Mythic Odysseys of Theros, Tasha's Cauldron of Everything, The Wild Beyond the Witchlight*

## Description

Unicorns dwell in enchanted forests. Unrelated to the horses it resembles, a unicorn is a celestial creature that wanders sylvan realms, its white form glimmering like starlight.

A unicorn's brow sports a single spiraling horn of ivory whose magical touch can heal the sick and the injured. Its ears catch the words and whispers of the creatures that share its domain, and it knows the tongues of elves and sylvan folk. Unicorns allow good-hearted creatures to enter their woods to hunt or gather food, but they hold evil ever at bay. Foul-hearted creatures seldom leave a unicorn's domain alive.

**Divine Guardians.** Good deities placed unicorns on the Material Plane to ward away evil and preserve and protect sacred places. Most unicorns protect a bounded realm such as an enchanted forest. However, the gods sometimes send a unicorn to guard sacred artifacts or protect specific creatures. When the forces of darkness strike against an individual the gods wish to protect, they might send that individual to a unicorn's forest, where evil creatures pursue at their peril.

Unicorns most often serve deities of the forest and woodlands, including the gods of benevolent fey.

Although all unicorns have natural healing power, some serve the gods in greater capacities, performing miracles normally reserved for high priests.

**Forest Lords.** A unicorn's forest is a celestial realm where nothing that occurs beneath the sun-dappled leaves escapes the creature's notice. A unicorn hears each breathy tune sung by the elves that reside amid the treetops. It senses where every caterpillar spins its cocoon, each leaf and branch upon which a bright butterfly rests its tired wings.

In a unicorn's forest, a sense of calm pervades. From wolves and foxes to birds, squirrels, and tiny insects, the creatures of a unicorn's domain seem quite tame.

Pixies, sprites, satyrs, dryads, and other normally mercurial fey loyally serve a unicorn when they dwell within its woods. Under a unicorn's protection, creatures feel safe from the threat of encroaching civilization and the insidious spread of evil.

A unicorn roams its domain constantly, moving ever so carefully so as not to disturb other denizens. A creature might catch a passing glimpse of the unicorn then suddenly see nothing but the wild woods.

**Sacred Horns.** A unicorn's horn is the focus of its power, a shard of divine magic wrought in spiraling ivory. Wands of unicorn horn channel powerful magic, while unicorn horn weapons strike with divine force.

Wizards can work powdered unicorn horn into potent potions and scroll ink, or use it as a component in eldritch rituals. However, any creature that takes a role, no matter how small, in slaying a unicorn is likely to become the target of divine retribution.

**Blessed Mounts.** When darkness and evil threaten to overwhelm the mortal world, the gods sometimes see fit to pair a unicorn mount with a champion. A paladin astride a unicorn is a sign of the gods' direct intervention in the affairs of the mortal realm. It is a holy alliance made to cleave the heads from demons and banish devils back to the Nine Hells.

As long as the troubled times of darkness persist, the unicorn stays by the champion, its horn shining brightly to drive back the night. However, if the gods' champion falls from grace or turns from the cause of righteousness and good, the unicorn departs, never to return.

**A Unicorn's Lair.** A unicorn's lair might be an ancient ruin overgrown with vines, a misty clearing surrounded by mighty oaks, a flower-covered hilltop alive with butterflies, or some other serene woodland location.

## Environment

forest