---
cssclass: json5e-monster
tags:
- compendium/src/hotdq
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Rath Modar"]
statblock: true
"name": "Rath Modar"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"stats":
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "18"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "7"
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "6"
  "Insight": !!int "5"
  "Arcana": !!int "7"
"senses": "passive Perception 12"
"languages": "Common, Draconic, Infernal, Primordial, Thayan"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rath is an 11th-level spellcaster who uses Intelligence as his spellcasting\
    \ ability (spell save DC 15, +7 to hit with spell attacks). Rath has the following\
    \ spells prepared from the wizard spell list:\n\nCantrips (at will): [fire\
    \ bolt](/compendium/spells/fire-bolt.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st level (4 1st-level slots): [chromatic orb](/compendium/spells/chromatic-orb.md),\
    \ [color spray](/compendium/spells/color-spray.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [magic missile](/compendium/spells/magic-missile.md)\n\n2nd level (3 2nd-level\
    \ slots): [detect thoughts](/compendium/spells/detect-thoughts.md), [mirror\
    \ image](/compendium/spells/mirror-image.md), [phantasmal force](/compendium/spells/phantasmal-force.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [fireball](/compendium/spells/fireball.md), [major image](/compendium/spells/major-image.md)\n\
    \n4th level (3 4th-level slots): [confusion](/compendium/spells/confusion.md),\
    \ [greater invisibility](/compendium/spells/greater-invisibility.md)\n\n5th\
    \ level (2 5th-level slots): [mislead](/compendium/spells/mislead.md), [seeming](/compendium/spells/seeming.md)\n\
    \n6th level (1 6th-level slots): [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rath has a [staff of fire](/compendium/items/staff-of-fire.md), and scrolls\
    \ of [dimension door](/compendium/spells/dimension-door.md), [feather fall](/compendium/spells/feather-fall.md),\
    \ and [fireball](/compendium/spells/fireball.md)."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d8)\
    \ bludgeoning damage."
  "name": "Quarterstaff"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature Rath can see makes an attack roll against him, he can interpose\
    \ an illusory duplicate between the attacker and him. The attack automatically\
    \ misses Rath, then the illusion dissipates."
  "name": "Illusory Self (Recharges on a Short or Long Rest)"
"source":
- "HotDQ"
- "RoT"
- "ToD"
name: Rath Modar
image: "[[Rath Modar.png]]"
---

# Rath Modar

```statblock
"name": "Rath Modar"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"stats":
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "18"
- !!int "14"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "5"
  "Intelligence": !!int "7"
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "6"
  "Insight": !!int "5"
  "Arcana": !!int "7"
"senses": "passive Perception 12"
"languages": "Common, Draconic, Infernal, Primordial, Thayan"
"cr": "6"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rath is an 11th-level spellcaster who uses Intelligence as his spellcasting\
    \ ability (spell save DC 15, +7 to hit with spell attacks). Rath has the following\
    \ spells prepared from the wizard spell list:\n\nCantrips (at will): [fire\
    \ bolt](/compendium/spells/fire-bolt.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [shocking grasp](/compendium/spells/shocking-grasp.md)\n\
    \n1st level (4 1st-level slots): [chromatic orb](/compendium/spells/chromatic-orb.md),\
    \ [color spray](/compendium/spells/color-spray.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [magic missile](/compendium/spells/magic-missile.md)\n\n2nd level (3 2nd-level\
    \ slots): [detect thoughts](/compendium/spells/detect-thoughts.md), [mirror\
    \ image](/compendium/spells/mirror-image.md), [phantasmal force](/compendium/spells/phantasmal-force.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [fireball](/compendium/spells/fireball.md), [major image](/compendium/spells/major-image.md)\n\
    \n4th level (3 4th-level slots): [confusion](/compendium/spells/confusion.md),\
    \ [greater invisibility](/compendium/spells/greater-invisibility.md)\n\n5th\
    \ level (2 5th-level slots): [mislead](/compendium/spells/mislead.md), [seeming](/compendium/spells/seeming.md)\n\
    \n6th level (1 6th-level slots): [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Rath has a [staff of fire](/compendium/items/staff-of-fire.md), and scrolls\
    \ of [dimension door](/compendium/spells/dimension-door.md), [feather fall](/compendium/spells/feather-fall.md),\
    \ and [fireball](/compendium/spells/fireball.md)."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d8)\
    \ bludgeoning damage."
  "name": "Quarterstaff"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When a creature Rath can see makes an attack roll against him, he can interpose\
    \ an illusory duplicate between the attacker and him. The attack automatically\
    \ misses Rath, then the illusion dissipates."
  "name": "Illusory Self (Recharges on a Short or Long Rest)"
"source":
- "HotDQ"
- "RoT"
- "ToD"
"image": "[[Rath Modar.png]]"
```
^statblock

*Source: Hoard of the Dragon Queen p. 92, The Rise of Tiamat p. 91, Tyranny of Dragons p. 188*