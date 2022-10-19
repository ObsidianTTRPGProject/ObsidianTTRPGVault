---
cssclass: json5e-monster
tags:
- compendium/src/wdh
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Hlam"]
statblock: true
"name": "Hlam"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Good"
"ac": !!int "22"
"hp": !!int "137"
"hit_dice": "25d8 + 25"
"stats":
- !!int "11"
- !!int "24"
- !!int "13"
- !!int "14"
- !!int "21"
- !!int "14"
"speed": "walk 60 ft."
"saves":
  "Dexterity": !!int "12"
  "Strength": !!int "5"
"skillsaves":
  "Athletics": !!int "5"
  "Religion": !!int "7"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "passive Perception 15"
"languages": "all spoken languages"
"cr": "16"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hlam is a 5th-level spellcaster. His spellcasting ability is Wisdom (spell\
    \ save DC 18, +10 to hit with spell attacks) He has the following cleric spells\
    \ prepared:\n\nCantrips (at will): [guidance](/compendium/spells/guidance.md),\
    \ [light](/compendium/spells/light.md), [sacred flame](/compendium/spells/sacred-flame.md),\
    \ [spare the dying](/compendium/spells/spare-the-dying.md)\n\n1st level (4 1st-level\
    \ slots): [detect evil and good](/compendium/spells/detect-evil-and-good.md),\
    \ [healing word](/compendium/spells/healing-word.md), [sanctuary](/compendium/spells/sanctuary.md),\
    \ [shield of faith](/compendium/spells/shield-of-faith.md)\n\n2nd level (3 2nd-level\
    \ slots): [calm emotions](/compendium/spells/calm-emotions.md), [prayer of healing](/compendium/spells/prayer-of-healing.md),\
    \ [silence](/compendium/spells/silence.md)\n\n3rd level (2 3rd-level slots):\
    \ [protection from energy](/compendium/spells/protection-from-energy.md), [remove\
    \ curse](/compendium/spells/remove-curse.md), [sending](/compendium/spells/sending.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Hlam is subjected to an effect that allows him to make a Dexterity saving\
    \ throw to take only half damage, he instead takes no damage if he succeeds on\
    \ the saving throw, and only half damage if he fails. He can't use this trait\
    \ if he's [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Evasion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hlam's unarmed strikes are magical."
  "name": "Magic Attacks"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Hlam is wearing no armor and wielding no shield, his AC includes\
    \ his Wisdom modifier."
  "name": "Unarmored Defense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hlam attacks three times using his unarmed strike, darts, or both."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 12 (1d10\
    \ + 7) bludgeoning, magic damage. If the target is a creature, Hlam can choose\
    \ one of the following additional effects:\n\nThe target must succeed on a DC\
    \ 18 Strength saving throw or drop one item it is holding (Hlam's choice).\n\n\
    The target must succeed on a DC 18 Dexterity saving throw or be knocked [prone](/rules/conditions.md#prone).\n\
    \nThe target must succeed on a DC 18 Constitution saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ until the end of Hlam's next turn."
  "name": "Unarmed Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +12 to hit, range 20/60 ft., one target. Hit: 9\
    \ (1d4 + 7) piercing damage."
  "name": "Dart"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one creature. Hit: The\
    \ target must make a DC 18 Constitution saving throw. On a failed save, the target\
    \ is reduced to 0 hit points. On a successful save, the target takes 55 (10d10)\
    \ necrotic damage."
  "name": "Quivering Palm (Recharge 6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hlam regains 60 hit points."
  "name": "Wholeness of Body (Recharges after a Long Rest)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to being hit by a ranged weapon attack, Hlam deflects the missile.\
    \ The damage he takes from the attack is reduced by 1d10 + 27. If the damage is\
    \ reduced to 0, Hlam catches the missile if it's small enough to hold in one hand\
    \ and he has a hand free."
  "name": "Deflect Missile"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hlam reduces the bludgeoning damage he takes from a fall by 100."
  "name": "Slow Fall"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hlam moves up to his speed without provoking opportunity attacks."
  "name": "Quick Step"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hlam makes one unarmed strike."
  "name": "Unarmed Strike (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hlam becomes [invisible](/rules/conditions.md#invisible) until the end\
    \ of his next turn. The effect ends if Hlam attacks or casts a spell."
  "name": "Invisibility (Costs 3 Actions)"
"source":
- "WDH"
name: Hlam
image: "[[Hlam.png]]"
---

# Hlam

```statblock
"name": "Hlam"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Good"
"ac": !!int "22"
"hp": !!int "137"
"hit_dice": "25d8 + 25"
"stats":
- !!int "11"
- !!int "24"
- !!int "13"
- !!int "14"
- !!int "21"
- !!int "14"
"speed": "walk 60 ft."
"saves":
  "Dexterity": !!int "12"
  "Strength": !!int "5"
"skillsaves":
  "Athletics": !!int "5"
  "Religion": !!int "7"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "passive Perception 15"
"languages": "all spoken languages"
"cr": "16"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hlam is a 5th-level spellcaster. His spellcasting ability is Wisdom (spell\
    \ save DC 18, +10 to hit with spell attacks) He has the following cleric spells\
    \ prepared:\n\nCantrips (at will): [guidance](/compendium/spells/guidance.md),\
    \ [light](/compendium/spells/light.md), [sacred flame](/compendium/spells/sacred-flame.md),\
    \ [spare the dying](/compendium/spells/spare-the-dying.md)\n\n1st level (4 1st-level\
    \ slots): [detect evil and good](/compendium/spells/detect-evil-and-good.md),\
    \ [healing word](/compendium/spells/healing-word.md), [sanctuary](/compendium/spells/sanctuary.md),\
    \ [shield of faith](/compendium/spells/shield-of-faith.md)\n\n2nd level (3 2nd-level\
    \ slots): [calm emotions](/compendium/spells/calm-emotions.md), [prayer of healing](/compendium/spells/prayer-of-healing.md),\
    \ [silence](/compendium/spells/silence.md)\n\n3rd level (2 3rd-level slots):\
    \ [protection from energy](/compendium/spells/protection-from-energy.md), [remove\
    \ curse](/compendium/spells/remove-curse.md), [sending](/compendium/spells/sending.md)"
  "name": "spells"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If Hlam is subjected to an effect that allows him to make a Dexterity saving\
    \ throw to take only half damage, he instead takes no damage if he succeeds on\
    \ the saving throw, and only half damage if he fails. He can't use this trait\
    \ if he's [incapacitated](/rules/conditions.md#incapacitated)."
  "name": "Evasion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hlam's unarmed strikes are magical."
  "name": "Magic Attacks"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "While Hlam is wearing no armor and wielding no shield, his AC includes\
    \ his Wisdom modifier."
  "name": "Unarmored Defense"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hlam attacks three times using his unarmed strike, darts, or both."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 12 (1d10\
    \ + 7) bludgeoning, magic damage. If the target is a creature, Hlam can choose\
    \ one of the following additional effects:\n\nThe target must succeed on a DC\
    \ 18 Strength saving throw or drop one item it is holding (Hlam's choice).\n\n\
    The target must succeed on a DC 18 Dexterity saving throw or be knocked [prone](/rules/conditions.md#prone).\n\
    \nThe target must succeed on a DC 18 Constitution saving throw or be [stunned](/rules/conditions.md#stunned)\
    \ until the end of Hlam's next turn."
  "name": "Unarmed Strike"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +12 to hit, range 20/60 ft., one target. Hit: 9\
    \ (1d4 + 7) piercing damage."
  "name": "Dart"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one creature. Hit: The\
    \ target must make a DC 18 Constitution saving throw. On a failed save, the target\
    \ is reduced to 0 hit points. On a successful save, the target takes 55 (10d10)\
    \ necrotic damage."
  "name": "Quivering Palm (Recharge 6)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hlam regains 60 hit points."
  "name": "Wholeness of Body (Recharges after a Long Rest)"
"reactions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "In response to being hit by a ranged weapon attack, Hlam deflects the missile.\
    \ The damage he takes from the attack is reduced by 1d10 + 27. If the damage is\
    \ reduced to 0, Hlam catches the missile if it's small enough to hold in one hand\
    \ and he has a hand free."
  "name": "Deflect Missile"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hlam reduces the bludgeoning damage he takes from a fall by 100."
  "name": "Slow Fall"
"legendary_actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hlam moves up to his speed without provoking opportunity attacks."
  "name": "Quick Step"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hlam makes one unarmed strike."
  "name": "Unarmed Strike (Costs 2 Actions)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Hlam becomes [invisible](/rules/conditions.md#invisible) until the end\
    \ of his next turn. The effect ends if Hlam attacks or casts a spell."
  "name": "Invisibility (Costs 3 Actions)"
"source":
- "WDH"
"image": "[[Hlam.png]]"
```
^statblock

*Source: Waterdeep: Dragon Heist p. 204*

## Description

This venerable human monk lives in a cave halfway up the side of Mount Waterdeep. Hlam is the grand master of the Order of the Even-Handed, a small monastic group devoted to Tyr. Would-be students periodically visit him to learn the Way of the Sacred Fists, which combines cleric magic and monk training. They usually return to the city confused, bruised, and not inclined to visit again.

In times of great peril, Hlam can be called on to help. Sometimes he offers pearls of wisdom, and sometimes he descends from his cave to set things right with fisticuffs. He can show up at any point in the story as a helpful figure, and the characters can visit him in his cave if they need guidance or training. The Order of the Gauntlet considers him a staunch ally.

Hlam is immune to disease and doesn't require food or water. Although he ages, he suffers none of the frailty of old age.