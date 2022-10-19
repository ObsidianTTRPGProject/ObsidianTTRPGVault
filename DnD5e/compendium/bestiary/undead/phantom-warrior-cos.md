---
cssclass: json5e-monster
tags:
- compendium/src/cos
- monster/size/medium
- monster/type/undead
aliases: ["Phantom Warrior"]
statblock: true
"name": "Phantom Warrior"
"size": "Medium"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "16"
- !!int "11"
- !!int "16"
- !!int "8"
- !!int "10"
- !!int "15"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "any languages it knew in life"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phantom warrior can see 60 feet into the Ethereal Plane when it is\
    \ on the Material Plane, and vice versa."
  "name": "Ethereal Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phantom warrior can move through other creatures and objects as if\
    \ they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn\
    \ inside an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phantom warrior's AC accounts for its spectral armor and shield."
  "name": "Spectral Armor and Shield"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phantom warrior makes two attacks with its spectral longsword."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) force damage."
  "name": "Spectral Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phantom warrior enters the Ethereal Plane from the Material Plane,\
    \ or vice versa. It is visible on the Material Plane while it is in the Border\
    \ Ethereal, and vice versa, yet it can't affect or be affected by anything on\
    \ the other plane."
  "name": "Etherealness"
"source":
- "CoS"
name: Phantom Warrior
image: "[[Phantom Warrior.png]]"
---

# Phantom Warrior

```statblock
"name": "Phantom Warrior"
"size": "Medium"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "16"
- !!int "11"
- !!int "16"
- !!int "8"
- !!int "10"
- !!int "15"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "any languages it knew in life"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phantom warrior can see 60 feet into the Ethereal Plane when it is\
    \ on the Material Plane, and vice versa."
  "name": "Ethereal Sight"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phantom warrior can move through other creatures and objects as if\
    \ they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn\
    \ inside an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phantom warrior's AC accounts for its spectral armor and shield."
  "name": "Spectral Armor and Shield"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phantom warrior makes two attacks with its spectral longsword."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) force damage."
  "name": "Spectral Longsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The phantom warrior enters the Ethereal Plane from the Material Plane,\
    \ or vice versa. It is visible on the Material Plane while it is in the Border\
    \ Ethereal, and vice versa, yet it can't affect or be affected by anything on\
    \ the other plane."
  "name": "Etherealness"
"source":
- "CoS"
"image": "[[Phantom Warrior.png]]"
```
^statblock

*Source: Curse of Strahd p. 235*

## Description

A phantom warrior is the spectral remnant of a willful soldier or knight who perished on the battlefield or died performing its sworn duty. It appears like a translucent version of its living self.

**Task Driven.** Although one is often mistaken for a ghost, a phantom warrior isn't bound by a yearning to complete some unresolved goal. It can choose to end its undead existence at any time. Its spirit lingers willingly, either out of loyalty to its former master or because it believes it must perform a task to satisfy its honor or sense of duty. For example, a guard who dies defending a wall might return as a phantom warrior and continue guarding the wall, then disappear forever once a new guard assumes its post or the wall is destroyed. The period between the time it died and the time it rises as a phantom warrior is usually 24 hours.

**Faded Memories.** A phantom warrior retains the alignment and personality it had before it died, and it remembers how it died. Memories of its life from shortly before it died are hazy, and older memories are forgotten. A phantom warrior can usually remember the last 1d10 + 10 days of its life; everything that happened before that is an impenetrable fog.

**Forceful Presence.** Although they are incorporeal, phantom warriors can harness the energy around them to deflect incoming attacks and strike with great force. An [invisible](/rules/conditions.md#invisible) sheath of energy surrounds a phantom warrior's ghostly armor, shields, and weapons, which become as hard as steel yet don't impede the warrior's ability to move through walls and other solid objects.

**Undead Nature.** A phantom warrior doesn't require air, food, drink, or sleep.