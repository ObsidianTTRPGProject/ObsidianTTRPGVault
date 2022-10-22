---
cssclass: json5e-monster
tags:
- compendium/src/wdh
- monster/size/medium
- monster/type/humanoid/human
- monster/environment/urban
aliases: ["Mattrim Threestrings Mereg"]
statblock: true
"name": "Mattrim Threestrings Mereg"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Good"
"ac": !!int "15"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "13"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "3"
"skillsaves":
  "Perception": !!int "5"
  "Performance": !!int "6"
  "Acrobatics": !!int "4"
"senses": "passive Perception 15"
"languages": "any two languages"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mattrim is a 4th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 12, +4 to hit with spell attacks). It has the following bard\
    \ spells prepared:\n\nCantrips (at will): [friends](/compendium/spells/friends.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [vicious mockery](/compendium/spells/vicious-mockery.md)\n\
    \n1st level (4 1st-level slots): [charm person](/compendium/spells/charm-person.md),\
    \ [healing word](/compendium/spells/healing-word.md), [heroism](/compendium/spells/heroism.md),\
    \ [sleep](/compendium/spells/sleep.md), [thunderwave](/compendium/spells/thunderwave.md)\n\
    \n2nd level (3 2nd-level slots): [invisibility](/compendium/spells/invisibility.md),\
    \ [shatter](/compendium/spells/shatter.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mattrim can perform a song while taking a short rest. Any ally who hears\
    \ the song regains an extra 1d6 hit points if it spends any Hit Dice to regain\
    \ hit points at the end of that rest. Mattrim can confer this benefit on itself\
    \ as well."
  "name": "Song of Rest"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mattrim can use a bonus action on its turn to target one creature within\
    \ 30 feet of it. If the target can hear Mattrim, the target must succeed on a\
    \ DC 12 Charisma saving throw or have disadvantage on ability checks, attack rolls,\
    \ and saving throws until the start of Mattrim's next turn."
  "name": "Taunt (2/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Shortbow"
"source":
- "WDH"
name: Mattrim Threestrings Mereg
image: "[[Mattrim Threestrings Mereg.png]]"
---

# Mattrim Threestrings Mereg

```statblock
"name": "Mattrim Threestrings Mereg"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Good"
"ac": !!int "15"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "13"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "3"
"skillsaves":
  "Perception": !!int "5"
  "Performance": !!int "6"
  "Acrobatics": !!int "4"
"senses": "passive Perception 15"
"languages": "any two languages"
"cr": "2"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mattrim is a 4th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 12, +4 to hit with spell attacks). It has the following bard\
    \ spells prepared:\n\nCantrips (at will): [friends](/compendium/spells/friends.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [vicious mockery](/compendium/spells/vicious-mockery.md)\n\
    \n1st level (4 1st-level slots): [charm person](/compendium/spells/charm-person.md),\
    \ [healing word](/compendium/spells/healing-word.md), [heroism](/compendium/spells/heroism.md),\
    \ [sleep](/compendium/spells/sleep.md), [thunderwave](/compendium/spells/thunderwave.md)\n\
    \n2nd level (3 2nd-level slots): [invisibility](/compendium/spells/invisibility.md),\
    \ [shatter](/compendium/spells/shatter.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mattrim can perform a song while taking a short rest. Any ally who hears\
    \ the song regains an extra 1d6 hit points if it spends any Hit Dice to regain\
    \ hit points at the end of that rest. Mattrim can confer this benefit on itself\
    \ as well."
  "name": "Song of Rest"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Mattrim can use a bonus action on its turn to target one creature within\
    \ 30 feet of it. If the target can hear Mattrim, the target must succeed on a\
    \ DC 12 Charisma saving throw or have disadvantage on ability checks, attack rolls,\
    \ and saving throws until the start of Mattrim's next turn."
  "name": "Taunt (2/Day)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5\
    \ (1d6 + 2) piercing damage."
  "name": "Shortbow"
"source":
- "WDH"
"image": "[[Mattrim Threestrings Mereg.png]]"
```
^statblock

*Source: Waterdeep: Dragon Heist p. 20*

## Environment

urban