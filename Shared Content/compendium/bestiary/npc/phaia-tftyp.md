---
cssclass: json5e-monster
tags:
- compendium/src/tftyp
- monster/size/medium
- monster/type/humanoid/human
- monster/environment/desert
- monster/environment/urban
aliases: ["Phaia"]
statblock: true
"name": "Phaia"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "9"
- !!int "14"
- !!int "12"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "7"
"skillsaves":
  "History": !!int "7"
  "Arcana": !!int "7"
"damage_resistances": "necrotic"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Phaia is a 12th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 15, +7 to hit with spell attacks). Phaia has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [chill touch](/compendium/spells/chill-touch.md),\
    \ [dancing lights](/compendium/spells/dancing-lights.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [mending](/compendium/spells/mending.md)\n\n1st level (4 1st-level slots):\
    \ [false life](/compendium/spells/false-life.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [ray of sickness](/compendium/spells/ray-of-sickness.md)\n\n2nd level (3\
    \ 2nd-level slots): [blindness/deafness](/compendium/spells/blindness-deafness.md),\
    \ [ray of enfeeblement](/compendium/spells/ray-of-enfeeblement.md), [web](/compendium/spells/web.md)\n\
    \n3rd level (3 3rd-level slots): [animate dead](/compendium/spells/animate-dead.md),\
    \ [bestow curse](/compendium/spells/bestow-curse.md), [vampiric touch](/compendium/spells/vampiric-touch.md)\n\
    \n4th level (3 4th-level slots): [blight](/compendium/spells/blight.md),\
    \ [dimension door](/compendium/spells/dimension-door.md), [stoneskin](/compendium/spells/stoneskin.md)\n\
    \n5th level (2 5th-level slots): [Bigby's hand](/compendium/spells/bigbys-hand.md),\
    \ [cloudkill](/compendium/spells/cloudkill.md)\n\n6th level (1 6th-level slots):\
    \ [circle of death](/compendium/spells/circle-of-death.md)\nNecromancy spell\
    \ of 1st level or higher"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When necromancer kills a creature that is neither a construct nor undead\
    \ with a spell of 1st level or higher, Phaia regains hit points equal to twice\
    \ the spell's level, or three times if it is a necromancy spell."
  "name": "Grim Harvest (1/Turn)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +7 to hit, reach 5 ft., one creature. Hit: 5 (2d4)\
    \ necrotic damage."
  "name": "Withering Touch"
"source":
- "TftYP"
name: Phaia
image: "[[Phaia.png]]"
---

# Phaia

```statblock
"name": "Phaia"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "9"
- !!int "14"
- !!int "12"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "7"
"skillsaves":
  "History": !!int "7"
  "Arcana": !!int "7"
"damage_resistances": "necrotic"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "9"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Phaia is a 12th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 15, +7 to hit with spell attacks). Phaia has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [chill touch](/compendium/spells/chill-touch.md),\
    \ [dancing lights](/compendium/spells/dancing-lights.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [mending](/compendium/spells/mending.md)\n\n1st level (4 1st-level slots):\
    \ [false life](/compendium/spells/false-life.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [ray of sickness](/compendium/spells/ray-of-sickness.md)\n\n2nd level (3\
    \ 2nd-level slots): [blindness/deafness](/compendium/spells/blindness-deafness.md),\
    \ [ray of enfeeblement](/compendium/spells/ray-of-enfeeblement.md), [web](/compendium/spells/web.md)\n\
    \n3rd level (3 3rd-level slots): [animate dead](/compendium/spells/animate-dead.md),\
    \ [bestow curse](/compendium/spells/bestow-curse.md), [vampiric touch](/compendium/spells/vampiric-touch.md)\n\
    \n4th level (3 4th-level slots): [blight](/compendium/spells/blight.md),\
    \ [dimension door](/compendium/spells/dimension-door.md), [stoneskin](/compendium/spells/stoneskin.md)\n\
    \n5th level (2 5th-level slots): [Bigby's hand](/compendium/spells/bigbys-hand.md),\
    \ [cloudkill](/compendium/spells/cloudkill.md)\n\n6th level (1 6th-level slots):\
    \ [circle of death](/compendium/spells/circle-of-death.md)\nNecromancy spell\
    \ of 1st level or higher"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When necromancer kills a creature that is neither a construct nor undead\
    \ with a spell of 1st level or higher, Phaia regains hit points equal to twice\
    \ the spell's level, or three times if it is a necromancy spell."
  "name": "Grim Harvest (1/Turn)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Spell Attack: +7 to hit, reach 5 ft., one creature. Hit: 5 (2d4)\
    \ necrotic damage."
  "name": "Withering Touch"
"source":
- "TftYP"
"image": "[[Phaia.png]]"
```
^statblock

*Source: Tales from the Yawning Portal p. 132*

## Environment

desert, urban