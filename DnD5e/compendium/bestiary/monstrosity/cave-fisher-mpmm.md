---
cssclass: json5e-monster
tags:
- compendium/src/mpmm
- monster/size/medium
- monster/type/monstrosity
- monster/environment/underdark
aliases: ["Cave Fisher"]
statblock: true
"name": "Cave Fisher"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "3"
- !!int "10"
- !!int "3"
"speed": "walk 20 ft., climb 20 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "2"
"senses": "blindsight 60 ft., passive Perception 12"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the cave fisher drops to half its hit points or fewer, it gains vulnerability\
    \ to fire damage."
  "name": "Flammable Blood"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cave fisher can climb difficult surfaces, including upside down on\
    \ ceilings, without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cave fisher makes two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One Large or smaller creature [grappled](/rules/conditions.md#grappled)\
    \ by the cave fisher's Adhesive Filament must make a DC 13 Strength saving throw.\
    \ On a failed save, the target is pulled into an unoccupied space within 5 feet\
    \ of the cave fisher, and the cave fisher makes one Claw attack against it. Anyone\
    \ else who was attached to the filament is released. Until the grapple ends on\
    \ the target, the cave fisher can't use Adhesive Filament."
  "name": "Retract Filament"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cave fisher extends a sticky filament up to 60 feet, and the filament\
    \ adheres to anything that touches it. A creature the filament adheres to is [grappled](/rules/conditions.md#grappled)\
    \ by the cave fisher (escape DC 13), and ability checks made to escape this grapple\
    \ have disadvantage. The filament can be attacked (AC 15; 5 hit points; immunity\
    \ to poison and psychic damage). A weapon that fails to sever it becomes stuck\
    \ to it, requiring an action and a successful DC 13 Strength check to pull free.\
    \ Destroying the filament deals no damage to the cave fisher. The filament crumbles\
    \ away if the cave fisher takes this bonus action again."
  "name": "Adhesive Filament"
"source":
- "MPMM"
- "VGM"
name: Cave Fisher
image: "[[Cave Fisher.png]]"
---

# Cave Fisher

```statblock
"name": "Cave Fisher"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "3"
- !!int "10"
- !!int "3"
"speed": "walk 20 ft., climb 20 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "2"
"senses": "blindsight 60 ft., passive Perception 12"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the cave fisher drops to half its hit points or fewer, it gains vulnerability\
    \ to fire damage."
  "name": "Flammable Blood"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cave fisher can climb difficult surfaces, including upside down on\
    \ ceilings, without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cave fisher makes two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "One Large or smaller creature [grappled](/rules/conditions.md#grappled)\
    \ by the cave fisher's Adhesive Filament must make a DC 13 Strength saving throw.\
    \ On a failed save, the target is pulled into an unoccupied space within 5 feet\
    \ of the cave fisher, and the cave fisher makes one Claw attack against it. Anyone\
    \ else who was attached to the filament is released. Until the grapple ends on\
    \ the target, the cave fisher can't use Adhesive Filament."
  "name": "Retract Filament"
"bonus_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The cave fisher extends a sticky filament up to 60 feet, and the filament\
    \ adheres to anything that touches it. A creature the filament adheres to is [grappled](/rules/conditions.md#grappled)\
    \ by the cave fisher (escape DC 13), and ability checks made to escape this grapple\
    \ have disadvantage. The filament can be attacked (AC 15; 5 hit points; immunity\
    \ to poison and psychic damage). A weapon that fails to sever it becomes stuck\
    \ to it, requiring an action and a successful DC 13 Strength check to pull free.\
    \ Destroying the filament deals no damage to the cave fisher. The filament crumbles\
    \ away if the cave fisher takes this bonus action again."
  "name": "Adhesive Filament"
"source":
- "MPMM"
- "VGM"
"image": "[[Cave Fisher.png]]"
```
^statblock

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 73, Volo's Guide to Monsters p. 130*

## Description

A cave fisher is a subterranean arachnid with a long snout that houses spinnerets, enabling the creature to produce sticky filaments, much like the strands of a spider's webbing, which the creature uses to snag prey.

A cave fisher usually hunts small animals and is particularly fond of bats, so it stretches a filament over an opening that such prey might travel through. It then climbs to a hiding spot and adheres itself to the surface to rest and wait. When prey blunders into the filament, the cave fisher reels in its meal. A group of cave fishers might work together to cover a large area with filaments, but as soon as one captures potential food, every cave fisher in the area competes for the prize. If a victim escapes from the initial ambush, a cave fisher can reclaim its prey by shooting a filament out to capture it again.

Scarce food might draw a group of cave fishers up to the surface, into a shadowy canyon or a gloomy forest that features both native animal prey and creatures such as explorers or travelers occasionally moving through the area.

**Valuable Parts.** Nearly every part of a cave fisher is useful after the creature has been dispatched. Cave fisher filaments can be woven into rope that is thin, tough, and nearly [invisible](/rules/conditions.md#invisible). The creature's shell is used in the manufacture of tools, armor, and jewelry. Its blood is alcoholic and tastes like strong liquor. Several dwarven spirits include cave fisher blood, and some dwarves, especially berserkers, drink the blood straight. Cave fisher meat is edible, tasting much like crab cooked in strong wine.

While some folk hunt cave fishers to kill them to harvest their filaments, shells, and blood, others capture cave fisher eggs and rear the hatchlings, which can be trained to guard passages or serve as beasts of war. Cave fishers have a natural aversion to fire, since their blood is flammable. As such, Underdark denizens often use the threat of fire when training them.

## Environment

underdark