---
cssclass: json5e-monster
tags:
- compendium/src/rot
- monster/size/gargantuan
- monster/type/fiend
aliases: ["Tiamat"]
statblock: true
"name": "Tiamat"
"size": "Gargantuan"
"type": "fiend"
"alignment": "Chaotic Evil"
"ac": !!int "25"
"hp": !!int "615"
"hit_dice": "30d20 + 300"
"stats":
- !!int "30"
- !!int "10"
- !!int "30"
- !!int "26"
- !!int "26"
- !!int "28"
"speed": "walk 60 ft., fly 120 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "17"
  "Strength": !!int "19"
"skillsaves":
  "Religion": !!int "17"
  "Perception": !!int "26"
  "Arcana": !!int "17"
"damage_immunities": "acid; cold; fire; lightning; poison; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"condition_immunities": "blinded, charmed, deafened, frightened, poisoned, stunned"
"senses": "darkvision 240 ft., truesight 120 ft., passive Perception 36"
"languages": "Common, Draconic, Infernal"
"cr": "30"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tiamat can innately cast the following spell, her spellcasting ability\
    \ is Charisma (spell save DC 26):\n\n3/day: [divine word](/compendium/spells/divine-word.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Tiamat drops to 0 hit points or dies, her body is destroyed but her\
    \ essence travels back to her domain in the Nine Hells, and she is unable to take\
    \ physical form for a time."
  "name": "Discorporation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Tiamat fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (5/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Unless she wishes to be affected, Tiamat is immune to spells of 6th level\
    \ or lower. She has advantage on saving throws against all other spells and magical\
    \ effects."
  "name": "Limited Magic Immunity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tiamat's weapon attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tiamat can take one reaction per turn, rather than only one per round.\
    \ She also has advantage on saving throws against being knocked [unconscious](/rules/conditions.md#unconscious).\
    \ If she fails a saving throw against an effect that would stun a creature, one\
    \ of her unspent legendary actions is spent."
  "name": "Multiple Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tiamat regains 30 hit points at the start of her turn."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tiamat can use her Frightful Presence. She then makes three attacks: two\
    \ with her claws and one with her tail."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 24 (4d6\
    \ + 10) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 25 ft., one target. Hit: 28 (4d8\
    \ + 10) piercing damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Tiamat's choice that is within 240 feet of Tiamat and\
    \ aware of her must succeed on a DC 26 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Tiamat's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 32 (4d10\
    \ + 10) slashing damage plus 14 (4d6) acid damage (black dragon head), lightning\
    \ damage (blue dragon head), poison damage (green dragon head), fire damage (red\
    \ dragon head), or cold damage (white dragon head)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tiamat breathes acid in a 120-foot line that is 10 feet wide. Each creature\
    \ in that line must make a DC 27 Dexterity saving throw, taking 67 (15d8) acid\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Black Dragon Head: Acid Breath (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tiamat breathes lightning in a 120-foot line that is 10 feet wide. Each\
    \ creature in that line must make a DC 27 Dexterity saving throw, taking 88 (16d10)\
    \ lightning damage on a failed save, or half as much damage on a successful one."
  "name": "Blue Dragon Head: Lightning Breath (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tiamat breathes poisonous gas in a 90-foot cone. Each creature in that\
    \ area must make a DC 27 Constitution saving throw, taking 77 (22d6) poison damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Green Dragon Head: Poison Breath (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tiamat breathes fire in a 90-foot cone. Each creature in that area must\
    \ make a DC 27 Dexterity saving throw, taking 91 (26d6) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Red Dragon Head: Fire Breath (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tiamat breathes an icy blast in a 90-foot cone. Each creature in that area\
    \ must make a DC 27 Dexterity saving throw, taking 72 (16d8) cold damage on a\
    \ failed save, or half as much damage on a successful one."
  "name": "White Dragon Head: Cold Breath (Costs 2 Actions)"
"source":
- "RoT"
- "BGDIA"
- "ToD"
name: Tiamat
image: "[[Tiamat.png]]"
---

# Tiamat

```statblock
"name": "Tiamat"
"size": "Gargantuan"
"type": "fiend"
"alignment": "Chaotic Evil"
"ac": !!int "25"
"hp": !!int "615"
"hit_dice": "30d20 + 300"
"stats":
- !!int "30"
- !!int "10"
- !!int "30"
- !!int "26"
- !!int "26"
- !!int "28"
"speed": "walk 60 ft., fly 120 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "17"
  "Strength": !!int "19"
"skillsaves":
  "Religion": !!int "17"
  "Perception": !!int "26"
  "Arcana": !!int "17"
"damage_immunities": "acid; cold; fire; lightning; poison; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"condition_immunities": "blinded, charmed, deafened, frightened, poisoned, stunned"
"senses": "darkvision 240 ft., truesight 120 ft., passive Perception 36"
"languages": "Common, Draconic, Infernal"
"cr": "30"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tiamat can innately cast the following spell, her spellcasting ability\
    \ is Charisma (spell save DC 26):\n\n3/day: [divine word](/compendium/spells/divine-word.md)"
  "name": "innate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "When Tiamat drops to 0 hit points or dies, her body is destroyed but her\
    \ essence travels back to her domain in the Nine Hells, and she is unable to take\
    \ physical form for a time."
  "name": "Discorporation"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Tiamat fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (5/Day)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Unless she wishes to be affected, Tiamat is immune to spells of 6th level\
    \ or lower. She has advantage on saving throws against all other spells and magical\
    \ effects."
  "name": "Limited Magic Immunity"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tiamat's weapon attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tiamat can take one reaction per turn, rather than only one per round.\
    \ She also has advantage on saving throws against being knocked [unconscious](/rules/conditions.md#unconscious).\
    \ If she fails a saving throw against an effect that would stun a creature, one\
    \ of her unspent legendary actions is spent."
  "name": "Multiple Heads"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tiamat regains 30 hit points at the start of her turn."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tiamat can use her Frightful Presence. She then makes three attacks: two\
    \ with her claws and one with her tail."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 24 (4d6\
    \ + 10) slashing damage."
  "name": "Claw"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 25 ft., one target. Hit: 28 (4d8\
    \ + 10) piercing damage."
  "name": "Tail"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Each creature of Tiamat's choice that is within 240 feet of Tiamat and\
    \ aware of her must succeed on a DC 26 Wisdom saving throw or become [frightened](/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Tiamat's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 32 (4d10\
    \ + 10) slashing damage plus 14 (4d6) acid damage (black dragon head), lightning\
    \ damage (blue dragon head), poison damage (green dragon head), fire damage (red\
    \ dragon head), or cold damage (white dragon head)."
  "name": "Bite"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tiamat breathes acid in a 120-foot line that is 10 feet wide. Each creature\
    \ in that line must make a DC 27 Dexterity saving throw, taking 67 (15d8) acid\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Black Dragon Head: Acid Breath (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tiamat breathes lightning in a 120-foot line that is 10 feet wide. Each\
    \ creature in that line must make a DC 27 Dexterity saving throw, taking 88 (16d10)\
    \ lightning damage on a failed save, or half as much damage on a successful one."
  "name": "Blue Dragon Head: Lightning Breath (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tiamat breathes poisonous gas in a 90-foot cone. Each creature in that\
    \ area must make a DC 27 Constitution saving throw, taking 77 (22d6) poison damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Green Dragon Head: Poison Breath (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tiamat breathes fire in a 90-foot cone. Each creature in that area must\
    \ make a DC 27 Dexterity saving throw, taking 91 (26d6) fire damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Red Dragon Head: Fire Breath (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Tiamat breathes an icy blast in a 90-foot cone. Each creature in that area\
    \ must make a DC 27 Dexterity saving throw, taking 72 (16d8) cold damage on a\
    \ failed save, or half as much damage on a successful one."
  "name": "White Dragon Head: Cold Breath (Costs 2 Actions)"
"source":
- "RoT"
- "BGDIA"
- "ToD"
"image": "[[Tiamat.png]]"
```
^statblock

*Source: The Rise of Tiamat p. 92, Baldur's Gate: Descent Into Avernus, Tyranny of Dragons p. 180*