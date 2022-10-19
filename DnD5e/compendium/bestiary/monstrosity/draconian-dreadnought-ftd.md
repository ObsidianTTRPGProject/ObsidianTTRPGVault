---
cssclass: json5e-monster
tags:
- compendium/src/ftd
- monster/size/large
- monster/type/monstrosity
aliases: ["Draconian Dreadnought"]
statblock: true
"name": "Draconian Dreadnought"
"size": "Large"
"type": "monstrosity"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "57"
"hit_dice": "6d10 + 24"
"stats":
- !!int "18"
- !!int "10"
- !!int "18"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft., fly 60 ft."
"saves":
  "Wisdom": !!int "2"
  "Strength": !!int "6"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Draconic"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the draconian is reduced to 0 hit points, it bursts into flames and\
    \ is reduced to ashes. Each creature in a 10-foot-radius sphere centered on the\
    \ draconian must succeed on a DC 13 Dexterity saving throw or take 10 (3d6) fire\
    \ damage."
  "name": "Death Throes"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The draconian makes two Serrated Sword attacks and one Tail attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage."
  "name": "Serrated Sword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) bludgeoning damage. If the target is a Large or smaller creature, it must\
    \ succeed on a DC 14 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "After the draconian kills a Medium or smaller Humanoid, the draconian can\
    \ magically transform itself to look and feel like that creature while retaining\
    \ its game statistics (other than its size). This transformation lasts until the\
    \ draconian dies or uses an action to end it."
  "name": "Shape Theft"
"source":
- "FTD"
name: Draconian Dreadnought
image: "[[Draconian Dreadnought.png]]"
---

# Draconian Dreadnought

```statblock
"name": "Draconian Dreadnought"
"size": "Large"
"type": "monstrosity"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "57"
"hit_dice": "6d10 + 24"
"stats":
- !!int "18"
- !!int "10"
- !!int "18"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft., fly 60 ft."
"saves":
  "Wisdom": !!int "2"
  "Strength": !!int "6"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Draconic"
"cr": "4"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When the draconian is reduced to 0 hit points, it bursts into flames and\
    \ is reduced to ashes. Each creature in a 10-foot-radius sphere centered on the\
    \ draconian must succeed on a DC 13 Dexterity saving throw or take 10 (3d6) fire\
    \ damage."
  "name": "Death Throes"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The draconian makes two Serrated Sword attacks and one Tail attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage."
  "name": "Serrated Sword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) bludgeoning damage. If the target is a Large or smaller creature, it must\
    \ succeed on a DC 14 Strength saving throw or be knocked [prone](/rules/conditions.md#prone)."
  "name": "Tail"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "After the draconian kills a Medium or smaller Humanoid, the draconian can\
    \ magically transform itself to look and feel like that creature while retaining\
    \ its game statistics (other than its size). This transformation lasts until the\
    \ draconian dies or uses an action to end it."
  "name": "Shape Theft"
"source":
- "FTD"
"image": "[[Draconian Dreadnought.png]]"
```
^statblock

*Source: Fizban's Treasury of Dragons p. 177*

## Description

The largest of the draconians are the dreadnoughts, who are born from the eggs of silver, blue, or sapphire dragons. They fly on mighty wings over the battlefield to wherever the fighting is the thickest. Their magical ability to change their appearance to mimic those they've slain allows them to sow confusion and despair among their enemies. When dreadnoughts are killed, their bodies burst into flames, scorching everything around them.

On the world of Krynn, draconian dreadnoughts formed from silver dragon eggs are called sivak draconians.

**Draconians.** Draconians are bipedal monsters born from dragon eggs that have been corrupted or warped by powerful magic. Most often, this corruption is a deliberate act, the work of an aspiring tyrant seeking to transform stolen eggs into a draconian army. A single corrupted egg yields several draconians of the same kind. A draconian might be taken for a dragonborn at first glance, though most kinds of draconians have wings.

When draconians die, they do not go quietly. Instead, their lifeless bodies unleash a last act of magical violence.