---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/large
- monster/type/celestial
aliases: ["Linvala"]
statblock: true
"name": "Linvala"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "19"
"hp": !!int "200"
"hit_dice": "16d10 + 112"
"stats":
- !!int "24"
- !!int "20"
- !!int "24"
- !!int "19"
- !!int "22"
- !!int "25"
"speed": "walk 40 ft., fly 120 ft."
"saves":
  "Charisma": !!int "12"
  "Wisdom": !!int "11"
  "Constitution": !!int "12"
"skillsaves":
  "Perception": !!int "11"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "all, telepathy 120 ft."
"cr": "16"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Linvala's spellcasting ability is Charisma (spell save DC 20). Linvala\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [detect evil and good](/compendium/spells/detect-evil-and-good.md),\
    \ [invisibility](/compendium/spells/invisibility.md) (self only)\n\n1/day each:\
    \ [commune](/compendium/spells/commune.md), [control weather](/compendium/spells/control-weather.md),\
    \ [insect plague](/compendium/spells/insect-plague.md)\n\n3/day each: [blade\
    \ barrier](/compendium/spells/blade-barrier.md), [dispel evil and good](/compendium/spells/dispel-evil-and-good.md),\
    \ [flame strike](/compendium/spells/flame-strike.md), [raise dead](/compendium/spells/raise-dead.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Linvala's weapon attacks are magical. When Linvala hits with any weapon,\
    \ the weapon deals an extra 5d8 radiant damage (included in the attack)."
  "name": "Angelic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Linvala knows if it hears a lie."
  "name": "Divine Awareness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Linvala has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Linvala makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21 (4d6\
    \ + 7) slashing damage plus 22 (5d8) radiant damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Linvala touches another creature. The target magically regains 30 (6d8\
    \ + 3) hit points and is freed from any curse, disease, poison, blindness, or\
    \ deafness."
  "name": "Healing Touch (4/Day)"
"source":
- "PSZ"
name: Linvala
image: "[[Linvala.png]]"
---

# Linvala

```statblock
"name": "Linvala"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "19"
"hp": !!int "200"
"hit_dice": "16d10 + 112"
"stats":
- !!int "24"
- !!int "20"
- !!int "24"
- !!int "19"
- !!int "22"
- !!int "25"
"speed": "walk 40 ft., fly 120 ft."
"saves":
  "Charisma": !!int "12"
  "Wisdom": !!int "11"
  "Constitution": !!int "12"
"skillsaves":
  "Perception": !!int "11"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "all, telepathy 120 ft."
"cr": "16"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Linvala's spellcasting ability is Charisma (spell save DC 20). Linvala\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [detect evil and good](/compendium/spells/detect-evil-and-good.md),\
    \ [invisibility](/compendium/spells/invisibility.md) (self only)\n\n1/day each:\
    \ [commune](/compendium/spells/commune.md), [control weather](/compendium/spells/control-weather.md),\
    \ [insect plague](/compendium/spells/insect-plague.md)\n\n3/day each: [blade\
    \ barrier](/compendium/spells/blade-barrier.md), [dispel evil and good](/compendium/spells/dispel-evil-and-good.md),\
    \ [flame strike](/compendium/spells/flame-strike.md), [raise dead](/compendium/spells/raise-dead.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Linvala's weapon attacks are magical. When Linvala hits with any weapon,\
    \ the weapon deals an extra 5d8 radiant damage (included in the attack)."
  "name": "Angelic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Linvala knows if it hears a lie."
  "name": "Divine Awareness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Linvala has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Linvala makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21 (4d6\
    \ + 7) slashing damage plus 22 (5d8) radiant damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Linvala touches another creature. The target magically regains 30 (6d8\
    \ + 3) hit points and is freed from any curse, disease, poison, blindness, or\
    \ deafness."
  "name": "Healing Touch (4/Day)"
"source":
- "PSZ"
"image": "[[Linvala.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 21*