---
cssclass: json5e-monster
tags:
- compendium/src/bam
- monster/size/medium
- monster/type/celestial
aliases: ["Reigar"]
statblock: true
"name": "Reigar"
"size": "Medium"
"type": "celestial"
"alignment": "Chaotic Neutral"
"ac": !!int "19"
"hp": !!int "82"
"hit_dice": "15d8 + 15"
"stats":
- !!int "18"
- !!int "15"
- !!int "12"
- !!int "19"
- !!int "16"
- !!int "24"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Charisma": !!int "10"
  "Dexterity": !!int "5"
  "Wisdom": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "History": !!int "7"
  "Performance": !!int "10"
  "Arcana": !!int "7"
  "Persuasion": !!int "10"
"senses": "passive Perception 13"
"languages": "Celestial, Common, Deep Speech, Draconic"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The reigar casts one of the following spells, requiring no spell components\
    \ and using Charisma as the spellcasting ability (spell save DC 18):\n\nAt will:\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1/day each:\
    \ [mass suggestion](/compendium/spells/mass-suggestion.md), [sending](/compendium/spells/sending.md)\n\
    \n2/day each: [dimension door](/compendium/spells/dimension-door.md), [phantasmal\
    \ force](/compendium/spells/phantasmal-force.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The reigar's Armor Class includes its Charisma modifier."
  "name": "Glory"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The reigar can hold its breath for 1 hour."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The reigar wears a talarith."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The reigar makes two Trident attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage\
    \ if used with two hands to make a melee attack, plus 3 (1d6) force damage if\
    \ the reigar is wearing its talarith."
  "name": "Trident"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +10 to hit, range 90 ft., one target. Hit: 22 (5d8)\
    \ damage of a type chosen by the reigar from the following list: cold, fire, lightning,\
    \ or radiant."
  "name": "Chromatic Bolt"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Using its talarith, the reigar summons a golem-like duplicate of itself.\
    \ The duplicate obeys the reigar's commands and uses the reigar's statistics,\
    \ except it is an unaligned Construct that doesn't have a talarith of its own.\
    \ The duplicate takes its turn immediately after the reigar. It vanishes after\
    \ 1 hour or when it is reduced to 0 hit points."
  "name": "Summon Golem (Recharges after a Short or Long Rest)"
"source":
- "BAM"
- "LoX"
name: Reigar
image: "[[Reigar.png]]"
---

# Reigar

```statblock
"name": "Reigar"
"size": "Medium"
"type": "celestial"
"alignment": "Chaotic Neutral"
"ac": !!int "19"
"hp": !!int "82"
"hit_dice": "15d8 + 15"
"stats":
- !!int "18"
- !!int "15"
- !!int "12"
- !!int "19"
- !!int "16"
- !!int "24"
"speed": "walk 30 ft., swim 30 ft."
"saves":
  "Charisma": !!int "10"
  "Dexterity": !!int "5"
  "Wisdom": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "History": !!int "7"
  "Performance": !!int "10"
  "Arcana": !!int "7"
  "Persuasion": !!int "10"
"senses": "passive Perception 13"
"languages": "Celestial, Common, Deep Speech, Draconic"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The reigar casts one of the following spells, requiring no spell components\
    \ and using Charisma as the spellcasting ability (spell save DC 18):\n\nAt will:\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1/day each:\
    \ [mass suggestion](/compendium/spells/mass-suggestion.md), [sending](/compendium/spells/sending.md)\n\
    \n2/day each: [dimension door](/compendium/spells/dimension-door.md), [phantasmal\
    \ force](/compendium/spells/phantasmal-force.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The reigar's Armor Class includes its Charisma modifier."
  "name": "Glory"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The reigar can hold its breath for 1 hour."
  "name": "Hold Breath"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The reigar wears a talarith."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The reigar makes two Trident attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage\
    \ if used with two hands to make a melee attack, plus 3 (1d6) force damage if\
    \ the reigar is wearing its talarith."
  "name": "Trident"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Spell Attack: +10 to hit, range 90 ft., one target. Hit: 22 (5d8)\
    \ damage of a type chosen by the reigar from the following list: cold, fire, lightning,\
    \ or radiant."
  "name": "Chromatic Bolt"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Using its talarith, the reigar summons a golem-like duplicate of itself.\
    \ The duplicate obeys the reigar's commands and uses the reigar's statistics,\
    \ except it is an unaligned Construct that doesn't have a talarith of its own.\
    \ The duplicate takes its turn immediately after the reigar. It vanishes after\
    \ 1 hour or when it is reduced to 0 hit points."
  "name": "Summon Golem (Recharges after a Short or Long Rest)"
"source":
- "BAM"
- "LoX"
"image": "[[Reigar.png]]"
```
^statblock

*Source: Boo's Astral Menagerie p. 47, Light of Xaryxis*

## Description

Reigar are androgynous folk who evolved into a humanoid shape from a species of cephalopods similar to octopi. They have bioluminescent freckles and the ability to change the coloration of their skin. A glory (or halo) surrounds each of them. This magical display is a cloud of twinkling, glittering motes that changes color randomly and repels attacks.

Reigar don't trust one another, which has been the case ever since they destroyed their home world in a war that ended with a cataclysmic event called the Master Stroke. The planet's destruction was the culmination of a plot to create the most beautiful display of carnage the multiverse had ever seen. Reigar exist solely to make art and wage war. They consider warfare to be the highest form of artistic endeavor, and every act of violence they commit is done with the intent of creating something beautiful.

Reigar wander Wildspace and the Astral Sea in search of artistic inspiration, traveling in symbiotic organic ships that they create (see " Esthetic "). Each reigar possesses a magic item called a talarith, which it created and to which it alone can attune. If this object is lost or destroyed, it takes 1d20 + 20 days for the reigar to craft another one.