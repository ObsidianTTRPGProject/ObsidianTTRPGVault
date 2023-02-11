---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/huge
- monster/type/dragon
aliases: ["Adult Solar Dragon"]
statblock: true
"name": "Adult Solar Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "17"
"hp": !!int "200"
"hit_dice": "16d12 + 96"
"stats":
- !!int "24"
- !!int "15"
- !!int "22"
- !!int "15"
- !!int "16"
- !!int "14"
"speed": "walk 30 ft., fly 90 ft. (hover)"
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "7"
  "Wisdom": !!int "8"
  "Constitution": !!int "11"
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "13"
"damage_immunities": "radiant"
"condition_immunities": "blinded"
"senses": "darkvision 180 ft., passive Perception 23"
"languages": "Draconic"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon doesn't provoke opportunity attacks when it flies out of an\
    \ enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical attempts to read the dragon's mind or glean its thoughts fail automatically."
  "name": "Nebulous Thoughts"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon deals double damage to objects and structures."
  "name": "Siege Monster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon doesn't require air."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and one Tail attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 14 (2d6\
    \ + 7) piercing damage plus 7 (2d6) radiant damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 20 ft., one target. Hit: 10 (1d6\
    \ + 7) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a flashing mote of radiant energy that travels to a\
    \ point the dragon can see within 180 feet of itself, then blossoms into a 30-foot-radius\
    \ sphere centered on that point. Each creature in the sphere must make a DC 19\
    \ Constitution saving throw, taking 55 (10d10) radiant damage on a failed save,\
    \ or half as much damage on a successful one."
  "name": "Photonic Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon emits magical light in a 30-foot-radius sphere centered on itself.\
    \ Each creature in this area must succeed on a DC 23 Wisdom saving throw or be\
    \ [blinded](/rules/conditions.md#blinded) until the end of its next turn."
  "name": "Blinding Brilliance (Costs 2 Actions)"
"source":
- "BAM"
name: Adult Solar Dragon
image: "[[Adult Solar Dragon.png]]"
---

# Adult Solar Dragon

```statblock
"name": "Adult Solar Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "17"
"hp": !!int "200"
"hit_dice": "16d12 + 96"
"stats":
- !!int "24"
- !!int "15"
- !!int "22"
- !!int "15"
- !!int "16"
- !!int "14"
"speed": "walk 30 ft., fly 90 ft. (hover)"
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "7"
  "Wisdom": !!int "8"
  "Constitution": !!int "11"
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "13"
"damage_immunities": "radiant"
"condition_immunities": "blinded"
"senses": "darkvision 180 ft., passive Perception 23"
"languages": "Draconic"
"cr": "14"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon doesn't provoke opportunity attacks when it flies out of an\
    \ enemy's reach."
  "name": "Flyby"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Magical attempts to read the dragon's mind or glean its thoughts fail automatically."
  "name": "Nebulous Thoughts"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon deals double damage to objects and structures."
  "name": "Siege Monster"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon doesn't require air."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Bite attack and one Tail attack."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 14 (2d6\
    \ + 7) piercing damage plus 7 (2d6) radiant damage."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 20 ft., one target. Hit: 10 (1d6\
    \ + 7) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon exhales a flashing mote of radiant energy that travels to a\
    \ point the dragon can see within 180 feet of itself, then blossoms into a 30-foot-radius\
    \ sphere centered on that point. Each creature in the sphere must make a DC 19\
    \ Constitution saving throw, taking 55 (10d10) radiant damage on a failed save,\
    \ or half as much damage on a successful one."
  "name": "Photonic Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon makes one Tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The dragon emits magical light in a 30-foot-radius sphere centered on itself.\
    \ Each creature in this area must succeed on a DC 23 Wisdom saving throw or be\
    \ [blinded](/rules/conditions.md#blinded) until the end of its next turn."
  "name": "Blinding Brilliance (Costs 2 Actions)"
"source":
- "BAM"
"image": "[[Adult Solar Dragon.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 52*

## Description

A solar dragon (also known as a radiant dragon or a sun dragon) is born in the heart of a star. It divides its time outside its lair between patrolling its territory and hunting for food. The dragon has a serpentine body, a pair of ventral limbs ending in long fins, nebulous wings that give off light, and gleaming, multicolored scales. It can see clearly even in blindingly bright light.

Solar dragons are fond of treasure just as all dragons are, but in the airless void of Wildspace, they value food even more. Solar dragons typically feed on kindori, scavvers, and other forms of space-dwelling wildlife. A solar dragon might mistake a distant spelljamming ship for possible prey and come within range of the vessel's weapons before realizing its error and veering away. A wise or experienced captain won't take the dragon's approach as a sign of hostility. Solar dragons that are fired upon have been known to batter the offending ships to flinders.

Solar dragons are territorial carnivores, and they behave accordingly. A young solar dragon might lay claim to an asteroid belt, where food is relatively plentiful, while an ancient solar dragon might consider an entire Wildspace system its hunting ground. They tend to give a wide berth to Humanoid folk, whom they find violent and tiresome. Trespassers who are detected in a solar dragon's lair can expect to be met with resistance, followed by hostility, especially if the lair contains eggs.

A solar dragon egg has an obsidian shell, shiny black and opaque. When an egg is close to hatching, the shell becomes translucent, allowing the light from the unborn wyrmling's wings to shine through.

**A Solar Dragon's Lair.** A solar dragon customarily lairs in a star's radiant core or nests in a gigantic, hollowed-out rock engulfed by the star's blinding radiance. A star in which a solar dragon makes its lair has the following effects on creatures:

- **Blinding Radiance..** A creature that is within 10 miles of the star or inside it is blinded by its intense light unless the creature has protective gear to shield its eyes, such as goggles of night or a similar form of eyewear.
- **Stellar Incineration..** Any creature that enters the star or starts its turn inside it takes 132 (24d10) radiant damage.