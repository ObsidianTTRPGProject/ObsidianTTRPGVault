---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/medium
- monster/type/dragon
aliases: ["Solar Dragon Wyrmling"]
statblock: true
"name": "Solar Dragon Wyrmling"
"size": "Medium"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "51"
"hit_dice": "6d8 + 24"
"stats":
- !!int "16"
- !!int "15"
- !!int "18"
- !!int "11"
- !!int "12"
- !!int "10"
"speed": "walk 20 ft., fly 40 ft. (hover)"
"saves":
  "Charisma": !!int "2"
  "Dexterity": !!int "4"
  "Wisdom": !!int "3"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
"damage_immunities": "radiant"
"condition_immunities": "blinded"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Draconic"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon doesn't provoke opportunity attacks when it flies out of an\
    \ enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon doesn't require air."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and one Tail attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage plus 3 (1d6) radiant damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 5 (1d4\
    \ + 3) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a flashing mote of radiant energy that travels to a\
    \ point the dragon can see within 120 feet of itself, then blossoms into a 10-foot-radius\
    \ sphere centered on that point. Each creature in the sphere must make a DC 14\
    \ Constitution saving throw, taking 22 (4d10) radiant damage on a failed save,\
    \ or half as much damage on a successful one."
  "name": "Photonic Breath (Recharge 5-6)"
"source":
- "BAM"
name: Solar Dragon Wyrmling
image: "[[Solar Dragon Wyrmling.png]]"
---

# Solar Dragon Wyrmling

```statblock
"name": "Solar Dragon Wyrmling"
"size": "Medium"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "51"
"hit_dice": "6d8 + 24"
"stats":
- !!int "16"
- !!int "15"
- !!int "18"
- !!int "11"
- !!int "12"
- !!int "10"
"speed": "walk 20 ft., fly 40 ft. (hover)"
"saves":
  "Charisma": !!int "2"
  "Dexterity": !!int "4"
  "Wisdom": !!int "3"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
"damage_immunities": "radiant"
"condition_immunities": "blinded"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Draconic"
"cr": "3"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon doesn't provoke opportunity attacks when it flies out of an\
    \ enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon doesn't require air."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and one Tail attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage plus 3 (1d6) radiant damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 5 (1d4\
    \ + 3) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a flashing mote of radiant energy that travels to a\
    \ point the dragon can see within 120 feet of itself, then blossoms into a 10-foot-radius\
    \ sphere centered on that point. Each creature in the sphere must make a DC 14\
    \ Constitution saving throw, taking 22 (4d10) radiant damage on a failed save,\
    \ or half as much damage on a successful one."
  "name": "Photonic Breath (Recharge 5-6)"
"source":
- "BAM"
"image": "[[Solar Dragon Wyrmling.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 53*

## Description

A solar dragon (also known as a radiant dragon or a sun dragon) is born in the heart of a star. It divides its time outside its lair between patrolling its territory and hunting for food. The dragon has a serpentine body, a pair of ventral limbs ending in long fins, nebulous wings that give off light, and gleaming, multicolored scales. It can see clearly even in blindingly bright light.

Solar dragons are fond of treasure just as all dragons are, but in the airless void of Wildspace, they value food even more. Solar dragons typically feed on kindori, scavvers, and other forms of space-dwelling wildlife. A solar dragon might mistake a distant spelljamming ship for possible prey and come within range of the vessel's weapons before realizing its error and veering away. A wise or experienced captain won't take the dragon's approach as a sign of hostility. Solar dragons that are fired upon have been known to batter the offending ships to flinders.

Solar dragons are territorial carnivores, and they behave accordingly. A young solar dragon might lay claim to an asteroid belt, where food is relatively plentiful, while an ancient solar dragon might consider an entire Wildspace system its hunting ground. They tend to give a wide berth to Humanoid folk, whom they find violent and tiresome. Trespassers who are detected in a solar dragon's lair can expect to be met with resistance, followed by hostility, especially if the lair contains eggs.

A solar dragon egg has an obsidian shell, shiny black and opaque. When an egg is close to hatching, the shell becomes translucent, allowing the light from the unborn wyrmling's wings to shine through.