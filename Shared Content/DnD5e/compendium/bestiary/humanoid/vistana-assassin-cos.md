---
cssclass: json5e-monster
tags:
- compendium/src/cos
- monster/size/medium
- monster/type/humanoid/any-race
- monster/environment/urban
aliases: ["Vistana Assassin"]
statblock: true
"name": "Vistana Assassin"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Good alignment"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "6"
  "Intelligence": !!int "4"
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "9"
  "Perception": !!int "3"
  "Acrobatics": !!int "6"
"damage_resistances": "poison"
"senses": "passive Perception 13"
"languages": "Thieves' cant plus any two languages"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "During its first turn, the assassin has advantage on attack rolls against\
    \ any creature that hasn't taken a turn. Any hit the assassin scores against a\
    \ surprised creature is a critical hit."
  "name": "Assassinate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the assassin is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, the assassin instead takes no damage\
    \ if it succeeds on the saving throw, and only half damage if it fails."
  "name": "Evasion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The assassin deals an extra 14 (4d6) damage when it hits a target with\
    \ a weapon attack and has advantage on the attack roll, or when the target is\
    \ within 5 feet of an ally of the assassin that isn't [incapacitated](/rules/conditions.md#incapacitated)\
    \ and the assassin doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The assassin makes two shortsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage, and the target must make a DC 15 Constitution saving throw,\
    \ taking 24 (7d6) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7\
    \ (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving\
    \ throw, taking 24 (7d6) poison damage on a failed save, or half as much damage\
    \ on a successful one."
  "name": "Light Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Vistana targets one creature that it can see within 30 feet of it.\
    \ The target must succeed on a DC 11 Wisdom saving throw or be cursed. The Vistana\
    \ chooses the curse's effect from the options that follow; other Vistani curses\
    \ are possible. All such effects deal psychic damage to the Vistani who uttered\
    \ them when they end:\n\n- The target is unable to perform a certain kind of act\
    \ involving fine motor control, such as tying knots, writing, playing an instrument,\
    \ sewing, or casting spells that have somatic components. When this curse ends,\
    \ the Vistana takes 1d6 psychic damage.\n- The target's appearance changes in\
    \ a sinister yet purely cosmetic way. For example, the curse can place a scar\
    \ on the target's face, turn the target's teeth into yellow fangs, or give the\
    \ target bad breath. When this curse ends, the Vistana takes 1d6 psychic damage.\n\
    - A nonmagical item in the target's possession (chosen by the DM) disappears and\
    \ can't be found until the curse ends. The lost item can weigh no more than 1\
    \ pound. When this curse ends, the Vistana takes 1d6 psychic damage.\n- The target\
    \ gains vulnerability to a damage type of the Vistana's choice. When this curse\
    \ ends, the Vistana takes 3d6 psychic damage.\n- The target has disadvantage on\
    \ ability checks and saving throws tied to one ability score of the Vistana's\
    \ choice. When this curse ends, the Vistana takes 3d6 psychic damage.\n- The target's\
    \ attunement to one magic item (chosen by the DM) ends, and the target can't attune\
    \ to the chosen item until the curse ends. When this curse ends, the Vistana takes\
    \ 5d6 psychic damage.\n- The target is [blinded](/rules/conditions.md#blinded),\
    \ [deafened](/rules/conditions.md#deafened), or both. When this curse ends, the\
    \ Vistana takes 5d6 psychic damage.\n\nThe curse lasts until ended with a [greater\
    \ restoration](/compendium/spells/greater-restoration.md) spell, a [remove curse](/compendium/spells/remove-curse.md)\
    \ spell, or similar magic. It doesn't end when the target dies. If a cursed target\
    \ is returned to life, the curse remains in effect."
  "name": "Curse (Recharges After a Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As an action, a Vistana can target a creature within 10 feet that the Vistana\
    \ can see. This magical ability, which the Vistani call the Evil Eye, duplicates\
    \ the duration and effect of the [animal friendship](/compendium/spells/animal-friendship.md),\
    \ [charm person](/compendium/spells/charm-person.md), or [hold person](/compendium/spells/hold-person.md)\
    \ spell (Vistana's choice; spell DC 11), but requires neither somatic nor material\
    \ components. If the target succeeds on the save, the Vistana is [blinded](/rules/conditions.md#blinded)\
    \ until the end of the Vistana's next turn.\n\nA Vistana who uses Evil Eye can't\
    \ use it again before finishing a short or long rest. Once a target succeeds on\
    \ a saving throw against a Vistana's Evil Eye, it is immune to the Evil Eye of\
    \ all Vistani for 24 hours."
  "name": "Evil Eye (Recharges after a Short or Long Rest)"
"source":
- "CoS"
name: Vistana Assassin
image: "[[Vistana Assassin.png]]"
---

# Vistana Assassin

```statblock
"name": "Vistana Assassin"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Good alignment"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "6"
  "Intelligence": !!int "4"
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "9"
  "Perception": !!int "3"
  "Acrobatics": !!int "6"
"damage_resistances": "poison"
"senses": "passive Perception 13"
"languages": "Thieves' cant plus any two languages"
"cr": "8"
"traits":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "During its first turn, the assassin has advantage on attack rolls against\
    \ any creature that hasn't taken a turn. Any hit the assassin scores against a\
    \ surprised creature is a critical hit."
  "name": "Assassinate"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "If the assassin is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, the assassin instead takes no damage\
    \ if it succeeds on the saving throw, and only half damage if it fails."
  "name": "Evasion"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The assassin deals an extra 14 (4d6) damage when it hits a target with\
    \ a weapon attack and has advantage on the attack roll, or when the target is\
    \ within 5 feet of an ally of the assassin that isn't [incapacitated](/rules/conditions.md#incapacitated)\
    \ and the assassin doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
"actions":
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The assassin makes two shortsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage, and the target must make a DC 15 Constitution saving throw,\
    \ taking 24 (7d6) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Shortsword"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7\
    \ (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving\
    \ throw, taking 24 (7d6) poison damage on a failed save, or half as much damage\
    \ on a successful one."
  "name": "Light Crossbow"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "The Vistana targets one creature that it can see within 30 feet of it.\
    \ The target must succeed on a DC 11 Wisdom saving throw or be cursed. The Vistana\
    \ chooses the curse's effect from the options that follow; other Vistani curses\
    \ are possible. All such effects deal psychic damage to the Vistani who uttered\
    \ them when they end:\n\n- The target is unable to perform a certain kind of act\
    \ involving fine motor control, such as tying knots, writing, playing an instrument,\
    \ sewing, or casting spells that have somatic components. When this curse ends,\
    \ the Vistana takes 1d6 psychic damage.\n- The target's appearance changes in\
    \ a sinister yet purely cosmetic way. For example, the curse can place a scar\
    \ on the target's face, turn the target's teeth into yellow fangs, or give the\
    \ target bad breath. When this curse ends, the Vistana takes 1d6 psychic damage.\n\
    - A nonmagical item in the target's possession (chosen by the DM) disappears and\
    \ can't be found until the curse ends. The lost item can weigh no more than 1\
    \ pound. When this curse ends, the Vistana takes 1d6 psychic damage.\n- The target\
    \ gains vulnerability to a damage type of the Vistana's choice. When this curse\
    \ ends, the Vistana takes 3d6 psychic damage.\n- The target has disadvantage on\
    \ ability checks and saving throws tied to one ability score of the Vistana's\
    \ choice. When this curse ends, the Vistana takes 3d6 psychic damage.\n- The target's\
    \ attunement to one magic item (chosen by the DM) ends, and the target can't attune\
    \ to the chosen item until the curse ends. When this curse ends, the Vistana takes\
    \ 5d6 psychic damage.\n- The target is [blinded](/rules/conditions.md#blinded),\
    \ [deafened](/rules/conditions.md#deafened), or both. When this curse ends, the\
    \ Vistana takes 5d6 psychic damage.\n\nThe curse lasts until ended with a [greater\
    \ restoration](/compendium/spells/greater-restoration.md) spell, a [remove curse](/compendium/spells/remove-curse.md)\
    \ spell, or similar magic. It doesn't end when the target dies. If a cursed target\
    \ is returned to life, the curse remains in effect."
  "name": "Curse (Recharges After a Long Rest)"
- !!dev.ebullient.json5e.qute.Trait
  "desc": "As an action, a Vistana can target a creature within 10 feet that the Vistana\
    \ can see. This magical ability, which the Vistani call the Evil Eye, duplicates\
    \ the duration and effect of the [animal friendship](/compendium/spells/animal-friendship.md),\
    \ [charm person](/compendium/spells/charm-person.md), or [hold person](/compendium/spells/hold-person.md)\
    \ spell (Vistana's choice; spell DC 11), but requires neither somatic nor material\
    \ components. If the target succeeds on the save, the Vistana is [blinded](/rules/conditions.md#blinded)\
    \ until the end of the Vistana's next turn.\n\nA Vistana who uses Evil Eye can't\
    \ use it again before finishing a short or long rest. Once a target succeeds on\
    \ a saving throw against a Vistana's Evil Eye, it is immune to the Evil Eye of\
    \ all Vistani for 24 hours."
  "name": "Evil Eye (Recharges after a Short or Long Rest)"
"source":
- "CoS"
"image": "[[Vistana Assassin.png]]"
```
^statblock

*Source: Curse of Strahd p. 28*

## Environment

urban