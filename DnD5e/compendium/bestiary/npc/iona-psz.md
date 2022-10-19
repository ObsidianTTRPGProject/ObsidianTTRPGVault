---
cssclass: json5e-monster
tags:
- compendium/src/psz
- monster/size/large
- monster/type/celestial
aliases: ["Iona"]
statblock: true
"name": "Iona"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "21"
"hp": !!int "243"
"hit_dice": "18d10 + 144"
"stats":
- !!int "26"
- !!int "22"
- !!int "26"
- !!int "25"
- !!int "25"
- !!int "30"
"speed": "walk 50 ft., fly 150 ft."
"saves":
  "Charisma": !!int "17"
  "Wisdom": !!int "14"
  "Intelligence": !!int "14"
"skillsaves":
  "Perception": !!int "14"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "all, telepathy 120 ft."
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Iona's spellcasting ability is Charisma (spell save DC 25). It can innately\
    \ cast the following spells, requiring no material components:\n\nAt will:\
    \ [detect evil and good](/compendium/spells/detect-evil-and-good.md), [invisibility](/compendium/spells/invisibility.md)\
    \ (self only)\n\n1/day each: [commune](/compendium/spells/commune.md), [control\
    \ weather](/compendium/spells/control-weather.md)\n\n3/day each: [blade barrier](/compendium/spells/blade-barrier.md),\
    \ [dispel evil and good](/compendium/spells/dispel-evil-and-good.md), [resurrection](/compendium/spells/resurrection.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Iona's weapon attacks are magical. When Iona hits with any weapon, the\
    \ weapon deals an extra 6d8 radiant damage (included in the attack)."
  "name": "Angelic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Iona knows if it hears a lie."
  "name": "Divine Awareness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Iona has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Iona makes two greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 22 (4d6\
    \ + 8) slashing damage plus 27 (6d8) radiant damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +13 to hit, range 150/600 ft., one target. Hit:\
    \ 15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is\
    \ a creature that has 100 hit points or fewer, it must succeed on a DC 15 Constitution\
    \ saving throw or die."
  "name": "Slaying Longbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Iona releases its greatsword to hover magically in an unoccupied space\
    \ within 5 feet of it. If Iona can see the sword, Iona can mentally command it\
    \ as a bonus action to fly up to 50 feet and either make one attack against a\
    \ target or return to Iona's hands. If the hovering sword is targeted by any effect,\
    \ Iona is considered to be holding it. The hovering sword falls if Iona dies."
  "name": "Flying Sword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Iona touches another creature. The target magically regains 40 (8d8 + 4)\
    \ hit points and is freed from any curse, disease, poison, blindness, or deafness."
  "name": "Healing Touch (4/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Iona magically teleports, along with any equipment it is wearing or carrying,\
    \ up to 120 feet to an unoccupied space it can see."
  "name": "Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Iona emits magical, divine energy. Each creature of its choice in a 10-foot\
    \ radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage\
    \ plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Searing Burst (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Iona targets one creature it can see within 30 feet of it. If the target\
    \ can see it, the target must succeed on a DC 15 Constitution saving throw or\
    \ be [blinded](/rules/conditions.md#blinded) until magic such as the [lesser restoration](/compendium/spells/lesser-restoration.md)\
    \ spell removes the blindness."
  "name": "Blinding Gaze (Costs 3 Actions)"
"source":
- "PSZ"
name: Iona
image: "[[Iona.png]]"
---

# Iona

```statblock
"name": "Iona"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "21"
"hp": !!int "243"
"hit_dice": "18d10 + 144"
"stats":
- !!int "26"
- !!int "22"
- !!int "26"
- !!int "25"
- !!int "25"
- !!int "30"
"speed": "walk 50 ft., fly 150 ft."
"saves":
  "Charisma": !!int "17"
  "Wisdom": !!int "14"
  "Intelligence": !!int "14"
"skillsaves":
  "Perception": !!int "14"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "all, telepathy 120 ft."
"cr": "21"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Iona's spellcasting ability is Charisma (spell save DC 25). It can innately\
    \ cast the following spells, requiring no material components:\n\nAt will:\
    \ [detect evil and good](/compendium/spells/detect-evil-and-good.md), [invisibility](/compendium/spells/invisibility.md)\
    \ (self only)\n\n1/day each: [commune](/compendium/spells/commune.md), [control\
    \ weather](/compendium/spells/control-weather.md)\n\n3/day each: [blade barrier](/compendium/spells/blade-barrier.md),\
    \ [dispel evil and good](/compendium/spells/dispel-evil-and-good.md), [resurrection](/compendium/spells/resurrection.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Iona's weapon attacks are magical. When Iona hits with any weapon, the\
    \ weapon deals an extra 6d8 radiant damage (included in the attack)."
  "name": "Angelic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Iona knows if it hears a lie."
  "name": "Divine Awareness"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Iona has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Iona makes two greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 22 (4d6\
    \ + 8) slashing damage plus 27 (6d8) radiant damage."
  "name": "Greatsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +13 to hit, range 150/600 ft., one target. Hit:\
    \ 15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is\
    \ a creature that has 100 hit points or fewer, it must succeed on a DC 15 Constitution\
    \ saving throw or die."
  "name": "Slaying Longbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Iona releases its greatsword to hover magically in an unoccupied space\
    \ within 5 feet of it. If Iona can see the sword, Iona can mentally command it\
    \ as a bonus action to fly up to 50 feet and either make one attack against a\
    \ target or return to Iona's hands. If the hovering sword is targeted by any effect,\
    \ Iona is considered to be holding it. The hovering sword falls if Iona dies."
  "name": "Flying Sword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Iona touches another creature. The target magically regains 40 (8d8 + 4)\
    \ hit points and is freed from any curse, disease, poison, blindness, or deafness."
  "name": "Healing Touch (4/Day)"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Iona magically teleports, along with any equipment it is wearing or carrying,\
    \ up to 120 feet to an unoccupied space it can see."
  "name": "Teleport"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Iona emits magical, divine energy. Each creature of its choice in a 10-foot\
    \ radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage\
    \ plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Searing Burst (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Iona targets one creature it can see within 30 feet of it. If the target\
    \ can see it, the target must succeed on a DC 15 Constitution saving throw or\
    \ be [blinded](/rules/conditions.md#blinded) until magic such as the [lesser restoration](/compendium/spells/lesser-restoration.md)\
    \ spell removes the blindness."
  "name": "Blinding Gaze (Costs 3 Actions)"
"source":
- "PSZ"
"image": "[[Iona.png]]"
```
^statblock

*Source: Plane Shift: Zendikar p. 21*